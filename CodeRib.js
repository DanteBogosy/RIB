function transform (phrase) {
    let mot = "";
    for(lettre of phrase)
    {
        if (!isNaN(lettre))
        {
            mot += lettre.toString();
        } 
        lettre = lettre.toLowerCase();
        if (lettre == 'a' || lettre == 'j') 
        {
            mot += 1;
        }
        else if (lettre == 'b' || lettre == 'k' || lettre == 's')
        {
            mot += 2;
        }
        else if (lettre == 'c' || lettre == 'l' || lettre == 't')
        {
            mot += 3;
        }
        else if (lettre == 'd' || lettre == 'm' || lettre == 'u')
        {      
            mot += 4;
        }
        else if (lettre == 'e' || lettre == 'n' || lettre == 'v')
        {
            mot += 5;
        }
        else if (lettre == 'f' || lettre == 'o' || lettre == 'w')
        {
            mot += 6;
        }
        else if (lettre == 'g' || lettre == 'p' || lettre == 'x')
        {
            mot += 7;
        }
        else if (lettre == 'h' || lettre == 'q' || lettre == 'y')
        {
            mot += 8;
        }
        else if (lettre == 'i' || lettre == 'r' || lettre == 'z')
        {
            mot += 9 ;
        }
    }
    return mot ;
}

function calcul (codebanque,codeguichet,numerodecompte) {
    let prod1 = 89 * transform(codebanque);
    let prod2 = 15 * transform(codeguichet);
    let prod3 = 3 * transform(numerodecompte);
    let somme = prod1 + prod2 + prod3;
    let resultat = 97-(somme%97);
    return resultat;
}

function determine (RIB) {
    let compose = RIB.split(' ');
    let calculus = calcul(compose[0],compose[1],compose[2]);
    if (calculus==compose[3])
        console.log('OK');
    else 
        console.log('KO');
}

let input=['A5B69 fB7z8 rtBH89fgT54 79','bwk43 FGT87 TZbgjo36u9D 56'];
for (let keys of input)
    {
        determine (keys);
    }
  
