import text from "./text"
import timer from "./timer"
import editOpt from "./editOpt"
import { quizType } from "../structureType/questionsType"

/**
 * @function editSide
 */
async function editSide (quiz: quizType, sideIndex: number) {
    const side = quiz.questions[sideIndex]
    const opts_length = side.options.length

    console.log(`\nCurrent side's title: ${side.title}`)

    const askTitle = await text("replace title: ")

    side.title = askTitle

    console.log("\nChange options property")
    console.log("Choose which option to edit it")

    await timer(2)

    for (let index_option = 0; index_option < side.options.length; index_option++) {
        const opt = quiz.questions[index_option]
        
        console.log(`\n[${index_option}] - option ${opt.title}`)
        console.table(opt)
        await timer(1)
    }

    await timer(4)
    console.log("\nOption index is the number at the beginning")

    const askOptIndex = parseInt(await text("option index: "))

    if (!isNaN(askOptIndex) && askOptIndex < opts_length) {
        const newOpt = await editOpt(side.options, askOptIndex)

        side.options[askOptIndex] = newOpt
    }

    return side
}

export default editSide