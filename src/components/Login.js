import React, {useState} from "react";
import UserData from "../data/UserData.json"
import Register from "./Registration";

export default function LoginComponent()
{
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState(UserData);
    const [register, setRegister] = useState(false);
    const [showTable, setTab] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirth] = useState();

    const handleEmail = event =>
    {
        setEmail(event.target.value);
    }

    const handlePassword = event =>
    {
        setPassword(event.target.value);
    }

    const handleLogin = event =>
    {
        event.preventDefault();
        setTab(true);
        let passAreGood = false;

        data.map(data => {
           if ( data.email === email && data.password === password)
           {
               setName(data.name);
               setLastName(data.lastName);
               setBirth(data.birth);
               passAreGood = true;
           }
        });

        if(passAreGood)
            alert("Udało się zalogować")
        else
            alert("Błędne dane!")
    }

    const handleRegisterButton = event  =>{
        event.preventDefault();
        setRegister(true);
    }


    function handleRegister(userParam)
    {
        console.log(userParam);
        console.log(data);
        data.push(userParam);
        console.log(data)
        setData( data, userParam);
        setRegister(false);

        alert("Zarejstrowano");
    }

    return(
      <div>
          <form onSubmit={handleLogin}>
              <input type="text"  onChange={handleEmail} required={true} pattern="[A-Za-z0-9]+@+[a-z0-9]+\.[a-z]+$"/>
              <br/>
              <input type="password" onChange={handlePassword} required={true} pattern="[A-Za-z0-9]+$"/>
              <br/>
              <button type="submit">Zaloguj</button>
          </form>
          <br/>
          {
              !register ? (
                  <button onClick={handleRegisterButton} type={"submit"}>Zarejstruj się</button>
              ) :<></>
          }
          {
              register ? (
                  <Register handleRegister={handleRegister}/>
              ): <></>
          }
          {
              showTable ? (
                  <table>
                      <thead>
                      <tr>
                          <th>Imie</th>
                          <th>Nazwisko</th>
                          <th>Email</th>
                          <th>Data urodzenia</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                          <td>{name}</td>
                          <td>{lastName}</td>
                          <td>{email}</td>
                          <td>{birthDate}</td>
                      </tr>
                      </tbody>
                  </table>
              ) : <></>
          }

      </div>
    );

}
