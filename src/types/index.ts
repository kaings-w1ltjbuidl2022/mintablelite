export type User = {
  id?: number;
  name: string;
  nftOwnership: number[];
};

export type Nft = {
  id?: number;
  name: string;
  contractAddress: string;
  description: string;
  attributes: object;
};

export type Marketplace = {
  id?: number;
  name: string;
  contractAddress: string;
  description: string;
  listedNfts: number[];
};
