
function Button(config, changeStateCallback) {
    if (!(this instanceof Button)) { 
        return new Button(config, changeStateCallback);
    }
    this.name = config.Name || "Button";
    this.state = config.Selected ;
    this.class = config.CustomClass;
    this.changeStateCallback = changeStateCallback;
};
Object.assign(Button.prototype, {
    onClick: function(event) {
        this.state = !this.state;
        console.log(event.target.className);
        this.changeStateCallback(event.target.className);
    }
});
export { Button };