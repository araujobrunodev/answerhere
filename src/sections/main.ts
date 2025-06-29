import input from "../tools/input"
import filterCommand from "../tools/filterCommand"

/**
 * @function main
 * Main section introduce you the section
*/
async function main () {
    console.log("Main section")
    console.log("==========================")
    console.log('\nWrite ">section" to be directed to some section')
    console.log("\nSECTIONS\n")
    console.log("[MAIN]")
    console.log("[PLAY]")
    console.log("[ADM]")
    console.log("[EXIT]")
    console.log("==========================")

    await input("where you wanna go?")
}

export default main