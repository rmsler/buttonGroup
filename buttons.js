
import {GroupButton} from "./modules/GroupButton.js"

var group = new Object();

$.getJSON("config.json", function(data) {
    group = new GroupButton(data);
    group.init(".btn-group-toggle");
});

$(document).ready(function(){
    // group.renderElements($(".btn-group"));
    $(".button-type").click(function(event){
        group.toggleMode(event);
    });
});