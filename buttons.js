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
var GroupButton = function(array){
    if (!(this instanceof GroupButton)) { 
        return new GroupButton(array);
      }
    this.array = array;
    this.changeMode = () =>{
        $.each(this.array, function (index, value){
            value.state = false;
        });
        return this.array;
    }
    this.clickButton = (index) =>{
        if(this.array[index].state === false){
            if($(".button-type").text().toLowerCase() !== 'checkboxes'){
                $.each(this.array, function (counter,value){
                    value.state = false
                });
            }
        }
        this.array[index].state = !this.array[index].state;
        return this.array;
    }
    this.returnNamesForState = (state) =>{
        let buttons = new Array();
        $.each(this.array, function (index, value){
            if (value.state === state) buttons.push(value.name)  ;
        });
        return buttons;
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
    group = new GroupButton(buttons);
    console.log(buttons);
});
$(document).ready(function(){
    $(".button-type").click(function(){
        $(this).text() === 'Radio buttons' ? 
        ($(this).text('Checkboxes'), $(this).removeClass("radios").addClass("checkboxes"), group.changeMode()) :  
        ($(this).text('Radio buttons'),$(this).removeClass("checkboxes").addClass("radios"), group.changeMode())
    });
    $(".btn-group").
});

