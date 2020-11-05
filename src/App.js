import './App.css';
import SearchInput from './components/SearchInput';
// import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Unsplash</h1>
        <p>The internet's source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <SearchInput />
        {/* <Autocomplete /> */}
      </div>
    </div>
  );
}

export default App;
