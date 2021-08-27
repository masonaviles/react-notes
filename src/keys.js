import React, { useState } from "react";

// keys uniquely identify items in your arrays
// it's important 

const data = [];

for (let i=0; i<10; i++) {
    data.push({
        number: i,
        id: "id" + 1
    })
}

function Item(props) {
    return <h1 onClick={() => props.delete(props.id)}>{props.number}</h1>;
}

export default function App() {
    const [state, setState] = useState(data);

    function deleteNumber(n) {
        const newdata = state.filter(num => num.id !== n);
        setState(newdata);
    }


    // it's better to use a unique number for your keys and not index because index can change by array manipulation like deleting things from your arrays. because all the keys then change values, react then redraws everything. so if you don't do that, when you delete something and it has unique keys and not index, it only redraws what got manipulated and not the others
    
    return (
        <div className="App">
            {state.map((n, i) => {
                return(
                    <Item delete={deleteNumber} key={n.id} id={n.id} number={n.number} />
                );
            })}
        </div>
    );
}