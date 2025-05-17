module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./contexts/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    'w-12',
    'h-12',
    'max-w-md',
    'rounded-lg',
    'shadow-lg',
    'max-h-5',
    'max-w-5',
    'max-h-4',
    'max-w-4',
    'max-w-[3rem]',
    'max-h-[3rem]',
    'w-full',
    'h-full',
    'text-blue-600',
    'bg-white',
    'rounded-full',
    'flex',
    'items-center',
    'justify-center'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
