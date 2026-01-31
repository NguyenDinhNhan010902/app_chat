'use client';

import { useChatStore } from '@/store/useChatStore';
import { useAuthStore } from '@/store/useAuthStore';
import { Conversation, Message } from '@/types';
import { MessageBubble } from './message-bubble';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Phone, Video, Info, Send, Plus, Smile, Mic } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function ChatWindow({ conversationId }: { conversationId: string }) {
    const { messages: allMessages, conversations, sendMessage, activeConversationId } = useChatStore();
    const { user: currentUser } = useAuthStore();
    const [inputText, setInputText] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    const conversation = conversations.find(c => c.id === conversationId);
    const messages = allMessages[conversationId] || [];

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!inputText.trim()) return;
        sendMessage(inputText, currentUser?.id || 'me');
        setInputText('');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!conversation) return <div className="flex-1 flex items-center justify-center text-slate-500">Conversation not found</div>;

    return (
        <div className="flex flex-col h-full bg-slate-950">
            {/* Chat Header */}
            <div className="h-16 px-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
                <div className="flex items-center gap-3">
                    <Avatar user={conversation.user} showStatus />
                    <div>
                        <h2 className="text-white font-semibold text-sm">{conversation.user?.username}</h2>
                        <p className="text-xs text-slate-400">{conversation.user?.status === 'online' ? 'Online' : 'Last seen recently'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-slate-400">
                    <button className="hover:text-white transition-colors"><Phone className="w-5 h-5" /></button>
                    <button className="hover:text-white transition-colors"><Video className="w-5 h-5" /></button>
                    <button className="hover:text-white transition-colors"><Info className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Messages Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 custom-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                <div className="flex flex-col justify-end min-h-full">
                    {/* Timestamp Divider for demo */}
                    <div className="flex justify-center mb-6">
                        <span className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full">Today</span>
                    </div>

                    {messages.map((msg, index) => {
                        const isMe = msg.senderId === (currentUser?.id || 'me');
                        const prevMsg = messages[index - 1];
                        const showAvatar = !isMe && (!prevMsg || prevMsg.senderId !== msg.senderId);

                        return (
                            <MessageBubble
                                key={msg.id}
                                message={msg}
                                isMe={isMe}
                                showAvatar={showAvatar}
                                senderName={conversation.user?.username}
                                senderAvatar={conversation.user?.avatar}
                            />
                        );
                    })}
                </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="max-w-4xl mx-auto flex items-end gap-2 bg-slate-800/50 p-2 rounded-2xl border border-slate-700/50 focus-within:border-blue-500/50 focus-within:bg-slate-800 transition-all">
                    <button className="p-2 text-slate-400 hover:text-white transition-colors self-center">
                        <Plus className="w-5 h-5" />
                    </button>

                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:ring-0 text-slate-200 placeholder:text-slate-500 resize-none py-3 max-h-32 min-h-[44px] text-sm custom-scrollbar"
                        rows={1}
                    />

                    <div className="flex items-center gap-1 self-center pb-1">
                        <button className="p-2 text-slate-400 hover:text-white transition-colors">
                            <Smile className="w-5 h-5" />
                        </button>
                        {inputText.trim() ? (
                            <button
                                onClick={handleSend}
                                className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all animate-in zoom-in duration-200"
                            >
                                <Send className="w-4 h-4 ml-0.5" />
                            </button>
                        ) : (
                            <button className="p-2 text-slate-400 hover:text-white transition-colors">
                                <Mic className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
