export interface CardImage {
  id: number;
  image_url: string;
  image_url_small: string;
  image_url_cropped?: string;
}

export interface Card {
  id: number;
  name: string;
  type: string;
  desc: string;
  race: string;
  attribute?: string;
  atk?: number;
  def?: number;
  level?: number;
  archetype?: string;
  card_images: CardImage[];
}