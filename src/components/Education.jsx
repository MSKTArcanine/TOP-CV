import { useState } from "react"
import FormEducation from "./FormEducation";
import EducationComponent from "./EducationComponent";

export default function Education(){
    const [toggleForm, setToggleForm] = useState(false)
    const [id, setId] = useState(0);
    const [educationList, setEducationList] = useState([]);

    console.log(educationList)

    if(toggleForm){
        return (<FormEducation id={id} setId={setId} setEducationList={setEducationList} educationList={educationList} setToggleForm={setToggleForm}/>)
    }
    return(
        <>
        <ol>
        {educationList.map(edu => <li key={edu.id}><EducationComponent edu={edu} educationList={educationList} setEducationList={setEducationList} /></li>)}
        </ol>
        <button onClick={() => setToggleForm(true)}>X</button></>
    )
}