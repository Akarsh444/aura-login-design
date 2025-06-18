import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState("day");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const quotes = [
    "Even a small step today is progress.",
    "You're safe here.",
    "No pressure. Just presence.",
    "Every conversation matters.",
    "Your feelings are valid.",
    "One breath at a time."
  ];

  // Quote carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Day-night cycle based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) setTimeOfDay("morning");
    else if (hour >= 12 && hour < 18) setTimeOfDay("day");
    else if (hour >= 18 && hour < 21) setTimeOfDay("evening");
    else setTimeOfDay("night");
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { activeTab, formData });
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const getTimeGradient = () => {
    const gradients = {
      morning: "from-orange-200 via-pink-100 to-blue-100 dark:from-orange-900/20 dark:via-pink-900/20 dark:to-blue-900/20",
      day: "from-blue-100 via-cyan-50 to-blue-200 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-blue-900/20",
      evening: "from-purple-200 via-pink-100 to-orange-100 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-orange-900/20",
      night: "from-indigo-300 via-purple-200 to-blue-300 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-blue-900/20"
    };
    return gradients[timeOfDay as keyof typeof gradients];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${getTimeGradient()} py-4 px-4 relative dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}>
      {/* Neon Sci-Fi Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-24 h-24 rounded-full border-2 border-cyan-400 dark:border-cyan-300 neon-glow-cyan"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.8, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/4 right-16 w-32 h-32 rounded-full border-2 border-pink-400 dark:border-pink-300 neon-glow-pink"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.9, 0.4],
          rotate: [360, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full border-2 border-purple-400 dark:border-purple-300 neon-glow-purple"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Pulsating Grid Lines */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="grid-lines-neon"></div>
      </div>

      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg rounded-3xl shadow-2xl relative border border-white/30 dark:border-gray-700/30 mx-auto overflow-hidden"
        style={{ height: "auto", minHeight: "auto" }}
        layout
      >
        <div className="flex">
          {/* Left Side - Authentication Form */}
          <motion.div 
            className="w-full lg:w-2/5 flex p-10 relative z-20"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-full py-6 min-h-[fit-content]">
              {/* Header */}
              <motion.div 
                className="mb-6 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {activeTab === "signin" ? "Welcome back" : "Join SOS"}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {activeTab === "signin" 
                    ? "Your AI assistant is ready to help" 
                    : "Start your wellbeing journey"}
                </p>
              </motion.div>

              {/* Tab Navigation */}
              <motion.div 
                className="relative mb-6 bg-gray-50/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl p-1 border border-gray-200/50 dark:border-gray-600/50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div 
                  className="absolute top-1 bottom-1 bg-white dark:bg-gray-600 rounded-xl shadow-md border border-gray-200/50 dark:border-gray-500/50"
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    left: activeTab === "signin" ? "4px" : "50%",
                    right: activeTab === "signin" ? "50%" : "4px",
                  }}
                />
                <div className="relative flex">
                  <motion.button
                    onClick={() => setActiveTab("signin")}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signin"
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Login
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab("signup")}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signup"
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign Up
                  </motion.button>
                </div>
              </motion.div>

              {/* Social Buttons */}
              <div className="flex space-x-3 mb-5">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Button
                    onClick={handleGoogleLogin}
                    variant="outline"
                    className="w-full h-11 border-2 border-gray-200/60 dark:border-gray-600/60 hover:border-blue-300 dark:hover:border-blue-400 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transition-all duration-300 hover:shadow-md group relative overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg className="w-5 h-5 mr-2 relative z-10" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="relative z-10 font-medium dark:text-gray-200">Google</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full h-11 border-2 border-gray-200/60 dark:border-gray-600/60 hover:border-blue-400 dark:hover:border-blue-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-md rounded-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="font-medium dark:text-gray-200">Facebook</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full h-11 border-2 border-gray-200/60 dark:border-gray-600/60 hover:border-gray-400 dark:hover:border-gray-300 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-600/20 transition-all duration-300 hover:shadow-md rounded-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="#000" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="font-medium dark:text-gray-200">Apple</span>
                  </Button>
                </motion.div>
              </div>

              {/* Divider */}
              <motion.div 
                className="relative my-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white dark:bg-gray-800 px-4 text-sm text-gray-500 dark:text-gray-400">
                    Or Continue With
                  </div>
                </div>
              </motion.div>

              {/* Form Container */}
              <div className="space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    layout
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {activeTab === "signup" && (
                        <motion.div 
                          className=""
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          layout
                        >
                          <Label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name
                          </Label>
                          <motion.div
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          >
                            <Input
                              id="name"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.name}
                              onChange={(e) => handleInputChange("name", e.target.value)}
                              className="h-11 border-2 border-gray-200/60 dark:border-gray-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100/50 dark:focus:ring-blue-900/50 rounded-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm focus:shadow-md bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-700 input-neon-focus placeholder-gray-400 dark:placeholder-gray-500"
                              required
                            />
                          </motion.div>
                        </motion.div>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Input
                            id="email"
                            type="email"
                            placeholder="daniel2018dev@gmail.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="h-11 border-2 border-gray-200/60 dark:border-gray-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100/50 dark:focus:ring-blue-900/50 rounded-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm focus:shadow-md bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-700 input-neon-focus placeholder-gray-400 dark:placeholder-gray-500"
                            required
                          />
                        </motion.div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Password
                        </Label>
                        <motion.div 
                          className="relative"
                          whileFocus={{ scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="h-11 pr-12 border-2 border-gray-200/60 dark:border-gray-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100/50 dark:focus:ring-blue-900/50 rounded-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm focus:shadow-md bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-700 input-neon-focus placeholder-gray-400 dark:placeholder-gray-500"
                            required
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                            initial={{ y: "-50%" }}
                            whileHover={{ scale: 1.1, y: 'calc(-50% + 2px)' }}
                            whileTap={{ scale: 0.9 }}
                            animate={{ y: "-50%" }}
                            transition={{ y: { duration: 0.2, ease: "easeInOut" } }}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </motion.button>
                        </motion.div>
                      </div>

                      {activeTab === "signup" && (
                        <motion.div 
                          className=""
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          layout
                        >
                          <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Confirm Password
                          </Label>
                          <motion.div 
                            className="relative"
                            whileFocus={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                          >
                            <Input
                              id="confirmPassword"
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="••••••••"
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                              className="h-11 pr-12 border-2 border-gray-200/60 dark:border-gray-600/60 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-100/50 dark:focus:ring-blue-900/50 rounded-xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm focus:shadow-md bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm focus:bg-white dark:focus:bg-gray-700 input-neon-focus placeholder-gray-400 dark:placeholder-gray-500"
                              required
                            />
                            <motion.button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="absolute right-3 top-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                              initial={{ y: "-50%" }}
                              whileHover={{ scale: 1.1, y: 'calc(-50% + 2px)' }}
                              whileTap={{ scale: 0.9 }}
                              animate={{ y: "-50%" }}
                              transition={{ y: { duration: 0.2, ease: "easeInOut" } }}
                            >
                              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      )}

                      {activeTab === "signin" && (
                        <div className="text-right">
                          <motion.button
                            type="button"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors hover:underline"
                            whileHover={{ scale: 1.05 }}
                          >
                            Forgot Password?
                          </motion.button>
                        </div>
                      )}

                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="pt-2"
                      >
                        <Button
                          type="submit"
                          className="w-full h-11 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 dark:from-red-600 dark:to-pink-600 dark:hover:from-red-700 dark:hover:to-pink-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl relative overflow-hidden group neon-button-glow"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 dark:from-red-700 dark:to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <span className="relative z-10">
                            {activeTab === "signin" ? "Log In" : "Create Account"}
                          </span>
                        </Button>
                      </motion.div>
                    </form>

                    {/* Footer */}
                    <motion.div 
                      className="text-center pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
                        <motion.button
                          onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors hover:underline"
                          whileHover={{ scale: 1.05 }}
                        >
                          {activeTab === "signin" ? "Sign Up here" : "Log In here"}
                        </motion.button>
                      </p>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Character Illustration */}
          <motion.div 
            className={`hidden lg:flex lg:w-3/5 bg-gradient-to-br ${getTimeGradient()} items-center justify-center p-8 relative overflow-hidden dark:bg-gradient-to-br dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Neon Floating Elements */}
            <motion.div
              className="absolute top-16 left-16 w-20 h-20 rounded-full border-2 border-cyan-300 dark:border-cyan-400 neon-glow-cyan-light"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 right-12 w-16 h-16 rounded-full border-2 border-pink-300 dark:border-pink-400 neon-glow-pink-light"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/3 right-24 w-12 h-12 rounded-full border-2 border-purple-300 dark:border-purple-400 neon-glow-purple-light"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Character Illustration */}
            <motion.div 
              className="relative text-center max-w-lg z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Character Card */}
              <div className="relative mx-auto mb-8">
                <motion.div 
                  className="w-80 h-80 mx-auto bg-gradient-to-br from-white/20 to-white/10 dark:from-gray-800/20 dark:to-gray-700/10 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-sm border border-white/20 dark:border-gray-600/20 neon-card-glow"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-300/30 dark:from-blue-400/30 dark:to-purple-400/30 rounded-3xl blur-xl opacity-60 animate-pulse scale-110"></div>
                  
                  {/* Character - Similar to reference */}
                  <div className="relative z-10 flex flex-col items-center">
                    {/* Head with Headphones */}
                    <motion.div 
                      className="relative mb-6"
                      animate={{ rotate: [0, 3, -3, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Head */}
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-300 to-yellow-400 dark:from-orange-400 dark:to-yellow-500 rounded-full relative">
                        {/* Headphones */}
                        <div className="absolute -top-2 -left-2 w-24 h-24 border-4 border-purple-400 dark:border-purple-300 rounded-full bg-purple-200/20 dark:bg-purple-300/20"></div>
                        <div className="absolute top-2 left-2 w-4 h-4 bg-purple-400 dark:bg-purple-300 rounded-full"></div>
                        <div className="absolute top-2 right-2 w-4 h-4 bg-purple-400 dark:bg-purple-300 rounded-full"></div>
                        
                        {/* Eyes with blink */}
                        <motion.div 
                          className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2"
                          animate={{ scaleY: [1, 0.1, 1] }}
                          transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </motion.div>
                        
                        {/* Smile */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-white rounded-full"></div>
                      </div>
                    </motion.div>
                    
                    {/* Body/Device */}
                    <motion.div 
                      className="w-32 h-40 bg-gradient-to-br from-pink-200 to-purple-300 dark:from-pink-300 dark:to-purple-400 rounded-2xl relative shadow-lg neon-device-glow"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(147, 51, 234, 0.3)",
                          "0 0 30px rgba(147, 51, 234, 0.4)",
                          "0 0 20px rgba(147, 51, 234, 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Arms */}
                      <div className="absolute -left-6 top-4 w-12 h-8 bg-gradient-to-br from-orange-300 to-yellow-400 dark:from-orange-400 dark:to-yellow-500 rounded-full transform -rotate-12"></div>
                      <div className="absolute -right-6 top-4 w-12 h-8 bg-gradient-to-br from-orange-300 to-yellow-400 dark:from-orange-400 dark:to-yellow-500 rounded-full transform rotate-12"></div>
                      
                      {/* Screen with chat interface */}
                      <div className="absolute top-4 left-4 right-4 bottom-8 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-200 dark:to-indigo-200 rounded-lg opacity-90 p-2">
                        {/* Chat messages */}
                        <div className="space-y-2">
                          <motion.div 
                            className="h-2 bg-blue-400 dark:bg-blue-500 rounded-full w-3/4"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div 
                            className="h-2 bg-gray-300 dark:bg-gray-400 rounded-full w-1/2 ml-auto"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                          />
                          <motion.div 
                            className="h-2 bg-blue-400 dark:bg-blue-500 rounded-full w-2/3"
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          />
                        </div>
                      </div>
                      
                      {/* Papers floating */}
                      <motion.div 
                        className="absolute -top-8 -right-4 w-8 h-10 bg-white dark:bg-gray-200 rounded-sm shadow-lg transform rotate-12"
                        animate={{ y: [0, -5, 0], rotate: [12, 15, 12] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <div className="w-full h-1 bg-gray-200 dark:bg-gray-300 mt-1"></div>
                        <div className="w-2/3 h-1 bg-gray-200 dark:bg-gray-300 mt-1"></div>
                        <div className="w-full h-1 bg-gray-200 dark:bg-gray-300 mt-1"></div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Floating hand gesture */}
                    <motion.div 
                      className="absolute -bottom-4 -right-8 w-16 h-16 bg-gradient-to-br from-orange-300 to-yellow-400 dark:from-orange-400 dark:to-yellow-500 rounded-full flex items-center justify-center"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="text-2xl">👋</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Welcome Text */}
              <motion.h2 
                className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {activeTab === "signin" ? "Welcome Back" : "Your Safe Space Awaits"}
              </motion.h2>
              
              {/* Quote Carousel */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentQuote}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed italic font-medium max-w-md mx-auto"
                >
                  "{quotes[currentQuote]}"
                </motion.p>
              </AnimatePresence>
              
              {/* Feature Badges */}
              <motion.div 
                className="flex justify-center space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div 
                  className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30 dark:border-gray-600/30 neon-badge"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Always Safe</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30 dark:border-gray-600/30 neon-badge"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">24/7 Support</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
