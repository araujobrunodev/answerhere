import filterCommand from "./filterCommand"
import {current_interface} from "./rl"

/**
 * @function input
 * @param {string} msg
 *, This will ask data                    
 *, The parameter will receive a message and get your answer
*/
async function input (msg:string):Promise<string> {
    return new Promise((resolve) => 
        current_interface.question(msg, (answer) => resolve(filterCommand(answer)))
    )
}

export default input