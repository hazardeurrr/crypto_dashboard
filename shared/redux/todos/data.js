const todoData = JSON.parse(`[{
  "id": 6903,
  "todo": "Risque maximum par trade : 5% du capital Trading.",
  "createTime": "2021-08-29T15:52:07.773Z",
  "color": 1,
  "completed": false
}, {
  "id": 47977,
  "todo": "Coins tradées : TOP 100 MarketCap",
  "createTime": "2021-08-29T06:09:48.506Z",
  "color": 3,
  "completed": false
}, {
  "id": 81193,
  "todo": "Pas de trading avec levier",
  "createTime": "2021-08-29T03:59:20.370Z",
  "color": 2,
  "completed": false
}, {
  "id": 23485,
  "todo": "Prise de position lorsqu'un double signal (acheteur ou vendeur) est donné (après clôture de bougie) : graphique + 1 indicateur minimum",
  "createTime": "2021-08-29T04:40:50.001Z",
  "color": 3,
  "completed": false
}, {
  "id": 61833,
  "todo": "Toujours trader dans le sens de la tendance sur l'unité de temps supérieure.",
  "createTime": "2021-08-29T00:51:31.881Z",
  "color": 4,
  "completed": false
}]`);

class fakeData {
  constructor(size = 10, colorLength = 4) {
    this.size = size;
    this.datas = [];
    this.colorLength = colorLength;
  }
  dataModel(index) {
    // return {
    //   id: faker.random.number() ,
    //   todo: faker.lorem.paragraph(),
    //   createTime: faker.date.past(),
    //   color: faker.random.number(this.colorLength - 1),
    //   completed: faker.random.boolean(),
    // }
    return todoData[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas.slice();
  }

  getSize() {
    return this.size;
  }
}
export default fakeData;
