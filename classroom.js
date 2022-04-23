/**
 * @param {number[]} grades
 */
export function getNumberOfGrades(grades) {
  // return the number of grades
  return grades.length;
}

/**
 * @param {number[]} grades
 */
export function getSumGrades(grades) {
  // return the sum of all the grades
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });

  return sum;
}

/**
 * @param {number[]} grades
 */
export function getAverageValue(grades) {
  // return the average value of all grades ( sum of all grades divided by the total number of grades)
  const sumGrades = getSumGrades(grades);
  return sumGrades / grades.length;
}

/**
 * @param {number[]} grades
 */
export function getPassingGrades(grades) {
  // return all passing grades (10 and above)
  return grades.filter(function (grade) {
    return grade >= 10;
  });
}

/**
 * @param {number[]} grades
 */
export function getFailingGrades(grades) {
  // return all failing grades (9 and below)
  return grades.filter(function (grade) {
    return grade < 10;
  });
}

/**
 * @param {number[]} grades
 */
export function getRaisedGrades(grades) {
  // return all the grades raised by 1 (no grade should exceed 20)

  return grades.map(function (grade) {
    const raisedGrade = grade + 1;
    const maxGrade = 20;
    return raisedGrade > maxGrade ? maxGrade : raisedGrade;
  });
}
