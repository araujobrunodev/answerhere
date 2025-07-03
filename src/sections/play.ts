import timer from "../tools/timer"
import text from "../tools/text"
import route from "../tools/routes"

/**
 * @function play
 * will ask to choose which mode do you want a play it
 */
async function play () {
    console.log("\nPlay section")
    console.log("==========================")
    console.log("Play section ask to choose which mode do you want a play it")
    
    await timer(2)
    
    console.log("\nSECTIONS - PLAY SECTION")
    console.log("==========================")
    console.log('Write ">section" to be directed to some section')
    console.log("\n[RANDOM_QUIZ] - will choose a random quiz for you")
    console.log("[CHOOSE_THE_QUIZ] - you choose the quiz\n")
    console.log("==========================\n")

    await timer(3)

    await text("Write here your command: ")

    if (route("CURRENT_PATH") == "PLAY") return route("PLAY")
}

export default play