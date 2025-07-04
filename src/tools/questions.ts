import { sideType } from "../structureType/questionsType";
import text from "./text";
import options from "./options"

const sideList:sideType[] = []

/**
 * @function questions
 * will ask about data about quiz and repeat untill 
 * there nothing more to put it
 */
async function question ():Promise<sideType[]> {
    console.log("==========================\n")

    const title = await text("Question title: ")

    console.log(`${sideList.length + 1}° question quiz: ${title}`)

    const opts = await options()
    const repeat_loop = await text("Add more question? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    sideList.push({
        title: title,
        options: opts
    })

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return question();
    else {
        console.log("==========================\n")
        const newSides = Array.from(sideList)
        sideList.length = 0

        return newSides
    };
}

export default question