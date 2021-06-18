export class IReports {
  constructor(
    public id: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deviceNumber: number,
    public deviceInfo: string,
    public likes: number
  ) {}
}

export class Likes {
  constructor(public id: number, public count: number) {}
}
