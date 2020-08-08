function solution(a, b) {
  return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][new Date(2020, a - 1, b).getDay()];
  
}
console.log(solution(7,26))
