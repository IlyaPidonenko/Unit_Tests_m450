function uniqueValues(array) {
filteredArray = array.filter((element, index) => array.indexOf(element) === index);
return filteredArray
}

function letterFrequency(word) {
    const letterAmount = {};

    for(letter of word) {
        if(letterAmount[letter]) {
            letterAmount[letter]++;
        } else {
            letterAmount[letter] = 1;
        }
    }

    return letterAmount
  }
  
  function sortByKey(array) {
    sortedObjects = array.sort((a,b) => a.id - b.id)
    return sortedObjects
  }


  person1 = {
    id: 1
  }
  person2 = {
    id: 2
  }
  person3 = {
    id: 3
  }

  arrayObject = [person2, person1, person3]
  console.log(sortByKey(arrayObject))

  
