
export function capitalize(str) {
    
    return str[0].toUpperCase()+str.substring(1);
}

export function reverseString(str) {
    return [...str].reverse().join("");
}

export const calculator = function () {

    function add(a,b) {
        return a+b;
    }

    function subtract(a,b){
        return a-b;
    }

    function multiply(a,b){
        return a*b;
    }

    function divide(a,b){
        return a/b;
    }

    return {add, subtract, multiply, divide};
}();

export function ceasarCipher(str, key) {

    let cipher = [];
    
    for(let i=0; i<str.length; i++){
        
        let currCode = str.charCodeAt(i);

        if((currCode > 64 && currCode < 91) || (currCode > 96 && currCode < 123)){

            if((currCode <97 && currCode+key > 90)||(currCode >90 && currCode+key >122)){
                currCode -= 26;
            }
            

            cipher.push(String.fromCharCode(currCode+key));
        }

        else{
            cipher.push(str[i]);
        }
    }
   
    return cipher.join("");
}

