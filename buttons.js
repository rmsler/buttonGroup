var Button = function(config) {
    if (!(this instanceof Button)) { 
        return new Button(config);
      }
    this.name = config.Name || "button";
    this.state = config.Selected ;
    this.class = config.CustomClass
    this.onClick = () => {
        this.state = !this.state;
    };
};
var GroupButton = function(array, mode){
    this.array = array;
    this.changeMode = () =>{
        $.each(this.array, function (index, value){
            value.state = false;
        });
        return this.array;
    }
    this.clickButton = (index) =>{
        if(this.array[index] === false){
            if(mode !== 'checkboxes'){
                $.each(array, function (counter,value){
                    value.state = false
                });
            }
        }
        this.array[index].state = !this.array[index].state;
        return this.array;
    }
}
var group;
var userdata = $.getJSON("config.json", function (data) {
    values = data["buttons"];
    let buttons = new Array();
    $.each(values, function (index, value){
        buttons[index] = new Button(value);
        console.log(buttons[index]);
    });
    let state = $(".button-type").text().toLowerCase();
    group = new GroupButton(buttons, state);
    console.log(buttons);
    console.log(typeof(buttons));
});
$(document).ready(function(){
    $(".button-type").click(function(){
        $(this).text() === 'Radio buttons' ? 
        ($(this).text('Checkboxes'), $(this).removeClass("radios").addClass("checkboxes"), group.changeMode()) :  
        ($(this).text('Radio buttons'),$(this).removeClass("checkboxes").addClass("radios"))
    });
});

