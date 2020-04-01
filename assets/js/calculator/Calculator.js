/* Calculator.js */

// import dependent classes
import Button from "./Button.js";
import Display from "./Display.js";

export default class Calculator {

    // class properties
    _buttons = [];
    _display;

    constructor() {

        // build the calculator

        // gather the node list of buttons. 
        let buttonsNodeList = document.querySelectorAll(".button");

        // loop through the node list and instantiate a new button class for each
        for (let i = 0; i < buttonsNodeList.length; ++i) {
            this._buttons[i] = new Button(buttonsNodeList[i]);
        }

        // get a reference to the input element
        let display = document.querySelector("#display");

        // construct the display
        this._display = new Display(display);

    }

    // class methods


}