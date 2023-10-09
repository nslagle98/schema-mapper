export default function SchemaInput() {

    return (
        <div className="grid grid-cols-1">
            <textarea className="block p-2.5 text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
            <button className="border bg-blue-500 text-white self-center rounded-lg text-center p-2 hover:bg-blue-200 hover:text-gray-800">Submit Schema</button>
        </div>
    )
}
