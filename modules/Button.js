
function Button(config, changeStateCallback) {
    if (!(this instanceof Button)) { 
        return new Button(config, changeStateCallback);
    }
    this.name = config.Name || "button";
    this.state = config.Selected ;
    this.class = config.CustomClass;
    this.changeStateCallback = changeStateCallback;
};
Button.prototype.onClick = function() {
    this.state = !this.state;
    this.changeStateCallback();
}
Button.prototype.init = () =>{
    
}

export { Button };