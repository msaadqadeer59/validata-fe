'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RefreshIcon, ChartIcon, FrameIcon, ResponseIcon, SurveyIcon as SurveyIconAsset } from '@/assets';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface SurveyCardProps {
    title: string;
    subtitle?: string;
    status?: 'draft' | 'published' | 'live' | 'schedule';
    tags?: string[];
    responses?: number;
    newResponses?: number;
    views?: number;
    hasResponses?: boolean;
    color?: 'blue' | 'orange' | 'gray' | 'green' | 'red';
    onClick?: () => void;
    onMenuClick?: () => void;
    className?: string;
}

const getGradientBackground = (status: SurveyCardProps['status'], color: SurveyCardProps['color']) => {
    if (status === 'live' || color === 'green') {
        return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(0,201,80,1)' offset='0'/><stop stop-color='rgba(16,204,91,0.9375)' offset='0.0625'/><stop stop-color='rgba(32,208,102,0.875)' offset='0.125'/><stop stop-color='rgba(64,215,124,0.75)' offset='0.25'/><stop stop-color='rgba(128,228,168,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
    }
    if (status === 'schedule' || color === 'orange') {
        return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(255,105,0,1)' offset='0'/><stop stop-color='rgba(255,114,16,0.9375)' offset='0.0625'/><stop stop-color='rgba(255,124,32,0.875)' offset='0.125'/><stop stop-color='rgba(255,143,64,0.75)' offset='0.25'/><stop stop-color='rgba(255,180,128,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
    }
    // Default purple gradient for draft/demo
    return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(80,6,217,1)' offset='0'/><stop stop-color='rgba(91,22,219,0.9375)' offset='0.0625'/><stop stop-color='rgba(102,37,222,0.875)' offset='0.125'/><stop stop-color='rgba(124,68,227,0.75)' offset='0.25'/><stop stop-color='rgba(168,131,236,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
};

const BadgeContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("border border-solid relative rounded-[6px] shrink-0", className)}>
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
            {children}
        </div>
    </div>
);

const StatusText = ({ children, color }: { children: React.ReactNode; color: string }) => (
    <p className={cn("font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre", color)}>
        {children}
    </p>
);

const DraftBadge = () => (
    <BadgeContainer className="bg-white border-[#edeef2]">
        <div className="overflow-clip relative shrink-0 size-[9px]">
            <Image src={RefreshIcon} alt="Refresh" width={9} height={9} />
        </div>
        <StatusText color="text-[#6a6a7e]">Draft</StatusText>
    </BadgeContainer>
);

const LiveBadge = () => (
    <div className="bg-[#F0FDF4] border border-[rgba(0,130,53,0.15)] border-solid relative rounded-[6px] shrink-0">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
            <div className="relative shrink-0 size-[9.563px]">
                <div
                    className="rounded-full size-[9.563px]"
                    style={{
                        background: 'linear-gradient(180deg, #00A63E 0%, rgba(0, 166, 62, 0.5) 100%)'
                    }}
                />
            </div>
            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#016630] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                Live
            </p>
        </div>
    </div>
);

const ScheduleBadge = () => (
    <div className="bg-[#FFF7ED] border border-[rgba(245,73,0,0.15)] border-solid relative rounded-[6px] shrink-0">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
            <div className="relative shrink-0 size-[9.563px]">
                <div
                    className="rounded-full size-[9.563px]"
                    style={{
                        background: 'linear-gradient(180deg, #f54900 0%, rgba(245, 73, 0, 0.5) 100%)'
                    }}
                />
            </div>
            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                Schedule
            </p>
        </div>
    </div>
);

const TagBadge = ({ tag }: { tag: string }) => (
    <div className="bg-[#f7f2ff] border border-[rgba(80,6,217,0.15)] border-solid relative rounded-[6px] shrink-0">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
            <div className="relative shrink-0 size-[9.563px]">
                <div
                    className="rounded-full size-[9.563px]"
                    style={{
                        background: 'linear-gradient(180deg, #5006d9 0%, rgba(80, 6, 217, 0.5) 100%)'
                    }}
                />
            </div>
            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#5006d9] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                {tag}
            </p>
        </div>
    </div>
);

const SurveyIconWrapper = () => (
    <div className="bg-[#EFF6FF] content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0 size-[24px]">
        <div className="overflow-clip relative shrink-0 size-[16px]">
            <Image src={SurveyIconAsset} alt="Survey" width={16} height={16} />
        </div>
    </div>
);

const BadgeList = ({ status, tags }: { status: SurveyCardProps['status']; tags: string[] }) => (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
        {status === 'draft' && <DraftBadge />}
        {status === 'live' && <LiveBadge />}
        {status === 'schedule' && <ScheduleBadge />}
        {tags.map((tag, index) => (
            <TagBadge key={index} tag={tag} />
        ))}
    </div>
);

const CardTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full">
        <p className="font-sans font-medium leading-[24px] relative shrink-0 text-[#060510] text-[16px] tracking-[-0.32px] w-full">
            {title}
        </p>
        <p className="font-sans font-normal leading-[16px] relative shrink-0 text-[#6a6a7e] text-[12px] tracking-[-0.24px] w-full">
            {subtitle}
        </p>
    </div>
);

const SurveyCardHeader = ({
    status,
    tags,
    title,
    subtitle
}: {
    status: SurveyCardProps['status'];
    tags: string[];
    title: string;
    subtitle: string;
}) => (
    <div className="box-border content-stretch flex items-start justify-between p-[16px] relative shrink-0 w-full">
        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
            {/* Icon and Badges Row */}
            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                <SurveyIconWrapper />
                <BadgeList status={status} tags={tags} />
            </div>

            <CardTitle title={title} subtitle={subtitle} />
        </div>
    </div>
);

