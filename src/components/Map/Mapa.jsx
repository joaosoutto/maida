import React from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap() {
  return (
    <Map
      height={500}
      defaultCenter={[-19.91896339488668, -43.938596916666896]}
      defaultZoom={10}
    >
      <Marker width={50} />
    </Map>
  );
}
