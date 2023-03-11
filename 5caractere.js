function filtrarStrings(arrayDeStrings) {
    const novaArray = arrayDeStrings.filter((string) => string.length > 5);
    return novaArray;
  }

  const arrayDeStrings = ["foo", "bar", "foobar", "baz", "qux", "quux"];
  const novaArray = filtrarStrings(arrayDeStrings);
  console.log(novaArray); 
 