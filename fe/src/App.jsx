import { useEffect, useState } from "react"
import axios from "axios"
function App() {
  const [value, setvalue] = useState("")
  const [arr, setarr] = useState([])
  function handlevalue(evt) {
    setvalue(evt.target.value)
  }
  const addvluetoarr = () => {
    axios.post("http://localhost:4000/datasent", { newvalue: value })
    setvalue("")
  }
  useEffect(() => {
    axios.get("http://localhost:4000/data").then((data) => {
      setarr(data.data)
      // console.log(data.data);
    }, [])
  })
  function deletedbvalue(props) {
    var dbindex = props.itm.itm.name
    // console.log(dbindex);
    axios.post("http://localhost:4000/delete", { delval: dbindex })
  }
  return (
    <>
    <div className="py-8">
      <div className="flex gap-4">
        <input value={value} onChange={handlevalue} type="text" className="inputBox"/>
        <button onClick={addvluetoarr} className="text-white w-16 bg-black rounded">Add..</button>
      </div>

      <ul  className="text-white">
        {
          arr.map((itm, index) => {
            return (
              <div key={index} style={{ display: "flex" }} className="flex justify-between bold item_show_container">
                <h1 >{itm.name}</h1><button onClick={() => { deletedbvalue({ index: { index }, itm: { itm } }) }} style={{ height: "fit-content" }} className="delete_BTN">Delete</button>
              </div>
            )
          })
        }
      </ul>
    </div>
    </>
  )
}
export default App
