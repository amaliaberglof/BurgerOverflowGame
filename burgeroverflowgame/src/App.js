import "./App.css";
import amalia from "./images/amalia.png";
import albin from "./images/albin.png";
import bosen from "./images/bosen.png";
import ao from "./images/ao.png";
import przemyslaw from "./images/przemyslaw.png";
import cheeseDivider from "./images/background_cheese.jpg";
import reactlogo from "./images/react_logo.png";
import jslogo from "./images/javascript_logo.png";
import tslogo from "./images/typescript_logo.png";
import socketlogo from "./images/socket_logo.png";
import blenderlogo from "./images/blender_logo.png";
import threejslogo from "./images/three-js-logo.png";
import promopad from "./images/promopad.png";
import burgerLogo from "./images/burgerLogo.JPG"

function App() {
  const scrollIntoView = (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img className="logoImg2" src={burgerLogo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollIntoView("section-2")}
              >
                About the project
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollIntoView("section-3")}
              >
                Future development
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => scrollIntoView("section-4")}
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="section-1" className="section-1">
        <h1>Burger Overflow - the game</h1>
      </div>
      <div className="custom-shape-divider-top-1635227694">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="section section-2">
        <div className="section__title section__title--head">
          <h2 id="section-2"> 🍅 About the project</h2>
        </div>
        <p>
          Burger Overflow is an augmented advertisement, which uses gamification
          in order to drive interest in public spaces. The project was made as a
          part of the course DH2413 - Advanced Graphics and Interaction at KTH
          Royal Institute of Technology.
        </p>
        <h4 className="section__title">Demo</h4>
        <p>Video goes here</p>
        <h4 className="section__title">Goal and motivation</h4>
        <p>
          The goal of the project was to create a light-weight easy-accessible
          game for public spaces, while still providing great graphics and a
          great game experience. We also wanted to learn how to build a 3D-game
          without using Unity, and learn how to use other 3D-toolkits.
        </p>
        <h4 className="section__title">Tech stack</h4>
        <p>
          <span>
            <img className="logoImg2" src={reactlogo} />
            <img className="logoImg2" src={jslogo} />
            <img className="logoImg2" src={tslogo} />
          </span>
          Both the client (mobile web app), host (display) and the server was
          built using <b>React</b>, <b>Javascript</b> and <b>Typescript</b>.
          This enables us to create a lightweight multi-browser application that
          can be run on the users phone. You don't have to download anything on
          your phone, the only thing you have to have is a phone with a
          gyroscope sensor - that helps with building trust towards the
          application from users in public spaces.
        </p>
        <p>
          <img className="logoImg2" src={socketlogo} />
          The client and the host communicates with each other and the server
          through the library <a href="https://socket.io/">socket.io</a>. That
          enables us to have a real-time rendering of user movements. The user
          can therefor send actions to the large display (clicks, sensor data),
          and the host can send data to the user (game has ended, discounts).
          Real-time data creates immersiveness in the game, and helps the user
          understand how their movements are mapped by the game.
        </p>
        <p>
          <img
            className="logoImg"
            src="https://img.icons8.com/ios/100/000000/gyroscope.png"
          />
          The gyroscope data from the phone is collected by the client, cleaned
          and mapped to an accelerometer factor, in order to make the game more
          interactive and not as static.
        </p>
        <p>
          <span>
            <img className="logoImg2" src={blenderlogo} />
            <img className="logoImg2" src={threejslogo} />
          </span>
          The graphics and the rendering of them were made using Blender and{" "}
          <a href="https://threejs.org/">Three.js</a>. Three.js enables us to
          create the 3D graphics and render the scenes created in Blender.
        </p>
        <h4 className="section__title">Related work</h4>
        <p>
          <span>
            <img
              className="image-100"
              src="https://www.valtech.com/49ee47/globalassets/14-sweden/02-images/04-insights/valtech-store/_mg_7040.jpg?w=940&h=530&mode=crop&format=jpg"
            />
          </span>
          <b>
            Valtech Connected Shoe (2017)
            <br />
          </b>
          Valtech Connected Shoe was a project by the company Valtech, where a
          built in gyroscope in the shoe made the user the controller of the
          rendering of the shoe on a big display. The user could change color of
          the shoe and also get detailed information about the shoe.
        </p>
        <p>
          <span>
            <img
              className="image-100"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/448510/capsule_616x353.jpg?t=1594197612"
            />
          </span>
          <b>
            Overcooked (2016)
            <br />
          </b>
          Overcooked is an isometric 2.5D game where you work in a kitchen. The
          food is prepared at different stations in the kitchen, once the food
          is cooked it has to be plated in a certain order, and then served.
        </p>
        <p>
          <span>
            <img className="image-100" src={promopad} />
          </span>
          <b>
            Promopad (2004)
            <br />
          </b>
          Promopad is a personalized in-store e-commerce tool, that creates an
          augmented reality shopping experience.
        </p>
      </div>
      <img src={cheeseDivider} alt="Cheese" className="section-divider" />
      <div className="section section-3">
        <h2 id="section-3" className="section__title section__title--head">
          🥯 Future development
        </h2>
        <p>
          The project has been user tested during two sessions, one during
          development phase and one final presentation.
        </p>
        <h4 className="section__title">Challenges and obstacles</h4>
        <p>Insert text here</p>
      </div>
      <img src={cheeseDivider} alt="Cheese" className="section-divider" />
      <div className="section section-4">
        <h2 id="section-4" className="section__title section__title--head">
          🧀 About us
        </h2>
        <div className="section__row">
          <div className="section__column">
            <img className="image-100" src={albin} alt="Albin" />
            Albin Matson Gyllang
          </div>
          <div className="section__column">
            <img className="image-100" src={amalia} alt="Amalia" />
            Amalia Berglöf
          </div>
          <div className="section__column">
            <img className="image-100" src={ao} alt="Ao" />
            Ao Xu
          </div>
          <div className="section__column">
            <img className="image-100" src={bosen} alt="Bosen" />
            Bosen Cheng
          </div>
          <div className="section__column">
            <img className="image-100" src={przemyslaw} alt="Przemyslaw" />
            Przemyslaw Kowalewski
          </div>
        </div>
        <h4 className="section__title">Individual Contributions</h4>
        <p>Insert text here</p>
        <h4 className="section__title">Lessons learned</h4>
        <p>Insert text here</p>
      </div>
    </div>
  );
}

export default App;
