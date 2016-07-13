/**
 * Created by zhangxu on 2016/7/11.
 */
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";

@Injectable()
export class TasksService {
    constructor(private _http:Http) {
    }

    getTasks() {
        return this._http.get("/api/tasks").map((res:Response) => res.json())
    }

    getTaskById(id) {
        return this._http.get(`/api/task/${id}`).map(res => res.json())
    }
}