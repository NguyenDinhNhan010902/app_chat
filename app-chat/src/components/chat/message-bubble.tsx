import { Message } from '@/types';
import { cn, formatTime } from '@/lib/utils';
import { Check, CheckCheck } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

interface MessageBubbleProps {
    message: Message;
    isMe: boolean;
    showAvatar?: boolean;
    senderName?: string;
    senderAvatar?: string;
}

export function MessageBubble({ message, isMe, showAvatar, senderName, senderAvatar }: MessageBubbleProps) {
    return (
        <div className={cn("flex w-full gap-2 mb-4 animate-in slide-in-from-bottom-2 duration-300", isMe ? "justify-end" : "justify-start")}>
            {!isMe && showAvatar && (
                <Avatar src={senderAvatar} alt={senderName} size="sm" className="mt-1 flex-shrink-0" />
            )}
            {!isMe && !showAvatar && <div className="w-8" />} {/* Spacer */}

            <div className={cn(
                "max-w-[70%] sm:max-w-[60%] relative group",
                isMe ? "items-end" : "items-start"
            )}>
                <div className={cn(
                    "px-4 py-2.5 rounded-2xl shadow-sm text-sm leading-relaxed",
                    isMe
                        ? "bg-blue-600 text-white rounded-tr-sm"
                        : "bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700/50"
                )}>
                    {message.content}
                </div>

                <div className={cn("flex items-center gap-1 mt-1 px-1", isMe ? "justify-end" : "justify-start")}>
                    <span className="text-[10px] text-slate-500 font-medium">
                        {formatTime(message.createdAt)}
                    </span>
                    {isMe && (
                        <span className={cn("text-[10px]", message.status === 'read' ? "text-blue-400" : "text-slate-500")}>
                            {message.status === 'read' ? <CheckCheck className="w-3 h-3" /> : <Check className="w-3 h-3" />}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}
