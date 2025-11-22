'use client';

import * as React from 'react';
import Image from 'next/image';
import { X, Check } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Tab } from '@/components/tab';
import { EmptyNotificationIcon } from '@/assets';
import { NotificationItem, NotificationData } from '@/components/notification-item';
import { cn } from '@/lib/utils';

interface NotificationsDropdownProps {
    children: React.ReactNode;
    activeTab?: 'general' | 'comments' | 'archive';
    onTabChange?: (tab: 'general' | 'comments' | 'archive') => void;
}

// Mock data for notifications
const mockNotifications: Record<'general' | 'comments' | 'archive', NotificationData[]> = {
    general: [
        {
            id: '1',
            variant: 'joined',
            userName: 'Maher Jilani',
            surveyName: 'Customer Satisfaction Survey',
            timestamp: '2h ago',
            isUnread: true,
        },
        {
            id: '2',
            variant: 'mention',
            userName: 'Maher Jilani',
            surveyName: 'Customer Satisfaction Survey',
            questionName: 'Question 1',
            timestamp: '2h ago',
            isUnread: true,
            mentionText: '@everyone',
            comment: 'on this step, Delete should be disable',
        },
        {
            id: '3',
            variant: 'request',
            userName: 'Kamil Mitek',
            surveyName: 'Product Feedback',
            timestamp: '2h ago',
            isUnread: true,
            onAccept: () => console.log('Accept'),
            onDecline: () => console.log('Decline'),
        },
    ],
    comments: [
        {
            id: '4',
            variant: 'mention',
            userName: 'John Doe',
            surveyName: 'Team Survey',
            questionName: 'Question 2',
            timestamp: '1h ago',
            isUnread: true,
            mentionText: '@everyone',
        },
        {
            id: '5',
            variant: 'mention',
            userName: 'Jane Smith',
            surveyName: 'Feedback Form',
            questionName: 'Question 3',
            timestamp: '3h ago',
            isUnread: true,
            mentionText: '@team',
        },
    ],
    archive: [
        {
            id: '6',
            variant: 'joined',
            userName: 'Alice Johnson',
            surveyName: 'Old Survey',
            timestamp: '1d ago',
            isUnread: false,
        },
        {
            id: '7',
            variant: 'joined',
            userName: 'Bob Wilson',
            surveyName: 'Archive Survey',
            timestamp: '2d ago',
            isUnread: false,
        },
    ],
};


export function NotificationsDropdown({
    children,
    activeTab = 'general',
    onTabChange,
}: NotificationsDropdownProps) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [notifications, setNotifications] = React.useState(mockNotifications);
    
    const handleTabClick = (tab: 'general' | 'comments' | 'archive', e: React.MouseEvent) => {
        e.stopPropagation();
        onTabChange?.(tab);
    };

    const handleMarkAllAsRead = () => {
        const updated = { ...notifications };
        updated[activeTab] = updated[activeTab].map(n => ({ ...n, isUnread: false }));
        setNotifications(updated);
    };

    const currentNotifications = notifications[activeTab];
    const hasNotifications = currentNotifications.length > 0;
    
    // Count unread notifications per tab
    const generalCount = notifications.general.filter(n => n.isUnread).length;
    const commentsCount = notifications.comments.filter(n => n.isUnread).length;
    const archiveCount = notifications.archive.filter(n => n.isUnread).length;

    return (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                side="right"
                sideOffset={8}
                className="backdrop-blur backdrop-filter bg-white/99 border border-gray-200 rounded-[20px] p-0 w-[535px] max-h-[600px] overflow-hidden shadow-lg mb-0"
            >
                {/* Header */}
                <div className="bg-white border-b border-gray-200 pb-0 pt-5 px-5">
                    <div className="flex items-start justify-between mb-0">
                        <p className="text-base leading-6 font-medium text-gray-950 tracking-tight">
                            Notifications
                        </p>
                        <div className="flex gap-2 items-center">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleMarkAllAsRead();
                                }}
                                className="box-border flex gap-1 items-center justify-center overflow-clip px-1.5 py-0 relative rounded-lg shrink-0 hover:bg-gray-50 transition-colors"
                            >
                                <div className="overflow-clip relative shrink-0 size-3">
                                    <Check className="size-3 text-gray-500" />
                                </div>
                                <p className="text-xs leading-6 font-medium relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                    Mark all as read
                                </p>
                            </button>
                            <div className="bg-gray-100 h-4 w-px shrink-0" />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsOpen(false);
                                }}
                                className="bg-white border border-gray-200 rounded-[7px] size-6 flex items-center justify-center hover:bg-gray-50 transition-colors"
                            >
                                <X className="size-3 text-gray-500" />
                            </button>
                        </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex gap-2 items-start">
                        <Tab
                            text="General"
                            active={activeTab === 'general'}
                            type="underline-border"
                            size="sm"
                            showCount={generalCount > 0}
                            count={generalCount}
                            className="box-border flex gap-1 items-center justify-center px-0 py-4 relative shrink-0 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTabClick('general', e);
                            }}
                        />
                        <Tab
                            text="Comments"
                            active={activeTab === 'comments'}
                            type="underline-border"
                            size="sm"
                            showCount={commentsCount > 0}
                            count={commentsCount}
                            className="box-border flex gap-1 items-center justify-center px-0 py-4 relative shrink-0 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTabClick('comments', e);
                            }}
                        />
                        <Tab
                            text="Archive"
                            active={activeTab === 'archive'}
                            type="underline-border"
                            size="sm"
                            showCount={archiveCount > 0}
                            count={archiveCount}
                            className="box-border flex gap-1 items-center justify-center px-0 py-4 relative shrink-0 cursor-pointer"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleTabClick('archive', e);
                            }}
                        />
                    </div>
                </div>

                {/* Content Area */}
                <div className="bg-white relative shrink-0 w-full overflow-y-auto max-h-[550px]">
                    {hasNotifications ? (
                        <div className="flex flex-col items-start relative shrink-0 w-full">
                            {currentNotifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    notification={notification}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="box-border flex flex-col gap-3 items-center justify-center overflow-clip px-5 py-8 relative rounded-[inherit] w-full bg-gray-50/80">
                            <div className="h-[90px] overflow-clip relative shrink-0 w-[120px] flex items-center justify-center">
                                <Image
                                    src={EmptyNotificationIcon}
                                    alt="Empty notifications"
                                    width={120}
                                    height={90}
                                    className="h-[90px] w-[120px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1 items-center not-italic relative shrink-0 w-full">
                                <p className="text-base leading-6 font-medium relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
                                    You don't have any notifications
                                </p>
                                <p className="text-sm leading-5 font-normal min-w-full relative shrink-0 text-gray-600 text-center tracking-tight w-[min-content]">
                                    You don't have any notifications yet.
                                    <br aria-hidden="true" />
                                    When something comes up,
                                    <br aria-hidden="true" />
                                    you'll see it here.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

