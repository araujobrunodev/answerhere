import {current_interface} from "../tools/rl"
import { quizList } from "../storage/cache"
import saveQuizzes from "../storage/saveQuizzes"

/**
 * @function exit
 * This function will close the software
*/
async function exit () {
    if (quizList.length !== 0) await saveQuizzes(quizList)
    
    console.log("\nExit section")
    console.log("==========================")
    console.log("Thanks to use my program")
    console.log("==========================\n")

    current_interface.close()
    process.exit(0)
}

export default exit