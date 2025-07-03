import text from "../tools/text"
import removeQuiz from "../tools/removeQuiz"
import timer from "../tools/timer"

/**
 * @function admDelete
 * will delete a quiz by quiz's ID
*/
async function admDelete () {
    console.log("\nDelete section")
    console.log("==========================")
    console.log("Here is ask quiz's ID to delete it.")

    await timer(2)
    
    console.log("==========================")
    
    const askID = await text("Quiz's ID: ")
    
    removeQuiz(askID)
}

export default admDelete