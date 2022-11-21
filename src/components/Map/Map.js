import React, { useState } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import * as nationalParks from "../../data/finnish-np.json";

const navControlStyle = {
  right: 20,
  top: 20,
};

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 62.2393002,
    longitude: 25.745951,
    width: "90vw",
    height: "80vh",
    zoom: 5,
  });

  const [selectedPark, setselectedPark] = useState(null);

  return (
    <>
      <div className="map-section">
        <div className="map-container">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/etureppu/ckko4uviw6cm517phe15s7kfl"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            <NavigationControl className="navControl" style={navControlStyle} />
            {nationalParks.data.map((nationalPark) => (
              <Marker
                key={nationalPark.id}
                latitude={nationalPark.location.lat}
                longitude={nationalPark.location.lon}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setselectedPark(nationalPark);
                  }}
                >
                  <img src="/walk.png" alt="walk icon" className="park-icon" />
                </button>
              </Marker>
            ))}

            {selectedPark ? (
              <Popup
                closeButton={true}
                closeOnClick={true}
                latitude={selectedPark.location.lat}
                longitude={selectedPark.location.lon}
                onClose={() => {
                  setselectedPark(null);
                }}
              >
                <h2 className="np-name">{selectedPark.name}</h2>
                <p className="np-location">
                  {selectedPark.location.address.locality}
                </p>
                <a
                  href={selectedPark.info_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  More info:
                  <br />
                  nationalparks.fi
                </a>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </>
  );
}
