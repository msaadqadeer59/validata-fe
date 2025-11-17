import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import AddItemButton from '../components/add-item-btn';

const meta = {
  title: 'Components/AddItemButton',
  component: AddItemButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
  args: {
    onClick: () => {},
  },
} satisfies Meta<typeof AddItemButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'Add Question',
  },
};

export const CustomSize: Story = {
  args: {
    width: 'w-64',
    height: 'h-32',
    text: 'Custom Size',
  },
};

