import { useState } from "react"
import Input from "./Input"
import FormEdit from "./FormEdit"

export default function EducationComponent({edu, educationList, setEducationList}){
    
    
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(edu.name);
    const [title, setTitle] = useState(edu.title);
    const [study, setStudy] = useState(edu.study);
    const [from, setFrom] = useState(edu.from);

    let eduCopy = {id:edu.id, name:name, title:title, study:study, from:from};
    const copy = [...educationList];
    const submitMethod = () => {
        setEducationList(copy.map(education => education.id === eduCopy.id ? eduCopy : education))
    }
    console.log(eduCopy.from)
    if(!isEdit)
        return (
        <ul style={{padding:"10px", listStyleType:"none"}}>
            <li>School Name : {eduCopy.name}</li> 
            <li>Course Title : {eduCopy.title}</li>
            <li>Study : {eduCopy.study}</li>
            <li>From : {eduCopy.from}</li>
            <button onClick={() => setIsEdit(true)}>X</button>
        </ul>
         )
    return (
        <FormEdit setIsEdit={setIsEdit} submitMethod={submitMethod}>
            <Input text='Name' type='text' value={name} onChange={e => setName(e.target.value)} />
            <Input text='Title' type='text' value={title} onChange={e => setTitle(e.target.value)} />
            <Input text='Study' type='text' value={study} onChange={e => setStudy(e.target.value)} />
            <Input text='From' type="from" value={form} onChange={e => setFrom(e.target.value)}/>
        </FormEdit>
    )
}