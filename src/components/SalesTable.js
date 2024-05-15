// src/components/SalesTable.js
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import '../styles/SalesTable.css';

// Utility function for sorting in descending order
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

// Function to get the comparator based on sorting order and column
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Function to perform stable sorting
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const SalesTable = ({ sales }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('weekEnding');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table className="sales-table">
        <TableHead>
          <TableRow>
            <TableCell sortDirection={orderBy === 'weekEnding' ? order : false}>
              <TableSortLabel
                active={orderBy === 'weekEnding'}
                direction={orderBy === 'weekEnding' ? order : 'asc'}
                onClick={createSortHandler('weekEnding')}
              >
                Week Ending
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'retailSales' ? order : false}>
              <TableSortLabel
                active={orderBy === 'retailSales'}
                direction={orderBy === 'retailSales' ? order : 'asc'}
                onClick={createSortHandler('retailSales')}
              >
                Retail Sales
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'wholesaleSales' ? order : false}>
              <TableSortLabel
                active={orderBy === 'wholesaleSales'}
                direction={orderBy === 'wholesaleSales' ? order : 'asc'}
                onClick={createSortHandler('wholesaleSales')}
              >
                Wholesale Sales
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'unitsSold' ? order : false}>
              <TableSortLabel
                active={orderBy === 'unitsSold'}
                direction={orderBy === 'unitsSold' ? order : 'asc'}
                onClick={createSortHandler('unitsSold')}
              >
                Units Sold
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'retailerMargin' ? order : false}>
              <TableSortLabel
                active={orderBy === 'retailerMargin'}
                direction={orderBy === 'retailerMargin' ? order : 'asc'}
                onClick={createSortHandler('retailerMargin')}
              >
                Retailer Margin
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(sales, getComparator(order, orderBy)).map((sale, index) => (
            <TableRow key={index}>
              <TableCell>{sale.weekEnding}</TableCell>
              <TableCell>${sale.retailSales.toLocaleString()}</TableCell>
              <TableCell>${sale.wholesaleSales.toLocaleString()}</TableCell>
              <TableCell>{sale.unitsSold}</TableCell>
              <TableCell>${sale.retailerMargin.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
