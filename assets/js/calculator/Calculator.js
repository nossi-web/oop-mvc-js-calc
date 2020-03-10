/* Calculator.js */

// import dependent classes
import Button from "./Button.js";

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

    }

    // class methods

    doShit() {
        return "shit";
    }


}