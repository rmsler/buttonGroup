
function Button(config, changeStateCallback) {
    if (!(this instanceof Button)) { 
        return new Button(config, changeStateCallback);
    }
    this.name = config.Name || "button";
    this.state = config.Selected ;
    this.class = config.CustomClass;
    this.changeStateCallback = changeStateCallback;
};
Object.assign(Button.prototype, {
    onClick: function(event) {
        this.state = !this.state;
        this.changeStateCallback(event.target);
    }
});
export { Button };