import React, { useState,useRef,useEffect } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


Modal.setAppElement('#root');

const EditProductModal = ({ isOpen, onRequestClose }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Select a Category');
  const [price, setPrice] = useState('Select a price');
  const [description, setDescription] = useState('');
  const [productImage, setProductImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  
  const fileInputRef = useRef(null);
  const productId = localStorage.getItem('product_id');

  useEffect(() => {
    if (isOpen && productId) {
      fetch(`http://localhost:3000/product/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setCategory(data.category); 
          setPrice(data.price);
          setDescription(data.description);
          setQuantity(data.quantity);
          setExistingImage(data.imageURL)
        })
        .catch((error) => {
          console.error('Failed to fetch product data:', error);
        });
    }
  }, [isOpen, productId]);

  const handlePlaceholderClick = () => {
    fileInputRef.current.click();
  };

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('file', imageFile);
  
    try {
      const response = await fetch('http://localhost:3000/file/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Image upload failed');
      }
  
      const contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        const data = await response.json();
        return data.link; 
      } else {
        const link = await response.text();
        return link;
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const productData = {
      name,
      category,
      price,
      description,
      quantity,
      imageURL: existingImage, 
    };
  
    try {
      console.log(productData)
      const response = await fetch(`http://localhost:3000/product/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update product');
      }
  
      toast.success("Product Updated Successfully!");
      onRequestClose();
      window.location.reload()
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
  
  
  const handleImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setProductImage(file); 
  
      const uploadedImageURL = await uploadImage(file);
      if (uploadedImageURL) {
        setExistingImage(uploadedImageURL); 
      } else {
        console.error('Error uploading new image');
      }
    }
  };
  

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="absolute top-1/2 left-1/2 max-w-lg max-h-[80vh] p-5 -translate-x-1/2 -translate-y-1/2 bg-navy rounded dark:text-black dark:bg-white shadow-lg outline-none rounded-xl w-full sm:min-w-[40%] overflow-y-auto"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50"
  >
        <h1 className="text-center text-white text-3xl mt-5 dark:text-black dark:bg-white">Edit Product</h1>
      <button onClick={onRequestClose} className="absolute top-5 right-5 bg-pink text-white text-xl px-2 py-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-col items-center justify-center bg-navy dark:text-black dark:bg-white"> 
        <form onSubmit={handleSubmit} className="bg-navy p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg w-full mx-auto dark:text-black dark:bg-white rounded-lg">
          <div className="mb-4 flex justify-center">
                <input
                  type="file"
                  id="productImage"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden" 
                />
                <img
                  src={existingImage}
                  alt="Upload placeholder"
                  className="cursor-pointer" 
                  onClick={handlePlaceholderClick}
                />
            </div>

        <div className="mb-4">
        <label htmlFor="name" className="block text-white dark:text-black dark:bg-white text-sm sm:text-base font-bold mb-2">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border dark:text-black dark:bg-white border-pink bg-navy rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4 md:flex md:gap-4">
  
          <div className="md:flex-grow mt-4 md:mt-0">
              <label htmlFor="category" className="block text-white dark:text-black dark:bg-white text-sm sm:text-base font-bold mb-2">
                Product Category
              </label>
              <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="shadow border dark:text-black dark:bg-white border-pink bg-navy rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
                >
                  <option value="Select a Category" disabled>Select a Category</option>
                  <option value="BED">BED</option>
                  <option value="TABLE">TABLE</option>
                  <option value="CHAIR">CHAIR</option>
                </select>

              

            </div>

            <div className="md:flex-grow mt-4 md:mt-0">
              <label htmlFor="price" className="block dark:text-black dark:bg-white text-white text-sm sm:text-base font-bold mb-2">
                Product Price
              </label>
              <select
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="shadow border border-pink bg-navy dark:text-black dark:bg-white rounded w-full py-2 px-3 text-white focus:outline-none focus:shadow-outline"
                >
                  <option value="Select a price" disabled>Select a price</option>
                  <option value="100">100</option>
                  <option value="200">200</option>

                </select>

              

            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block dark:text-black dark:bg-white text-white text-sm sm:text-base font-bold mb-2">
              Product Description
            </label>
            <textarea
              id="description"
              value={description}
              rows = "10"
              onChange={(e) => setDescription(e.target.value)}
              className="shadow appearance-none border border-pink dark:text-black dark:bg-white rounded w-full py-2 px-3 text-white bg-navy leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
    
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-pink hover:bg-pink-700  text-center text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit}          
           >
              Edit Product
            </button>
          </div>
        </form>
          </div>
        </Modal>
  );
};

export default EditProductModal;
