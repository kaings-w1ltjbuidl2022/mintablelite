import { collection } from "firebase/firestore";
import { UserRepository } from "./firestore/user";
import { NftRepository } from "./firestore/nft";
import { MarketplaceRepository } from "./firestore/marketplace";

export function initRepositories(container: Map<string, any>) {
  const db = container.get("db");

  const userRepository = new UserRepository(collection(db, "users"));
  const nftRepository = new NftRepository(collection(db, "nfts"));
  const marketplaceRepository = new MarketplaceRepository(
    collection(db, "marketplaces")
  );

  return {
    UserRepository: userRepository,
    NftRepository: nftRepository,
    MarketplaceRepository: marketplaceRepository,
  };
}
