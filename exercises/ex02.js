// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  // let runner = list.getHead();
  let listSize = list.length();

  // while (runner !== null) {
  // if (runner.data !== value) {
  //   runner = runner.next;
  // }
  // runner = runner.next.next;
  // listSize -= 1;
  if (list.getHead().data === value) {
    list.getHead() = list.getHead().next;
    listSize -= 1;
  }
  // runner = runner.next;
  let runner = list.getHead();
  // }

  while (runner.next !== null) {
    if (runner.next.data === value) {
      runner = runner.next.next;
      listSize -= 1;
    }
    runner = runner.next;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
