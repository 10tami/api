import { useState , useEffect} from 'react'
import './App.css'
import saludar from './Doc.js'
import TextType from './Componentes.jsx/TextType.jsx';

function App() {
  const [data, setData] = useState([])
  const [abierto, setAbierto] = useState (true)
  const [cargando, setCargando] = useState (true)
 console.log(saludar("SEÑOR USUARIO"));
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
  <div className='bg-emerald-800 w-150 h-100dvh'>
 
  {
    cargando && <h1 >ESPERE UNOS MINUTOS, MUCHAS GRACIAS!!!</h1>
  }

  {abierto &&
  <div className='card'>
    { <img src={data.message}></img> }

  </div>
  

  }




<TextType 
  text={["Los perros son compañeros leales", "Ellos nos dan su amor incondicional", "¡¡¡Eso sí que es un amigo de verdad!!!"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>


</div>




  </>
) 
}

export default App
