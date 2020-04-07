/* Display.js */

export default class Display {

    static _inputElement

    constructor(inputElement) {
        Display._inputElement = inputElement;
        Display._inputElement.value = "0";
    }

    static update(expression) {

        // TODO: here we'll have to clear out that leading zero, if it exists, 
        // if (expression == "0" || self._inputElement.value == "0") {
        //     console.log("apparently we have a leading zero...");
        // }

        console.log(Display._inputElement);
        console.log(Display._inputElement.value);

        Display._inputElement.value = expression;

    }

}