import { RequestService } from '../services/request.service';

export class BaseService<T> {
    constructor(protected requestService: RequestService) {
    }

    public url: string;

    public getAllItems() {
        return this.requestService.get(this.url);
    }

    public addItem(item: T) {
        return this.requestService.post(this.url, item);
    }

    public deleteItem(itemId: string) {
        return this.requestService.deleteReq(`${this.url}${itemId}/`);
    }

    public updateItem(item: any) {
        // @ts-ignore
        return this.requestService.patch(`${this.url}${item.id}/`, item);
    }

    public getItem(itemId) {
        return this.requestService.get(`${this.url}${itemId}/`);
    }

    public sendFile(itemId: string, file: File) {
        const formData: FormData = new FormData();
        formData.append('files', file, file.name);
        // this.requestService.headers = this.requestService.headers.append('Content-Type', 'multipart/form-data');
        this.requestService.headers = this.requestService.headers.append('Accept', 'application/json');
        return this.requestService.post(`${this.url}${itemId}/parse/`, formData);
    }

}
