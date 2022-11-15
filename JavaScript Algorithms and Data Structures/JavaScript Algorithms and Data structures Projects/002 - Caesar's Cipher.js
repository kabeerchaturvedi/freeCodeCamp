function rot13(str) {
  const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return str.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
  
}

rot13("SERR PBQR PNZC");
