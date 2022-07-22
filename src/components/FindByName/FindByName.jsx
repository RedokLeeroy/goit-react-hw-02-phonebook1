import PropTypes from "prop-types"

export const FindByName = ({value, onChange}) => {
    return <label> Find Contacts By name: <input
  name="filter"
  value={value}
  onChange={onChange}
/>
</label>
}

FindByName.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}