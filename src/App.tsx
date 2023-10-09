import SchemaFields from "./components/SchemaFields"
import SchemaInput from "./components/SchemaInput"

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <div className="grid grid-cols-2 gap-4">
          <SchemaInput />
          <SchemaFields/>      
      </div>
    </>
  )
}

export default App
