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

-> Working with JSX Slots(position-place):

 main content slot-> is set with help of "children"

 buttons slot-> is set with help of our "custom buttons prop"

** we could set more "slot" if our component would needed extra slots for extra JSX content that should be set

-----------------------------------------------------------

-> Setting Component types dynamically:
it must start with "Uppercase" character

ButtonsContainer = "menu" -> we passed "menu" as a identifier and then using this identifier inside of a component to "Dynamically Render Different HTML Elements"

==> Even we can use this prop as default prop values like -> 
ButtonsContainer = 'menu' just in this component

for built-in elements -> ButtonsContainer = 'menu' 
for custom component -> ButtonsContainer = Section <- we would have to import this Section component here as well
*/
