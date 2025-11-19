import PriceStack from "@/components/menu/price-stack";
import type { MenuSection } from "@/lib/menuRepo";

function formatPrice(value: number | null) {
  if (value == null) return null;
  return `$${(value / 100).toFixed(2)}`;
}

type MenuSectionProps = {
  section: MenuSection;
};

export default function MenuSectionBlock({ section }: MenuSectionProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400/80">Category</p>
        <h2 className="text-2xl font-semibold tracking-tight text-white">{section.name}</h2>
        <hr className="border-slate-800" />
      </div>
      <ul className="space-y-3">
        {section.items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col gap-3 rounded-xl border border-slate-800/80 bg-neutral-900/70 p-4 shadow-lg shadow-black/10 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <div className="text-lg font-semibold text-white">{item.name}</div>
              {item.description ? (
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              ) : null}
            </div>
            <PriceStack
              solo={formatPrice(item.price_cents)}
              combo={formatPrice(item.combo_price_cents)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
