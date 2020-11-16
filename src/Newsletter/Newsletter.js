import React, {useState} from 'react';
import "./Newsletter.css";

const Newsletter = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };


    return (
        <div className={"form-wrapper"}>
            <h2 className={"newsletter-title"}>DOŁĄCZ DO NEWSLETTERA</h2>
            <form>
                <div className="name-surname">
                    <input type="text" placeholder={"IMIĘ"} value={name.toUpperCase()} onChange={handleNameChange}/>
                    <input type="text" placeholder={"NAZWISKO"} value={surname.toUpperCase()} onChange={handleSurnameChange}/>
                </div>
                <div className="email-phone">
                    <input type="email" placeholder={"ADRES EMAIL"} value={email.toUpperCase()} onChange={handleEmailChange}/>
                    <input type="phone" placeholder={"NUMER TELEFONU"} value={phone.toUpperCase()} onChange={handlePhoneChange}/>
                </div>
                <button type={"submit"}>DOŁĄCZ</button>
            </form>
        </div>
    );
};

export default Newsletter;