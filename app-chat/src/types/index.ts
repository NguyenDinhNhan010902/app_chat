export interface User {
    id: string;
    username: string;
    email: string;
    avatar: string;
    status: 'online' | 'offline' | 'busy';
}

export interface Message {
    id: string;
    conversationId: string;
    senderId: string;
    content: string;
    createdAt: string; // ISO string for easier serialization
    status: 'sent' | 'delivered' | 'read';
}

export interface Conversation {
    id: string;
    userId: string; // The other user's ID
    user?: User; // Hydrated user object
    lastMessage?: Message;
    unreadCount: number;
}
