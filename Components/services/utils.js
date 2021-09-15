function convData(data,names,userNames) {
  
  let newArr = names.map(elem => {
    return [elem,data[elem]];
  })
  
  newArr.forEach((elem,index) => {
    elem[0] = userNames[index];
    if (elem[0] === 'Haigis') {
      elem[1] = elem[1].replace(/ a/g,'     a');
    }
  })
  return newArr;
}

export default convData;