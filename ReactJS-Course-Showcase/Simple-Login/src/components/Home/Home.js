import { useContext } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import  AuthContext  from '../../context/auth-context';

export default function Home() {
  const authCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1> Welcome back! </h1>

      <Button onClick={authCtx.onLogout}> Logout </Button>
    </Card>
  );
}
