import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import PageIndicator from '../components/page-indicator';

const meta = {
  title: 'Components/PageIndicator',
  component: PageIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    page: {
      control: 'number',
    },
  },
} satisfies Meta<typeof PageIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageOne: Story = {
  args: {
    page: 1,
  },
};

export const PageTwo: Story = {
  args: {
    page: 2,
  },
};

export const PageTen: Story = {
  args: {
    page: 10,
  },
};

