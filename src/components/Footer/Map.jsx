import "./footer.css"

const Map = () => {

    const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;
    const src = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=Refritrans+El+Salvador&zoom=15`;
    // PQ73+FW%20San%20Salvador,%20El%20Salvador
  return (
    <>
      <iframe
          className="map-iframe"
          width=""
          height=""
          style={{ border: 0}}
          referrerPolicy="no-referrer-when-downgrade"
          src={src}
          allowFullScreen
          loading="lazy">
      </iframe>
    </>
  )
}

export default Map