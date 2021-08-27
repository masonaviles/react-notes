// state is when a component defines data locally within itself and is able to manipulate it
// props is when that same data then gets passed down to another component
// the fundamental difference is that state can be changed and props cannot

import React, { useState } from "react";

function Child(props) {
    return <GrandChild value={props.value} />;
}

function GrandChild(props) {
    return <h1>{props.value}</h1>;
}

export default function App() {
    const [value, setValue ] = useState(1);

    return (
        <div className="App">
            <Child value={value} />
        </div>
    );
}