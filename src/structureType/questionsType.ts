interface OptionsType {
    text: string,
    value: boolean,
    bio: string
}

interface QuestionType {
    title: string,
    options: OptionsType[]
}

export type optionsType = OptionsType
export type questionType = QuestionType