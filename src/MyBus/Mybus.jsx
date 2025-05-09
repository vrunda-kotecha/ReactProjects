import './Mybus.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Mybus() {
  const totalSeats = 40;
  const [selectedSeats, setSelectedSeats] = useState([]);

  function handleSeatClick(seatNumber) {
    setSelectedSeats(prev =>
      prev.includes(seatNumber)
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  }

  const renderSeats = () => {
    const rows = [];
    for (let i = 0; i < totalSeats / 5; i++) {
      const rowSeats = [];

      for (let j = 0; j < 2; j++) {
        const seatNumber = i * 5 + j + 1;
        rowSeats.push(
          <button
            key={seatNumber}
            className={`sbtn ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </button>
        );
      }

      rowSeats.push(<div key={`gap-${i}`} className="aisle-space" />);

      for (let j = 2; j < 5; j++) {
        const seatNumber = i * 5 + j + 1;
        rowSeats.push(
          <button
            key={seatNumber}
            className={`sbtn ${selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </button>
        );
      }

      rows.push(
        <div className="seat-row" key={`row-${i}`}>
          {rowSeats}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="App1">
      <div className="bus">
        <h1 className="name">MY BUS</h1>
        <div className="driver">Driver</div>
        <div className="seating bordered-bus">{renderSeats()}</div>
        <div className="mt-4">
          <input
            type="text"
            className="txttt"
            readOnly
            value={`Total Amount: ₹${selectedSeats.length * 100}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Mybus;
