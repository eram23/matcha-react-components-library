import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from "./components/Button/Button"
import Card from "./components/Cards/index"
import Testimonial from "./components/Testimonial/index"
import NavMenu  from './components/NavMenu/NavMenu';
import NavItem from './components/NavMenu/NavItem';
import NavDropDown from './components/NavMenu/NavDropDown';
import Banner from './components/Banner/index'
import Footer from './components/Footer/index'  

function App() {
  return (
    <>
    
      <main>
        <h1>Matcha Component Library 🍵</h1>
        <p>React component library for all the matcha lovers who want to add some 
        earthy flavor to their project. This library consists of buttons, cards, banners,
        and testimonials.
        </p>
        
        <h2>Matcha Buttons</h2>
        <div className="component-container btn-container">
          <Button className="matcha-btn">Primary Button</Button>
          <Button className="matcha-btn secondary">Secondary Button</Button>
          <Button className="matcha-btn disabled">Disabled Button</Button>
        </div>

        <h2>Matcha Nav</h2>
        <div className="component-container">
          <NavMenu>
            <NavDropDown>
              <NavItem>home</NavItem>
              <NavItem>about</NavItem>
            </NavDropDown>
          </NavMenu>
        </div>
        
        <h2>Matcha Card</h2>
        <div className="component-container">
          <Card>
            <Card.Title>Easy Deployment</Card.Title>
            <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </Card.Body>
          </Card>
        </div>
        
        <h2>Matcha Testimonial</h2>
        <div className="component-container">
          <Testimonial>
            <Testimonial.Logo >
              <img src="/images/logo-ex.png" />
            </Testimonial.Logo>
            <Testimonial.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
            </Testimonial.Body>
            <Testimonial.Source><span className="testimonial-author">May Andersons / </span>Workcation, CTO</Testimonial.Source>
          </Testimonial>
        </div>

        <h2>Matcha Banners</h2>
        <div className="component-container">
          <Banner className="banner">
            <img src="./images/success.svg" />
            <Banner.Content>
              <Banner.Title>Congratulations</Banner.Title>
              <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
            </Banner.Content>
          </Banner>
          
          <Banner className="banner neutral">
            <img src="./images/warning.svg" />
            <Banner.Content>
              <Banner.Title>Attention</Banner.Title>
              <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
            </Banner.Content>
          </Banner>
          
          <Banner className="banner neutral">
            <img src="./images/neutral.svg" />
            <Banner.Content>
              <Banner.Title>Update Available</Banner.Title>
              <Banner.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner.Body>
            </Banner.Content>
          </Banner>
        </div> 

        <h2>Matcha Footer</h2>
      </main>
        
        <Footer>
          <Footer.Content className="footer-content">
            <Footer.Logo>
              <span className="logo">
                    <img src="./images/logo-ex-2.svg"/>
                    logo
              </span>
            </Footer.Logo>
            <span className="footer-line"></span>
            <Footer.Pages>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </Footer.Pages>
          </Footer.Content>
        </Footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
