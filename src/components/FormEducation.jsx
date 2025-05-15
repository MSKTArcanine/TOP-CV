import { useState } from "react";
import Input from "./Input";

export default function FormEducation({id, setId, setEducationList, educationList, setToggleForm}){
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [study, setStudy] = useState('');
    const [from, setFrom] = useState('');
    const education = {
        id: id,
        name: name,
        title: title,
        study: study,
        from: from,
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setEducationList([...educationList, education]);
        setId(id + 1);
        setToggleForm(false);
    }
    return (
        <form onSubmit={onSubmit}>
            <label>School Name : 
                <Input text="school name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>Course title : 
                <Input text='course title' type="text" value={title} onChange={e => setTitle(e.target.value)}/>
            </label>
            <label>Study :
                <Input type="text" text='study' value={study} onChange={e => setStudy(e.target.value)} />
            </label>
            <label>From :
                <Input type="date" text="From" value={from} onChange={e => setFrom(e.target.value)} />
            </label>
            <button type="submit">O</button>
        </form>
    )
}