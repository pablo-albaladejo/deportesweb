
const FacilityInfo = ({ date, events }) => (
  <div style={{
  }}>
    {date}
    {events.map(({ event_name, duration, sessions }) =>
      <div
        style={{
          marginTop: 16,
          marginBotton: 16,
        }}
      >
        <div>{`${event_name} - ${duration}`}</div>
        <div>{sessions.map(session => <div>{`${session.from_hour} - ${session.to_hour}`}</div>)}</div>
      </div>
    )}
  </div>
)
export default FacilityInfo