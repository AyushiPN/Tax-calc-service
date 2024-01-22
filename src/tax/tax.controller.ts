// TaxController.ts
import { Controller, Post, Body } from '@nestjs/common';
import { TaxService } from './tax.service';
import { User } from '../user/user.model';

@Controller('/tax')
export class TaxController {
  constructor(private readonly taxservice: TaxService) {}

  @Post()
  calculateTax(@Body() userData: User): string {
    const taxInNewRegime = this.taxservice.calculateTaxInNewRegime(userData);
    const taxInOldRegime = this.taxservice.calculateTaxInOldRegime(userData);

    return `Income tax amount in Old Regime is Rs ${taxInOldRegime}.<br>Income tax amount in New Regime is Rs ${taxInNewRegime}`;
  }
}
