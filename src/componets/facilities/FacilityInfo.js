
const FacilityInfo = ({ date, events }) => (
  <div style={{}}>
    {date}
    {events.map(({ event_name, duration }) => <div>{`${event_name} - ${duration}`}</div>)}
  </div>
)
export default FacilityInfo