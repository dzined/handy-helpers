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