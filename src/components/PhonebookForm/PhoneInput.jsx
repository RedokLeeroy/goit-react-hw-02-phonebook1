import PropTypes from "prop-types"
export const PhoneInput = ({name, value ,func}) => {
    return <label>Phone<input
  type="tel"
  name={name}
  value={value}
  onChange={func}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>
}


PhoneInput.propTypes = {
    name:  PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
}