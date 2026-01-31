import { cn } from '@/lib/utils';
import { User } from '@/types';

interface AvatarProps {
    user?: User | null;
    src?: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    showStatus?: boolean;
}

export function Avatar({ user, src, alt, size = 'md', className, showStatus = false }: AvatarProps) {
    const finalSrc = user?.avatar || src || `https://ui-avatars.com/api/?name=${user?.username || alt || 'User'}&background=random`;
    const finalAlt = user?.username || alt || 'UserAvatar';
    const status = user?.status || 'offline';

    return (
        <div className={cn('relative inline-block', className)}>
            <img
                src={finalSrc}
                alt={finalAlt}
                className={cn(
                    'rounded-full object-cover border border-slate-700 bg-slate-800',
                    {
                        'h-8 w-8': size === 'sm',
                        'h-10 w-10': size === 'md',
                        'h-12 w-12': size === 'lg',
                        'h-16 w-16': size === 'xl',
                    }
                )}
            />
            {showStatus && (
                <span
                    className={cn(
                        'absolute bottom-0 right-0 block rounded-full ring-2 ring-slate-900',
                        {
                            'bg-green-500': status === 'online',
                            'bg-yellow-500': status === 'busy',
                            'bg-slate-500': status === 'offline',
                            'h-2.5 w-2.5': size === 'md' || size === 'sm',
                            'h-3.5 w-3.5': size === 'lg',
                            'h-4 w-4': size === 'xl',
                        }
                    )}
                />
            )}
        </div>
    );
}
