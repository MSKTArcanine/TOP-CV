import { useState } from "react";
import FormEdit from "./FormEdit";
import Input from "./Input";

export default function GeneralComponent({text, type, value, onChange}){
    const [isEdit, setIsEdit] = useState(true);

    if(isEdit)
        return (<>
            <FormEdit setIsEdit={setIsEdit}>
                <Input text={text} type={type} value={value} onChange={e => onChange(e.target.value)}/>
            </FormEdit>
        </>)
    return (
        <><p style={{display:"inline"}}>{value}</p><button onClick={() => setIsEdit(true)}>X</button></>
    )
}