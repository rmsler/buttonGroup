var GroupButton = function(array){
    if (!(this instanceof GroupButton)) { 
        return new GroupButton(array);
      }
    this.array = array;
}

GroupButton.prototype.changeMode = function() {
    $.each(this.array, function (index, value){
        value.state = false;
        console.log(value);
    });
    return this.array;
}
GroupButton.prototype.clickButton = function(index) {
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
GroupButton.prototype.returnNamesForState = function(state) {
    let buttons = new Array();
    $.each(this.array, function (index, value){
        if (value.state === state) buttons.push(value.name)  ;
    });
    return buttons;
}

export { GroupButton };