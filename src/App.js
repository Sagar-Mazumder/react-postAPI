import './App.css';
import Countries from './components/Countries/Countries';



function App() {
  return (
    <div className="App">
      {/* <Country></Country> */}
      {/* <Nav></Nav>
      <Country></Country> */}

      <Countries></Countries>
    </div>
  );
}


















/* function Country() {
  const [allcountry, setAllcountry] = useState([])
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setAllcountry(data))
  }, [])
  return (
    <div>
      <h1>let's travell country</h1>
      <h4>Total country:{allcountry.length}</h4>

      {
        allcountry.map(country => <Countries name={country.name} capital={country.capital}></Countries>)
      }
    </div>
  )
}

function Countries(props) {
  return (
    <div>
      <h2>Name:{props.name}</h2>
      <h4>Capital:{props.capital}</h4>
    </div>
  )
} */

export default App;
