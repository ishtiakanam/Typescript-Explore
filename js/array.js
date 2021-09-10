"use strict";
const salary = 7500;
const friendSalaries = [7500, 12000, 13000, 14000];
const friends = ['sakib', 'rakib', 'dakib'];
friendSalaries[0] = 10500;
friendSalaries.push(13100);
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
