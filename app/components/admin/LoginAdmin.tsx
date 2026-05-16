"use client";
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Settings, CircuitBoard, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

export function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password, rememberMe });
  };

  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden flex items-center justify-center p-4 selection:bg-cyan-500/30">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]"></div>
        
        {/* Floating Particles/Glows */}
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-orange-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative w-20 h-20 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center transform rotate-45 group hover:rotate-[225deg] transition-transform duration-700">
              <div className="transform -rotate-45 group-hover:-rotate-[225deg] transition-transform duration-700">
                <Cpu className="size-10 text-cyan-500" />
              </div>
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-500/50"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-500/50"></div>
            </div>
          </div>
          
          <h1 className="text-4xl font-black text-white tracking-tighter mb-2 uppercase italic">
            Admin <span className="text-cyan-500">Portal</span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-slate-800"></div>
            <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">Authorization Required</p>
            <div className="h-px w-8 bg-slate-800"></div>
          </div>
        </div>

        {/* Technical Form Card */}
        <div className="relative group">
          {/* Animated Border Gradient */}
          <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-slate-700 to-orange-500/50 rounded-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative bg-slate-950/80 backdrop-blur-3xl rounded-3xl p-8 border border-white/5 shadow-2xl">
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-500/70 uppercase tracking-tighter">
                <ShieldCheck className="size-3" />
                SSL_ENCRYPTED_SESSION
              </div>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Identity Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <span className="text-cyan-500">01</span> Identification
                </Label>
                <div className="relative group/input">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-600 group-focus-within/input:text-cyan-500 transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="admin@internal.net"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 pl-12 bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-cyan-500/50 focus:ring-0 rounded-xl font-mono text-sm"
                    required
                  />
                </div>
              </div>

              {/* Security Key Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <span className="text-orange-500">02</span> Access Key
                </Label>
                <div className="relative group/input">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-600 group-focus-within/input:text-orange-500 transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-14 pl-12 pr-12 bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-700 focus:border-orange-500/50 focus:ring-0 rounded-xl font-mono text-sm"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                  </button>
                </div>
              </div>

              {/* Remember & Reset */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    className="border-slate-800 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
                  />
                  <label htmlFor="remember" className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter cursor-pointer">
                    Remember Identity
                  </label>
                </div>
                <button type="button" className="text-[10px] text-slate-600 hover:text-orange-500 font-mono uppercase tracking-tighter transition-colors">
                  Recover_Access
                </button>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full h-14 bg-white text-slate-950 hover:bg-cyan-500 hover:text-white font-black uppercase italic tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]" 
                size="lg"
              >
                Execute Initialization
              </Button>
            </form>
          </div>
        </div>

        {/* Technical Footer */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-[10px] font-mono text-slate-600 tracking-[0.2em]">
            <span>NODE_01</span>
            <div className="w-1 h-1 rounded-full bg-slate-800"></div>
            <span>PORT_8080</span>
            <div className="w-1 h-1 rounded-full bg-slate-800"></div>
            <span>AES_256</span>
          </div>
          <p className="text-[9px] text-slate-700 font-mono max-w-[200px] text-center leading-relaxed">
            UNAUTHORIZED ACCESS IS STRICTLY PROHIBITED AND SUBJECT TO SYSTEM LOGGING
          </p>
        </div>
      </div>

      {/* Global CSS Patterns */}
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}

export default LoginAdmin;