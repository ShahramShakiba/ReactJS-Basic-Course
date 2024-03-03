import { useEffect, useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // keep the user logged in after reloading the page
  useEffect(() => {
    const loggedInInformation = localStorage.getItem('isLoggedIn');
    if (loggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    /* We should of course check email and password
      But it's just a dummy|demo anyways */
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  );
}

/* localStorage.setItem('isLoggedIn', '1');
 * isLoggedIn : identifier
 * 1 : user is logged in
 * 0 : user is NOT logged in
 */

/* useEffect
 useEffect(() => {
  .....

  * run the code which we don't wanna run directly in the component-function

  .....
    }
  }, [dependencies]); 

  * this function 👆 here is executed by React and it is executed after every component re-evaluation | and only if the "dependencies" here changed

  ? if dependencies were empty [] :
  this function would only run ONCE when the App starts, because there after the dependencies never changed and this here has no dependencies.
*/
