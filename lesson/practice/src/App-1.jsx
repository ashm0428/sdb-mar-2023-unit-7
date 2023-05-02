import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ChallengeOneInstructions from './components/challenge/ChallengeOneInstructions';
import AboutMe from './components/challenge/AboutMe';
import StudentInformation from './components/StudentInformation';

function App() {
  const students =[
    {name: "Ben Allen", age: 25, city: "Indianapolis", state:"IN", favoriteFoods: ["sloppy joe", "tbone steak", "chicken sandwich"]},
    {name: 'Gina Turner', age: 28, city: "Boston", state:"MA", favoriteFoods: ["salad", "BLT", "taco"]},
    {name: "Willow Ramsey", age: 32, city: "Jackson", state: "MS", favoriteFoods: ["sushi", "fried chicken", "spaghetti"]},
  ]
  return (
  <div>
    <div className="App">
      <Header />
    </div>
    <ChallengeOneInstructions />
    <AboutMe />

    {students.map((student, index) => (
    <StudentInformation key= {index} student={student} />))}

    {/* <StudentInformation student={students[0]}/>
    <StudentInformation student={students[1]}/> */}

    <div>
      <Footer />
    </div>
  </div>
  );
}

export default App;
