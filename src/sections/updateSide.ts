import { quizType, sideType } from "../structureType/questionsType"
import route from "../tools/routes"
import text from "../tools/text"
import timer from "../tools/timer"
import { quizsIDToChange } from "./admUpdate"
import quizList from "../storage/cache"

/**
 * @function updateSide
 */
async function updateSide () {
    if (quizsIDToChange.length == 0) route("ADM_UPDATE")

    console.log("Update quiz's side section")
    console.log("==========================")
    console.log("This section will change quiz's side")
    console.log("==========================\n")

    const quiz = quizList.find(quiz => quiz.ID == quizsIDToChange) as quizType
    const index_quiz = quizList.findIndex(quiz => quiz.ID == quizsIDToChange)
    const side_length = quiz.questions.length

    console.log("side amount:", side_length)

    quiz.questions.forEach((side, index) => {
        console.log(`[${index}] - side's title: ${side.title}`)
    })

    const askSideIndex = await text("side index")

    //edit side by quiz's index and side's index

    await timer(6)
    return route("ADM_UPDATE")
}

export default updateSide