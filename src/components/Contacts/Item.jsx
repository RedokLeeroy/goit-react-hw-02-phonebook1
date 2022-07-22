    import PropTypes from "prop-types"

export const Item = ({name, phone, onDelete, id }) => {return <li>
    <p>{name} : {phone}</p>
    <button onClick={()=>onDelete(id)}>delete</button>
 </li>}  


Item.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    id: PropTypes.string
}