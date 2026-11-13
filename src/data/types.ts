import type { IconName } from "@/components/icons";

/**
 * Text values may contain `[bracketed]` segments. These are facts still to be
 * supplied by the client and render as a dashed "placeholder" chip.
 */
export type Rich = string;

export type FeatureItem = { icon: IconName; title: string; text: Rich };
export type PackingItem = { label: string; value: Rich };
export type RelatedItem = { slug: string; title: string; text: string; icon: IconName };
export type StepItem = { title: string; text: Rich };

export type Block =
  | { type: "features"; min?: number; items: FeatureItem[] }
  | {
      type: "table";
      title: string;
      columns: string[];
      rows: Rich[][];
      minWidth?: number;
      note?: Rich;
    }
  | { type: "packing"; items: PackingItem[] }
  | { type: "related"; min?: number; items: RelatedItem[] }
  | { type: "steps"; title: string; items: StepItem[] };

export type QuoteField = {
  id: string;
  label: string;
  type?: "text" | "select" | "email" | "tel";
  placeholder?: string;
  options?: string[];
};

export type QuoteFieldRow = QuoteField | { grid: QuoteField[] };

export type ProductPage = {
  slug: string;
  /** Short name used in breadcrumbs, menus and the catalogue */
  name: string;
  title: string;
  metaTitle?: string;
  lead: string;
  standard?: Rich;
  blocks: Block[];
  quote: { intro: string; fields: QuoteFieldRow[] };
};
