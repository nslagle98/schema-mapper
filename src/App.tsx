import { useState } from "react"
import FieldAdder from "./components/FieldAdder"
import SchemaInput from "./components/SchemaInput"
import SourcePicker from "./components/SourcePicker"

function App() {

    let [ currSchema, setCurrSchema ] = useState()
    let [ didSubmit, setDidSubmit ] = useState(false)
    
    function handleSchemaUpdate(schema: any) {
        setCurrSchema(JSON.parse(schema))
        setDidSubmit(true)
    }



    return (
        <div className="m-10">
            <h1 className="flex justify-center p-8">Schema Mapper</h1>
            <div className="grid grid-cols-2 gap-4">
                <SchemaInput schema={currSchema}  setSchema={handleSchemaUpdate} />
                <FieldAdder />          
                { didSubmit &&
                    <SourcePicker schema={currSchema}/>
                }
            </div>
        </div>
   )
}

export default App
