// import { useEffect, useState } from 'react'
// import './App.css'
// import { Navigate, Route, Routes } from 'react-router-dom'
// import Auth from './pages/auth'
// import Chat from './pages/chat'
// import Profile from './pages/profile'
// import { useAppStore } from './store'
// import { apiClient } from './lib/api-client'
// import { GET_USER_INFO } from './utils/constants'
// import { toast } from 'sonner'
// import Admin from './components/admin'
// import AdminDashboard from './components/admin-dashboard'

// const AuthRoute = ({children}) => {
//   const { userInfo, adminInfo } = useAppStore()
//   console.log('adminInfo', adminInfo);
//   const isAuthenticated  = !!userInfo
//   return isAuthenticated ? <Navigate to="/CLAIR" /> : children
// } 

// const PrivateRoute = ({children}) => {
//   const { userInfo } = useAppStore()
//   console.log({userInfo});
//   const isAuthenticated  = !!userInfo
//   return isAuthenticated ? children : <Navigate to="/auth" />
// } 

// const AdminRoute = ({children}) => {
//   const { adminInfo } = useAppStore()
//   const isAuthenticated  = !!adminInfo
//   return isAuthenticated ? <Navigate to="/dashboard" /> : children
// }

// function App() {

//   const { userInfo, setUserInfo } = useAppStore()
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const getUserData = async () => {
//       try {
//         const response = await apiClient.get(GET_USER_INFO, {
//           withCredentials: true,
//         })
//         if (response.status === 200 && response.data.user.id) {
//           setUserInfo(response.data.user)
//         }
//         else if (response.status === 200 && response.data.admin.id) {
//           setAdminInfo(response.data.admin)
//         }
//         else{
//           setUserInfo(undefined)
//         }
//         console.log({response});
//       }catch (error){
//         setUserInfo(undefined)
//         // toast.info("Login or Signup to get started")
//         console.log({userInfo});
//         console.log({error});
//       }finally{
//         setLoading(false)
//       }
//     }

//     if (!userInfo){
//       getUserData()
//     }
//     else{
//       setLoading(false)
//     }
//   }, [userInfo, setUserInfo]) 

//   if (loading){
//     return <div> Loading Please wait..</div>
//   }

//   return (<>
//   <Routes >
//     <Route path="*" element={<Navigate to="/auth" />} />
//     <Route path="/CLAIR" element={
//       <PrivateRoute>
//         <Chat />
//       </PrivateRoute>
//     } />
//     <Route path="/auth" element={
//       <AuthRoute>
//         <Auth />
//       </AuthRoute>
//     } />
//     <Route path='/profile-setup' element={  <Profile />} />
//     <Route path='/admin' element={<Admin />} />
//     {/* <AdminRoute path='/dashboard' element={<AdminDashboard />} /> */}
//     {/* <Route path='/dashboard' element={<AdminDashboard />} /> */}
//   </Routes>

//   </>
//   )
// }

// export default App


// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { useAppStore } from "@/store"; // Adjust your store path as needed
// import Admin from "./components/admin";
// import AdminDashboard from "./components/admin-dashboard";
// import Chat from "@/pages/chat";
// import Auth from "@/pages/auth";

// const App = () => {
//   const { userInfo, adminInfo } = useAppStore();
//   console.log({ userInfo });

//   return (
//     <Routes>
//       {/* Public Routes */}
//       <Route path="/auth" element={<Auth />} />
//       <Route path="/admin" element={!adminInfo ? <Admin /> : <Navigate to="/dashboard" />} />

//       {/* Admin-Only Routes */}
//       <Route path="/dashboard" element={adminInfo ? <AdminDashboard /> : <Navigate to="/admin" />} />

//       {/* User-Only Routes */}
//       <Route path="/CLAIR" element={userInfo ? <Chat /> : <Navigate to="/auth" />} />

//       {/* Default Route */}
//       <Route
//         path="*"
//         element={
//           <Navigate
//             to={
//               userInfo
//                 ? "/chat"
//                 : adminInfo
//                 ? "/admin-dashboard"
//                 : "/auth"
//             }
//           />
//         }
//       />
//     </Routes>
//   );
// };

// export default App;


import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppStore } from '@/store';
import { apiClient } from '@/lib/api-client';
import { GET_USER_INFO, GET_ADMIN_INFO } from '@/utils/constants';
import Admin from './components/admin';
import AdminDashboard from './components/admin-dashboard';
import Chat from '@/pages/chat';
import Auth from '@/pages/auth';

const App = () => {
  const { userInfo, adminInfo, setUserInfo, setAdminInfo } = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userResponse = await apiClient.get(GET_USER_INFO, {
          withCredentials: true,
        });
        if (userResponse.status === 200 && userResponse.data.user) {
          setUserInfo(userResponse.data.user);
          setAdminInfo(undefined);
        } else {
          const adminResponse = await apiClient.get(GET_ADMIN_INFO, {
            withCredentials: true,
          });
          if (adminResponse.status === 200 && adminResponse.data.admin) {
            setAdminInfo(adminResponse.data.admin);
            setUserInfo(undefined);
          } else {
            setUserInfo(undefined);
            setAdminInfo(undefined);
          }
        }
      } catch (error) {
        console.error('Error fetching user/admin data:', error.response?.data || error.message);
        setUserInfo(undefined);
        setAdminInfo(undefined);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, [setUserInfo, setAdminInfo]);

  if (loading) {
    return <div>Loading, please wait...</div>;
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/auth" element={!userInfo && !adminInfo ? <Auth /> : <Navigate to="/" />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={!adminInfo ? <Admin /> : <Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={adminInfo ? <AdminDashboard /> : <Navigate to="/admin" />} />
      
      {/* User Routes */}
      <Route path="/CLAIR" element={userInfo ? <Chat /> : <Navigate to="/auth" />} />
      
      {/* Default Route */}
      <Route
        path="*"
        element={
          <Navigate
            to={
              userInfo
                ? "/CLAIR"
                : adminInfo
                ? "/dashboard"
                : "/auth"
            }
          />
        }
      />
    </Routes>
  );
};

export default App;

