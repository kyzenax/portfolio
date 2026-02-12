export function ReviewCard({ review }: { review: { name: string; service: string; date: string; rating: number; text: string; reply?: string } }) {
  return (
    <article className="rounded-2xl border p-5">
      <p className="text-amber-500">{"★".repeat(review.rating)}</p>
      <p className="mt-2 text-sm text-slate-700">{review.text}</p>
      <p className="mt-3 text-xs text-slate-500">{review.name} · {review.service} · {review.date}</p>
      {review.reply && <p className="mt-2 rounded-lg bg-brand-50 p-3 text-xs">Owner reply: {review.reply}</p>}
    </article>
  );
}
