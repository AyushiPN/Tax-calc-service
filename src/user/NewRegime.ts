// NewRegime.ts

export class NewRegime {
  getPayableTaxNewRegime(ctc: number, baseSalary: number): number {
    const grossSalary = ctc - 0.12 * baseSalary;
    //console.log(`Debug - Gross Salary: ${grossSalary}`);
    const taxableAmount = grossSalary - 50000;
    //console.log(`Debug - Taxable Amount: ${taxableAmount}`);
    let tax = 0;
    if (taxableAmount >= 750000) {
      if (taxableAmount <= 300000) {
        tax = 0;
      } else if (taxableAmount <= 600000) {
        tax = (taxableAmount - 300000) * 0.05;
      } else if (taxableAmount <= 900000) {
        tax = 300000 * 0.05 + (taxableAmount - 600000) * 0.1;
      } else if (taxableAmount <= 1200000) {
        tax = 300000 * 0.05 + 300000 * 0.1 + (taxableAmount - 900000) * 0.15;
      } else if (taxableAmount <= 1500000) {
        tax =
          300000 * 0.05 +
          300000 * 0.1 +
          300000 * 0.15 +
          (taxableAmount - 1200000) * 0.2;
      } else {
        tax =
          300000 * 0.05 +
          300000 * 0.1 +
          300000 * 0.15 +
          150000 * 0.2 +
          (taxableAmount - 1500000) * 0.3;
      }

      return tax;
    } else {
      return 0;
    }
  }
}
