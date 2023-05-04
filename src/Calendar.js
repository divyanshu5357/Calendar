import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const days = [];
  let currentDay = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth.getDay()) || currentDay > daysInMonth) {
        week.push(<td key={`${i}-${j}`}></td>);
      } else {
        week.push(<td key={`${i}-${j}`}>{currentDay}</td>);
        currentDay++;
      }
    }
    days.push(<tr key={i}>{week}</tr>);
  }

  return (
    <div>
      <h1>{`${monthsOfYear[month]} ${year}`}</h1>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>{days}</tbody>
      </table>
      <button onClick={handlePreviousMonth}>Previous Month</button>
      <button onClick={handleNextMonth}>Next Month</button>
    </div>
  );
};

export default Calendar;
