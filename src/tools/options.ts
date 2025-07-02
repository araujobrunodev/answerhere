import text from "./text"
import value from "./value"
import input from "./input"
import { optionsType } from "../structureType/questionsType"

const optionList:optionsType[] = []

/**
 * @function options
 * is a function who will ask how many option you can mark it
 */
async function options ():Promise<optionsType[]> {
    const title = await text("Option's title: ")
    const worthwhile_option = await value()
    const bio = await text("A reason why this is right/wrong answer: ")
    const repeat_loop = await input("Do you want to continue with the options? (y/n) ")
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