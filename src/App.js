import { useEffect, useState } from 'react'

function App() {
  const [centers, setCenters] = useState()

  useEffect(() => {
    setCenters([])
  }, [])

  return (
    <div>
      {!centers && (
        <div>{'LOADING'}</div>
      )}
      {centers && (
        <div>{JSON.stringify(centers)}</div>
      )}
    </div>
  );
}

export default App;
