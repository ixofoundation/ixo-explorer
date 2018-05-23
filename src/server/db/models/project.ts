interface SocialMedia {
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
}

export class Project {
    private _txHash: string = '';
    private _senderDid: string = 'did:ixo:';
    private _projectDid: string = 'did:ixo:';
    private _pubKey: string = '';
    private _title: string = '';
    private _shortDescription: string = '';
    private _longDescription: string = '';
    private _impactAction: string = '';
    private _createdOn: Date = new Date();
    private _createdBy: string = 'did:ixo:';
    private _country: string = '';
    private _sdgs: string[] = [''];
    private _impactsRequired: number = 0;
    private _claimTemplate: string = 'default';
    private _socialMedia: SocialMedia = {
        facebookLink: '',
        instagramLink: '',
        twitterLink: ''
    };
    private _serviceEndpoint: string = '';
    private _imageLink: string = '';

    /**
    * Getter txHash
    * @return {string }
    */
    public get txHash(): string {
        return this._txHash;
    }

    /**
     * Setter txHash
     * @param {string } value
     */
    public set txHash(value: string) {
        this._txHash = value;
    }

    /**
     * Getter senderDid
     * @return {string }
     */
    public get senderDid(): string {
        return this._senderDid;
    }

    /**
     * Setter senderDid
     * @param {string } value
     */
    public set senderDid(value: string) {
        this._senderDid = value;
    }

    /**
     * Getter pubKey
     * @return {string }
     */
    public get pubKey(): string {
        return this._pubKey;
    }

    /**
     * Getter title
     * @return {string }
     */
    public get title(): string {
        return this._title;
    }

    /**
     * Getter shortDescription
     * @return {string }
     */
    public get shortDescription(): string {
        return this._shortDescription;
    }

    /**
     * Getter longDescription
     * @return {string }
     */
    public get longDescription(): string {
        return this._longDescription;
    }

    /**
     * Getter impactAction
     * @return {string }
     */
    public get impactAction(): string {
        return this._impactAction;
    }

    /**
     * Getter createdBy
     * @return {string }
     */
    public get createdBy(): string {
        return this._createdBy;
    }

    /**
     * Getter country
     * @return {string }
     */
    public get country(): string {
        return this._country;
    }

    /**
     * Getter sdgs
     * @return {string[] }
     */
    public get sdgs(): string[] {
        return this._sdgs;
    }

    /**
     * Getter impactsRequired
     * @return {number }
     */
    public get impactsRequired(): number {
        return this._impactsRequired;
    }

    /**
     * Getter claimTemplate
     * @return {string }
     */
    public get claimTemplate(): string {
        return this._claimTemplate;
    }

    /**
     * Getter socialMedia
     * @return {SocialMedia }
     */
    public get socialMedia(): SocialMedia {
        return this._socialMedia;
    }

    /**
     * Setter pubKey
     * @param {string } value
     */
    public set pubKey(value: string) {
        this._pubKey = value;
    }

    /**
     * Setter title
     * @param {string } value
     */
    public set title(value: string) {
        this._title = value;
    }

    /**
     * Setter shortDescription
     * @param {string } value
     */
    public set shortDescription(value: string) {
        this._shortDescription = value;
    }

    /**
     * Setter longDescription
     * @param {string } value
     */
    public set longDescription(value: string) {
        this._longDescription = value;
    }

    /**
     * Setter impactAction
     * @param {string } value
     */
    public set impactAction(value: string) {
        this._impactAction = value;
    }

    /**
     * Setter createdBy
     * @param {string } value
     */
    public set createdBy(value: string) {
        this._createdBy = value;
    }

    /**
     * Setter country
     * @param {string } value
     */
    public set country(value: string) {
        this._country = value;
    }

    /**
     * Setter sdgs
     * @param {string[] } value
     */
    public set sdgs(value: string[]) {
        this._sdgs = value;
    }

    /**
     * Setter impactsRequired
     * @param {number } value
     */
    public set impactsRequired(value: number) {
        this._impactsRequired = value;
    }

    /**
     * Setter claimTemplate
     * @param {string } value
     */
    public set claimTemplate(value: string) {
        this._claimTemplate = value;
    }

    /**
     * Setter socialMedia
     * @param {SocialMedia } value
     */
    public set socialMedia(value: SocialMedia) {
        this._socialMedia = value;
    }

    /**
     * Getter projectDid
     * @return {string }
     */
    public get projectDid(): string {
        return this._projectDid;
    }

    /**
     * Setter projectDid
     * @param {string } value
     */
    public set projectDid(value: string) {
        this._projectDid = value;
    }

    /**
     * Getter createdOn
     * @return {Date }
     */
    public get createdOn(): Date {
        return this._createdOn;
    }

    /**
     * Setter createdOn
     * @param {Date } value
     */
    public set createdOn(value: Date) {
        this._createdOn = value;
    }

    /**
     * Getter imageLink
     * @return {string }
     */
    public get imageLink(): string {
        return this._imageLink;
    }

    /**
     * Setter imageLink
     * @param {string } value
     */
    public set imageLink(value: string) {
        this._imageLink = value;
    }

    /**
     * Getter serviceEndpoint
     * @return {string }
     */
    public get serviceEndpoint(): string {
        return this._serviceEndpoint;
    }

    /**
     * Setter serviceEndpoint
     * @param {string } value
     */
    public set serviceEndpoint(value: string) {
        this._serviceEndpoint = value;
    }

}