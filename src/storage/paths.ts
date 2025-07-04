import * as path from "path"
import * as os from "os"

const directory_path = path.join((os.homedir()), "AppData", "Roaming", "answerHere")
const quiz_list_path = path.join(directory_path, "quizList.json")

export { directory_path, quiz_list_path }