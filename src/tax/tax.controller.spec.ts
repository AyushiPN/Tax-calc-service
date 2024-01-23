import { Test, TestingModule } from '@nestjs/testing';
import { TaxController } from './tax.controller';
import { TaxService } from './tax.service';

describe('TaxController', () => {
  let taxController: TaxController;
  let taxService: TaxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [TaxService],
    }).compile();

    taxController = module.get<TaxController>(TaxController);
    taxService = module.get<TaxService>(TaxService);
  });

  describe('calculateTax', () => {
    it('should return the correct income tax amounts in slab ', () => {
      const user = {
        ctc: 1200000,
        basicSalary: 480000,
        hasHra: false,
        houseRent: 0,
        actualHraReceived: 240000,
      };

      jest.spyOn(taxService, 'calculateTaxInNewRegime').mockReturnValue(73860);
      jest.spyOn(taxService, 'calculateTaxInOldRegime').mockReturnValue(122940);

      const result = taxController.calculateTax(
        user.ctc,
        user.basicSalary,
        user.hasHra,
        user.houseRent,
        user.actualHraReceived,
      );

      // Add your assertions here based on the expected results
      expect(result).toContain('Income tax amount (Old Regime) is Rs 122940');
      expect(result).toContain('Income tax amount (New Regime) is Rs 73860');
    });
    it('should return the correct income tax amounts in slab less than or equal to 300000', () => {
      const user = {
        ctc: 300000,
        basicSalary: 120000,
        hasHra: false,
        houseRent: 0,
        actualHraReceived: 240000,
      };

      jest.spyOn(taxService, 'calculateTaxInNewRegime').mockReturnValue(0);
      jest.spyOn(taxService, 'calculateTaxInOldRegime').mockReturnValue(0);

      const result = taxController.calculateTax(
        user.ctc,
        user.basicSalary,
        user.hasHra,
        user.houseRent,
        user.actualHraReceived,
      );

      // Add your assertions here based on the expected results
      expect(result).toContain('Income tax amount (Old Regime) is Rs 0');
      expect(result).toContain('Income tax amount (New Regime) is Rs 0');
    });
  });
});
