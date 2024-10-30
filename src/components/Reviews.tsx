const reviews = [
    {
        id: 1,
        name: "Alice Smith",
        review: "I love this service! It has been a game-changer for me and my family.",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        rating: 5
    },
    {
        id: 2,
        name: "John Doe",
        review: "A wonderful experience, I highly recommend it to everyone!",
        avatar: "https://randomuser.me/api/portraits/men/2.jpg",
        rating: 4
    },
    {
        id: 3,
        name: "Emily Clark",
        review: "Friendly staff and top-notch quality. I'll definitely return!",
        avatar: "https://randomuser.me/api/portraits/women/3.jpg",
        rating: 5
    },
];

export const Reviews = () => {
    return (
        <div className="px-6 py-16 bg-gray-50">
            <h2 className="mb-12 text-3xl font-bold text-center">What Our Customers Say</h2>
            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <img
                            src={review.avatar}
                            alt={`${review.name} avatar`}
                            className="w-16 h-16 mb-4 border-2 border-blue-200 rounded-full"
                        />
                        <h3 className="text-lg font-semibold">{review.name}</h3>
                        <div className="flex mb-4">
                            {Array.from({ length: review.rating }, (_, i) => (
                                <span key={i} className="text-yellow-400">★</span>
                            ))}
                            {Array.from({ length: 5 - review.rating }, (_, i) => (
                                <span key={i} className="text-gray-300">★</span>
                            ))}
                        </div>
                        <p className="text-gray-600">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
