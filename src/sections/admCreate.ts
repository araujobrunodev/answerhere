import { quizList } from "../storage/cache"
import { question } from "../tools/questions"
import text from "../tools/text"
import route from "../tools/routes"
import timer from "../tools/timer"
import { quizType } from "../structureType/questionsType"

/**
 * @function admCreate
 * make a new quiz for you, here is ask detail about it
 */
async function admCreate () {
    console.log("Create section")
    console.log("==========================")
    console.log("Here is ask info about your quiz.")
    console.log("==========================")
    console.log("INFORMATIONS\n")

    const title = await text("Quiz's title")
    const creationDate = new Date() 
    const edited = "none"
    const questions = await question()
    const ID = `${title.length}${Date.now()}${questions.length}`

    quizList.push({
        title: title,
        creationDate: creationDate,
        edited: edited,
        ID: ID,
        questions: questions
    })

    console.log("Quiz saved\n")

    await timer(2)

    const quiz = quizList.find(quiz => quiz.ID == ID) as quizType

    console.table(quiz)

    await timer(4)
    route("ADM")
}

export default admCreate