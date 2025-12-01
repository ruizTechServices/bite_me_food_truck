import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-card p-8 text-center shadow-brand md:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative z-10">
          <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full ring-4 ring-primary/30">
            <Image
              src="/images/logo_1.jpeg"
              alt="Bite Me Kitchen & Grill"
              width={96}
              height={96}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="text-brand-gold">Bite Me</span>
          </h1>
          <p className="mt-2 text-lg font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Kitchen & Grill
          </p>
          <div className="mt-4 h-1 mx-auto w-24 rounded-full bg-gradient-to-r from-primary via-accent to-primary" />
          <p className="mx-auto mt-6 max-w-md text-muted-foreground">
            Street food with a <span className="font-semibold text-foreground">New York</span> attitude. 
            Find us on Park Ave serving up the best smash burgers, angus burgers, and more.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="tel:+16466014021">(646) 601-4021</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          title="Smash Burgers"
          description="Crispy edges, juicy center. Our signature smash technique creates the perfect burger."
          emoji="🍔"
        />
        <FeatureCard
          title="Angus Beef"
          description="Premium Angus beef in every patty. Taste the difference quality makes."
          emoji="🥩"
        />
        <FeatureCard
          title="NYC Location"
          description="Find us on Park Ave. Follow @biteme for daily location updates."
          emoji="🗽"
        />
      </div>

      {/* CTA Section */}
      <div className="rounded-xl border border-border bg-secondary/30 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Hungry? Check out our full menu and find your next favorite.
        </p>
        <Button asChild variant="link" className="mt-2 text-primary">
          <Link href="/menu">Browse the Menu →</Link>
        </Button>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  emoji,
}: {
  title: string;
  description: string;
  emoji: string;
}) {
  return (
    <div className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-brand">
      <div className="mb-3 text-3xl">{emoji}</div>
      <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
