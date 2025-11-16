export default function MenuSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="space-y-4">
          <div className="h-6 w-48 rounded bg-slate-800" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((__, itemIdx) => (
              <div
                key={itemIdx}
                className="h-20 rounded-lg border border-slate-800 bg-neutral-900"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
