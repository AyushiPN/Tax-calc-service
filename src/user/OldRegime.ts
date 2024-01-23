// OldRegime.ts
import { User } from './user.model';
export class OldRegime {
  getPayableTaxOldRegime(ctc: number, user: User, baseSalary: number): number {
    const leastDeduction =
      user.houseRent && user.houseRent > 0.0
        ? Math.min(
            user.actualHraReceived || 0,
            Math.min(
              0.5 * user.basicSalary,
              user.houseRent - 0.1 * user.basicSalary,
            ),
          )
        : 0.0;

    const grossSalary = ctc - 0.12 * baseSalary;
    const taxableAmount =
      grossSalary - 50000 - 0.12 * baseSalary - leastDeduction;

    let tax = 0;

    if (taxableAmount <= 250000) {
      tax = 0;
    } else if (taxableAmount <= 300000) {
      tax = (taxableAmount - 250000) * 0.05;
    } else if (taxableAmount <= 500000) {
      tax = 50000 * 0.05 + (taxableAmount - 300000) * 0.05;
    } else if (taxableAmount <= 1000000) {
      tax = 50000 * 0.05 + 200000 * 0.05 + (taxableAmount - 500000) * 0.2;
    } else {
      tax =
        50000 * 0.05 +
        200000 * 0.05 +
        500000 * 0.2 +
        (taxableAmount - 1000000) * 0.3;
    }

    return tax;
  }
}
