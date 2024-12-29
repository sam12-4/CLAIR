// import { getColors } from "@/lib/utils";
// import { useAppStore } from "@/store";
// import { HOST, LOGOUT } from "@/utils/constants";
// import { Avatar } from "@radix-ui/react-avatar";
// import React from "react";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import { FiEdit2 } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// import { IoPowerSharp } from "react-icons/io5";
// import { apiClient } from "@/lib/api-client";
// import { toast } from "sonner";

// const ProfileInfo = () => {
//   const { userInfo, setUserInfo } = useAppStore();
//   const navigate = useNavigate();
//   // console.log({ userInfo });

//   const logOut = async () => {
//     try {
//       const response = await apiClient.post(
//         LOGOUT,
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       if (response.status === 200) {
//         navigate("/auth");
//         setUserInfo(null);
//         toast.success("Logged out successfully");
//       }
//     } catch (e) {
//       console.log(e);
//       toast.error("An error occurred while logging out");
//     }
//   };

//   return (
//     <div className="absolute bottom-0 h-16 flex items-center justify-between w-[inherit] bg-[#2a2b33] px-5">
//       <div className="flex items-center justify-center gap-3">
//         <div
//           className={`relative  ${getColors(
//             userInfo.colors
//           )} rounded-full w-fit`}
//         >
//           <Avatar>
//             {userInfo.image ? (
//               <img
//                 src={`${HOST}/${userInfo.image}`}
//                 alt="profile"
//                 className="w-11 h-10 rounded-full object-cover object-top"
//               />
//             ) : (
//               <div className="uppercase h-10 w-10 text-2xl border-[1px] flex items-center justify-center rounded-full">
//                 {userInfo.firstName
//                   ? userInfo.firstName.charAt(0)
//                   : userInfo.email.charAt(0)}
//               </div>
//             )}
//           </Avatar>
//         </div>
//         <div>
//           {userInfo?.firstName} {userInfo?.lastName}
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <HoverCard>
//           <HoverCardTrigger>
//             <FiEdit2
//               className="text-purple-500 text-xl font-medium hover:cursor-pointer"
//               onClick={() => {
//                 navigate("/profile-setup");
//               }}
//             />
//           </HoverCardTrigger>
//           <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white opacity-50 outline-none">
//             Edit Profile
//           </HoverCardContent>
//         </HoverCard>
//         <HoverCard>
//           <HoverCardTrigger>
//             <IoPowerSharp
//               className="text-red-500 text-xl font-medium hover:cursor-pointer"
//               onClick={logOut}
//             />
//           </HoverCardTrigger>
//           <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white opacity-50 outline-none">
//             {" "}
//             Logout
//           </HoverCardContent>
//         </HoverCard>
//       </div>
//     </div>
//   );
// };

// export default ProfileInfo;


// import React from "react";
// import { getColors } from "@/lib/utils";
// import { useAppStore } from "@/store";
// import { HOST, LOGOUT } from "@/utils/constants";
// import { Avatar } from "@radix-ui/react-avatar";
// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card";
// import { Edit2, LogOut } from 'lucide-react';
// import { useNavigate } from "react-router-dom";
// import { apiClient } from "@/lib/api-client";
// import { toast } from "sonner";
// import { motion } from 'framer-motion';

// const ProfileInfo = () => {
//   const { userInfo, setUserInfo } = useAppStore();
//   const navigate = useNavigate();

//   const logOut = async () => {
//     try {
//       const response = await apiClient.post(
//         LOGOUT,
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       if (response.status === 200) {
//         navigate("/auth");
//         setUserInfo(null);
//         toast.success("Logged out successfully");
//       }
//     } catch (e) {
//       console.log(e);
//       toast.error("An error occurred while logging out");
//     }
//   };

//   return (
//     <motion.div 
//       className="h-16 flex items-center justify-between w-full bg-gradient-to-r from-[#2a2b33] to-[#1b1c24] px-5"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="flex items-center justify-center gap-3">
//         <motion.div
//           className={`relative ${getColors(userInfo.colors)} rounded-full w-fit`}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           <Avatar>
//             {userInfo.image ? (
//               <img
//                 src={`${HOST}/${userInfo.image}`}
//                 alt="profile"
//                 className="w-11 h-10 rounded-full object-cover object-top"
//               />
//             ) : (
//               <div className="uppercase h-10 w-10 text-2xl border-[1px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#8338ec] to-[#3a86ff] text-white">
//                 {userInfo.firstName
//                   ? userInfo.firstName.charAt(0)
//                   : userInfo.email.charAt(0)}
//               </div>
//             )}
//           </Avatar>
//         </motion.div>
//         <div className="text-sm font-medium">
//           {userInfo?.firstName} {userInfo?.lastName}
//         </div>
//       </div>
//       <div className="flex gap-4">
//         <HoverCard>
//           <HoverCardTrigger>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Edit2
//                 className="text-[#8338ec] text-xl font-medium hover:cursor-pointer"
//                 onClick={() => {
//                   navigate("/profile-setup");
//                 }}
//               />
//             </motion.div>
//           </HoverCardTrigger>
//           <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white opacity-90 outline-none shadow-lg">
//             Edit Profile
//           </HoverCardContent>
//         </HoverCard>
//         <HoverCard>
//           <HoverCardTrigger>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <LogOut
//                 className="text-red-500 text-xl font-medium hover:cursor-pointer"
//                 onClick={logOut}
//               />
//             </motion.div>
//           </HoverCardTrigger>
//           <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white opacity-90 outline-none shadow-lg">
//             Logout
//           </HoverCardContent>
//         </HoverCard>
//       </div>
//     </motion.div>
//   );
// };

// export default ProfileInfo;

// import React from "react";
// import { motion } from 'framer-motion';
// import { Edit2, LogOut, Settings } from 'lucide-react';
// import { useNavigate } from "react-router-dom";
// import { useAppStore } from "@/store";
// import { HOST, LOGOUT } from "@/utils/constants";
// import { apiClient } from "@/lib/api-client";
// import { toast } from "sonner";
// import { Avatar } from "@/components/ui/avatar";
// import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
// import { Button } from "@/components/ui/button";

// const ProfileInfo = () => {
//   const { userInfo, setUserInfo } = useAppStore();
//   const navigate = useNavigate();

//   const logOut = async () => {
//     try {
//       const response = await apiClient.post(LOGOUT, {}, { withCredentials: true });
//       if (response.status === 200) {
//         navigate("/auth");
//         setUserInfo(null);
//         toast.success("Logged out successfully");
//       }
//     } catch (e) {
//       console.error(e);
//       toast.error("An error occurred while logging out");
//     }
//   };

//   return (
//     <motion.div 
//       className="h-20 flex items-center justify-between w-full bg-gradient-to-r from-[#2a2b36] to-[#1c1d25] px-6 relative overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Glossy effect */}
//       <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-5 mix-blend-overlay"></div>
//       <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm"></div>

//       <div className="flex items-center justify-center gap-4 z-10">
//         <motion.div
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="relative"
//         >
//           <Avatar className="h-12 w-12 ring-2 ring-purple-500 ring-offset-2 ring-offset-[#1c1d25]">
//             {userInfo.image ? (
//               <img
//                 src={`${HOST}/${userInfo.image}`}
//                 alt="profile"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             ) : (
//               <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
//                 {userInfo.firstName
//                   ? userInfo.firstName.charAt(0)
//                   : userInfo.email.charAt(0)}
//               </div>
//             )}
//           </Avatar>
//         </motion.div>
//         <div className="flex flex-col">
//           <span className="text-sm font-medium text-white">
//             {userInfo?.firstName} {userInfo?.lastName}
//           </span>
//           <span className="text-xs text-gray-400">{userInfo?.email}</span>
//         </div>
//       </div>
//       <div className="flex gap-4 z-10">
//         <ProfileAction
//           icon={<Edit2 className="w-5 h-5" />}
//           label="Edit Profile"
//           onClick={() => navigate("/profile-setup")}
//         />
//         <ProfileAction
//           icon={<Settings className="w-5 h-5" />}
//           label="Settings"
//           onClick={() => navigate("/settings")}
//         />
//         <ProfileAction
//           icon={<LogOut className="w-5 h-5" />}
//           label="Logout"
//           onClick={logOut}
//         />
//       </div>
//     </motion.div>
//   );
// };

// const ProfileAction = ({ icon, label, onClick }) => (
//   <HoverCard>
//     <HoverCardTrigger asChild>
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className="text-gray-300 hover:text-white transition-colors duration-200"
//         onClick={onClick}
//       >
//         {icon}
//       </motion.button>
//     </HoverCardTrigger>
//     <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white border-none shadow-lg rounded-lg p-2">
//       <span className="text-sm">{label}</span>
//     </HoverCardContent>
//   </HoverCard>
// );

// export default ProfileInfo;

import React from "react";
import { motion } from 'framer-motion';
import { Edit2, LogOut, Settings } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useAppStore } from "@/store";
import { HOST, LOGOUT } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const ProfileInfo = () => {
  const { userInfo, setUserInfo } = useAppStore();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      const response = await apiClient.post(LOGOUT, {}, { withCredentials: true });
      if (response.status === 200) {
        navigate("/auth");
        setUserInfo(null);
        toast.success("Logged out successfully");
      }
    } catch (e) {
      console.error(e);
      toast.error("An error occurred while logging out");
    }
  };

  return (
    <motion.div 
      className="h-16 md:h-20 flex items-center justify-between w-full bg-gradient-to-r from-[#2a2b36] to-[#1c1d25] px-3 md:px-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glossy effect */}
      <div className="absolute inset-0 bg-[url('/path/to/noise-texture.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm"></div>

      <div className="flex items-center justify-center gap-2 md:gap-4 z-10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Avatar className="h-8 w-8 md:h-12 md:w-12 ring-2 ring-purple-500 ring-offset-2 ring-offset-[#1c1d25]">
            {userInfo.image ? (
              <img
                src={`${HOST}/${userInfo.image}`}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-xs md:text-base font-bold">
                {userInfo.firstName
                  ? userInfo.firstName.charAt(0)
                  : userInfo.email.charAt(0)}
              </div>
            )}
          </Avatar>
        </motion.div>
        <div className="flex flex-col">
          <span className="text-xs md:text-sm font-medium text-white">
            {userInfo?.firstName} {userInfo?.lastName}
          </span>
          <span className="text-[10px] md:text-xs text-gray-400">{userInfo?.email}</span>
        </div>
      </div>
      <div className="flex gap-2 md:gap-4 z-10">
        <ProfileAction
          icon={<Edit2 className="w-4 h-4 md:w-5 md:h-5" />}
          label="Edit Profile"
          onClick={() => navigate("/profile-setup")}
        />
        <ProfileAction
          icon={<Settings className="w-4 h-4 md:w-5 md:h-5" />}
          label="Settings"
          onClick={() => navigate("/settings")}
        />
        <ProfileAction
          icon={<LogOut className="w-4 h-4 md:w-5 md:h-5" />}
          label="Logout"
          onClick={logOut}
        />
      </div>
    </motion.div>
  );
};

const ProfileAction = ({ icon, label, onClick }) => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-gray-300 hover:text-white transition-colors duration-200"
        onClick={onClick}
      >
        {icon}
      </motion.button>
    </HoverCardTrigger>
    <HoverCardContent className="w-fit h-fit bg-[#2f303b] text-white border-none shadow-lg rounded-lg p-2">
      <span className="text-xs md:text-sm">{label}</span>
    </HoverCardContent>
  </HoverCard>
);

export default ProfileInfo;

