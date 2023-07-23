// export class Container {
//   private static _instance: Container;

//   private constructor() {
//     Container._instance = new Map();
//   }

//   static getInstance() {
//     if (!Container._instance) {
//       Container._instance = new Container();
//     }
//     // Container._instance = Container._instance ?? new Container();

//     return Container._instance;
//   }
// }

export class Container {
  private static _instance: Map<string, any>;

  constructor() {
    Container._instance = Container._instance ?? new Map();
  }

  getInstance() {
    return Container._instance;
  }
}
