import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiYoutube, FiInstagram, FiTwitter } from "react-icons/fi";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-2">
        <figure>
          <Image width={40} height={40} src="/brand_logo.png" alt="logo" />
        </figure>
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <Link href="https://www.youtube.com" passHref target="_blank">
                <FiYoutube />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" passHref target="_blank">
                <FiTwitter />
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com" passHref target="_blank">
                <FiInstagram />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
