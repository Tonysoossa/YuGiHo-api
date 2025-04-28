"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCardData } from "../../assets/utils/fetchCardData";
import Link from "next/link";
import Image from "next/image";
import { Card } from "../../types/card";

interface CardListProps {
  race: string | null;
}

export default function CardList({ race }: CardListProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["cards", race],
    queryFn: () => fetchCardData(race || undefined),
    enabled: !!race,
  });

  if (!race) {
    return (
      <div className="text-center font-germania text-xl">
        Choose a race to see the list cards
      </div>
    );
  }

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-red-500">Error while fetching</div>;
  }

  const cards = data?.data || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-6 p-4">
      {cards.map((card: Card) => (
        <Link
          href={`/card/${card.id}`}
          key={card.id}
          className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500/20 transition-all hover:-translate-y-1"
        >
          <div className="p-2 flex flex-col items-center">
            {card.card_images && card.card_images[0] ? (
              <div className="relative w-full aspect-[3/4] mb-2">
                <Image
                  src={card.card_images[0].image_url}
                  alt={card.name}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-full aspect-[3/4] bg-gray-700 mb-2 flex items-center justify-center">
                <span>No image</span>
              </div>
            )}
            <h3 className="text-center text-sm font-semibold truncate w-full">
              {card.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
