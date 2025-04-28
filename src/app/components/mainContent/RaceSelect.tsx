"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchCardRaces } from "../../assets/utils/fetchCardData";
import { useCallback } from "react";

export default function RaceSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { data: races = [], isLoading } = useQuery({
    queryKey: ["cardRaces"],
    queryFn: fetchCardRaces,
  });

  const currentRace = searchParams.get("race");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleRaceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const race = e.target.value;
    router.push(`${pathname}?${createQueryString("race", race)}`);
  };

  return (
    <div className="w-full max-w-xs mx-auto pt-12">
      <select
        id="race-select"
        className="bg-gray-700 w-full px-4 py-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-md cursor-pointer"
        onChange={handleRaceChange}
        value={currentRace || ""}
        disabled={isLoading}
      >
        <option value="">-- Sélectionner une race --</option>
        {races.map((race: string) => (
          <option key={race} value={race}>
            {race}
          </option>
        ))}
      </select>
    </div>
  );
}
