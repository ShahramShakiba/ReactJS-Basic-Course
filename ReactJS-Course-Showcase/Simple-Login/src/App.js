import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/auth-context';
import { useContext } from 'react';

export default function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />

      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
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

  * this function 👆 here is executed by React and it is executed after every component re-evaluation - runs after every component render cycle | and only if the "dependencies" here changed

  ? if dependencies were empty [] :
  this function would only run ONCE when the App starts, because there after the dependencies never changed and this here has no dependencies.
*/

/* Props vs Context
* Props :
  for Configuration

* Context :
  for State Management across components or possibly across the entire App
  for replacing long prop chains
  ? Limitation:
    - React Context is NOT optimized for high frequency changes
      you have state changes that happen much more frequently - multiple changes
      per second
*/