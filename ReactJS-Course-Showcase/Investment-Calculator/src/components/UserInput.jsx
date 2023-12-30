import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,

        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange('initialInvestment', event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange('expectedReturn', event.target.value)
            }
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}

/* structure
*-> my idea is simply to have multiple such "label" "input" combination inside of two input-group container:
        <p>
          <label>Initial Investment</label>

          <input type="number" required />
        </p>

*-> and this "input-group" css class 
    will simply make sure that these different paragraphs are showing up next to each other in the same row
*/

/* state
?-> Now I need to some logic to get hold that value 
    that's "entered" by the "user" and to reflect that value back into that input-field - so I need two-way-binding

?-> manage all inputs with one state
    that kind of merges all these different input values into "one-object"
*/

/* function
?-> Then we need a function
    that should be triggered whenever we change the value

*-> why we update state based on previous state?
     when this function executes, only one of these 4 properties will be updated, therefore, the other properties and their value shouldn't be lost
*/

/* function return
?-> I need to override "one single property" of that object
    by using "inputIdentifier"
    -> inputIdentifier will get a "string" as a value
    -> that is initially: 
       - initialInvestment
       - annualInvestment
       - expectedReturn
       - duration

*-> [inputIdentifier]
     dynamically set a property depending on which value is stored in "inputIdentifier"
*/

/* input - onChange
?-> why this  onChange={handleChange}  won't work?
    -> by default when the "change event" occurs
    -> react will call this "handleChange" function
    -> and pass the "event-object" to it 

    -> whilst this "event-object" contain useful data
    -> it will not hold the inputIdentifier and 
    -> it'll also just be "one-parameter" instead of two
  *-> THEREFORE, we use "anonymous function"

  -> which is then the actual function(handleChange)
  -> that's passed as a value to "onChange"
  -> which will be executed by React eventually
  -> once the change event occurs

    *-> then pass those 2 arguments to handleChange
    -> the first argument, should be the "inputIdentifier" which should be one of these four-properties

    -> second argument, should be the value entered by the user
    -> we can get that with the help of "event-object"
*/

/* value-prop
?-> we also must make sure that the updated-value and also initial-value is fed-back into this input-element

*-> value={}
 -> can be used to set the value that will be displayed on the screen

*/
