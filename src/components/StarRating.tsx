import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number;
}

export default function StarRating({ rating }: StarRatingProps) {
  // Assuming rating is out of 5. 
  // We will render 5 stars.
  // If rating is 4, we render 4 filled, 1 empty.
  // For now, simpler integer logic or we can do partials if needed, 
  // but let's stick to full stars for simplicity first as requested "based on rating value".
  
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-500" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
}
