import route from "../tools/routes"
import timer from "../tools/timer"
import text from "../tools/text"

/**
 * @function adm
 * give you the power to use CRUD in a new quiz
*/
async function adm () {
    console.log("\nADM section")
    console.log("==========================")
    console.log("ADM is a local where you can create, read, update or remove a quiz.")
    console.log("Here a new quiz is create.")

    await timer(2)

    console.log("==========================")
    console.log("Commands to a quiz, write '>command' and replace 'command' with one of command below")
    console.log("\n[ADM_CREATE]")
    console.log("[ADM_READ]")
    console.log("[ADM_UPDATE]")
    console.log("[ADM_DELETE]\n")

    await text("Write here your command: ")

    if (await route("CURRENT_PATH") == "ADM") return await route("ADM")
}

export default adm