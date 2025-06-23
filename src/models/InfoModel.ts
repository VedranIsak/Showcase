class InfoModel {
    header: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    imgTitle: string;
    
    constructor(header: string, text: string, imgSrc: string,
        imgAlt: string, imgTitle: string) {
        this.header = header;
        this.text = text;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.imgTitle = imgTitle;
    }
}

export default InfoModel;