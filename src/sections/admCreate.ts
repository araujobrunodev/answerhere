import route from "../tools/routes"
import { question } from "../tools/questions"
import text from "../tools/text"

/**
 * @function admCreate
 * make a new quiz for you, here is ask detail about it
 */
async function admCreate () {
    console.log("Create section")
    console.log("==========================")
    console.log("Here is ask info about your quiz.")
    console.log("==========================")
    console.log("INFORMATIONS\n")

    const title = await text("Quiz's title")

    const questions = await question()
}

export default admCreate