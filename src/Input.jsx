export default function Input({text, type, value, onChange}){

    return(<>
        <label>{text}
        <input 
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter your ${text} here.`}
        /></label>
        </>
    )
}