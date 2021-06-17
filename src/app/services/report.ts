export class IReports {
  constructor(
    public id: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deviceNumber: number,
    public deviceInfo: string
  ) {}
}
