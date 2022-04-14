const candList = ["i Love Jesus", "Oceans", "Crowns", "King of heaven","Wonder"];
const votersRank = [
  ["i Love Jesus", "Oceans", "Crowns", "King of heaven", "Wonder"],
  ["Crowns", "i Love Jesus", "Wonder", "Oceans", "King of heaven"],
  ["Oceans", "Wonder" ,"Crowns", "i Love Jesus", "King of heaven"],
  ["Crowns", "Oceans", "Wonder" ,"i Love Jesus", "King of heaven"],
  ["Oceans", "i Love Jesus", "Crowns", "Wonder", "King of heaven"],
  ["Wonder", "Oceans", "i Love Jesus", "Crowns", "King of heaven"],
  ["Oceans", "i Love Jesus", "Crowns", "Wonder" ,"King of heaven"],
  ["Wonder", "Oceans", "i Love Jesus", "Crowns", "King of heaven"],
  ["Oceans", "Wonder" ,"i Love Jesus", "Crowns", "King of heaven"],
];

const ballot = (a) => {
  const b = {};
  const a_len = a.length;
  for (let i = 0; i < a.length; i++)
    b[i] = a_len - i;
  
  return b;
};

const indextoPoint = (a, b) => b[a];
                     
const tally = (candList, votersRank) => {
  const scoreTable = ballot(candList);
  console.log(scoreTable);
  const Tally = {};
  for (let i = 0; i < candList.length; i++) {
    let count = 0;
    for (let vote of votersRank) {
      const index = vote.indexOf(candList[i]);
      count += indextoPoint(index, scoreTable);
    }
    Tally[candList[i]] = count;
  }
  return Tally;
};

console.log(tally(candList, votersRank));