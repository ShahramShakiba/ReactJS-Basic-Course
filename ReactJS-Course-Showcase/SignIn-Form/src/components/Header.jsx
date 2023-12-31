import logo from '../assets/logo.png';
import './Header.css';

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}

/* Disadvantage of Vanilla CSS and inline-css

*-> Vanilla CSS styles are not "scoped" to Components 
-> to which they belong !
-> they are applied globally to the page
-> some css class can effect some other different components as well

? what we can do if we wanna achieve some scoping?
*-> one solution: Switch to "Inline-Styles"
   -> it means, apply them right in the JSX code

   FOR INSTANCE: 
   <p
      style={{
        color: 'red',
        textAlign: 'center',
      }}
    >
      A community of artists and art-lovers.
    </p>

   -> 1. take a dynamic value
   -> 2. then pass an object as a value to the style prop
   -> 3. apply css class as "key-value" pairs

* Advantage: 
  -> quick and easy to add 
  -> styles affect the element to which you add them
  -> dynamic (conditional) styling is simple

* Disadvantage: 
  -> you need to style every element individually
  -> no separation between css and jsx code
*/
