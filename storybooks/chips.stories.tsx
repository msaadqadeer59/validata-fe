import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Chips from '../components/chips';

const meta = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'Path to the icon image',
    },
    label: {
      control: 'text',
    },
    backgroundColor: {
      control: 'color',
    },
    isTransparent: {
      control: 'boolean',
    },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: '/next.svg',
    label: 'Chip Label',
  },
};

export const WithCustomColor: Story = {
  args: {
    icon: '/next.svg',
    label: 'Custom Color',
    backgroundColor: '#E3F2FD',
  },
};

export const Transparent: Story = {
  args: {
    icon: '/next.svg',
    label: 'Transparent',
    isTransparent: true,
  },
};

export const LongLabel: Story = {
  args: {
    icon: '/next.svg',
    label: 'This is a longer chip label',
  },
};

