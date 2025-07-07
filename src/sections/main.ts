import timer from "../tools/timer"
import text from "../tools/text"
import route from "../tools/routes"

/**
 * @function main
 * Main section introduce you the section
*/
async function main () {
    console.log("\nMain section")
    console.log("==========================")
    console.log('\nWrite ">section" to be directed to some section')

    await timer(1)

    console.log("\nSECTIONS\n")
    console.log("[MAIN]")
    console.log("[PLAY]")
    console.log("[ADM]")
    console.log("[EXIT]")
    console.log("==========================")

    const answer = await text("Where you want to go? ")

    await route("CURRENT_PATH")
}

export default main