
export default function FieldAdder() {
    
    return (
        <div className="bg-gray-100 p-8">
            <h2>Add schema parameter</h2>
            <div className="grid grid-cols-2">
                <label>Field Name</label>
                <input type="text" className="border border-gray-300"/>
                <label>Source Value</label>
                <input type="text" className="border border-gray-300"/>
                <label>Target datatype</label>
                <input type="text" className="border border-gray-300"/>
            </div>
            <div className="flex flex-col items-center ">
            <button className="bg-blue-500 w-40 p-1 m-6 text-white rounded-lg">Add parameter</button>
            </div>
        </div>
    )

}
