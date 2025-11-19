import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavCategoryItem } from '../components/nav-category-item';

const meta = {
  title: 'Components/NavCategoryItem',
  component: NavCategoryItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The item label text',
    },
    color: {
      control: 'select',
      options: ['blue', 'orange', 'gray', 'green', 'red'],
      description: 'The color of the dot indicator',
    },
  },
} satisfies Meta<typeof NavCategoryItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Color variants
export const Blue: Story = {
  args: {
    label: 'General Analyze',
    color: 'blue',
  },
};

export const Orange: Story = {
  args: {
    label: 'Age Focus Analysis',
    color: 'orange',
  },
};

export const Gray: Story = {
  args: {
    label: 'Remote Only Analysis',
    color: 'gray',
  },
};

export const Green: Story = {
  args: {
    label: 'Success Analysis',
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    label: 'Error Analysis',
    color: 'red',
  },
};

// Text variations
export const LongLabel: Story = {
  args: {
    label: 'This is a very long analysis name that might wrap',
    color: 'blue',
  },
};

export const ShortLabel: Story = {
  args: {
    label: 'Item',
    color: 'orange',
  },
};

// Default (gray)
export const Default: Story = {
  args: {
    label: 'Default Analysis',
  },
};

