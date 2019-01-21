//Russian language
$('#textToCipher').on('click', function(e){
   e.preventDefault();
   textToCipher();
})

function textToCipher(){
   var val = document.getElementById('textInputToCipher').value.split('');
   var cipherOutput = [];
   
   for(var i = 0; i < val.length; i++){
      
      var pB = val[i];
      
      switch(pB){
         case 'а': case 'А': cipherOutput.push ('1');   break;
         case 'б': case 'Б': cipherOutput.push ('2');   break; 
         case 'в': case 'В': cipherOutput.push ('3');   break;
         case 'г': case 'Г': cipherOutput.push ('4');   break;
         case 'д': case 'Д': cipherOutput.push ('5');   break;
         case 'е': case 'Е': cipherOutput.push ('6');   break;
         case 'ё': case 'Ё': cipherOutput.push ('7');   break;
         case 'ж': case 'Ж': cipherOutput.push ('8');   break;
         case 'з': case 'З': cipherOutput.push ('9');   break;
         case 'и': case 'И': cipherOutput.push ('10');  break;
         case 'й': case 'Й': cipherOutput.push ('11');  break;
         case 'к': case 'К': cipherOutput.push ('12');  break;
         case 'л': case 'Л': cipherOutput.push ('13');  break;
         case 'м': case 'М': cipherOutput.push ('14');  break;
         case 'н': case 'Н': cipherOutput.push ('15');  break;
         case 'о': case 'О': cipherOutput.push ('16');  break;
         case 'п': case 'П': cipherOutput.push ('17');  break;
         case 'р': case 'Р': cipherOutput.push ('18');  break;
         case 'с': case 'С': cipherOutput.push ('19');  break;
         case 'т': case 'Т': cipherOutput.push ('20');  break;
         case 'у': case 'У': cipherOutput.push ('21');  break;
         case 'ф': case 'Ф': cipherOutput.push ('22');  break;
         case 'х': case 'Х': cipherOutput.push ('23');  break;
         case 'ц': case 'Ц': cipherOutput.push ('24');  break;
         case 'ч': case 'Ч': cipherOutput.push ('25');  break;
         case 'ш': case 'Ш': cipherOutput.push ('26');  break;
         case 'щ': case 'Щ': cipherOutput.push ('27');  break;
         case 'ъ': case 'Ъ': cipherOutput.push ('28');  break;
         case 'ы': case 'Ы': cipherOutput.push ('29');  break;
         case 'ь': case 'Ь': cipherOutput.push ('30');  break;
         case 'э': case 'Э': cipherOutput.push ('31');  break;
         case 'ю': case 'Ю': cipherOutput.push ('32');  break;
         case 'я': case 'Я': cipherOutput.push ('33');  break;
         case ' ': cipherOutput.push ('_');   break;
         case '!': cipherOutput.push ('!');   break;
         case '"': cipherOutput.push ('"');   break;
         case '№': cipherOutput.push ('№');   break;
         case ';': cipherOutput.push (';');   break;
         case '%': cipherOutput.push ('%');   break;
         case ':': cipherOutput.push (':');   break;
         case '?': cipherOutput.push ('?');   break;
         case '*': cipherOutput.push ('*');   break;
         case '(': cipherOutput.push ('(');   break;
         case ')': cipherOutput.push (')');   break;
         case '#': cipherOutput.push ('#');   break;
         case '$': cipherOutput.push ('$');   break;
         case '.': cipherOutput.push ('.');   break;
         case ',': cipherOutput.push (',');   break;
         case '^': cipherOutput.push ('^');   break;
         case '=': cipherOutput.push ('=');   break;
         case '_': cipherOutput.push ('_');   break;
         case '+': cipherOutput.push ('+');   break;
         case '-': cipherOutput.push ('-');   break;
      } 
   }
   $('#textOutputToCipher').val(cipherOutput.join(' '));
}

$('#cipherToText').on('click', function(e){
   e.preventDefault();
   cipherToText();
})

