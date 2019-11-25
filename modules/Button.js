
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
        console.log("clasName: "+ event.target.className);
        this.changeStateCallback(event.target.className);
        this.state = !this.state;
    }
});
export { Button };