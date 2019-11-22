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
        let btnArray = this.btnArray;
        let changeModeCallback = this.clickButton.bind(this);
        $.each(this.buttonsArray["buttons"], function (index, value){
            btnArray[index] = new Button(value, changeModeCallback);
        });
        console.log(btnArray);
        //render (construct dom elements)
            this.renderElements(node, btnArray);
            //before attaching nodes, label them
    },
    changeMode : function() {
        $.each(this.btnArray, function (index, value){
            value.state = false;
        });
        // return this.buttonsArray;
    },
    renderElements : function(node, array) {
        $.each(array, function (index, value){
            // console.log(value, index);
            let child = document.createElement("div");
            child.classList.add(value.class);
            child.classList.add("btn");
            child.classList.add(value.state);
            child.classList.add("button"+index);
            let textchild = document.createTextNode(value.name);
            child.appendChild(textchild);
            $(node).append(child);
            child.addEventListener("click", value.onClick.bind(value), false);
        });
    },
    clickButton : function(element) {
        let index = element[element.search("button") + 6];
        console.log(this.btnArray[index].state);
        if(this.btnArray[index].state === false){
            if($(".button-type").text().toLowerCase() !== 'checkboxes'){
                $.each(this.buttonsArray, function (counter, value){
                    value.state = false
                });
            }
        }
        this.btnArray[index].state = !this.btnArray[index].state;
        let elem = ".button"+ index;
        console.log($(elem));
        console.log($(elem).addClass(!this.btnArray[index].state));
        $(elem).removeClass(this.btnArray[index].state).addClass(!this.btnArray[index].state);
        // return this.buttonsArray;
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