import fs from "fs";
import {
  test_1392_09,
  test_1393_03,
  test_1393_08,
  test_1394_05,
  test_1395_06,
  test_1395_12,
  tests_1396_07,
  tests_1397_02,
  tests_1397_11,
  test_1398_07,
  test_1399_07,
  test_1400_05,
  test_1401_06,
} from "../data/Nezarat.js";
import { test_E_1399_07 } from "../data/ejra.js";

const allTest = [
  ...test_1392_09,
  ...test_1393_03,
  ...test_1393_08,
  ...test_1394_05,
  ...test_1395_06,
  ...test_1395_12,
  ...tests_1396_07,
  ...tests_1397_02,
  ...tests_1397_11,
  ...test_1398_07,
  ...test_1399_07,
  ...test_1400_05,
  ...test_1401_06,
  ...test_E_1399_07,
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
  structurForShow[key] = newArr;
}

const jsonContent = JSON.stringify(structurForShow);
fs.writeFile("Output1.txt", jsonContent, "utf8", (err) => {
  // In case of a error throw err.
  if (err) throw err;
});
