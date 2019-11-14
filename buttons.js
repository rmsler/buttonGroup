import {Button} from "./modules/Button.js"
import {GroupButton} from "./modules/GroupButton.js"

var group;

var userdata = $.getJSON("config.json", (data) => {
    let values = data["buttons"];
    let buttons = new Array();
    $.each(values, function (index, value){
        buttons[index] = new Button(value, this.updateGroupSelection);
        console.log(buttons[index]);
    });
    group = new GroupButton(buttons);
    console.log(buttons);
});
$(document).ready(function(){
    $(".button-type").click(function(){
        $(this).text() === 'Radio buttons' ? 
        ($(this).text('Checkboxes'), $(this).removeClass("radios").addClass("checkboxes"), group.changeMode()) :  
        ($(this).text('Radio buttons'),$(this).removeClass("checkboxes").addClass("radios"), group.changeMode())
    });
});

