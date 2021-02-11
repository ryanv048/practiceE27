const listE = [0, 2, 4, 6, 8, 10];
const listO = [1, 3, 5, 7, 9, 11];

function ziplist(even, odd) {
  const merge = [];
  let i = 0;
  for (i = 0; i < even.length; i++) {
    merge.push(even[i], odd[i]);
  }
  return merge;
}

function zipListTheSimpleWay(even, odd) {
  return _.flatten(_.zip(even, odd));
}

console.log(ziplist(listE, listO));
console.log(zipListTheSimpleWay(listE, listO));
