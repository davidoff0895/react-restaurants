import Icon from '@/components/common/Icon';

interface Props {
  value: number
}

export default function Rate ({ value }: Props) {
  const maxStar = 5;
  const getIconName = (starNum: number) => value > starNum ? 'star' : 'empty-star';
  return (
    <div>{Array.from({ length: maxStar }, (_, i) => <Icon key={i} icon={getIconName(i)} />)}</div>
  );
}
