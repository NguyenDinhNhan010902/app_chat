import { User, Conversation, Message } from '@/types';

export const MOCK_USERS: User[] = [
    {
        id: 'u1',
        username: 'Alex Rivera',
        email: 'alex@nexus.com',
        avatar: 'https://i.pravatar.cc/150?u=u1',
        status: 'online',
    },
    {
        id: 'u2',
        username: 'Sarah Jenkins',
        email: 'sarah@nexus.com',
        avatar: 'https://i.pravatar.cc/150?u=u2',
        status: 'busy',
    },
    {
        id: 'u3',
        username: 'Marcus Wong',
        email: 'marcus@nexus.com',
        avatar: 'https://i.pravatar.cc/150?u=u3',
        status: 'offline',
    },
    {
        id: 'me',
        username: 'John Doe',
        email: 'john@nexus.com',
        avatar: 'https://i.pravatar.cc/150?u=me',
        status: 'online',
    },
];

export const MOCK_CONVERSATIONS: Conversation[] = [
    {
        id: 'c1',
        userId: 'u1',
        user: MOCK_USERS[0],
        unreadCount: 2,
        lastMessage: {
            id: 'm100',
            conversationId: 'c1',
            senderId: 'u1',
            content: 'Check the latest design assets I uploaded.',
            createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(), // 2 mins ago
            status: 'delivered',
        },
    },
    {
        id: 'c2',
        userId: 'u2',
        user: MOCK_USERS[1],
        unreadCount: 0,
        lastMessage: {
            id: 'm200',
            conversationId: 'c2',
            senderId: 'me',
            content: 'See you at the meeting later today!',
            createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
            status: 'read',
        },
    },
    {
        id: 'c3',
        userId: 'u3',
        user: MOCK_USERS[2],
        unreadCount: 0,
        lastMessage: {
            id: 'm300',
            conversationId: 'c3',
            senderId: 'u3',
            content: 'Did you see the news about the merger?',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
            status: 'read',
        },
    },
];

export const MOCK_MESSAGES: Record<string, Message[]> = {
    c1: [
        {
            id: 'm1',
            conversationId: 'c1',
            senderId: 'me',
            content: 'Hey Alex, how is the project going?',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
            status: 'read',
        },
        {
            id: 'm2',
            conversationId: 'c1',
            senderId: 'u1',
            content: 'Pretty good! Just wrapping up the UI components.',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1.9).toISOString(),
            status: 'read',
        },
        {
            id: 'm3',
            conversationId: 'c1',
            senderId: 'me',
            content: 'Awesome. Send me the Figma link when ready.',
            createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1.8).toISOString(),
            status: 'read',
        },
        {
            id: 'm4',
            conversationId: 'c1',
            senderId: 'u1',
            content: 'Check the latest design assets I uploaded.',
            createdAt: new Date(Date.now() - 1000 * 60 * 2).toISOString(),
            status: 'delivered',
        },
    ],
    c2: [],
    c3: [],
};
