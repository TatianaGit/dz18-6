let a = +prompt('Катет пямоугольного треугольника (см)');
console.log(`Катет прямоугольного треугольника ${a} см.`);
let b = +prompt('Катет пямоугольного треугольника (см)');
console.log(`Катет прямоугольного треугольника ${b} см.`);
let c = (a**2) + (b**2);
c = Math.sqrt(c);
c = Math.round(c*100) / 100;
console.log(`Гипотенуза прямоугольного треугольника: ${c} см.`)



