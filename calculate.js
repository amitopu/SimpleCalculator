function calculate(expression) {
    // Helper function to convert infix expression to postfix notation
    function infixToPostfix(infix) {
        const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };
        const output = [];
        const operatorStack = [];

        for (let token of infix.split(/([()+\-*/])/)) {
            token = token.trim();
            if (!token) continue;

            if (!isNaN(token)) {
                output.push(parseFloat(token));
            } else if (token === "(") {
                operatorStack.push(token);
            } else if (token === ")") {
                while (
                    operatorStack.length &&
                    operatorStack[operatorStack.length - 1] !== "("
                ) {
                    output.push(operatorStack.pop());
                }
                operatorStack.pop(); // Pop '('
            } else {
                while (
                    operatorStack.length &&
                    precedence[token] <=
                        precedence[operatorStack[operatorStack.length - 1]]
                ) {
                    output.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        }

        while (operatorStack.length > 0) {
            output.push(operatorStack.pop());
        }

        return output;
    }

    // Helper function to evaluate postfix expression
    function evaluatePostfix(postfix) {
        const stack = [];

        for (let token of postfix) {
            if (!isNaN(token)) {
                stack.push(parseFloat(token));
            } else {
                const operand2 = stack.pop();
                const operand1 = stack.pop();

                switch (token) {
                    case "+":
                        stack.push(operand1 + operand2);
                        break;
                    case "-":
                        stack.push(operand1 - operand2);
                        break;
                    case "*":
                        stack.push(operand1 * operand2);
                        break;
                    case "/":
                        stack.push(operand1 / operand2);
                        break;
                }
            }
        }

        return stack.pop();
    }

    // Remove whitespace from expression
    expression = expression.replace(/\s+/g, "");

    // Convert infix to postfix
    const postfixExpression = infixToPostfix(expression);

    // Evaluate postfix expression
    return evaluatePostfix(postfixExpression);
}

// Test the function
const expression = "(690-5*(76-4*3)/50+(50*(55/11*2)/3))/7";
const result = calculate(expression);
console.log(result);
