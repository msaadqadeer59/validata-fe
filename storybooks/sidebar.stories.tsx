import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Sidebar } from '../components/sidebar';

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Whether the sidebar is collapsed',
    },
    showItems: {
      control: 'boolean',
      description: 'Whether to show items in nav categories',
    },
    onToggle: {
      action: 'toggled',
      description: 'Callback when sidebar is toggled',
    },
  },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variant 1: Hidden items, Collapsed=False
export const HiddenItemsExpanded: Story = {
  args: {
    collapsed: false,
    showItems: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Variant 2: Show items, Collapsed=False
export const ShowItemsExpanded: Story = {
  args: {
    collapsed: false,
    showItems: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Variant 3: Hidden items, Collapsed=True
export const HiddenItemsCollapsed: Story = {
  args: {
    collapsed: true,
    showItems: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Variant 4: Show items, Collapsed=True
export const ShowItemsCollapsed: Story = {
  args: {
    collapsed: true,
    showItems: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [collapsed, setCollapsed] = React.useState(false);
    const [showItems, setShowItems] = React.useState(true);

    return (
      <div className="flex h-screen">
        <Sidebar
          collapsed={collapsed}
          showItems={showItems}
          onToggle={() => setCollapsed(!collapsed)}
        />
        <div className="flex-1 p-8">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Sidebar Demo</h1>
            <div className="space-x-2">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="px-4 py-2 bg-gray-900 text-white rounded-md"
              >
                Toggle Collapse
              </button>
              <button
                onClick={() => setShowItems(!showItems)}
                className="px-4 py-2 bg-gray-900 text-white rounded-md"
              >
                Toggle Show Items
              </button>
            </div>
            <p>Collapsed: {collapsed ? 'Yes' : 'No'}</p>
            <p>Show Items: {showItems ? 'Yes' : 'No'}</p>
          </div>
        </div>
      </div>
    );
  },
};

