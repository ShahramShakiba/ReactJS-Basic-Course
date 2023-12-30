import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,

        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />

      <UserInput onChange={handleChange} userInput={userInput} />

      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero!</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;

/* state
?-> Now I need to some logic to get hold that value 
    that's "entered" by the "user" and to reflect that value back into that input-field - so I need two-way-binding

    * it is up to you, if you wanna manage 4 different states for these 4-different input-fields, OR

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

/* function handleChange(inputIdentifier, newValue) {}
* => we need to add a new "Prop" to the <UserInput /> 
-> so we can call handleChange from inside the userInput to <userInput/> -> so we need to pass a pointer to this handleChange function as a value to the "userInput" component

?  onChange={handleChange}
-> you don't call the function -> handleChange()
-> you just pass it as a value
*/

/* userInput={userInput}

-> for the "value-prop" in the userInput-component we need another prop to pass "userInput-state" as a value 
*/

/* <Results input={userInput} />
-> pass "userInput-state" to the Results.jsx as well

=> now we can, "derive" the results-data in that Results-component :
   with calculateInvestmentResults in investment.js
*/

/* ADD + to the "newValue": [inputIdentifier]: +newValue,
-> when you're getting the value of an input-field
-> that value when extracted will always be a "string"
-> even if you set the type to "number"-> type="number"
-> this does not influence the type of value, you're getting in JavaScript
-> instead, you're always getting a value type "string"

?=> simply adding this plus will force a conversion of this string value to a number value
*/
