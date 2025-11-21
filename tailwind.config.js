/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Gray Scale (from Figma Design System)
                gray: {
                    50: '#F7F7F8',   // Background
                    100: '#EDEEF2',  // Hover
                    200: '#DFE1E6',  // Border, Divider
                    300: '#D7D9DE',  // Border, Divider 2
                    400: '#B8B9C5',  // Icon background
                    500: '#9999AD',  // Icon Outline
                    600: '#6A6A7E',  // Support text
                    700: '#4C4C5C',
                    800: '#2F2E3A',
                    900: '#1B1925',
                    950: '#060510',
                },
                // White (Transparent White shades)
                white: {
                    50: 'rgba(255, 255, 255, 0.04)',
                    100: 'rgba(255, 255, 255, 0.08)',
                    200: 'rgba(255, 255, 255, 0.12)',
                    300: 'rgba(255, 255, 255, 0.16)',
                    400: 'rgba(255, 255, 255, 0.24)',
                    500: 'rgba(255, 255, 255, 0.32)',
                    600: 'rgba(255, 255, 255, 0.4)',
                    700: 'rgba(255, 255, 255, 0.56)',
                    800: 'rgba(255, 255, 255, 0.72)',
                    900: 'rgba(255, 255, 255, 0.88)',
                },
                // Dark (Transparent Gray 950 shades)
                dark: {
                    25: 'rgba(6, 5, 16, 0.02)',
                    50: 'rgba(6, 5, 16, 0.04)',
                    100: 'rgba(6, 5, 16, 0.08)',
                    200: 'rgba(6, 5, 16, 0.12)',
                    300: 'rgba(6, 5, 16, 0.16)',
                    400: 'rgba(6, 5, 16, 0.24)',
                    500: 'rgba(6, 5, 16, 0.32)',
                    600: 'rgba(6, 5, 16, 0.4)',
                    700: 'rgba(6, 5, 16, 0.56)',
                    800: 'rgba(6, 5, 16, 0.72)',
                    900: 'rgba(6, 5, 16, 0.88)',
                },
                // Blue Scale (from Figma Design System)
                blue: {
                    50: '#EFF6FF',
                    100: '#DAE7FF',
                    200: '#BEDBFF',
                    300: '#8EC5FF',
                    400: '#50A2FF',
                    500: '#2B7FFF',
                    600: '#155DFC',
                    700: '#1447E6',
                    800: '#193CB8',
                    900: '#1C398E',
                    950: '#162456',
                },
                // Red Scale (from Figma Design System)
                red: {
                    50: '#FFF2F2',
                    100: '#FFE2E2',
                    200: '#FFC9CA',
                    300: '#FFA1A4',
                    400: '#FF626A',
                    500: '#FF283D',
                    600: '#F0001C',
                    700: '#C80016',
                    800: '#A50319',
                    900: '#87161D',
                    950: '#49070B',
                },
                // Orange Scale (from Figma Design System)
                orange: {
                    50: '#FFF7ED',
                    100: '#FFEDD4',
                    200: '#FFD6A7',
                    300: '#FFB86A',
                    400: '#FF8904',
                    500: '#FF6900',
                    600: '#F54900',
                    700: '#CA3500',
                    800: '#9F2D00',
                    900: '#7E2A0C',
                    950: '#441306',
                },
                // Green Scale (from Figma Design System)
                green: {
                    50: '#F0FDF4',
                    100: '#DBFCE7',
                    200: '#B9F8CF',
                    300: '#7BF1A8',
                    400: '#05DF72',
                    500: '#00C950',
                    600: '#00A63E',
                    700: '#008235',
                    800: '#016630',
                    900: '#0D542B',
                    950: '#032E15',
                },
                // Semantic colors mapped to gray scale
                background: '#F7F7F8',      // gray-50
                foreground: '#060510',      // gray-950
                border: '#DFE1E6',          // gray-200
                input: '#DFE1E6',           // gray-200
                muted: '#B8B9C5',           // gray-400
                'muted-foreground': '#6A6A7E', // gray-600
                accent: '#EDEEF2',          // gray-100
                'accent-foreground': '#060510', // gray-950
                // Keep existing semantic colors (will be updated when we extract other colors)
                primary: {
                    DEFAULT: 'oklch(0.205 0 0)',
                    foreground: 'oklch(0.985 0 0)',
                },
                secondary: {
                    DEFAULT: 'oklch(0.97 0 0)',
                    foreground: 'oklch(0.205 0 0)',
                },
                destructive: {
                    DEFAULT: '#F0001C',  // red-600
                    foreground: '#FFFFFF',
                },
                card: {
                    DEFAULT: 'oklch(1 0 0)',
                    foreground: '#060510',
                },
                popover: {
                    DEFAULT: 'oklch(1 0 0)',
                    foreground: '#060510',
                },
                ring: 'oklch(0.708 0 0)',
                chart: {
                    1: 'oklch(0.646 0.222 41.116)',
                    2: 'oklch(0.6 0.118 184.704)',
                    3: 'oklch(0.398 0.07 227.392)',
                    4: 'oklch(0.828 0.189 84.429)',
                    5: 'oklch(0.769 0.188 70.08)',
                },
                sidebar: {
                    DEFAULT: '#FFFFFF',
                    foreground: '#060510',
                    primary: 'oklch(0.205 0 0)',
                    'primary-foreground': '#FFFFFF',
                    accent: '#EDEEF2',
                    'accent-foreground': '#060510',
                    border: '#EDEEF2',
                    ring: 'oklch(0.708 0 0)',
                },
                // Button specific colors - using existing color scale references
                // Border colors: use gray-200 for default, gray-950 for focus, red-600 for destructive focus
                // Background colors: use white for default, gray-50 for hover, gray-900 for dark hover, etc.
                // Text colors: use gray-950 for default text
                // These are referenced via existing color tokens in the component
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                // Button specific radius
                button: '0.625rem', // 10px
                // Checkbox specific radius
                checkbox: '5px',
            },
            // Button specific spacing tokens
            spacing: {
                // Button padding
                'button-padding-top': '6px',
                'button-padding-right': '8px',
                'button-padding-bottom': '6px',
                'button-padding-left': '6px',
                'button-padding-x': '8px',
                'button-padding-y': '6px',
                // Button gap
                'button-gap': '8px',
            },
            // Typography (from Figma Design System)
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            fontSize: {
                // Font sizes from Figma
                '9xl': ['128px', { lineHeight: '128px' }],      // leading-none
                '8xl': ['96px', { lineHeight: '96px' }],        // leading-none
                '7xl': ['72px', { lineHeight: '72px' }],        // leading-none
                '6xl': ['60px', { lineHeight: '60px' }],        // leading-none
                '5xl': ['48px', { lineHeight: '48px' }],        // leading-none
                '4xl': ['36px', { lineHeight: '40px' }],        // leading-10
                '3xl': ['30px', { lineHeight: '32px' }],        // leading-8
                '2xl': ['24px', { lineHeight: '36px' }],        // leading-9
                'xl': ['20px', { lineHeight: '28px' }],         // leading-7
                'lg': ['18px', { lineHeight: '24px' }],         // leading-6
                'base': ['16px', { lineHeight: '24px' }],       // leading-6
                'sm': ['14px', { lineHeight: '20px' }],         // leading-5
                'xs': ['12px', { lineHeight: '16px' }],         // leading-4
            },
            fontWeight: {
                normal: '400',   // Regular
                medium: '500',   // Medium
                semibold: '600', // Semi Bold
                bold: '700',     // Bold
            },
            lineHeight: {
                none: '1',
                tight: '1.25',
                snug: '1.375',
                normal: '1.5',
                relaxed: '1.625',
                loose: '2',
                // Specific line heights from Figma
                4: '16px',   // leading-4
                5: '20px',   // leading-5
                6: '24px',   // leading-6
                7: '28px',   // leading-7
                8: '32px',   // leading-8
                9: '36px',   // leading-9
                10: '40px',  // leading-10
                12: '48px',  // leading-12
                13: '52px',  // leading-13
                14: '56px',  // leading-14
                18: '72px',  // leading-18
                20: '80px',  // leading-20
            },
            letterSpacing: {
                tighter: '-0.05em',
                tight: '-0.02em',  // -2% from Figma
                normal: '0em',
                wide: '0.025em',
                wider: '0.05em',
                widest: '0.1em',
            },
        },
    },
    plugins: [],
}

