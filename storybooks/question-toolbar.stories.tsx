import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import QuestionToolbar from '../components/question-toolbar';

const meta = {
  title: 'Components/QuestionToolbar',
  component: QuestionToolbar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    activeItemId: {
      control: 'select',
      options: ['improve-ai', 'preview', 'comments', 'settings', 'duplicate', 'delete'],
    },
  },
  args: {
    onItemClick: (id: string) => {
      console.log('Clicked:', id);
    },
  },
} satisfies Meta<typeof QuestionToolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activeItemId: 'improve-ai',
  },
};

export const PreviewActive: Story = {
  args: {
    activeItemId: 'preview',
  },
};

export const SettingsActive: Story = {
  args: {
    activeItemId: 'settings',
  },
};

