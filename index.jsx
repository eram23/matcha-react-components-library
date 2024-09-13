import React from 'react'  
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button"
import Card from "./components/Cards/index"
import Testimonial from "./components/Testimonial/index"
import NavMenu  from './components/NavMenu/NavMenu';
import NavItem from './components/NavMenu/NavItem';
import NavDropDown from './components/NavMenu/NavDropDown';
import Banner from './components/Banner/index'
import Footer from './components/Footer/index'  
import classNames from 'classnames'
import successImg from '/images/success.svg'
import warningImg from '/images/warning.svg'
import neutralImg from '/images/neutral.svg'

const ThemeContext = React.createContext('light')

function App() {
  const [theme, setTheme] = React.useState('dark')

  function toggleTheme() {
    setTheme(theme === 'dark'? 'light' : 'dark')
  }
  const headerClass = theme === 'dark' ? 'header-dark' : null
  const toggleBtn = theme === 'dark' ? 'toggle-btn-dark' : 'toggle-btn'
  // allClasses = classNames()
  return (
    <ThemeContext.Provider value={theme}>
    
      <main className={theme}>
        <div className="container">
          <h1 className={headerClass}>Matcha Component Library 🍵</h1>

          <button className={toggleBtn} onClick={toggleTheme}>{theme === 'dark' ? 'Dark' : 'Light'}</button>

          <p className={theme}>React component library for all the matcha lovers who want to add some 
          earthy flavor to their project. This library consists of buttons, cards, banners,
          and testimonials.
          </p>
          <span className=""></span>
          
          <h2 className={headerClass}>Matcha Nav</h2>
          <div className="component-container">
            <NavMenu>
              <NavDropDown>
                <NavItem>home</NavItem>
                <NavItem>about</NavItem>
              </NavDropDown>
            </NavMenu>
          </div>
          
          <h2 className={headerClass}>Matcha Buttons</h2>
          <div className="component-container btn-container">
            <Button className="matcha-btn">Primary Button</Button>
            <Button className="matcha-btn secondary">Secondary Button</Button>
            <Button className="matcha-btn disabled">Disabled Button</Button>
          </div>

          
          <h2 className={headerClass}>Matcha Card</h2>
          <div className="component-container">
            <Card>
              <Card.Title>Easy Deployment</Card.Title>
              <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </Card.Body>
            </Card>
          </div>
          
          <h2 className={headerClass}>Matcha Testimonial</h2>
          <div className="component-container">
            <Testimonial>
              <Testimonial.Logo />
              <Testimonial.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. 
                Numquam corrupti in laborum sed rerum et corporis.
              </Testimonial.Body>
              <Testimonial.Source><span className="testimonial-author">May Andersons / </span>Workcation, CTO</Testimonial.Source>
            </Testimonial>
          </div>

          <h2 className={headerClass}>Matcha Banners</h2>
          <div className="component-container">
            <Banner>
              <img src={successImg} />
              <Banner.Content>
                <Banner.Title>Congratulations</Banner.Title>
                <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
              </Banner.Content>
            </Banner>
            
            <Banner className="neutral">
              <img src={warningImg} />
              <Banner.Content>
                <Banner.Title>Attention</Banner.Title>
                <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
              </Banner.Content>
            </Banner>
            
            <Banner className="neutral">
              <img src={neutralImg} />
              <Banner.Content>
                <Banner.Title>Update Available</Banner.Title>
                <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
              </Banner.Content>
            </Banner>
          </div> 

          <h2 className={headerClass}>Matcha Footer</h2>
        </div>
      </main>
        
        <Footer>
          <Footer.Content className="footer-content">
            <Footer.Logo />
            <span className="footer-line"></span>
            <Footer.Pages>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </Footer.Pages>
          </Footer.Content>
        </Footer>
    </ThemeContext.Provider>
  )
}

export { ThemeContext }

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
