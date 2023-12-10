import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';

function App() {
  return (
    <div>
      <Header />

      <main>
        {/*----- Core-Concepts -----*/}
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {/*Components*/}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            {/*JSX*/}
            <CoreConcept {...CORE_CONCEPTS[1]} />

            {/*Props*/}
            <CoreConcept {...CORE_CONCEPTS[2]} />

            {/*State*/}
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        {/*----- Examples -----*/}
        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