const ResponsePill = ({
    hasResponses,
    responses,
    newResponses
}: {
    hasResponses: boolean;
    responses: number;
    newResponses: number;
}) => {
    if (hasResponses && responses > 0) {
        return (
            <>
                <div className="box-border content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative shrink-0">
                    <div className="relative shrink-0 size-[12px]">
                        <Image src={FrameIcon} alt="Frame" width={12} height={12} />
                    </div>
                    <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                        {responses} responses
                    </p>
                </div>
                {newResponses > 0 && (
                    <>
                        <div className="flex flex-row items-center self-stretch">
                            <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0 w-px">
                                <div className="basis-0 bg-[#edeef2] grow h-full min-h-px min-w-px shrink-0" />
                            </div>
                        </div>
                        <div className="box-border content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative shrink-0">
                            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#008235] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                {newResponses} new
                            </p>
                        </div>
                    </>
                )}
            </>
        );
    }

    return (
        <div className="box-border content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative shrink-0">
            <div className="relative shrink-0 size-[12px]">
                <Image src={FrameIcon} alt="Frame" width={12} height={12} />
            </div>
            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                No responses
            </p>
        </div>
    );
};

const StatItem = ({ icon, value, size, tooltipText }: { icon: React.ComponentProps<typeof Image>['src']; value: number; size: 9 | 12; tooltipText?: string }) => {
    const sizeClass = size === 9 ? 'size-[9px]' : 'size-[12px]';
    const content = (
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[6px] py-[2px] relative rounded-[7px] shrink-0 cursor-pointer">
            <div className={cn("overflow-clip relative shrink-0", sizeClass)}>
                <Image src={icon} alt="Stat" width={size} height={size} />
            </div>
            <p className="font-sans font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                {value}
            </p>
        </div>
    );

    if (tooltipText) {
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    {content}
                </TooltipTrigger>
                <TooltipContent side="top" sideOffset={8}>
                    {tooltipText}
                </TooltipContent>
            </Tooltip>
        );
    }

    return content;
}

const MenuButton = ({ onClick }: { onClick?: () => void }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="border-[#edeef2] border-[0px_0px_0px_1px] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative shrink-0">
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onClick?.();
                                }}
                                className={cn(
                                    "bg-white border border-[#dfe1e6] border-solid box-border content-stretch flex items-center justify-center relative rounded-[7px] shrink-0 size-[24px] transition-colors",
                                    open
                                        ? "border-[#060510]"
                                        : "border-[#dfe1e6] hover:border-[#9999AD]"
                                )}
                            >
                                <div className="overflow-clip relative shrink-0 size-[12.25px] flex items-center justify-center">
                                    <svg width="12.25" height="12.25" viewBox="0 0 12.25 12.25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.04" cy="6.125" r="1.02" fill={open ? "#060510" : "#9999AD"} />
                                        <circle cx="6.125" cy="6.125" r="1.02" fill={open ? "#060510" : "#9999AD"} />
                                        <circle cx="10.21" cy="6.125" r="1.02" fill={open ? "#060510" : "#9999AD"} />
                                    </svg>
                                </div>
                            </button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="top" sideOffset={8}>
                        More options
                    </TooltipContent>
                </Tooltip>
                <DropdownMenuContent
                    align="end"
                    sideOffset={8}
                    className="bg-white border border-[#dfe1e6] border-solid box-border rounded-[14px] w-[180px] p-0 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <DropdownMenuGroup className="box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative shrink-0 w-full">
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
                        >
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                                    Open
                                </p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
                        >
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                                    Copy link
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-[#edeef2] h-px my-0 mx-0" />
                    <DropdownMenuGroup className="box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative shrink-0 w-full">
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
                        >
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                                    Rename
                                </p>
                            </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
                        >
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                                    Duplicate
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator className="bg-[#edeef2] h-px my-0 mx-0" />
                    <DropdownMenuGroup className="box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative shrink-0 w-full">
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpen(false);
                            }}
                            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
                        >
                            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                                    Delete
                                </p>
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export function SurveyCard({
    title,
    subtitle = 'Viewed a few seconds ago',
    status = 'draft',
    tags = [],
    responses = 0,
    newResponses = 0,
    views = 0,
    hasResponses = false,
    color = 'blue',
    onClick,
    onMenuClick,
    className,
}: SurveyCardProps) {
    return (
        <div
            className={cn(
                'bg-white border border-[#dfe1e6] border-solid relative rounded-[16px] shrink-0 overflow-hidden w-[368px] cursor-pointer',
                className
            )}
            onClick={onClick}
            style={{
                backgroundImage: getGradientBackground(status, color),
            }}
        >
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[368px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <SurveyCardHeader
                        status={status}
                        tags={tags}
                        title={title}
                        subtitle={subtitle}
                    />

                    {/* Bottom Section */}
                    <div className="border-[#edeef2] border-[1px_0px_0px] border-solid box-border content-stretch flex items-end relative shrink-0 w-full">
                        {/* Left: Responses Badge and Stats */}
                        <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px p-[16px] relative shrink-0">
                            {/* Responses Badge */}
                            <div className="bg-white border border-[#edeef2] border-solid relative rounded-[7px] shrink-0">
                                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
                                    <ResponsePill
                                        hasResponses={hasResponses}
                                        responses={responses}
                                        newResponses={newResponses}
                                    />
                                </div>
                            </div>

                            {/* Middle: Stats */}
                            <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                                <StatItem icon={ChartIcon} value={views} size={9} tooltipText="Views" />
                                <StatItem icon={ResponseIcon} value={responses} size={12} tooltipText="Responses" />
                            </div>
                        </div>

                        <MenuButton onClick={onMenuClick} />
                    </div>
                </div>
            </div>
        </div>
    );
}
