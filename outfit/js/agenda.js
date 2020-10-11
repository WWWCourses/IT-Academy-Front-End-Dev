"use strict";

// DOM cache
var articles = document.querySelectorAll(".themes>article")
var themes = document.querySelectorAll('.themes>article>section');
var subThemes = document.querySelectorAll('.themes>article>section>ol');
var toggleButtonsDiv = document.querySelector('.toggleButtons');
let toggleButtonsTopOffset = toggleButtonsDiv.offsetTop;

var hours_per_day = 4;
themes.shown = true;
subThemes.shown = true;


window.onload = function(){
    init();
}
function init(){
    attachEvents();
    // setThemeURL();
    setThemeHours();
    calcTotalHours();
    calcTotalDays();
    // hideAllNodes(themes);
    // hideAllNodes(subThemes);

    if (document.documentElement.clientWidth > 700) {
        calcSectionHours();
    }
}
function attachEvents(){
    // onclick to themes/sub-themes titles:
    var titleNodes = document.querySelectorAll('.themes>article>h1, .themes>article h3');
    for (let i = 0; i < titleNodes.length; i++) {
        let titleNode = titleNodes[i];

        // do not add click on empty lists and remove the arrow class on that title:
        if(titleNode.nextElementSibling && titleNode.nextElementSibling.tagName === "OL" && titleNode.nextElementSibling.children.length === 0){
            titleNode.className = "";
            continue;
        }

        // but add to all others
        titleNode.addEventListener( "click", function(){
            showHideNodes(getNextSiblings(this));
        });
    };

    // onclick to toggleThemes
    var toggleThemes = document.querySelectorAll('.toggleThemes');
    for (let i = 0; i < toggleThemes.length; i++) {
        let element = toggleThemes[i];
        element.addEventListener( "click", function(){
            showHideAll( element, themes );
        });
    };

    // onclick to toggleSubThemes
    var togglesubThemes = document.querySelectorAll('.toggleSubThemes');
    for (let i = 0; i < togglesubThemes.length; i++) {
        let element = togglesubThemes[i];
        element.addEventListener( "click", function(){
            showHideAll( element, subThemes );
        });
    };

    // on scroll => toggleButtons displayed as header:
    window.addEventListener('scroll', function(e){
        // console.dir(toggleButtonsDiv);
        let topScroll = document.documentElement.scrollTop;

        if(topScroll > toggleButtonsTopOffset - 32){
            toggleButtonsDiv.classList.add('header')
        }else{
            toggleButtonsDiv.classList.remove('header')
        }
    });
}

function setThemeURL(){
    // wrap H3 text into link, with href == section.id path
        // <h3 data-wip>__themeTitle__</h3> =>
        // <h3><a title="slides" href="/IT-Academy-JS-Fundamentals/pages/themes/__themeTitle__/__themeTitle__.html">__themeTitle__</a></h3>

    for (let i = 0, len = themes.length; i < len ; i++){
        // do not set link for elements in WIP mode:
        if( themes[i].hasAttribute("data-wip") ){
            continue;
        }

        let h3Node = themes[i].querySelector("h3");
        let h3_content = h3Node.innerHTML;

        // get section.id
        let themeTitle = themes[i].id;

        // create link node:
        let aNode = document.createElement('a');
        aNode.setAttribute("title", "slides");
        aNode.href = `pages/themes/${themeTitle}/${themeTitle}.html`;
        aNode.innerHTML = h3_content;

        // append it into h3 node
        h3Node.innerHTML = "";
        h3Node.appendChild(aNode);
    }
}

