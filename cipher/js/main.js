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
         case 'а': cipherOutput.push ('1');   break;
         case 'б': cipherOutput.push ('2');   break; 
         case 'в': cipherOutput.push ('3');   break;
         case 'г': cipherOutput.push ('4');   break;
         case 'д': cipherOutput.push ('5');   break;
         case 'е': cipherOutput.push ('6');   break;
         case 'ё': cipherOutput.push ('7');   break;
         case 'ж': cipherOutput.push ('8');   break;
         case 'з': cipherOutput.push ('9');   break;
         case 'и': cipherOutput.push ('10');  break;
         case 'й': cipherOutput.push ('11');  break;
         case 'к': cipherOutput.push ('12');  break;
         case 'л': cipherOutput.push ('13');  break;
         case 'м': cipherOutput.push ('14');  break;
         case 'н': cipherOutput.push ('15');  break;
         case 'о': cipherOutput.push ('16');  break;
         case 'п': cipherOutput.push ('17');  break;
         case 'р': cipherOutput.push ('18');  break;
         case 'с': cipherOutput.push ('19');  break;
         case 'т': cipherOutput.push ('20');  break;
         case 'у': cipherOutput.push ('21');  break;
         case 'ф': cipherOutput.push ('22');  break;
         case 'х': cipherOutput.push ('23');  break;
         case 'ц': cipherOutput.push ('24');  break;
         case 'ч': cipherOutput.push ('25');  break;
         case 'ш': cipherOutput.push ('26');  break;
         case 'щ': cipherOutput.push ('27');  break;
         case 'ъ': cipherOutput.push ('28');  break;
         case 'ы': cipherOutput.push ('29');  break;
         case 'ь': cipherOutput.push ('30');  break;
         case 'э': cipherOutput.push ('31');  break;
         case 'ю': cipherOutput.push ('32');  break;
         case 'я': cipherOutput.push ('33');  break;
         case 'А': cipherOutput.push ('1');   break;
         case 'Б': cipherOutput.push ('2');   break; 
         case 'В': cipherOutput.push ('3');   break;
         case 'Г': cipherOutput.push ('4');   break;
         case 'Д': cipherOutput.push ('5');   break;
         case 'Е': cipherOutput.push ('6');   break;
         case 'Ё': cipherOutput.push ('7');   break;
         case 'Ж': cipherOutput.push ('8');   break;
         case 'З': cipherOutput.push ('9');   break;
         case 'И': cipherOutput.push ('10');  break;
         case 'Й': cipherOutput.push ('11');  break;
         case 'К': cipherOutput.push ('12');  break;
         case 'Л': cipherOutput.push ('13');  break;
         case 'М': cipherOutput.push ('14');  break;
         case 'Н': cipherOutput.push ('15');  break;
         case 'О': cipherOutput.push ('16');  break;
         case 'П': cipherOutput.push ('17');  break;
         case 'Р': cipherOutput.push ('18');  break;
         case 'С': cipherOutput.push ('19');  break;
         case 'Т': cipherOutput.push ('20');  break;
         case 'У': cipherOutput.push ('21');  break;
         case 'Ф': cipherOutput.push ('22');  break;
         case 'Х': cipherOutput.push ('23');  break;
         case 'Ц': cipherOutput.push ('24');  break;
         case 'Ч': cipherOutput.push ('25');  break;
         case 'Ш': cipherOutput.push ('26');  break;
         case 'Щ': cipherOutput.push ('27');  break;
         case 'Ъ': cipherOutput.push ('28');  break;
         case 'Ы': cipherOutput.push ('29');  break;
         case 'Ь': cipherOutput.push ('30');  break;
         case 'Э': cipherOutput.push ('31');  break;
         case 'Ю': cipherOutput.push ('32');  break;
         case 'Я': cipherOutput.push ('33');  break;
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





