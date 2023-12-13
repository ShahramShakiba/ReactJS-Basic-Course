import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';

function App() {
  return (
    <>
      <Header />
      
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;

/* Extra information

* Fragment: 
we cannot return two or more values, that's why we need ONE Wrapper element so that technically we return one value.

 new syntax -> <></> 
or
 older syntax -> <Fragment></Fragment>  older projects might not support this new syntax and we need to import it like:
import {Fragment} from 'react';

-----------------------------------------------------

* We should split up Components:
when one component for example has a useState, when this state re-executed it cause re-rendering all of the App component and update the UI each time


* we should keep App-component lean, which is the goal

*/