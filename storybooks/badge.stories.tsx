import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge } from '../components/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'green'],
    },
    children: {
      control: 'text',
      description: 'The badge text content',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

// Green variant
export const Green: Story = {
  args: {
    children: '24 new',
    variant: 'green',
  },
};

export const GreenShort: Story = {
  args: {
    children: 'New',
    variant: 'green',
  },
};

export const GreenLong: Story = {
  args: {
    children: '24 new items',
    variant: 'green',
  },
};

export const GreenWithNumber: Story = {
  args: {
    children: '99+',
    variant: 'green',
  },
};

// Custom styling
export const CustomStyling: Story = {
  args: {
    children: 'Custom Badge',
    variant: 'green',
    className: 'px-2',
  },
};

