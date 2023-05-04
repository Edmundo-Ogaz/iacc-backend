exports.validateRut = function(rutComplete) {
    console.log('validateRut', rutComplete)
    rutComplete = rutComplete.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutComplete ))
        return false;
    const tmp 	= rutComplete.split('-');
    const rut 	= tmp[0];
    let digv	= tmp[1]; 
    if ( digv == 'K' ) digv = 'k' ;
    
    return (getDiv(rut) == digv );
}

function getDiv(T) {
    let M=0,S=1;
    for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
}

exports.validateEmail = function(email) {
    console.debug('validateEmail', email)
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}