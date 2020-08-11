import * as mm from 'moment';

export class Project {
    id: string;
    name: string;
    links?: string;
    startDate: string;
    endDate: string;
    participantsCount: number;
    location: string;

    constructor() {
        this.name = '';
        this.links = '';
        this.startDate = mm(new Date()).format('DD.MM.YYYY');
        this.endDate = mm(new Date()).format('DD.MM.YYYY');
        this.participantsCount = 0;
        this.location = '';
    }
}
