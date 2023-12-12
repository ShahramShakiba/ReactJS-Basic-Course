function Tabs({ children, buttons }) {
  return (
    <>
      <menu>{buttons}</menu>

      {children}
    </>
  );
}

export default Tabs;


/* Working with JSX Slots(position-place):

-> main content slot-> is set with help of "children"

-> buttons slot-> is set with help of our "custom buttons prop"

** we could set more "slot" if our component would needed extra slots for extra JSX content that should be set

*/