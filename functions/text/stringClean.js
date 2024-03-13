export const stringClean = (str) => {
  // Replace hyphens with spaces
  const stringWithSpaces = str.replace(/-/g, ' ');

  // Convert string to lowercase and split it into an array of words
  const words = stringWithSpaces.toLowerCase().split(/\s+/);

  // Capitalize the first letter of each word
  const sentenceCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words back into a string with spaces
  return sentenceCaseWords.join(' ');
}