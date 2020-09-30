class Calculator {
    constructor(previousOperandButton, currentOperandButton) {
        this.previousOperandButton = previousOperandButton
        this.currentOperandButton = currentOperandButton
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number) {

    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {

    }
}

const numberButton = document.querySelectorAll("[data-number]") //gets all the number operands
const operationButton = document.querySelectorAll("[data-operation]") //gets all the operation operands
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandButton = document.querySelector('[data-previous-operand]')
const currentOperandButton = document.querySelector('[data-current-operand]')