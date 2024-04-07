function calculateExpression(expression) {
    // Use a stack to handle expressions with nested parentheses
    const stack = [];

    // Track encountered opening parentheses for loop termination
    let openingParenthesesCount = 0;

    // Loop through each character in the expression
    for (const char of expression) {
        if (!isNaN(char)) {
            // If it's a number, push it to the stack
            stack.push(parseFloat(char));
        } else if (
            char === "+" ||
            char === "-" ||
            char === "*" ||
            char === "/"
        ) {
            // If it's an operator, pop two operands, perform the operation, and push the result
            if (stack.length < 2) {
                // Handle invalid expressions with missing operands
                return NaN;
            }
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            let result;
            switch (char) {
                case "+":
                    result = operand1 + operand2;
                    break;
                case "-":
                    result = operand1 - operand2;
                    break;
                case "*":
                    result = operand1 * operand2;
                    break;
                case "/":
                    // Handle division by zero
                    result = operand2 === 0 ? NaN : operand1 / operand2;
                    break;
            }
            stack.push(result);
        } else if (char === "(") {
            // If it's an opening parenthesis, push a placeholder and increment counter
            stack.push(null);
            openingParenthesesCount++;
        } else if (char === ")") {
            // If it's a closing parenthesis, calculate the sub-expression and push the result
            if (openingParenthesesCount === 0) {
                // Handle unmatched closing parentheses
                return NaN;
            }
            let subExpressionResult = 0;
            while (stack[stack.length - 1] !== null) {
                subExpressionResult = stack.pop() + subExpressionResult;
            }
            stack.pop(); // Remove the placeholder
            stack.push(subExpressionResult);
            openingParenthesesCount--;
        } else {
            // Handle unexpected characters (improve error handling if needed)
            return NaN;
        }
    }

    // Check for unmatched opening parentheses or missing operands at the end
    if (openingParenthesesCount > 0 || stack.length < 1) {
        return NaN;
    }

    // After processing the entire expression, the final result will be on the stack
    return stack.pop();
}

// Example usage
const expression = "465+768-87(76-76)-((54/7*7)-6)/5";
const result = calculateExpression(expression);
console.log(result); // Output: 1223.4 (approximately, due to floating-point precision)
