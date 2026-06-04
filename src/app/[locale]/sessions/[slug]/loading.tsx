export default function SessionLoading() {
  return (
    <div className="space-y-5 pt-2" aria-hidden>
      <div className="h-8 w-3/4 max-w-md animate-pulse rounded-lg bg-brand/10" />
      <div className="h-4 w-48 animate-pulse rounded bg-brand/10" />
      <div className="mt-8 h-40 animate-pulse rounded-2xl border border-border bg-card" />
    </div>
  );
}
