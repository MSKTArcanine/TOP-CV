import { useState } from "react";
import GeneralComponent from "./GeneralComponent";

export default function GeneralInfo(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const Person = {
        name:name,
        phone:phone,
        email:email,
    }

    return (
        <section id="generalInfo">
            <GeneralComponent text="Name" type="text" value={Person.name} onChange={setName}/>
            <GeneralComponent text="Email" type="email" value={Person.email} onChange={setEmail}/>
            <GeneralComponent text="Phone" type="number" value={Person.phone} onChange={setPhone} />
        </section>
    )
}