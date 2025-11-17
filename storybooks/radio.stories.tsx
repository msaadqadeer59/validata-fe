import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Radio } from '../components/radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
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
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base Radio (icon only) variants
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
    state: 'disabled',
    disabled: true,
  },
};

export const BaseDisabledChecked: Story = {
  args: {
    checked: true,
    state: 'disabled',
    disabled: true,
  },
};

// Radio with Label
export const WithLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
  },
};

export const WithLabelChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
  },
};

export const WithLabelHoverUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    state: 'hover',
  },
};

export const WithLabelHoverChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    state: 'hover',
  },
};

export const WithLabelFocusUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    state: 'focus',
  },
};

export const WithLabelFocusChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    state: 'focus',
  },
};

export const WithLabelDisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelDisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    state: 'disabled',
    disabled: true,
  },
};

// Radio with Label and Hint
export const WithLabelAndHint: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
  },
};

export const WithLabelAndHintChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
  },
};

export const WithLabelAndHintHoverUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'hover',
  },
};

export const WithLabelAndHintHoverChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'hover',
  },
};

export const WithLabelAndHintFocusUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'focus',
  },
};

export const WithLabelAndHintFocusChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'focus',
  },
};

export const WithLabelAndHintDisabledUnchecked: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'disabled',
    disabled: true,
  },
};

export const WithLabelAndHintDisabledChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    state: 'disabled',
    disabled: true,
  },
};

// Radio with Required Label
export const WithRequiredLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
    required: true,
  },
};

export const WithRequiredLabelChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    required: true,
  },
};

export const WithRequiredLabelAndHint: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    required: true,
  },
};

export const WithRequiredLabelAndHintChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    required: true,
  },
};

// Radio with Optional Label and Tooltip
export const WithOptionalLabel: Story = {
  args: {
    checked: false,
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
  },
};

export const WithOptionalLabelChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
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
  },
};

export const WithOptionalLabelAndTooltipChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
    showTooltip: true,
    tooltipText: 'Prototype',
  },
};

export const WithOptionalLabelAndHint: Story = {
  args: {
    checked: false,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    optional: true,
    optionalText: '(Optional)',
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
  },
};

export const WithOptionalLabelHintAndTooltipChecked: Story = {
  args: {
    checked: true,
    label: 'Label',
    hint: 'This is a hint text to help user.',
    optional: true,
    optionalText: '(Optional)',
    showTooltip: true,
    tooltipText: 'Prototype',
  },
};

// Radio Group Example
export const RadioGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio name="option" value="option1" label="Option 1" checked={false} />
      <Radio name="option" value="option2" label="Option 2" checked={true} />
      <Radio name="option" value="option3" label="Option 3" checked={false} />
    </div>
  ),
};

export const RadioGroupWithHints: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Radio name="option" value="option1" label="Option 1" hint="This is option 1" checked={false} />
      <Radio name="option" value="option2" label="Option 2" hint="This is option 2" checked={true} />
      <Radio name="option" value="option3" label="Option 3" hint="This is option 3" checked={false} />
    </div>
  ),
};

