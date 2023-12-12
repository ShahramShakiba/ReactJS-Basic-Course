import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSelect = (selectedButton) => {
    //=> selectedButton: 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>

        <p>{EXAMPLES[selectedTopic].description}</p>

        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>

      <menu>
        <TabButton
          isSelected={selectedTopic === 'components'}
          onSelect={() => handleSelect('components')}
        >
          Components
        </TabButton>

        <TabButton
          isSelected={selectedTopic === 'jsx'}
          onSelect={() => handleSelect('jsx')}
        >
          JSX
        </TabButton>

        <TabButton
          isSelected={selectedTopic === 'props'}
          onSelect={() => handleSelect('props')}
        >
          Props
        </TabButton>

        <TabButton
          isSelected={selectedTopic === 'state'}
          onSelect={() => handleSelect('state')}
        >
          State
        </TabButton>
      </menu>

      {/*----- TAB-CONTENT - approach-3 ------*/}
      {tabContent}
    </section>
  );
}

export default Examples;

/* Extra Explanation

==>> TAB-CONTENT 
---> approach 1 - Ternary Operator <---

{!selectedTopic ? (
  <p>Please select a topic.</p>
) : (
  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>

    <p>{EXAMPLES[selectedTopic].description}</p>

    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)}

------------------------------------------------------
---> approach 2 - && Operator <--- 

{!selectedTopic && <p>Please select a topic.</p>}

{selectedTopic && (
  <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>

    <p>{EXAMPLES[selectedTopic].description}</p>

     <pre>
    <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
  </div>
)}
  && Operator: will output the value that comes after it if condition in front of it yields true 

*/