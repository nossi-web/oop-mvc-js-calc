/* Expression */

import Display from "./Display.js";

export default class Expression {

    // the expression is essentially a string of chars
    static _string = "0";

    construct() {
        Expression._string = 0;
        Expression.updateDisplay(Expression._string);
    }

    // update
    static update(type, value) {

        // just to verify the data is getting passed to this class
        // console.log("----------------------");
        // console.log(type);
        // console.log(value);

        // check to see if there's a leading zero in the expression, 
        if (Expression._string == "0") {
            console.log("heyyy there's a leading zero we need to politely remove");
            Expression._string = "";
        }

        // have to check for a few things, depending on the type of the button pressed. 
        // time for a switch case!

        switch (type) {
            case "number":
                // just adding a number to the string, time to concatenate. 
                Expression._string += value;
                break;

            case "operator":
                // here still the same. I had other plans till I remembered JS has a function that evaluates choice expressions
                Expression._string += value;
                break;

            case "manipulator":

                // if it's a C we have to clear the display, 
                if (value == "C") {
                    Expression._string = 0;

                    // if it 's the backspace key, remove the last char in the string
                } else if (value == "<-") {

                    // backspace will always remove a char from the string
                    Expression._string = Expression._string.slice(0, -1);

                    // if the expression is EMPTY, we need to put that 0 back in for the User to see. 
                    if (Expression._string == "") Expression._string = "0";

                } else if (value == "-/+") {

                    if (Expression._string[0] == "-") {
                        Expression._string = Expression._string.slice(1, Expression._string.length);
                    } else {
                        let tempStringBucket = Expression._string;
                        Expression._string = "-";
                        Expression._string += tempStringBucket;
                    }

                }

                break;

            case "evaluator":
                // EVAL IS BAD:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!
                Expression._string = eval(Expression._string);
                break;

        }

        Expression.updateDisplay(Expression._string);

    }

    // 
    static updateDisplay(expression) {

        Display.update(expression);
    }

}