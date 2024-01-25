"use client";
import { useEffect, useState } from "react";

type queryProps = string;

export const useMediaQuery = (query: queryProps) => {
  const [match, setMath] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== match) {
      setMath(media.matches);
    }

    const listener = () => {
      setMath(media.matches);
    };

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [match, query]);

  return match;
};
