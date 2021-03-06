/* eslint-disable no-undef */
describe('StatementFormatter', () => {
  var statementFormatter;
  
  beforeEach(() => {
    statementFormatter = new StatementFormatter;
  });

  describe('generateStatement', () => {
    it('can create a statement using transactionHistory', () => {
      // Mocking transactions with stubbed transactionHistory
      // Dates of transactions in transactionHistory will be in chronological order.
      var date1 = new Date('05/01/2021');
      var date2 = new Date('05/05/2021');
      var date3 = new Date('06/03/2021');
      // Inject the mocked transactions
      statementFormatter.transactionHistory = [
        {date: date1, type: "deposit", amount: 100, balance: 100},
        {date: date2, type: "deposit", amount: 50, balance: 150},
        {date: date3, type: "withdrawal", amount: 25, balance: 125}
      ]
      expect(statementFormatter.generateStatement()).toEqual("date || credit || debit || balance\n3/6/2021 || || 25.00 || 125.00\n5/5/2021 || 50.00 || || 150.00\n1/5/2021 || 100.00 || || 100.00")
    });
  });
});
