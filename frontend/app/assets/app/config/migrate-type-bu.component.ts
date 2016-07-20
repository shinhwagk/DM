/**
 * Created by zhangxu on 2016/7/11.
 */
/**
 * 迁移类型 batch update
 * id: 1
 * */
import {Component} from '@angular/core';

@Component({
    selector: 'app-dm-edit-type-bu',
    templateUrl: 'app/config/migrate-type-bu.component.html',
    styleUrls: ['app/config/migrate-type-bu.component.css']
})

export class MigrateTypeBatchUpdateComponent {
    migrate_type:string = "batch-update"

    //0是没有配置完成，1是配置完成
    sourceConfigStatue:number = 0;
    targetConfigStatue:number = 0;
    migrateConfigStatue:number = 0;

    setSourceConfigure() {
        alert("source")
    }

    setTargetConfigure() {
        alert("target")
    }

    setMigrateConfigure() {
        alert("migrate")
    }
}