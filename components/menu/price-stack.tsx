type PriceStackProps = {
  solo: string | null;
  combo: string | null;
};

export default function PriceStack({ solo, combo }: PriceStackProps) {
  return (
    <div className="space-y-1 text-sm text-slate-200 md:text-right">
      {solo ? <div className="font-semibold">Solo · {solo}</div> : null}
      {combo ? <div className="text-slate-300">Combo · {combo}</div> : null}
    </div>
  );
}
