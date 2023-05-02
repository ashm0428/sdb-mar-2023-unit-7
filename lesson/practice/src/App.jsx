import './App.css';
import "./components/soccer/style.css";
import Header from './components/Header';
import Footer from './components/Footer';
// import ChallengeThreeInstructions from './components/challenge/ChallengeThreeInstructions';
import SoccerButton from './components/soccer/SoccerButton';

function App() {
  return (
  <div>
    <div className="App">
      <Header />
    </div>
    {/* <ChallengeThreeInstructions /> */}
    <SoccerButton />
    <div>
      <Footer />
    </div>
  </div>
  );
}

export default App;
