import React, { useRef, useState } from "react";

// binding state to a component
function Controlled() {
    const [state, setState] = useState("");

    function alertValue() {
        alert(state);
    }

    return (
        <div>
            <input tpye="text" value={state}
                onChange={e => setState(e.target.value)}
            />
            <button onClick={alertValue}>Click me</button>
        </div>
    );
}

// not binding state to a component
// not bound to any data, no on change
// how to get value out of an uncontrolled component? use refs

function UnControlled() {
    const inputRef = useRef();

    function alertValue() {
        // passint inputRef into a ref attribute gives us access to it's current.value
        alert(inputRef.current.value);
    }
    return (
        <div>
        {/* pass an inputRef into a ref attribute  */}
            <input type="text" ref={inputRef} />
            <button onClick={alertValue}>Click me</button>
        </div>
    );
}
 
export default function App() {
    return (
        <div className="App">
            <UnControlled />
            <Controlled />
        </div>
    );
}