function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let result = '';

      for (let i = 0; i < str.length; i++) {
          const shift = abc.indexOf(str[i]);

          if(shift === -1) {
              result = result.concat(str[i])
          } else {
            const position = (abc.indexOf(key[i % key.length]) + shift) % 26;
            const coded = abc[position];
            result = result.concat(coded);
          }
          
      }
      
      return result
    };
    this.decode = function (str) {
        let decoded = '';

        for (let i = 0 ; i < str.length; i++) {
            const pos = abc.indexOf(str[i]);

            if (pos === -1 ) {
                decoded = decoded.concat(str[i])
            } else {
                const keyPos = abc.indexOf(key[i % key.length]);
                const shift = pos - keyPos >= 0 ? pos - keyPos : 26 + pos - keyPos;
                const char = abc[shift];
                decoded = decoded.concat(char);
            }
            
        } 
        
        return decoded;

    };
  }

var abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "pizza"
c = new VigenèreCipher(key, abc);

// console.log(c.encode('codewars')); // 'rovwsoiv'
// console.log(c.encode('waffles')); // 'laxxhsj'

// console.log(c.decode('rovwsoiv')); // 'codewars'


// console.log(c.encode('CODEWARS')); // 'CODEWARS'
// console.log(c.decode('CODEWARS')); // 'CODEWARS' 

// console.log(c.encode('asodavwt')); // 'pancakes'
console.log(c.decode('pancakes')); // 'asodavwt'
//console.log(c.decode('CODEWARS')); // 'CODEWARS' 