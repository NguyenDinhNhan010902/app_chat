import { create } from 'zustand';
import { User } from '@/types';
import { MOCK_USERS } from '@/lib/mock-data';

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string) => Promise<void>;
    register: (username: string, email: string) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    login: async (email) => {
        set({ isLoading: true });
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock login logic - find user by email or default to 'me'
        const user = MOCK_USERS.find(u => u.email === email) || MOCK_USERS.find(u => u.id === 'me')!;

        set({ user, isAuthenticated: true, isLoading: false });
    },
    register: async (username, email) => {
        set({ isLoading: true });
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newUser: User = {
            id: `u${Date.now()}`,
            username,
            email,
            avatar: `https://i.pravatar.cc/150?u=${username}`,
            status: 'online',
        };

        set({ user: newUser, isAuthenticated: true, isLoading: false });
    },
    logout: () => set({ user: null, isAuthenticated: false }),
}));
