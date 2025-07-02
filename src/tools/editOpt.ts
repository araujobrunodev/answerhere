import { optionsType } from "../structureType/questionsType"
import text from "./text"
import value from "./value"

/**
 * @function editOpt
 */
async function editOpt (opts: optionsType[], opt_index: number) {
    const opt = opts[opt_index]

    console.log(`Current option: ${console.table(opt)}`)

    const title = await text("Option's title")
    const worth_value = await value()
    const bio = await text("A reason for that option")

    const newOpt:optionsType = {
        text: title,
        value: worth_value,
        bio: bio
    }

    console.log(`new option: ${console.table(newOpt)}`)

    return newOpt
}

export default editOpt