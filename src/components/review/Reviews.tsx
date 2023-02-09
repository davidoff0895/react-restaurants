import Rate from '@/components/common/Rate';
import styles from '@/assets/scss/reviews.module.scss';
import ReviewForm from '@/components/review/ReviewForm';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Reviews () {
  const { reviews } = useSelector(({ restaurants }: RootState) => restaurants.activeRestaurant);
  return (
    <div className={styles.reviews}>
      {reviews.map((review) =>
        <div key={review.id} className={styles.reviews__review}>
          <div className={styles.reviews__review__content}>
            <div>
              <h4 className={styles.reviews__review__content__name}>
                {review.user.name}
              </h4>
              <p className={styles.reviews__review__content__comment}>
                {review.text}
              </p>
            </div>
            <div className={styles.reviews__review__content__rate}>
              <Rate value={review.rating} />
            </div>
          </div>
        </div>
      )}
      <ReviewForm />
    </div>
  );
}
