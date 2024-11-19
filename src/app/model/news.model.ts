export interface NewsModel {
    id: string;
    type: string;
    sectionId: string;
    sectionName: string;
    webPublicationDate: Date;
    webTitle: string;
    webUrl: string;
    apiUrl: string;
    tags: string;
    references: string;
    isHosted: string;
    pillarId: string;
}
