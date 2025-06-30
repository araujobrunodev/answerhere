import route from "../tools/routes"
import question from "../tools/questions"

/**
 * @function admCreate
 * make a new quiz for you, here is ask detail about it
 */
async function admCreate () {
    console.log("Create section")
    console.log("==========================")
    console.log("Here is ask info about your quiz.")
    console.log("==========================")
    console.log("QUIZ'S INFORMATION")

    await question()
}

export default admCreate