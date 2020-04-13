import { SmartContract } from '@neo-one/smart-contract';

export class HelloWorld extends SmartContract {
  public hello(): boolean {
    return true;
  }
}