
import { Environment_Type, environment } from "../environment";


export class CommonService {

    APIUrl: string;

    constructor() {
        switch (environment) {
            case Environment_Type.local:
                this.APIUrl = "http://127.0.0.1:8000/api";
                break;
            case Environment_Type.dev:
                this.APIUrl = "http://127.0.0.1:8000/api";
                break;
            case Environment_Type.prod:
                this.APIUrl = "http://127.0.0.1:8000/api";
                break;
        }
    }



}