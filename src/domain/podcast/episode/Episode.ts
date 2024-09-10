export default class Episode {
  private readonly _titre: string;
  private _estVu: boolean;

  constructor(titre: string) {
    this._titre = titre;
    this._estVu = false;
  }

  public get titre(): string {
    return this._titre;
  }

  public get estVu(): boolean {
    return this._estVu;
  }

  public set estVu(vu: boolean) {
    this._estVu = vu;
  }
}
