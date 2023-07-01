import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function propertyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [propertyDetail, setPropertyDetail] = useState({});
  const [ownerDetail, setOwnerDetail] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3000/properties/${id}`)
      .then((response) => {
        setPropertyDetail(response.data);
        setOwnerDetail(response.data.owner);
      })
      .catch((err) => console.error(err, "url not found"));
  }, []);

  return (
    <div>
      <h1>PropertyDetails</h1>
      <img src={propertyDetail.image} alt={propertyDetail.title} />
      <h3>{propertyDetail.title}</h3>
      <p>{propertyDetail.description}</p>
      <p>Bedrooms: {propertyDetail.bedrooms}</p>
      <p>Situated in: {propertyDetail.area}</p>
      <p>Availability: {propertyDetail.availability}</p>
      <p>Price: {propertyDetail.price}</p>
      <p>Owned by: {ownerDetail.name}</p>
      <p>
        contact: {ownerDetail.phoneNumber} - {ownerDetail.email}{" "}
      </p>
    </div>
  );
}

export default propertyDetails;
