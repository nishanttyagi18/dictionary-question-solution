// FUNCTION RETURNING EXPECTED DICTIONARY 

function solution(D) {
    
    // Create array with the keys of given dictionary 
    var keysOfDictionary = Object.keys(D);
    
    // Resultant dictionary
    var resultDictionary = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };
    
    // Looping through keys, converting into weekdays and storing in resultant dictionary
    for (var i = 0; i < keysOfDictionary.length; i++) {
        var MyDate = new Date(keysOfDictionary[i]);
        var DayOfWeek = MyDate.getDay();
  
      switch (DayOfWeek) {
        case 0:
          resultDictionary["Sun"] = resultDictionary["Sun"] + D[keysOfDictionary[i]];
          break;
        case 1:
          resultDictionary["Mon"] = resultDictionary["Mon"] + D[keysOfDictionary[i]];
          break;
        case 2:
          resultDictionary["Tue"] = resultDictionary["Tue"] + D[keysOfDictionary[i]];
          break;
        case 3:
          resultDictionary["Wed"] = resultDictionary["Wed"] + D[keysOfDictionary[i]];
          break;
        case 4:
          resultDictionary["Thu"] = resultDictionary["Thu"] + D[keysOfDictionary[i]];
          break;
        case 5:
          resultDictionary["Fri"] = resultDictionary["Fri"] + D[keysOfDictionary[i]];
          break;
        case 6:
          resultDictionary["Sat"] = resultDictionary["Sat"] + D[keysOfDictionary[i]];
          break;
        case 7:
          resultDictionary["Sun"] = resultDictionary["Sun"] + D[keysOfDictionary[i]];
          break;
      }
    }

    // Returning the resultant dictionary
    return resultDictionary;
  }
  