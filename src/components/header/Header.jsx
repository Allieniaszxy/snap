import "./Header.css";

function Header() {
  return (
    <div>
      <section className="header-section">
        <div className="navbar">
          <div className="snap-logo">
            <h1>Snap</h1>
          </div>
          <div className="nav1">
            <nav>Features</nav>
            <nav>Company</nav>
            <nav>Careers</nav>
            <nav>About</nav>
          </div>
        </div>
        <div className="nav-btn">
          <nav>Login</nav>
          <button>Register</button>
        </div>
      </section>
    </div>
  );
}
export default Header;
