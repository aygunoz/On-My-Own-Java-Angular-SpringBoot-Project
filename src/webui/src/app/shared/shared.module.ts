import {NgModule} from "@angular/core";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmationComponent} from "./confirmation/confirmation.component";
import {CommonModule} from "@angular/common";
import {BsModalRef, ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  declarations: [
    ConfirmationComponent
  ],
  entryComponents: [
    ConfirmationComponent
  ],
  exports: [
    TranslateModule,
    ModalModule,
    ReactiveFormsModule,
    ConfirmationComponent
  ]
})
export class SharedModule {
}
