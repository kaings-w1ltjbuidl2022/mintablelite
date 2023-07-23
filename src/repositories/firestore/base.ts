export abstract class BaseRepository<T> {
  constructor() {}

  protected abstract create(dataObj: T): Promise<object>;
  //   protected abstract get(dataFilter: any): object;
  protected abstract getAll(): Promise<T[]>;
  protected abstract update(dataObj: Partial<T>, filter: any): Promise<void>;
  protected abstract delete(filter: any): Promise<void>;
}
