import React, { useState } from "react";

export default function App() {
    const [state, setState ] = useState("");

    function handleChange(e){
        // on key press, state gets updated which is what is able to make it display on the screen
        // to change the screen, you have to change the data
        // simply typing into the input isn't what is changing the Dom, so the Dom is never updating the View, the change of state is
        setState(e.target.value);
    }

    return (
        <div className="App">
            <ingput type="text" value={state} onChange={handleChange} />
        </div>
    );
}