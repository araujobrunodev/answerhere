import route from "../tools/routes"
import findQuizsID from "../tools/findQuizsID"
import timer from "../tools/timer"
import text from "../tools/text"
import { settIDToChange } from "../tools/IDToChange"

/**
 * @function admUpdate
 * will ask the quiz property to change it
 */
async function admUpdate () {
    console.log("\nUpdate section")
    console.log("==========================")
    console.log("This section will ask the quiz property ID to change it")
    
    await timer(2)

    console.log("==========================")

    const askID = await text("Quiz's ID: ")
    const findID = await findQuizsID(askID)
    
    if (findID) settIDToChange(askID);
    else {
        console.log("Quiz's ID not found")
        return await route("ADM_UPDATE")
    }

    console.log("==========================")
    console.log("Commands to a quiz, write '>!command' and replace 'command' with one of command below")
    console.log("\n[TITLE]")
    console.log("[SIDES]")
    console.log("==========================\n")

    await text("Write here your command: ")

    if (await route("CURRENT_PATH") == "ADM_UPDATE") return await route("ADM_UPDATE")
}

export default admUpdate