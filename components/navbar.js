import Link from "next/link";
import { withRouter } from "next/router";

function Navbar({ router}) {
    console.log(router.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">theBotMan.co</a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                <a className={ router.pathname == '/' ? 'nav-link active' : 'nav-link' }  aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us">
                <a className={ router.pathname == '/contact-us' ? 'nav-link active' : 'nav-link' } href="#">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navbar)