import { useState } from "react"
import FormPractical from "./FormPractical";
import PracticalComponent from "./PracticalComponent";

export default function Practical(){
    const [toggleForm, setToggleForm] = useState(false)
    const [id, setId] = useState(0);
    const [practicalList, setPracticalList] = useState([]);

    if(toggleForm){
        return (<FormPractical id={id} setId={setId} setPracticalList={setPracticalList} practicalList={practicalList} setToggleForm={setToggleForm}/>)
    }
    return(
        <>
        <ol>
        {practicalList.map(prac => <li key={prac.id}><PracticalComponent practical={prac} practicalList={practicalList} setPracticalList={setPracticalList} /></li>)}
        </ol>
        <button onClick={() => setToggleForm(true)}>X</button></>
    )
}