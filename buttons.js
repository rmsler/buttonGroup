import {Button} from "./modules/Button.js"
import {GroupButton} from "./modules/GroupButton.js"

var group = new Object();

$.getJSON("config.json", function(data) {
    let buttons = new Array();
    $.each(data["buttons"], function (index, value){
        buttons[index] = new Button(value, this.updateGroupSelection);
        // console.log(buttons[index]);
    });
    group = new GroupButton(buttons);
    console.log(group);
});

$(document).ready(function(){
    // group.renderElements($(".btn-group"));
    $(".button-type").click(function(){
        $(this).text() === 'Radio buttons' ? 
        ($(this).text('Checkboxes'), $(this).removeClass("radios").addClass("checkboxes"), group.changeMode()) :  
        ($(this).text('Radio buttons'),$(this).removeClass("checkboxes").addClass("radios"), group.changeMode())
    });
});