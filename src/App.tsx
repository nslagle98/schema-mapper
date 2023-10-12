import { useState } from "react"
import FieldAdder from "./components/FieldAdder"
import SchemaInput from "./components/SchemaInput"
import SourcePicker from "./components/SourcePicker"

function App() {

    let [ currSchema, setCurrSchema ] = useState()
    
    function handleSchemaUpdate(schema: any) {
        setCurrSchema(schema)
    }



    return (
        <>
            <h1 className="flex justify-center p-8">Schema Mapper</h1>
            <div className="grid grid-cols-2 gap-4">
                <SchemaInput schema={currSchema} setSchema={handleSchemaUpdate} />
                <FieldAdder />          
                <SourcePicker/>
                <p>{currSchema}</p>
            </div>
        </>
   )
}

export default App
