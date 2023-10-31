import { HtmlHTMLAttributes, useState } from "react"
import { JsonDatatype } from "../types/SchemaTypes"
interface FieldAdderProps {
    activateChoosing: () => void
    sourceChoice: { path: string, dt: string} 
    handleSchemaItemAdd: (keyName: string, datatype: JsonDatatype, sourcePath: string) => void
}

export default function FieldAdder({ activateChoosing, sourceChoice, handleSchemaItemAdd}: FieldAdderProps) {

    const [ field, setField ] = useState<{name: string, datatype: JsonDatatype}>({ name: "", datatype:"string"})    
    function handleNameChange(e:any) {
       setField({ ...field, name: e.target.value}) 
    }
    function handleDtChange(e:any) {
        setField({...field, datatype: e.target.value})
    }

    function handleSubmit() {
        //check if source datatype is compatible with chosen datatype
        handleSchemaItemAdd(field.name, field.datatype, sourceChoice.path)
    }

    return (
        <div className="bg-gray-100 p-8">
            <h2>Add schema parameter</h2>
            <div className="grid grid-cols-2">
                <label>Field Name</label>
                <input type="text" onChange={handleNameChange} className="border border-gray-300" value={field.name}/>
                <label>Source Value</label>
                <button onClick={activateChoosing} className="bg-blue-500 ">Click source field</button>
                <label>Target datatype</label>
                <input type="text" className="border border-gray-300" onChange={handleDtChange} value={field.datatype}/>
            </div>
            <div className="flex flex-col items-center ">
            <button onClick={handleSubmit} className="bg-blue-500 w-40 p-1 m-6 text-white rounded-lg">Add parameter</button>
            </div>
        </div>
    )

}
