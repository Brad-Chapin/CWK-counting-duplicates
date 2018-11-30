function duplicateCount(text){
  text = text.toLowerCase();
  let dupes = 0, checked = [], duped = [];
  for (let i = 0; i < text.length; i++) {
    if (checked.indexOf(text[i]) == -1) {
      checked.push(text[i]);
    } else if (duped.indexOf(text[i]) == -1) {
      dupes++;
      duped.push(text[i]);
    }
  }
  return dupes;
}

console.log (duplicateCount ("aabbcde"));
