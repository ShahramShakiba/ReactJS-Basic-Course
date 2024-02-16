import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={'Easy'} targetTime={1} />
        <TimerChallenge title={'Normal'} targetTime={5} />
        <TimerChallenge title={'Hard'} targetTime={15} />
        <TimerChallenge title={'Insane'} targetTime={20} />
      </div>
    </>
  );
}

export default App;
