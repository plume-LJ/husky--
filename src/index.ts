import { map } from "ramda";

console.log(map((i) => i)([1, 2, 3]));
console.log(map((i) => i)([1, 2, 3]));

const a = "s";
console.log(a);
function T(a: string | number) {
	return a;
}

console.log(T(2));
console.log(T("2"));
