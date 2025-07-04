import { quizList } from "../storage/cache"
import text from "./text"
import timer from "./timer"
import getQuizzes from "../storage/getQuizzes"

// How many pages of quizList can be showed
let start_index = 0
let end_index = 5
let pages = 1

/**
 * @function showQuizzes
 */
async function showQuizzes () {
    if (quizList.length == 0) {
        const new_list = await getQuizzes()

        if (new_list.length == 0) return console.log("There are no quizzes to show you");
        
        quizList.push(...new_list)
    }

    const quizzes = quizList.slice(start_index, end_index)
    
    console.log(`Page ${pages}`)
    console.log("\n==========================\n")

    quizzes.forEach(quiz => {
        console.table({title: quiz.title, ID: quiz.ID})
    })

    console.log("\n==========================")

    await timer(8)

    const repeat_loop = await text("See more? (y/n) ")
    const types_of_yes = ["y","yes","yeah", "yep", "ok", "sure"]

    if (types_of_yes.findIndex((value) => value === repeat_loop.toLocaleLowerCase()) !== -1) {
        quizList.push(...await getQuizzes())
        
        if (end_index < quizList.length) {
            end_index += 5
            start_index += 5
            pages++

            console.log("\nGoing to next page")

            await timer(2)

            return showQuizzes()
        } else {
            end_index = 5
            start_index = 0
            pages = 1
            
            console.log("There are no more quizzes to show")
        }
    } else {
        end_index = 5
        start_index = 0
        pages = 1

        console.log("There are no more quizzes to show")
    }
}

export default showQuizzes