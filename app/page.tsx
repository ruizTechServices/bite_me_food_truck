import { Suspense } from "react";
import MenuSkeleton from "@/components/menu-skeleton";
import MenuHeader from "@/components/menu/menu-header";
import MenuSectionBlock from "@/components/menu/menu-section";
import { getFullMenu } from "@/lib/menuRepo";

export const revalidate = 60;

async function MenuContent() {
  try {
    const sections = await getFullMenu();

    return (
      <div className="space-y-12">
        {sections.map((section) => (
          <MenuSectionBlock key={section.id} section={section} />
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
    <section className="space-y-8">
      <MenuHeader />
      <Suspense fallback={<MenuSkeleton />}>
        <MenuContent />
      </Suspense>
    </section>
  );
}
