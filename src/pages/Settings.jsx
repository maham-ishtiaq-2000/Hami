import React,{useState,useEffect} from 'react';
import { toast } from 'react-toastify';
import Sidebar from '../components/Layouts/SideBar';
import ChangePasswordModal from '../components/Layouts/ChangePasswordModal';



const Settings = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userData,setUserData] = useState([])

  const openModal = () => {
    setIsOpen(true);
  };
  const [theme, setTheme] = useState('dark'); 


  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem('userId');
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user data');
        const userData = await response.json();
        setUserData(userData)
        setName(userData.name);
        setEmail(userData.email);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, []);




  const handleThemeSwitcher = () =>{
    if(theme == "dark"){
      document.documentElement.classList.add('dark')
    }
    else{
      document.documentElement.classList.remove('dark')
    }
    setTheme(theme === "dark" ? "light" : "dark")
  }

   const handleSubmit = async (e) => {
    e.preventDefault(); 
    const userId = localStorage.getItem('userId')
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }), 
      });
      if (!response.ok) throw new Error('Failed to update user settings');
      toast.success('Settings updated successfully!');
    } catch (error) {
      toast.alert(error.message);
    }
  };

  const handleDiscard = () => {
    setName(userData.name);
    setEmail(userData.email);
  };

  

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div className="flex flex-col h-screen bg-lightNavy dark:bg-offWhite dark:text-black">
      <Sidebar />
      <div className="flex-1 p-10 overflow-hidden" style={{ marginLeft: "100px"  }}>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-4  dark:text-black">Settings</h1>
          <div className="w-full rounded-tl rounded-tr bg-navy dark:bg-white dark:text-black" style={{ height: "85vh", marginTop: "20px", padding: "25px", overflow: "auto" }}>
 
          
          <form className='mx-4 sm:mx-6 md:mx-8 lg:mx-10 mt-10'>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-20">
  <div>
    <label htmlFor="name" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Name</label>
          <input
            id="name"
            type="text"
            className="mt-1 block w-full rounded border border-pink bg-navy dark:bg-white dark:text-black text-white p-2 focus:outline-none"
            value={name} 
            onChange={(e) => setName(e.target.value)}

          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Email</label>
          <input
            id="email"
            type="text"
            className="mt-1 block w-full rounded border border-pink bg-navy dark:bg-white dark:text-black text-white p-2 focus:outline-none"
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>



            <div className="mb-6 mt-20">
              <label htmlFor="password" className="block text-lg text-white font-medium dark:bg-white dark:text-black">Password</label>
              <button type="button" className="mt-1 block w-full sm:w-auto rounded border border-pink text-pink py-2 px-4"  onClick={openModal}>Change Password</button>
            </div>

           
            <div className="flex mt-40 mb-3">
              <div className="text-xl font-semibold text-white dark:text-black">
                Application Theme
              </div>
            </div>
            <div>
            <label
                    className="inline-block pl-[0.15rem] mb-4  mr-20 text-white dark:text-black hover:cursor-pointer"
                    htmlFor="flexSwitchCheckDefault"
                >Dark Mode</label>
                <input
                    className="mr-2 mt-[0.3rem] ml-20 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-pink dark:bg-pink before:pointer-events-none before:absolute before:h-3.5 before:w-5 before:rounded-full before:bg-pink before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-pink dark:checked:focus:before:shadow-pink"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault" onClick={handleThemeSwitcher}/>
            </div>
            <div className="text-sm text-white dark:text-black italic mt-1">
              <p>Enable this setting if you’d like <br></br>to continue to use app in dark mode</p>
            </div>
         

          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-40 gap-4 sm:gap-8">
              <button type="button" className="rounded border border-pink text-pink py-3 px-10 flex-1 sm:flex-none" onClick={handleDiscard}>Discard Changes</button>
              <button type="submit" className="rounded bg-pink text-white py-3 px-10 flex-1 sm:flex-none" onClick={handleSubmit}>Save Changes</button>
            </div>


          </form>
          </div>
       </div>
    </div>
    <ChangePasswordModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
    
  );
};

export default Settings;
