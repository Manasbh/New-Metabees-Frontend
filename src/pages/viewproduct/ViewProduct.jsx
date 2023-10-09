import { useState, useEffect } from 'react'
import axios from 'axios'
import { getCookieByName } from '../../utils/getCookie'
import Product from '../../components/products/Product'
import './ViewProduct.css'

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const token = getCookieByName('aToken');

  useEffect(() => {
    axios
      .get('https://your-api-endpoint.com/api/products', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div className="viewprod-bg flex gap-10 max-sm:flex-col items-center justify-center h-screen">
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <Product name={product.name} productUrl={product.productUrl} />
        </div>
      ))}
      <Product
        name="Test"
        productUrl="asdasd"
        qrCode="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
      />
    </div>
  );
};

export default ViewProduct
