import calculate from "./SimpleCalc";

/**
 * This function is used to reset data
 * @returns {string} and empty string to reset
 */
const resetHandler = () => {
    return "";
};

/**
 * This function is used to evaluate mathematical expression passed as string
 * @param {string} data from context which represent a mathmatical expression
 * @returns {number} which is evaluated value of the expression
 */
const equalHandler = (data) => {
    return calculate(data);
};

/**
 * This function is used to return a random number
 * @returns {number} a random number
 */
const randHandler = () => {
    return Math.random();
};

const generalHandler = (data) => {
    if (data === "X") {
        return "*";
    }

    return data;
};

const handlers = {
    C: resetHandler,
    "=": equalHandler,
    RND: randHandler,
    all: generalHandler,
};

export default handlers;
