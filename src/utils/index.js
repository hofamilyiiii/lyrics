// Get the query params off the window's URL (HASH)
export const getHashParams = () => {
  const hashParams = {};
  let results;
  const regex = /([^&;=]+)=?([^&;]*)/g;
  const query = window.location.hash.substring(1);
  while ((results = regex.exec(query))) {
    hashParams[results[1]] = decodeURIComponent(results[2]);
  }
  return hashParams;
};

// Get the query params off the window's URL
export const getUrlParameter = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

export const removeAllSpecialCharacters = value => {
  return value.replace(/[^\w\s]/gi, "");
};

// Replace all occurance of a substring in a string
export const stringReplaceAll = (search, replacement, value) => {
  return value.split(search).join(replacement);
};

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
export const generateRandomString = length => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const createCookie = (cookieName, cookieValue, daysToExpire) => {
  var date = new Date();
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${cookieValue};expires=${date.toUTCString()};`;
};

export const accessCookie = cookieName => {
  var name = cookieName + "=";
  var allCookieArray = document.cookie.split(";");
  for (var i = 0; i < allCookieArray.length; i++) {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name) === 0)
      return temp.substring(name.length, temp.length);
  }
  return "";
};

export const deleteCookie = cookieName => {
  document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

// Higher-order function for async/await error handling
export const catchErrors = fn => {
  return function(...args) {
    return fn(...args).catch(err => {
      console.error(err);
    });
  };
};
