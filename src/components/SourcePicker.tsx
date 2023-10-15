import SourceItem from "./SourceItem"
import { JsonMetaSchema, Property } from "../types/SchemaTypes"
interface SourcePickerProps {
    schema: any
}

export default function SourcePicker({ schema }: SourcePickerProps ) {
   
    const jsonParse = parseJsonSchema(schema).flat()
    
    return (
        <>
            <h2>Parsed Schema</h2>
            <div>{jsonParse}</div>
        </>
    )

}
/*
 * What should this function do?
 * 1. extract all fields from parameters
 * 2. contstruct JSON object that represents the schema w/ key as param name and value as datatype (or child schema)
 *
 */
export function parseJsonSchema( schema: JsonMetaSchema): any[] {
   
    console.log(`Schema => ${JSON.stringify(schema)}`)
    if(!schema.properties) return []
    const schemaItems= extractFieldsFromKeys(schema.properties)
    return schemaItems

}

function extractFieldsFromKeys( propertiesObject: any ): any {

    let schemaItems: any[] = []

    console.log(`Properties => ${JSON.stringify(propertiesObject)}`)
    Object.keys(propertiesObject).forEach( key => {
        const property: Property = propertiesObject[key]   
        if( property.type === "object" && !Array.isArray(property.type)) {
           schemaItems.push(extractFieldsFromKeys( property.properties))
        }
        else return ( <SourceItem name={key} type={property.type}/> )
    })
    return schemaItems
}

