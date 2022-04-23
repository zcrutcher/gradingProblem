## HackerLand University has the following grading policy:

- Every student receives a grade in the inclusive range from 0 to 100.
- Any grade less than 40 is a failing grade.

Sam is a professor at the university and likes to round each student's according to these rules:

- If the difference between the grade and the next mulitple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of the grade is less than 38, no rounding occurs as the result will still be a failing grade.

Examples

- grade = 84 round to 85 (85 - 84 is less than 3)
- grade = 29 do not round (result is less than 40)
- grade = 57 do not round (60 - 57 is 3 or higher)

More Examples

- Student 1 received a 73, and the next multiple of 5 from 73 is 75. Since 75 - 73 < 3, the student's grade is rounded to 75.
- Student 2 received a 67, and the next multiple of 5 from 67 is 70. Since 70 - 67 = 3, the grade will not be modified adn the student's final grade is 67.
- Student 3 received a 38, and the next multiple of 5 from 38 is 40. Since 40 - 38 < 3, the student's grade will be rounded to 40.
- Student 4 received a grade below 38, so the grade will not be modified and the student's final grade is 33.

url: https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

## C# Solution

The C# solution can be found in cSharp/cSharp/Rounding.cs
C# Tests can be found in cSharp/cSharp.Tests/RoundingTests.cs

## JS Solution

The JS solution can be found in js/index.js
JS Tests can be found in js/index.test.js
