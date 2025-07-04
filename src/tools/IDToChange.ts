let quizs_ID_to_change = ""

function getIDToChange () {
    return quizs_ID_to_change
}

function settIDToChange (newID: string) {
    quizs_ID_to_change = newID

    return quizs_ID_to_change
}

export { settIDToChange, getIDToChange }