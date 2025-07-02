import { optionsType } from "../structureType/questionsType"
import text from "./text"
import timer from "./timer"
import value from "./value"

/**
 * @function editOpt
 */
async function editOpt (opts: optionsType[], opt_index: number) {
    const opt = opts[opt_index]

    console.log(`\nCurrent option: ${opt.text}`)

    const title = await text("Change option's title")
    const worth_value = await value()
    const bio = await text("A reason for that option")

    const newOpt:optionsType = {
        text: title,
        value: worth_value,
        bio: bio
    }

    console.log(`New option: `)
    console.table(newOpt)

    await timer(3)

    return newOpt
}

export default editOpt