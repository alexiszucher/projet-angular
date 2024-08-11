export default class Episode {
  private _titre: string;

  constructor(titre: string) {
    this._titre = titre;
  }

  public get titre(): string {
    return this._titre;
  }
}
