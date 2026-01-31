'use client';

import { useChatStore } from '@/store/useChatStore';
import { useAuthStore } from '@/store/useAuthStore';
import { Avatar } from '@/components/ui/avatar';
import { cn, formatTime } from '@/lib/utils';
import { Search, LogOut, Settings, Edit, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export function Sidebar() {
    const router = useRouter();
    const { user, logout } = useAuthStore();
    const { conversations, activeConversationId, setActiveConversation, loadConversations } = useChatStore();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        loadConversations();
    }, [loadConversations]);

    const filteredConversations = conversations.filter(c =>
        c.user?.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.lastMessage?.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className="flex flex-col h-full w-80 bg-slate-900 border-r border-slate-800">
            {/* Header */}
            <div className="p-4 flex items-center justify-between">
                <h1 className="text-xl font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">✦</span>
                    </div>
                    Nexus
                </h1>
                <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    <Edit className="w-5 h-5" />
                </button>
            </div>

            {/* Search */}
            <div className="px-4 pb-4">
                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full h-10 pl-9 pr-4 bg-slate-800 text-slate-200 placeholder:text-slate-500 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-slate-700"
                    />
                </div>

                {/* Filters */}
                <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
                    {['All', 'Unread', 'Personal', 'Work'].map((filter, i) => (
                        <button
                            key={filter}
                            className={cn(
                                "px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-colors",
                                i === 0 ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto px-2 space-y-1 custom-scrollbar">
                {filteredConversations.map((conversation) => {
                    const isActive = conversation.id === activeConversationId;
                    return (
                        <Link
                            key={conversation.id}
                            href={`/chat/${conversation.id}`}
                            onClick={() => setActiveConversation(conversation.id)}
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 cursor-pointer group",
                                isActive
                                    ? "bg-blue-600/10 border border-blue-600/20"
                                    : "hover:bg-slate-800/50 border border-transparent"
                            )}
                        >
                            <Avatar user={conversation.user} showStatus size="md" />

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className={cn("text-sm font-semibold truncate", isActive ? "text-blue-400" : "text-slate-200 group-hover:text-white")}>
                                        {conversation.user?.username}
                                    </h3>
                                    {conversation.lastMessage && (
                                        <span className={cn("text-xs", isActive ? "text-blue-300/70" : "text-slate-500")}>
                                            {formatTime(conversation.lastMessage.createdAt)}
                                        </span>
                                    )}
                                </div>
                                <p className={cn("text-xs truncate", isActive ? "text-blue-200/70" : "text-slate-400 group-hover:text-slate-300")}>
                                    {conversation.lastMessage?.content || 'No messages yet'}
                                </p>
                            </div>

                            {conversation.unreadCount > 0 && (
                                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-[10px] font-bold text-white">{conversation.unreadCount}</span>
                                </div>
                            )}
                        </Link>
                    );
                })}
            </div>

            {/* User Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 mt-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar user={user} size="sm" showStatus />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-white">{user?.username || 'Guest'}</span>
                            <span className="text-xs text-slate-500">Online</span>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                            <Settings className="w-4 h-4" />
                        </button>
                        <button onClick={handleLogout} className="p-2 text-slate-400 hover:text-red-400 hover:bg-slate-800 rounded-lg transition-colors">
                            <LogOut className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition-colors">
                    <Plus className="w-4 h-4" />
                    New Message
                </button>
            </div>
        </div>
    );
}
