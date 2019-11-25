import {Button} from "./Button.js";

function GroupButton(buttonsArray){
    if (!(this instanceof GroupButton)) { 
        return new GroupButton(buttonsArray);
    }
    this.buttonsArray = buttonsArray;
    this.btnArray = [];
    this.mode = null;
    // this.init();
}

GroupButton.modes = {
    CHECKBOX: "checkboxes",
    RADIO: "radio"
}

Object.assign(GroupButton.prototype, {
    init: function(node) {
    //iterate and construct models
        let defaultMode = GroupButton.modes.CHECKBOX;
        let btnArray = this.btnArray;
        let changeModeCallback = this.clickButton.bind(this);
        $.each(this.buttonsArray["buttons"], function (index, value){
            btnArray[index] = new Button(value, changeModeCallback);
        });
        this.mode = defaultMode;
        this.renderElements(node, btnArray);

    },
    toggleMode : function(event) {
        let toggleDomReference = event.target;
        if (this.mode === GroupButton.modes.CHECKBOX) {
            this.mode = GroupButton.modes.RADIO;
        } else if (this.mode === GroupButton.modes.RADIO) {
            this.mode = GroupButton.modes.CHECKBOX;
        }
        toggleDomReference.innerHTML = this.mode;
        this.resetButtonsState();
    },
    isRadio: function() {
        return this.mode === GroupButton.modes.RADIO;
    },
    renderElements : function(wrapper, array) {
        $.each(array, function (index, value){
            let button = value.render(index);
            $(wrapper).append(button);
        });
    },

    resetButtonsState: function() {
        this.btnArray.forEach(btn => {
            btn.state = false;
            btn.updateVisual();
        })
    },

    clickButton : function(element) {
        let index = element[element.search("button") + 6];
        let boundResetState = this.resetButtonsState.bind(this);
        
        if(this.isRadio()) {
            boundResetState();
            this.btnArray[index].state = true;
        } 
        
    }
});

export { GroupButton };