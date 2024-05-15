import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../redux/actions';
import { fetchProductData } from '../services/dataService';
import ProductDetails from './ProductDetails';
import SalesGraph from './SalesGraph';
import SalesTable from './SalesTable';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    fetchProductData().then((product) => {
      dispatch(setProduct(product));
    });
  }, [dispatch]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container maxWidth="xl" sx={{ marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Box className="sidebar">
            <ProductDetails product={product} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box className="main-content" sx={{ height:"84vh" }}>
            <Card className="card" sx={{ flex: 7 }}>
              <CardContent sx={{ height: '100%' }}>
                <SalesGraph sales={product.sales} />
              </CardContent>
            </Card>
            <Card className="card card-table" sx={{ flex: 3 }}>
              <CardContent sx={{ height: '100%', overflow: 'auto' }}>
                <SalesTable sales={product.sales} />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
