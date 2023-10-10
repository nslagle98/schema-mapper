import FieldAdder from "./components/FieldAdder"
import SchemaInput from "./components/SchemaInput"

function App() {

  return (
    <>
      <h1 className="flex justify-center p-8">Schema Mapper</h1>
      <div className="grid grid-cols-2 gap-4">
          <SchemaInput />
          <FieldAdder />          
      </div>
    </>
  )
}

export default App
