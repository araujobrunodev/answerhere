interface SideAnswerType {
    title: string,
    options: number[]
}

interface AnswerType {
    title: string,
    ID: string,
    questions: SideAnswerType[]
}

export type sideAnswerType = SideAnswerType
export type answerType = AnswerType