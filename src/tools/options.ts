import text from "./text"
import value from "./value"
import { optionsType } from "../structureType/questionsType"

const optionList:optionsType[] = []

/**
 * @function options
 * is a function who will ask how many option you can mark it
 */
async function options ():Promise<optionsType[]> {
    const title = await text(`\n${optionList.length + 1}° option title: `)
    const worthwhile_option = await value()
    const bio = await text("\nOption description: ")
    const repeat_loop = await text("\nAdd more options? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    optionList.push({
        text: title,
        value: worthwhile_option,
        bio: bio
    })

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return options();
    else {
        const newOptionList = Array.from(optionList)
        optionList.length = 0

        return newOptionList
    };
}

export default options