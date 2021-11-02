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
import burgerLogo from "./images/burgerLogo.JPG";
import userdemo from "./images/userdemo.jpg";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjeiwdQlf1sQS1EIkBxlvUSbPBDdZ5-7s",
  authDomain: "burgeroverflowgame.firebaseapp.com",
  projectId: "burgeroverflowgame",
  storageBucket: "burgeroverflowgame.appspot.com",
  messagingSenderId: "1039364363618",
  appId: "1:1039364363618:web:c287d1eb7a44fc3b49083b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
          <img
            src={userdemo}
            className="img-width-500 image-100"
            alt="user demo"
          />
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
              className="image-100 img-width-500"
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
          the shoe and also get detailed information about the shoe. This
          project served as inspiration of what gyroscope controls can look
          like.
        </p>
        <p>
          <span>
            <img
              className="image-100 img-width-500"
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/448510/capsule_616x353.jpg?t=1594197612"
            />
          </span>
          <b>
            Overcooked (2016)
            <br />
          </b>
          Overcooked is an isometric 2.5D game where you work in a kitchen. The
          food is prepared at different stations in the kitchen, once the food
          is cooked it has to be plated in a certain order, and then served. The
          game served as inspiration for some parts of the game.
        </p>
        <p>
          <span>
            <img className="image-100 img-width-500" src={promopad} />
          </span>
          <b>
            Promopad (2004)
            <br />
          </b>
          Promopad is a personalized in-store e-commerce tool, that creates an
          augmented reality shopping experience. The tool was one of the first
          of its kind to include AR in the setting of in-store shopping, and
          enables the user to get more information about the product they are
          buing.
        </p>
        <p>
          <b>
            Web-Based Integration of Mobile Devices Into Public Space Games
            (2018){" "}
            <a href="https://theses.fh-hagenberg.at/system/files/pdf/Temper18.pdf">
              [Link]
            </a>
            <br />
          </b>
          This paper served as a basis of understanding of what public space
          games can be, and techniques that can be used, such as websockets and
          QR codes.
        </p>
      </div>
      <div className="custom-shape-divider-bottom-1635876791">
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
      <div className="section section-3">
        <h2 id="section-3" className="section__title section__title--head">
          🥯 Future development
        </h2>
        <p>
          The project has been user tested during two sessions, one during
          development phase and one final presentation. What we found was that
          some managed to "hack the game", and a future development could be to
          challenge users when they have played enough times, or for long
          enough. The challenge could for example be that the plates start
          moving. Future development could also be to build on the game logic
          that's built into the game already, by for example adding extra
          feedback to the users by presenting them with their current score, or
          by adding other modalities such as vibration when you lose.
        </p>
        <h4 className="section__title">Challenges and obstacles</h4>
        <p>
          <b>Server</b>
        </p>
        <p>
          With Socket.IO, we implement the client-host-server structure to
          connect the player with the server which enabled us to send real time
          data. To be able to establish a connection during development and use
          gyroscope data, we had to solve the HTTPS issues by creating a
          certificate locally. This was done with the "mkcert" tool. To be able
          to do this in a demo setting, we hosted our website with a Raspberry
          Pi.{" "}
        </p>
        <p>
          <b>3D model and lighting</b>
        </p>
        <p>
          The models used inside this game are collected from the free right
          sources. Then we polished them to make the game objects more
          attractive, such as the juicyness of the tomato. We fixed the shadow
          problem of react-three-fiber by setting the shadow bias. We also used
          environmental lighting to give the kitchen a warmer feeling.
        </p>
        <p>
          <b>Controls</b>
        </p>
        <p>
          We implemented the controlling of the position by using the phone's
          built in gyroscope sensor. However, deciding on a mapping structure
          that felt intuitive for the user, and that made the game feel
          realistic and immersive, was a real challenge. Also, communicating to
          the user how the controls work was also tricky. The rotation data from
          the gyroscope is the Euler angle's three-axis, and to avoid the gimbal
          lock of the Euler angle, we only used data from two axis. This made
          the controlling intuitive enough for new players, and we also included
          this in the onboarding.
        </p>
        <p>
          <b>Sound</b>
        </p>
        <p>
          We used different sounds for different feedbacks inside the game.
          Apart from the background music, we also installed the real life
          kitchen noise in the background to offer a more realistic atmosphere.
          However, adding sound effects in a public space is a tricky question.
          We didn't have the opportunity to evaluate with real users wheter or
          not the sounds felt fitting in a public environment.
        </p>
      </div>
      <div className="custom-shape-divider-top-1635876987">
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
      <div className="section section-4">
        <h2 id="section-4" className="section__title section__title--head">
          🧀 About us
        </h2>
        <div className="section__row">
          <div className="section__column">
            <img className="image-100" src={albin} alt="Albin" />
            Albin Matson Gyllang
            <br />
            agyllang@kth.se
          </div>
          <div className="section__column">
            <img className="image-100" src={amalia} alt="Amalia" />
            Amalia Berglöf
            <br />
            aberglof@kth.se
          </div>
          <div className="section__column">
            <img className="image-100" src={ao} alt="Ao" />
            Ao Xu
            <br />
            aox@kth.se
          </div>
          <div className="section__column">
            <img className="image-100" src={bosen} alt="Bosen" />
            Bosen Cheng
            <br />
            bosen@kth.se
          </div>
          <div className="section__column">
            <img className="image-100" src={przemyslaw} alt="Przemyslaw" />
            Przemyslaw Kowalewski
            <br />
            pkow@kth.se
          </div>
        </div>
        <h4 className="section__title">Individual Contributions</h4>
        <p>
          <b>Albin</b> has been working with the controls, as well as adding
          sound effects to the game, making it a multisensory experience.
        </p>
        <p>
          <b>Amalia</b> has been working with the advertisement and onboarding
          structure, as well as the interviews and user questions.
        </p>
        <p>
          <b>Ao and Bosen</b> have been working with graphics of the game,
          making everything look delicious. As well as implementing the end game
          animation.
        </p>
        <p>
          <b>Przemyslaw</b> has been in charge of keeping the project together
          tech wise, as well as working with the deployment, sockets and the
          game structure.
        </p>
        <h4 className="section__title">Lessons learned</h4>
        <p>
          During this project, we've learned a lot about game design and how to
          work in a group where noone knows everything, but everyone knows
          something. We have deepened our skills in our preffered tech stacks,
          and learned new tools in the area of graphics and interaction.
        </p>
        <p>
          Working with Three.js instead of, for example, Unity, has posed some
          interesting challanges for us, where for some the setup worked
          smoothly, and for others their OS put hinders in the way. Sometimes
          also the socket sharing and connection between phone and computer
          posed problems, but overall this was not as big of an issue as ealier
          similar projects in this course has explained that they faced. The
          problems raised has also helped us in trying to develop for as many
          different users and their phones as possible.
        </p>
        <p>
          Another interesting finding from our demos, was that even though users
          wanted the game to look realistic, that wasn't the most immersive
          aspect. Instead, the game elements and learning how to play the game,
          as well as hack the game, was the thing keeping people attracted to
          it.
        </p>
      </div>
    </div>
  );
}

export default App;
