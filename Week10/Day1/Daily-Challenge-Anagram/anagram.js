function isAnagram (string1, string2) {
    const normalize = str => str.toLowerCase().replace(/\s/g,'').split('').sort().join('');
    return normalize(string1) === normalize(string2);
}

isAnagram ('Astronomer','Moon starer') // true
isAnagram ('School master','The classroom') // true
