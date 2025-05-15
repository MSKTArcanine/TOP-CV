import { useState } from "react";
import Input from "./Input";

export default function FormPractical({id, setId, setPracticalList, practicalList, setToggleForm}){
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [responsibility, setResponsibility] = useState('');
    const [from, setFrom] = useState('');
    const practical = {
        id: id,
        name: name,
        position: position,
        responsibility: responsibility,
        from: from,
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setPracticalList([...practicalList, practical]);
        setId(id + 1);
        setToggleForm(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Company Name : 
                <Input text="company name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>Position : 
                <Input text='position' type="text" value={position} onChange={e => setPosition(e.target.value)}/>
            </label>
            <label>responsibility :
                <Input type="text" text='responsibility' value={responsibility} onChange={e => setResponsibility(e.target.value)} />
            </label>
            <label>From :
                <Input type="date" text="From" value={from} onChange={e => setFrom(e.target.value)} />
            </label>
            <button type="submit">O</button>
        </form>
    )
}