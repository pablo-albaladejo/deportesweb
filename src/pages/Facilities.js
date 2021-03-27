import { useHistory } from "react-router-dom";

import FacilityPreview from '../componets/facilities/FacilityPreview.js';
import facilities from '../mocks/facilities.js'

function FacilitiesPage() {
  const history = useHistory();

  const onFacilitySelected = (code) => {
    history.push(`/facility/${code}`)
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {!facilities && (
          <div>{'LOADING'}</div>
        )}
        <div style={{ width: '100%', maxWidth: 600 }}>
          {facilities && facilities.map(facility => <FacilityPreview onSelect={onFacilitySelected} {...facility} />)}
        </div>
      </div >
    </>
  );
}

export default FacilitiesPage;
