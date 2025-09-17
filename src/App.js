import logo from './logo.svg';
import './App.css';
import JustifiedExample from './components/Navbar';
import HomePage from './pages/Home';
import NavBar from './components/Navbar.jsx';
function App() {
  return (
    <div className="App">
                  <NavBar />
      <HomePage />
    </div>
    
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React fhgfbgfbgfcnb gngdggngfngfcnfgnznz
    //     </a>

    //     home page make add vehicle button let us direct to add vehicle page 
    //     in add vehicle page wecan add vehicle details and save it to database
    //     in home page we can see all vehicle details in card format in card we set booked vehicle button
    //  h   and we can edit and delete vehicle details
    //  h   and we can search vehicle details by vehicle number
    //  h   and we can filter vehicle details by vehicle type
    //  h   and customer book vehicle by vehicle number
    //   </header>
    // </div>

  );
}

export default App;
