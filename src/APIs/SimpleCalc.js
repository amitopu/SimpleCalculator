/**
 * This function put a multiplication operator bafore "(" if found exaclty after number.
 * ie. 9(7+8) will be 9*(7+8)
 * @param {string} expression is the string represent an mathmatical expression
 * @returns {string} output
 */
const putMultBeforeParenthesis = (expression) => {
    const len = expression.length;
    let output = "";
    for (let i = 0; i < len; i++) {
        if (expression[i] !== "(") {
            output += expression[i];
        } else if (
            expression[i] === "(" &&
            !isNaN(parseFloat(expression[i - 1]))
        ) {
            output += "*";
            output += "(";
        } else {
            output += expression[i];
        }
    }

    return output;
};

/**
 * This function implements Shunting Yard algorithm to convert infix expression to postfix expression
 * @param {string} expr is a string represent an infix expression
 * @returns {array} output which represents postfix expression while reading from index 0 to length - 1
 */
const infixToPostfix = (expr) => {
    const expression = putMultBeforeParenthesis(expr);
    //console.log(expression);
    const operators = {
        "^": { precedence: 4, associativity: "right" },
        "/": { precedence: 3, associativity: "left" },
        "*": { precedence: 3, associativity: "left" },
        "%": { precedence: 3, associativity: "left" },
        "+": { precedence: 2, associativity: "left" },
        "-": { precedence: 2, associativity: "left" },
    };
    const stack = [];
    const output = [];

    const tokens = expression.split(/([()+\-*/%^])/);
    // console.log(tokens);

    for (let token of tokens) {
        // check if empty string
        if (!token) {
            continue;
        }

        // applying Shunting Yard algorithm
        if (!isNaN(parseFloat(token))) {
            output.push(parseFloat(token));
        } else if (token in operators) {
            while (
                stack.length > 0 &&
                stack[stack.length - 1] in operators &&
                operators[stack[stack.length - 1]].precedence >=
                    operators[token].precedence &&
                operators[stack[stack.length - 1]].associativity === "left"
            ) {
                output.push(stack.pop());
            }

            stack.push(token);
        } else if (token === "(") {
            stack.push(token);
        } else if (token === ")") {
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                output.push(stack.pop());
            }
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            }
        }
    }

    // scanning rest of the stack for any operators and put them to output
    while (stack.length > 0) {
        output.push(stack.pop());
    }

    return output;
};

/**
 * This function evaluates to value of a postfix expression using stack based algorithm
 * @param {array} postfix is an array of numbers and operators(strings) ie + ,-,*,/,^ etc which represents an postrix expression
 * @returns {number} returns the evaluated value of the postfix expression
 */
const evaluatePostfix = (postfix) => {
    const stack = [];
    const operations = {
        "^": (a, b) => Math.pow(a, b),
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => (a * b) / 100,
    };

    for (let token of postfix) {
        if (!isNaN(token)) {
            stack.push(token);
        } else if (token in operations) {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            stack.push(operations[token](operand1, operand2));
        }
    }
    return stack[0];
};

/**
 * This function evaluates the mathmatical expression string to numeric value
 * @param {string} expression  a mathmatical expression string
 * @returns {number} output is a number evaluated value of expression
 */
const calculate = (expression) => {
    const refinedExpression = putMultBeforeParenthesis(expression);
    // console.log(refinedExpression);
    const postfix = infixToPostfix(refinedExpression);
    console.log(postfix);
    const result = evaluatePostfix(postfix);
    // console.log(result);
    return result;
};

export default calculate;

// calculate("(65+78-(56-8)*7/6-2((4/6+6)/3))%10");
