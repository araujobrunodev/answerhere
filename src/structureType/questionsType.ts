interface OptionsType {
    text: string,
    value: boolean,
    bio: string
}

interface SideType {
    title: string,
    options: OptionsType[]
}

export type optionsType = OptionsType
export type sideType = SideType