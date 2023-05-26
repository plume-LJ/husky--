import { map } from "ramda";

console.log(map((i) => i)([1, 2, 3]));
console.log(map((i) => i)([1, 2, 3]));

function T(a: any) {
	return a;
}

console.log(T(2));
