import { quizType } from "../structureType/questionsType"
import { answerType } from "../structureType/answerType"
import timer from "./timer"
import text from "./text"
import route from "./routes"
import runQuiz from "./runQuiz"

/**
 * @function quizResults
 */
async function quizResults (quiz: quizType, answered_quiz: answerType) {
    const corrects:number[] = []
    let all_correct = 0

    console.log(`\n${answered_quiz.title} - ${answered_quiz.ID}`)
    console.log("==========================\n")

    await timer(3)

    for (let side_index = 0; side_index < quiz.questions.length; side_index++) {
        const side = quiz.questions[side_index]

        console.log(`${side_index} - ${side.title}`)
        console.log("==========================\n")

        const opts_answered = answered_quiz.questions[side_index].options

        for (let index = 0; index < side.options.length; index++) {
            const opt = side.options[index]

            console.log(`\n[${index}] - ${opt.text}`)
            console.log(`correct: ${opt.value}`)
            console.log(`Description: ${opt.bio}`)

            const find_opt = opts_answered.findIndex(opt => opt == index)
            const is_correct = find_opt !== -1 && opt.value

            if (is_correct) corrects.push(find_opt);
            if (opt.value) all_correct++;

            await timer(2)
        }

        console.log("\n==========================")
        console.log(`Which you chosen: ${opts_answered}`)
        console.log("\n==========================\n")

        await timer(5)
    }

    console.log(`How many is right: ${corrects.length} - each option: [${corrects}]`)
    console.log(`Quiz answers: ${corrects.length}/${all_correct}`)

    await timer(3)
    
    console.log("\n==========================\n")
    const repeat_loop = await text("Do you want to play again? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return runQuiz(quiz);
    else return route("MAIN");
}

export default quizResults