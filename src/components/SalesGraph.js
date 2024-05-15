import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';

// Utility function to format the date to "Month Year" format
const formatDateToMonthYear = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

const SalesGraph = ({ sales }) => {
  return (<>
    <Typography variant="h7">
      Retail Sales
    </Typography>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart width={1000} height={400} data={sales} margin={{ top: 25, right: 30, left: 20, bottom: 0 }}>
        <XAxis dataKey="weekEnding" tickFormatter={formatDateToMonthYear}/>
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
    </>
  );
};

export default SalesGraph;
