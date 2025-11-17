import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from '../components/avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['12', '16', '24', '32', '40', '72'],
    },
    radius: {
      control: 'select',
      options: ['rectangle', 'circle'],
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
    name: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image URL from Figma
const placeholderImage = "http://localhost:3845/assets/5b560cc75a7a523f1d9e885b7195a370cc4e0888.png";

export const Circle24px: Story = {
  args: {
    size: '24',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle24px: Story = {
  args: {
    size: '24',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Circle12px: Story = {
  args: {
    size: '12',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle12px: Story = {
  args: {
    size: '12',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Circle16px: Story = {
  args: {
    size: '16',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle16px: Story = {
  args: {
    size: '16',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Circle32px: Story = {
  args: {
    size: '32',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle32px: Story = {
  args: {
    size: '32',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Circle40px: Story = {
  args: {
    size: '40',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle40px: Story = {
  args: {
    size: '40',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Circle72px: Story = {
  args: {
    size: '72',
    radius: 'circle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const Rectangle72px: Story = {
  args: {
    size: '72',
    radius: 'rectangle',
    src: placeholderImage,
    alt: 'Maher Jilani',
  },
};

export const WithoutImage: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'Maher Jilani',
  },
};

export const WithoutImageRectangle: Story = {
  args: {
    size: '24',
    radius: 'rectangle',
    name: 'Maher Jilani',
  },
};

