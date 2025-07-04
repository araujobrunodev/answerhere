import { quizType } from "../structureType/questionsType"
import * as fs from "fs"
import timer from "../tools/timer"
import { directory_path, quiz_list_path } from "./paths"

if (!fs.existsSync(directory_path)) fs.mkdirSync(directory_path, {recursive: true})

/**
 * @function saveQuizzes
 * Save a large of quizzes at single file
 */
async function saveQuizzes (quizzes: quizType[]) {
    try {
        let file_data_in_json = ""
        
        console.log("\n==========================\n")

        console.log("Saving quizzes...")

        if (!fs.existsSync(quiz_list_path)) fs.writeFileSync(quiz_list_path, "[]")
        else file_data_in_json = fs.readFileSync(quiz_list_path, {encoding: "utf-8"})

        let file_data = JSON.parse(file_data_in_json) as quizType[]
        file_data = file_data.concat(quizzes)
        
        const toJSON = JSON.stringify(file_data)

        fs.writeFileSync(quiz_list_path, toJSON)

        await timer(5)

        console.log("Quizzes saved")
        console.log("\n==========================\n")

    } catch (err) {
        console.error("\nCan't save quizzes -",err)
    }
}

export default saveQuizzes