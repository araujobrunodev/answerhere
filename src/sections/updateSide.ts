import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import text from "../tools/text"
import timer from "../tools/timer"
import { getIDToChange, settIDToChange } from "../tools/IDToChange"
import { quizList } from "../storage/cache"
import editSide from "../tools/editSide"

/**
 * @function updateSide
 */
async function updateSide () {
    if (getIDToChange().length == 0) return await route("MAIN")

    console.log("\nUpdate quiz's side section")
    console.log("==========================")
    console.log("This section will change quiz's side")
    console.log("==========================\n")

    const quiz = quizList.find(quiz => quiz.ID == getIDToChange()) as quizType
    const index_quiz = quizList.findIndex(quiz => quiz.ID == getIDToChange())
    const side_length = quiz.questions.length

    console.log("How many sides there in this quiz:", side_length)
    console.log("Choose which side you want to change it by index")

    for (let index_side = 0; index_side < quiz.questions.length; index_side++) {
        const side = quiz.questions[index_side]
        console.log(`\n[${index_side}] - side's title: ${side.title}`)
        await timer(1)
    }

    const askSideIndex = parseInt(await text("side index: "))

    if (!isNaN(askSideIndex) && askSideIndex < side_length ) {
        const newSide = await editSide(quiz, askSideIndex)

        quiz.questions[askSideIndex] = newSide
        quiz.edited = (new Date()).toString()

        quizList[index_quiz] = quiz
    }

    settIDToChange("")

    await timer(6)
    return await route("ADM_UPDATE")
}

export default updateSide