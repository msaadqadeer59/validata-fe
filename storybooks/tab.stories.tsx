import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tab } from '../components/tab';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['buttons', 'underline-border', 'default'],
      description: 'The visual style type of the tab',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'The size of the tab',
    },
    active: {
      control: 'boolean',
      description: 'Whether the tab is active',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
      description: 'The interaction state of the tab',
    },
    text: {
      control: 'text',
      description: 'The text content of the tab',
    },
    showCount: {
      control: 'boolean',
      description: 'Whether to show the count badge',
    },
    count: {
      control: 'text',
      description: 'The count value to display',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the icon (only for md size)',
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state - Buttons type, sm size
export const Default: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
  },
};

// Buttons type - sm size variants
export const ButtonsSmallActive: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallInactive: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: false,
    state: 'default',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallActiveHover: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    state: 'hover',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallInactiveHover: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: false,
    state: 'hover',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallActiveFocus: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    state: 'focus',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallInactiveFocus: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: false,
    state: 'focus',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallActiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    state: 'disabled',
    showCount: true,
    count: 3,
  },
};

export const ButtonsSmallInactiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: false,
    state: 'disabled',
    showCount: true,
    count: 3,
  },
};

// Buttons type - md size variants
export const ButtonsMediumActive: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumInactive: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: false,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumActiveHover: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumInactiveHover: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: false,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumActiveFocus: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumInactiveFocus: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: false,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumActiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const ButtonsMediumInactiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: false,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

// Default type - md size variants
export const DefaultMediumActive: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumInactive: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: false,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumActiveHover: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: true,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumInactiveHover: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: false,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumActiveFocus: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: true,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumInactiveFocus: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: false,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumActiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: true,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const DefaultMediumInactiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'default',
    size: 'md',
    active: false,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

// Underline border type - sm size variants
export const UnderlineBorderSmallActive: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallInactive: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: false,
    state: 'default',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallActiveHover: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: true,
    state: 'hover',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallInactiveHover: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: false,
    state: 'hover',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallActiveFocus: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: true,
    state: 'focus',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallInactiveFocus: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: false,
    state: 'focus',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallActiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: true,
    state: 'disabled',
    showCount: true,
    count: 3,
  },
};

export const UnderlineBorderSmallInactiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'sm',
    active: false,
    state: 'disabled',
    showCount: true,
    count: 3,
  },
};

// Underline border type - md size variants
export const UnderlineBorderMediumActive: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: true,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumInactive: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: false,
    state: 'default',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumActiveHover: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: true,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumInactiveHover: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: false,
    state: 'hover',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumActiveFocus: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: true,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumInactiveFocus: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: false,
    state: 'focus',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumActiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: true,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

export const UnderlineBorderMediumInactiveDisabled: Story = {
  args: {
    text: 'General',
    type: 'underline-border',
    size: 'md',
    active: false,
    state: 'disabled',
    showCount: true,
    count: 3,
    showIcon: true,
  },
};

// Without count
export const WithoutCount: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'sm',
    active: true,
    showCount: false,
  },
};

export const WithoutCountMedium: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    showCount: false,
    showIcon: true,
  },
};

// Without icon (md size)
export const WithoutIconMedium: Story = {
  args: {
    text: 'General',
    type: 'buttons',
    size: 'md',
    active: true,
    showCount: true,
    count: 3,
    showIcon: false,
  },
};

// Custom text
export const CustomText: Story = {
  args: {
    text: 'Analytics',
    type: 'buttons',
    size: 'sm',
    active: true,
    showCount: true,
    count: 12,
  },
};

export const CustomTextMedium: Story = {
  args: {
    text: 'Reports',
    type: 'buttons',
    size: 'md',
    active: true,
    showCount: true,
    count: 5,
    showIcon: true,
  },
};

// All variants comparison - Buttons type
export const AllButtonsVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Small - Active States</h3>
        <div className="flex gap-2 flex-wrap">
          <Tab text="General" type="buttons" size="sm" active={true} state="default" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={true} state="hover" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={true} state="focus" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={true} state="disabled" showCount count={3} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Small - Inactive States</h3>
        <div className="flex gap-2 flex-wrap">
          <Tab text="General" type="buttons" size="sm" active={false} state="default" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={false} state="hover" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={false} state="focus" showCount count={3} />
          <Tab text="General" type="buttons" size="sm" active={false} state="disabled" showCount count={3} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Medium - Active States</h3>
        <div className="flex gap-2 flex-wrap">
          <Tab text="General" type="buttons" size="md" active={true} state="default" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={true} state="hover" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={true} state="focus" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={true} state="disabled" showCount count={3} showIcon />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Medium - Inactive States</h3>
        <div className="flex gap-2 flex-wrap">
          <Tab text="General" type="buttons" size="md" active={false} state="default" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={false} state="hover" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={false} state="focus" showCount count={3} showIcon />
          <Tab text="General" type="buttons" size="md" active={false} state="disabled" showCount count={3} showIcon />
        </div>
      </div>
    </div>
  ),
};

// All variants comparison - Underline border type
export const AllUnderlineBorderVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Small - Active States</h3>
        <div className="flex gap-2 flex-wrap items-end">
          <Tab text="General" type="underline-border" size="sm" active={true} state="default" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={true} state="hover" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={true} state="focus" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={true} state="disabled" showCount count={3} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Small - Inactive States</h3>
        <div className="flex gap-2 flex-wrap items-end">
          <Tab text="General" type="underline-border" size="sm" active={false} state="default" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={false} state="hover" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={false} state="focus" showCount count={3} />
          <Tab text="General" type="underline-border" size="sm" active={false} state="disabled" showCount count={3} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Medium - Active States</h3>
        <div className="flex gap-2 flex-wrap items-end">
          <Tab text="General" type="underline-border" size="md" active={true} state="default" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={true} state="hover" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={true} state="focus" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={true} state="disabled" showCount count={3} showIcon />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-600">Medium - Inactive States</h3>
        <div className="flex gap-2 flex-wrap items-end">
          <Tab text="General" type="underline-border" size="md" active={false} state="default" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={false} state="hover" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={false} state="focus" showCount count={3} showIcon />
          <Tab text="General" type="underline-border" size="md" active={false} state="disabled" showCount count={3} showIcon />
        </div>
      </div>
    </div>
  ),
};

// Tab group example
export const TabGroup: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tab text="General" type="buttons" size="sm" active={true} showCount count={3} />
      <Tab text="Settings" type="buttons" size="sm" active={false} showCount count={5} />
      <Tab text="Analytics" type="buttons" size="sm" active={false} showCount count={12} />
    </div>
  ),
};

export const TabGroupMedium: Story = {
  render: () => (
    <div className="flex gap-2">
      <Tab text="General" type="buttons" size="md" active={true} showCount count={3} showIcon />
      <Tab text="Settings" type="buttons" size="md" active={false} showCount count={5} showIcon />
      <Tab text="Analytics" type="buttons" size="md" active={false} showCount count={12} showIcon />
    </div>
  ),
};

export const TabGroupUnderline: Story = {
  render: () => (
    <div className="flex gap-4 items-end">
      <Tab text="General" type="underline-border" size="sm" active={true} showCount count={3} />
      <Tab text="Settings" type="underline-border" size="sm" active={false} showCount count={5} />
      <Tab text="Analytics" type="underline-border" size="sm" active={false} showCount count={12} />
    </div>
  ),
};

