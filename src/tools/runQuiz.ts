import { quizType } from "../structureType/questionsType"
import timer from "../tools/timer"
import text from "../tools/text"
import { answerType } from "../structureType/answerType"
import filterAnswer from "./filterAnswer"
import quizResults from "../tools/quizResults"

/**
 * @function runQuiz
 * will run a quiz
 */
async function runQuiz (quiz: quizType) {
    const answered_quiz:answerType = {
        ID: quiz.ID,
        title: quiz.title,
        questions: []
    } 

    console.log(`\n${quiz.title}`)
    console.log("==========================\n")

    await timer(2)

    for (let side_index = 0; side_index < quiz.questions.length; side_index++) {
        const side = quiz.questions[side_index]

        console.log(`${side_index} - ${side.title}`)
        console.log("==========================\n")

        answered_quiz.questions.push({
            title: side.title,
            options: []
        })

        const side_answered_index = answered_quiz.questions.length - 1

        for (let index = 0; index < side.options.length; index++) {
            const opt = side.options[index]

            console.log(`\n[${index}] - ${opt.text}`)

            await timer(2)
        }

        const answer = await text("\nWhich do you choose? (By options index) ")
        const answer_to_array = filterAnswer(answer)

        answered_quiz.questions[side_answered_index].options = answer_to_array
    }

    quizResults(quiz, answered_quiz)
}

export default runQuiz