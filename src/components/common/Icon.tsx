import { DOMAttributes } from 'react';

interface Props {
  icon: string
}

export default function Icon ({ icon, ...props }: Props & DOMAttributes<any>) {
  const svgPath = require(`@/assets/svg/${icon}.svg`);
  return (
    <img src={svgPath} alt={icon} {...props}/>
  );
}
