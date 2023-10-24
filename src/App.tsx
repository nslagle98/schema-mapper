import { useState } from "react"
import FieldAdder from "./components/FieldAdder"
import SchemaInput from "./components/SchemaInput"
import SourcePicker from "./components/SourcePicker"
import { JsonDatatype } from "./types/SchemaTypes"

function App() {

    let [ currSchema, setCurrSchema ] = useState()
    let [ didSubmit, setDidSubmit ] = useState(false)
    let [ activelyChoosing, setActivelyChoosing ] = useState(false)
    let [ sourceChoice, setSourceChoice ] = useState(null)
    let [ userSchema, setUserSchema ] = useState({}) 
    
    function handleSchemaUpdate(schema: any) {
        setCurrSchema(JSON.parse(schema))
        setDidSubmit(true)
    }

    function handleActivateSchemaSourceChoice() {
        setActivelyChoosing(true)
    }

    function handleChooseSource( path: string) {
        setActivelyChoosing(false)
        setSourceChoice(path)
    }
    
    function handleSchemaItemAdd(keyName: string, datatype: JsonDatatype, sourcePath: string) {
        let newSchema = userSchema
        newSchema[keyName] = { type: datatype, source: sourcePath }
        setUserSchema(newSchema)
    }



    return (
        <div className="m-10">
            <h1 className="flex justify-center p-8">Schema Mapper</h1>
            <div className="grid grid-cols-2 gap-4">
                { !didSubmit &&
                    <SchemaInput schema={currSchema}  setSchema={handleSchemaUpdate} />
                }
                { didSubmit &&
                <SourcePicker schema={currSchema} activelyChoosing={activelyChoosing}/>
                }
                <FieldAdder sourceChoice={sourceChoice} addItem={handleSchemaItemAdd} activateChoosing={handleActivateSchemaSourceChoice}/>          
            </div>
        </div>
   )
}

export default App
