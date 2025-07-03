import { quizType } from "../structureType/questionsType"
import timer from "../tools/timer"
import text from "../tools/text"
import { answerType } from "../structureType/answerType"

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

    console.log(`${quiz.title}`)
    console.log("\n==========================\n")

    await timer(2)

    quiz.questions.forEach(async (side, side_index) => {
        console.log(`${side_index} - ${side.title}`)
        console.log("==========================\n")

        answered_quiz.questions.push({
            title: side.title,
            options: []
        })

        const side_answered_index = answered_quiz.questions.length - 1

        side.options.forEach(async (opt, index) => {
            console.log(`\n[${index}] - ${opt.text}`)

            await timer(2)
        })

        const answer = await text("Which do you choose? (By options index) ")
        // const turn_answer_to_array = function

        
    })

    //quizResults(quiz, answeres)
}

export default runQuiz