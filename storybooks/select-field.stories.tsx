import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { SelectField } from '../components/select-field';
import { SelectContent, SelectItem } from '../components/ui/select';

const meta = {
  title: 'Components/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'filled', 'disabled', 'error'],
    },
    size: {
      control: 'select',
      options: ['md', 'sm', 'xs'],
    },
    type: {
      control: 'select',
      options: ['basic', 'badges', 'additional-button'],
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
    error: {
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
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Type - Default State
export const BasicDefault: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const BasicHover: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'hover',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const BasicFocus: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'focus',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const BasicFilled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'filled',
    size: 'md',
    value: 'Option 1',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const BasicDisabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'disabled',
    size: 'md',
    disabled: true,
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const BasicError: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'error',
    size: 'md',
    error: 'This is a hint text to help user.',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

// With Label and Hint
export const WithLabelAndHint: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const WithRequiredLabel: Story = {
  args: {
    label: 'Label',
    required: true,
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const WithOptionalLabelAndTooltip: Story = {
  args: {
    label: 'Label',
    optional: true,
    optionalText: '(Optional)',
    showTooltip: true,
    tooltipText: 'Prototype',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'md',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'sm',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const ExtraSmall: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    type: 'basic',
    state: 'default',
    size: 'xs',
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

// With Badges Type
export const WithBadges: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'badges',
    state: 'default',
    size: 'md',
    badges: ['Label', 'Label'],
    onBadgeRemove: (badge) => console.log('Remove badge:', badge),
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const WithBadgesHover: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'badges',
    state: 'hover',
    size: 'md',
    badges: ['Label', 'Label'],
    onBadgeRemove: (badge) => console.log('Remove badge:', badge),
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

// Additional Button Type
export const WithAdditionalButton: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'additional-button',
    state: 'default',
    size: 'md',
    additionalButton: {
      label: 'Publish',
      onClick: () => console.log('Publish clicked'),
    },
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const WithAdditionalButtonHover: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'additional-button',
    state: 'hover',
    size: 'md',
    additionalButton: {
      label: 'Publish',
      onClick: () => console.log('Publish clicked'),
    },
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

export const WithAdditionalButtonFocus: Story = {
  args: {
    label: 'Label',
    hint: 'This is a hint text to help user.',
    placeholder: 'Placeholder',
    type: 'additional-button',
    state: 'focus',
    size: 'md',
    additionalButton: {
      label: 'Publish',
      onClick: () => console.log('Publish clicked'),
    },
  },
  render: (args) => (
    <SelectField {...args}>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </SelectField>
  ),
};

