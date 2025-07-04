import { quizType } from "../structureType/questionsType"
import { directory_path, quiz_list_path } from "./paths"
import { quizList } from "./cache"
import timer from "../tools/timer"
import * as fs from "fs"

if (!fs.existsSync(directory_path)) fs.mkdirSync(directory_path, {recursive: true})

/**
 * @function getQuizzes 
 */
async function getQuizzes ():Promise<quizType[]> {
    try {
        const requests_amount = 10

        console.log("\n==========================")
        console.log("request more quizzes...")

        if (!fs.existsSync(quiz_list_path)) {
            fs.writeFileSync(quiz_list_path, "[]")
            return []
        }
        
        const file_data = JSON.parse(fs.readFileSync(quiz_list_path, {encoding: "utf-8"})) as quizType[]
        const quiz_id_list = new Set(quizList.map(quiz => quiz.ID))
        const new_list = file_data.filter(quiz => !quiz_id_list.has(quiz.ID))
        
        await timer(3)

        console.log("Request completed")
        console.log("==========================\n")

        return new_list.slice(0, requests_amount)
    } catch (err) {
        console.error("\nCan't request quizzes: ",err)
        return []
    }
}

export default getQuizzes