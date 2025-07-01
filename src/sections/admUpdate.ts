import input from "../tools/input"
import route from "../tools/routes"
import askQuizsID from "../tools/askQuizsID"
import findQuizsID from "../tools/findQuizsID"

let quizsIDToChange = ""

/**
 * @function admUpdate
 * will ask the quiz property to change it
 */
async function admUpdate () {
    console.log("Update section")
    console.log("==========================")
    console.log("This section will ask the quiz property ID to change it")
    console.log("==========================")

    const askID = await askQuizsID()
    const findID = await findQuizsID(askID)
    
    if (findID) quizsIDToChange = askID;
    else {
        console.log("Quiz's ID not found")
        route("ADM_UPDATE")
    }

    console.log("==========================")
    console.log("Commands to a quiz, write '!command' and replace 'command' with one of command below")
    console.log("\n[TITLE]")
    console.log("[SIDES]")
    console.log("==========================\n")

    await input("Write here your command: ")

    if (route("CURRENT_PATH") == "ADM_UPDATE") route("ADM_UPDATE")
}

export { admUpdate, quizsIDToChange}