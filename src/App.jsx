import { useState , useEffect} from 'react'
import './App.css'
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



        // Seleccionamos el botón por su ID
        const button = document.getElementById('changeColorButton');

        // Función para generar un color aleatorio en formato hexadecimal
        function getRandomColor() {
            return '#' + Math.floor(Math.random() * 16777215).toString(16);
        }

        // Agregamos un evento al botón para cambiar el color de fondo
        button.addEventListener('click', () => {
            const randomColor = getRandomColor(); // Generamos un color aleatorio
            document.body.style.backgroundColor = randomColor; // Cambiamos el fondo
        });

return(
  <>
  <div>
 
  {
    cargando && <h1>ESPERE UNOS MINUTOS, MUCHAS GRACIAS!!!</h1>
  }

  {abierto &&
  <div className='card'>
    { <img src={data.message}></img> }

  </div>

  }

    <h1>Cambiar el Color de Fondo</h1>
    <button id="changeColorButton">Cambiar Color</button>

</div>
  </>
) 
}

export default App
