'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const { login, isLoading } = useAuthStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) return;
        await login(email);
        router.push('/chat');
    };

    return (
        <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4">
                    <span className="text-white text-2xl">✦</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Welcome Back</h1>
                <p className="text-slate-400 mt-2">Sign in to continue to Nexus</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="space-y-2">
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="flex justify-end">
                        <Link href="#" className="text-xs text-blue-500 hover:text-blue-400">
                            Forgot Password?
                        </Link>
                    </div>
                </div>

                <Button type="submit" className="w-full mt-6" isLoading={isLoading}>
                    Sign In
                </Button>
            </form>

            <div className="mt-6 text-center text-sm text-slate-400">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-500 hover:text-blue-400 font-medium">
                    Register for Nexus
                </Link>
            </div>

            <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-900 text-slate-500">OR CONTINUE WITH</span>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors text-slate-300">
                    Google
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors text-slate-300">
                    Apple
                </button>
            </div>
        </div>
    );
}
