import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect (() => {
    const fetchData = async () => {
  try {
    const response = await fetch( "https://pokeapi.co/api/v2/pokemon/");
    const jsonData = await response.json();
    setData(jsonData.results);
  } catch (error) {
    console.errror("error fetching data:",error);
  }
}; 
fetchData();
 }, []);

return(
  <>

    { data.map((item)=><h1>{item.name}</h1> )}


  </>
) 
}

export default App
