import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

Modal.setAppElement('#root');

const ChangePasswordModal = ({ isOpen, onRequestClose }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error('All fields are required.');
      return;
    }
  
    if (newPassword !== confirmPassword) {
      toast.error('New password and confirm password do not match.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3000/user/65f2c704857edbac223f3d2e/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message || 'Failed to update password.');
        return;
      }
  
      toast.success('Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      onRequestClose(); 
    } catch (error) {
      console.error('Password update failed:', error);
      toast.error('An error occurred while updating the password. Please try again.');
    }
  };
  


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute top-1/2 left-1/2 max-w-lg p-5 -translate-x-1/2 -translate-y-1/2 bg-navy dark:bg-white dark:text-black rounded shadow-lg outline-none rounded-xl"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
    >
      <button onClick={onRequestClose} className="absolute top-5 right-5 bg-pink text-white text-xl px-2 py-1">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="flex flex-col items-center justify-center bg-navy dark:bg-white dark:text-black">
        <div className="flex flex-col items-center justify-center flex-grow">
          <div className="flex items-center justify-center w-full h-full">
            <p className='text-white text-2xl font-semibold mt-8 dark:bg-white dark:text-black'>Change Password</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-navy p-4 sm:p-6 md:p-8 lg:p-10 max-w-lg w-full mx-auto rounded-lg dark:bg-white dark:text-black">
          
        




         {validationMessage && <p className="text-pink text-lg italic mb-3 ml-3">{validationMessage}</p>}
          <div className="mb-4">
            <input
              type="password" 
              placeholder='Current Password'
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="shadow appearance-none border border-pink bg-navy mb-5 dark:bg-white dark:text-black rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="password"
              placeholder='New Password'
              onChange={(e) => setNewPassword(e.target.value)}
              className="shadow appearance-none border border-pink bg-navy mb-5 rounded dark:bg-white dark:text-black w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="password" 
              placeholder='Confirm Password'
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border border-pink bg-navy mb-5  dark:bg-white dark:text-black rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-pink hover:bg-pink-700 text-center text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ChangePasswordModal;
