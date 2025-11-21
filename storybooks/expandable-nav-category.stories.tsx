import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { ExpandableNavCategory } from '../components/expandable-nav-category';

const meta = {
  title: 'Components/ExpandableNavCategory',
  component: ExpandableNavCategory,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
      description: 'Whether the category is expanded/active (controlled)',
    },
    state: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'The interaction state of the category',
    },
    text: {
      control: 'text',
      description: 'The category label text',
    },
    showNumber: {
      control: 'boolean',
      description: 'Whether to show the number badge',
    },
    number: {
      control: 'text',
      description: 'The number to display in the badge',
    },
    defaultExpanded: {
      control: 'boolean',
      description: 'Whether the category starts expanded (uncontrolled)',
    },
    items: {
      control: 'object',
      description: 'Array of items to display when expanded',
    },
  },
} satisfies Meta<typeof ExpandableNavCategory>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state - Not active
export const Default: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '1',
  },
};

export const DefaultWithoutNumber: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: false,
  },
};

export const DefaultWithLargeNumber: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '99',
  },
};

// Active state
export const Active: Story = {
  args: {
    text: 'Recent Analysis',
    active: true,
    state: 'default',
    showNumber: true,
    number: '1',
  },
};

export const ActiveWithoutNumber: Story = {
  args: {
    text: 'Recent Analysis',
    active: true,
    state: 'default',
    showNumber: false,
  },
};

export const ActiveWithLargeNumber: Story = {
  args: {
    text: 'Recent Analysis',
    active: true,
    state: 'default',
    showNumber: true,
    number: '99',
  },
};

// Hover state
export const Hover: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'hover',
    showNumber: true,
    number: '1',
  },
};

export const ActiveHover: Story = {
  args: {
    text: 'Recent Analysis',
    active: true,
    state: 'hover',
    showNumber: true,
    number: '1',
  },
};

export const HoverWithoutNumber: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'hover',
    showNumber: false,
  },
};

// Different text examples
export const LongText: Story = {
  args: {
    text: 'This is a very long category name',
    active: false,
    state: 'default',
    showNumber: true,
    number: '5',
  },
};

export const ShortText: Story = {
  args: {
    text: 'Nav',
    active: false,
    state: 'default',
    showNumber: true,
    number: '1',
  },
};

export const WithSpecialCharacters: Story = {
  args: {
    text: 'Category & Subcategory',
    active: false,
    state: 'default',
    showNumber: true,
    number: '12',
  },
};

// Number variations
export const SingleDigit: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '5',
  },
};

export const DoubleDigit: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '24',
  },
};

export const TripleDigit: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '999',
  },
};

export const Zero: Story = {
  args: {
    text: 'Recent Analysis',
    active: false,
    state: 'default',
    showNumber: true,
    number: '0',
  },
};

// All states comparison
export const AllStates: Story = {
  args: {
    text: 'Recent Analysis',
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <ExpandableNavCategory text="Recent Analysis" active={false} state="default" showNumber number="1" />
      <ExpandableNavCategory text="Recent Analysis" active={false} state="hover" showNumber number="1" />
      <ExpandableNavCategory text="Recent Analysis" active={true} state="default" showNumber number="1" />
      <ExpandableNavCategory text="Recent Analysis" active={true} state="hover" showNumber number="1" />
    </div>
  ),
};

// With items - expanded
export const ExpandedWithItems: Story = {
  args: {
    text: 'Recent Analysis',
    defaultExpanded: true,
    showNumber: true,
    number: '3',
    items: [
      { id: '1', label: 'General Analyze', color: 'blue' },
      { id: '2', label: 'Age Focus Analysis', color: 'orange' },
      { id: '3', label: 'Remote Only Analysis', color: 'gray' },
    ],
  },
};

// With items - collapsed
export const CollapsedWithItems: Story = {
  args: {
    text: 'Recent Analysis',
    defaultExpanded: false,
    showNumber: true,
    number: '3',
    items: [
      { id: '1', label: 'General Analyze', color: 'blue' },
      { id: '2', label: 'Age Focus Analysis', color: 'orange' },
      { id: '3', label: 'Remote Only Analysis', color: 'gray' },
    ],
  },
};

// Interactive expand/collapse
export const Interactive: Story = {
  args: {
    text: 'Recent Analysis',
  },
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    return (
      <ExpandableNavCategory
        text="Recent Analysis"
        active={expanded}
        showNumber
        number="3"
        items={[
          { id: '1', label: 'General Analyze', color: 'blue' },
          { id: '2', label: 'Age Focus Analysis', color: 'orange' },
          { id: '3', label: 'Remote Only Analysis', color: 'gray' },
        ]}
        onToggle={setExpanded}
      />
    );
  },
};

// Multiple categories
export const MultipleCategories: Story = {
  args: {
    text: 'Recent Analysis',
  },
  render: () => (
    <div className="flex flex-col gap-1 w-[200px]">
      <ExpandableNavCategory
        text="Recent Analysis"
        defaultExpanded={true}
        showNumber
        number="3"
        items={[
          { id: '1', label: 'General Analyze', color: 'blue' },
          { id: '2', label: 'Age Focus Analysis', color: 'orange' },
          { id: '3', label: 'Remote Only Analysis', color: 'gray' },
        ]}
      />
      <ExpandableNavCategory
        text="Saved Reports"
        defaultExpanded={false}
        showNumber
        number="5"
        items={[
          { id: '4', label: 'Report 1', color: 'green' },
          { id: '5', label: 'Report 2', color: 'red' },
        ]}
      />
    </div>
  ),
};

