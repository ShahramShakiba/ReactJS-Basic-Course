import { useContext } from 'react';
import  AuthContext  from '../../context/auth-context';
import classes from './Navigation.module.css';

export default function Navigation() {
  // just to make sure we have  the context
  const authCtx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {authCtx.isLoggedIn && (
          <li>
            <a href="/"> Users </a>
          </li>
        )}

        {authCtx.isLoggedIn && (
          <li>
            <a href="/"> Admin </a>
          </li>
        )}

        {authCtx.isLoggedIn && (
          <li>
            <button onClick={authCtx.onLogout}> Logout </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

/* Consumer
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
*/
