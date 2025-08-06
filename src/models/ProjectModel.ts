class ProjectModel {
    header: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    
    constructor(header: string, text: string, imgSrc: string,
        imgAlt: string) {
        this.header = header;
        this.text = text;
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
    }
}

export default ProjectModel;