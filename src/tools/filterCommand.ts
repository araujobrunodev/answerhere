import route, { Routes } from "./routes"

/**
 * @function filterCommand
 * detect a command section and run it,
 * but if isn't a command, so happen nothing in the interface
*/
function filterCommand (data: string):string {
    const start_command = data.search(">")

    if (start_command === -1) return data;

    const command_list = ["!TITLE", "!SIDES", "MAIN", "PLAY", "EXIT", "ADM_CREATE", "ADM_READ", "ADM_UPDATE", "ADM_DELETE", "ADM"]

    const commandFound = command_list.find(command => {
        return data.toLocaleUpperCase().search(command) > -1
    })

    if (commandFound != undefined) route(commandFound as Routes)
        
    return data
}

export default filterCommand