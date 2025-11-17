import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../components/button';
import { Plus, ChevronDown, Check, X, Info, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'ghost', 'secondary', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right', 'none'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default variant
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const DefaultWithIconLeft: Story = {
  render: (args) => (
    <Button {...args} icon={<Plus />} iconPosition="left">
      Publish
    </Button>
  ),
  args: {
    variant: 'default',
  },
};

export const DefaultWithIconRight: Story = {
  render: (args) => (
    <Button {...args} icon={<ChevronDown />} iconPosition="right">
      Publish
    </Button>
  ),
  args: {
    variant: 'default',
  },
};

export const DefaultHover: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    className: 'hover:bg-gray-900',
  },
};

export const DefaultFocusVisible: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    className: 'focus-visible:border-2 focus-visible:border-gray-950',
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    disabled: true,
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const DestructiveWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<X />} iconPosition="left">
      Delete
    </Button>
  ),
  args: {
    variant: 'destructive',
  },
};

export const DestructiveHover: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    className: 'hover:bg-red-700',
  },
};

export const DestructiveDisabled: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    disabled: true,
  },
};

// Outline variant
export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const OutlineWithIconLeft: Story = {
  render: (args) => (
    <Button {...args} icon={<Plus />} iconPosition="left">
      Publish
    </Button>
  ),
  args: {
    variant: 'outline',
  },
};

export const OutlineWithIconRight: Story = {
  render: (args) => (
    <Button {...args} icon={<ChevronDown />} iconPosition="right">
      Publish
    </Button>
  ),
  args: {
    variant: 'outline',
  },
};

export const OutlineHover: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    className: 'hover:bg-gray-50',
  },
};

export const OutlineFocusVisible: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    className: 'focus-visible:border-2 focus-visible:border-gray-950',
  },
};

export const OutlineDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    disabled: true,
  },
};

// Ghost variant
export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const GhostWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<Info />} iconPosition="left">
      Button
    </Button>
  ),
  args: {
    variant: 'ghost',
  },
};

export const GhostHover: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    className: 'hover:bg-gray-100',
  },
};

export const GhostDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    disabled: true,
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const SecondaryWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<Check />} iconPosition="left">
      Button
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
};

export const SecondaryHover: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    className: 'hover:bg-gray-200',
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    disabled: true,
  },
};

// Link variant
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
  },
};

export const LinkWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<ArrowRight />} iconPosition="right">
      Link Button
    </Button>
  ),
  args: {
    variant: 'link',
  },
};

// Icon-only buttons
export const IconOnly: Story = {
  render: (args) => <Button {...args} icon={<Plus />} size="icon" />,
  args: {
    variant: 'default',
  },
};

export const IconOnlySmall: Story = {
  render: (args) => <Button {...args} icon={<Plus />} size="icon-sm" />,
  args: {
    variant: 'outline',
  },
};

export const IconOnlyLarge: Story = {
  render: (args) => <Button {...args} icon={<Plus />} size="icon-lg" />,
  args: {
    variant: 'default',
  },
};

export const IconOnlyDestructive: Story = {
  render: (args) => <Button {...args} icon={<X />} size="icon" />,
  args: {
    variant: 'destructive',
  },
};

export const IconOnlyGhost: Story = {
  render: (args) => <Button {...args} icon={<Info />} size="icon" />,
  args: {
    variant: 'ghost',
  },
};

// Sizes
export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

export const SmallWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<Plus />} iconPosition="left" size="sm">
      Small
    </Button>
  ),
  args: {
    variant: 'default',
  },
};

export const LargeWithIcon: Story = {
  render: (args) => (
    <Button {...args} icon={<Plus />} iconPosition="left" size="lg">
      Large
    </Button>
  ),
  args: {
    variant: 'default',
  },
};

