import { EXAMPLES } from '../../data.js';
import { useState } from 'react';
import TabButton from './TabButton.jsx';
import Section from '../Section.jsx';
import Tabs from '../Tabs.jsx';

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
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onClick={() => handleSelect('components')}
            >
              Components
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onClick={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'props'}
              onClick={() => handleSelect('props')}
            >
              Props
            </TabButton>

            <TabButton
              isSelected={selectedTopic === 'state'}
              onClick={() => handleSelect('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {/*TAB-CONTENT - approach-3*/}
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;

/* Extra Explanation 

* Approach for "SMALLER APPLICATION":
<section>
  <menu>
    <TabButton
      isSelected={selectedTopic === 'components'}
      onClick={() => handleSelect('components')}
    >
      Components
    </TabButton>

    <TabButton
      isSelected={selectedTopic === 'jsx'}
      onClick={() => handleSelect('jsx')}
    >
      JSX
    </TabButton>

    <TabButton
      isSelected={selectedTopic === 'props'}
      onClick={() => handleSelect('props')}
    >
      Props
    </TabButton>

    <TabButton
      isSelected={selectedTopic === 'state'}
      onClick={() => handleSelect('state')}
    >
      State
    </TabButton>
  </menu>

  {tabContent}
</section>

-----------------------------------------------------------

* TAB-CONTENT
--> approach 1 - Ternary Operator <---

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

-------------------------------------------------------

*-> Working with JSX Slots(position-place):

** if we want to add <TabButton ...>...</TabButton> to Tabs.jsx component, we will have the problem to handle "onClick" and "isSelected" because then we need to add Extra Props there(in Tabs.jsx) and adding these extra props makes Tabs.jsx less reuseable, THEREFORE -> we set an extra prop on Tabs.jsx and after that we can set this prop on Tabs component in Examples.jsx

** BECAUSE -> JSX codes are in the end just regular values that can be used like values

------------------------------------------------------

*-> Setting Component types dynamically:
it must start with "Uppercase" character

==>> <Tabs ButtonsContainer = {Section}>...</Tabs> || custom component must be passed as a dynamic value

==>> <Tabs ButtonsContainer = "menu">...</Tabs> || for built-in elements we simply pass the identifier as a string""

==>> we can use this as default prop values -> therefore we omit this prop in this component and then try to give (ButtonsContainer = "menu") as default value to Tabs.jsx component

*/
