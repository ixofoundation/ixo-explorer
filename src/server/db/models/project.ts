interface SocialMedia {
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
}

export class Project {
    private _did: string = 'did:ixo:';
    private _pubKey: string = '';
    private _title: string = '';
    private _shortDescription: string = '';
    private _longDescription: string = '';
    private _impactAction: string = '';
    private _createdBy: string = 'did:ixo:';
    private _country: string = '';
    private _sdgs: string[] = [''];
    private _impactsRequired: number = 0;
    private _claimTemplate: string = 'default';
    private _serviceURI: string = '';
    private _socialMedia: SocialMedia = {
        facebookLink: '',
        instagramLink: '',
        twitterLink: ''
    };
    private _webLink: string = '';
    private _image: string = '';


    /**
     * Getter did
     * @return {string }
     */
    public get did(): string {
        return this._did;
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
     * Getter serviceURI
     * @return {string }
     */
    public get serviceURI(): string {
        return this._serviceURI;
    }

    /**
     * Getter socialMedia
     * @return {SocialMedia }
     */
    public get socialMedia(): SocialMedia {
        return this._socialMedia;
    }

    /**
     * Getter webLink
     * @return {string }
     */
    public get webLink(): string {
        return this._webLink;
    }

    /**
     * Getter image
     * @return {string }
     */
    public get image(): string {
        return this._image;
    }

    /**
     * Setter did
     * @param {string } value
     */
    public set did(value: string) {
        this._did = value;
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
     * Setter serviceURI
     * @param {string } value
     */
    public set serviceURI(value: string) {
        this._serviceURI = value;
    }

    /**
     * Setter socialMedia
     * @param {SocialMedia } value
     */
    public set socialMedia(value: SocialMedia) {
        this._socialMedia = value;
    }

    /**
     * Setter webLink
     * @param {string } value
     */
    public set webLink(value: string) {
        this._webLink = value;
    }

    /**
     * Setter image
     * @param {string } value
     */
    public set image(value: string) {
        this._image = value;
    }

}