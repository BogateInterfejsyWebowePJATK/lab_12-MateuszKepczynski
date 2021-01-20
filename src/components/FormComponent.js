import React, {useRef, useState} from 'react';

export default function FormComp()
{
    const [number, setNumber] = useState(0);
    const [amount, setAmount] = useState(0);
    const [iteration, setIteration] = useState(0);
    const numberRef = useRef();


    const submit = event =>
    {
        event.preventDefault();
        setIteration(iteration + 1);
        setNumber(parseInt(numberRef.current.value) + number);
        console.log(number);
        console.log(iteration);
        console.log(amount);
        if( number === 0)
            setAmount(1);
        else
            setAmount(number / iteration);
    }

    return(
        <div>
            <form onSubmit={submit}>
                <label>Liczba</label>
                <input type={"text"} ref={numberRef} required={true}/>
                <button type={"submit"}>Policz</button>
            </form>
            <h2>Suma: {number}</h2>
            <h2>Średnia: {amount}</h2>
        </div>
    );
}
