import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import text from "../tools/text"
import timer from "../tools/timer"
import { quizsIDToChange } from "./admUpdate"
import { quizList } from "../storage/cache"
import editSide from "../tools/editSide"

/**
 * @function updateSide
 */
async function updateSide () {
    if (quizsIDToChange.length == 0) route("ADM_UPDATE")

    console.log("\nUpdate quiz's side section")
    console.log("==========================")
    console.log("This section will change quiz's side")
    console.log("==========================\n")

    const quiz = quizList.find(quiz => quiz.ID == quizsIDToChange) as quizType
    const index_quiz = quizList.findIndex(quiz => quiz.ID == quizsIDToChange)
    const side_length = quiz.questions.length

    console.log("How many sides there in this quiz:", side_length)
    console.log("Choose which side you want to change it by index")

    quiz.questions.forEach(async (side, index) => {
        console.log(`\n[${index}] - side's title: ${side.title}`)
        await timer(1)
    })

    const askSideIndex = parseInt(await text("side index: "))

    if (!isNaN(askSideIndex) && askSideIndex < side_length ) {
        const newSide = await editSide(quiz, askSideIndex)

        quiz.questions[askSideIndex] = newSide
        quiz.edited = (new Date()).toString()

        quizList[index_quiz] = quiz
    }

    await timer(6)
    return route("ADM_UPDATE")
}

export default updateSide