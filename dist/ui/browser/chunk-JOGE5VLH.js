import {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputModule,
  NzToolTipModule,
  NzTooltipDirective,
  SessionStorageService
} from "./chunk-M73E4B3E.js";
import {
  ENTER,
  ESCAPE,
  NzDestroyService,
  NzI18nService,
  NzResizeService,
  cancelRequestAnimationFrame,
  reqAnimFrame
} from "./chunk-VEWB337I.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective
} from "./chunk-XYDHPNTY.js";
import {
  Directionality,
  InputBoolean,
  InputNumber,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Platform,
  RouterLink,
  WithConfig,
  isStyleSupport,
  measure
} from "./chunk-6H6XYIWG.js";
import {
  DOCUMENT,
  NgIf,
  NgTemplateOutlet
} from "./chunk-OILZ7NY5.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  Renderer2,
  Subject,
  Subscription,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  afterNextRender,
  first,
  fromEvent,
  inject,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-M5MRYH5D.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-trans-button.mjs
var _NzTransButtonDirective = class _NzTransButtonDirective {
};
_NzTransButtonDirective.\u0275fac = function NzTransButtonDirective_Factory(t) {
  return new (t || _NzTransButtonDirective)();
};
_NzTransButtonDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzTransButtonDirective,
  selectors: [["button", "nz-trans-button", ""]],
  hostVars: 8,
  hostBindings: function NzTransButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("border", "0")("background", "transparent")("padding", "0")("line-height", "inherit");
    }
  },
  standalone: true
});
var NzTransButtonDirective = _NzTransButtonDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonDirective, [{
    type: Directive,
    args: [{
      selector: "button[nz-trans-button]",
      host: {
        "[style.border]": '"0"',
        "[style.background]": '"transparent"',
        "[style.padding]": '"0"',
        "[style.line-height]": '"inherit"'
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzTransButtonModule = class _NzTransButtonModule {
};
_NzTransButtonModule.\u0275fac = function NzTransButtonModule_Factory(t) {
  return new (t || _NzTransButtonModule)();
};
_NzTransButtonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzTransButtonModule
});
_NzTransButtonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzTransButtonModule = _NzTransButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransButtonDirective],
      exports: [NzTransButtonDirective]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/clipboard.mjs
var PendingCopy = class {
  constructor(text, _document) {
    this._document = _document;
    const textarea = this._textarea = this._document.createElement("textarea");
    const styles = textarea.style;
    styles.position = "fixed";
    styles.top = styles.opacity = "0";
    styles.left = "-999em";
    textarea.setAttribute("aria-hidden", "true");
    textarea.value = text;
    textarea.readOnly = true;
    (this._document.fullscreenElement || this._document.body).appendChild(textarea);
  }
  /** Finishes copying the text. */
  copy() {
    const textarea = this._textarea;
    let successful = false;
    try {
      if (textarea) {
        const currentFocus = this._document.activeElement;
        textarea.select();
        textarea.setSelectionRange(0, textarea.value.length);
        successful = this._document.execCommand("copy");
        if (currentFocus) {
          currentFocus.focus();
        }
      }
    } catch {
    }
    return successful;
  }
  /** Cleans up DOM changes used to perform the copy operation. */
  destroy() {
    const textarea = this._textarea;
    if (textarea) {
      textarea.remove();
      this._textarea = void 0;
    }
  }
};
var _Clipboard = class _Clipboard {
  constructor(document) {
    this._document = document;
  }
  /**
   * Copies the provided text into the user's clipboard.
   *
   * @param text The string to copy.
   * @returns Whether the operation was successful.
   */
  copy(text) {
    const pendingCopy = this.beginCopy(text);
    const successful = pendingCopy.copy();
    pendingCopy.destroy();
    return successful;
  }
  /**
   * Prepares a string to be copied later. This is useful for large strings
   * which take too long to successfully render and be copied in the same tick.
   *
   * The caller must call `destroy` on the returned `PendingCopy`.
   *
   * @param text The string to copy.
   * @returns the pending copy operation.
   */
  beginCopy(text) {
    return new PendingCopy(text, this._document);
  }
};
_Clipboard.\u0275fac = function Clipboard_Factory(t) {
  return new (t || _Clipboard)(\u0275\u0275inject(DOCUMENT));
};
_Clipboard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Clipboard,
  factory: _Clipboard.\u0275fac,
  providedIn: "root"
});
var Clipboard = _Clipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Clipboard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var CDK_COPY_TO_CLIPBOARD_CONFIG = new InjectionToken("CDK_COPY_TO_CLIPBOARD_CONFIG");
var _CdkCopyToClipboard = class _CdkCopyToClipboard {
  constructor(_clipboard, _ngZone, config) {
    this._clipboard = _clipboard;
    this._ngZone = _ngZone;
    this.text = "";
    this.attempts = 1;
    this.copied = new EventEmitter();
    this._pending = /* @__PURE__ */ new Set();
    if (config && config.attempts != null) {
      this.attempts = config.attempts;
    }
  }
  /** Copies the current text to the clipboard. */
  copy(attempts = this.attempts) {
    if (attempts > 1) {
      let remainingAttempts = attempts;
      const pending = this._clipboard.beginCopy(this.text);
      this._pending.add(pending);
      const attempt = () => {
        const successful = pending.copy();
        if (!successful && --remainingAttempts && !this._destroyed) {
          this._currentTimeout = this._ngZone.runOutsideAngular(() => setTimeout(attempt, 1));
        } else {
          this._currentTimeout = null;
          this._pending.delete(pending);
          pending.destroy();
          this.copied.emit(successful);
        }
      };
      attempt();
    } else {
      this.copied.emit(this._clipboard.copy(this.text));
    }
  }
  ngOnDestroy() {
    if (this._currentTimeout) {
      clearTimeout(this._currentTimeout);
    }
    this._pending.forEach((copy) => copy.destroy());
    this._pending.clear();
    this._destroyed = true;
  }
};
_CdkCopyToClipboard.\u0275fac = function CdkCopyToClipboard_Factory(t) {
  return new (t || _CdkCopyToClipboard)(\u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(CDK_COPY_TO_CLIPBOARD_CONFIG, 8));
};
_CdkCopyToClipboard.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkCopyToClipboard,
  selectors: [["", "cdkCopyToClipboard", ""]],
  hostBindings: function CdkCopyToClipboard_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function CdkCopyToClipboard_click_HostBindingHandler() {
        return ctx.copy();
      });
    }
  },
  inputs: {
    text: [InputFlags.None, "cdkCopyToClipboard", "text"],
    attempts: [InputFlags.None, "cdkCopyToClipboardAttempts", "attempts"]
  },
  outputs: {
    copied: "cdkCopyToClipboardCopied"
  },
  standalone: true
});
var CdkCopyToClipboard = _CdkCopyToClipboard;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCopyToClipboard, [{
    type: Directive,
    args: [{
      selector: "[cdkCopyToClipboard]",
      host: {
        "(click)": "copy()"
      },
      standalone: true
    }]
  }], () => [{
    type: Clipboard
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CDK_COPY_TO_CLIPBOARD_CONFIG]
    }]
  }], {
    text: [{
      type: Input,
      args: ["cdkCopyToClipboard"]
    }],
    attempts: [{
      type: Input,
      args: ["cdkCopyToClipboardAttempts"]
    }],
    copied: [{
      type: Output,
      args: ["cdkCopyToClipboardCopied"]
    }]
  });
})();
var _ClipboardModule = class _ClipboardModule {
};
_ClipboardModule.\u0275fac = function ClipboardModule_Factory(t) {
  return new (t || _ClipboardModule)();
};
_ClipboardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ClipboardModule
});
_ClipboardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var ClipboardModule = _ClipboardModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClipboardModule, [{
    type: NgModule,
    args: [{
      imports: [CdkCopyToClipboard],
      exports: [CdkCopyToClipboard]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-typography.mjs
function NzTextCopyComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", icon_r1);
  }
}
var _c0 = ["textarea"];
function NzTextEditComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "textarea", 3, 1);
    \u0275\u0275listener("blur", function NzTextEditComponent_ng_template_0_Template_textarea_blur_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 4);
    \u0275\u0275listener("click", function NzTextEditComponent_ng_template_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275element(3, "span", 5);
    \u0275\u0275elementEnd();
  }
}
function NzTextEditComponent_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const icon_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("nzType", icon_r4);
  }
}
function NzTextEditComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function NzTextEditComponent_ng_template_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClick());
    });
    \u0275\u0275template(1, NzTextEditComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzTooltipTitle", ctx_r1.tooltip === null ? null : ctx_r1.tooltip || (ctx_r1.locale == null ? null : ctx_r1.locale.edit));
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.icon);
  }
}
var _c1 = ["ellipsisContainer"];
var _c2 = ["expandable"];
var _c3 = ["contentTemplate"];
var _c4 = ["*"];
var _c5 = (a0) => ({
  content: a0
});
function NzTypographyComponent_ng_template_0_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 0, ["*ngIf", "!content"]);
  }
}
function NzTypographyComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzTypographyComponent_ng_template_0_ng_content_0_Template, 1, 0, "ng-content", 4);
    \u0275\u0275text(1);
  }
  if (rf & 2) {
    const content_r1 = ctx.content;
    \u0275\u0275property("ngIf", !content_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", content_r1, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template(rf, ctx) {
}
function NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzTypographyComponent_ng_container_2_ng_container_1_ng_template_1_Template, 0, 0, "ng-template", 8)(2, NzTypographyComponent_ng_container_2_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const contentTemplate_r3 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", contentTemplate_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(3, _c5, ctx_r1.nzContent));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ellipsisStr);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzSuffix);
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10, 3);
    \u0275\u0275listener("click", function NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onExpand());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.locale == null ? null : ctx_r1.locale.expand, " ");
  }
}
function NzTypographyComponent_ng_container_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", null, 2);
    \u0275\u0275template(2, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_2_Template, 2, 1, "ng-container", 4)(3, NzTypographyComponent_ng_container_2_ng_template_2_ng_container_3_Template, 2, 1, "ng-container", 4)(4, NzTypographyComponent_ng_container_2_ng_template_2_a_4_Template, 3, 1, "a", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isEllipsis);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nzSuffix);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.nzExpandable && ctx_r1.isEllipsis);
  }
}
function NzTypographyComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzTypographyComponent_ng_container_2_ng_container_1_Template, 3, 5, "ng-container", 7)(2, NzTypographyComponent_ng_container_2_ng_template_2_Template, 5, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const jsEllipsis_r5 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.expanded || !ctx_r1.hasOperationsWithEllipsis && ctx_r1.nzEllipsisRows === 1 && !ctx_r1.hasEllipsisObservers || ctx_r1.canCssEllipsis || ctx_r1.nzSuffix && ctx_r1.expanded)("ngIfElse", jsEllipsis_r5);
  }
}
function NzTypographyComponent_nz_text_edit_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-text-edit", 11);
    \u0275\u0275listener("endEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_endEditing_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onEndEditing($event));
    })("startEditing", function NzTypographyComponent_nz_text_edit_3_Template_nz_text_edit_startEditing_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStartEditing());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.nzContent)("icon", ctx_r1.nzEditIcon)("tooltip", ctx_r1.nzEditTooltip);
  }
}
function NzTypographyComponent_nz_text_copy_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-text-copy", 12);
    \u0275\u0275listener("textCopy", function NzTypographyComponent_nz_text_copy_4_Template_nz_text_copy_textCopy_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onTextCopy($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("text", ctx_r1.copyText)("tooltips", ctx_r1.nzCopyTooltips)("icons", ctx_r1.nzCopyIcons);
  }
}
var _NzTextCopyComponent = class _NzTextCopyComponent {
  constructor(host, cdr, clipboard, i18n) {
    this.host = host;
    this.cdr = cdr;
    this.clipboard = clipboard;
    this.i18n = i18n;
    this.copied = false;
    this.nativeElement = this.host.nativeElement;
    this.copyTooltip = null;
    this.copedTooltip = null;
    this.copyIcon = "copy";
    this.copedIcon = "check";
    this.destroy$ = new Subject();
    this.icons = ["copy", "check"];
    this.textCopy = new EventEmitter();
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.updateTooltips();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      tooltips,
      icons
    } = changes;
    if (tooltips) {
      this.updateTooltips();
    }
    if (icons) {
      this.updateIcons();
    }
  }
  ngOnDestroy() {
    clearTimeout(this.copyId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  onClick() {
    if (this.copied) {
      return;
    }
    this.copied = true;
    this.cdr.detectChanges();
    const text = this.text;
    this.textCopy.emit(text);
    this.clipboard.copy(text);
    this.onCopied();
  }
  onCopied() {
    clearTimeout(this.copyId);
    this.copyId = setTimeout(() => {
      this.copied = false;
      this.cdr.detectChanges();
    }, 3e3);
  }
  updateTooltips() {
    if (this.tooltips === null) {
      this.copedTooltip = null;
      this.copyTooltip = null;
    } else if (Array.isArray(this.tooltips)) {
      const [copyTooltip, copedTooltip] = this.tooltips;
      this.copyTooltip = copyTooltip || this.locale?.copy;
      this.copedTooltip = copedTooltip || this.locale?.copied;
    } else {
      this.copyTooltip = this.locale?.copy;
      this.copedTooltip = this.locale?.copied;
    }
    this.cdr.markForCheck();
  }
  updateIcons() {
    const [copyIcon, copedIcon] = this.icons;
    this.copyIcon = copyIcon;
    this.copedIcon = copedIcon;
    this.cdr.markForCheck();
  }
};
_NzTextCopyComponent.\u0275fac = function NzTextCopyComponent_Factory(t) {
  return new (t || _NzTextCopyComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Clipboard), \u0275\u0275directiveInject(NzI18nService));
};
_NzTextCopyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzTextCopyComponent,
  selectors: [["nz-text-copy"]],
  inputs: {
    text: "text",
    tooltips: "tooltips",
    icons: "icons"
  },
  outputs: {
    textCopy: "textCopy"
  },
  exportAs: ["nzTextCopy"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 4,
  consts: [["type", "button", "nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-copy", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextCopyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function NzTextCopyComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      \u0275\u0275template(1, NzTextCopyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ant-typography-copy-success", ctx.copied);
      \u0275\u0275property("nzTooltipTitle", ctx.copied ? ctx.copedTooltip : ctx.copyTooltip);
      \u0275\u0275advance();
      \u0275\u0275property("nzStringTemplateOutlet", ctx.copied ? ctx.copedIcon : ctx.copyIcon);
    }
  },
  dependencies: [NzToolTipModule, NzTooltipDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextCopyComponent = _NzTextCopyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextCopyComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-copy",
      exportAs: "nzTextCopy",
      template: `
    <button
      type="button"
      nz-tooltip
      nz-trans-button
      [nzTooltipTitle]="copied ? copedTooltip : copyTooltip"
      class="ant-typography-copy"
      [class.ant-typography-copy-success]="copied"
      (click)="onClick()"
    >
      <ng-container *nzStringTemplateOutlet="copied ? copedIcon : copyIcon; let icon">
        <span nz-icon [nzType]="icon"></span>
      </ng-container>
    </button>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      imports: [NzToolTipModule, NzTransButtonModule, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Clipboard
  }, {
    type: NzI18nService
  }], {
    text: [{
      type: Input
    }],
    tooltips: [{
      type: Input
    }],
    icons: [{
      type: Input
    }],
    textCopy: [{
      type: Output
    }]
  });
})();
var _NzTextEditComponent = class _NzTextEditComponent {
  set textarea(textarea) {
    this.textarea$.next(textarea);
  }
  constructor(ngZone, host, cdr, i18n, destroy$) {
    this.ngZone = ngZone;
    this.host = host;
    this.cdr = cdr;
    this.i18n = i18n;
    this.destroy$ = destroy$;
    this.editing = false;
    this.icon = "edit";
    this.startEditing = new EventEmitter();
    this.endEditing = new EventEmitter(true);
    this.nativeElement = this.host.nativeElement;
    this.textarea$ = new BehaviorSubject(null);
    this.injector = inject(Injector);
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.textarea$.pipe(switchMap((textarea) => (
      // Caretaker note: we explicitly should call `subscribe()` within the root zone.
      // `runOutsideAngular(() => fromEvent(...))` will just create an observable within the root zone,
      // but `addEventListener` is called when the `fromEvent` is subscribed.
      textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "keydown").subscribe(subscriber))) : EMPTY
    )), takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode !== ESCAPE && event.keyCode !== ENTER) {
        return;
      }
      this.ngZone.run(() => {
        if (event.keyCode === ESCAPE) {
          this.onCancel();
        } else {
          this.onEnter(event);
        }
        this.cdr.markForCheck();
      });
    });
    this.textarea$.pipe(switchMap((textarea) => textarea ? new Observable((subscriber) => this.ngZone.runOutsideAngular(() => fromEvent(textarea.nativeElement, "input").subscribe(subscriber))) : EMPTY), takeUntil(this.destroy$)).subscribe((event) => {
      this.currentText = event.target.value;
    });
  }
  onClick() {
    this.beforeText = this.text;
    this.currentText = this.beforeText;
    this.editing = true;
    this.startEditing.emit();
    this.focusAndSetValue();
  }
  confirm() {
    this.editing = false;
    this.endEditing.emit(this.currentText);
  }
  onEnter(event) {
    event.stopPropagation();
    event.preventDefault();
    this.confirm();
  }
  onCancel() {
    this.currentText = this.beforeText;
    this.confirm();
  }
  focusAndSetValue() {
    const {
      injector
    } = this;
    afterNextRender(() => {
      this.textarea$.pipe(
        // It may still not be available, so we need to wait until view queries
        // are executed during the change detection. It's safer to wait until
        // the query runs and the textarea is set on the behavior subject.
        first((textarea) => textarea != null),
        takeUntil(this.destroy$)
      ).subscribe((textarea) => {
        textarea.nativeElement.focus();
        textarea.nativeElement.value = this.currentText || "";
        this.autosizeDirective.resizeToFitContent();
        this.cdr.markForCheck();
      });
    }, {
      injector
    });
  }
};
_NzTextEditComponent.\u0275fac = function NzTextEditComponent_Factory(t) {
  return new (t || _NzTextEditComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(NzDestroyService));
};
_NzTextEditComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzTextEditComponent,
  selectors: [["nz-text-edit"]],
  viewQuery: function NzTextEditComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(NzAutosizeDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textarea = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.autosizeDirective = _t.first);
    }
  },
  inputs: {
    text: "text",
    icon: "icon",
    tooltip: "tooltip"
  },
  outputs: {
    startEditing: "startEditing",
    endEditing: "endEditing"
  },
  exportAs: ["nzTextEdit"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 2,
  consts: [["notEditing", ""], ["textarea", ""], [3, "ngIf", "ngIfElse"], ["nz-input", "", "nzAutosize", "", 3, "blur"], ["nz-trans-button", "", 1, "ant-typography-edit-content-confirm", 3, "click"], ["nz-icon", "", "nzType", "enter"], ["nz-tooltip", "", "nz-trans-button", "", 1, "ant-typography-edit", 3, "click", "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType"]],
  template: function NzTextEditComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzTextEditComponent_ng_template_0_Template, 4, 0, "ng-template", 2)(1, NzTextEditComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const notEditing_r5 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.editing)("ngIfElse", notEditing_r5);
    }
  },
  dependencies: [NgIf, NzInputModule, NzInputDirective, NzAutosizeDirective, NzTransButtonModule, NzTransButtonDirective, NzIconModule, NzIconDirective, NzToolTipModule, NzTooltipDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzTextEditComponent = _NzTextEditComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTextEditComponent, [{
    type: Component,
    args: [{
      selector: "nz-text-edit",
      exportAs: "nzTextEdit",
      template: `
    <ng-template [ngIf]="editing" [ngIfElse]="notEditing">
      <textarea #textarea nz-input nzAutosize (blur)="confirm()"></textarea>
      <button nz-trans-button class="ant-typography-edit-content-confirm" (click)="confirm()">
        <span nz-icon nzType="enter"></span>
      </button>
    </ng-template>

    <ng-template #notEditing>
      <button
        nz-tooltip
        nz-trans-button
        class="ant-typography-edit"
        [nzTooltipTitle]="tooltip === null ? null : tooltip || locale?.edit"
        (click)="onClick()"
      >
        <ng-container *nzStringTemplateOutlet="icon; let icon">
          <span nz-icon [nzType]="icon"></span>
        </ng-container>
      </button>
    </ng-template>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      providers: [NzDestroyService],
      imports: [NgIf, NzInputModule, NzTransButtonModule, NzIconModule, NzToolTipModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzDestroyService
  }], {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    startEditing: [{
      type: Output
    }],
    endEditing: [{
      type: Output
    }],
    textarea: [{
      type: ViewChild,
      args: ["textarea", {
        static: false
      }]
    }],
    autosizeDirective: [{
      type: ViewChild,
      args: [NzAutosizeDirective, {
        static: false
      }]
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME = "typography";
var EXPAND_ELEMENT_CLASSNAME = "ant-typography-expand";
var _NzTypographyComponent = class _NzTypographyComponent {
  get hasEllipsisObservers() {
    return this.nzOnEllipsis.observers.length > 0;
  }
  get canCssEllipsis() {
    return this.nzEllipsis && this.cssEllipsis && !this.expanded && !this.hasEllipsisObservers;
  }
  get hasOperationsWithEllipsis() {
    return (this.nzCopyable || this.nzEditable || this.nzExpandable) && this.nzEllipsis;
  }
  get copyText() {
    return typeof this.nzCopyText === "string" ? this.nzCopyText : this.nzContent;
  }
  constructor(nzConfigService, host, cdr, viewContainerRef, renderer, platform, i18n, document, resizeService, directionality) {
    this.nzConfigService = nzConfigService;
    this.host = host;
    this.cdr = cdr;
    this.viewContainerRef = viewContainerRef;
    this.renderer = renderer;
    this.platform = platform;
    this.i18n = i18n;
    this.resizeService = resizeService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzCopyable = false;
    this.nzEditable = false;
    this.nzDisabled = false;
    this.nzExpandable = false;
    this.nzEllipsis = false;
    this.nzCopyTooltips = void 0;
    this.nzCopyIcons = ["copy", "check"];
    this.nzEditTooltip = void 0;
    this.nzEditIcon = "edit";
    this.nzEllipsisRows = 1;
    this.nzContentChange = new EventEmitter();
    this.nzCopy = new EventEmitter();
    this.nzExpandChange = new EventEmitter();
    this.nzOnEllipsis = new EventEmitter();
    this.expandableBtnElementCache = null;
    this.editing = false;
    this.cssEllipsis = false;
    this.isEllipsis = true;
    this.expanded = false;
    this.ellipsisStr = "...";
    this.dir = "ltr";
    this.viewInit = false;
    this.rfaId = -1;
    this.destroy$ = new Subject();
    this.windowResizeSubscription = Subscription.EMPTY;
    this.document = document;
  }
  onTextCopy(text) {
    this.nzCopy.emit(text);
  }
  onStartEditing() {
    this.editing = true;
  }
  onEndEditing(text) {
    this.editing = false;
    this.nzContentChange.emit(text);
    if (this.nzContent === text) {
      this.renderOnNextFrame();
    }
    this.cdr.markForCheck();
  }
  onExpand() {
    this.isEllipsis = false;
    this.expanded = true;
    this.nzExpandChange.emit();
    this.nzOnEllipsis.emit(false);
  }
  canUseCSSEllipsis() {
    if (this.nzEditable || this.nzCopyable || this.nzExpandable || this.nzSuffix) {
      return false;
    }
    if (this.hasEllipsisObservers) {
      return false;
    }
    if (this.nzEllipsisRows === 1) {
      return isStyleSupport("textOverflow");
    } else {
      return isStyleSupport("webkitLineClamp");
    }
  }
  renderOnNextFrame() {
    cancelRequestAnimationFrame(this.rfaId);
    if (!this.viewInit || !this.nzEllipsis || this.nzEllipsisRows < 0 || this.expanded || !this.platform.isBrowser) {
      return;
    }
    this.rfaId = reqAnimFrame(() => {
      this.syncEllipsis();
    });
  }
  getOriginContentViewRef() {
    const viewRef = this.viewContainerRef.createEmbeddedView(this.contentTemplate, {
      content: this.nzContent
    });
    viewRef.detectChanges();
    return {
      viewRef,
      removeView: () => {
        this.viewContainerRef.remove(this.viewContainerRef.indexOf(viewRef));
      }
    };
  }
  syncEllipsis() {
    if (this.cssEllipsis) {
      return;
    }
    const {
      viewRef,
      removeView
    } = this.getOriginContentViewRef();
    const fixedNodes = [this.textCopyRef, this.textEditRef].filter((e) => e && e.nativeElement).map((e) => e.nativeElement);
    const expandableBtnElement = this.getExpandableBtnElement();
    if (expandableBtnElement) {
      fixedNodes.push(expandableBtnElement);
    }
    const {
      contentNodes,
      text,
      ellipsis
    } = measure(this.host.nativeElement, this.nzEllipsisRows, viewRef.rootNodes, fixedNodes, this.ellipsisStr, this.nzSuffix);
    removeView();
    this.ellipsisText = text;
    if (ellipsis !== this.isEllipsis) {
      this.isEllipsis = ellipsis;
      this.nzOnEllipsis.emit(ellipsis);
    }
    const ellipsisContainerNativeElement = this.ellipsisContainer.nativeElement;
    while (ellipsisContainerNativeElement.firstChild) {
      this.renderer.removeChild(ellipsisContainerNativeElement, ellipsisContainerNativeElement.firstChild);
    }
    contentNodes.forEach((n) => {
      this.renderer.appendChild(ellipsisContainerNativeElement, n.cloneNode(true));
    });
    this.cdr.markForCheck();
  }
  // Need to create the element for calculation size before view init
  getExpandableBtnElement() {
    if (this.nzExpandable) {
      const expandText = this.locale ? this.locale.expand : "";
      const cache = this.expandableBtnElementCache;
      if (!cache || cache.innerText === expandText) {
        const el = this.document.createElement("a");
        el.className = EXPAND_ELEMENT_CLASSNAME;
        el.innerText = expandText;
        this.expandableBtnElementCache = el;
      }
      return this.expandableBtnElementCache;
    } else {
      this.expandableBtnElementCache = null;
      return null;
    }
  }
  renderAndSubscribeWindowResize() {
    if (this.platform.isBrowser) {
      this.windowResizeSubscription.unsubscribe();
      this.cssEllipsis = this.canUseCSSEllipsis();
      this.renderOnNextFrame();
      this.windowResizeSubscription = this.resizeService.subscribe().pipe(takeUntil(this.destroy$)).subscribe(() => this.renderOnNextFrame());
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Text");
      this.cdr.markForCheck();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.viewInit = true;
    this.renderAndSubscribeWindowResize();
  }
  ngOnChanges(changes) {
    const {
      nzCopyable,
      nzEditable,
      nzExpandable,
      nzEllipsis,
      nzContent,
      nzEllipsisRows,
      nzSuffix
    } = changes;
    if (nzCopyable || nzEditable || nzExpandable || nzEllipsis || nzContent || nzEllipsisRows || nzSuffix) {
      if (this.nzEllipsis) {
        if (this.expanded) {
          this.windowResizeSubscription.unsubscribe();
        } else {
          this.renderAndSubscribeWindowResize();
        }
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.expandableBtnElementCache = null;
    this.windowResizeSubscription.unsubscribe();
  }
};
_NzTypographyComponent.\u0275fac = function NzTypographyComponent_Factory(t) {
  return new (t || _NzTypographyComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(NzResizeService), \u0275\u0275directiveInject(Directionality, 8));
};
_NzTypographyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzTypographyComponent,
  selectors: [["nz-typography"], ["", "nz-typography", ""], ["p", "nz-paragraph", ""], ["span", "nz-text", ""], ["h1", "nz-title", ""], ["h2", "nz-title", ""], ["h3", "nz-title", ""], ["h4", "nz-title", ""]],
  viewQuery: function NzTypographyComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(NzTextEditComponent, 5);
      \u0275\u0275viewQuery(NzTextCopyComponent, 5);
      \u0275\u0275viewQuery(_c1, 5);
      \u0275\u0275viewQuery(_c2, 5);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textEditRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textCopyRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.ellipsisContainer = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expandableBtn = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
    }
  },
  hostVars: 26,
  hostBindings: function NzTypographyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("-webkit-line-clamp", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1 ? ctx.nzEllipsisRows : null);
      \u0275\u0275classProp("ant-typography", !ctx.editing)("ant-typography-rtl", ctx.dir === "rtl")("ant-typography-edit-content", ctx.editing)("ant-typography-secondary", ctx.nzType === "secondary")("ant-typography-warning", ctx.nzType === "warning")("ant-typography-danger", ctx.nzType === "danger")("ant-typography-success", ctx.nzType === "success")("ant-typography-disabled", ctx.nzDisabled)("ant-typography-ellipsis", ctx.nzEllipsis && !ctx.expanded)("ant-typography-single-line", ctx.nzEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-single-line", ctx.canCssEllipsis && ctx.nzEllipsisRows === 1)("ant-typography-ellipsis-multiple-line", ctx.canCssEllipsis && ctx.nzEllipsisRows > 1);
    }
  },
  inputs: {
    nzCopyable: "nzCopyable",
    nzEditable: "nzEditable",
    nzDisabled: "nzDisabled",
    nzExpandable: "nzExpandable",
    nzEllipsis: "nzEllipsis",
    nzCopyTooltips: "nzCopyTooltips",
    nzCopyIcons: "nzCopyIcons",
    nzEditTooltip: "nzEditTooltip",
    nzEditIcon: "nzEditIcon",
    nzContent: "nzContent",
    nzEllipsisRows: "nzEllipsisRows",
    nzType: "nzType",
    nzCopyText: "nzCopyText",
    nzSuffix: "nzSuffix"
  },
  outputs: {
    nzContentChange: "nzContentChange",
    nzCopy: "nzCopy",
    nzExpandChange: "nzExpandChange",
    nzOnEllipsis: "nzOnEllipsis"
  },
  exportAs: ["nzTypography"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c4,
  decls: 5,
  vars: 3,
  consts: [["contentTemplate", ""], ["jsEllipsis", ""], ["ellipsisContainer", ""], ["expandable", ""], [4, "ngIf"], [3, "text", "icon", "tooltip", "endEditing", "startEditing", 4, "ngIf"], [3, "text", "tooltips", "icons", "textCopy", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "ant-typography-expand", 3, "click", 4, "ngIf"], [1, "ant-typography-expand", 3, "click"], [3, "endEditing", "startEditing", "text", "icon", "tooltip"], [3, "textCopy", "text", "tooltips", "icons"]],
  template: function NzTypographyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzTypographyComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NzTypographyComponent_ng_container_2_Template, 4, 2, "ng-container", 4)(3, NzTypographyComponent_nz_text_edit_3_Template, 1, 3, "nz-text-edit", 5)(4, NzTypographyComponent_nz_text_copy_4_Template, 1, 3, "nz-text-copy", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.editing);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.nzEditable);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.nzCopyable && !ctx.editing);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzTypographyComponent = _NzTypographyComponent;
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzCopyable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzEditable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzExpandable", void 0);
__decorate([InputBoolean()], NzTypographyComponent.prototype, "nzEllipsis", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyTooltips", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzCopyIcons", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditTooltip", void 0);
__decorate([WithConfig()], NzTypographyComponent.prototype, "nzEditIcon", void 0);
__decorate([WithConfig(), InputNumber()], NzTypographyComponent.prototype, "nzEllipsisRows", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyComponent, [{
    type: Component,
    args: [{
      selector: `
  nz-typography,
  [nz-typography],
  p[nz-paragraph],
  span[nz-text],
  h1[nz-title], h2[nz-title], h3[nz-title], h4[nz-title]
  `,
      exportAs: "nzTypography",
      template: `
    <ng-template #contentTemplate let-content="content">
      <ng-content *ngIf="!content"></ng-content>
      {{ content }}
    </ng-template>
    <ng-container *ngIf="!editing">
      <ng-container
        *ngIf="
          expanded ||
            (!hasOperationsWithEllipsis && nzEllipsisRows === 1 && !hasEllipsisObservers) ||
            canCssEllipsis ||
            (nzSuffix && expanded);
          else jsEllipsis
        "
      >
        <ng-template
          [ngTemplateOutlet]="contentTemplate"
          [ngTemplateOutletContext]="{ content: nzContent }"
        ></ng-template>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
      </ng-container>
      <ng-template #jsEllipsis>
        <span #ellipsisContainer></span>
        <ng-container *ngIf="isEllipsis">{{ ellipsisStr }}</ng-container>
        <ng-container *ngIf="nzSuffix">{{ nzSuffix }}</ng-container>
        <a #expandable *ngIf="nzExpandable && isEllipsis" class="ant-typography-expand" (click)="onExpand()">
          {{ locale?.expand }}
        </a>
      </ng-template>
    </ng-container>

    <nz-text-edit
      *ngIf="nzEditable"
      [text]="nzContent"
      [icon]="nzEditIcon"
      [tooltip]="nzEditTooltip"
      (endEditing)="onEndEditing($event)"
      (startEditing)="onStartEditing()"
    ></nz-text-edit>

    <nz-text-copy
      *ngIf="nzCopyable && !editing"
      [text]="copyText"
      [tooltips]="nzCopyTooltips"
      [icons]="nzCopyIcons"
      (textCopy)="onTextCopy($event)"
    ></nz-text-copy>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      host: {
        "[class.ant-typography]": "!editing",
        "[class.ant-typography-rtl]": 'dir === "rtl"',
        "[class.ant-typography-edit-content]": "editing",
        "[class.ant-typography-secondary]": 'nzType === "secondary"',
        "[class.ant-typography-warning]": 'nzType === "warning"',
        "[class.ant-typography-danger]": 'nzType === "danger"',
        "[class.ant-typography-success]": 'nzType === "success"',
        "[class.ant-typography-disabled]": "nzDisabled",
        "[class.ant-typography-ellipsis]": "nzEllipsis && !expanded",
        "[class.ant-typography-single-line]": "nzEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-single-line]": "canCssEllipsis && nzEllipsisRows === 1",
        "[class.ant-typography-ellipsis-multiple-line]": "canCssEllipsis && nzEllipsisRows > 1",
        "[style.-webkit-line-clamp]": "(canCssEllipsis && nzEllipsisRows > 1) ? nzEllipsisRows : null"
      },
      imports: [NgIf, NgTemplateOutlet, NzTextEditComponent, NzTextCopyComponent],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: ViewContainerRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: NzI18nService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: NzResizeService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzCopyable: [{
      type: Input
    }],
    nzEditable: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzExpandable: [{
      type: Input
    }],
    nzEllipsis: [{
      type: Input
    }],
    nzCopyTooltips: [{
      type: Input
    }],
    nzCopyIcons: [{
      type: Input
    }],
    nzEditTooltip: [{
      type: Input
    }],
    nzEditIcon: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzEllipsisRows: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzCopyText: [{
      type: Input
    }],
    nzSuffix: [{
      type: Input
    }],
    nzContentChange: [{
      type: Output
    }],
    nzCopy: [{
      type: Output
    }],
    nzExpandChange: [{
      type: Output
    }],
    nzOnEllipsis: [{
      type: Output
    }],
    textEditRef: [{
      type: ViewChild,
      args: [NzTextEditComponent, {
        static: false
      }]
    }],
    textCopyRef: [{
      type: ViewChild,
      args: [NzTextCopyComponent, {
        static: false
      }]
    }],
    ellipsisContainer: [{
      type: ViewChild,
      args: ["ellipsisContainer", {
        static: false
      }]
    }],
    expandableBtn: [{
      type: ViewChild,
      args: ["expandable", {
        static: false
      }]
    }],
    contentTemplate: [{
      type: ViewChild,
      args: ["contentTemplate", {
        static: false
      }]
    }]
  });
})();
var _NzTypographyModule = class _NzTypographyModule {
};
_NzTypographyModule.\u0275fac = function NzTypographyModule_Factory(t) {
  return new (t || _NzTypographyModule)();
};
_NzTypographyModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzTypographyModule
});
_NzTypographyModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
});
var NzTypographyModule = _NzTypographyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTypographyModule, [{
    type: NgModule,
    args: [{
      imports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent],
      exports: [NzTypographyComponent, NzTextCopyComponent, NzTextEditComponent]
    }]
  }], null, null);
})();

// src/app/pages/welcome/welcome.component.ts
var _WelcomeComponent = class _WelcomeComponent {
  constructor(localStorage) {
    this.localStorage = localStorage;
  }
  clearStorageToStart() {
    this.localStorage.clean();
  }
};
_WelcomeComponent.\u0275fac = function WelcomeComponent_Factory(t) {
  return new (t || _WelcomeComponent)(\u0275\u0275directiveInject(SessionStorageService));
};
_WelcomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WelcomeComponent, selectors: [["app-welcome"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 64, vars: 0, consts: [[1, "page"], [1, "container-page"], [1, "welcome-box"], [1, "section"], ["routerLink", "/start", "nz-button", "", "nzType", "primary", 1, "btn-link", 3, "click"], ["routerLink", "/letter", "nz-button", "", "nzType", "primary", 1, "btn-link", 3, "click"], ["href", "https://github.com/banksiaglobal/AppealAI", "target", "_blank"], ["href", "https://appealai.cloud.banksia.global/", "target", "_blank"]], template: function WelcomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
    \u0275\u0275text(4, "Welcome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3);
    \u0275\u0275text(6, " The AppealAI project is a fascinating case study on integrating modern AI technologies, specifically vector search and generative AI, with InterSystems technologies to create practical and impactful solutions. It's a sample application designed to automate the process of writing appeals against insurance denials for medical procedures. Leveraging advanced AI technologies, it assists users by generating tailored appeal letters based on specific case details entered by the user. The app utilizes a database of documents related to each specific insurance product to enhance the effectiveness of each generated appeal. Here\u2019s an overview of how these components work together in the AppealAI application: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h2");
    \u0275\u0275text(8, "Understanding the Components");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 3)(10, "ul")(11, "li")(12, "b");
    \u0275\u0275text(13, "Vector Search:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, " This technology allows the system to search through large amounts of data by converting text into vectors (arrays of numbers) that represent the text in a multi-dimensional space. By using algorithms like cosine similarity, the system can quickly find the most relevant texts based on vector closeness. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li")(16, "b");
    \u0275\u0275text(17, "Generative AI:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " This involves AI models that can generate text based on input data. In the case of AppealAI, generative AI helps draft personalized appeal letters by understanding the context and specifics of each case, such as the medical procedure involved and the details of the insurance denial. We are using approach called ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "li")(20, "b");
    \u0275\u0275text(21, "Retrieval-Augmented Generation (RAG):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " It's a model architecture that combines previous two components of artificial intelligence by using vector search to find documents or information that are relevant to the input query, incorporating it into the AI prompt, and using Generative AI to generate a template of an appeal letter ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "h2");
    \u0275\u0275text(24, "How AppealAI Works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 3)(26, "ul")(27, "li")(28, "b");
    \u0275\u0275text(29, "Setup: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "First, we use InterSystems IRIS to manage and store all the available data about insurance products, such as insurance contracts, policy limits, exclusions, etc. System will convert documents to text, split them into small chunks, and convert those chunks into vectors. This data serves as the foundation for querying during operations. ");
    \u0275\u0275elementStart(31, "a", 4);
    \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_31_listener() {
      return ctx.clearStorageToStart();
    });
    \u0275\u0275text(32, "Go to Setup");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "b");
    \u0275\u0275text(34, " Run: ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, "Users input letters with specific details about the insurance denial, such as the procedure code, reason for denial, and patient information. The system uses vector search to quickly sift through data uploaded on the previous step. Then, using generative AI, the system drafts a customized appeal letter. ");
    \u0275\u0275elementStart(36, "a", 5);
    \u0275\u0275listener("click", function WelcomeComponent_Template_a_click_36_listener() {
      return ctx.clearStorageToStart();
    });
    \u0275\u0275text(37, "Go to Run");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 3)(39, "h2");
    \u0275\u0275text(40, "Technologies Used:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p");
    \u0275\u0275text(42, "Frontend - ");
    \u0275\u0275elementStart(43, "b");
    \u0275\u0275text(44, "Angular");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46, "Backend - ");
    \u0275\u0275elementStart(47, "b");
    \u0275\u0275text(48, "IRIS");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, " + ");
    \u0275\u0275elementStart(50, "b");
    \u0275\u0275text(51, "LangChain");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(52, "div", 3)(53, "h2");
    \u0275\u0275text(54, "Documentation:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p");
    \u0275\u0275text(56, "You can read more about our application and its technical implementation at the following link ");
    \u0275\u0275elementStart(57, "a", 6);
    \u0275\u0275text(58, "GitHub");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 3)(60, "h2");
    \u0275\u0275text(61, "Hosted Demo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "a", 7);
    \u0275\u0275text(63, "AppealAI");
    \u0275\u0275elementEnd()()()()();
  }
}, dependencies: [NzButtonModule, NzButtonComponent, NzTransitionPatchDirective, RouterLink, NzTypographyModule], styles: ["\n\n.btn-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 1em auto;\n  height: 50px;\n  align-items: center;\n  max-width: 150px;\n}\n/*# sourceMappingURL=welcome.component.css.map */"] });
var WelcomeComponent = _WelcomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WelcomeComponent, { className: "WelcomeComponent", filePath: "src\\app\\pages\\welcome\\welcome.component.ts", lineNumber: 14 });
})();
export {
  WelcomeComponent
};
//# sourceMappingURL=chunk-JOGE5VLH.js.map
