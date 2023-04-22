import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Table() {
    const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAll')
      .then(response => {
        setVehicleData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            
            <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Registration Number</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Seat Capacity</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Fare/km</th>
          </tr>
        </thead>
        <tbody>
          {vehicleData.map(vehicle => (
            <tr key={vehicle.vehicleId} style={{ border: '1px solid black' }}>
            
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.type}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.registrationnumber}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.seatcapacity}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{vehicle.totalFare}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
