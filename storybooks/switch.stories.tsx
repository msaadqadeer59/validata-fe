import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch } from '../components/switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
    },
    direction: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['sm', 'xs'],
    },
    disabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    hint: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    optional: {
      control: 'boolean',
    },
    showTooltip: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base Switch (switch only) variants
export const BaseUnchecked: Story = {
  args: {
    checked: false,
    state: 'default',
  },
};

export const BaseChecked: Story = {
  args: {
    checked: true,
    state: 'default',
  },
};

export const BaseUncheckedHover: Story = {
  args: {
    checked: false,
    state: 'hover',
  },
};

export const BaseCheckedHover: Story = {
  args: {
    checked: true,
    state: 'hover',
  },
};

export const BaseUncheckedFocus: Story = {
  args: {
    checked: false,
    state: 'focus',
  },
};

export const BaseCheckedFocus: Story = {
  args: {
    checked: true,
    state: 'focus',
  },
};

export const BaseUncheckedDisabled: Story = {
  args: {
    checked: false,
    state: 'disabled',
    disabled: true,
  },
};

export const BaseCheckedDisabled: Story = {
  args: {
    checked: true,
    state: 'disabled',
    disabled: true,
  },
};

// Switch with Label (Left direction)
export const WithLabelLeft: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'left',
  },
};

export const WithLabelLeftChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'left',
  },
};

export const WithLabelLeftHover: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'left',
    state: 'hover',
  },
};

export const WithLabelLeftCheckedHover: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'left',
    state: 'hover',
  },
};

export const WithLabelLeftFocus: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'left',
    state: 'focus',
  },
};

export const WithLabelLeftCheckedFocus: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'left',
    state: 'focus',
  },
};

export const WithLabelLeftDisabled: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'left',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelLeftCheckedDisabled: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'left',
    state: 'disabled',
    disabled: true,
  },
};

// Switch with Label (Right direction)
export const WithLabelRight: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'right',
  },
};

export const WithLabelRightChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'right',
  },
};

export const WithLabelRightHover: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'right',
    state: 'hover',
  },
};

export const WithLabelRightCheckedHover: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'right',
    state: 'hover',
  },
};

export const WithLabelRightFocus: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'right',
    state: 'focus',
  },
};

export const WithLabelRightCheckedFocus: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'right',
    state: 'focus',
  },
};

export const WithLabelRightDisabled: Story = {
  args: {
    checked: false,
    label: 'Label',
    direction: 'right',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelRightCheckedDisabled: Story = {
  args: {
    checked: true,
    label: 'Label',
    direction: 'right',
    state: 'disabled',
    disabled: true,
  },
};

// Switch with Label and Hint (Left direction)
export const WithLabelAndHintLeft: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
  },
};

export const WithLabelAndHintLeftChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
  },
};

export const WithLabelAndHintLeftHover: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'hover',
  },
};

export const WithLabelAndHintLeftCheckedHover: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'hover',
  },
};

export const WithLabelAndHintLeftFocus: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'focus',
  },
};

export const WithLabelAndHintLeftCheckedFocus: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'focus',
  },
};

export const WithLabelAndHintLeftDisabled: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelAndHintLeftCheckedDisabled: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'left',
    state: 'disabled',
    disabled: true,
  },
};

// Switch with Label and Hint (Right direction)
export const WithLabelAndHintRight: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
  },
};

export const WithLabelAndHintRightChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
  },
};

export const WithLabelAndHintRightHover: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'hover',
  },
};

export const WithLabelAndHintRightCheckedHover: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'hover',
  },
};

export const WithLabelAndHintRightFocus: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'focus',
  },
};

export const WithLabelAndHintRightCheckedFocus: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'focus',
  },
};

export const WithLabelAndHintRightDisabled: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelAndHintRightCheckedDisabled: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    direction: 'right',
    state: 'disabled',
    disabled: true,
  },
};

// Switch with Required Label
export const WithRequiredLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
    required: true,
    direction: 'left',
  },
};

export const WithRequiredLabelAndHint: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    required: true,
    direction: 'left',
  },
};

// Switch with Optional Label and Tooltip
export const WithOptionalLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
    direction: 'left',
  },
};

export const WithOptionalLabelAndTooltip: Story = {
  args: {
    checked: false,
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
    showTooltip: true,
    tooltipText: 'Prototype',
    direction: 'left',
  },
};

export const WithOptionalLabelAndHint: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    optional: true,
    optionalText: '(Optional)',
    direction: 'left',
  },
};

export const WithOptionalLabelHintAndTooltip: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    optional: true,
    optionalText: '(Optional)',
    showTooltip: true,
    tooltipText: 'Prototype',
    direction: 'left',
  },
};

// Sizes
export const Small: Story = {
  args: {
    checked: false,
    label: 'Label',
    size: 'sm',
    direction: 'left',
  },
};

export const ExtraSmall: Story = {
  args: {
    checked: false,
    label: 'Label',
    size: 'xs',
    direction: 'left',
  },
};

