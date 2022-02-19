import './App.css';
import Header from './Header';
import Tartalom from './Tartalom';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Tartalom darabszam={7}/>
      <Footer nev={"Gulácsi-Szabó Tímea"} link={'https://github.com/Lamea647/gulacsiszabotimea_react-elso'} />
    </div>
  );
}

export default App;
