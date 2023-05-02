import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ButtonClick from './components/ButtonClick';

function App() {
  return (
  <div>
    <div className="App">
      <Header />
    </div>
    <ButtonClick />
    <div>
      <Footer />
    </div>
  </div>
  );
}

export default App;