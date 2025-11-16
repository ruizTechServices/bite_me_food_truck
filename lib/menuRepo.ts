import { createClient } from "@/lib/supabase/server";

export type MenuItem = {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price_cents: number;
  combo_price_cents: number | null;
};

export type MenuSection = {
  id: number;
  name: string;
  slug: string;
  items: MenuItem[];
};

type MenuCategoryRow = {
  id: number;
  name: string;
  slug: string;
  sort_order: number;
  menu_items: {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    price_cents: number;
    combo_price_cents: number | null;
    sort_order: number;
    active: boolean;
  }[];
};

export async function getFullMenu(): Promise<MenuSection[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("menu_categories")
    .select(
      `
        id,
        name,
        slug,
        sort_order,
        menu_items (
          id,
          name,
          slug,
          description,
          price_cents,
          combo_price_cents,
          sort_order,
          active
        )
      `,
    )
    .order("sort_order", { ascending: true })
    .order("sort_order", { foreignTable: "menu_items", ascending: true });

  if (error) {
    console.error("getFullMenu error", error);
    throw error;
  }

  const rows = (data ?? []) as MenuCategoryRow[];

  return rows.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    items: (category.menu_items ?? [])
      .filter((item) => item.active)
      .map((item) => ({
        id: item.id,
        name: item.name,
        slug: item.slug,
        description: item.description,
        price_cents: item.price_cents,
        combo_price_cents: item.combo_price_cents,
      })),
  }));
}
