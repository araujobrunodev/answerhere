import route, { Routes } from "./routes"

/**
 * @function filterCommand
 * detect a command section and run it,
 * but if isn't a command, so happen nothing in the interface
*/
async function filterCommand (data: string):Promise<string> {
    const start_command = data.search(">")

    if (start_command === -1) return data;

    const command_list:Routes[] = ["RANDOM_QUIZ", "CHOOSE_THE_QUIZ", "!TITLE", "!SIDES", "MAIN", "PLAY", "EXIT", "ADM_CREATE", "ADM_READ", "ADM_UPDATE", "ADM_DELETE", "ADM"]

    const commandFound = command_list.find(command => {
        return data.toUpperCase().search(command) > -1
    })

    if (commandFound) return await route(commandFound);
    
    return await route("CURRENT_PATH")
}

export default filterCommand