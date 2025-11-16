import { Suspense } from "react";
import MenuSkeleton from "@/components/menu-skeleton";
import { getFullMenu } from "@/lib/menuRepo";

export const revalidate = 60;

function formatPrice(value: number | null) {
  if (value == null) {
    return null;
  }

  return `$${(value / 100).toFixed(2)}`;
}

async function MenuContent() {
  try {
    const sections = await getFullMenu();

    return (
      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.id} className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{section.name}</h2>
              <hr className="mt-2 border-slate-700" />
            </div>
            <ul className="space-y-4">
              {section.items.map((item) => {
                const price = formatPrice(item.price_cents);
                const combo = formatPrice(item.combo_price_cents);

                return (
                  <li
                    key={item.id}
                    className="flex flex-col gap-1 rounded-lg border border-slate-800 bg-neutral-900 p-4 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <div className="text-lg font-medium">{item.name}</div>
                      {item.description ? (
                        <p className="text-sm text-slate-400">{item.description}</p>
                      ) : null}
                    </div>
                    <div className="text-sm text-slate-200 md:text-right">
                      {price ? <div>Solo: {price}</div> : null}
                      {combo ? <div>Combo: {combo}</div> : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    );
  } catch (error) {
    console.error("getFullMenu failed", error);

    return (
      <div className="rounded-lg border border-red-500/40 bg-red-500/10 p-6 text-center text-sm text-red-200">
        We couldn&apos;t load the menu right now. Please refresh in a moment.
      </div>
    );
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight">Bite Me Menu</h1>
          <p className="mt-3 text-sm text-slate-300">
            Straight from Supabase. Prices shown in USD.
          </p>
        </header>
        <Suspense fallback={<MenuSkeleton />}>
          <MenuContent />
        </Suspense>
      </div>
    </main>
  );
}
