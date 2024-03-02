import classes from './Navigation.module.css';

export default function Navigation(props) {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/"> Users </a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/"> Admin </a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}> Logout </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
