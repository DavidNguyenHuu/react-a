import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavgation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Vetooze</div>
      <nav>
        <ul>
          <li>
            <Link to="/">For Pet Owners</Link>
          </li>
          <li>
            <Link to="/new-meetup">For Techs</Link>
          </li>
          <li>
            <Link to="/favorites">My favorites</Link>
          </li>
          <li>
            <Link to="/new-meetup">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavgation;
