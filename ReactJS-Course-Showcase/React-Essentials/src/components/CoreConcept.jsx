//==>> Core-Concept ================
function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
