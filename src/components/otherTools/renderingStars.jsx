const renderStars = (rating) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={i <= rating ? "#F1C644" : "none"}
        stroke={i <= rating ? "#F1C644" : "#ddd"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`star ${i <= rating ? "filled" : "empty"}`}
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    );
  }

  return <div className="star-container">{stars}</div>;
};

export default renderStars;
