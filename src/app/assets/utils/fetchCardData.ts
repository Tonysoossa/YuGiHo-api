
import { Card } from '../../types/card';
export const fetchCardData = async (race?: string) => {
  try {
    let url = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
    if (race && race !== "all") {
      url += `?race=${encodeURIComponent(race)}`;
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
};

const VALID_RACES = [
  "Aqua", "Beast", "Beast-Warrior", "Cyberse", "Dinosaur", "Divine-Beast",
  "Dragon", "Fairy", "Fiend", "Fish", "Insect", "Machine", "Plant", "Psychic",
  "Pyro", "Reptile", "Rock", "Sea Serpent", "Spellcaster", "Thunder", "Warrior",
  "Winged Beast", "Wyrm", "Zombie", "Creator-God", "Illusion", "Magical Knight"
];

export const fetchCardRaces = async () => {
  try {
    const data = await fetchCardData();
    
    const races = new Set<string>();
    data.data.forEach((card: Card) => {
      if (card.race && VALID_RACES.includes(card.race)) {
        races.add(card.race);
      }
    });
    
    return Array.from(races).sort();
  } catch (error) {
    console.error("Failed to fetch card races:", error);
    return [];
  }
};