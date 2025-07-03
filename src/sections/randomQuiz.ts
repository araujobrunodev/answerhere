import timer from "../tools/timer"
import runQuiz from "../tools/runQuiz"
import { quizList } from "../storage/cache"

/**
 * @function randomQuiz
 * will choose quiz for you
 */
async function randomQuiz () {
    console.log("\nRandom quiz section")
    console.log("==========================")
    console.log("Will choose a random quiz for you")
    console.log("==========================\n")

    await timer(2)

    const randomIndex = Math.floor((Math.random() * quizList.length))
    const quiz = quizList[randomIndex]

    console.log(`Chosen quiz: ${quiz.title} - ID:${quiz.ID}`)

    await timer(2)

    runQuiz(quiz)
}

export default randomQuiz