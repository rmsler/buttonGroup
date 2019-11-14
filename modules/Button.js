
var Button = function(config, changeStateCallback) {
    if (!(this instanceof Button)) { 
        return new Button(config, changeStateCallback);
    }
    this.name = config.Name || "button";
    this.state = config.Selected ;
    this.class = config.CustomClass;
    this.changeStateCallback = changeStateCallback;
    this.onClick = () => {
        this.state = !this.state;
        this.changeStateCallback();
    };
    this.init = () =>{};
};
export { Button };