type TIconType = 'heart' | 'list' | 'next' | 'play' | 'prev' | 'stop';

interface SVGIconProps {
  name: TIconType;
  className?: string;
  alt: string;
}

export const SVGIcon = ({ name, className, alt }: SVGIconProps) => (
  <img src={`/control-icons/${name}.svg`} className={className} alt={alt} />
);
