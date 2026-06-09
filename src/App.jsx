import './App.css';
import { Header, Hero, About, Education, Projects, Skills, Contact, Footer } from './components';

function App() {
  return (
    <div className="App">
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
