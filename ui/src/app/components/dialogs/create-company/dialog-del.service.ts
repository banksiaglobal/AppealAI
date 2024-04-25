import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRefDel } from './dialog-ref-del';
import { DIALOG_DATA } from './dialog-tokens';

export interface DialogConfig<T> {
  backdropClass?: string;
  data?: T;
  disableClose?: boolean;
  panelClass?: string | string[];
}

@Injectable({
  providedIn: 'root',
})
export class DialogDelService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>(
    component: ComponentType<T>,
    config: DialogConfig<unknown>
  ): DialogRefDel {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: config.backdropClass,
      panelClass: 'overlay-panel',
    });
    const dialogRef = new DialogRefDel(overlayRef, config);
    const injector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: DialogRefDel, useValue: dialogRef },
        { provide: DIALOG_DATA, useValue: config?.data },
      ],
    });
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);
    return dialogRef;
  }
}
