import './header.css'

export const Header = ({ showMenu }) => (
  <header>
    <div id="home" className="header__content container">
      <div className="site-logo"></div>
      <div className="navigation">
        <button className="nav-btn"></button>
        <nav className="rollout-nav nav-closed">
          {showMenu ? (
            <>
              <a href="#home">domů</a>
              <a href="#menu">menu</a>
              <a href="#gallery">galerie</a>
              <a href="#contact">kontakt</a>
            </>
          ) : (
            <>
              <a href="/index.html">hlavní stránka</a>
            </>

          )}
        </nav>
      </div>
    </div>
  </header>
)