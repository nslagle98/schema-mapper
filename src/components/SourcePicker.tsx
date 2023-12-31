import { JsonMetaSchema } from "../types/SchemaTypes"
import { v4 as uuidv4 } from 'uuid'
import SourceItem from "./SourceItem"
import { ReactElement } from "react"
interface SourcePickerProps {
    schema: JsonMetaSchema
    activelyChoosing: boolean
    chooseSource: (path: string, dt: string) => void
}

export default function SourcePicker({ schema, activelyChoosing, chooseSource}: SourcePickerProps ) {
    
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
            generateButtons(properties, depth, "")

            function generateButtons(properties: any, depth: number, currPath: string ) {

                Object.keys(properties).forEach( key => {
                    const newPath = currPath === "" ? key : `${currPath}.${key}`
                    if(properties[key].type === "object"){
                        buttonList.push( 
                            <SourceItem 
                                key={ uuidv4() } chooseSource={chooseSource} depth={depth} name={key} type={properties[key].type} active={activelyChoosing} path={newPath}
                            /> 
                        )
                        generateButtons(properties[key]?.properties, depth+1, newPath)
                        return
                    }
                    else buttonList.push(
                        <SourceItem 
                            key={uuidv4()} chooseSource={chooseSource} depth={depth} name={key} type={properties[key].type} active={activelyChoosing} path={newPath}
                        />
                    )

                        })
                }
                return buttonList
            }
    }


