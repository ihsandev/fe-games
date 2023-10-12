"use client";

import React, { useState } from "react";
import CardPost from "./ui/CardPost";
import { useQuery } from "@tanstack/react-query";

const categories = [
  "Semua Category",
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
];

export default function Content() {
  const [category, setCategory] = useState("");
  const [queries, setQueries] = useState("");

  const getGames = async () => {
    const res = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games${queries}`,
      {
        headers: {
          "X-RapidAPI-Key":
            "6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    return data;
  };

  const { data: games, isLoading } = useQuery({
    queryKey: ["games.fetch", category],
    queryFn: async () => {
      return await getGames();
    },
  });

  return (
    <section className="py-10 bg-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-11">
          <h3>Game Terbaru</h3>
          <select
            className="capitalize py-2 rounded-md border-2 border-gray-300"
            onChange={(e) => {
              if (e.target.value === "Semua Category") {
                setQueries("");
              } else {
                setQueries(`?category=${e.target.value}`);
              }
              setCategory(e.target.value);
            }}
            value={category}
            placeholder="Filter by Category"
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {isLoading ? (
          <div className="text-center text-3xl">Loading data...</div>
        ) : (
          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-8">
            {games?.map((game: any) => (
              <CardPost
                key={game.id}
                title={game.title}
                description={game.short_description}
                thumbnail={game.thumbnail}
                platform={game.platform}
                date={game.release_date}
                genre={game.genre}
              />
            ))}
          </article>
        )}
      </div>
    </section>
  );
}
