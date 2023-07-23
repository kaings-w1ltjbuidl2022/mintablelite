import {
  CollectionReference,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { User } from "../../types";
import { BaseRepository } from "./base";

export class UserRepository extends BaseRepository<User> {
  private readonly _collectionRef: CollectionReference;

  constructor(collectionRef: CollectionReference) {
    super();
    this._collectionRef = collectionRef;
  }

  async create(data: User) {
    return await addDoc(this._collectionRef, data);
  }
  async getAll() {
    const data: User[] = [];
    const querySnapshot = await getDocs(this._collectionRef);
    querySnapshot.forEach((doc) => {
      data.push(doc.data() as User);
    });

    return data;
  }
  async update(data: Partial<User>, docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await updateDoc(docRef, data);
  }
  async delete(docId: any) {
    const docRef = doc(this._collectionRef, docId);
    return await deleteDoc(docRef);
  }
}
