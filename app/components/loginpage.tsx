"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Origami } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Brand Section */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl mb-4 group transition-transform hover:scale-105 duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30">
              <Origami className="size-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Engineering <span className="text-orange-500">Job Order</span></h1>
          <p className="text-slate-400 font-medium">Please sign in to continue</p>
        </div>

        {/* Login Form Card */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 hover:border-white/20">
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300 text-sm font-semibold ml-1">Email Address</Label>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                    <Mail className="size-full" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 pl-11 bg-slate-900/40 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-orange-500/50 focus:ring-orange-500/20 rounded-xl transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" className="text-slate-300 text-sm font-semibold">Password</Label>
                </div>
                <div className="relative group">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500 group-focus-within:text-orange-500 transition-colors duration-300">
                    <Lock className="size-full" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 pl-11 pr-11 bg-slate-900/40 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-orange-500/50 focus:ring-orange-500/20 rounded-xl transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors duration-300 p-1 rounded-md"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </div>

              {/* Options Row */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-slate-700 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                  />
                  <label
                    htmlFor="remember"
                    className="text-xs text-slate-400 font-medium cursor-pointer select-none"
                  >
                    Keep me signed in
                  </label>
                </div>
                <button
                  type="button"
                  className="text-xs text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full h-12 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
                size="lg"
              >
                Sign In to Dashboard
              </Button>
            </form>
          </div>
          
          {/* Footer Bar */}
          <div className="px-8 py-4 bg-white/5 border-t border-white/5 text-center">
            <p className="text-sm text-slate-400">
              Don't have an account?{" "}
              <button className="text-orange-500 hover:text-orange-400 font-bold transition-colors">
                Contact Admin
              </button>
            </p>
          </div>
        </div>

        {/* System Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            SYSTEM SECURE & OPERATIONAL v2.5.0
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;