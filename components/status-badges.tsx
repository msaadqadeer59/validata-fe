import * as React from 'react';
import Image from 'next/image';
import { CloseSurveyIcon, RefreshIcon } from '@/assets';
import { cn } from '@/lib/utils';

export type StatusBadgeType = 'demo' | 'live' | 'schedule' | 'draft' | 'closed';

interface StatusBadgeProps {
    type: StatusBadgeType;
    className?: string;
}

const CircleIcon = ({ color }: { color: string }) => (
    <div className="relative shrink-0 size-[9.563px]">
        <div
            className="rounded-full size-[9.563px]"
            style={{
                background: `linear-gradient(180deg, ${color} 0%, ${color}80 100%)`,
            }}
        />
    </div>
);

const StatusBadge = React.forwardRef<HTMLDivElement, StatusBadgeProps>(({ type, className }, ref) => {
    const badgeConfig = {
        demo: {
            bg: 'bg-[#f7f2ff]',
            border: 'border border-[rgba(80,6,217,0.15)]',
            textColor: 'text-[#5006d9]',
            icon: <CircleIcon color="#5006d9" />,
            text: 'Demo',
        },
        live: {
            bg: 'bg-green-50',
            border: 'border border-[rgba(0,130,53,0.15)]',
            textColor: 'text-[#016630]',
            icon: <CircleIcon color="#00A63E" />,
            text: 'Live',
        },
        schedule: {
            bg: 'bg-orange-50',
            border: 'border border-[rgba(245,73,0,0.15)]',
            textColor: 'text-[#f54900]',
            icon: <CircleIcon color="#f54900" />,
            text: 'Schedule',
        },
        draft: {
            bg: 'bg-white',
            border: 'border border-[#edeef2]',
            textColor: 'text-[#6a6a7e]',
            icon: (
                <div className="overflow-clip relative shrink-0 ">
                    <Image src={RefreshIcon} alt="Refresh" width={12} height={12} />
                </div>
            ),
            text: 'Draft',
        },
        closed: {
            bg: 'bg-[#f7f7f8]',
            border: 'border border-[#edeef2]',
            textColor: 'text-[#6a6a7e]',
            icon: <Image src={CloseSurveyIcon} alt="Close" width={12} height={12} />,
            text: 'Closed',
        },
    };

    const config = badgeConfig[type];

    return (
        <div ref={ref} className={cn(config.bg, config.border, 'border-solid relative rounded-[6px] shrink-0', className)}>
            <div className="box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[4px] py-0 relative rounded-[inherit]">
                {config.icon}
                <p
                    className={cn(
                        'text-xs leading-5 font-normal tracking-tight text-center text-nowrap whitespace-pre relative shrink-0',
                        config.textColor
                    )}
                >
                    {config.text}
                </p>
            </div>
        </div>
    );
});

StatusBadge.displayName = 'StatusBadge';

export { StatusBadge };
export type { StatusBadgeProps };
