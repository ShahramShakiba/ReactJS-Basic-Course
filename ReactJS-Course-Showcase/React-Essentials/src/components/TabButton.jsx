function TabButton({ children }) {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
}

export default TabButton;

/* for BUTTONs

==>> The "children" Prop (props.children or {children})
 The "children" prop is a special prop in React that allows you to pass child elements, like this: 
 <TabButton> Components </TabButton>   <== component-composition


 Another-Approach, using label ({label}) like this :
 <TabButton label="Components" />
*/
