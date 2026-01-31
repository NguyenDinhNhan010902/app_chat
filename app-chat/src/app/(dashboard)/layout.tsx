import { Sidebar } from '@/components/layout/sidebar';
import { Bot, MessageSquare } from 'lucide-react';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-slate-950 overflow-hidden">
            {/* Navigation Rail (Mini Sidebar) */}
            <div className="w-16 bg-slate-950 border-r border-slate-800 flex flex-col items-center py-4 gap-4 z-20">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                    <span className="text-white font-bold text-xl">✦</span>
                </div>

                <div className="flex-1 flex flex-col gap-2 w-full px-2">
                    <button className="w-10 h-10 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center hover:bg-slate-700 transition-all group relative">
                        <MessageSquare className="w-5 h-5" />
                        <div className="absolute left-10 ml-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">
                            Chats
                        </div>
                    </button>
                    <button className="w-10 h-10 rounded-xl text-slate-500 flex items-center justify-center hover:bg-slate-800 hover:text-slate-300 transition-all group relative">
                        <Bot className="w-5 h-5" />
                    </button>
                </div>

                <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border border-slate-700">
                    <img src="https://i.pravatar.cc/100?u=me" alt="Me" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Main Sidebar (Conversations) */}
            <Sidebar />

            {/* Main Content (Chat Window) */}
            <main className="flex-1 relative">
                {children}
            </main>
        </div>
    );
}
