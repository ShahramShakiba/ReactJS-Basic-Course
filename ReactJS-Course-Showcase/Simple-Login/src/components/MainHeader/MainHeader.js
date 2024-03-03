import Navigation from './Navigation';
import classes from './MainHeader.module.css';

export default function MainHeader({ onLogout }) {
  return (
    <header className={classes['main-header']}>
      <h1> A Typical Page </h1>

      <Navigation onLogout={onLogout} />
    </header>
  );
}
