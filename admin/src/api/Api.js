import axios from "axios";

export const options = {
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/matches/v1/recent',
  headers: {
    'X-RapidAPI-Key': 'c1d673c568msh56a675ee747e92ap19eb0ajsn134c0d400b1a',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};