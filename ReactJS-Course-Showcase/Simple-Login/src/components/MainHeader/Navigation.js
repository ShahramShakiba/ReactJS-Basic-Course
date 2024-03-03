import AuthContext from '../../context/auth-context';
import classes from './Navigation.module.css';

export default function Navigation({ onLogout }) {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {context.isLoggedIn && (
                <li>
                  <a href="/"> Users </a>
                </li>
              )}

              {context.isLoggedIn && (
                <li>
                  <a href="/"> Admin </a>
                </li>
              )}

              {context.isLoggedIn && (
                <li>
                  <button onClick={onLogout}> Logout </button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
}
