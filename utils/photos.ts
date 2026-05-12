import type { StaticImageData } from "next/image";

// I can always change these pictures later.
import beachSunset from "@/public/assets/beach-sunset.jpeg";
import busan from "@/public/assets/busan.jpeg";
import cherryBlossom from "@/public/assets/cherry-blossom.jpg";
import dumboTim from "@/public/assets/dumbo-tim.jpeg";
import lakeAnna from "@/public/assets/lake-anna.jpg";
import linkin from "@/public/assets/linkin.jpeg";
import manado from "@/public/assets/manado.jpeg";
import mokpo from "@/public/assets/mokpo.jpeg";
import niagaraFalls from "@/public/assets/niagara-falls.jpeg";
import paris from "@/public/assets/paris.jpeg";
import pike from "@/public/assets/pike.jpeg";
import rainierTim from "@/public/assets/rainier-tim.jpeg";
import rainier from "@/public/assets/rainier.jpeg";
import skiTrip from "@/public/assets/ski-trip.jpeg";
import starfieldLibrary from "@/public/assets/starfield-library.jpg";
import summerCruise from "@/public/assets/summer-cruise.jpeg";
import tim from "@/public/assets/tim.jpg";
import venice from "@/public/assets/venice.jpeg";

type Photo = {
  src: StaticImageData;
  alt: string;
};

export const photos: Photo[] = [
  {
    src: beachSunset,
    alt: "Beach Sunset",
  },
  {
    src: busan,
    alt: "Busan",
  },
  {
    src: cherryBlossom,
    alt: "Cherry Blossom",
  },
  {
    src: dumboTim,
    alt: "Dumbo Tim",
  },
  {
    src: lakeAnna,
    alt: "Lake Anna",
  },
  {
    src: linkin,
    alt: "Linkin",
  },
  {
    src: manado,
    alt: "Manado",
  },
  {
    src: mokpo,
    alt: "Mokpo",
  },
  {
    src: niagaraFalls,
    alt: "Niagara Falls",
  },
  {
    src: paris,
    alt: "Paris",
  },
  {
    src: pike,
    alt: "Pike Place Market",
  },
  {
    src: rainierTim,
    alt: "Rainier Tim",
  },
  {
    src: rainier,
    alt: "Rainier",
  },
  {
    src: skiTrip,
    alt: "Ski Trip",
  },
  {
    src: starfieldLibrary,
    alt: "Starfield Library",
  },
  {
    src: summerCruise,
    alt: "Summer Cruise",
  },
  {
    src: tim,
    alt: "Tim",
  },
  {
    src: venice,
    alt: "Venice",
  },
];
