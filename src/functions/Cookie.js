

export const setCookie = (value,days)=>{

const date = new Date();

date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

let expires = 'expires=' + date.toUTCString();

document.cookie = `userSigned=${value}; ${expires}`;
}

export const isCookieExists = ()=>{

    let findCookie = document.cookie.split(';').filter(ck=>ck.includes('userSigned'));
    
    return findCookie.length === 0 ? false : findCookie[0].split('=')[1] === null ? false : true;
    
}

export const getCookie = ()=>{

    const mainCookie = document.cookie.split(';').filter(ck=>ck.includes('userSigned'))[0].split('=')[1];
    return mainCookie;
}