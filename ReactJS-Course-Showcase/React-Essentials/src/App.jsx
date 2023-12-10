import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('components');

  const handleSelect = (selectedButton) => {
    //=> selectedButton: 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  return (
    <div>
      <Header />

      <main>
        {/*------- Core-Concepts -------*/}
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

        {/*--------- Examples ---------*/}
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {/* TAB-CONTENT */}
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>

            <p>{EXAMPLES[selectedTopic].description}</p>

            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
