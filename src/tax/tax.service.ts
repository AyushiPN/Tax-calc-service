import { Injectable } from '@nestjs/common';
import { NewRegime } from '../user/NewRegime';
import { OldRegime } from '../user/OldRegime';
import { User } from 'src/user/user.model';
@Injectable()
export class TaxService {
  private readonly newRegime: NewRegime;
  private readonly oldRegime: OldRegime;
  constructor() {
    this.newRegime = new NewRegime();
    this.oldRegime = new OldRegime();
  }
  calculateTaxInNewRegime(user: User) {
    return this.newRegime.getPayableTaxNewRegime(user.ctc, user.basicSalary);
  }

  calculateTaxInOldRegime(user: User) {
    return this.oldRegime.getPayableTaxOldRegime(
      user.ctc,
      user,
      user.basicSalary,
    );
  }
}
