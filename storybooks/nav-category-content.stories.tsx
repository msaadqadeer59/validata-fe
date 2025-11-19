import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NavCategoryContent } from '../components/nav-category-content';

const meta = {
  title: 'Components/NavCategoryContent',
  component: NavCategoryContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of navigation category items',
    },
  },
} satisfies Meta<typeof NavCategoryContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: '1', label: 'General Analyze', color: 'blue' },
      { id: '2', label: 'Age Focus Analysis', color: 'orange' },
      { id: '3', label: 'Remote Only Analysis', color: 'gray' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { id: '1', label: 'General Analyze', color: 'blue' },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { id: '1', label: 'General Analyze', color: 'blue' },
      { id: '2', label: 'Age Focus Analysis', color: 'orange' },
      { id: '3', label: 'Remote Only Analysis', color: 'gray' },
      { id: '4', label: 'Success Analysis', color: 'green' },
      { id: '5', label: 'Error Analysis', color: 'red' },
    ],
  },
};

export const AllSameColor: Story = {
  args: {
    items: [
      { id: '1', label: 'Analysis 1', color: 'blue' },
      { id: '2', label: 'Analysis 2', color: 'blue' },
      { id: '3', label: 'Analysis 3', color: 'blue' },
    ],
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        id: '1',
        label: 'General Analyze',
        color: 'blue',
        onClick: () => alert('Clicked General Analyze'),
      },
      {
        id: '2',
        label: 'Age Focus Analysis',
        color: 'orange',
        onClick: () => alert('Clicked Age Focus Analysis'),
      },
      {
        id: '3',
        label: 'Remote Only Analysis',
        color: 'gray',
        onClick: () => alert('Clicked Remote Only Analysis'),
      },
    ],
  },
};

