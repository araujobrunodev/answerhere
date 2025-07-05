import { getIDToChange, settIDToChange } from "../tools/IDToChange"
import { quizList } from "../storage/cache"
import { quizType } from "../structureType/questionsType"
import route from "../tools/routes"
import text from "../tools/text"
import timer from "../tools/timer"

/**
 * @function updateTitle
 */
async function updateTitle () {
    if (getIDToChange().length == 0) return await route("MAIN")

    console.log("\nUpdate quiz's title section")
    console.log("==========================")
    console.log("This section will change quiz's title")

    await timer(2)
    
    console.log("==========================\n")

    const quiz = quizList.find(quiz => quiz.ID == getIDToChange()) as quizType
    const index_quiz = quizList.findIndex(quiz => quiz.ID == getIDToChange())
    
    console.log("Current title:", quiz.title)

    const newTitle = await text("Change title to: ")

    if (newTitle.length === 0) return updateTitle()
    
    console.log(`Change ${quiz.title} to ${newTitle}`)
    quiz.title = newTitle
    quiz.edited = (new Date()).toString()

    quizList[index_quiz] = quiz

    console.log("quizes:",quizList)

    settIDToChange("")

    await timer(6)
    return await route("ADM_UPDATE")
}

export default updateTitle