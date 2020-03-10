// Button

import Equation from "./Expression.js/index.js";

export default class Button {

    _type;
    _value;

    constructor(button) {

        // get the properties from the incomming button
        this._type = button.dataset.type;
        this._value = button.textContent;

        // console.log(this._type);
        // console.log(this._value);
        // console.log("===========================");

        // assign an event listener, click handler for mouse/touch clicks.
        button.addEventListener("click", this.clickEventHandler)

    }

    // click event handler utilizing normal function syntax
    // #TODO: needs work, have to .bind()
    // clickEventHandler(event) {

    //     console.log(this._type);
    //     console.log(this._type);
    //     console.log("======================");

    // }

    // click event handler utilizing an arrow function
    // 'this' is accessible
    clickEventHandler = event => {
        // console.log(this._type);
        // console.log(this._value);
        // console.log("======================");
        this.updateEquation(this._type, this._value);
    }

    updateExpression(type, value) {
        Expression.update(type, value);
    }

}