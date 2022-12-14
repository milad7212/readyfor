import fs from "fs";
import {
  test_1392_09,
  test_1393_03,
  test_1395_12,
  tests_1396_07,
  tests_1397_02,
  tests_1397_11,
} from "../data/Nezarat.js";

const allTest = [
  ...test_1392_09,
  ...test_1393_03,
  ...test_1395_12,
  ...tests_1396_07,
  ...tests_1397_02,
  ...tests_1397_11,
];
const structurForShow = {};

allTest.map((test) => {
  if (test?.book) {
    if (structurForShow?.[test?.book]) {
      structurForShow[test?.book].push(test);
    } else {
      structurForShow[test.book] = [test];
    }
  }
});
for (const key in structurForShow) {
  let newArr = structurForShow[key].sort(function (a, b) {
    // Compare the 2 dates
    if (a.page < b.page) return -1;
    if (a.page > b.page) return 1;
    return 0;
  });
  structurForShow[key]=newArr
}

const jsonContent = JSON.stringify(structurForShow);
fs.writeFile("Output.txt", jsonContent, "utf8", (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
