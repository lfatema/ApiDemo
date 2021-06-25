export class IReports {
  constructor(
    public id: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deviceNumber: number,
    public deviceInfo: string
  ) {}
}

export class Likes {
  constructor(
    public id: number,
    public reportId: number,
    public createdAt: Date,
    public name: string
  ) {}
}
