import { create } from 'zustand';
import { Conversation, Message } from '@/types';
import { MOCK_CONVERSATIONS, MOCK_MESSAGES } from '@/lib/mock-data';

interface ChatState {
    conversations: Conversation[];
    activeConversationId: string | null;
    messages: Record<string, Message[]>; // conversationId -> messages

    setActiveConversation: (id: string) => void;
    sendMessage: (content: string, senderId: string) => void;
    markAsRead: (conversationId: string) => void;

    // Hydrate initial data
    loadConversations: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
    conversations: [],
    activeConversationId: null,
    messages: {},

    loadConversations: () => {
        // Load mock data
        set({
            conversations: MOCK_CONVERSATIONS,
            messages: MOCK_MESSAGES,
        });
    },

    setActiveConversation: (id) => {
        set({ activeConversationId: id });
        get().markAsRead(id);
    },

    sendMessage: (content, senderId) => {
        const { activeConversationId, messages, conversations } = get();
        if (!activeConversationId) return;

        const newMessage: Message = {
            id: `m${Date.now()}`,
            conversationId: activeConversationId,
            senderId,
            content,
            createdAt: new Date().toISOString(),
            status: 'sent',
        };

        // Update messages
        const currentMessages = messages[activeConversationId] || [];
        const updatedMessages = [...currentMessages, newMessage];

        // Update conversation last message and move to top
        const updatedConversations = conversations.map(c => {
            if (c.id === activeConversationId) {
                return { ...c, lastMessage: newMessage };
            }
            return c;
        });

        set({
            messages: { ...messages, [activeConversationId]: updatedMessages },
            conversations: updatedConversations,
        });
    },

    markAsRead: (conversationId) => {
        const { conversations } = get();
        const updatedConversations = conversations.map(c => {
            if (c.id === conversationId) {
                return { ...c, unreadCount: 0 }; // Reset unread count
            }
            return c;
        });
        set({ conversations: updatedConversations });
    },
}));
