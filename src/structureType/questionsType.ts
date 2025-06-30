interface OptionsType {
    text: string,
    value: boolean,
    bio: string
}

interface SideType {
    title: string,
    options: OptionsType[]
}

interface QuizType {
    title: string,
    ID: string,
    creationDate: Date,
    edited: string,
    questions: SideType[]
}

export type optionsType = OptionsType
export type sideType = SideType
export type quizType = QuizType