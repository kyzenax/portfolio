import { ReviewCard } from "@/components/review-card";
import { reviews } from "@/lib/content";

export default function ReviewsPage() {
  return <div className="container-pad py-12"><h1 className="text-3xl font-semibold">Reviews</h1><p className="mt-2 text-lg">Overall rating: <strong>5.0</strong></p><div className="mt-6 grid gap-4 md:grid-cols-3">{reviews.map((r) => <ReviewCard key={r.name} review={r} />)}</div><a href="#" className="mt-6 inline-flex text-brand-700">Leave a review →</a></div>;
}
