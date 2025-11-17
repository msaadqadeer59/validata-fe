import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AvatarInvite } from '../components/avatar-invite';

const meta = {
  title: 'Components/AvatarInvite',
  component: AvatarInvite,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover'],
    },
    src: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
    role: {
      control: 'text',
    },
  },
} satisfies Meta<typeof AvatarInvite>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image URLs from Figma
const maherImage = "http://localhost:3845/assets/5b560cc75a7a523f1d9e885b7195a370cc4e0888.png";
const kamilImage = "http://localhost:3845/assets/93910e3597db1357c435e35b48ec4784edf6462c.png";
const arrowImage = "http://localhost:3845/assets/df925c12d46698150536cb0bdae6c538f027cffb.svg";

export const MaherDefault: Story = {
  args: {
    state: 'default',
    src: maherImage,
    name: 'Maher Jilani',
    role: 'View profile',
    tooltipArrowSrc: arrowImage,
  },
};

export const MaherHover: Story = {
  args: {
    state: 'hover',
    src: maherImage,
    name: 'Maher Jilani',
    role: 'View profile',
    tooltipArrowSrc: arrowImage,
  },
};

export const KamilDefault: Story = {
  args: {
    state: 'default',
    src: kamilImage,
    name: 'Kamil Mitek',
    role: 'View profile',
    tooltipArrowSrc: arrowImage,
  },
};

export const KamilHover: Story = {
  args: {
    state: 'hover',
    src: kamilImage,
    name: 'Kamil Mitek',
    role: 'View profile',
    tooltipArrowSrc: arrowImage,
  },
};

export const WithoutArrow: Story = {
  args: {
    state: 'hover',
    src: maherImage,
    name: 'Maher Jilani',
    role: 'View profile',
  },
};

export const CustomRole: Story = {
  args: {
    state: 'hover',
    src: maherImage,
    name: 'Maher Jilani',
    role: 'Product Designer',
    tooltipArrowSrc: arrowImage,
  },
};

