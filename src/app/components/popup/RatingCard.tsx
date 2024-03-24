'use client'
import React, { useState, useEffect } from 'react';


type RatingCardProps = {
    handleRating: (rating: number) => void;
};

const RatingCard: React.FC<RatingCardProps> = ({ handleRating }) => {
    const [showRating, setShowRating] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowRating(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleSelectRating = (rating: number) => {
        handleRating(rating);
        setShowRating(false);
    };

    return (
        <>
            {showRating && (
                <div className="fixed bottom-30 right-10 p-4 shadow-lg rounded-lg border-xl border transition-opacity opacity-100">
                    <p className="mb-6 font-semibold">Rate this page:</p>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <button
                                key={rating}
                                onClick={() => handleSelectRating(rating)}
                                className="px-3 py-1  rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none cursor-pointer"
                            >
                                {rating}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default RatingCard;
