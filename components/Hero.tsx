import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="h-[540px] flex items-center justify-center relative bg-gradient-hero">
      <Image fill alt="hero" src="/hero_img.png" className="absolute -z-10" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center text-white max-w-lg flex flex-col gap-6">
          <h1 className="text-[32px]">Pilih Game Favorite Kalian</h1>
          <p className="text-base font-light px-16">
            Shortbread cookie tootsie roll sugar plum cheesecake pudding
            croissant apple pie. Lollipop macaroon lollipop croissant chocolate
            cake croissant fruitcake brownie jelly-o.
          </p>
          <div>
            <button className="bg-blueBase px-3 py-2 rounded-md">
              Sign Up For Free Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
