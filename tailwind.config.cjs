const typography = require('@tailwindcss/typography');

const colours = {
  Spring: ['#69893e', '#92b573', '#a482a3'],
  Summer: ['#BF70B3', '#EBB3DF', '#568A36'],
  Autumn: ['#d62828', '#fcbf49', '#f77f00'],
  Winter: ['#3394b7', '#acccd8', '#d04763']
};

function getSeason(date = new Date()) {
  let year = date.getFullYear();
  const currentTime = date.getTime();
  const seasons = {
    Spring: new Date(Date.UTC(year, 2, 20)).getTime(), // March 20
    Summer: new Date(Date.UTC(year, 5, 21)).getTime(), // June 21
    Autumn: new Date(Date.UTC(year, 8, 23)).getTime(), // September 23
    Winter: new Date(Date.UTC(year, 11, 21)).getTime() // December 21
  };
  if (currentTime >= seasons.Spring && currentTime < seasons.Summer) {
    return 'Spring';
  } else if (currentTime >= seasons.Summer && currentTime < seasons.Autumn) {
    return 'Summer';
  } else if (currentTime >= seasons.Autumn && currentTime < seasons.Winter) {
    return 'Autumn';
  } else {
    return 'Winter';
  }
}

// calculate the current season colours
const currentSeason = getSeason();
const currentSeasonColors = colours[currentSeason];

module.exports = {
  content: [
    './src/**/*.{astro,html,js,md,mdx,ts,tsx}',
    './src/**/**/*.{astro,html,js,md,mdx,ts,tsx}'
  ],
  plugins: [typography],
  currentSeasonColors
};