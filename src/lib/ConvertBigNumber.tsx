export default function ConvertBigNumber(num: number): number {
  const num = num / 1000000000000000000000;
  const truncatedNumber = Math.floor(num / Math.pow(10, Math.floor(Math.log10(num)) + 1 - 10));

  return truncatedNumber;
}
