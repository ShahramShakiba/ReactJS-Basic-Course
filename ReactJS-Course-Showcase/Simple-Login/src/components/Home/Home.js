import { useContext } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../context/auth-context';

export default function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1> Welcome back! </h1>
      <h3>Which concepts have I covered:</h3>
      <p>
        <ul>
          <li>
            Working with (Side) Effects
            <ul>
              <li>
                Keep the user logged in after reloading the page | localStorage
                & useEffect
              </li>
              <li>Validate Email & Password with useEffect() </li>
            </ul>
          </li>
          <li>
            Managing more complex State with Reducers
            <ul>
              <li>Using useReducer() Hook for Email Input & Password Input</li>
            </ul>
          </li>
          <li>
            Managing App-Wide or Component-Wide State with Context API
            <ul>
              <li>Building & Using a Custom Context Provider Component</li>
            </ul>
          </li>
          <li>
            Working with forwardRef & useImperativeHandle
            <ul>
              <li>Focusing on inputs when they are not valid</li>
            </ul>
          </li>
        </ul>
      </p>

      <Button onClick={authCtx.onLogout}> Logout </Button>
    </Card>
  );
}
