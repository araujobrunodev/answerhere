import { quizType } from "../structureType/questionsType"
import findQuizsID from "../tools/findQuizsID"
import showQuizzes from "../tools/showQuizzes"
import { quizList } from "../storage/cache"
import route from "../tools/routes"
import timer from "../tools/timer"
import text from "../tools/text" 

/**
 * @function admRead
 * will show a menu how to found and read quiz
*/
async function admRead () {
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    console.log("\nRead section")
    console.log("==========================")
    console.log("Show quiz info")
    console.log("This section will ask quiz's ID to show it to you")
    console.log("==========================\n")

    await timer(2)

    const see_quiz_list = await text("See quizzes? (y/n)")

    if (types_of_yes.findIndex((value) => value === see_quiz_list.toLocaleLowerCase()) !== -1) await showQuizzes();

    const ID = await text("Quiz's ID: ")
    const findID = await findQuizsID(ID)

    if (findID) {
        const quiz = quizList.find(quiz => quiz.ID == ID) as quizType

        console.log("\n==========================")
        console.table(quiz)
        await timer(5)
    } else console.log("\ncan't find quiz")

    const repeat_loop = await text("Do you want keep read it? (y/n) ")

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return admRead();
    else return await route("MAIN");
}

export default admRead