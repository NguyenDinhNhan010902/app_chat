import { ChatWindow } from '@/components/chat/chat-window';

interface PageProps {
    params: Promise<{
        conversationId: string;
    }>;
}

export default async function ConversationPage({ params }: PageProps) {
    const { conversationId } = await params;
    return <ChatWindow conversationId={conversationId} />;
}
