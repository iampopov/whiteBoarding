function removeUrlAnchor( url ){
    
    // if (url.substring(0, url.indexOf('#'))) {
    //    return url.substring(0, url.indexOf('#')) 
    // } else {
    //     return url;
    // }
   // return url.substring(0, url.indexOf('#')) ? url.substring(0, url.indexOf('#')) : url;
   return url.split('#')[0];
} 

  console.log(removeUrlAnchor('www.codewars.com#about'));
  
  console.log(removeUrlAnchor('www.codewars.com?page=1'));
  