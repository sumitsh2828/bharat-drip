import type { ProductPage } from "@/data/types";
import dripLaterals from "./drip-laterals";
import drippers from "./drippers";
import filters from "./filters";
import fertigation from "./fertigation";
import valves from "./valves";
import dripFittings from "./drip-fittings";
import miniSprinklers from "./mini-sprinklers";
import sprinklers from "./sprinklers";
import rainGuns from "./rain-guns";
import hdpePipes from "./hdpe-pipes";
import pvcPipes from "./pvc-pipes";
import mulchFilm from "./mulch-film";

export const productPages: ProductPage[] = [
  dripLaterals,
  drippers,
  filters,
  fertigation,
  valves,
  dripFittings,
  miniSprinklers,
  sprinklers,
  rainGuns,
  hdpePipes,
  pvcPipes,
  mulchFilm,
];

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}
