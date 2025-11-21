import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip';
import { Info } from 'lucide-react';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Top side variants
export const TopMiddle: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" arrowPlacement="middle">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

export const TopLeft: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" arrowPlacement="left">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

export const TopRight: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" arrowPlacement="right">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

// Bottom side variants
export const BottomMiddle: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" arrowPlacement="middle">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

export const BottomLeft: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" arrowPlacement="left">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

export const BottomRight: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" arrowPlacement="right">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

// Left side variants
export const LeftMiddle: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="left" arrowPlacement="middle">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

// Right side variants
export const RightMiddle: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="right" arrowPlacement="middle">
        Prototype
      </TooltipContent>
    </Tooltip>
  ),
};

// Long text example
export const LongText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" arrowPlacement="middle">
        This is a longer tooltip text that demonstrates how the tooltip handles multiple lines and longer content.
      </TooltipContent>
    </Tooltip>
  ),
};

// Custom text
export const CustomText: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="p-2">
          <Info className="size-4" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" arrowPlacement="middle">
        Custom tooltip text
      </TooltipContent>
    </Tooltip>
  ),
};

