import route from "../tools/routes"
import input from "../tools/input"
import timer from "../tools/timer"

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

    await input("Write here your command: ")

    if (route("CURRENT_PATH") == "ADM") route("ADM")
}

export default adm