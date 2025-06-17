
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl max-h-[90vh] bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden relative border border-white/20">
        <div className="flex h-full min-h-[600px] max-h-[90vh]">
          {/* Left Side - Authentication Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-12 relative z-20">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 transition-all duration-300">
                  {activeTab === "signin" ? "Welcome back" : "Join SOS"}
                </h1>
                <p className="text-gray-600">
                  {activeTab === "signin" 
                    ? "Your AI assistant is ready to help" 
                    : "Start your productivity journey"}
                </p>
              </div>

              {/* Premium Tab Navigation */}
              <div className="relative mb-8 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-200/50">
                <div 
                  className={`absolute top-1.5 bottom-1.5 bg-white rounded-xl shadow-lg transition-all duration-500 ease-out border border-gray-200/50 ${
                    activeTab === "signin" ? "left-1.5 right-1/2 mr-0.5" : "right-1.5 left-1/2 ml-0.5"
                  }`}
                />
                <div className="relative flex">
                  <button
                    onClick={() => setActiveTab("signin")}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signin"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setActiveTab("signup")}
                    className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signup"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Premium Google Button */}
              <Button
                onClick={handleGoogleLogin}
                variant="outline"
                className="w-full mb-6 py-4 h-14 border-2 border-gray-200/60 hover:border-blue-300 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
              >
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

              {/* Premium Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-6 py-2 rounded-full border border-gray-200/50 backdrop-blur-sm">
                    <span className="text-xs font-medium text-gray-500 tracking-wider uppercase">
                      Or continue with email
                    </span>
                  </div>
                </div>
              </div>

              {/* Premium Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {activeTab === "signup" && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="h-14 border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium"
                      required
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="h-14 border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="h-14 pr-14 border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1 rounded-lg hover:bg-gray-100"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {activeTab === "signup" && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="h-14 pr-14 border-2 border-gray-200/60 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 hover:shadow-md focus:shadow-lg bg-white/80 backdrop-blur-sm font-medium"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110 p-1 rounded-lg hover:bg-gray-100"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "signin" && (
                  <div className="text-right">
                    <button
                      type="button"
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">
                    {activeTab === "signin" ? "Sign In" : "Create Account"}
                  </span>
                </Button>
              </form>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
                  >
                    {activeTab === "signin" ? "Sign up here" : "Sign in here"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Premium Chatbot Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 items-center justify-center p-12 relative overflow-hidden">
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse"></div>
              <div className="absolute top-40 right-16 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse delay-500"></div>
              <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-blue-500/50 rounded-full animate-pulse delay-700"></div>
              <div className="absolute top-60 left-1/2 w-2 h-2 bg-indigo-300/40 rounded-full animate-pulse delay-300"></div>
            </div>

            {/* Overlapping Chatbot Illustration */}
            <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 z-10">
              <div className="relative">
                {/* Main Chatbot Container */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse scale-110"></div>
                  
                  {/* Inner Circle */}
                  <div className="w-64 h-64 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg relative z-10 border border-white/20">
                    {/* Modern Chatbot Character */}
                    <div className="text-center relative">
                      {/* Bot Head */}
                      <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg relative overflow-hidden">
                        {/* Digital Eyes */}
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-white rounded-sm animate-pulse"></div>
                          <div className="w-3 h-3 bg-white rounded-sm animate-pulse delay-200"></div>
                        </div>
                        {/* Signal Lines */}
                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex space-x-0.5">
                          <div className="w-0.5 h-2 bg-white/80 rounded-full animate-bounce"></div>
                          <div className="w-0.5 h-3 bg-white/60 rounded-full animate-bounce delay-150"></div>
                          <div className="w-0.5 h-2 bg-white/80 rounded-full animate-bounce delay-300"></div>
                        </div>
                      </div>
                      
                      {/* Digital Elements */}
                      <div className="absolute -top-2 -right-4 w-8 h-8 border-2 border-blue-400 rounded-lg rotate-12 animate-spin" style={{ animationDuration: '8s' }}></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full animate-bounce delay-500"></div>
                      
                      {/* Text */}
                      <div className="text-sm font-bold text-gray-700">SOS Assistant</div>
                      <div className="text-xs text-gray-500 mt-1">AI-Powered Help</div>
                    </div>
                  </div>
                </div>

                {/* Overlap Glow Effect */}
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-r from-transparent via-white/20 to-white/40 blur-md"></div>
                <div className="absolute right-0 top-1/4 w-24 h-1/2 bg-gradient-to-r from-transparent to-white/30 rounded-l-full"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-lg ml-16">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <svg className="w-10 h-10 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {activeTab === "signin" ? "Welcome Back" : "Meet Your AI Assistant"}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {activeTab === "signin" 
                  ? "Your productivity companion is ready to boost your workflow and solve problems instantly."
                  : "Join thousands who've transformed their productivity with AI-powered assistance and smart automation."
                }
              </p>
              
              <div className="flex justify-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">Always Secure</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                  <span className="text-sm text-gray-700 font-medium">Lightning Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
