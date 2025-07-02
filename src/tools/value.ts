import text from "./text"

/**
 * @function value
 * is a function who will ask a value to insert it.
*/
async function value () {
    console.log("This part is import you look carefully")
    const Value = await text(`is this sentence the answer? (y/n) `) 

    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === Value.toLocaleLowerCase()) !== -1) return true;
    else return false;
}

export default value