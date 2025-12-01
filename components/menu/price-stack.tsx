type PriceStackProps = {
  solo: string | null;
  combo: string | null;
};

export default function PriceStack({ solo, combo }: PriceStackProps) {
  return (
    <div className="flex flex-col gap-1 text-sm md:items-end">
      {solo ? (
        <div className="inline-flex items-center gap-2">
          <span className="text-muted-foreground">Solo</span>
          <span className="font-bold text-primary">{solo}</span>
        </div>
      ) : null}
      {combo ? (
        <div className="inline-flex items-center gap-2">
          <span className="text-muted-foreground">Combo</span>
          <span className="font-semibold text-brand-orange">{combo}</span>
        </div>
      ) : null}
    </div>
  );
}
