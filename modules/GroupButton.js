function GroupButton(array){
    if (!(this instanceof GroupButton)) { 
        return new GroupButton(array);
      }
    this.array = [];
    this.init();
}

Object.assign(GroupButton.prototype, {
    init: function() {
    //iterate and construct models
    //render (construct dom elements)
        //before attaching nodes, label them
    },
    changeMode : function() {
        $.each(this.array, function (index, value){
            value.state = false;
        });
        return this.array;
    },
    renderElements : function(node) {
        // parent.appendChild(child);
        $.each(this.array, function (index, value){
            let child = document.createElement("div");
            child.classList.add(value.class).add(value.state);
            let textchild = document.createTextNode(value.name);
            child.appendChild(textchild);    
            node.appendChild(child);
        });
    },
    clickButton : function(index) {
        if(this.array[index].state === false){
            if($(".button-type").text().toLowerCase() !== 'checkboxes'){
                $.each(this.array, function (counter,value){
                    value.state = false
                });
            }
        }
        this.array[index].state = !this.array[index].state;
        return this.array;
    },
    returnNamesForState : function(state) {
        let buttons = new Array();
        $.each(this.array, function (index, value){
            if (value.state === state) buttons.push(value.name)  ;
        });
        return buttons;
    }
    
});

export { GroupButton };