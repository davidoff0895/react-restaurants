import Rate from '@/components/common/Rate';
import Button from '@/components/common/Button';
import { btnColors } from '@/consts/button';
import { ReviewFormSlice, Props } from '@/hocs/ReviewFormSlice';

function ReviewForm ({ user, inputName, inputReview, onRate, submit }: Props) {
  return (
    <div>
      Leave your review
      <input type="text" value={user.name} onChange={inputName}/>
      <textarea value={user.review} onChange={inputReview}/>
      Rating <Rate value={user.rate} onRate={onRate} />
      <Button color={btnColors.PRIMARY} onClick={submit} block>PUBLISH REVIEW</Button>
    </div>
  );
}

export default ReviewFormSlice(ReviewForm);
