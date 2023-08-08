export const getNameTagInitials = (name: string) => {
  const match = name.match(/\b[A-Za-z0-9]+\b/g);
  if (match && match.length > 1) {
    const firstLetter = match[0][0];
    const secondLetter = match[1][0];
    return `${firstLetter}${secondLetter}`.toUpperCase();
  }
  if (match && match.length === 1) {
    return `${match[0][0]}`.toUpperCase();
  }
  return null;
};
