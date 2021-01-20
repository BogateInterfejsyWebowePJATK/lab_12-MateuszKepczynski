import React, {useState} from "react";


export default function Register()
{
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthDate, setBirth] = useState();
    const [rulesCheck, setRule] = useState("");
    const [showPower, setShow] = useState(false);
    const [passPow, setPow] = useState(0);

    const handleName = event =>{
        setName(event.target.value);
    }

    const handleLastName = event =>{
        setLastName(event.target.value);
    }

    const handleEmail = event =>
    {
        setEmail(event.target.value);
    }

    const handlePassword = event =>{
        let checkPass = event.target.value;
        setPassword(checkPass);

        let tempPasPow = 0;

        checkPass = checkPass.split('');

        checkPass.forEach(x => {
            if( x=== "@" || x === "#" || x === "!" || x === "*" || x === "%")
            {
                tempPasPow += 1;
            }
        });

        if( event.target.value.length > 0)
            setShow(true);
        else
            setShow(false);

        setPow(tempPasPow);
    }

    const handleBirth = event =>
    {
        setBirth(event.target.value);
    }

    const handleCheck = event => {
        setRule(event.target.checked);
    }

    const handleReset = event =>{
        setName("");
        setLastName("");
        setRule(false);
        setBirth();
        setPow();
        setPassword("");
        setShow(false);
        setEmail("");
    }

    const handleSubmit = event =>
    {
        event.preventDefault();
        var obj = {email: email, password: password, name: name, lastName: lastName, birth: birthDate};

        var objToJson = JSON.stringify(obj);

        console.log(objToJson)


    }


    return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleName} placeholder={"Name"} required={true}/>
              <br/>

              <input type="text" onChange={handleLastName} placeholder={"Last Name"} required={true}/>
              <br/>

              <input type="text"  onChange={handleEmail} required={true} pattern="[A-Za-z0-9]+@+[a-z0-9]+\.[a-z]+$"/>
              <br/>

              <input type="password" onChange={handlePassword} required={true} pattern="[A-Za-z0-9]+$"/>
              {
                  showPower ? (
                      <p>Siła twojego hasła to {passPow} / 10</p>
                  ) : <></>
              }
              <br/>

              <input type="date" onChange={handleBirth} name="birthday"/>Birth date
              <br/>

              <input type="checkbox" onChange={handleCheck} required={true}/> Warunki...
              <br/>

              <button type={"submit"}>Submit</button>
              <button type={"reset"} onClick={handleReset}>Reset</button>
          </form>
      </div>
    );
}
