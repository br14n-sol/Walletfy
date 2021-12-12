import Ethplorer from '../utils/ethplorer';
import ICoin from '../coin';

export default class ShibaInu extends Ethplorer implements ICoin {
  getCode() {
    return 'shib';
  }

  getName() {
    return 'shiba-inu';
  }

  async getBalance(address: string): Promise<number> {
    const token = await this.getTokenInfo(address, this.getCode());
    if (!token) return -1;
    return token.balance / Math.pow(10, token.decimals);
  }
}
