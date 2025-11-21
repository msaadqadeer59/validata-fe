import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SearchBar } from '../components/search-bar';
import { useState } from 'react';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus-visible', 'disabled', 'with-value'],
      description: 'The visual state of the search bar',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    keyboardShortcut: {
      control: 'text',
      description: 'Keyboard shortcut badge text',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the search bar is disabled',
    },
    showClearButton: {
      control: 'boolean',
      description: 'Whether to show the clear button',
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    placeholder: 'Search',
    keyboardShortcut: '⌘K',
  },
};

// Hover state
export const Hover: Story = {
  args: {
    state: 'hover',
    placeholder: 'Search',
    keyboardShortcut: '⌘K',
  },
};

// Focus-visible state
export const FocusVisible: Story = {
  args: {
    state: 'focus-visible',
    placeholder: 'Search',
    showClearButton: true,
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    state: 'disabled',
    disabled: true,
    placeholder: 'Search',
    keyboardShortcut: '⌘K',
  },
};

// With value
export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('Example search');
    return (
      <SearchBar
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue('')}
        placeholder="Search"
      />
    );
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-4">
        <SearchBar
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onClear={() => setValue('')}
          placeholder="Search"
          keyboardShortcut="⌘K"
        />
        {value && (
          <p className="text-sm text-gray-600">Current value: {value}</p>
        )}
      </div>
    );
  },
};

// Custom keyboard shortcut
export const CustomShortcut: Story = {
  args: {
    placeholder: 'Search',
    keyboardShortcut: 'Ctrl+K',
  },
};

