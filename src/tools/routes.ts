type Routes = "EXIT" | 
    "MAIN" |
    "PLAY" |
    "ADM" |
    "RANDOM_QUIZ" |
    "CHOOSE_THE_QUIZ" |
    "ADM_CREATE" |
    "ADM_READ" |
    "ADM_UPDATE" |
    "ADM_DELETE" |
    "CURRENT_PATH" |
    "!TITLE" |
    "!SIDES"

import main from "../sections/main"
import exit from "../sections/exit"
import adm from "../sections/adm"
import admCreate from "../sections/admCreate"
import admRead from "../sections/admRead"
import { admUpdate } from "../sections/admUpdate"
import updateTitle from "../sections/updateTitle"
import updateSide from "../sections/updateSide"
import admDelete from "../sections/admDelete"
import play from "../sections/play"
import randomQuiz from "../sections/randomQuiz"

export {Routes}

let current_path = ""

function route (path:Routes) {
    switch (path) {
        case "MAIN":
            current_path = "MAIN"
            main()
            break;
        
        case "PLAY":
            current_path = "PLAY"
            play()
            break;

        case "ADM":
            current_path = "ADM"
            adm()
            break;

        case "ADM_CREATE":
            current_path = "ADM_CREATE"
            admCreate()
            break;

        case "ADM_DELETE":
            current_path = "ADM_DELETE"
            admDelete()
            break;

        case "ADM_READ":
            current_path = "ADM_READ"
            admRead()
            break;

        case "ADM_UPDATE":
            current_path = "ADM_UPDATE"
            admUpdate()
            break;

        case "CHOOSE_THE_QUIZ":
            current_path = "CHOOSE THE QUIZ"
            break;

        case "EXIT":
            current_path = "EXIT"
            exit()
            break;

        case "RANDOM_QUIZ":
            current_path = "RANDOM QUIZ"
            randomQuiz()
            break;

        case "!SIDES":
            current_path = "ADM_UPDATE!SIDES"
            updateSide()
            break;

        case "!TITLE":
            current_path = "ADM_UPDATE!TITLE"
            updateTitle()
            break;
    }

    return current_path
}

export default route