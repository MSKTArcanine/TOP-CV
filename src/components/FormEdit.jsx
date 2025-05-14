export default function FormEdit({setIsEdit, children}){
    
    return (
        <form action="" onSubmit={(e) => {e.preventDefault(); setIsEdit(false)}}>
            {children}
            <button type="submit">O</button>
        </form>
    )
}