function cipherToText(){
   var val = document.getElementById('cipherInputToText').value.split(' ');
   var textOutput = '';
   
   for(var i = 0; i < val.length; ++i){
      var pB = val[i];
      
      switch(pB){
         case '1': textOutput += 'а';    break;
         case '2': textOutput += 'б';    break;
         case '3': textOutput += 'в';    break;
         case '4': textOutput += 'г';    break;
         case '5': textOutput += 'д';    break;
         case '6': textOutput += 'е';    break;
         case '7': textOutput += 'ё';    break;
         case '8': textOutput += 'ж';    break;
         case '9': textOutput += 'з';    break;
         case '10': textOutput += 'и';   break;
         case '11': textOutput += 'й';   break;
         case '12': textOutput += 'к';   break;
         case '13': textOutput += 'л';   break;
         case '14': textOutput += 'м';   break;
         case '15': textOutput += 'н';   break;
         case '16': textOutput += 'о';   break;
         case '17': textOutput += 'п';   break;
         case '18': textOutput += 'р';   break;
         case '19': textOutput += 'с';   break;
         case '20': textOutput += 'т';   break;
         case '21': textOutput += 'у';   break;
         case '22': textOutput += 'ф';   break;
         case '23': textOutput += 'х';   break;
         case '24': textOutput += 'ц';   break;
         case '25': textOutput += 'ч';   break;
         case '26': textOutput += 'ш';   break;
         case '27': textOutput += 'щ';   break;
         case '28': textOutput += 'ъ';   break;
         case '29': textOutput += 'ы';   break;
         case '30': textOutput += 'ь';   break;
         case '31': textOutput += 'э';   break;
         case '32': textOutput += 'ю';   break;
         case '33': textOutput += 'я';   break;
         case '_': textOutput += '_';    break;
         case '.': textOutput += '.';    break;
         case ',': textOutput += ',';    break;
         case '?': textOutput += '?';    break;
         case '!': textOutput += '!';    break;
         case '@': textOutput += '@';    break;
         case '#': textOutput += '#';    break;
         case '№': textOutput += '№';    break;
         case '"': textOutput += '"';    break;
         case '%': textOutput += '%';    break;
         case '^': textOutput += '^';    break;
         case '&': textOutput += '&';    break;
         case '(': textOutput += '(';    break;
         case ')': textOutput += ')';    break;
         case '$': textOutput += '$';    break;
         case '*': textOutput += '*';    break;
         case ':': textOutput += ':';    break;
         case ';': textOutput += ';';    break;
         case '+': textOutput += '+';    break;
         case '-': textOutput += '-';    break;
         case '_': textOutput += '_';    break;
      }
   }
   $('#cipherOutputToText').val(textOutput);
}

// English language
$('#textToCipherEnglish').on('click', function(e){
   e.preventDefault();
   textToCipherEnglish();
})

