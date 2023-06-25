import axios from "axios";
import React, { useEffect, useState } from "react";
import './style.css'
import NewTitle from '../../../assets/img/title_base.webp'
import { Link } from "react-router-dom";
import {FaMapMarkedAlt} from "react-icons/fa"
function Listshop({ success, token, setToken }) {
  const [shopteas, setShopteas] = useState();
 
  const [lat, setLatitude] = useState();
  const [lon, setLongitude] = useState();
 
  const toRad = (degrees) => {
    return (degrees * Math.PI) / 180;
  };
  const khoangcach = (lat1, lon1) => {
    const R = 6371; // bán kính Trái đất ở đơn vị km
    const dLat = toRad(lat - lat1);
    const dLon = toRad(lon - lon1);
    const radLat1 = toRad(lat1);
    const radlat = toRad(lat);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(radLat1) *
        Math.cos(radlat);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };
  useEffect(() => {
    const getShoptea = async () => {
      const { data } = await axios.get("http://localhost:3001/shoptea");
      setShopteas(data);
    };
    if (success) {
      getShoptea()
      setLatitude(100.05)
      setLongitude(100.05)
    };
  }, [success]);
  useEffect(() => {
    const getShoptea = async () => {
      const { data } = await axios.get("http://localhost:3001/shoptea", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShopteas(data);
    }
    getShoptea()
  }
  ,[])
  console.log(shopteas);
  return (
    <div style={{margin:"10px"}}>
      {success ? (
        <div>
          {lat && lon && (
            <div>
              <form
                style={{
                  border: "1px solid black",
                  backgroundColor: "white",
                  width: "500px",
                  height: "61px",
                  textAlign:"center",
                  padding:"5px",
                  borderRadius:"20px",
                  display:"flex",
                  alignItems:"center"
                }}
              >
                <FaMapMarkedAlt size="40px"/>
                <h5>Vị trí hiện tại của bạn là: Ngách 230/21/33 Mễ Trì Thượng</h5> </form>
                <img style={{display:"block","margin":"0 auto"}} src={NewTitle} alt=""/>
          <h1 style={{textAlign:"center"}}>Các cửa hàng ShopTea gần bạn</h1>
                <div className="shoptea">
                  {shopteas &&
                    shopteas.map((el) => (
                      <div key={el._id}>
  <img style={{borderRadius:"10px"}} src="https://th.bing.com/th/id/OIP.gUGy32P8nHyy447npQeuZwHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
                       <Link to={"/listproduct"} style={{textDecoration:"none"}}> <div style={{fontSize:"30px",color:"green"}}>{el.name}</div></Link>
                        <div>{el.address}</div>
                        <div>{khoangcach(el.lat, el.lon).toFixed(1)} km</div>
                         
                      </div>
                    ))}
                </div>
             
            </div>
          ) }
        </div>
      ) : (
        <div>
          <img style={{display:"block","margin":"0 auto"}} src={NewTitle} alt=""/>
          <h1 style={{textAlign:"center"}}>Các cửa hàng ShopTea nổi bật</h1>
          <div className="shoptea">
          {shopteas &&
                    shopteas.map((el) => (
                      <div key={el._id} >
                        <img style={{borderRadius:"10px"}} src="https://th.bing.com/th/id/OIP.gUGy32P8nHyy447npQeuZwHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
                       <Link to={"/listproduct"} style={{textDecoration:"none"}}> <div style={{fontSize:"30px",color:"green"}}>{el.name}</div></Link>
                        <div>{el.address}</div>
                     
                      </div>
                    ))}
                    </div>
        </div>
      )}
    </div>
  );
}

export default Listshop;
