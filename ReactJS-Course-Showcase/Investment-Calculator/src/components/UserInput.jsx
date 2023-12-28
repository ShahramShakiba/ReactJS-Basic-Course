export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>

          <input type="number" required />
        </p>

        <p>
          <label>Annual Investment</label>

          <input type="number" required />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>

          <input type="number" required />
        </p>

        <p>
          <label>Duration</label>

          <input type="number" required />
        </p>
      </div>
    </section>
  );
}

/*
-> my idea is simply to have multiple such "label" "input" combination inside of two input-group container:
        <p>
          <label>Initial Investment</label>

          <input type="number" required />
        </p>

-> and this "input-group" css class will simply make sure that these different paragraphs are showing up next to each other in the same row

-> Now I need to some logic to get hold that value that's "entered" by the "user" and to reflect that value back into that input-field - so I need two-way-binding
*/
