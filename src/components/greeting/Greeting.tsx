import React, { useState } from 'react';
import './Greeting.css';

const Greeting = (props: GreetingProps) => {

    const [name, setName]= useState<string>(props.name)

    const changeName = () => {
        setName("Jim");
        console.log("button was clicked")
    }

    const handleButtonClick = (event : React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget)
    }

    return <div>
            <p className="greeting-paragraph">Hello world {name}. You are {props.age} years old. </p>
            <button onClick={changeName}>Change my name</button>

            <button id="b1" onClick={handleButtonClick}>Change my name</button>
            <button id="b2" onClick={handleButtonClick}>Change my name</button>
            <button id="b3" onClick={handleButtonClick}>Change my name</button>

        </div>
}

type GreetingProps = {
    name : string,
    age: string
}
export default Greeting;