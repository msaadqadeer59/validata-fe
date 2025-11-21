import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { SurveyItem } from '../components/survey-item';

const meta = {
  title: 'Components/SurveyItem',
  component: SurveyItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The survey title (first letter will be used for the badge)',
    },
    color: {
      control: 'select',
      options: ['blue', 'orange', 'gray', 'green', 'red'],
      description: 'The color variant for the letter badge',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active'],
      description: 'The interaction state of the survey item',
    },
  },
} satisfies Meta<typeof SurveyItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    title: 'Demo project',
    color: 'blue',
    state: 'default',
  },
};

// Different colors
export const Blue: Story = {
  args: {
    title: 'Demo project',
    color: 'blue',
  },
};

export const Orange: Story = {
  args: {
    title: 'Remote survey',
    color: 'orange',
  },
};

export const Green: Story = {
  args: {
    title: 'On-site survey',
    color: 'green',
  },
};

export const Gray: Story = {
  args: {
    title: 'General survey',
    color: 'gray',
  },
};

export const Red: Story = {
  args: {
    title: 'Urgent survey',
    color: 'red',
  },
};

// Hover state
export const Hover: Story = {
  args: {
    title: 'Demo project',
    color: 'blue',
    state: 'hover',
  },
};

// Active state
export const Active: Story = {
  args: {
    title: 'Demo project',
    color: 'blue',
    state: 'active',
  },
};

// Different titles (testing first letter extraction)
export const SingleWord: Story = {
  args: {
    title: 'Survey',
    color: 'blue',
  },
};

export const MultipleWords: Story = {
  args: {
    title: 'Workplace Transformation Survey',
    color: 'orange',
  },
};

export const LowercaseTitle: Story = {
  args: {
    title: 'demo project',
    color: 'green',
  },
};

export const NumberFirst: Story = {
  args: {
    title: '2024 Annual Survey',
    color: 'blue',
  },
};

export const SpecialCharacterFirst: Story = {
  args: {
    title: '@Special Survey',
    color: 'orange',
  },
};

// All colors comparison
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-[200px]">
      <SurveyItem title="Blue Survey" color="blue" />
      <SurveyItem title="Orange Survey" color="orange" />
      <SurveyItem title="Green Survey" color="green" />
      <SurveyItem title="Gray Survey" color="gray" />
      <SurveyItem title="Red Survey" color="red" />
    </div>
  ),
};

// Interactive
export const Interactive: Story = {
  render: () => {
    const [active, setActive] = React.useState(false);
    return (
      <SurveyItem
        title="Click me"
        color="blue"
        state={active ? 'active' : 'default'}
        onClick={() => setActive(!active)}
      />
    );
  },
};

