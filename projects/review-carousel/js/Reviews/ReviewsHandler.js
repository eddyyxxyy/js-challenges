import reviews from "../data-mock/reviews.js";
import buttons from "../elements.js";
import reviewState from "./reviewState.js";

export default class ReviewsHandler {
  appMainReview;
  buttons;
  reviewState;

  constructor() {
    if (new.target === ReviewsHandler) {
      throw new Error("Cannot instantiate an abstract class");
    }
    this.appMainReview = document.getElementById("review");
    this.buttons = buttons;
    this.reviewState = reviewState;
    this.assignEvents();
  }

  assignEvents() {
    this.buttons.btnPrev.addEventListener("click", () => {
      this.changeTo("prev");
      this.update();
    });
    this.buttons.btnNext.addEventListener("click", () => {
      this.changeTo("next");
      this.update();
    });
    this.buttons.btnSurprise.addEventListener("click", () => {
      this.changeTo("random");
      this.update();
    });
  }

  changeTo(action) {
    switch (action) {
      case "next":
        if (this.reviewState.id === reviews.length) {
          this.reviewState = {
            ...this.reviewState,
            id: 1,
          };
          break;
        }
        this.reviewState = { ...this.reviewState, id: this.reviewState.id + 1 };
        break;
      case "prev":
        if (this.reviewState.id === 1) {
          this.reviewState = {
            ...this.reviewState,
            id: reviews.length,
          };
          break;
        }
        this.reviewState = { ...this.reviewState, id: this.reviewState.id - 1 };
        break;
      case "random":
        this.reviewState = {
          ...this.reviewState,
          id: this.randomizeReviewId(),
        };
        break;
      default:
        break;
    }
  }

  getReview(id) {
    const review = reviews.filter((review) => review.id === id);
    if (!review) {
      alert("Review not found");
      return;
    }
    return review[0];
  }

  randomizeReviewId() {
    let { id } = this.getReview(Math.floor(Math.random() * reviews.length + 1));

    while (id === this.reviewState.id) {
      id = this.randomizeReviewId();
    }

    return id;
  }

  update() {
    throw new Error("Abstract method not implemented");
  }
}
