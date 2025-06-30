interface QuestionType {
    title: string,
    options: {
        text: string,
        value: boolean,
        bio: string
    }
}

export type questionType = QuestionType