import { useState } from "react"
import Input from "./Input"
import FormEdit from "./FormEdit"

export default function PracticalComponent({practical, practicalList, setPracticalList}){
    
    
    const [isEdit, setIsEdit] = useState(false);
    const [name, setName] = useState(practical.name);
    const [position, setPosition] = useState(practical.position);
    const [responsibility, setResponsibility] = useState(practical.responsibility);
    const [from, setFrom] = useState(practical.from);
    
    let practicalCopy = {id:practical.id, name:name, position:position, responsibility:responsibility, from:from};
    const copy = [...practicalList];
    const submitMethod = () => {
        setPracticalList(copy.map(practical => practical.id === practicalCopy.id ? practicalCopy : practical))
    }
    if(!isEdit)
        return (
        <ul style={{padding:"10px", listStyleType:"none"}}>
        <li>Company Name : {practicalCopy.name}</li> 
        <li>Position : {practicalCopy.position}</li>
        <li>Responsibility : {practicalCopy.responsibility}</li>
        <li>From : {practicalCopy.from}</li>
        <button onClick={() => setIsEdit(true)}>X</button>
        </ul>
    )
    return (
        <FormEdit setIsEdit={setIsEdit} submitMethod={submitMethod}>
            <Input text="company name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <Input text='position' type="text" value={position} onChange={e => setPosition(e.target.value)}/>
            <Input type="text" text='responsibility' value={responsibility} onChange={e => setResponsibility(e.target.value)} />
            <Input type="date" text="From" value={from} onChange={e => setFrom(e.target.value)} />
        </FormEdit>
    )
}