export default function ConvertBigNumber(num: number): number {
  const n = num / 1000000000000000000000;
  const truncatedNumber = Math.floor(n / Math.pow(10, Math.floor(Math.log10(n)) + 1 - 10));

  return truncatedNumber;
}
