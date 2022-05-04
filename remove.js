/**
 * This extention is used to remove the blur and the pop up in aresmanga.com
 * while using adblock
 * 
 * @author Abdulaziz Ebrahim
 */
document.addEventListener('readystatechange', event => { 
    while (document.querySelector('body').classList.length != 0) { 
        document.querySelector('body').classList.remove(document.querySelector('body').classList[0]);
    };  
});