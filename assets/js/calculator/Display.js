/* Display.js */

export default class Display {

    _input

    constructor(input) {
        this._input = input;
    }

    static update(expression) {

        //this._input.value = expression;
        //TODO: come back and fix... :(
        document.querySelector("#display").value = expression;

    }

}