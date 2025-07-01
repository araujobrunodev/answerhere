import input from "./input"

/**
 * @function askQuizsID 
 */
async function askQuizsID () {
    const askID = await input("\nQuiz's ID: ")

    if (askID.length == 0) return askQuizsID()
    else return askID
}

export default askQuizsID