import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Jane Doe</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Placeholder for about me text.</p>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
        <div className="gallery">
          <div className="placeholder-image">Image 1</div>
          <div className="placeholder-image">Image 2</div>
          <div className="placeholder-image">Image 3</div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2024 Jane Doe</p>
      </footer>
    </div>
  );
}

export default App;
