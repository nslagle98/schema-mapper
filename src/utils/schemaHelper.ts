/**
 * By passing a path string using json dot notation, dynamically add the passed value
 * to that path in the targetObject
 *
 * @param {any} targetObject - Object for value to be added
 * @param {string} path - JSON dot notation path for value to be added e.x. "user.job.experience" 
 * @param {any} newItem - value to be added 
 */
const quoteRegex = /\"/g

export function dynamicObjectAdd(object: any, value: string, kv: {key:string, value: any}) {
    const fields = value.split('.')
    console.log(JSON.stringify(fields))
    return fields.reduce((acc, curr) => {
        console.log(`acc: ${JSON.stringify(acc)}, curr: ${JSON.stringify(curr)}`);
        
        //if most child field
        if( curr.replace(quoteRegex, "" ) == fields[fields.length-1]) {
            acc[curr][kv.key] = kv.value
            return object
        }
        if(acc[curr] === undefined) {
            acc[curr] = {}
        }
        return acc[curr]
    }, object);
}
