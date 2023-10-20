import { JsonMetaSchema } from "../types/SchemaTypes"
import { v4 as uuidv4 } from 'uuid'
import SourceItem from "./SourceItem"
import { ReactElement } from "react"
import { act } from "react-dom/test-utils"
interface SourcePickerProps {
    schema: JsonMetaSchema
    activelyChoosing: boolean
}

export default function SourcePicker({ schema, activelyChoosing }: SourcePickerProps ) {
    
    return (
        <div>
            <div>{ '{' }</div>
            <div>{extractSchemaButtons(schema?.properties)}</div>
            <div>{ '}' }</div>
        </div>
    )

    function extractSchemaButtons( properties: any ): ReactElement[] {
        let buttonList = []

            const depth = 0
            generateButtons(properties, depth)

            function generateButtons(properties: any, depth: number) {

                Object.keys(properties).forEach( key => {
                        if(properties[key].type === "object"){
                        buttonList.push( <SourceItem key={ uuidv4() } depth={depth} name={key} type={properties[key].type} active={activelyChoosing}/> )
                        generateButtons(properties[key]?.properties, depth+1)
                        return
                        }
                        else buttonList.push( <SourceItem key={uuidv4()} depth={depth} name={key} type={properties[key].type} active={activelyChoosing}/> )

                        })
                }
                return buttonList
            }
    }


