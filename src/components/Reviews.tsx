import type { ReviewsEntity } from '@/types/restaurant';
import Rate from '@/components/common/Rate';
import styles from '@/assets/scss/reviews.module.scss';

interface Props {
  reviews: ReviewsEntity[]
}

export default function Reviews ({ reviews }: Props) {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) =>
        <div key={review.id} className={styles.reviews__review}>
          <div className={styles.reviews__review_content}>
            <div>
              <h4 className={styles.reviews__review_content__name}>
                {review.user}
              </h4>
              <p className={styles.reviews__review_content__comment}>
                {review.text}
              </p>
            </div>
            <div className={styles.reviews__review_content__rate}>
              <Rate value={review.rating} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
