import { useState } from 'react';
import { styled } from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#374151')};
  background-color: ${({ $invalid }) => ($invalid ? '#fed2d2' : '#d1d5db')};
  border: 1px solid ${({ $invalid }) => ($invalid ? '#f73f3f' : 'transparent')};
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: #f0920e;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
        <p>
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>

        <p>
          <Label $invalid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
      </ControlContainer>

      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}

/* Conditional styling with CSS classes

? How to merge some class "conditionally" and some class "permanently" 
 -> <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
        Email
    </label>

    -> permanently: label
    -> conditionally: ${emailNotValid ? 'invalid' : ''}

*/

/* Styled-Components | Third-Party-Package 

-> npm install styled-components

-> then: import { styled } from 'styled-components';

? styled.div =>
  -> it will create a div as a separate component but a component that will have any styles you want applied to it

? styled.div`` => 
  -> this code in the end is called "tagged-template" -> to parse template literals with a function

? then apply all CSS classes you need:
   styled.div`
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
     margin-bottom: 1.5rem;
    `;

    *-> this is a React-Component that automatically returns a div that has these styles applied to it.

    *-> also it will be a div that internally also uses the special children-prop so that it can be wrapped around other content
    -> const ControlContainer = styled.div`
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        `;
    
    -> <ControlContainer> .... </ControlContainer>


? <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>
?    Email
? </Label>
  => this styled-component still works because of this "dynamically added CSS class" here

  => this styled-component, do not just use the "children-prop" so that you can wrap them around content

  *=> they also, forward all props you're setting on this styled-component to the underlying built-in JSX element (so the built-in "<label></label>" here)

  *=> so this styled.label=> creates such a built-in "label" under the hood and it forwards all props you're setting on the styled-component(Label) to that built-in "label"
*/

/* Conditional styling with Styled-Component

  -> in styled-component, we don't wanna add CSS classes like this:
  ?  <Label className={`label ${emailNotValid ? 'invalid' : ''}`}>
        Password
     </Label>

     ?-> then how to add styles conditionally?
        -> we could add a special prop(the name is up to you) and then add any value to that prop 

        <Label invalid={emailNotValid}>Email</Label>

        -> now, with styled-component we can use props set like this inside of your styles to dynamically alter those style

FOR EXAMPLE in "Label-component" : 
-> const Label = styled.label`
      .....

      color: ${() => #f87171} #6b7280;
    `;

    -> we can use an arrow-function as a value because value you inject into this string here will in the ned be picked up by that Label-function and will be executed and handled by that styled-component

    -> to derive a dynamic value:-> the styled-component package will give us the "props" objet : 
        color: ${(props) => #f87171} #6b7280;
        
        OR destructuring the props :
        color: ${({invalid}) => #f87171} #6b7280;


  ? color: ${({ invalid }) => (invalid ? '#f87171' : '#6b7280')};

  ---------------------------------------------------------------------

  * "clash" with "built-in props" when injecting props into styled-component
  -> make sure you don't accidentally clash with default built-in props that might be exist on certain elements, for example:

  => "invalid prop" on the input-element is a built-in prop

  ?=> we can prefix our prop with a " $ " sign

*/

/* Styled-Components-> Pseudo Selectors 

? &:hover -> targeting the main(button or ...) element

? & :hover -> targeting "child-elements"
*/
