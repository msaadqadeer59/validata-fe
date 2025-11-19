'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { RefreshIcon, ChartIcon, FrameIcon, ResponseIcon } from '@/assets';
import { SurveyBadge } from './survey-badge';

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
    const firstLetter = title.charAt(0);

    // Get gradient background based on status/color
    const getGradientBackground = () => {
        if (status === 'live' || color === 'green') {
            return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(0,201,80,1)' offset='0'/><stop stop-color='rgba(16,204,91,0.9375)' offset='0.0625'/><stop stop-color='rgba(32,208,102,0.875)' offset='0.125'/><stop stop-color='rgba(64,215,124,0.75)' offset='0.25'/><stop stop-color='rgba(128,228,168,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
        }
        if (status === 'schedule' || color === 'orange') {
            return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(255,105,0,1)' offset='0'/><stop stop-color='rgba(255,114,16,0.9375)' offset='0.0625'/><stop stop-color='rgba(255,124,32,0.875)' offset='0.125'/><stop stop-color='rgba(255,143,64,0.75)' offset='0.25'/><stop stop-color='rgba(255,180,128,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
        }
        // Default purple gradient for draft/demo
        return `url("data:image/svg+xml;utf8,<svg viewBox='0 0 368 162' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='0.05000000074505806'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-1.9351e-13 8.1 -16.736 -2.895 368 -0.000004828)'><stop stop-color='rgba(80,6,217,1)' offset='0'/><stop stop-color='rgba(91,22,219,0.9375)' offset='0.0625'/><stop stop-color='rgba(102,37,222,0.875)' offset='0.125'/><stop stop-color='rgba(124,68,227,0.75)' offset='0.25'/><stop stop-color='rgba(168,131,236,0.5)' offset='0.5'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>")`;
    };

    return (
        <div
            className={cn(
                'bg-white border border-[#dfe1e6] border-solid relative rounded-[16px] shrink-0 overflow-hidden w-[368px] cursor-pointer',
                className
            )}
            onClick={onClick}
            style={{
                backgroundImage: getGradientBackground(),
            }}
        >
            <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-[368px]">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    {/* Top Section */}
                    <div className="box-border content-stretch flex items-start justify-between p-[16px] relative shrink-0 w-full">
                        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
                            {/* Icon and Badges Row */}
                            <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
                                {/* Icon */}
                                <div className="bg-[#EFF6FF] content-stretch flex gap-[8px] items-center justify-center relative rounded-[6px] shrink-0 size-[24px]">
                                    <div className="overflow-clip relative shrink-0 size-[16px]">
                                        <SurveyBadge letter={firstLetter} color={color} />
                                    </div>
                                </div>

                                {/* Status Badges */}
                                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                                    {status === 'draft' && (
                                        <div className="bg-white border border-[#edeef2] border-solid relative rounded-[6px] shrink-0">
                                            <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
                                                <div className="overflow-clip relative shrink-0 size-[9px]">
                                                    <Image src={RefreshIcon} alt="Refresh" width={9} height={9} />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                    Draft
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {status === 'live' && (
                                        <div className="bg-[#F0FDF4] border border-[rgba(0,130,53,0.15)] border-solid relative rounded-[6px] shrink-0">
                                            <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
                                                <div className="relative shrink-0 size-[9.563px]">
                                                    <div className="bg-[#016630] rounded-full size-[9.563px]" />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#016630] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                    Live
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {status === 'schedule' && (
                                        <div className="bg-[#FFF7ED] border border-[rgba(245,73,0,0.15)] border-solid relative rounded-[6px] shrink-0">
                                            <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
                                                <div className="relative shrink-0 size-[9.563px]">
                                                    <div className="bg-[#f54900] rounded-full size-[9.563px]" />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#f54900] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                    Schedule
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {tags.map((tag, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#f7f2ff] border border-[rgba(80,6,217,0.15)] border-solid relative rounded-[6px] shrink-0"
                                        >
                                            <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
                                                <div className="relative shrink-0 size-[9.563px]">
                                                    <div className="bg-[#5006d9] rounded-full size-[9.563px]" />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#5006d9] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                    {tag}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Title and Subtitle */}
                            <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full">
                                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#060510] text-[16px] tracking-[-0.32px] w-full">
                                    {title}
                                </p>
                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a6a7e] text-[12px] tracking-[-0.24px] w-full">
                                    {subtitle}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-[#edeef2] border-[1px_0px_0px] border-solid box-border content-stretch flex items-end relative shrink-0 w-full">
                        {/* Left: Responses Badge and Stats */}
                        <div className="basis-0 box-border content-stretch flex grow items-center justify-between min-h-px min-w-px p-[16px] relative shrink-0">
                            {/* Responses Badge */}
                            <div className="bg-white border border-[#edeef2] border-solid relative rounded-[7px] shrink-0">
                                <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit]">
                                    {hasResponses && responses > 0 ? (
                                        <>
                                            <div className="box-border content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative shrink-0">
                                                <div className="relative shrink-0 size-[12px]">
                                                    <Image src={FrameIcon} alt="Frame" width={12} height={12} />
                                                </div>
                                                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
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
                                                        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#008235] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                            {newResponses} new
                                                        </p>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                    ) : (
                                        <div className="box-border content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative shrink-0">
                                            <div className="relative shrink-0 size-[12px]">
                                                <Image src={FrameIcon} alt="Frame" width={12} height={12} />
                                            </div>
                                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                                No responses
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Middle: Stats */}
                            <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
                                {/* Views */}
                                <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[6px] py-[2px] relative rounded-[7px] shrink-0">
                                    <div className="overflow-clip relative shrink-0 size-[9px]">
                                        <Image src={ChartIcon} alt="Chart" width={9} height={9} />
                                    </div>
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                        {views}
                                    </p>
                                </div>

                                {/* Responses */}
                                <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[6px] py-[2px] relative rounded-[7px] shrink-0">
                                    <div className="overflow-clip relative shrink-0 size-[12px]">
                                        <Image src={ResponseIcon} alt="Responses" width={12} height={12} />
                                    </div>
                                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6a6a7e] text-[12px] text-center text-nowrap tracking-[-0.24px] whitespace-pre">
                                        {responses}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Menu Button */}
                        <div className="border-[#edeef2] border-[0px_0px_0px_1px] border-solid box-border content-stretch flex gap-[8px] items-center p-[16px] relative shrink-0">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMenuClick?.();
                                }}
                                className="bg-white border border-[#dfe1e6] border-solid box-border content-stretch flex gap-[8px] items-center justify-center relative rounded-[7px] shrink-0 size-[24px]"
                            >
                                <div className="overflow-clip relative shrink-0 size-[12.25px]">
                                    <div className="absolute inset-[45.83%_16.67%]">
                                        <svg
                                            width="12.25"
                                            height="12.25"
                                            viewBox="0 0 12.25 12.25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle cx="2.04" cy="6.125" r="1.02" fill="#9999AD" />
                                            <circle cx="6.125" cy="6.125" r="1.02" fill="#9999AD" />
                                            <circle cx="10.21" cy="6.125" r="1.02" fill="#9999AD" />
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

