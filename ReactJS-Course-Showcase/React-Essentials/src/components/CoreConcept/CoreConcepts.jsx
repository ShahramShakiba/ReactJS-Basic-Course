import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from './CoreConcept.jsx';

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>

      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
        {/* key-> should be a value that uniquely identifies a list of items to render and update the list  */}
      </ul>
    </section>
  );
}

export default CoreConcepts;
