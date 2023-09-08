import ReviewsHandler from "./ReviewsHandler.js";

export default class ReviewsView extends ReviewsHandler {
  constructor() {
    super();
    this.update();
  }

  buildReviewHtml({ avatar, name, job, review }) {
    const articleInnerHtml = `
      <div class="img-wrapper">
        <i
          id="img-decoration-quote"
          class="fa-solid fa-quote-right fa-lg"
        ></i>
        <img
          id="avatar"
          src="${avatar}"
          alt="person-1 profile pic"
        />
      </div>
      <h2 class="name">${name}</h2>
      <p class="job">${job}</p>
      <p class="review">${review}</p>
    `;

    return articleInnerHtml;
  }

  update() {
    const review = this.getReview(this.reviewState.id);
    const reviewHtml = this.buildReviewHtml(review);

    this.appMainReview.innerHTML = reviewHtml;
  }
}
