import './App.css';
import { Header, Hero, About, Education, Skills, Contact, Footer } from './components';

function App() {

  return (
    <div className="App">
      <main>
        <Header />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
