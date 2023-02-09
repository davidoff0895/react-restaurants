import Icon from '@/components/common/Icon';

interface Props {
  value: number
  onRate?: (value: number) => void
}

export default function Rate ({ value, onRate = () => {} }: Props) {
  const maxStar = 5;
  const getIconName = (starNum: number) => value > starNum ? 'star' : 'empty-star';
  return (
    <div>
      {Array.from({ length: maxStar }, (_, i) =>
        <Icon key={i} icon={getIconName(i)} onClick={() => { onRate(i + 1); }} />
      )}
    </div>
  );
}
