// src/components/ProductDetails.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import '../styles/ProductPage.css';

const ProductDetails = ({ product }) => {
  return (
    <Card className="product-details">
      <CardMedia
        component="img"
        alt={product.title}
        // height="max-height"
        image={product.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.subtitle}
        </Typography>
        <div className="tags">
          {product.tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" style={{ margin: '5px' }} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
