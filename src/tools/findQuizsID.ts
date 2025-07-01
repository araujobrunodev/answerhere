import quizList from "../storage/cache"

/**
 * @function findQuizsID
 * will search the quiz's ID in storage
 */

async function findQuizsID (ID:string):Promise<boolean> {
    return new Promise((resolve) => {
        const exist_ID_in_cache = quizList.findIndex(quiz => quiz.ID === ID) > -1

        if (exist_ID_in_cache) resolve(true);
        else resolve(false);
    })
}

export default findQuizsID