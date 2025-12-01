export default function MenuHeader() {
  return (
    <header className="mb-10 text-center">
      <div className="inline-block">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our <span className="text-brand-gold">Menu</span>
        </h1>
        <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Fresh off the truck on Park Ave • Prices in USD
      </p>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-secondary/50 px-4 py-1.5 text-xs text-secondary-foreground">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
        Open Now
      </div>
    </header>
  );
}
