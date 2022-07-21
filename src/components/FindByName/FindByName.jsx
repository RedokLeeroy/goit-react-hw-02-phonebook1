
export const FindByName = ({value, name, onChange}) => {
    return <label> Find Contacts By name: <input
  name="filter"
  value={value}
  onChange={onChange}
/>
</label>
}