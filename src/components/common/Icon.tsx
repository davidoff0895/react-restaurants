interface Props {
  icon: string
}

export default function Icon ({ icon }: Props) {
  const svgPath = require(`@/assets/svg/${icon}.svg`);
  return (
    <img src={svgPath} alt={icon}/>
  );
}
