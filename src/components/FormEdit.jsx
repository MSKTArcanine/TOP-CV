export default function FormEdit({setIsEdit, children, submitMethod = () => {}}){
    
    return (
        <form action="" onSubmit={(e) => {e.preventDefault(); setIsEdit(false); submitMethod}}>
            {children}
            <button type="submit">O</button>
        </form>
    )
}