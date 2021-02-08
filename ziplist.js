const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(l1, l2) {
  const result = [];
  for (let i = 0; i < l1.length; i++) {
    result.push(l1[i], l2[i]);
  }
  return result;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(l1, l2) {
  const zip = _.zip(l1, l2);
  return _.flatten(zip);
}

console.log(zipListTheSimpleWay(testList1, testList2));
