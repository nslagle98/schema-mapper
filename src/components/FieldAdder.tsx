import { useState } from "react"
interface FieldAdderProps {
    activateChoosing: () => void
    sourceChoice: string
    addItem: () => void
}

export default function FieldAdder({ activateChoosing, sourceChoice, addItem }: FieldAdderProps) {

    const [ fieldDetails, setFieldDetails ] = useState( { fieldName: "", fieldDatatype: "" } )

    return (
        <div className="bg-gray-100 p-8">
            <h2>Add schema parameter</h2>
            <div className="grid grid-cols-2">
                <label>Field Name</label>
                <input type="text" className="border border-gray-300"/>
                <label>Source Value</label>
                <input type="text" className="border border-gray-300"/>
                <label>Target datatype</label>
                <div className="grid grid-flow-col">
                    <input type="text" className="border border-gray-300"/>
                    <button onClick={activateChoosing} className="bg-blue-500 ">Click source field</button>
                </div>
            </div>
            <div className="flex flex-col items-center ">
            <button className="bg-blue-500 w-40 p-1 m-6 text-white rounded-lg">Add parameter</button>
            </div>
        </div>
    )

}
