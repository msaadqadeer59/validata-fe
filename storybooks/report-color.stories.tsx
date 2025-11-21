import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ReportColor } from '../components/report-color';

const meta = {
  title: 'Components/ReportColor',
  component: ReportColor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'orange', 'gray', 'green', 'red'],
      description: 'The color variant of the report indicator',
    },
  },
} satisfies Meta<typeof ReportColor>;

export default meta;
type Story = StoryObj<typeof meta>;

// Color variants
export const Blue: Story = {
  args: {
    color: 'blue',
  },
};

export const Orange: Story = {
  args: {
    color: 'orange',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
  },
};

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
  },
};

// Default (gray)
export const Default: Story = {
  args: {},
};

// All colors comparison
export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <ReportColor color="blue" />
      <ReportColor color="orange" />
      <ReportColor color="gray" />
      <ReportColor color="green" />
      <ReportColor color="red" />
    </div>
  ),
};

// Horizontal layout
export const HorizontalLayout: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ReportColor color="blue" />
      <ReportColor color="orange" />
      <ReportColor color="gray" />
    </div>
  ),
};

