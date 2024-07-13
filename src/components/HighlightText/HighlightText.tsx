import { FC } from 'react';

type HighlightTextProps = {
  text: string,
  searchTerm: string
}

export const HighlightText: FC<HighlightTextProps> = ({ text, searchTerm }) => {
  if (!searchTerm) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
          <mark key={index}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};