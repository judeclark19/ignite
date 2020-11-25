//Base URL
const base_url = "https://api.rawg.io/api/";

//Today's date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const todaysDate = `${currentYear}-${currentMonth}-${currentDay}`;
const oneYearAgo = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const oneYearFromNow = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?dates=${oneYearAgo},${todaysDate}&ordering=-rating&page_size=12`;

export const popularGamesURL = () => {
  return `${base_url}${popular_games}`;
};

//Upcoming Games
const upcoming_games = `games?dates=${todaysDate},${oneYearFromNow}&ordering=-added&page_size=12`;

export const upcomingGamesURL = () => {
  return `${base_url}${upcoming_games}`;
};

//New Games
const new_games = `games?dates=${oneYearAgo},${todaysDate}&ordering=-released&page_size=12`;

export const newGamesURL = () => {
  return `${base_url}${new_games}`;
};

//Game details
export const gameDetailsURL = (gameId) => {
  return `${base_url}games/${gameId}`;
};

//Gameplay Screenshots
export const screenshotsURL = (gameId) => {
  return `${base_url}games/${gameId}/screenshots`;
};
