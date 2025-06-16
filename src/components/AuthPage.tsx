
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
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Authentication Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-12 bg-white">
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

          {/* Tab Navigation */}
          <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setActiveTab("signin")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "signin"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === "signup"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Google Sign In Button */}
          <Button
            onClick={handleGoogleLogin}
            variant="outline"
            className="w-full mb-6 py-3 h-12 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
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
            Continue with Google
          </Button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-gray-500 bg-white font-medium">OR CONTINUE WITH EMAIL</span>
            <Separator className="flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {activeTab === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="h-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className="h-12 pr-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {activeTab === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                  Confirm Password
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="h-12 pr-12 border-2 border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-xl"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
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
                  className="text-sm text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] rounded-xl"
            >
              {activeTab === "signin" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              {activeTab === "signin" ? "Don't have an account? " : "Already have an account? "}
              <button
                onClick={() => setActiveTab(activeTab === "signin" ? "signup" : "signin")}
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              >
                {activeTab === "signin" ? "Sign up here" : "Sign in here"}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Background Illustration */}
      <div className="lg:w-1/2 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100 flex items-center justify-center p-6 lg:p-12 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-16 w-24 h-24 bg-purple-200/40 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-blue-200/30 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-yellow-200/40 rounded-full blur-lg animate-pulse delay-700"></div>
          <div className="absolute top-60 left-1/2 w-20 h-20 bg-green-200/30 rounded-full blur-md animate-pulse delay-300"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-lg">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-lg">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Join the Future of Productivity
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover tools designed for the next generation. Streamline your workflow, collaborate seamlessly, and achieve more than ever before.
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700 font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-700 font-medium">Always Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
