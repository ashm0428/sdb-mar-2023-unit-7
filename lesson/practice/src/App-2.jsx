import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PresidentVoting from './components/Presidents/PresidentVoting';
import MovieReview from './components/MovieReview/MovieReview';

function App() {
  return (
  <div>
    <div className="App">
      <Header />
    </div>
    <PresidentVoting />
    <MovieReview />
    <div>
      <Footer />
    </div>
  </div>
  );
}

export default App;