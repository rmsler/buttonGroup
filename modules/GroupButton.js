import {Button} from "./Button.js"
function GroupButton(buttonsArray){
    if (!(this instanceof GroupButton)) { 
        return new GroupButton(buttonsArray);
    }
    this.buttonsArray = buttonsArray;
    this.btnArray = [];
    // this.init();
}

Object.assign(GroupButton.prototype, {
    init: function(node) {
    //iterate and construct models
        let btnArray = new Array();
        $.each(this.buttonsArray["buttons"], function (index, value){
            btnArray[index] = new Button(value, this.changeMode);
            
        });
        console.log(btnArray);
        //render (construct dom elements)
            this.renderElements(node, btnArray);
            //before attaching nodes, label them
    },
    changeMode : function() {
        $.each(this.buttonsArray, function (index, value){
            value.state = false;
        });
        return this.buttonsArray;
    },
    renderElements : function(node, array) {
        // parent.appendChild(child);
        $.each(array, function (index, value){
            console.log(value);
            let child = document.createElement("div");
            child.classList.add(value.class);
            child.classList.add("btn");
            child.classList.add(value.state);
            let textchild = document.createTextNode(value.name);
            child.appendChild(textchild);
            $(node).append(child);
        });
    },
    clickButton : function(index) {
        if(this.buttonsArray[index].state === false){
            if($(".button-type").text().toLowerCase() !== 'checkboxes'){
                $.each(this.buttonsArray, function (counter,value){
                    value.state = false
                });
            }
        }
        this.buttonsArray[index].state = !this.buttonsArray[index].state;
        return this.buttonsArray;
    },
    returnNamesForState : function(state) {
        let buttons = new Array();
        $.each(this.buttonsArray, function (index, value){
            if (value.state === state) buttons.push(value.name)  ;
        });
        return buttons;
    }
    
});

export { GroupButton };