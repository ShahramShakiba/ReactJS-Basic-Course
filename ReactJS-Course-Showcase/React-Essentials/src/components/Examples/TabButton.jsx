import './Examples.css';

function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;

/* Extra information:

01. for BUTTONS:
==>> The "children" Prop (props.children or {children})
 The "children" prop is a special prop in React that allows you to pass child elements, like this: 
 <TabButton> Components </TabButton>   <== component-composition

 Another-Approach, using label ({label}) like this :
 <TabButton label="Components" />

-----------------------------------------------------------------
 02. instead of using "onClick={onSelect}" on the button and destructuring "onSelect" as an argument, we can use __Forwarded Props__ :

destructuring-> ...props
setting on button-> {...props}
then-> in Examples.jsx change "onSelect" custom prop to "onClick"

*/