function textToCipherEnglish(){
   var val = document.getElementById('textInputToCipherEnglish').value.split('');
   var cipherOutput = [];
   
   for(var i = 0; i < val.length; i++){
      
      var pB = val[i];
      
      switch(pB){
         case 'a': case 'A': cipherOutput.push ('1');   break;
         case 'b': case 'B': cipherOutput.push ('2');   break; 
         case 'c': case 'C': cipherOutput.push ('3');   break;
         case 'd': case 'D': cipherOutput.push ('4');   break;
         case 'e': case 'E': cipherOutput.push ('5');   break;
         case 'f': case 'F': cipherOutput.push ('6');   break;
         case 'g': case 'G': cipherOutput.push ('7');   break;
         case 'h': case 'H': cipherOutput.push ('8');   break;
         case 'i': case 'I': cipherOutput.push ('9');   break;
         case 'j': case 'J': cipherOutput.push ('10');  break;
         case 'k': case 'K': cipherOutput.push ('11');  break;
         case 'l': case 'L': cipherOutput.push ('12');  break;
         case 'm': case 'M': cipherOutput.push ('13');  break;
         case 'n': case 'N': cipherOutput.push ('14');  break;
         case 'o': case 'O': cipherOutput.push ('15');  break;
         case 'p': case 'P': cipherOutput.push ('16');  break;
         case 'q': case 'Q': cipherOutput.push ('17');  break;
         case 'r': case 'R': cipherOutput.push ('18');  break;
         case 's': case 'S': cipherOutput.push ('19');  break;
         case 't': case 'T': cipherOutput.push ('20');  break;
         case 'u': case 'U': cipherOutput.push ('21');  break;
         case 'v': case 'V': cipherOutput.push ('22');  break;
         case 'w': case 'W': cipherOutput.push ('23');  break;
         case 'x': case 'X': cipherOutput.push ('24');  break;
         case 'y': case 'Y': cipherOutput.push ('25');  break;
         case 'z': case 'Z': cipherOutput.push ('26');  break;
         case ' ': cipherOutput.push ('_');   break;
         case '!': cipherOutput.push ('!');   break;
         case '"': cipherOutput.push ('"');   break;
         case '№': cipherOutput.push ('№');   break;
         case ';': cipherOutput.push (';');   break;
         case '%': cipherOutput.push ('%');   break;
         case ':': cipherOutput.push (':');   break;
         case '?': cipherOutput.push ('?');   break;
         case '*': cipherOutput.push ('*');   break;
         case '(': cipherOutput.push ('(');   break;
         case ')': cipherOutput.push (')');   break;
         case '#': cipherOutput.push ('#');   break;
         case '$': cipherOutput.push ('$');   break;
         case '.': cipherOutput.push ('.');   break;
         case ',': cipherOutput.push (',');   break;
         case '^': cipherOutput.push ('^');   break;
         case '=': cipherOutput.push ('=');   break;
         case '_': cipherOutput.push ('_');   break;
         case '+': cipherOutput.push ('+');   break;
         case '-': cipherOutput.push ('-');   break;
      } 
   }
   $('#textOutputToCipherEnglish').val(cipherOutput.join(' '));
}

$('#cipherToTextEnglish').on('click', function(e){
   e.preventDefault();
   cipherToTextEnglish();
})

function cipherToTextEnglish(){
   var val = document.getElementById('cipherInputToTextEnglish').value.split(' ');
   var textOutput = '';
   
   for(var i = 0; i < val.length; ++i){
      var pB = val[i];
      
      switch(pB){
         case '1': textOutput += 'a';    break;
         case '2': textOutput += 'b';    break;
         case '3': textOutput += 'c';    break;
         case '4': textOutput += 'd';    break;
         case '5': textOutput += 'e';    break;
         case '6': textOutput += 'f';    break;
         case '7': textOutput += 'g';    break;
         case '8': textOutput += 'h';    break;
         case '9': textOutput += 'i';    break;
         case '10': textOutput += 'j';   break;
         case '11': textOutput += 'k';   break;
         case '12': textOutput += 'l';   break;
         case '13': textOutput += 'm';   break;
         case '14': textOutput += 'n';   break;
         case '15': textOutput += 'o';   break;
         case '16': textOutput += 'p';   break;
         case '17': textOutput += 'q';   break;
         case '18': textOutput += 'r';   break;
         case '19': textOutput += 's';   break;
         case '20': textOutput += 't';   break;
         case '21': textOutput += 'u';   break;
         case '22': textOutput += 'v';   break;
         case '23': textOutput += 'w';   break;
         case '24': textOutput += 'x';   break;
         case '25': textOutput += 'y';   break;
         case '26': textOutput += 'z';   break;
         case '_': textOutput += '_';    break;
         case '.': textOutput += '.';    break;
         case ',': textOutput += ',';    break;
         case '?': textOutput += '?';    break;
         case '!': textOutput += '!';    break;
         case '@': textOutput += '@';    break;
         case '#': textOutput += '#';    break;
         case '№': textOutput += '№';    break;
         case '"': textOutput += '"';    break;
         case '%': textOutput += '%';    break;
         case '^': textOutput += '^';    break;
         case '&': textOutput += '&';    break;
         case '(': textOutput += '(';    break;
         case ')': textOutput += ')';    break;
         case '$': textOutput += '$';    break;
         case '*': textOutput += '*';    break;
         case ':': textOutput += ':';    break;
         case ';': textOutput += ';';    break;
         case '+': textOutput += '+';    break;
         case '-': textOutput += '-';    break;
         case '_': textOutput += '_';    break;
      }
   }
   $('#cipherOutputToTextEnglish').val(textOutput);
}



