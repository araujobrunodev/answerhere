import text from "../tools/text"

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

    //function to remove from list
}

export default admDelete