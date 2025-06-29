//This is the main file that run the whole software
//This file will run the Answerhere's apresentation 

import routes from "./tools/routes"
import timer from "./tools/timer"

/**
 * @function welcome
 * | Give you a welcome
*/
async function welcome () {
    console.log("\n========================")
    console.log("Welcome to Answerhere")
    console.log("========================\n")
    console.log("This software is just to be a quiz.\n")

    await timer(4)
    routes("MAIN")
}

welcome()