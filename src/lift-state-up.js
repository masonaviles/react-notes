import React, { useState } from "react";

function List(props) {
    return (
        <div>
            {props.items.map((item, index) => {
                return <h1 key={index}>{item}</h1>
            })}
        </div>
    );
}

function ItemCount(props) {
    return <h1>{props.count}</h1>;
}

// State is lifted up to the App component because List and ItemCount rely on information from it
// it's best this way because then data can be manipulated in one place, App, and then get reflected in the relavent child components and all the data be insync and the same. 
export default function App() {
    const [items, setItems ] = useState(["Foo", "bar", "baz"]);

    return (
        <div className="App">
            <List items={items} />
            <ItemCount count={items.length} />
        </div>
    );
}