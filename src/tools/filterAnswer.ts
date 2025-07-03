/**
 * @function filterAnswer
 * will receive a data and return as array
 */
function filterAnswer (raw_answer: string):Array<number> {
    let filtered:Set<number> = new Set()

    for (let caracter of raw_answer) {
        const caracter_as_number = parseInt(caracter)

        if (!isNaN(caracter_as_number)) {
            filtered.add(caracter_as_number)
        }
    }

    return Array.from(filtered)
}

export default filterAnswer