export class DifferTest {
  id: number;
  private static idSeed: number = 0;
  constructor(public label: string, public value: Number) {
    this.id = DifferTest.idSeed;
    DifferTest.idSeed += 1;
  }
}
