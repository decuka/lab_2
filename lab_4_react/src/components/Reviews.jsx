import { useEffect, useState } from 'react';

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/16/comments')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load reviews');
                }

                return response.json();
            })
            .then((data) => {
                setReviews(data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="col-span-full border-t border-dashed border-slate-300 bg-white px-10 py-8 dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Reviews
            </h2>

            {isLoading && (
                <p className="text-slate-500 dark:text-slate-400">
                    Loading reviews...
                </p>
            )}

            {error && (
                <p className="font-bold text-red-600">
                    {error}
                </p>
            )}

            <div className="grid gap-5">
                {reviews.map((review) => (
                    <article
                        key={review.id}
                        className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 p-5 shadow-sm dark:border-slate-700 dark:border-l-blue-500 dark:bg-slate-800"
                    >
                        <h3 className="mb-2 text-lg font-bold text-slate-800 dark:text-white">
                            {review.name}
                        </h3>

                        <a
                            href={`mailto:${review.email}`}
                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                        >
                            {review.email}
                        </a>

                        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                            {review.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}