import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { CloseButton } from '../components/close-button';

const meta = {
  title: 'Components/CloseButton',
  component: CloseButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus-visible', 'disabled'],
    },
    keyboardShortcut: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof CloseButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    keyboardShortcut: 'ESC',
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    keyboardShortcut: 'ESC',
  },
};

export const FocusVisible: Story = {
  args: {
    state: 'focus-visible',
    keyboardShortcut: 'ESC',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    keyboardShortcut: 'ESC',
    disabled: true,
  },
};

export const WithoutKeyboardShortcut: Story = {
  args: {
    state: 'default',
    keyboardShortcut: '',
  },
};

export const CustomKeyboardShortcut: Story = {
  args: {
    state: 'default',
    keyboardShortcut: 'Ctrl+K',
  },
};

