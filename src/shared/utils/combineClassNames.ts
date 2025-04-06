type TProps = {
  base: string;
  extra?: string | string[];
};

export const combineClassNames = ({ base, extra }: TProps): string => {
  const extras = Array.isArray(extra) ? extra.join(' ') : (extra ?? '');
  return `${base} ${extras}`.trim();
};
