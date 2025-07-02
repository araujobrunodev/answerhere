import text from "../tools/text"
import removeQuiz from "../tools/removeQuiz"

/**
 * @function admDelete
 * will delete a quiz by quiz's ID
*/
async function admDelete () {
    console.log("Delete section")
    console.log("==========================")
    console.log("Here is ask quiz's ID to delete it.")
    console.log("==========================")
    
    const askID = await text("Quiz's ID")
    
    removeQuiz(askID)
}

export default admDelete