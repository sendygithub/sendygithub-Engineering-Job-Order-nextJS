"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Settings, CircuitBoard, Cpu } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";

export function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
    // Handle login logic here
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Technical Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1764737734436-7eb904d3a4ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMHRlY2huaWNhbHxlbnwxfHx8fDE3NjcyMDExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')` 
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Animated Technical Elements */}
      <div className="absolute top-20 left-10 text-orange-500 opacity-20 animate-spin-slow">
        <Settings className="size-24" />
      </div>
      <div className="absolute bottom-20 right-10 text-cyan-500 opacity-20 animate-spin-reverse">
        <Settings className="size-32" />
      </div>
      <div className="absolute top-1/2 right-1/4 text-blue-500 opacity-10">
        <CircuitBoard className="size-40" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo/Brand Section */}
        <div className="text-center mb-8">
          {/* Technical Logo */}
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Cpu className="size-10 text-white relative z-10" />
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-cyan-400"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-cyan-400"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-cyan-400"></div>
          </div>
          <h1 className="text-white mb-2">Engineering Portal</h1>
          <p className="text-slate-400">Secure System Access</p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="text-xs text-orange-500 font-mono">v2.1.4</div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="relative">
          {/* Technical border decoration */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-cyan-500 to-orange-500 rounded-2xl opacity-20 blur-sm"></div>
          
          <div className="relative bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-slate-700 shadow-2xl p-6 space-y-5">
            {/* Header Bar */}
            <div className="flex items-center gap-2 pb-4 border-b border-slate-700">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs font-mono text-slate-500">AUTHENTICATION_SYSTEM</span>
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300 flex items-center gap-2">
                <span className="text-orange-500 font-mono text-xs">[01]</span>
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="engineer@system.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-orange-500"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-300 flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">[02]</span>
                Access Code
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-500" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-slate-900/50 border-slate-600 text-white placeholder:text-slate-500 focus:border-cyan-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="border-slate-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-slate-400 cursor-pointer select-none"
                >
                  Remember Session
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
              >
                Reset_Auth
              </button>
            </div>

            {/* Login Button */}
            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white border-0 shadow-lg shadow-orange-500/20" 
                size="lg"
              >
                <Lock className="size-4" />
                Initialize Access
              </Button>
            </div>

            {/* Status Bar */}
            <div className="pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-slate-500">SYSTEM_ONLINE</span>
                </div>
                <div className="text-slate-600">
                  {new Date().toLocaleTimeString('en-US', { hour12: false })}
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Footer Info */}
        <div className="mt-6 space-y-3">
          <div className="text-center">
            <p className="text-sm text-slate-500 font-mono">
              Need Credentials?{" "}
              <button className="text-orange-400 hover:text-orange-300 transition-colors">
                Request_Access
              </button>
            </p>
          </div>
          
          {/* Technical Footer */}
          <div className="flex items-center justify-center gap-4 text-xs text-slate-600 font-mono">
            <span>IPv4: 192.168.1.1</span>
            <span>•</span>
            <span>PORT: 8443</span>
            <span>•</span>
            <span>SSL: Active</span>
          </div>
        </div>
      </div>

      {/* CSS for grid pattern */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default LoginAdmin;