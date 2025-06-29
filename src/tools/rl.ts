import * as readline from "readline"
import {stdin, stdout} from "process"

/**
 * Create an interface to interact with I/O
*/
const current_interface = readline.createInterface({
    input: stdin,
    output: stdout,
})

export {current_interface, readline}