"use client";
import { useSearchParams } from "next/navigation";
import RaceSelect from "../components/mainContent/RaceSelect";
import CardList from "../components/mainContent/CardList";

export default function Main() {
  const searchParams = useSearchParams();
  const race = searchParams.get("race");
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="flex gap-4 flex-col items-center pb-12">
        <RaceSelect />
        <CardList race={race} />
      </div>
    </main>
  );
}
