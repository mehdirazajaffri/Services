import {Injectable} from '@angular/core';


@Injectable()
export class StorageService {
   public  write(key: string, value: any) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    }

    public read(key: string) {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }

        return null;
    }
}