import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar } from '../components/avatar';

const meta = {
  title: 'Design System/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['12', '16', '24', '32', '40', '72'],
      description: 'Avatar size in pixels',
    },
    radius: {
      control: 'select',
      options: ['rectangle', 'circle'],
      description: 'Avatar border radius style',
    },
    color: {
      control: 'select',
      options: ['blue', 'orange', 'gray', 'green', 'red'],
      description: 'Avatar background color (for letter avatars)',
    },
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    name: {
      control: 'text',
      description: 'Name for letter avatar or alt text',
    },
    border: {
      control: 'boolean',
      description: 'Show border around avatar',
    },
    showTooltip: {
      control: 'boolean',
      description: 'Show tooltip on hover',
    },
    tooltipName: {
      control: 'text',
      description: 'Tooltip name text',
    },
    tooltipRole: {
      control: 'text',
      description: 'Tooltip role/subtitle text',
    },
    maxLetters: {
      control: 'select',
      options: [1, 2],
      description: 'Number of letters to display (1 or 2)',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color (overrides color prop)',
    },
    textColor: {
      control: 'color',
      description: 'Custom text color',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image URLs from Figma
const maherImage = "http://localhost:3845/assets/5b560cc75a7a523f1d9e885b7195a370cc4e0888.png";
const kamilImage = "http://localhost:3845/assets/93910e3597db1357c435e35b48ec4784edf6462c.png";

// ===== SIZES =====
export const Sizes: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-8 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="12" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">12px</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="16" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">16px</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">24px</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="32" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">32px</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="40" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">40px</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="72" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">72px</p>
      </div>
    </div>
  ),
};

// ===== SHAPES =====
export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-8 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">Circle</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="rectangle" name="JD" color="blue" />
        <p className="text-xs text-gray-600">Rectangle</p>
      </div>
    </div>
  ),
};

// ===== COLORS =====
export const Colors: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-8 bg-white">
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="Blue" color="blue" />
        <p className="text-xs text-gray-600">Blue</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="Orange" color="orange" />
        <p className="text-xs text-gray-600">Orange</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="Gray" color="gray" />
        <p className="text-xs text-gray-600">Gray</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="Green" color="green" />
        <p className="text-xs text-gray-600">Green</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="Red" color="red" />
        <p className="text-xs text-gray-600">Red</p>
      </div>
    </div>
  ),
};

// ===== LETTER AVATARS =====
export const SingleLetter: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'John',
    color: 'blue',
    maxLetters: 1,
  },
};

export const TwoLetters: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'John Doe',
    color: 'blue',
    maxLetters: 2,
  },
};

export const TwoLettersSingleWord: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'John',
    color: 'blue',
    maxLetters: 2,
  },
};

// ===== IMAGE AVATARS =====
export const ImageAvatar: Story = {
  args: {
    size: '24',
    radius: 'circle',
    src: maherImage,
    alt: 'Maher Jilani',
    name: 'Maher Jilani',
  },
};

export const ImageAvatarLarge: Story = {
  args: {
    size: '72',
    radius: 'circle',
    src: maherImage,
    alt: 'Maher Jilani',
    name: 'Maher Jilani',
  },
};

// ===== BORDERS =====
export const Borders: Story = {
  render: () => (
    <div className="flex gap-4 items-center p-8 bg-gray-800">
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="JD" color="blue" border={false} />
        <p className="text-xs text-white">No Border</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar size="24" radius="circle" name="JD" color="blue" border={true} />
        <p className="text-xs text-white">White Border</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar 
          size="24" 
          radius="circle" 
          name="JD" 
          color="blue" 
          border={{
            width: '2px',
            style: 'solid',
            color: '#FF6900',
          }} 
        />
        <p className="text-xs text-white">Orange Border</p>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <Avatar 
          size="24" 
          radius="circle" 
          name="JD" 
          color="blue" 
          border={{
            width: '2px',
            style: 'dashed',
            color: '#5006D9',
          }} 
        />
        <p className="text-xs text-white">Dashed Border</p>
      </div>
    </div>
  ),
};

// ===== TOOLTIPS =====
export const WithTooltip: Story = {
  args: {
    size: '24',
    radius: 'circle',
    src: maherImage,
    name: 'Maher Jilani',
    border: true,
    showTooltip: true,
    tooltipName: 'Maher Jilani',
    tooltipRole: 'View profile',
  },
};

export const WithTooltipCustomRole: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'John Doe',
    color: 'blue',
    border: true,
    showTooltip: true,
    tooltipName: 'John Doe',
    tooltipRole: 'Product Designer',
  },
};

export const WithTooltipNoRole: Story = {
  args: {
    size: '24',
    radius: 'circle',
    name: 'Jane Smith',
    color: 'green',
    border: true,
    showTooltip: true,
    tooltipName: 'Jane Smith',
  },
};



// ===== LETTER VARIATIONS =====
export const LetterVariations: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-white">
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2 items-center">
          <Avatar size="24" radius="circle" name="John" color="blue" maxLetters={1} />
          <p className="text-xs text-gray-600">Single Letter</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Avatar size="24" radius="circle" name="John Doe" color="blue" maxLetters={2} />
          <p className="text-xs text-gray-600">Two Letters (Two Words)</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Avatar size="24" radius="circle" name="John" color="blue" maxLetters={2} />
          <p className="text-xs text-gray-600">Two Letters (One Word)</p>
        </div>
      </div>
    </div>
  ),
};

// ===== REAL WORLD EXAMPLES =====
export const InviteSection: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-white">
      <div className="bg-white border border-[#dfe1e6] border-solid box-border content-stretch flex gap-px items-center relative rounded-[10px] shrink-0">
        <div className="bg-white box-border content-stretch flex h-[32px] items-center pl-[4px] pr-[8px] py-[2px] relative rounded-bl-[10px] rounded-tl-[10px] shrink-0">
          <Avatar
            src={maherImage}
            name="Maher Jilani"
            size="24"
            radius="circle"
            border={true}
            showTooltip={true}
            tooltipName="Maher Jilani"
            tooltipRole="View profile"
            className="mr-[-4px] relative shrink-0"
          />
          <Avatar
            src={kamilImage}
            name="Kamil Mitek"
            size="24"
            radius="circle"
            border={true}
            showTooltip={true}
            tooltipName="Kamil Mitek"
            tooltipRole="View profile"
            className="mr-[-4px] relative shrink-0"
          />
        </div>
        <button className="border-l border-[#dfe1e6] border-solid relative rounded-br-[10px] rounded-tr-[10px] size-full cursor-pointer">
          <div className="box-border content-stretch flex items-center justify-center overflow-clip px-[8px] py-[4px] rounded-[inherit] size-full">
            <p className="font-sans font-medium leading-[20px] not-italic relative shrink-0 text-[#060510] text-[14px] text-nowrap tracking-[-0.28px] whitespace-pre">
              Invite
            </p>
          </div>
        </button>
      </div>
    </div>
  ),
};
