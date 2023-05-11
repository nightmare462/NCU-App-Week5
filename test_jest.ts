// number、string、array、object

export function getNumber(a: number, b: number): number {
  return a+b;
}

export function getString(s: string): string {
  return s;
}

export function getArray(num: number): number[] {
  return Array.from(Array(num), (_, i) => i);
}

export function getObject(n: string, a:number): object {
  return { name: n, age: a };
}
