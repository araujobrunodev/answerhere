import input from "./input"

/**
 * @function text
 * is a function who will ask a text to insert it.     
 * Parameter will be like this "message: "
*/
async function text (message:string) {
    const value = await input(`${message}: `) 

    if (value.length !== 0) return value;
    else return text(message);
}

export default text