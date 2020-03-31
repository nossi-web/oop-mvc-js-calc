/* Expression */

import Display from "./Display.js";

export default class Expression {

    // the expression is essentially a string of chars
    _string

    construct() {
        this._string = 0;
        this.updateDisplay(this._string);
    }

    // update
    static update(type, value) {

        // just to verify the data is getting passed to this class
        console.log("----------------------");
        console.log(type);
        console.log(value);


        // have to check for a few things, depending on the type of the button pressed. 
        // time for a switch case!

        switch (type) {
            case "number":
                // just adding a number to the string, time to concatenate. 
                this._string += value;
                break;

            case "operator":
                // here still the same. I had other plans till I remembered JS has a function that evaluates choice expressions
                this._string += value;
                break;

            case "manipulator":

                // if it's a C we have to clear the display, 
                this._string = 0;
                break;

            case "evaluator":
                this._string = eval(this._string);
                break;

        }

        this.updateDisplay(this._string);

    }

    static updateDisplay(string) {

    }

}