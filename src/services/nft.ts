import { Repositories } from "../repositories";
import { ethers } from "ethers";

export class NftService {
  private readonly _repository: Repositories["NftRepository"];

  constructor(repositories: Repositories) {
    this._repository = repositories.NftRepository;
  }

  mint(nftAddress: string) {
    const contract = 
  }
}
