export const Item = ({name, phone, onDelete, id }) => {return <li>
    <p>{name} : {phone}</p>
    <button onClick={()=>onDelete(id)}>delete</button>
 </li>}  