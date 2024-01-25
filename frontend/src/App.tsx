import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, FullscreenControl } from "react-map-gl";
import { useState } from "react";
import trails from "../data.json";
// import trails from "./test.json";

const data: any = trails;

function App() {
  return (
    <div>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoia2hhbGVkMjA0OCIsImEiOiJjbHJqbnI2azQwNWRyMmtraXlzdWR3N2xoIn0.25oYJMrELC1s9VPPA60ndA"
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        {data.features.slice(0, 3).map((feature: any, featureIndex: any) =>
          feature.geometry.coordinates.map(
            (coordinateSet: any, coordinateSetIndex: any) =>
              coordinateSet.map((coordinate: any, coordinateIndex: any) => (
                <Marker
                  key={`${featureIndex}-${coordinateSetIndex}-${coordinateIndex}`}
                  longitude={coordinate[0]}
                  latitude={coordinate[1]}
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img src="../trail.svg" alt="trail icon" />
                  </button>
                </Marker>
              ))
          )
        )}
      </Map>
    </div>
  );
}
export default App;
