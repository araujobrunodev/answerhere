import { questionType } from "../structureType/questionsType";
import input from "../tools/input"

const questionList:questionType[] = []

/**
 * @function Questions
 * will ask about data about quiz and repeat untill 
 * there nothing more to put it
 */
async function question ():Promise<questionType[]> {


    const repeat_loop = await input("Do you want to continue it? (y/n) ")

    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) return question();
    else return questionList;
}

export default question