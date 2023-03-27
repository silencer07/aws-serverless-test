export function fahrenheitToKelvin(i: number): number {
  const ans = ((i - 32) / 1.8) + 273.15
  return Math.round(ans * 100) / 100
}
