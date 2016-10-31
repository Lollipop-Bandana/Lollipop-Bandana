var scores = {
  '12345': {
    score: 80
  },
  '12346': {
    score: 50
  },
  '12347': {
    score: 70
  },
  '12348': {
    score: 60
  }
};

var compatable = {
  '12345': {
    '12346': (scores['12346']['score'] / scores['12345']['score']) * 100,
    '12347': (scores['12347']['score'] / scores['12345']['score']) * 100,
    '12348': (scores['12348']['score'] / scores['12345']['score']) * 100,
  }
  
}

console.log(compatable['12345']['12348']);