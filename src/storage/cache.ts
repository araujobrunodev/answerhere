import { quizType } from "../structureType/questionsType"

let quizList:quizType[] = []

function filterQuiz (ID: string) {
    quizList = quizList.filter((quiz) => {
        return quiz.ID !== ID
    })
}

export { quizList, filterQuiz }