'use client';

import * as React from 'react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar } from './avatar';
import {
    ChevronSelectorIcon,
    AccountSettingIcon,
    ExportAcceptIcon,
    InviteMembersIcon,
    LogoutIcon,
    PlusSquareIcon,
    SettingsIcon,
    UpgradeButtonIcon,
    ValidataOnlyIcon,
} from '@/assets';

type AvatarColor = 'blue' | 'orange' | 'gray' | 'green' | 'red';

interface Workspace {
    id: string;
    name: string;
    avatar?: {
        name: string;
        color: AvatarColor;
    };
    isSelected?: boolean;
}

interface MenuItemConfig {
    id: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }> | string;
    iconSrc?: string;
    onClick?: () => void;
    showCheckmark?: boolean;
    customIcon?: React.ReactNode;
}

interface MenuGroupConfig {
    id: string;
    items: MenuItemConfig[];
    showSeparator?: boolean;
}

interface UserProfileDropdownProps {
    user: {
        name: string;
        email: string;
        avatar: {
            name: string;
            color: AvatarColor;
        };
    };
    workspaces?: Workspace[];
    onWorkspaceSelect?: (workspaceId: string) => void;
    onNewWorkspace?: () => void;
    onAccountSettings?: () => void;
    onWorkspaceSettings?: () => void;
    onInviteMembers?: () => void;
    onUpgrade?: () => void;
    onSignOut?: () => void;
}

interface DropdownMenuItemWrapperProps {
    label: string;
    iconSrc?: string;
    onClick?: () => void;
    showCheckmark?: boolean;
    customIcon?: React.ReactNode;
}

function DropdownMenuItemWrapper({
    label,
    iconSrc,
    onClick,
    showCheckmark,
    customIcon,
}: DropdownMenuItemWrapperProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClick?.();
    };

    return (
        <DropdownMenuItem
            onClick={handleClick}
            className="bg-white box-border content-stretch flex gap-[8px] items-center overflow-clip px-[8px] py-[6px] relative rounded-[10px] shrink-0 w-full hover:bg-gray-50 focus:bg-gray-50 m-0"
        >
            {customIcon ? (
                customIcon
            ) : iconSrc ? (
                <div className="overflow-clip relative shrink-0 size-[16px] flex items-center justify-center">
                    <Image src={iconSrc} alt={label} width={16} height={16} className="size-4 opacity-60" />
                </div>
            ) : null}
            <div className="basis-0 content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px relative shrink-0">
                <p className="basis-0 font-sans font-medium grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#4c4c5c] text-[14px] tracking-[-0.28px]">
                    {label}
                </p>
            </div>
            {showCheckmark && (
                <div className="relative shrink-0 size-[16px] flex items-center justify-center">
                    <Image
                        src={ExportAcceptIcon}
                        alt="Selected"
                        width={16}
                        height={16}
                        className="size-4"

                    />
                </div>
            )}
        </DropdownMenuItem>
    );
}

export function UserProfileDropdown({
    user,
    workspaces = [],
    onWorkspaceSelect,
    onNewWorkspace,
    onAccountSettings,
    onWorkspaceSettings,
    onInviteMembers,
    onUpgrade,
    onSignOut,
}: UserProfileDropdownProps) {
    // Menu groups configuration
    const menuGroups: MenuGroupConfig[] = [
        {
            id: 'settings',
            items: [
                {
                    id: 'account-settings',
                    label: 'Account settings',
                    iconSrc: AccountSettingIcon,
                    onClick: onAccountSettings,
                },
                {
                    id: 'workspace-settings',
                    label: 'Workspace settings',
                    iconSrc: SettingsIcon,
                    onClick: onWorkspaceSettings,
                },
            ],
            showSeparator: true,
        },
        {
            id: 'actions',
            items: [
                {
                    id: 'invite-members',
                    label: 'Invite members',
                    iconSrc: InviteMembersIcon,
                    onClick: onInviteMembers,
                },
                {
                    id: 'upgrade',
                    label: 'Upgrade Validata',
                    iconSrc: UpgradeButtonIcon,
                    onClick: onUpgrade,
                },
            ],
            showSeparator: true,
        },
        {
            id: 'sign-out',
            items: [
                {
                    id: 'sign-out',
                    label: 'Sign out',
                    iconSrc: LogoutIcon,
                    onClick: onSignOut,
                },
            ],
        },
    ];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="box-border flex gap-2 items-center px-2 py-1.5 relative rounded-xl shrink-0 w-full hover:bg-gray-50 transition-colors cursor-pointer">
                    <Avatar
                        size="32"
                        radius="rectangle"
                        name={user.avatar.name}
                        color={user.avatar.color}
                    />
                    <div className="basis-0 flex flex-col grow h-9 items-start justify-center min-h-0 min-w-0 relative shrink-0">
                        <p className="font-sans font-medium leading-5 relative shrink-0 text-sm text-gray-950 text-nowrap tracking-[-0.28px] whitespace-pre">
                            {user.name}
                        </p>
                        <p className="font-sans font-normal leading-4 min-w-full relative shrink-0 text-xs text-gray-600 tracking-[-0.24px]">
                            {user.email}
                        </p>
                    </div>
                    <div className="flex gap-2 items-center justify-center relative rounded-lg shrink-0 size-6">
                        <Image src={ChevronSelectorIcon} alt="Chevron Selector" width={16} height={16} className="size-4" />
                    </div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                side="right"
                sideOffset={8}
                className="bg-white border border-[#dfe1e6] border-solid box-border rounded-[14px] w-[240px] p-0 shadow-lg"
            >
                {/* Workspaces Group */}
                <DropdownMenuGroup className="box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative shrink-0 w-full">
                    {workspaces.map((workspace) => {
                        const customIcon = workspace.avatar ? (
                            <Avatar
                                size="16"
                                radius="circle"
                                name={workspace.avatar.name}
                                color={workspace.avatar.color}
                            />
                        ) : (
                            <div className="relative rounded-[5px] shrink-0 size-[16px] bg-gray-950 flex items-center justify-center">
                                <Image src={ValidataOnlyIcon} alt="Workspace" width={16} height={16} className="size-4" />
                            </div>
                        );

                        return (
                            <DropdownMenuItemWrapper
                                key={workspace.id}
                                label={workspace.name}
                                customIcon={customIcon}
                                onClick={() => onWorkspaceSelect?.(workspace.id)}
                                showCheckmark={workspace.isSelected}
                            />
                        );
                    })}
                    <DropdownMenuItemWrapper
                        label="New workspace"
                        iconSrc={PlusSquareIcon}
                        onClick={onNewWorkspace}
                    />
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-[#edeef2] h-px my-0 mx-0" />

                {/* Render menu groups from config */}
                {menuGroups.map((group) => (
                    <React.Fragment key={group.id}>
                        <DropdownMenuGroup className="box-border content-stretch flex flex-col gap-[4px] items-start p-[4px] relative shrink-0 w-full">
                            {group.items.map((item) => (
                                <DropdownMenuItemWrapper
                                    key={item.id}
                                    label={item.label}
                                    iconSrc={item.iconSrc}
                                    onClick={item.onClick}
                                    showCheckmark={item.showCheckmark}
                                    customIcon={item.customIcon}
                                />
                            ))}
                        </DropdownMenuGroup>
                        {group.showSeparator && <DropdownMenuSeparator className="bg-[#edeef2] h-px my-0 mx-0" />}
                    </React.Fragment>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

