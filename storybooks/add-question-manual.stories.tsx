import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AddQuestionManual } from '../components/add-question-manual';

const meta = {
  title: 'Components/AddQuestionManual',
  component: AddQuestionManual,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover'],
    },
    onClick: {
      action: 'clicked',
    },
  },
} satisfies Meta<typeof AddQuestionManual>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    state: 'default',
    onClick: () => {},
  },
};

export const Hover: Story = {
  args: {
    state: 'hover',
    onClick: () => {},
  },
};

export const WithClickHandler: Story = {
  args: {
    onClick: () => {
      console.log('Add question manually clicked');
    },
  },
};

