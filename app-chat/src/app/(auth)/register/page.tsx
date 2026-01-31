'use client';

import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterPage() {
    const router = useRouter();
    const { register, isLoading } = useAuthStore();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        await register(username, email);
        router.push('/chat');
    };

    return (
        <div className="relative z-10 w-full max-w-md p-8 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl">
            <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 mb-4">
                    <span className="text-white text-2xl">✦</span>
                </div>
                <h1 className="text-2xl font-bold text-white">Example App</h1>
                <p className="text-slate-400 mt-2">Connect with the world in a secure and fast environment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Username"
                    placeholder="johndoe"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                {/* Password Strength Indicator (Mock) */}
                <div className="flex gap-1 h-1 w-full mt-2">
                    <div className="flex-1 bg-blue-600 rounded-full h-full"></div>
                    <div className="flex-1 bg-blue-600 rounded-full h-full"></div>
                    <div className="flex-1 bg-slate-700 rounded-full h-full"></div>
                    <div className="flex-1 bg-slate-700 rounded-full h-full"></div>
                </div>
                <p className="text-xs text-slate-500 mt-1">Password strength: Medium</p>

                <Button type="submit" className="w-full mt-6" isLoading={isLoading}>
                    Create Account
                </Button>
            </form>

            <p className="text-xs text-slate-500 text-center mt-4 px-4 font-light">
                By signing up, you agree to our <span className="text-blue-500">Terms of Service</span> and <span className="text-blue-500">Privacy Policy</span>.
            </p>

            <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-800 pt-6">
                Already have an account?{' '}
                <Link href="/login" className="text-blue-500 hover:text-blue-400 font-medium">
                    Login
                </Link>
            </div>
        </div>
    );
}
