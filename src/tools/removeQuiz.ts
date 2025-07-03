import { filterQuiz } from "../storage/cache"
import findQuizsId from "./findQuizsID"
import route from "./routes";
import timer from "./timer";

/**
 * @function removeQuiz
 */
async function removeQuiz (ID:string) {
    const existID = await findQuizsId(ID)

    if (existID) console.log("Remove Quiz's ID:", ID)
    else {
        console.log("\nNo quiz found");
        await timer(2)
        return route("ADM")
    }

    filterQuiz(ID)

    await timer(2)

    return route("ADM")
}

export default removeQuiz