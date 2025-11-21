import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Typography utilities from tailwind.config.js
 * 
 * This storybook displays all typography classes with their rendered output.
 * Use these classes when implementing components from Figma.
 */

// Typography configuration mapping
const typographyConfig = {
  'text-9xl': { fontSize: '128px', lineHeight: '128px', letterSpacing: '-2.56px', letterSpacingPercent: '-2.00%' },
  'text-8xl': { fontSize: '96px', lineHeight: '96px', letterSpacing: '-1.92px', letterSpacingPercent: '-2.00%' },
  'text-7xl': { fontSize: '72px', lineHeight: '72px', letterSpacing: '-1.44px', letterSpacingPercent: '-2.00%' },
  'text-6xl': { fontSize: '60px', lineHeight: '60px', letterSpacing: '-1.2px', letterSpacingPercent: '-2.00%' },
  'text-5xl': { fontSize: '48px', lineHeight: '48px', letterSpacing: '-0.96px', letterSpacingPercent: '-2.00%' },
  'text-4xl': { fontSize: '36px', lineHeight: '40px', letterSpacing: '-0.72px', letterSpacingPercent: '-2.00%' },
  'text-3xl': { fontSize: '30px', lineHeight: '32px', letterSpacing: '-0.6px', letterSpacingPercent: '-2.00%' },
  'text-2xl': { fontSize: '24px', lineHeight: '36px', letterSpacing: '-0.48px', letterSpacingPercent: '-2.00%' },
  'text-xl': { fontSize: '20px', lineHeight: '28px', letterSpacing: '-0.4px', letterSpacingPercent: '-2.00%' },
  'text-lg': { fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.36px', letterSpacingPercent: '-2.00%' },
  'text-base': { fontSize: '16px', lineHeight: '24px', letterSpacing: '-0.32px', letterSpacingPercent: '-2.00%' },
  'text-sm': { fontSize: '14px', lineHeight: '20px', letterSpacing: '-0.28px', letterSpacingPercent: '-2.00%' },
  'text-xs': { fontSize: '12px', lineHeight: '16px', letterSpacing: '-0.24px', letterSpacingPercent: '-2.00%' },
};

const fontWeightMap = {
  'font-normal': { name: 'Regular', weight: '400' },
  'font-medium': { name: 'Medium', weight: '500' },
  'font-semibold': { name: 'Semi Bold', weight: '600' },
  'font-bold': { name: 'Bold', weight: '700' },
};

// Generate all typography variants
const generateTypographyVariants = () => {
  const variants: Array<{
    className: string;
    size: string;
    weight: string;
    config: typeof typographyConfig[keyof typeof typographyConfig];
    weightInfo: typeof fontWeightMap[keyof typeof fontWeightMap];
  }> = [];

  Object.entries(typographyConfig).forEach(([size, config]) => {
    Object.entries(fontWeightMap).forEach(([weight, weightInfo]) => {
      variants.push({
        className: `${size} leading-none ${weight} tracking-tight`,
        size,
        weight,
        config,
        weightInfo,
      });
    });
  });

  return variants;
};

const allVariants = generateTypographyVariants();

// Group variants by size
const groupedVariants = allVariants.reduce((acc, variant) => {
  if (!acc[variant.size]) {
    acc[variant.size] = [];
  }
  acc[variant.size].push(variant);
  return acc;
}, {} as Record<string, typeof allVariants>);

export const AllTypography: Story = {
  render: () => (
    <div className="bg-white flex flex-col gap-8 w-full p-8">
      {Object.entries(groupedVariants).map(([size, variants], sizeIndex) => (
        <div key={size} className="flex flex-col gap-4">
          {/* Size header */}
          <div>
            <h2 className="font-medium text-[36px] text-black mb-2">{size}</h2>
            <div className="h-0 w-full border-t border-gray-200"></div>
          </div>

          {/* Variants for this size */}
          <div className="flex flex-col gap-6">
            {variants.map((variant) => {
              const lineHeightValue = parseFloat(variant.config.lineHeight);
              const fontSizeValue = parseFloat(variant.config.fontSize);
              const lineHeightFormatted = lineHeightValue.toFixed(2);
              
              return (
                <div
                  key={`${variant.size}-${variant.weight}`}
                  className="flex flex-col gap-2"
                >
                  {/* Class name and details */}
                  <div className="flex items-center gap-4">
                    <p className="font-medium text-[18px] text-blue-600 min-w-[200px]">
                      {variant.className}
                    </p>
                    <p className="text-[14px] text-gray-600">
                      Inter - {variant.weightInfo.name} • {fontSizeValue}px / {lineHeightFormatted}px / {variant.config.letterSpacingPercent}
                    </p>
                  </div>

                  {/* Rendered text */}
                  <p className={variant.className + ' text-black'}>
                    Validate Everything
                  </p>
                </div>
              );
            })}
          </div>

          {/* Divider between size groups */}
          {sizeIndex < Object.keys(groupedVariants).length - 1 && (
            <div className="h-0 w-full border-t border-gray-200 mt-4"></div>
          )}
        </div>
      ))}
    </div>
  ),
};

// Individual size stories for easier navigation
export const Text9xl: Story = {
  render: () => renderSizeGroup('text-9xl', groupedVariants['text-9xl']),
};

export const Text8xl: Story = {
  render: () => renderSizeGroup('text-8xl', groupedVariants['text-8xl']),
};

export const Text7xl: Story = {
  render: () => renderSizeGroup('text-7xl', groupedVariants['text-7xl']),
};

export const Text6xl: Story = {
  render: () => renderSizeGroup('text-6xl', groupedVariants['text-6xl']),
};

export const Text5xl: Story = {
  render: () => renderSizeGroup('text-5xl', groupedVariants['text-5xl']),
};

export const Text4xl: Story = {
  render: () => renderSizeGroup('text-4xl', groupedVariants['text-4xl']),
};

export const Text3xl: Story = {
  render: () => renderSizeGroup('text-3xl', groupedVariants['text-3xl']),
};

export const Text2xl: Story = {
  render: () => renderSizeGroup('text-2xl', groupedVariants['text-2xl']),
};

export const TextXl: Story = {
  render: () => renderSizeGroup('text-xl', groupedVariants['text-xl']),
};

export const TextLg: Story = {
  render: () => renderSizeGroup('text-lg', groupedVariants['text-lg']),
};

export const TextBase: Story = {
  render: () => renderSizeGroup('text-base', groupedVariants['text-base']),
};

export const TextSm: Story = {
  render: () => renderSizeGroup('text-sm', groupedVariants['text-sm']),
};

export const TextXs: Story = {
  render: () => renderSizeGroup('text-xs', groupedVariants['text-xs']),
};

// Helper function to render a size group
function renderSizeGroup(size: string, variants: typeof allVariants) {
  return (
    <div className="bg-white flex flex-col gap-6 w-full p-8">
      <div>
        <h2 className="font-medium text-[36px] text-black mb-2">{size}</h2>
        <div className="h-0 w-full border-t border-gray-200"></div>
      </div>

      <div className="flex flex-col gap-6">
        {variants.map((variant) => {
          const lineHeightValue = parseFloat(variant.config.lineHeight);
          const fontSizeValue = parseFloat(variant.config.fontSize);
          const lineHeightFormatted = lineHeightValue.toFixed(2);
          
          return (
            <div
              key={`${variant.size}-${variant.weight}`}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <p className="font-medium text-[18px] text-blue-600 min-w-[200px]">
                  {variant.className}
                </p>
                <p className="text-[14px] text-gray-600">
                  Inter - {variant.weightInfo.name} • {fontSizeValue}px / {lineHeightFormatted}px / {variant.config.letterSpacingPercent}
                </p>
              </div>

              <p className={variant.className + ' text-black'}>
                Validate Everything
              </p>
            </div>
          );
        })}
      </div>

      <div className="h-0 w-full border-t border-gray-200 mt-4"></div>
    </div>
  );
}

