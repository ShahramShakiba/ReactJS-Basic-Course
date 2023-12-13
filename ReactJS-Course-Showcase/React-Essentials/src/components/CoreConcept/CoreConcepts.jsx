import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';
import Section from '../Section.jsx';

function CoreConcepts() {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* key-> should be a value that uniquely identifies a list of items to render and update the list  */}
      </ul>
    </Section>
  );
}

export default CoreConcepts;

/*
<Section title="Core Concepts" id="core-concepts">...</Section>

we give the title="Core Concepts" to the "custom Section-component" to specify the "title" in the Section-component
*/
