import React from 'react';

export default function FormattedDate(dateProp) {
   const date = new Date(dateProp);
   const options = { year: 'numeric', month: 'long', day: 'numeric' };
   const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

   return <span>{formattedDate}</span>;
}
