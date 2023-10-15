import { useState } from "react"

interface SchemaInputProps {
    schema: any 
    setSchema: ( schema: any ) => void 
}

export default function SchemaInput({ schema,  setSchema }: SchemaInputProps) {

    let [inputText, setInputText] = useState("")
    let [visibleSchema, setVisibleSchema ] = useState(false)
    
    function handleSubmit() {
        setSchema(inputText)
        setVisibleSchema(!visibleSchema)
    }

    return (
        <div className="grid grid-cols-1">
            <h2>Enter your schema</h2>
            <textarea value={inputText} onChange={ e => setInputText(e.target.value)} className="block p-2.5 text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
            { !visibleSchema && 
                <button onClick={handleSubmit} className="border bg-blue-500 text-white self-center rounded-lg text-center p-2 hover:bg-blue-200 hover:text-gray-800">Submit Schema</button>
            }
            { visibleSchema &&
                <p>{inputText}</p>
            }
        </div>
    )
}
