import { JsonMetaSchema, Property } from "../types/SchemaTypes"
interface SourcePickerProps {
    schema: any
}

export default function SourcePicker({ schema }: SourcePickerProps ) {
    

    return (
        <>
            <h2>Original Schema</h2>
            <div>{schema}</div>
            <h2>Parsed Schema</h2>
            <div>{parseJsonSchema(schema)}</div>
        </>
    )

}
/*
 * What should this function do?
 * 1. extract all fields from parameters
 * 2. contstruct JSON object that represents the schema w/ key as param name and value as datatype (or child schema
 *
 */
export function parseJsonSchema( schema: JsonMetaSchema) {
   
    console.log(`Schema => ${JSON.stringify(schema)}`)
    if(!schema.properties) return {}
    const schemaObject = extractFieldsFromKeys(schema.properties)
    return schemaObject
}

function extractFieldsFromKeys( propertiesObject: any ): any {

    let schemaObject: any = {}

    console.log(`Properties => ${JSON.stringify(propertiesObject)}`)
    Object.keys(propertiesObject).forEach( key => {
        const property: Property = propertiesObject[key]   
        if( property.type === "object") {
            schemaObject[key] = extractFieldsFromKeys( property.properties) 
        }
        else schemaObject[key] = property.type
    })
    return schemaObject
}
