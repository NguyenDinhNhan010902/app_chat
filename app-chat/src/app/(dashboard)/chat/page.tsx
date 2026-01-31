import { MessageSquare } from 'lucide-react';

export default function ChatPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-slate-950">
            <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/10 animate-in zoom-in duration-500">
                <MessageSquare className="w-10 h-10 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Select a conversation</h1>
            <p className="text-slate-400 max-w-sm">
                Choose a person from the left sidebar to start chatting or start a new conversation.
            </p>
        </div>
    );
}
