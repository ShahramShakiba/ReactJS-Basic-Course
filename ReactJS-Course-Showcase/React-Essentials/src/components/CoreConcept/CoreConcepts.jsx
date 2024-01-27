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

/* OPTION 01
<ul>
    <CoreConcept
      title={CORE_CONCEPTS[0].title}
      description={CORE_CONCEPTS[0].description}
      image={CORE_CONCEPTS[0].image}
    />
    <CoreConcept
      title={CORE_CONCEPTS[1].title}
      description={CORE_CONCEPTS[1].description}
      image={CORE_CONCEPTS[1].image}
    />
    ....
</ul>
*/

/* OPTION 02
* when your "Props" names are similar to the property names of the object
<ul>
    <CoreConcept {...CORE_CONCEPTS[0]} />
    <CoreConcept {...CORE_CONCEPTS[1]} />
    <CoreConcept {...CORE_CONCEPTS[2]} />
    <CoreConcept {...CORE_CONCEPTS[3]} />
</ul>
*/