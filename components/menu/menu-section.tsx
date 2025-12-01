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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
          Category
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          {section.name}
        </h2>
        <hr className="border-border" />
      </div>
      <ul className="space-y-3">
        {section.items.map((item) => (
          <li
            key={item.id}
            className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:border-primary/30 hover:shadow-brand md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <div className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                {item.name}
              </div>
              {item.description ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
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
