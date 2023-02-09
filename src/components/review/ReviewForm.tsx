import Rate from '@/components/common/Rate';
import Button from '@/components/common/Button';
import { btnColors } from '@/consts/button';
import { Props, ReviewFormSlice } from '@/hocs/ReviewFormSlice';
import styles from '@/assets/scss/reviewForm.module.scss';

function ReviewForm ({ user, inputName, inputReview, onRate, submit }: Props) {
  return (
    <div className={styles.reviewForm}>
      <h4 className={styles.reviewForm__title}>Leave your review</h4>
      <div className={styles.reviewForm__item}>
        <input
            placeholder="Your name"
            className={styles.reviewForm__message}
            value={user.name}
            onChange={inputName}
            />
      </div>
      <div className={styles.reviewForm__item}>
        <textarea
              placeholder="Your review"
              className={styles.reviewForm__message}
              value={user.review}
              onChange={inputReview}
          />
      </div>
      <div className={styles.reviewForm__rate}>
        <span>Rating: </span>
        <span>
          <Rate value={user.rate} onRate={onRate} />
        </span>
      </div>
      <div className={styles.reviewForm__publish}>
        <Button color={btnColors.PRIMARY} block onClick={submit}>
          PUBLISH REVIEW
        </Button>
      </div>
    </div>
  );
}

export default ReviewFormSlice(ReviewForm);
