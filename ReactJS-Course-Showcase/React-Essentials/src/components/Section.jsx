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

/* Extra information:

* children prop
so that we can use our Section-component as a wrapper around the actual section-content that should go below the title, because then we can use this children prop to output here below the title

* Forwarded Props (or Proxy Props)
-> when setting props on a custom component, those props are not automatically forwarded to the JSX code used inside of that component, for example:

!This id="examples" of Examples-component won't forward automatically to this Section

we can use this approach which is we set id manually which attend to more and more attributes on this built-in section element
function Section({ title, children, id }) {...}
<section id="id">...</section>

*Better Solution:
...props-> Rest Operator - groups all remaining obj-properties into a new-obj

this will ensure that all extra props that might be set on our "custom Section" component will be forwarded to this "built-in section".

this is useful pattern when building "wrapper-components", like this Section component here!!!

*/
