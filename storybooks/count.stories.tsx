import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Count } from '../components/count';

const meta = {
  title: 'Components/Count',
  component: Count,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'circle'],
    },
    count: {
      control: 'text',
      description: 'The number or text to display',
    },
  },
} satisfies Meta<typeof Count>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    count: '3',
    variant: 'default',
  },
};

export const SingleDigit: Story = {
  args: {
    count: '5',
    variant: 'default',
  },
};

export const DoubleDigit: Story = {
  args: {
    count: '24',
    variant: 'default',
  },
};

export const TripleDigit: Story = {
  args: {
    count: '999',
    variant: 'default',
  },
};

export const Circle: Story = {
  args: {
    count: '3',
    variant: 'circle',
  },
};

export const CircleSingleDigit: Story = {
  args: {
    count: '5',
    variant: 'circle',
  },
};

export const CircleDoubleDigit: Story = {
  args: {
    count: '24',
    variant: 'circle',
  },
};

// With custom className
export const CustomStyling: Story = {
  args: {
    count: '12',
    variant: 'default',
    className: 'min-w-[20px]',
  },
};

