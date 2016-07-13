/**
 * Created by zhangxu on 2016/7/11.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'app-dm-tasks',
    templateUrl: 'app/tasks.component.html',
    styleUrls: ['app/tasks.component.css']
})

export class TasksComponent {
    HEROES:Hero[] = [
        {
            id: 11,
            type: "batch update",
            source: 'fun',
            s_schema: 'fsm',
            s_table: 'f',
            target: 'fun2',
            t_schema: 'fff',
            t_table: 'xx',
            min1: 10
        },
        {
            id: 11,
            type: "once",
            source: 'fun',
            s_schema: 'fsm',
            s_table: 'f',
            target: 'fun2',
            t_schema: 'fff',
            t_table: 'xx',
            min1: 70
        },
        {
            id: 11,
            type: "update",
            source: 'fun',
            s_schema: 'fsm',
            s_table: 'f',
            target: 'fun2',
            t_schema: 'fff',
            t_table: 'xx',
            min1: 90
        },
        {
            id: 11,
            type: "merge",
            source: 'fun',
            s_schema: 'fsm',
            s_table: 'f',
            target: 'fun2',
            t_schema: 'fff',
            t_table: 'xx',
            min1: 30
        },
        {
            id: 11,
            type: "insert",
            source: 'fun',
            s_schema: 'fsm',
            s_table: 'f',
            target: 'fun2',
            t_schema: 'fff',
            t_table: 'xx',
            min1: 20
        }
    ];
}

class Hero {
    id:number;
    type:string;
    source:string;
    s_schema:string;
    s_table:string;
    target:string;
    t_schema:string;
    t_table:string;
    min1:number;
}