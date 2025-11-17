import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import QuestionItem from '../components/question-item';

const meta = {
  title: 'Components/QuestionItem',
  component: QuestionItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['image-choice', 'single-choice', 'multiple-choice'],
    },
    isDragging: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
  },
} satisfies Meta<typeof QuestionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageChoice: Story = {
  args: {
    type: 'image-choice',
  },
};

export const SingleChoice: Story = {
  args: {
    type: 'single-choice',
  },
};

export const MultipleChoice: Story = {
  args: {
    type: 'multiple-choice',
  },
};

export const Dragging: Story = {
  args: {
    type: 'multiple-choice',
    isDragging: true,
  },
};

export const FullWidth: Story = {
  args: {
    type: 'multiple-choice',
    width: 'w-full',
  },
};

