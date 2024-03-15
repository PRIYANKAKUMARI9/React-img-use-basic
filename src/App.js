import logo from './logo.svg';
import './App.css';
import weblogo from './imgALL/logo1.svg'
import weblogo2 from './imgALL/logo2.avif' 
import webimg from './imgALL/nature.webp'
import webimg2 from './imgALL/natur2.jpeg'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <img width={200} src={webimg}></img>
      <img width={200}  src={weblogo}></img>
      <img width={200} src={weblogo2}/>
      <img width={300} src={webimg2}></img>
    </div>
  );
}

export default App;
