import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { Topbar } from '../components/topbar';

const meta = {
  title: 'Components/Topbar',
  component: Topbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: 'select',
      options: ['surveys', 'integrations', 'brand-kit'],
      description: 'The currently active tab',
    },
    surveysCount: {
      control: 'number',
      description: 'The count badge value for the Surveys tab',
    },
    onTabChange: {
      action: 'tab-changed',
      description: 'Callback when a tab is clicked',
    },
    onShareFeedbackClick: {
      action: 'share-feedback-clicked',
      description: 'Callback when the share feedback button is clicked',
    },
    onInviteClick: {
      action: 'invite-clicked',
      description: 'Callback when the invite button is clicked',
    },
  },
} satisfies Meta<typeof Topbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state - Surveys tab active
export const Default: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// Integrations tab active
export const IntegrationsActive: Story = {
  args: {
    activeTab: 'integrations',
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// Brand Kit tab active
export const BrandKitActive: Story = {
  args: {
    activeTab: 'brand-kit',
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// With different survey count
export const HighSurveyCount: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 99,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// Single digit count
export const SingleDigitCount: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 5,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// Single avatar
export const SingleAvatar: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
    ],
  },
};

// Multiple avatars
export const MultipleAvatars: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
      { src: '', name: 'John Doe' },
      { src: '', name: 'Jane Smith' },
    ],
  },
};

// No avatars
export const NoAvatars: Story = {
  args: {
    activeTab: 'surveys',
    surveysCount: 3,
    avatars: [],
  },
};

// Interactive example
export const Interactive: Story = {
  render: (args) => {
    const [activeTab, setActiveTab] = React.useState<'surveys' | 'integrations' | 'brand-kit'>('surveys');
    
    return (
      <Topbar
        {...args}
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          args.onTabChange?.(tab);
        }}
      />
    );
  },
  args: {
    surveysCount: 3,
    avatars: [
      { src: '', name: 'Maher Jilani' },
      { src: '', name: 'Kamil Mitek' },
    ],
  },
};

// All tabs comparison
export const AllTabs: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Surveys Active</h3>
        <Topbar activeTab="surveys" surveysCount={3} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Integrations Active</h3>
        <Topbar activeTab="integrations" surveysCount={3} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">Brand Kit Active</h3>
        <Topbar activeTab="brand-kit" surveysCount={3} />
      </div>
    </div>
  ),
};

