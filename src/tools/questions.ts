import { sideType } from "../structureType/questionsType";
import input from "./input"
import text from "./text";
import options from "./options"

const sideList:sideType[] = []

/**
 * @function questions
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

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return question();
    else {
        const newSides = Array.from(sideList)
        sideList.length = 0

        return newSides
    };
}

export default question