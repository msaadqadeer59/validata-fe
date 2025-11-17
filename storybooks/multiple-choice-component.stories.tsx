import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { MultipleChoiceComponent } from '../components/multiple-choice-component';
import { SurveyProvider } from '@/contexts/survey-context';

const meta = {
  title: 'Components/MultipleChoiceComponent',
  component: MultipleChoiceComponent,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    questiontype: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <SurveyProvider>
        <Story />
      </SurveyProvider>
    ),
  ],
} satisfies Meta<typeof MultipleChoiceComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'What is your favorite color?',
    description: 'Please select one or more options',
    questiontype: 'multiple-choice',
    required: true,
    options: ['Red', 'Blue', 'Green', 'Yellow'],
  },
};

export const WithLongTitle: Story = {
  args: {
    title: 'Which of the following programming languages have you used in the past year?',
    description: 'Select all that apply',
    questiontype: 'multiple-choice',
    required: false,
    options: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Rust'],
  },
};

export const Required: Story = {
  args: {
    title: 'Required Question',
    questiontype: 'multiple-choice',
    required: true,
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

export const NotRequired: Story = {
  args: {
    title: 'Optional Question',
    questiontype: 'multiple-choice',
    required: false,
    options: ['Option 1', 'Option 2'],
  },
};

