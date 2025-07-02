import quizList from "../storage/cache"
import text from "./text"
import timer from "./timer"
import route from "./routes"
import editOpt from "./editOpt"

/**
 * @function editSide
 */
async function editSide (index_quiz: number, sideIndex: number) {
    const side = quizList[index_quiz].questions[sideIndex]
    const opts_length = side.options.length

    console.log("current side's title:",side.title)

    const askTitle = await text("replace title")

    side.options.forEach((opt, index) => {
        console.log(`[${index}] - option: ${console.table(opt)}]`)
    })

    await timer(4)

    const askOptIndex = parseInt(await text("option index"))

    if (!isNaN(askOptIndex) && askOptIndex < opts_length) editOpt(side.options, askOptIndex)

    return route("ADM_UPDATE")
}

export default editSide