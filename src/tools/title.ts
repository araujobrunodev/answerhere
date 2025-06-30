import input from "../tools/input"

/**
 * @function title
 * is a function who will ask a title to insert it.     
 * Parameter will be like this "message's title"
*/
async function title (message:string) {
    const value = await input(`${message}'s title: `) 

    if (value.length !== 0) return value;
    else return title(message);
}

export default title