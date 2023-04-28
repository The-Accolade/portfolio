import './App.css';
// import Logo from './assets/images/Akolade.svg'
import { Navbar, Hero } from './components';

function App() {
  return (
    <div className="App">
      <header>
        {/*<img className='logo' src={Logo} alt='company-brand' /> */}
        <div className='logo'>Akolade.</div>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
