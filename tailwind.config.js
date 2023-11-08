/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'customregular' : ['opensaucesans', 'sans-serif'],
        'custommedium': ['opensaucesans-medium', 'sans-serif'],
        'custombold': ['opensaucesans-bold', 'sans-serif'],
        'customsemibold': ['opensaucesans-semibold', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
            "primary": "#49DE80",
                    
            "secondary": "#d926a9",
                    
            "accent": "#1fb2a6",
                    
            "neutral": "#2a323c",
                    
            "base-100": "#1d232a",
                    
            "info": "#3abff8",
                    
            "success": "#49DE80",
                    
            "warning": "#fbbd23",
                    
            "error": "#f87272",
            },
          },
        ],
      },
  plugins: [require("daisyui")],
}

