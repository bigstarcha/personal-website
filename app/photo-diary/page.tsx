import React from "react";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PhotoDiary from "@/components/PhotoDiary";

export const metadata: Metadata = {
  title: "Photo Diary",
};

function PhotoDiaryPage() {
  return (
    <>
      <Navigation />
      <PhotoDiary />
    </>
  );
}

export default PhotoDiaryPage;
