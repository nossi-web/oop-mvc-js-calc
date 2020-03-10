/* Expression */

import Display from "./Display.js";

export default class Expression {

    _string

    construct() {
        this._string = 0;
        this.updateDisplay(this._string);
    }

    static update(type, value) {

        // have to check for a few things, depending on the type of the button pressed. 
        // time for a switch case!

        switch (type) {
            case "number":
                // just adding a number to the string, time to concatenate. 
                this._string += value;
                break;

            case "operator":
                // here still the same. I had other plans till I remembered JS has a function that 
                this._string += value;
                break;

            case "manipulator":

                // if it's a C we have to clear the display, 
        }


    }

    static updateDisplay(string) {

    }

    static clearDisplay() {

    }
}