import { sideType } from "../structureType/questionsType";
import input from "./input"
import text from "./text";
import { options, optionList } from "./options"

const sideList:sideType[] = []

/**
 * @function Questions
 * will ask about data about quiz and repeat untill 
 * there nothing more to put it
 */
async function question ():Promise<sideType[]> {
    const title = await text("Side's title")
    const opts = await options()
    const repeat_loop = await input("Do you want to continue it? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    sideList.push({
        title: title,
        options: opts
    })

    optionList.length = 0

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return question();
    else return sideList;
}

export { question, sideList}