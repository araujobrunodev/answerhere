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
    "CURRENT_PATH"

import main from "../sections/main"
import exit from "../sections/exit"
import adm from "../sections/adm"
import admCreate from "../sections/admCreate"

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
            break;

        case "ADM_READ":
            current_path = "ADM_READ"
            break;

        case "ADM_UPDATE":
            current_path = "ADM_UPDATE"
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
            break;
    }

    return current_path
}

export default route