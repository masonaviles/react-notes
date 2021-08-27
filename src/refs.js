import React, { useEffect, useRef, useState } from "react";

export default function App() {
    // use this ref hook so we can get to the underlying dom node. this can be seen like when we want a focus attribute to already be on an input when a user gets onto a page
    // need to use .current when use ref
    const inputRef = useRef();

    useEffect(() => {
        // inputRef.current is the underlying Dom node, so then we are able to call focus() on it
        inputRef.current.focus();
    }, []);

    return (
        <div className="App">
            <input ref={inputRef} type="text" />
        </div>
    );
}