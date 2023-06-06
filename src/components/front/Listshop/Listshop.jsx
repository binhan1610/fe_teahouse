import React, { useEffect, useState } from "react";

function Listshop({ success }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [success]);

  useEffect(() => {
    if (latitude && longitude) {
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
      )
        .then((response) => response.json())
        .then((data) => setAddress(data.display_name))
        .catch((error) => console.error(error));
    }
  }, [latitude, longitude]);
  return (
    <div>
      {success ? (
        <div>
                        {address? (
        <div>
          <form style={{ border: "1px solid black", backgroundColor: "white", width:"500px",height:"50px" }}>
      <p>Giao đến: {address}</p>
    </form>
 
        </div>
      ):(
        <div>Đang tải </div>
      )}
        </div>
      ) : (
        <div>Vui lòng đăng nhập để tìm những cửa hàng lân cận</div>
      )}
    </div>
  );
}

export default Listshop;
