import { useState, useEffect } from 'react';

const useProductDataArray = () => {
    const [productData, setProductDatas] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize loading to true
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/product')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            setProductDatas(data);
            setLoading(false);
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            setError(error);
            setLoading(false);
          });
      }, []);

    return { productData, loading, error };
}

export default useProductDataArray;
