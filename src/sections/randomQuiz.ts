import timer from "../tools/timer"
import runQuiz from "../tools/runQuiz"
import { quizList } from "../storage/cache"
import getQuizzes from "../storage/getQuizzes"
import route from "../tools/routes"

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

    console.log("Verify if has some quizzes...")

    if (quizList.length == 0) {
        const list = await getQuizzes()

        if (list.length != 0) quizList.push(...list);
        else {
            console.log("\nThere are no quizzes to play")
            console.log("Sending you to make a quiz")
            await timer(2)

            await route("ADM_CREATE")
            return
        }
    }

    const randomIndex = Math.floor((Math.random() * quizList.length))
    const quiz = quizList[randomIndex]

    console.log(`Chosen quiz: ${quiz.title} - ID:${quiz.ID}`)

    await timer(2)

    runQuiz(quiz)
}

export default randomQuiz