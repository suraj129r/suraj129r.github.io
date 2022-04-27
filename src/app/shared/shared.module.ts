import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        TableModule,
        DropdownModule

    ],
    exports: [
        SidebarComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }