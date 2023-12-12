function Section({ title, children, ...props }) {
  return (
    // ...props-> spread some data
    <section {...props}>
      <h2>{title}</h2>

      {children}
    </section>
  );
}

export default Section;

/*=>> Forwarded Props (or Proxy Props)

!!!-> when setting props on a custom component, those props are not automatically forwarded to the JSX code used inside of that component

Solution:
...props-> Rest Operator - groups all remaining obj properties into a new obj

this will ensure that all extra props that might be set on our "custom Section" component will be forwarded to this "built-in section".

this is useful pattern when building "wrapper components", like this Section component here!!!

*/
