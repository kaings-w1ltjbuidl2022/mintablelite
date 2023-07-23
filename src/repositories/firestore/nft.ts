import {
  CollectionReference,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { BaseRepository } from "./base";
import { Nft } from "../../types";

export class NftRepository extends BaseRepository<Nft> {
  private readonly _collectionRef: CollectionReference;

  constructor(collectionRef: CollectionReference) {
    super();
    this._collectionRef = collectionRef;
  }

  async create(data: Nft) {
    return await addDoc(this._collectionRef, data);
  }
  async getAll() {
    const data: Nft[] = [];
    const querySnapshot = await getDocs(this._collectionRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as Nft);
    });

    return data;
  }
  async update(data: Partial<Nft>, docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await updateDoc(docRef, data);
  }
  async delete(docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await deleteDoc(docRef);
  }
}
