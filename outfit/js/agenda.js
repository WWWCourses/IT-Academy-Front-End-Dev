window.onload = function(){
    init();
    stg();
    stsc();
}
function stg(){
    var script = document.createElement('script');
    script.onload = function () {
        //do stuff with the script
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-121408697-1');
    };
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-121408697-1";

    document.head.appendChild(script);
}
var sc_project=11747234;
var sc_invisible=1;
var sc_security="d54d4f78";

function stsc(){
    var script = document.createElement('script');
    script.src = "https://www.statcounter.com/counter/counter.js";
    document.head.appendChild(script);

    var img = document.createElement('img');
    img.src = "http://c.statcounter.com/11747234/0/d54d4f78/1/"

    document.body.appendChild(img);
}
function init(){
    var sub_themes_nodes = document.getElementsByClassName('iep_syllabus_sub_themes');
    attachEvents();
    calcTotalHours();
    calcTotalDays();
    hideAllNodes( sub_themes_nodes );
}
function attachEvents(){
    // get elements to attach events to
    var themesItems = document.querySelectorAll('.iep_syllabus_themes>li');

    for (var i = 0, len = themesItems.length; i < len; i++) {
        var themeItem = themesItems[i];

        // animate slides icon to grab attention:
        themeItem.addEventListener( "mouseover", function(){
            // console.log("mouseon:", this);

            var n = this.querySelector("a.ready");
            if(n){
                grabAttnetion(n);
            }
        } );
        themeItem.addEventListener( "mouseout", function(){
            var n = this.querySelector("a.ready");
            if(n){
                freeAttnetion(n);
            }
        } );

        // show hide subthemes on click
        themeItem.children[0].addEventListener( "click", function(){
            showHideNode(this.nextElementSibling)
        });
    };
}
function calcTotalHours(){
    var out_node = document.getElementsByClassName("total_hours_value")[0];
    var hours_nodes = document.getElementsByClassName("hours");
    var total = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = parseInt(hours_nodes[i].innerHTML || 0); // cause of NaN
        total += theme_hours;
    };
    out_node.innerHTML = total;
}
function calcTotalDays(){
    var hours_nodes = document.getElementsByClassName("hours");
    var current_hours = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = parseInt(hours_nodes[i].innerHTML || 0); // cause of NaN
        current_hours += theme_hours;

        // calculate current days and show it as tooltip
        var current_days;
        var hours_per_day = 4;
        // if ( current_hours % hours_per_day > 0){
        //     current_days = Math.floor( current_hours / hours_per_day) + 1;
        // }else{
        //     current_days = Math.floor( current_hours / hours_per_day);
        // }

        // do not round:
        current_days = current_hours / hours_per_day;
        hours_nodes[i].title = `hours: ${current_hours}, days: ${current_days}`;
    };
}
function calcTotalDaysMod(){
    var hours_nodes = document.getElementsByClassName("hours");
    var current_hours = 0;
    for (var i = 0; i < hours_nodes.length; i++) {
        var theme_hours = parseInt(hours_nodes[i].innerHTML || 0); // cause of NaN
        current_hours += theme_hours;

        // calculate current days and show it as tooltip
        var current_days;
        var hours_per_day;

        if(current_hours <=60){
            hours_per_day = 4
        }else{
            hours_per_day = 5
        }


        // if ( current_hours % hours_per_day > 0){
        //     current_days = Math.floor( current_hours / hours_per_day) + 1;
        // }else{
        //     current_days = Math.floor( current_hours / hours_per_day);
        // }

        // do not round:
        // current_days = current_hours / hours_per_day;
        // hours_nodes[i].title = "day:" + current_days;
        hours_nodes[i].title = "hours:" + current_hours;
        console.log(`hours_per_day:${hours_per_day}; current_hours: ${current_hours}; current_days: ${current_days}`);
    };
}

function showHideAll(  ){
    var clicked_node = document.getElementsByClassName("iep_syllabus_title");
    var effected_nodes = document.getElementsByClassName('iep_syllabus_sub_themes');
    // init static flag to show or hide all
    showHideAll.show = (typeof showHideAll.show == 'undefined' ) ? true : showHideAll.show;
    if (showHideAll.show) {
        showAllNodes(effected_nodes);
        showHideAll.show = false;
        clicked_node.title = 'Hide Subtopics';
    }else{
        hideAllNodes(effected_nodes);
        showHideAll.show = true;
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
        hideNode(effected_nodes[i]);
    };
}
function showHideNode(effected_node){
    // console.log('showHideNode - effected_node:'+effected_node);
    if ( effected_node.style.display == 'none'){
        showNode(effected_node);
        effected_node.previousElementSibling.title = 'Hide Subtopics';
    }else {
        hideNode(effected_node);
        effected_node.previousElementSibling.title = 'Show Subtopics';
    }
}
function showNode(effected_node){
    // console.log("showNode IN: effected_node", effected_node);
    // show node
    effected_node.style.display = 'block';
    // set custom show flag as property
    effected_node.shown = true;
    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Hide Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByClassName("label")[0];
    changeArrow( arr_node, 'up');
};
function hideNode (effected_node) {
    // console.log("hideNode IN: effected_node", effected_node);
    // hide node
    effected_node.style.display = 'none';
    // set custom show flag as property
    effected_node.shown = false;
    // change title of the H3 element
    effected_node.parentElement.getElementsByTagName("h3")[0].title = 'Show Subtopics';
    // change arrow
    var arr_node = effected_node.parentElement.getElementsByClassName("label")[0];
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
function grabAttnetion( node ){
    // console.log("node = ", node);
    node.classList.add("grabAttnetion");
}
function freeAttnetion( node ){
    // console.log("node = ", node);
    node.classList.remove("grabAttnetion");
}