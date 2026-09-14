import { createContext } from "react";

/**
 * Which slide this is, which one the images show (`active`), and which one the
 * copy shows (`shown`). The defaults render a lone slide as fully shown, so a
 * `hero-slide` outside a slideshow still paints.
 */
export const SlideshowContext = createContext({
  index: 0,
  active: 0,
  shown: 0,
});
