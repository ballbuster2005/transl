const TranslitModel = (text) => {
    const begt = String(text.trim())
    let result = String("")
    let i = 0
    while(i < begt.length)
    {
        switch(begt[i]) {
          case ' ':
            result = result + " ";
            break;
          case 'й':
            result = result + "y";
            break;
          case 'ц':
            result = result + "ts";
            break;
          case 'у':
            result = result + "u";
            break;
          case 'к':
            result = result + "k";
            break;
          case 'е':
            result = result + "e"
            break;
          case 'н':
            result = result + "n";
            break;
          case 'г':
            result = result + "g";
            break;
          case 'ш':
            result = result + "sh";
            break;
          case 'щ':
            result = result + "sh";
            break;
          case 'з':
            result = result + "z";
            break;
          case 'х':
            result = result + "h";
            break;
          case 'ъ':
            result = result + "'";
            break;
          case 'ф':
            result = result + "f";
            break;
          case 'ы':
            result = result + "i";
            break;
          case 'в':
            result = result + "v";
            break;
          case 'а':
            result = result + "a";
            break;
          case 'п':
            result = result + "q";
            break;
          case 'р':
            result = result + "r";
            break;
          case 'о':
            result = result + "o";
            break;
          case 'л':
            result = result + "l";
            break;
          case 'д':
            result = result + "d";
            break;
          case 'ж':
            result = result + "zh";
            break;
          case 'э':
            result = result + "e";
            break;
          case 'я':
            result = result + "ya";
            break;
          case 'ч':
            result = result + "ch";
            break;
          case 'с':
            result = result + "s";
            break;
          case 'м':
            result = result + "m";
            break;
          case 'и':
            result = result + "i";
            break;
          case 'т':
            result = result + "t";
            break;
          case 'ь':
            result = result + "'";
            break;
          case 'б':
            result = result + "b";
            break;
          case 'ю':
            result = result + "yu";
            break;
          default:
        }
        i = i + 1;
    }

    return result
}

export default TranslitModel
