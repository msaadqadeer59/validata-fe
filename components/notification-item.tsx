'use client';

import * as React from 'react';
import Image from 'next/image';
import { Avatar } from './avatar';
import { Button } from './button';
import { PageIndicatorIcon } from '@/assets';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export type NotificationVariant = 'joined' | 'mention' | 'request';

export interface NotificationData {
    id: string;
    variant: NotificationVariant;
    userName: string;
    surveyName: string;
    questionName?: string;
    timestamp: string;
    isUnread: boolean;
    // For mention variant
    comment?: string;
    mentionText?: string;
    // For request variant
    onAccept?: () => void;
    onDecline?: () => void;
}

interface NotificationItemProps {
    notification: NotificationData;
    className?: string;
}

function UnreadIndicator() {
    return (
        <div className="content-stretch flex gap-2 items-center justify-center relative rounded-[5px] shrink-0 size-5">
            <div className="bg-blue-600 rounded-full shrink-0 size-1.5" />
        </div>
    );
}

export function NotificationItem({ notification, className }: NotificationItemProps) {
    const { variant, userName, surveyName, questionName, timestamp, isUnread, comment, mentionText, onAccept, onDecline } = notification;

    if (variant === 'mention') {
        return (
            <div className={cn('bg-white border-b border-gray-200 relative shrink-0 w-full', className)}>
                <div className="box-border flex flex-col gap-3 items-start justify-center p-5 relative w-full">
                    <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
                        <Avatar
                            size="32"
                            radius="rectangle"
                            name={userName}
                            color="green"
                            maxLetters={1}
                        />
                        <div className="basis-0 flex flex-col gap-0.5 grow items-start min-h-0 min-w-0 relative shrink-0">
                            <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
                                <div className="basis-0 flex gap-2 grow items-center min-h-0 min-w-0 relative shrink-0">
                                    <p className="text-sm leading-5 font-medium relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
                                        <span>{userName}</span>
                                        <span className="font-normal text-gray-600"> mention you in </span>
                                        <span>{questionName}</span>
                                    </p>
                                </div>
                                {isUnread && <UnreadIndicator />}
                            </div>
                            <div className="content-stretch flex gap-0.5 items-start relative shrink-0 w-full">
                                <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                    {timestamp}
                                </p>
                                <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-400 text-nowrap tracking-tight whitespace-pre">
                                    ・
                                </p>
                                <div className="box-border flex gap-1 items-center px-1 py-0 relative rounded-md shrink-0">
                                    <div className="overflow-clip relative shrink-0 size-[9px]">
                                        <Image
                                            src={PageIndicatorIcon}
                                            alt="Survey"
                                            width={9}
                                            height={9}
                                            className="size-[9px] opacity-60"
                                        />
                                    </div>
                                    <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                        {surveyName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
                        <div className="h-0 rounded-[10px] shrink-0 w-8" />
                        <div className="basis-0 bg-gray-50 flex flex-col gap-3 grow items-start min-h-0 min-w-0 p-3 relative rounded-2xl shrink-0">
                            <p className="text-sm leading-5 font-normal relative shrink-0 text-gray-600 tracking-tight whitespace-pre">
                                <span className="text-blue-500">{mentionText || '@everyone'}</span> on this step, Delete should be disable
                            </p>
                            <div className="content-stretch flex flex-col gap-2 items-start relative shrink-0 w-full">
                                <div className="bg-white border border-gray-200 box-border flex gap-2 items-center px-2 py-1 relative rounded-[10px] shrink-0 w-full">
                                    <p className="basis-0 font-medium grow leading-6 min-h-0 min-w-0 relative shrink-0 text-gray-500 text-sm tracking-tight">
                                        Reply {mentionText || '@everyone'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === 'request') {
        return (
            <div className={cn('bg-white border-b border-gray-200 relative shrink-0 w-full', className)}>
                <div className="box-border flex flex-col gap-3 items-start justify-center p-5 relative w-full">
                    <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
                        <Avatar
                            size="32"
                            radius="rectangle"
                            name={userName}
                            color="green"
                            maxLetters={1}
                        />
                        <div className="basis-0 flex flex-col gap-0.5 grow items-start min-h-0 min-w-0 relative shrink-0">
                            <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
                                <div className="basis-0 flex gap-2 grow items-center min-h-0 min-w-0 relative shrink-0">
                                    <p className="text-sm leading-5 font-medium relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
                                        <span>{userName}</span>
                                        <span className="font-normal text-gray-600"> is requesting to join the </span>
                                        <span>{surveyName}</span>
                                    </p>
                                </div>
                                {isUnread && <UnreadIndicator />}
                            </div>
                            <div className="content-stretch flex gap-0.5 items-start relative shrink-0 w-full">
                                <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                    {timestamp}
                                </p>
                                <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-400 text-nowrap tracking-tight whitespace-pre">
                                    ・
                                </p>
                                <div className="box-border flex gap-1 items-center px-1 py-0 relative rounded-md shrink-0">
                                    <div className="overflow-clip relative shrink-0 size-[9px]">
                                        <Image
                                            src={PageIndicatorIcon}
                                            alt="Survey"
                                            width={9}
                                            height={9}
                                            className="size-[9px] opacity-60"
                                        />
                                    </div>
                                    <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                        {surveyName}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-stretch flex gap-3 items-center relative shrink-0 w-full">
                        <div className="h-0 rounded-[10px] shrink-0 w-8" />
                        <div className="basis-0 flex gap-1 grow items-start min-h-0 min-w-0 relative shrink-0">
                            <Button
                                variant="default"
                                size="sm"
                                className="bg-gray-950 text-white px-1.5 py-0 rounded-lg text-xs leading-6 font-medium tracking-tight"
                                onClick={onAccept}
                            >
                                Accept
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="bg-white border border-gray-200 px-1.5 py-0 rounded-lg text-xs leading-6 font-medium tracking-tight text-gray-950"
                                onClick={onDecline}
                            >
                                Decline
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Joined variant (default)
    return (
        <div className={cn('bg-white border-b border-gray-200 h-[72px] relative shrink-0 w-full', className)}>
            <div className="box-border flex gap-3 h-[72px] items-center p-5 relative w-full">
                <Avatar
                    size="32"
                    radius="rectangle"
                    name={userName}
                    color="green"
                />
                <div className="basis-0 flex flex-col gap-0.5 grow items-start min-h-0 min-w-0 relative shrink-0">
                    <div className="content-stretch flex gap-4 items-center relative shrink-0 w-full">
                        <div className="basis-0 flex gap-2 grow items-center min-h-0 min-w-0 relative shrink-0">
                            <p className="text-sm leading-5 font-medium relative shrink-0 text-gray-950 text-nowrap tracking-tight whitespace-pre">
                                <span>{userName}</span>
                                <span className="font-normal text-gray-600"> joined to </span>
                                <span>{surveyName}</span>
                            </p>
                        </div>
                        {isUnread && <UnreadIndicator />}
                    </div>
                    <div className="content-stretch flex gap-0.5 items-start relative shrink-0 w-full">
                        <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                            {timestamp}
                        </p>
                        <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-400 text-nowrap tracking-tight whitespace-pre">
                            ・
                        </p>
                        <div className="box-border flex gap-1 items-center px-1 py-0 relative rounded-md shrink-0">
                            <div className="overflow-clip relative shrink-0 size-[9px]">
                                <Image
                                    src={PageIndicatorIcon}
                                    alt="Survey"
                                    width={9}
                                    height={9}
                                    className="size-[9px] opacity-60"
                                />
                            </div>
                            <p className="text-xs leading-4 font-normal relative shrink-0 text-gray-600 text-nowrap tracking-tight whitespace-pre">
                                {surveyName}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

