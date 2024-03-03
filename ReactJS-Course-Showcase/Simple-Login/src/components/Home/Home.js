import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

export default function Home({ onLogout }) {
  return (
    <Card className={classes.home}>
      <h1> Welcome back! </h1>

      <Button onClick={onLogout}> Logout </Button>
    </Card>
  );
}
