export class Block {
    private _blockHash: string = '';
    private _height: string = '';
    private _timstamp: string = '';
    private _txCount: number = 0;
    private _txData: string = '';
    private _blockData: string = '';

    get blockHash(): string {
        return this._blockHash;
    }

    set blockHash(hash: string) {
        this._blockHash = hash;
    }

    get height(): string {
        return this._height;
    }

    set height(height: string) {
        this._height = height;
    }

    get timstamp(): string {
        return this._timstamp;
    }

    set timstamp(date: string) {
        this._timstamp = date;
    }

    get txCount(): number {
        return this._txCount;
    }

    set txCount(date: number) {
        this._txCount = date;
    }

    get txData(): string {
        return this._txData;
    }

    set txData(data: string) {
        this._txData = data;
    }

    get blockData(): string {
        return this._blockData;
    }

    set blockData(blockData: string) {
        this._blockData = blockData;
    }
}