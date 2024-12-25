/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "xs": "480px"
      },
      colors: {
        "c1": "#181D27",  //blue-gray 
        "c2": "#414651",  //grayish-blue 
        "c3": "#175CD3",  //vibrant blue 
        "c4": "#081735",  //Deep Ocean Blue 
        "c5": "#171717",  //black shade of gray 
        "c6": "#9D90FA",  //light lavender 
        "c7": "#0049C6",  //Electric Indigo 
        "c8": "#818181",  //medium gray 
        "c9": "#081735",



        "bg1": '#FFFFFF', //white
        "bg2": '#1570EF', //shade of blue
        "bg3": '#EFF8FF', //soft blue 
        "bg4": '#FAFAFA', //Whisper White 
        "bg5": '#F5F5F5', //very light gray 

        
        "br1": "#E9EAEB", //#E9EAEB
        "br2": "#D5D7DA",//cool gray
        "br3": "#B2DDFF", //light blue
        "br4": "#D8DAE5", //Mistful Gray
        "br5": "#E6E8F0", //Lavender Haze


        "sd": "#08173529" //very dark shade of blue 
        
      }
    },
  },
  plugins: [],
}

