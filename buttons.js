// var Button = function(config, changeStateCallback) {
//     if (!(this instanceof Button)) { 
//         return new Button(config, changeStateCallback);
//     }
//     this.name = config.Name || "button";
//     this.state = config.Selected ;
//     this.class = config.CustomClass;
//     this.changeStateCallback = changeStateCallback;
//     this.onClick = () => {
//         this.state = !this.state;
//         this.changeStateCallback();
//     };
//     this.init = () =>{};
// };
import {Button} from "./modules/Button.js/index.js"
import {GroupButton} from "./modules/GroupButton.js/index.js"
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

