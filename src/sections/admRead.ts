import findQuizsID from "../tools/findQuizsID"
import askQuizsID from "../tools/askQuizsID"
import { quizList } from "../storage/cache"
import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import timer from "../tools/timer"
import input from "../tools/input"

/**
 * @function admRead
 * will show a menu how to found and read quiz
*/
async function admRead () {
    console.log("\nRead section")
    console.log("==========================")
    console.log("This section will ask quiz's ID to show it to you")
    
    await timer(2)
    
    console.log("==========================\n")

    const ID = await askQuizsID()
    const findID = await findQuizsID(ID)

    if (findID) {
        const quiz = quizList.find(quiz => quiz.ID == ID) as quizType

        console.log("\n==========================")
        console.table(quiz)
        await timer(5)
    } else console.log("\ncan't find quiz")

    const repeat_loop = await input("You want to keep finding it? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return admRead();
    else return route("MAIN");
}

export default admRead