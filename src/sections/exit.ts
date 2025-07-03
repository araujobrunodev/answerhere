import {current_interface} from "../tools/rl"

/**
 * @function exit
 * This function will close the software
*/
function exit () {
    console.log("\nExit section")
    console.log("==========================")
    console.log("Thanks to use my program")
    console.log("==========================\n")

    current_interface.close()
    process.exit()
}

export default exit