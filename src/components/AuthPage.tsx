
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

  const handleTabSwitch = (tab: "signin" | "signup") => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden relative min-h-[600px] max-h-[90vh]">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Left Side - Authentication Form */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12 bg-white relative z-10">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {activeTab === "signin" ? "Welcome back!" : "Create account"}
                </h1>
                <p className="text-gray-600">
                  {activeTab === "signin" 
                    ? "Sign in to your account to continue" 
                    : "Join us and start your journey"}
                </p>
              </div>

              {/* Enhanced Tab Navigation */}
              <div className="relative mb-8 bg-gray-50 rounded-2xl p-1 shadow-inner">
                <div 
                  className={`absolute top-1 h-[calc(100%-8px)] bg-white rounded-xl shadow-lg transition-all duration-500 ease-out ${
                    activeTab === "signin" ? "left-1 w-[calc(50%-4px)]" : "left-[calc(50%+4px-1px)] w-[calc(50%-4px)]"
                  }`}
                />
                <div className="relative flex">
                  <button
                    onClick={() => handleTabSwitch("signin")}
                    className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signin"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleTabSwitch("signup")}
                    className={`flex-1 py-4 px-6 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                      activeTab === "signup"
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Enhanced Google Sign In Button */}
              <Button
                onClick={handleGoogleLogin}
                variant="outline"
                className="w-full mb-6 py-4 h-14 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-6 h-6 mr-3 relative z-10" viewBox="0 0 24 24">
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
                <span className="font-semibold relative z-10">Continue with Google</span>
              </Button>

              {/* Premium Divider */}
              <div className="relative flex items-center mb-6">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300"></div>
                <div className="relative px-6">
                  <div className="bg-white px-4 py-2 rounded-full border-2 border-gray-100 shadow-sm">
                    <span className="text-xs font-bold text-gray-500 tracking-wide">
                      OR CONTINUE WITH EMAIL
                    </span>
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300"></div>
              </div>

              {/* Enhanced Form */}
              <div className="relative overflow-hidden">
                <div 
                  className={`transition-all duration-700 ease-out ${
                    activeTab === "signin" ? "transform translate-x-0 opacity-100" : "transform -translate-x-full opacity-0 absolute inset-0"
                  }`}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signin-email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signin-email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signin-password" className="text-sm font-semibold text-gray-700">
                        Password
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signin-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="h-12 pr-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="text-right">
                      <button
                        type="button"
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-semibold hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Sign In</span>
                    </Button>
                  </form>
                </div>

                <div 
                  className={`transition-all duration-700 ease-out ${
                    activeTab === "signup" ? "transform translate-x-0 opacity-100" : "transform translate-x-full opacity-0 absolute inset-0"
                  }`}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="signup-name" className="text-sm font-semibold text-gray-700">
                        Full Name
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signup-name"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="h-12 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-email" className="text-sm font-semibold text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signup-email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-password" className="text-sm font-semibold text-gray-700">
                        Password
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signup-password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="h-12 pr-12 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="signup-confirm-password" className="text-sm font-semibold text-gray-700">
                        Confirm Password
                      </Label>
                      <div className="relative group">
                        <Input
                          id="signup-confirm-password"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                          className="h-12 pr-12 border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 rounded-xl transition-all duration-300 hover:border-gray-300 group-hover:shadow-md bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-all duration-200 hover:scale-110"
                        >
                          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 hover:from-purple-700 hover:via-pink-700 hover:to-red-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10">Create Account</span>
                    </Button>
                  </form>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600">
                  {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={() => handleTabSwitch(activeTab === "signin" ? "signup" : "signin")}
                    className="text-blue-600 hover:text-blue-800 font-semibold transition-colors hover:underline"
                  >
                    {activeTab === "signin" ? "Sign up here" : "Sign in here"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Different Images for Sign In/Sign Up */}
          <div className="lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex items-center justify-center p-8 lg:p-12 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-xl animate-pulse shadow-lg"></div>
              <div className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-br from-purple-300/40 to-pink-300/40 rounded-full blur-lg animate-pulse delay-1000 shadow-md"></div>
              <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-br from-indigo-300/30 to-blue-300/30 rounded-full blur-xl animate-pulse delay-500 shadow-lg"></div>
              <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-pink-300/40 to-red-300/40 rounded-full blur-lg animate-pulse delay-700 shadow-md"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-lg">
              {/* Sign In Content */}
              <div className={`transition-all duration-700 ease-out ${
                activeTab === "signin" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8 absolute inset-0"
              }`}>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
                    alt="Productive workspace"
                    className="w-80 h-60 mx-auto mb-6 rounded-3xl shadow-2xl object-cover"
                  />
                </div>
                
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Welcome Back!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Continue your productivity journey with our advanced tools and seamless workflow management.
                </p>
                
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-200">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700 font-medium">Secure Login</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm text-gray-700 font-medium">Quick Access</span>
                  </div>
                </div>
              </div>

              {/* Sign Up Content */}
              <div className={`transition-all duration-700 ease-out ${
                activeTab === "signup" ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8 absolute inset-0"
              }`}>
                <div className="mb-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
                    alt="Team collaboration"
                    className="w-80 h-60 mx-auto mb-6 rounded-3xl shadow-2xl object-cover"
                  />
                </div>
                
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                  Join Our Community
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Start your journey with thousands of users who trust our platform for their productivity needs.
                </p>
                
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-200">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-700 font-medium">Free Forever</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:scale-105 transition-transform duration-200">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
                    <span className="text-sm text-gray-700 font-medium">Easy Setup</span>
                  </div>
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
