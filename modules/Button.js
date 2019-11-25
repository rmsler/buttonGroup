
function Button(config, changeStateCallback) {
    if (!(this instanceof Button)) { 
        return new Button(config, changeStateCallback);
    }
    this.name = config.Name || "Button";
    this.state = config.Selected ;
    this.class = config.CustomClass;
    this.changeStateCallback = changeStateCallback;
    this.domReference = null;
};
Object.assign(Button.prototype, {
    onClick: function(event) {
        // console.log("clasName: "+ event.target.className);
        this.state = !this.state;
        this.changeStateCallback(event.target.className);
        this.updateVisual();
    },

    updateVisual: function() {
        this.domReference.classList.remove(String(!this.state))
        this.domReference.classList.add(String(this.state));
    },

    render: function(labelNo) {
        let label = "button" + labelNo;
        let domElement = document.createElement("div");
        domElement.classList.add(this.class);
        domElement.classList.add("btn");
        domElement.classList.add(this.state);
        domElement.classList.add(label);
        let textchild = document.createTextNode(this.name);
        domElement.appendChild(textchild);
        domElement.addEventListener("click", this.onClick.bind(this));
        this.domReference = domElement;
        return domElement
    }
});
export { Button };