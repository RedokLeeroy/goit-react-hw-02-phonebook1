import PropTypes from "prop-types"

export const FormSubmit = ({title}) => {
    return <button type="submit">{title}</button>
}


FormSubmit.propTypes = {
    title:  PropTypes.string.isRequired
}