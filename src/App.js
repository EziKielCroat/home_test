import './App.css';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <SideNav />
        <Main />
      </div>
    </div>
  );
}

export default App;
