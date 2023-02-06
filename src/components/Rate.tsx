import Icon from '@/components/common/Icon';

interface Props {
  value: number
}

export default function Rate ({ value }: Props) {
  return (
    <div>{Array.from({ length: value }, (_, i) => <Icon key={i} icon={'star'} />)}</div>
  );
}
