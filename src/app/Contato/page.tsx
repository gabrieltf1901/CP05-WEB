'use client';
import { useState } from "react";
import Button from "../Components/Button";
import FormInput from "../Components/FormIput";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./styles.css"

const Contact = () => {
    const [name, setName] = useState ("");
    const [address, setAddress] = useState ("");
    const [phone, setPhone] = useState ("");
    const [cep, setCep] = useState ("");
    
    const changeName = (event: any) => {
        setName(event.target.value);
    }
    const changeAddress = (event: any) => {
        setAddress(event.target.value);
    }
    const changePhone = (event: any) => {
        setPhone(event.target.value);
    }
    const changeCep = (event: any) => {
        setCep(event.target.value);
    }

    const sendForm = () => {};

    return (

        <main className="m-4">
            <Header/>
            
            <h1 className="text1">CONTACT US</h1>
            <FormInput label="Name" value="" onChange={changeName}/>
            <FormInput label="Address" value="" onChange={changeAddress}/>
            <FormInput label="Phone Number" value="" onChange={changePhone}/>
            <FormInput label="Postal Code" value="" onChange={changeCep}/>
            <Button text="Enviar" onClick={sendForm}/>

            <Footer/>
            
        </main>
    );
};

export default Contact;