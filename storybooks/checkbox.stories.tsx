import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox } from '../components/checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
    },
    indeterminate: {
      control: 'boolean',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled'],
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
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base Checkbox (icon only) variants
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

export const BaseIndeterminate: Story = {
  args: {
    indeterminate: true,
    state: 'default',
  },
};

export const BaseHoverUnchecked: Story = {
  args: {
    checked: false,
    state: 'hover',
  },
};

export const BaseHoverChecked: Story = {
  args: {
    checked: true,
    state: 'hover',
  },
};

export const BaseFocusUnchecked: Story = {
  args: {
    checked: false,
    state: 'focus',
  },
};

export const BaseFocusChecked: Story = {
  args: {
    checked: true,
    state: 'focus',
  },
};

export const BaseDisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const BaseDisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const BaseDisabledIndeterminate: Story = {
  args: {
    indeterminate: true,
    disabled: true,
  },
};

// Checkbox with Label variants
export const WithLabelUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelHoverUnchecked: Story = {
  args: {
    checked: false,
    state: 'hover',
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelHoverChecked: Story = {
  args: {
    checked: true,
    state: 'hover',
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelFocusUnchecked: Story = {
  args: {
    checked: false,
    state: 'focus',
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelFocusChecked: Story = {
  args: {
    checked: true,
    state: 'focus',
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelDisabledUnchecked: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const WithLabelDisabledChecked: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Label',
    required: true,
    optional: true,
    hint: 'This is a hint text to help user.',
    showTooltip: true,
  },
};

export const SimpleLabel: Story = {
  args: {
    checked: false,
    label: 'Simple checkbox',
  },
};

export const WithHintOnly: Story = {
  args: {
    checked: false,
    hint: 'This is a hint text to help user.',
  },
};

