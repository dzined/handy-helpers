
export const count = (text) =>{
  var charLength = text.length;
  var wordCount = text.split(' ').length;
  return { 'charLength': charLength, 'wordCount': wordCount };
};
export const webPrefix = (url) => {
  if(url && url.startsWith('https')){
    return url
  }else if(url && url.startsWith('http')){
    return 'URL not secure'
  }else if(url && url.startsWith('www')){
    return 'https://'+url
  }else{
    return url
  }
}
export const monthToLabel = (month) => {
  switch(month){
    case 1:
      return 'January';
    case 2:
      return 'February';
    case 3:
      return 'March';
    case 4:
      return 'April';
    case 5:
      return 'May';
    case 6:
      return 'June';
    case 7:
      return 'July';
    case 8:
      return 'August';
    case 9:
      return 'September';
    case 10:
      return 'October';
    case 11:
      return 'November';
    case 12:
      return 'December';
    default:
      return 'No Date';
  }
}
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