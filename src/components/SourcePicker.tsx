import { JsonMetaSchema } from "../types/SchemaTypes"
import { v4 as uuidv4 } from 'uuid'
import SourceItem from "./SourceItem"
import { ReactElement } from "react"
interface SourcePickerProps {
    schema: JsonMetaSchema
}

export default function SourcePicker({ schema }: SourcePickerProps ) {
    
    return (
        <>
            <div className="flex flex-col">{extractSchemaButtons(schema?.properties)}</div>
        </>
    )

}

export function extractSchemaButtons( properties: any ): ReactElement[] {
    let buttonList = []

    const depth = 0
    
    generateButtons(properties, depth)
        
    function generateButtons(properties: any, depth: number) {

        Object.keys(properties).forEach( key => {
            if(properties[key].type === "object"){
                buttonList.push( <SourceItem key={ uuidv4() } depth={depth} name={key} type={properties[key].type} /> )
                generateButtons(properties[key]?.properties, depth+1)
                return
            }
            else buttonList.push( <SourceItem key={uuidv4()} depth={depth} name={key} type={properties[key].type}/> )

            })
    }
    return buttonList
}

