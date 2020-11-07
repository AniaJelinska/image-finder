import './App.css';
import SearchImages from './components/SearchImages';
// import Autocomplete from './components/Autocomplete';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <SearchImages />
        {/* <Autocomplete /> */}
      </div>
    </div>
  );
}

export default App;
