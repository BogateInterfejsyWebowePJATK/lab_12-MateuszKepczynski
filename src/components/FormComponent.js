import React, {useRef, useState} from 'react';

export default function FormComp()
{
    const [textOne, setTextOne] = useState("");
    const [textTwo, setTextTwo] = useState("");
    const [radio, setRadio] = useState("");
    const [select, setSelect] = useState("");
    const [check, setCheck] = useState("");
    const [showTab, setTab] = useState(false);

    const textOneRef = useRef();
    const textTwoRef = useRef();
    const radioRef = useRef();
    const selectRef = useRef();
    const checkRef = useRef();


    const submit = event =>
    {
        event.preventDefault();
        setTextOne(textOneRef.current.value);
        setTextTwo(textTwoRef.current.value);
        setRadio(radioRef.current.checked);
        setSelect(selectRef.current.value);
        setTab(true);
    }

    const handleCheck = (event) =>
    {
        setCheck(event.target.value);
    }

    const handleRadio = (event) =>
    {
        setRadio(event.target.value);
    }

    const resetForm = event =>
    {
        event.preventDefault();
        setTextOne("");
        setTextTwo("");
        setRadio("");
        setSelect("");
        setTab(false);
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input type={"text"} ref={textOneRef}/>
                <br/>

                <input type={"text"} ref={textTwoRef}/>
                <br/>

                <input id={"radioB"} type="radio" ref={radioRef} onClick={handleRadio} value={"Guzik"}/>
                <label for={"radioB"}>Guzik</label>
                <br/>

                <select ref={selectRef}>
                    <option value={"Witam"}>Witam</option>
                    <option value={"Kotki"}>Kotki</option>
                </select>
                <br/>

                <input id={"checkB"} ref={checkRef} type="checkbox" onClick={handleCheck} value={"Potwierdzam"}/>
                <label for={"checkB"}>Potwierdzam</label>
                <br/>

                <button type={"submit"}>Jechane</button>
                <button type={"reset"} onClick={resetForm}>Reset</button>
            </form>
            {
                showTab ? (
                    <table>
                        <thead>
                        <tr>
                            <th>Text One</th>
                            <th>Text Two</th>
                            <th>Radio</th>
                            <th>Select</th>
                            <th>Checked</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{textOne}</td>
                            <td>{textTwo}</td>
                            <td>{radio}</td>
                            <td>{select}</td>
                            <td>{check}</td>
                        </tr>
                        </tbody>
                    </table>
                ) : <></>
            }

        </div>
    );
}
