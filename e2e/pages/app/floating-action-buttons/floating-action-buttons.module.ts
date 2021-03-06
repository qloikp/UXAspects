import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FloatingActionButtonsModule, IconModule, AccessibilityModule } from '@ux-aspects/ux-aspects';
import { FloatingActionButtonsTestPageComponent } from './floating-action-buttons.testpage.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IconModule,
        FloatingActionButtonsModule,
        AccessibilityModule,
        RouterModule.forChild([{
            path: '',
            component: FloatingActionButtonsTestPageComponent
        }])
    ],
    declarations: [FloatingActionButtonsTestPageComponent],
})
export class FloatingActionButtonsTestPageModule {

}
