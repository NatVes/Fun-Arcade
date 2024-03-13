import fetchData from "../src/utils/API";

function App() {  

  const img = fetchData();
  console.log(img)
  return (
    <>
      <div></div>
    </>
  )
}

export default App