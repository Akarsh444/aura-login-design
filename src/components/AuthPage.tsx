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
      morning: "from-orange-200 via-pink-100 to-blue-100",
      day: "from-blue-100 via-cyan-50 to-blue-200",
      evening: "from-purple-200 via-pink-100 to-orange-100",
      night: "from-indigo-300 via-purple-200 to-blue-300"
    };
    return gradients[timeOfDay as keyof typeof gradients];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-8 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-6xl h-[85vh] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden relative border border-white/20"
      >
        <div className="flex h-full flex-col lg:flex-row">
          {/* Left Side - Authentication Form */}
          <motion.div 
            className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative z-20"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-full max-w-md max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <motion.div 
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-300">
                  {activeTab === "signin" ? "Welcome back" : "Join SOS"}
                </h1>
                <p className="text-gray-600">
                  {activeTab === "signin" 
                    ? "Your AI assistant is ready to help" 
                    : "Start your wellbeing journey"}
                </p>
              </motion.div>

              {/* Tab Navigation */}
              <motion.div 
                className="relative mb-8 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200/50"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <motion.div 
                  className="absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-lg border border-gray-200/50"
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{
                    left: activeTab === "signin" ? "6px" : "50%",
                    right: activeTab === "signin" ? "50%" : "6px",
                  }}
                />
                <div className="relative flex">
                  <motion.button
                    onClick={() => setActiveTab("signin")}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signin"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>
                  <motion.button
                    onClick={() => setActiveTab("signup")}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signup"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign Up
                  </motion.button>
                </div>
              </motion.div>

              {/* Google Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    onClick={handleGoogleLogin}
                    variant="outline"
                    className="w-full mb-6 py-4 h-14 border-2 border-gray-200/60 hover:border-blue-300 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
                  >
                    {/* ... keep existing code (Google button content) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <svg className="w-5 h-5 mr-3 relative z-10" viewBox="0 0 24 24">
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
                    <span className="relative z-10 font-medium">Continue with Google</span>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Divider */}
              <motion.div 
                className="relative mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-6 py-2 rounded-full border border-gray-200/50 backdrop-blur-sm shadow-sm">
                    <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">
                      Or continue with email
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {activeTab === "signup" && (
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                          Full Name
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="h-14 border-2 border-gray-200/60 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium focus:bg-white"
                            required
                          />
                        </motion.div>
                      </motion.div>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-14 border-2 border-gray-200/60 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium focus:bg-white"
                          required
                        />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                        Password
                      </Label>
                      <motion.div 
                        className="relative"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="h-14 pr-14 border-2 border-gray-200/60 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium focus:bg-white"
                          required
                        />
                        <motion.button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 p-1 rounded-lg hover:bg-gray-100"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </motion.button>
                      </motion.div>
                    </div>

                    {activeTab === "signup" && (
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                          Confirm Password
                        </Label>
                        <motion.div 
                          className="relative"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="h-14 pr-14 border-2 border-gray-200/60 focus:border-blue-500 focus:ring-4 focus:ring-blue-100/50 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium focus:bg-white"
                            required
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 p-1 rounded-lg hover:bg-gray-100"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}

                    {activeTab === "signin" && (
                      <div className="text-right">
                        <motion.button
                          type="button"
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors hover:underline"
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
                    >
                      <Button
                        type="submit"
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10">
                          {activeTab === "signin" ? "Sign In" : "Create Account"}
                        </span>
                      </Button>
                    </motion.div>
                  </form>
                </motion.div>
              </AnimatePresence>

              {/* Footer */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <p className="text-sm text-gray-600">
                  {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
                  <motion.button
                    onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    {activeTab === "signin" ? "Sign up here" : "Sign in here"}
                  </motion.button>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Ambient Visual Panel */}
          <motion.div 
            className={`hidden lg:flex lg:w-1/2 bg-gradient-to-br ${getTimeGradient()} items-center justify-center p-12 relative overflow-hidden`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Breathing Circles */}
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-32 right-16 w-24 h-24 bg-white/20 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 right-32 w-16 h-16 bg-white/15 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />

            {/* Main Content */}
            <div className="relative text-center max-w-lg z-10">
              {/* Person with Chat App Illustration */}
              <motion.div 
                className="mb-8 relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-white/20 to-white/10 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden backdrop-blur-sm border border-white/20">
                  {/* Soft Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-indigo-300/30 rounded-3xl blur-xl opacity-60 animate-pulse scale-110"></div>
                  
                  {/* Person Illustration */}
                  <div className="relative z-10 text-center">
                    {/* Head */}
                    <motion.div 
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg relative"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Eyes with blink */}
                      <motion.div 
                        className="flex space-x-2"
                        animate={{ scaleY: [1, 0.1, 1] }}
                        transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 4 }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </motion.div>
                    </motion.div>
                    
                    {/* Body/Device */}
                    <motion.div 
                      className="w-20 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg relative shadow-lg"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 30px rgba(99, 102, 241, 0.4)",
                          "0 0 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {/* Screen glow effect */}
                      <div className="absolute inset-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded opacity-80"></div>
                      
                      {/* Chat bubbles */}
                      <div className="absolute top-3 left-2 right-2 space-y-1">
                        <motion.div 
                          className="h-1.5 bg-blue-400 rounded-full w-3/4"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div 
                          className="h-1.5 bg-gray-300 rounded-full w-1/2 ml-auto"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div 
                          className="h-1.5 bg-blue-400 rounded-full w-2/3"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              {/* Welcome Text */}
              <motion.h2 
                className="text-3xl font-bold text-gray-800 mb-4"
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
                  className="text-lg text-gray-700 mb-8 leading-relaxed italic font-medium"
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
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-sm text-gray-700 font-medium">Always Safe</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-blue-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-sm text-gray-700 font-medium">24/7 Support</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
