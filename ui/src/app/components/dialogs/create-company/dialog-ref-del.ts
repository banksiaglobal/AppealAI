import { OverlayRef } from '@angular/cdk/overlay';
import { Subject, Observable, filter } from 'rxjs';
import { DialogConfig } from './dialog-del.service';

export class DialogRefDel {
  private afterClosedSubject = new Subject<string | undefined>();

  constructor(private overlayRef: OverlayRef, config: DialogConfig<unknown>) {
    if (!config.disableClose) {
      this.overlayRef.backdropClick().subscribe(() => {
        this.close(undefined);
      });

      this.overlayRef
        .keydownEvents()
        .pipe(filter((event) => event.key === 'Escape'))
        .subscribe(() => {
          this.close(undefined);
        });
    }
  }

  public close(result: any | undefined) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  public afterClosed(): Observable<any | undefined> {
    return this.afterClosedSubject.asObservable();
  }
}
