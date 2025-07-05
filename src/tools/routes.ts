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
import admUpdate from "../sections/admUpdate"
import updateTitle from "../sections/updateTitle"
import updateSide from "../sections/updateSide"
import admDelete from "../sections/admDelete"
import play from "../sections/play"
import randomQuiz from "../sections/randomQuiz"
import chooseTheQuiz from "../sections/chooseTheQuiz"

export {Routes}

let current_path = ""

async function route (path:Routes) {
    let direct = ""

    if (path === "CURRENT_PATH") direct = current_path
    else direct = path

    switch (direct) {
        case "MAIN":
            current_path = "MAIN"
            await main()
            break;
        
        case "PLAY":
            current_path = "PLAY"
            await play()
            break;

        case "ADM":
            current_path = "ADM"
            await adm()
            break;

        case "ADM_CREATE":
            current_path = "ADM_CREATE"
            await admCreate()
            break;

        case "ADM_DELETE":
            current_path = "ADM_DELETE"
            await admDelete()
            break;

        case "ADM_READ":
            current_path = "ADM_READ"
            await admRead()
            break;

        case "ADM_UPDATE":
            current_path = "ADM_UPDATE"
            await admUpdate()
            break;

        case "CHOOSE_THE_QUIZ":
            current_path = "CHOOSE THE QUIZ"
            await chooseTheQuiz()
            break;

        case "EXIT":
            current_path = "EXIT"
            await exit()
            break;

        case "RANDOM_QUIZ":
            current_path = "RANDOM QUIZ"
            await randomQuiz()
            break;

        case "!SIDES":
            current_path = "ADM_UPDATE!SIDES"
            await updateSide()
            break;

        case "!TITLE":
            current_path = "ADM_UPDATE!TITLE"
            await updateTitle()
            break;
    }

    return current_path
}

export default route