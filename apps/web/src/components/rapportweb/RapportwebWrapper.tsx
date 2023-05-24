"use client"

import { MapContainer, TileLayer, WMSTileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L, { LatLng } from "leaflet"
import "proj4leaflet"

const getBaseUrl = () => {
  return "https://ogckart-sn1.atlas.vegvesen.no/rapportweb_1_0/wfs"
}

// Coordinate reference system (delar av Europa: https://epsg.io/25833)
export const crs = new L.Proj.CRS(
  "EPSG:25833",
  "+proj=utm +zone=33 +ellps=GRS80 +units=m",
  {
    origin: [-2500000, 9045984],
    resolutions: [
      21674.7100160867, 10837.35500804335, 5418.677504021675,
      2709.3387520108377, 1354.6693760054188, 677.3346880027094,
      338.6673440013547, 169.33367200067735, 84.66683600033868,
      42.33341800016934, 21.16670900008467, 10.583354500042335,
      5.291677250021167, 2.6458386250105836, 1.3229193125052918,
      0.6614596562526459, 0.33072982812632296,
    ],
  }
)

export default function RapportwebWrapper() {
  const position = new LatLng(64.75, 12.44)
  const props = {
    version: "1.1.1",
    layers: "svv_rapportweb_1_0:Rapportweb",
    format: "image/png",
    transparent: true,
  }
  return (
    <MapContainer center={position} zoom={3.5} crs={crs}>
      <TileLayer
        url={
          "https://nvdbcache.geodataonline.no/arcgis/rest/services/Trafikkportalen/GeocacheTrafikkJPG/MapServer/tile/{z}/{y}/{x}"
        }
      />
      <WMSTileLayer
        url={getBaseUrl()}
        {...props}
        attribution={`&copy; NVDB, Geovekst, kommunene og Open Street Map contributors (utenfor Norge)`}
      />
    </MapContainer>
  )
}
