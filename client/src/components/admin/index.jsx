import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Lock,
  Mail,
  AlertCircle,
  User,
  ShieldCheck,
  ArrowUpRightFromCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { GET_ADMIN_INFO } from "@/utils/constants";
import { apiClient } from "@/lib/api-client";
import { useAppStore } from "@/store";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { userInfo, setUserInfo, setAdminInfo } = useAppStore();

  // const handleSubmit =async (e) => {
  //   e.preventDefault()
  //   if (!email || !password) {
  //     toast.error('Please fill in all fields')
  //     setError('Please fill in all fields')
  //   } else {
  //     setError('')
  //     const adminResponse = await apiClient.get(GET_ADMIN_INFO, {
  //                 withCredentials: true,
  //               });
  //               if (adminResponse.status === 200 && adminResponse.data.admin) {
  //                 setAdminInfo(adminResponse.data.admin);
  //                 setUserInfo(undefined);
  //               } else {
  //                 setUserInfo(undefined);
  //                 setAdminInfo(undefined);
  //               }
  //     // axios.post('/api/admin/login', { email, password })
  //     console.log('Login attempted with:', { email, password })
  //   }
  // }
  const validateLogin = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }
    return true;
  };
  const handleSubmit = async () => {
    if (validateLogin()) {
      try {
        const response = await apiClient.post("/api/admin/login", {
          email,
          password,
        });
        if (response.status === 200) {
          setAdminInfo(response.data.admin);
          setUserInfo(undefined);
          navigate("/admin-dashboard");
        }
        
      } catch (err) {
        toast.error(err.response?.data || err.message || "An error occurred");
      }
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="overflow-hidden bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-2xl">
          <CardHeader className="p-6 bg-gradient-to-br from-indigo-500 to-purple-600">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mx-auto w-fit bg-white bg-opacity-20 rounded-full p-3 mb-4"
            >
              <ShieldCheck className="h-10 w-10 text-white" />
            </motion.div>
            <CardTitle className="text-3xl font-bold text-center text-white mb-2">
              Admin Login
            </CardTitle>
            <p className="text-center text-indigo-100 text-sm">
              Enter your credentials to access the admin panel
            </p>
          </CardHeader>
          <CardContent className="space-y-4 p-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-indigo-100"
              >
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-indigo-300" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  className="pl-10 bg-white bg-opacity-20 border-indigo-300 border-opacity-50 text-white placeholder-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-indigo-100"
              >
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-indigo-300" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="pl-10 bg-white bg-opacity-20 border-indigo-300 border-opacity-50 text-white placeholder-indigo-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col p-6">
            <Button
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-2 mt-4 text-pink-300 text-sm"
              >
                <AlertCircle className="h-4 w-4" />
                <span>{error}</span>
              </motion.div>
            )}
          </CardFooter>
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4"
      >
        <Button
          variant="outline"
          className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg text-white border-white border-opacity-20 hover:bg-white hover:bg-opacity-30 transition-all duration-300"
          onClick={() => navigate("/auth")}
        >
          Login as User <ArrowUpRightFromCircle className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>
      <div className="absolute bottom-4 left-4 right-4 text-center text-indigo-200 text-sm">
        © 2024 CLAIR. All rights reserved.
      </div>
    </div>
  );
}
