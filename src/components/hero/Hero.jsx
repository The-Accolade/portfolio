import { useRef, useEffect} from 'react'
import Typed from 'typed.js'
import HeroImage from '../../assets/images/Hero-img.png'
import './Hero.css'

const Hero = () => {

    const multipleText = useRef(null);

    useEffect(() => {
        const typed = new Typed(multipleText.current, {
          strings: ['Frontend Developer', 'Website Designer', 'Graphics Designer', 'Coding Tutor', 'Content Writer'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
    }, []);

  return (
    <section>
        <div className='hero-content'>
            <h3>Hello, I am</h3>
            <h1>Akolade Olusola</h1>
            <h3>And I am a <span className='multiple-text' ref={multipleText}></span></h3>
            <p>Html & CSS, Tailwind, Vanilla Javascript, Jquery, ReactJs, Redux, React Hooks, React Lifecycle, VueJs 2 & 3, Vuex, Node Js, Express Js, MongoDB </p>
            {/*<p>Graduate of English Education turned Software Engineer with about three years experience in building functional responsive web
            applications and Restful APIs utilizing HTML5, CSS3-SCSS, Javascript, ReactJs and VueJs. Values simplicity and readability in coding.
  He also prides himself proficient in other roles such as technical support and content writing.</p>*/}
            <div className='social-media'>
                <a style={{'--i': 7}} href='https://www.facebook.com/koladeko/'><i class='bx bxl-facebook'></i></a>
                <a style={{'--i': 8}} href='https://twitter.com/AkoladeOlusola'><i class='bx bxl-twitter'></i></a>
                <a style={{'--i': 9}} href='https://www.linkedin.com/in/akolade-olusola/'><i class='bx bxl-linkedin'></i></a>
                <a style={{'--i': 10}} href='https://www.instagram.com/akolade_olusola/'><i class='bx bxl-instagram-alt'></i></a>
            </div>
            <a href='https://' className='btn'>Download Resume</a>
        </div>
        <div className='hero-img'>
            <img src={HeroImage} alt="Akolade" />
        </div>
    </section>
  )
}

export default Hero