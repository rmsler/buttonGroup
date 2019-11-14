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
var buttons= new Array();
var userdata = $.getJSON("config.json", function (data) {
    values = data["buttons"];
    $.each(values, function (index, value){
        buttons[index] = new Button(value);
        console.log(buttons[index]);
    });
});
console.log(buttons);
console.log(typeof(buttons));
$(document).ready(function(){
    $(".button-type").click(function(){
        $(this).text() === 'Radio buttons' ? 
        ($(this).text('Checkboxes'), $(this).removeClass("radios").addClass("checkboxes")) :  
        ($(this).text('Radio buttons'),$(this).removeClass("checkboxes").addClass("radios"))
    });
});

