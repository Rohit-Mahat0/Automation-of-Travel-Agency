import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Table() {
    const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/admin/selectAllBooking')
      .then(response => {
        setBookingData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ border: '1px solid black' }}>
            
            <th style={{ border: '1px solid black', padding: '8px' }}>journeyDate</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>bookingDate</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>boardingPoint</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>dropPoint</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Fare/km</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>noOfPassegers</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>vehicleId</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>reservationId</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map(booking => (
            <tr key={booking.reservationId} style={{ border: '1px solid black' }}>
            
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.journeyDate}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.bookingDate}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.boardingPoint}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.dropPoint}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.totalFare}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.noOfPassegers}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.vehicleId}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{booking.reservationId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table
