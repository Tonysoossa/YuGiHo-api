"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function CardDetail() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["card", id],
    queryFn: async () => {
      const response = await fetch(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch card details");
      }
      const data = await response.json();
      return data.data[0];
    },
  });

  if (isLoading) {
    return <div className="text-center py-20">Loading card details...</div>;
  }

  if (isError || !data) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500 mb-4">
          Error while loading the card details
        </p>
        <button
          onClick={() => router.back()}
          className="mt-6 px-4 py-2 bg-gray-700 rounded-md hover:shadow-lg hover:shadow-yellow-500/20 max-w-44 flex self-center cursor-pointer"
        >
          &larr; Back
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col ">
      <div className="bg-gray-800 rounded-lg overflow-hidden p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 mx-auto md:mx-0">
            {data.card_images && data.card_images[0] && (
              <div className="relative aspect-[3/4] w-full max-w-xs mx-auto">
                <Image
                  src={data.card_images[0].image_url}
                  alt={data.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-germania mb-2">{data.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <span className="font-bold">Type:</span> {data.type}
                </p>
                <p>
                  <span className="font-bold">Race:</span> {data.race}
                </p>
                {data.attribute && (
                  <p>
                    <span className="font-bold">Attribut:</span>{" "}
                    {data.attribute}
                  </p>
                )}
              </div>

              <div>
                {data.level && (
                  <p>
                    <span className="font-bold">Niveau:</span> {data.level}
                  </p>
                )}
                {data.atk !== undefined && (
                  <p>
                    <span className="font-bold">ATK:</span> {data.atk}
                  </p>
                )}
                {data.def !== undefined && (
                  <p>
                    <span className="font-bold">DEF:</span> {data.def}
                  </p>
                )}
                {data.archetype && (
                  <p>
                    <span className="font-bold">Archétype:</span>{" "}
                    {data.archetype}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="whitespace-pre-line">{data.desc}</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => router.back()}
        className="mt-6 px-4 py-2 bg-gray-700 rounded-md hover:shadow-lg hover:shadow-yellow-500/20 max-w-44 flex self-center cursor-pointer"
      >
        &larr; Back to the list
      </button>
    </div>
  );
}
