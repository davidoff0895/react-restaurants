import type { ReviewsEntity } from '@/types/restaurant';
import Rate from '@/components/Rate';
import styles from '@/assets/scss/reviews.module.scss';

interface Props {
  reviews: ReviewsEntity[]
}

export default function Reviews ({ reviews }: Props) {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) =>
        <div key={review.id} className={styles.review}>
          <div className={styles.content}>
            <div>
              <h4 className={styles.name}>
                {review.user}
              </h4>
              <p className={styles.comment}>
                {review.text}
              </p>
            </div>
            <div className={styles.rate}>
              <Rate value={review.rating} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