function setThemeHours(){
    // insert <span class=hours> after each h3 in each section:
    for(let i=0, len=themes.length; i<len; i++){
        // get themes hours from "data-hours" attribute:
        let hours = themes[i].getAttribute("data-hours");

        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'hours';
        outNode.innerHTML = hours;
        themes[i].children[0].appendChild(outNode);
    }
}
function calcSectionHours(){
    var currentSectionHours = 0;
    for (let i = 0, len = articles.length; i < len ; i++) {
        let sectionHours = 0;

        // create output node:
        var outNode = document.createElement('span');
        outNode.className = 'sectionHours';
        articles[i].children[0].appendChild(outNode);

        // calculate hours per section:
        var topicHoursNodes = articles[i].querySelectorAll(".hours");

        for (let i = 0, len = topicHoursNodes.length; i < len; i++) {
            sectionHours += topicHoursNodes[i].innerHTML*1;
        }

        currentSectionHours += sectionHours;

        // output
        outNode.title = "hours:" + currentSectionHours;
        outNode.title += "\n"+"day:" + currentSectionHours/hours_per_day;

        // outNode.innerHTML = "Total Section Hours: " + sectionHours;
        outNode.innerHTML = "Общо часове: " + sectionHours;
    };
}
function calcTotalHours(){
    var out_node = document.getElementById("total_hours");
    var hours_nodes = document.getElementsByClassName("hours");
    var total = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = hours_nodes[i].innerHTML*1 || 0; // cause of NaN
        total += theme_hours;
    };
    out_node.innerHTML = total;
}
function calcTotalDays(){
    var hours_nodes = document.getElementsByClassName("hours");
    var out_node = document.getElementById("total_days");
    var current_hours = 0;
    var total_days = 0;
    for (var i = 0,len=hours_nodes.length; i < len ; i++) {
        var theme_hours = hours_nodes[i].innerHTML*1 || 0; // cause of NaN
        current_hours += theme_hours;

        // calculate current days and show it as tooltip
        var current_days;


        current_days = current_hours / hours_per_day;
        current_days = Math.round(current_days * 10)/10

        // output
        hours_nodes[i].title = "hours:" + current_hours;
        hours_nodes[i].title += "\n"+"day:" + current_days;

        total_days = current_days;
    };

    // calculate total days
    out_node.innerHTML = total_days;
}

function showHideAll( clicked_node, effected_nodes ){
    // init static flag to show or hide all
    // showHideAll.show = (typeof showHideAll.show == 'undefined' ) ? false : showHideAll.show;
    if (effected_nodes.shown) {
        hideAllNodes(effected_nodes);
        effected_nodes.shown = false;
        clicked_node.title = 'Hide Subtopics';
    }else{
        showAllNodes(effected_nodes);
        effected_nodes.shown = true;
        clicked_node.title = 'Show Subtopics';
    }
}
function showAllNodes ( effected_nodes){
    for (var i = 0; i < effected_nodes.length; i++) {
        showNode(effected_nodes[i]);
    };
}
function hideAllNodes ( effected_nodes){
    for (var i = 0; i < effected_nodes.length; i++) {
        // skip for empty lists:
        if(effected_nodes[i].tagName === "OL" && effected_nodes[i].children.length === 0){
            continue;
        }
        hideNode(effected_nodes[i]);
    };
}
function showHideNodes(effected_nodes){
    effected_nodes.forEach( function(effected_node){
        if ( effected_node.classList.contains("hidden") ){
            showNode(effected_node);
            effected_node.previousElementSibling.title = 'Hide Subtopics';
        }else {
            hideNode(effected_node);
            effected_node.previousElementSibling.title = 'Show Subtopics';
        }
    });
}
function showNode(effected_node){
    effected_node.classList.remove("hidden");

    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Hide Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
    changeArrow( arr_node, 'up');
};
function hideNode (effected_node) {
    effected_node.classList.add("hidden");

    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Show Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByTagName("h3")[0];
    changeArrow( arr_node, 'down');
}
function changeArrow ( node, direction ) {
    if ( direction == 'up' ){
        node.classList.remove("arrow_down");
        node.classList.add("arrow_up");
    }else{
        node.classList.remove("arrow_up");
        node.classList.add("arrow_down");
    }
}



