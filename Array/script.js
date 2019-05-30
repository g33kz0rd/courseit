const arrayToCheck = [1, 2, 3, 2, 3, 4, 1, 5, 6, 7, 6]

function detectSolos() {
    var nonRepeated = [];

    for (let i = 0; i < arrayToCheck.length; i++) {
        const currentCheck = arrayToCheck[i];

        var itRepeats = false;

        for (let j = 0; j < arrayToCheck.length; j++) {
            const comparedTo = arrayToCheck[j];

            if (i != j && currentCheck == comparedTo)
                itRepeats = true;
        }

        if (!itRepeats)
            nonRepeated.push(currentCheck);
    }

    return nonRepeated;
}

function getOnce(arr) {
    let control
    for (var i = 0; i < arr.length; i++) {
        control = arr.shift();
        while (arr.indexOf(control) > -1 ) {
          console.log('cosas')
          arr.splice(arr.indexOf(control), 1)
        }
    }
    return arr
  }