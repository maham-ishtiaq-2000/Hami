module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode : "class",
  theme: {
    extend: {
      colors: {
        navy: '#1f1d2a', // Dark Navy Colour
        pink : '#FA8072',
        slightlyDarkPink : '#C8665B',
        lightNavy : '#262835',
        lighterNavy : '#2e303d',
        platinum : '#FFFFFF',
        lightRed : '#4c353a',
        red : "#352528",
        offWhite : "#f0f0f0",
        lightestRed : "#f4deda"
      },  
      borderWidth: {
        '0.5': '0.5px',
      },
      width: {
        '60p': '65%',
        '20p': '20%',
        '400' : '40%',
        '50p' : '50%',
        '90p' : '90%'
      },
      height: {
        '90screen': '93.5vh',
      },
      backgroundColor: ['checked'],   
    },
  },
  plugins: [],
}
