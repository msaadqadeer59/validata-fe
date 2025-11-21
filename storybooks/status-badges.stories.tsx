import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StatusBadge } from '../components/status-badges';

const meta = {
  title: 'Design System/StatusBadge',
  component: StatusBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['demo', 'live', 'schedule', 'draft', 'closed'],
      description: 'The status badge type',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Demo badge
export const Demo: Story = {
  args: {
    type: 'demo',
  },
};

// Live badge
export const Live: Story = {
  args: {
    type: 'live',
  },
};

// Schedule badge
export const Schedule: Story = {
  args: {
    type: 'schedule',
  },
};

// Draft badge
export const Draft: Story = {
  args: {
    type: 'draft',
  },
};

// Closed badge
export const Closed: Story = {
  args: {
    type: 'closed',
  },
};

// All variants comparison
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-white">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600 mb-2">Demo survey</p>
        <StatusBadge type="demo" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600 mb-2">Publish survey</p>
        <StatusBadge type="live" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600 mb-2">Schedule survey</p>
        <StatusBadge type="schedule" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600 mb-2">Default status</p>
        <StatusBadge type="draft" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-600 mb-2">Closed (Settings or change status after publish)</p>
        <StatusBadge type="closed" />
      </div>
    </div>
  ),
};

// Horizontal layout
export const HorizontalLayout: Story = {
  render: () => (
    <div className="flex gap-2 items-center p-8 bg-white">
      <StatusBadge type="demo" />
      <StatusBadge type="live" />
      <StatusBadge type="schedule" />
      <StatusBadge type="draft" />
      <StatusBadge type="closed" />
    </div>
  ),
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    type: 'live',
    className: 'shadow-md',
  },
};

