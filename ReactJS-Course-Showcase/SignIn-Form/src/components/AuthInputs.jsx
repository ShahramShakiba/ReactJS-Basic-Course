import { useState } from 'react';
import { styled } from 'styled-components';

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
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
          <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
            Email
          </label>
          <input
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>

        <p>
          <label className={`label ${emailNotValid ? 'invalid' : ''}`}>
            Password
          </label>
          <input
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
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
        <button className="button" onClick={handleLogin}>
          Sign In
        </button>
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
*/
