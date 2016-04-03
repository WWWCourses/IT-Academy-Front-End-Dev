window.onload = function(){
    init();
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
    elementList = document.querySelectorAll('.iep_syllabus_themes>li>h3');
    for (var i = 0; i < elementList.length; i++) {
        var element = elementList[i];
        element.addEventListener( "click", function(){
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
        var current_days = Math.round( current_hours / 4 );
        hours_nodes[i].title = "day:" + current_days;
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
