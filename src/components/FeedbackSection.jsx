import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setShow(true);
    }
  }

  return (
    <>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handleKeyDown}
        className="control"
      />
    </>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });

  // const [name, setName] = useState("");
  // const [reason, setReason] = useState("help");
  // const [hasError, setHasError] = useState(false);

  function handleNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);

    setForm({
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
      reason: form.reason,
    });
  }

  // function toggle() {
  //   setHasError((prev) => !prev);
  // }

  return (
    <section>
      <h3>Feedback</h3>

      {/* <Button onClick={toggle}>Toggle Error</Button> */}

      <form style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Reason of request</label>
        <select
          name=""
          id="reason"
          className="control"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, reason: event.target.value }))
          }
        >
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button disabled={form.hasError} isActive={!form.hasError}>
          Submit
        </Button>
      </form>

      <hr />

      <StateVsRef />
    </section>
  );
}
