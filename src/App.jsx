import { useState , useEffect} from 'react'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [abierto, setAbierto] = useState (true)
  const [cargando, setCargando] = useState (true)

  useEffect (() => {
    const fetchData = async () => {
  try {
    const response = await fetch( "https://dog.ceo/api/breeds/image/random");
    const jsonData = await response.json();
    setData(jsonData);
    setCargando(false)
  } catch (error) {
    console.errror("error fetching data:",error);
  }
}; 
fetchData();
 }, []);

const cambiar = ()=>setAbierto(!abierto)




return(
  <>
  <div className='bg-emerald-800'>
 
  {
    cargando && <h1 >ESPERE UNOS MINUTOS, MUCHAS GRACIAS!!!</h1>
  }

  {abierto &&
  <div className='card'>
    { <img src={data.message}></img> }

  </div>

  }

<h2>Los perros son compañeros leales </h2>
<h2>Ellos nos dan su amor incondicional</h2>
<h2>¡¡¡Eso sí que es un amigo de verdad!!!</h2>

</div>
  </>
) 
}

export default App
