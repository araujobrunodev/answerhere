import timer from "../tools/timer"
import text from "../tools/text"
import findQuizsID from "../tools/findQuizsID"
import runQuiz from "../tools/runQuiz"
import { quizList } from "../storage/cache"
import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import showQuizzes from "../tools/showQuizzes"

/**
 * @function chooseTheQuiz
 */
async function chooseTheQuiz () {
    console.log("\nChoose the quiz section")
    console.log("==========================")
    console.log("can suggest some quiz and you choose by quiz's ID")

    await timer(2)

    console.log("\n==========================")
    const suggest = await text("See quizzes? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === suggest.toLowerCase()) !== -1) await showQuizzes()
    
    const askID = await text("Quiz's ID: ")
    const findID = await findQuizsID(askID)

    if (findID) return runQuiz(quizList.find(quiz => quiz.ID === askID) as quizType)
    else console.log("\nDidn't find quiz's ID\n")

    if (route("CURRENT_PATH") == "CHOOSE_THE_QUIZ") return route("CHOOSE_THE_QUIZ")
}

export default chooseTheQuiz