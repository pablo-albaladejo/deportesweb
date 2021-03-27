
const FacilityPreview = ({ code, name, address, logo, onSelect }) => (
  <div onClick={() => onSelect(code)} style={{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'silver',
    marginBottom: 24,
  }}>
    <img src={`data:image/png;base64,${logo}`} alt={name} width={'100%'} />
    <div>{name}</div>
    <div>{address}</div>
  </div>
)
export default FacilityPreview