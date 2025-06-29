/**
 * @function timer
 * @param {number} wait
 * This is a timer who wait by seconds
*/
async function timer (wait:number):Promise<any> {
    return new Promise((resolve) => 
        setTimeout(() => resolve(wait), wait * 1000)
    )    
} 

export default timer