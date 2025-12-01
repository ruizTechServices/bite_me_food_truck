export default function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-border pt-8 text-center transition-colors">
      <div className="space-y-3">
        <div className="text-sm font-medium text-foreground">
          Bite Me Kitchen & Grill
        </div>
        <div className="text-xs text-muted-foreground">
          Street Food with a <span className="text-brand-gold font-semibold">New York</span> Attitude
        </div>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span>Park Ave, NYC</span>
          <span className="text-primary">•</span>
          <a 
            href="https://instagram.com/biteme" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors"
          >
            @biteme
          </a>
        </div>
        <div className="pt-4 text-[10px] text-muted-foreground/60">
          © {new Date().getFullYear()} Bite Me Food Truck. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
