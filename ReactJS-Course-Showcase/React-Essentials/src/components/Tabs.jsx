function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>

      {children}
    </>
  );
}

export default Tabs;

/* Extra information:

* children prop
so that we can use our Tabs-component as a wrapper around the actual "TabContent" that should go below the title, because then we can use this children prop to output here below the title

-----------------------------------------------------

*-> Working with JSX Slots(position-place):

 main-content slot (tabContent)-> is set with help of "children"

 buttons slot (our buttons, component, jsx ,...)-> is set with help of our "custom buttons-prop"

 =>> we pass "buttons" as a attribute|prop <Tabs buttons={...}>...</Tabs> to the Tabs in the Examples.jsx

** we could set more "slot" if our component would needed extra slots for extra JSX content that should be set

-----------------------------------------------------------

*-> Setting Component types dynamically:
it must start with "Uppercase" character

* ButtonsContainer = "menu" -> by setting this we're now able to dynamically set the "wrapper" that should be used around these "buttons" when we're using Tabs.jsx component

for built-in elements -> ButtonsContainer = 'menu' 
for custom component -> ButtonsContainer = Section <- we would have to import this Section component here as well

*/
