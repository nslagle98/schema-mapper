export default function SchemaInput() {

    return (
        <div className="flex flex-col">
            <textarea className="block p-2.5 text-sm text-black m-16 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
        
            <button className="border border-blue-500 bg-blue-500 text-white w-48 self-center rounded-lg text-center p-2 hover:bg-red-700">Submit Schema</button>
        </div>
    )
}
