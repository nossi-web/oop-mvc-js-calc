/* Display.js */

export default class Display {

    _input

    constructor(input) {
        this._input = input;
    }

    static update(expression) {

        // #TODO: clean this up, create reference to DOM node as Class Prop
        document.querySelector("#display").value = expression;

    }

}