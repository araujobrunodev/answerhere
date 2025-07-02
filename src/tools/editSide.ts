import quizList from "../storage/cache"
import text from "./text"
import timer from "./timer"
import route from "./routes"

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

    const askOptIndex = await text("option index")

    //verify index exist and pass to editOpt

    return route("ADM_UPDATE")
}

export default editSide