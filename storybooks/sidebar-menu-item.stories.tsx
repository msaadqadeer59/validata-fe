import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SidebarMenuItem } from '../components/sidebar-menu-item';
import { MessageSquare, Home, Settings, User, FileText, BarChart3 } from 'lucide-react';

const meta = {
  title: 'Components/SidebarMenuItem',
  component: SidebarMenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the menu item is active',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed (icon-only mode)',
    },
    label: {
      control: 'text',
      description: 'The menu item label',
    },
    count: {
      control: 'text',
      description: 'Optional count badge value',
    },
    badge: {
      control: 'text',
      description: 'Optional green notification badge text',
    },
    tooltipText: {
      control: 'text',
      description: 'Tooltip text shown when collapsed',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the menu item is disabled',
    },
  },
} satisfies Meta<typeof SidebarMenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state - Not active
export const Default: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: false,
  },
};

export const DefaultWithCount: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    active: false,
    collapsed: false,
  },
};

export const DefaultWithBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    badge: '24 new',
    active: false,
    collapsed: false,
  },
};

export const DefaultWithCountAndBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    badge: '24 new',
    active: false,
    collapsed: false,
  },
};

// Active state
export const Active: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: false,
  },
};

export const ActiveWithCount: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    active: true,
    collapsed: false,
  },
};

export const ActiveWithBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    badge: '24 new',
    active: true,
    collapsed: false,
  },
};

export const ActiveWithCountAndBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    badge: '24 new',
    active: true,
    collapsed: false,
  },
};

// Hover state
export const Hover: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: false,
  },
};

export const ActiveHover: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: false,
  },
};

export const HoverWithCountAndBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    badge: '24 new',
    active: false,
    collapsed: false,
  },
};

// Focus state
export const Focus: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: false,
  },
};

export const ActiveFocus: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: false,
  },
};

export const FocusWithCountAndBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    badge: '24 new',
    active: false,
    collapsed: false,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: false,
    disabled: true,
  },
};

export const ActiveDisabled: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: false,
    disabled: true,
  },
};

export const DisabledWithCountAndBadge: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    count: '3',
    badge: '24 new',
    active: false,
    collapsed: false,
    disabled: true,
  },
};

// Collapsed state
export const Collapsed: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: true,
    tooltipText: 'Prototype',
  },
};

export const CollapsedActive: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: true,
    tooltipText: 'Prototype',
  },
};

export const CollapsedHover: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: true,
    tooltipText: 'Prototype',
  },
};

export const CollapsedActiveHover: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: true,
    tooltipText: 'Prototype',
  },
};

export const CollapsedFocus: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: true,
    tooltipText: 'Prototype',
  },
};

export const CollapsedDisabled: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: false,
    collapsed: true,
    disabled: true,
  },
};

export const CollapsedActiveDisabled: Story = {
  args: {
    icon: MessageSquare,
    label: 'Label',
    active: true,
    collapsed: true,
    disabled: true,
  },
};

// Different icons
export const WithHomeIcon: Story = {
  args: {
    icon: Home,
    label: 'Home',
    active: false,
    collapsed: false,
  },
};

export const WithSettingsIcon: Story = {
  args: {
    icon: Settings,
    label: 'Settings',
    active: true,
    collapsed: false,
  },
};

export const WithUserIcon: Story = {
  args: {
    icon: User,
    label: 'Profile',
    count: '5',
    active: false,
    collapsed: false,
  },
};

export const WithFileIcon: Story = {
  args: {
    icon: FileText,
    label: 'Documents',
    badge: '12 new',
    active: false,
    collapsed: false,
  },
};

export const WithChartIcon: Story = {
  args: {
    icon: BarChart3,
    label: 'Analytics',
    count: '99',
    badge: 'Updated',
    active: true,
    collapsed: false,
  },
};

// Long label
export const LongLabel: Story = {
  args: {
    icon: MessageSquare,
    label: 'This is a very long menu item label',
    active: false,
    collapsed: false,
  },
};

