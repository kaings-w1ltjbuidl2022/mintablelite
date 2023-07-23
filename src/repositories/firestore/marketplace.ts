import {
  CollectionReference,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { BaseRepository } from "./base";
import { Marketplace } from "../../types";

export class MarketplaceRepository extends BaseRepository<Marketplace> {
  private readonly _collectionRef: CollectionReference;

  constructor(collectionRef: CollectionReference) {
    super();
    this._collectionRef = collectionRef;
  }

  async create(data: Marketplace) {
    return await addDoc(this._collectionRef, data);
  }
  async getAll() {
    const data: Marketplace[] = [];
    const querySnapshot = await getDocs(this._collectionRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as Marketplace);
    });

    return data;
  }
  async update(data: Partial<Marketplace>, docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await updateDoc(docRef, data);
  }
  async delete(docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await deleteDoc(docRef);
  }
}
