function MovieReviewComment(props) {
    const { movieTitle, starReview, comment } = props.reviewInfo
return(
    <>
        <p>{movieTitle} has earned {starRating(starReview)} and the audience says, "{comment}"</p>
    </>
);
}

function starRating(numberOfStars) {
    let starsReview = [];
    for(let i = 0; i < numberOfStars; i++) {
        starsReview.push("⭐");
    }
    let finalReview = starsReview.join("");
    return finalReview;
}

export default MovieReviewComment