// context allows us to pass data from one component to another
// the key difference between this and props is 
// props goes parents to child, one level at a time. so if you want to pass data to a grandchild, it needs to go through the child to get there via props
// context allows you to pass data down to as many components down on the same tree

// this is an example of prop drilling

import React, { useContext } from "react";

function Child(props) {
    return <GrandChild value={props.value} />;
}

function GrandChild(props) {
    return <h1>{props.value}</h1>;
}

export default function App() {

    return (
        <div className="App">
            <Child value={1} />
        </div>
    );
}

// =========================================>

// this is an example of using Content

const Context = React.createContext();

function ContextChild(props) {
    return <ContextGrandChild />;
}

function ContextGrandChild(props) {
    const value = useContext(Context);
    return <h1>{value}</h1>;
}

export default function ContextApp() {
    return (
        <Context.Provider value={1}>
            <div className="App">
                <ContextChild />
            </div>
        </Context.Provider>
    );
}