import { quizsIDToChange } from "./admUpdate"
import quizList from "../storage/cache"
import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import text from "../tools/text"
import timer from "../tools/timer"

/**
 * @function updateTitle
 */
async function updateTitle () {
    if (quizsIDToChange.length == 0) route("ADM_UPDATE")

    console.log("Update quiz's title section")
    console.log("==========================")
    console.log("This section will change quiz's title")
    console.log("==========================\n")

    const quiz = quizList.find(quiz => quiz.ID == quizsIDToChange) as quizType
    const index_quiz = quizList.findIndex(quiz => quiz.ID == quizsIDToChange)
    
    console.log("Current title:", quiz.title)

    const newTitle = await text("Change title to: ")

    if (newTitle.length === 0) return updateTitle()
    
    console.log(`Change ${quiz.title} to ${newTitle}`)
    quiz.title = newTitle
    quiz.edited = (new Date()).toString()

    quizList[index_quiz] = quiz

    console.log("quizes:",quizList)

    await timer(6)
    return route("ADM_UPDATE")
}

export default updateTitle