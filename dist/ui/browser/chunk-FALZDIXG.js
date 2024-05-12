import {
  CompanyService,
  DocsService,
  LetterService,
  NzColDirective,
  NzCollapseComponent,
  NzCollapseModule,
  NzCollapsePanelComponent,
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzFormDirective,
  NzFormItemComponent,
  NzFormModule,
  NzGridModule,
  NzMessageModule,
  NzMessageService,
  NzOptionComponent,
  NzResizeObserver,
  NzRowDirective,
  NzSelectComponent,
  NzSelectModule,
  NzSpinComponent,
  NzSpinModule,
  PackageService
} from "./chunk-6ONEQOLB.js";
import {
  NzFlexDirective,
  NzFlexModule,
  NzLayoutModule
} from "./chunk-2EKY2HRY.js";
import {
  NzAutosizeDirective,
  NzInputDirective,
  NzInputModule,
  NzToolTipModule,
  NzTooltipDirective,
  SessionStorageService
} from "./chunk-6GYC5COE.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NonNullableFormBuilder,
  NzDestroyService,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-YIQPJEGN.js";
import {
  NzButtonComponent,
  NzButtonModule,
  NzTransitionPatchDirective,
  NzWaveDirective
} from "./chunk-Y2PAPL5U.js";
import {
  Directionality,
  InputBoolean,
  InputNumber,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  PREFIX,
  PlatformModule,
  RouterLink,
  WithConfig
} from "./chunk-5A5HIE3N.js";
import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  Location,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-OILZ7NY5.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  Optional,
  Output,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  catchError,
  defer,
  map,
  merge,
  mergeMap,
  of,
  setClassMetadata,
  startWith,
  takeUntil,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-M5MRYH5D.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-page-header.mjs
var _c0 = [[["nz-breadcrumb", "nz-page-header-breadcrumb", ""]], [["nz-avatar", "nz-page-header-avatar", ""]], [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]], [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]], [["nz-page-header-content"], ["", "nz-page-header-content", ""]], [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]], [["nz-page-header-title"], ["", "nz-page-header-title", ""]], [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]]];
var _c1 = ["nz-breadcrumb[nz-page-header-breadcrumb]", "nz-avatar[nz-page-header-avatar]", "nz-page-header-tags, [nz-page-header-tags]", "nz-page-header-extra, [nz-page-header-extra]", "nz-page-header-content, [nz-page-header-content]", "nz-page-header-footer, [nz-page-header-footer]", "nz-page-header-title, [nz-page-header-title]", "nz-page-header-subtitle, [nz-page-header-subtitle]"];
function NzPageHeaderComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const backIcon_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", backIcon_r3 || ctx_r1.getBackIcon());
  }
}
function NzPageHeaderComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("click", function NzPageHeaderComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBack());
    });
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275template(2, NzPageHeaderComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzBackIcon);
  }
}
function NzPageHeaderComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275template(1, NzPageHeaderComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzTitle);
  }
}
function NzPageHeaderComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 6);
  }
}
function NzPageHeaderComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275template(1, NzPageHeaderComponent_Conditional_7_ng_container_1_Template, 2, 1, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzSubtitle);
  }
}
function NzPageHeaderComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 7);
  }
}
var _NzPageHeaderTitleDirective = class _NzPageHeaderTitleDirective {
};
_NzPageHeaderTitleDirective.\u0275fac = function NzPageHeaderTitleDirective_Factory(t) {
  return new (t || _NzPageHeaderTitleDirective)();
};
_NzPageHeaderTitleDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderTitleDirective,
  selectors: [["nz-page-header-title"], ["", "nz-page-header-title", ""]],
  hostAttrs: [1, "ant-page-header-heading-title"],
  exportAs: ["nzPageHeaderTitle"],
  standalone: true
});
var NzPageHeaderTitleDirective = _NzPageHeaderTitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-title, [nz-page-header-title]",
      exportAs: "nzPageHeaderTitle",
      host: {
        class: "ant-page-header-heading-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderSubtitleDirective = class _NzPageHeaderSubtitleDirective {
};
_NzPageHeaderSubtitleDirective.\u0275fac = function NzPageHeaderSubtitleDirective_Factory(t) {
  return new (t || _NzPageHeaderSubtitleDirective)();
};
_NzPageHeaderSubtitleDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderSubtitleDirective,
  selectors: [["nz-page-header-subtitle"], ["", "nz-page-header-subtitle", ""]],
  hostAttrs: [1, "ant-page-header-heading-sub-title"],
  exportAs: ["nzPageHeaderSubtitle"],
  standalone: true
});
var NzPageHeaderSubtitleDirective = _NzPageHeaderSubtitleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderSubtitleDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-subtitle, [nz-page-header-subtitle]",
      exportAs: "nzPageHeaderSubtitle",
      host: {
        class: "ant-page-header-heading-sub-title"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderContentDirective = class _NzPageHeaderContentDirective {
};
_NzPageHeaderContentDirective.\u0275fac = function NzPageHeaderContentDirective_Factory(t) {
  return new (t || _NzPageHeaderContentDirective)();
};
_NzPageHeaderContentDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderContentDirective,
  selectors: [["nz-page-header-content"], ["", "nz-page-header-content", ""]],
  hostAttrs: [1, "ant-page-header-content"],
  exportAs: ["nzPageHeaderContent"],
  standalone: true
});
var NzPageHeaderContentDirective = _NzPageHeaderContentDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderContentDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-content, [nz-page-header-content]",
      exportAs: "nzPageHeaderContent",
      host: {
        class: "ant-page-header-content"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderTagDirective = class _NzPageHeaderTagDirective {
};
_NzPageHeaderTagDirective.\u0275fac = function NzPageHeaderTagDirective_Factory(t) {
  return new (t || _NzPageHeaderTagDirective)();
};
_NzPageHeaderTagDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderTagDirective,
  selectors: [["nz-page-header-tags"], ["", "nz-page-header-tags", ""]],
  hostAttrs: [1, "ant-page-header-heading-tags"],
  exportAs: ["nzPageHeaderTags"],
  standalone: true
});
var NzPageHeaderTagDirective = _NzPageHeaderTagDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderTagDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-tags, [nz-page-header-tags]",
      exportAs: "nzPageHeaderTags",
      host: {
        class: "ant-page-header-heading-tags"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderExtraDirective = class _NzPageHeaderExtraDirective {
};
_NzPageHeaderExtraDirective.\u0275fac = function NzPageHeaderExtraDirective_Factory(t) {
  return new (t || _NzPageHeaderExtraDirective)();
};
_NzPageHeaderExtraDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderExtraDirective,
  selectors: [["nz-page-header-extra"], ["", "nz-page-header-extra", ""]],
  hostAttrs: [1, "ant-page-header-heading-extra"],
  exportAs: ["nzPageHeaderExtra"],
  standalone: true
});
var NzPageHeaderExtraDirective = _NzPageHeaderExtraDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderExtraDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-extra, [nz-page-header-extra]",
      exportAs: "nzPageHeaderExtra",
      host: {
        class: "ant-page-header-heading-extra"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderFooterDirective = class _NzPageHeaderFooterDirective {
};
_NzPageHeaderFooterDirective.\u0275fac = function NzPageHeaderFooterDirective_Factory(t) {
  return new (t || _NzPageHeaderFooterDirective)();
};
_NzPageHeaderFooterDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderFooterDirective,
  selectors: [["nz-page-header-footer"], ["", "nz-page-header-footer", ""]],
  hostAttrs: [1, "ant-page-header-footer"],
  exportAs: ["nzPageHeaderFooter"],
  standalone: true
});
var NzPageHeaderFooterDirective = _NzPageHeaderFooterDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderFooterDirective, [{
    type: Directive,
    args: [{
      selector: "nz-page-header-footer, [nz-page-header-footer]",
      exportAs: "nzPageHeaderFooter",
      host: {
        class: "ant-page-header-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderBreadcrumbDirective = class _NzPageHeaderBreadcrumbDirective {
};
_NzPageHeaderBreadcrumbDirective.\u0275fac = function NzPageHeaderBreadcrumbDirective_Factory(t) {
  return new (t || _NzPageHeaderBreadcrumbDirective)();
};
_NzPageHeaderBreadcrumbDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderBreadcrumbDirective,
  selectors: [["nz-breadcrumb", "nz-page-header-breadcrumb", ""]],
  exportAs: ["nzPageHeaderBreadcrumb"],
  standalone: true
});
var NzPageHeaderBreadcrumbDirective = _NzPageHeaderBreadcrumbDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderBreadcrumbDirective, [{
    type: Directive,
    args: [{
      selector: "nz-breadcrumb[nz-page-header-breadcrumb]",
      exportAs: "nzPageHeaderBreadcrumb",
      standalone: true
    }]
  }], null, null);
})();
var _NzPageHeaderAvatarDirective = class _NzPageHeaderAvatarDirective {
};
_NzPageHeaderAvatarDirective.\u0275fac = function NzPageHeaderAvatarDirective_Factory(t) {
  return new (t || _NzPageHeaderAvatarDirective)();
};
_NzPageHeaderAvatarDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzPageHeaderAvatarDirective,
  selectors: [["nz-avatar", "nz-page-header-avatar", ""]],
  exportAs: ["nzPageHeaderAvatar"],
  standalone: true
});
var NzPageHeaderAvatarDirective = _NzPageHeaderAvatarDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderAvatarDirective, [{
    type: Directive,
    args: [{
      selector: "nz-avatar[nz-page-header-avatar]",
      exportAs: "nzPageHeaderAvatar",
      standalone: true
    }]
  }], null, null);
})();
var NZ_CONFIG_MODULE_NAME = "pageHeader";
var _NzPageHeaderComponent = class _NzPageHeaderComponent {
  constructor(location, nzConfigService, elementRef, nzResizeObserver, cdr, directionality) {
    this.location = location;
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.nzResizeObserver = nzResizeObserver;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBackIcon = null;
    this.nzGhost = true;
    this.nzBack = new EventEmitter();
    this.compact = false;
    this.destroy$ = new Subject();
    this.dir = "ltr";
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngAfterViewInit() {
    this.nzResizeObserver.observe(this.elementRef).pipe(map(([entry]) => entry.contentRect.width), takeUntil(this.destroy$)).subscribe((width) => {
      this.compact = width < 768;
      this.cdr.markForCheck();
    });
  }
  onBack() {
    if (this.nzBack.observers.length) {
      this.nzBack.emit();
    } else {
      if (!this.location) {
        throw new Error(`${PREFIX} you should import 'RouterModule' or register 'Location' if you want to use 'nzBack' default event!`);
      }
      this.location.back();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getBackIcon() {
    if (this.dir === "rtl") {
      return "arrow-right";
    }
    return "arrow-left";
  }
};
_NzPageHeaderComponent.\u0275fac = function NzPageHeaderComponent_Factory(t) {
  return new (t || _NzPageHeaderComponent)(\u0275\u0275directiveInject(Location, 8), \u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NzResizeObserver), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality, 8));
};
_NzPageHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzPageHeaderComponent,
  selectors: [["nz-page-header"]],
  contentQueries: function NzPageHeaderComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzPageHeaderFooterDirective, 5);
      \u0275\u0275contentQuery(dirIndex, NzPageHeaderBreadcrumbDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzPageHeaderFooter = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzPageHeaderBreadcrumb = _t.first);
    }
  },
  hostAttrs: [1, "ant-page-header"],
  hostVars: 10,
  hostBindings: function NzPageHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("has-footer", ctx.nzPageHeaderFooter)("ant-page-header-ghost", ctx.nzGhost)("has-breadcrumb", ctx.nzPageHeaderBreadcrumb)("ant-page-header-compact", ctx.compact)("ant-page-header-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzBackIcon: "nzBackIcon",
    nzTitle: "nzTitle",
    nzSubtitle: "nzSubtitle",
    nzGhost: "nzGhost"
  },
  outputs: {
    nzBack: "nzBack"
  },
  exportAs: ["nzPageHeader"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c1,
  decls: 13,
  vars: 3,
  consts: [[1, "ant-page-header-heading"], [1, "ant-page-header-heading-left"], [1, "ant-page-header-back"], [1, "ant-page-header-heading-title"], [1, "ant-page-header-heading-sub-title"], [1, "ant-page-header-back", 3, "click"], ["role", "button", "tabindex", "0", 1, "ant-page-header-back-button"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzTheme", "outline", 3, "nzType"]],
  template: function NzPageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c0);
      \u0275\u0275projection(0);
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275template(3, NzPageHeaderComponent_Conditional_3_Template, 3, 1, "div", 2);
      \u0275\u0275projection(4, 1);
      \u0275\u0275template(5, NzPageHeaderComponent_Conditional_5_Template, 2, 1, "span", 3)(6, NzPageHeaderComponent_Conditional_6_Template, 1, 0)(7, NzPageHeaderComponent_Conditional_7_Template, 2, 1, "span", 4)(8, NzPageHeaderComponent_Conditional_8_Template, 1, 0);
      \u0275\u0275projection(9, 2);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(10, 3);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(11, 4);
      \u0275\u0275projection(12, 5);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.nzBackIcon !== null ? 3 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(5, ctx.nzTitle ? 5 : 6);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(7, ctx.nzSubtitle ? 7 : 8);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzPageHeaderComponent = _NzPageHeaderComponent;
__decorate([WithConfig()], NzPageHeaderComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-page-header",
      exportAs: "nzPageHeader",
      template: `
    <ng-content select="nz-breadcrumb[nz-page-header-breadcrumb]" />

    <div class="ant-page-header-heading">
      <div class="ant-page-header-heading-left">
        <!--back-->
        @if (nzBackIcon !== null) {
          <div (click)="onBack()" class="ant-page-header-back">
            <div role="button" tabindex="0" class="ant-page-header-back-button">
              <ng-container *nzStringTemplateOutlet="nzBackIcon; let backIcon">
                <span nz-icon [nzType]="backIcon || getBackIcon()" nzTheme="outline"></span>
              </ng-container>
            </div>
          </div>
        }

        <!--avatar-->
        <ng-content select="nz-avatar[nz-page-header-avatar]" />
        <!--title-->
        @if (nzTitle) {
          <span class="ant-page-header-heading-title">
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-title, [nz-page-header-title]" />
        }

        <!--subtitle-->
        @if (nzSubtitle) {
          <span class="ant-page-header-heading-sub-title">
            <ng-container *nzStringTemplateOutlet="nzSubtitle">{{ nzSubtitle }}</ng-container>
          </span>
        } @else {
          <ng-content select="nz-page-header-subtitle, [nz-page-header-subtitle]" />
        }
        <ng-content select="nz-page-header-tags, [nz-page-header-tags]" />
      </div>

      <ng-content select="nz-page-header-extra, [nz-page-header-extra]" />
    </div>

    <ng-content select="nz-page-header-content, [nz-page-header-content]" />
    <ng-content select="nz-page-header-footer, [nz-page-header-footer]" />
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-page-header",
        "[class.has-footer]": "nzPageHeaderFooter",
        "[class.ant-page-header-ghost]": "nzGhost",
        "[class.has-breadcrumb]": "nzPageHeaderBreadcrumb",
        "[class.ant-page-header-compact]": "compact",
        "[class.ant-page-header-rtl]": `dir === 'rtl'`
      },
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: NzResizeObserver
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzBackIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzSubtitle: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzBack: [{
      type: Output
    }],
    nzPageHeaderFooter: [{
      type: ContentChild,
      args: [NzPageHeaderFooterDirective, {
        static: false
      }]
    }],
    nzPageHeaderBreadcrumb: [{
      type: ContentChild,
      args: [NzPageHeaderBreadcrumbDirective, {
        static: false
      }]
    }]
  });
})();
var NzPageHeaderCells = [NzPageHeaderTitleDirective, NzPageHeaderSubtitleDirective, NzPageHeaderContentDirective, NzPageHeaderTagDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderAvatarDirective];
var _NzPageHeaderModule = class _NzPageHeaderModule {
};
_NzPageHeaderModule.\u0275fac = function NzPageHeaderModule_Factory(t) {
  return new (t || _NzPageHeaderModule)();
};
_NzPageHeaderModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzPageHeaderModule
});
_NzPageHeaderModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzPageHeaderComponent]
});
var NzPageHeaderModule = _NzPageHeaderModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzPageHeaderModule, [{
    type: NgModule,
    args: [{
      imports: [NzPageHeaderComponent, NzPageHeaderCells],
      exports: [NzPageHeaderComponent, NzPageHeaderCells]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-avatar.mjs
var _c02 = ["textEl"];
function NzAvatarComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", ctx_r0.nzIcon);
  }
}
function NzAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 4);
    \u0275\u0275listener("error", function NzAvatarComponent_Conditional_1_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.imgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.nzSrc, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("srcset", ctx_r0.nzSrcSet)("alt", ctx_r0.nzAlt);
  }
}
function NzAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3, 0);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nzText);
  }
}
var _c12 = ["*"];
var NZ_CONFIG_MODULE_NAME2 = "avatar";
var _NzAvatarComponent = class _NzAvatarComponent {
  constructor(nzConfigService, elementRef, cdr) {
    this.nzConfigService = nzConfigService;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.nzShape = "circle";
    this.nzSize = "default";
    this.nzGap = 4;
    this.nzError = new EventEmitter();
    this.hasText = false;
    this.hasSrc = true;
    this.hasIcon = false;
    this.classMap = {};
    this.customSize = null;
    this.el = this.elementRef.nativeElement;
  }
  imgError($event) {
    this.nzError.emit($event);
    if (!$event.defaultPrevented) {
      this.hasSrc = false;
      this.hasIcon = false;
      this.hasText = false;
      if (this.nzIcon) {
        this.hasIcon = true;
      } else if (this.nzText) {
        this.hasText = true;
      }
      this.cdr.detectChanges();
      this.setSizeStyle();
      this.calcStringSize();
    }
  }
  ngOnChanges() {
    this.hasText = !this.nzSrc && !!this.nzText;
    this.hasIcon = !this.nzSrc && !!this.nzIcon;
    this.hasSrc = !!this.nzSrc;
    this.setSizeStyle();
    this.calcStringSize();
  }
  ngAfterViewInit() {
    this.calcStringSize();
  }
  calcStringSize() {
    if (!this.hasText || !this.textEl) {
      return;
    }
    const textEl = this.textEl.nativeElement;
    const childrenWidth = textEl.offsetWidth;
    const avatarWidth = this.el.getBoundingClientRect?.().width ?? 0;
    const offset = this.nzGap * 2 < avatarWidth ? this.nzGap * 2 : 8;
    const scale = avatarWidth - offset < childrenWidth ? (avatarWidth - offset) / childrenWidth : 1;
    textEl.style.transform = `scale(${scale}) translateX(-50%)`;
    textEl.style.lineHeight = this.customSize || "";
  }
  setSizeStyle() {
    if (typeof this.nzSize === "number") {
      this.customSize = `${this.nzSize}px`;
    } else {
      this.customSize = null;
    }
    this.cdr.markForCheck();
  }
};
_NzAvatarComponent.\u0275fac = function NzAvatarComponent_Factory(t) {
  return new (t || _NzAvatarComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzAvatarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzAvatarComponent,
  selectors: [["nz-avatar"]],
  viewQuery: function NzAvatarComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.textEl = _t.first);
    }
  },
  hostAttrs: [1, "ant-avatar"],
  hostVars: 20,
  hostBindings: function NzAvatarComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.hasIcon && ctx.customSize ? ctx.nzSize / 2 : null, "px");
      \u0275\u0275classProp("ant-avatar-lg", ctx.nzSize === "large")("ant-avatar-sm", ctx.nzSize === "small")("ant-avatar-square", ctx.nzShape === "square")("ant-avatar-circle", ctx.nzShape === "circle")("ant-avatar-icon", ctx.nzIcon)("ant-avatar-image", ctx.hasSrc);
    }
  },
  inputs: {
    nzShape: "nzShape",
    nzSize: "nzSize",
    nzGap: "nzGap",
    nzText: "nzText",
    nzSrc: "nzSrc",
    nzSrcSet: "nzSrcSet",
    nzAlt: "nzAlt",
    nzIcon: "nzIcon"
  },
  outputs: {
    nzError: "nzError"
  },
  exportAs: ["nzAvatar"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 3,
  consts: [["textEl", ""], ["nz-icon", "", 3, "nzType"], [3, "src"], [1, "ant-avatar-string"], [3, "error", "src"]],
  template: function NzAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzAvatarComponent_Conditional_0_Template, 1, 1, "span", 1)(1, NzAvatarComponent_Conditional_1_Template, 1, 3, "img", 2)(2, NzAvatarComponent_Conditional_2_Template, 3, 1, "span", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.nzIcon && ctx.hasIcon ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.nzSrc && ctx.hasSrc ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(2, ctx.nzText && ctx.hasText ? 2 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, PlatformModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzAvatarComponent = _NzAvatarComponent;
__decorate([WithConfig()], NzAvatarComponent.prototype, "nzShape", void 0);
__decorate([WithConfig()], NzAvatarComponent.prototype, "nzSize", void 0);
__decorate([WithConfig(), InputNumber()], NzAvatarComponent.prototype, "nzGap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar",
      exportAs: "nzAvatar",
      standalone: true,
      imports: [NzIconModule, PlatformModule],
      template: `
    @if (nzIcon && hasIcon) {
      <span nz-icon [nzType]="nzIcon"></span>
    }
    @if (nzSrc && hasSrc) {
      <img [src]="nzSrc" [attr.srcset]="nzSrcSet" [attr.alt]="nzAlt" (error)="imgError($event)" />
    }
    @if (nzText && hasText) {
      <span class="ant-avatar-string" #textEl>{{ nzText }}</span>
    }
  `,
      host: {
        class: "ant-avatar",
        "[class.ant-avatar-lg]": `nzSize === 'large'`,
        "[class.ant-avatar-sm]": `nzSize === 'small'`,
        "[class.ant-avatar-square]": `nzShape === 'square'`,
        "[class.ant-avatar-circle]": `nzShape === 'circle'`,
        "[class.ant-avatar-icon]": `nzIcon`,
        "[class.ant-avatar-image]": `hasSrc `,
        "[style.width]": "customSize",
        "[style.height]": "customSize",
        "[style.line-height]": "customSize",
        // nzSize type is number when customSize is true
        "[style.font-size.px]": "(hasIcon && customSize) ? $any(nzSize) / 2 : null"
      },
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzText: [{
      type: Input
    }],
    nzSrc: [{
      type: Input
    }],
    nzSrcSet: [{
      type: Input
    }],
    nzAlt: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzError: [{
      type: Output
    }],
    textEl: [{
      type: ViewChild,
      args: ["textEl", {
        static: false
      }]
    }]
  });
})();
var _NzAvatarGroupComponent = class _NzAvatarGroupComponent {
};
_NzAvatarGroupComponent.\u0275fac = function NzAvatarGroupComponent_Factory(t) {
  return new (t || _NzAvatarGroupComponent)();
};
_NzAvatarGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzAvatarGroupComponent,
  selectors: [["nz-avatar-group"]],
  hostAttrs: [1, "ant-avatar-group"],
  exportAs: ["nzAvatarGroup"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c12,
  decls: 1,
  vars: 0,
  template: function NzAvatarGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzAvatarGroupComponent = _NzAvatarGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-avatar-group",
      exportAs: "nzAvatarGroup",
      standalone: true,
      template: ` <ng-content></ng-content> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-avatar-group"
      }
    }]
  }], null, null);
})();
var _NzAvatarModule = class _NzAvatarModule {
};
_NzAvatarModule.\u0275fac = function NzAvatarModule_Factory(t) {
  return new (t || _NzAvatarModule)();
};
_NzAvatarModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzAvatarModule
});
_NzAvatarModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzAvatarComponent]
});
var NzAvatarModule = _NzAvatarModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzAvatarModule, [{
    type: NgModule,
    args: [{
      exports: [NzAvatarComponent, NzAvatarGroupComponent],
      imports: [NzAvatarComponent, NzAvatarGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-list.mjs
var _c03 = ["*"];
function NzListItemMetaAvatarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-avatar", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSrc", ctx_r0.nzSrc);
  }
}
function NzListItemMetaAvatarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c13 = [[["nz-list-item-meta-avatar"]], [["nz-list-item-meta-title"]], [["nz-list-item-meta-description"]]];
var _c2 = ["nz-list-item-meta-avatar", "nz-list-item-meta-title", "nz-list-item-meta-description"];
function NzListItemMetaComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-list-item-meta-avatar", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzSrc", ctx_r0.avatarStr);
  }
}
function NzListItemMetaComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-item-meta-avatar");
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.avatarTpl);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-item-meta-title");
    \u0275\u0275template(1, NzListItemMetaComponent_Conditional_3_Conditional_1_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzTitle);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-item-meta-description");
    \u0275\u0275template(1, NzListItemMetaComponent_Conditional_3_Conditional_2_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzDescription);
  }
}
function NzListItemMetaComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275template(1, NzListItemMetaComponent_Conditional_3_Conditional_1_Template, 2, 1, "nz-list-item-meta-title")(2, NzListItemMetaComponent_Conditional_3_Conditional_2_Template, 2, 1, "nz-list-item-meta-description");
    \u0275\u0275projection(3, 1);
    \u0275\u0275projection(4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r0.nzTitle && !ctx_r0.titleComponent ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, ctx_r0.nzDescription && !ctx_r0.descriptionComponent ? 2 : -1);
  }
}
function NzListItemActionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c3 = ["nz-list-item-actions", ""];
function NzListItemActionsComponent_For_1_ng_template_1_Template(rf, ctx) {
}
function NzListItemActionsComponent_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "em", 1);
  }
}
function NzListItemActionsComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275template(1, NzListItemActionsComponent_For_1_ng_template_1_Template, 0, 0, "ng-template", 0)(2, NzListItemActionsComponent_For_1_Conditional_2_Template, 1, 0, "em", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const \u0275$index_1_r2 = ctx.$index;
    const \u0275$count_1_r3 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", i_r1);
    \u0275\u0275advance();
    \u0275\u0275conditional(2, !(\u0275$index_1_r2 === \u0275$count_1_r3 - 1) ? 2 : -1);
  }
}
var _c4 = [[["nz-list-header"]], [["nz-list-footer"], ["", "nz-list-footer", ""]], [["nz-list-load-more"], ["", "nz-list-load-more", ""]], [["nz-list-pagination"], ["", "nz-list-pagination", ""]], "*"];
var _c5 = ["nz-list-header", "nz-list-footer, [nz-list-footer]", "nz-list-load-more, [nz-list-load-more]", "nz-list-pagination, [nz-list-pagination]", "*"];
var _c6 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function NzListComponent_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-header");
    \u0275\u0275template(1, NzListComponent_Conditional_0_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzHeader);
  }
}
function NzListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    \u0275\u0275styleProp("min-height", 53, "px");
  }
}
function NzListComponent_Conditional_5_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, NzListComponent_Conditional_5_For_2_ng_template_1_Template, 0, 0, "ng-template", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const index_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzSpan", ctx_r0.nzGrid.span || null)("nzXs", ctx_r0.nzGrid.xs || null)("nzSm", ctx_r0.nzGrid.sm || null)("nzMd", ctx_r0.nzGrid.md || null)("nzLg", ctx_r0.nzGrid.lg || null)("nzXl", ctx_r0.nzGrid.xl || null)("nzXXl", ctx_r0.nzGrid.xxl || null);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", \u0275\u0275pureFunction2(9, _c6, item_r2, index_r3));
  }
}
function NzListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275repeaterCreate(1, NzListComponent_Conditional_5_For_2_Template, 2, 12, "div", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzGutter", ctx_r0.nzGrid.gutter || null);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_6_For_2_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzListComponent_Conditional_6_For_2_ng_template_1_Template, 0, 0, "ng-template", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzRenderItem)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c6, item_r4, index_r5));
  }
}
function NzListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, NzListComponent_Conditional_6_For_2_Template, 2, 5, "ng-container", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275projection(3, 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.nzDataSource);
  }
}
function NzListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-list-empty", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzNoResult", ctx_r0.nzNoResult);
  }
}
function NzListComponent_Conditional_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzFooter);
  }
}
function NzListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-footer");
    \u0275\u0275template(1, NzListComponent_Conditional_8_ng_container_1_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzFooter);
  }
}
function NzListComponent_ng_template_10_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_ng_template_1_Template(rf, ctx) {
}
function NzListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-pagination");
    \u0275\u0275template(1, NzListComponent_Conditional_12_ng_template_1_Template, 0, 0, "ng-template", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzPagination);
  }
}
var _c7 = [[["nz-list-item-actions"], ["", "nz-list-item-actions", ""]], [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]], "*", [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]]];
var _c8 = ["nz-list-item-actions, [nz-list-item-actions]", "nz-list-item-meta, [nz-list-item-meta]", "*", "nz-list-item-extra, [nz-list-item-extra]"];
function NzListItemComponent_ng_template_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ul", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzActions", ctx_r0.nzActions);
  }
}
function NzListItemComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzListItemComponent_ng_template_0_Conditional_0_Template, 1, 1, "ul", 3);
    \u0275\u0275projection(1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.nzActions && ctx_r0.nzActions.length > 0 ? 0 : -1);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzListItemComponent_ng_template_2_Conditional_2_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzContent);
  }
}
function NzListItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
    \u0275\u0275projection(1, 2);
    \u0275\u0275template(2, NzListItemComponent_ng_template_2_Conditional_2_Template, 1, 1, "ng-container");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, ctx_r0.nzContent ? 2 : -1);
  }
}
function NzListItemComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 3);
  }
}
function NzListItemComponent_Conditional_6_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list-item-extra");
    \u0275\u0275template(1, NzListItemComponent_Conditional_6_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzListItemComponent_Conditional_6_ng_template_4_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, NzListItemComponent_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_6_ng_template_2_Template, 0, 0, "ng-template", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NzListItemComponent_Conditional_6_Conditional_3_Template, 2, 1, "nz-list-item-extra")(4, NzListItemComponent_Conditional_6_ng_template_4_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const actionsTpl_r2 = \u0275\u0275reference(1);
    const contentTpl_r3 = \u0275\u0275reference(3);
    const extraTpl_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", contentTpl_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actionsTpl_r2);
    \u0275\u0275advance();
    \u0275\u0275conditional(3, ctx_r0.nzExtra ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", extraTpl_r4);
  }
}
function NzListItemComponent_Conditional_7_ng_template_0_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_1_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_2_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_ng_template_3_Template(rf, ctx) {
}
function NzListItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzListItemComponent_Conditional_7_ng_template_0_Template, 0, 0, "ng-template", 6)(1, NzListItemComponent_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6)(2, NzListItemComponent_Conditional_7_ng_template_2_Template, 0, 0, "ng-template", 6)(3, NzListItemComponent_Conditional_7_ng_template_3_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const actionsTpl_r2 = \u0275\u0275reference(1);
    const contentTpl_r3 = \u0275\u0275reference(3);
    const extraTpl_r4 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", contentTpl_r3);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzExtra);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", extraTpl_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", actionsTpl_r2);
  }
}
var _NzListItemMetaTitleComponent = class _NzListItemMetaTitleComponent {
};
_NzListItemMetaTitleComponent.\u0275fac = function NzListItemMetaTitleComponent_Factory(t) {
  return new (t || _NzListItemMetaTitleComponent)();
};
_NzListItemMetaTitleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemMetaTitleComponent,
  selectors: [["nz-list-item-meta-title"]],
  exportAs: ["nzListItemMetaTitle"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-title"]],
  template: function NzListItemMetaTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "h4", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaTitleComponent = _NzListItemMetaTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaTitleComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-title",
      exportAs: "nzListItemMetaTitle",
      template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemMetaDescriptionComponent = class _NzListItemMetaDescriptionComponent {
};
_NzListItemMetaDescriptionComponent.\u0275fac = function NzListItemMetaDescriptionComponent_Factory(t) {
  return new (t || _NzListItemMetaDescriptionComponent)();
};
_NzListItemMetaDescriptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemMetaDescriptionComponent,
  selectors: [["nz-list-item-meta-description"]],
  exportAs: ["nzListItemMetaDescription"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-list-item-meta-description"]],
  template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaDescriptionComponent = _NzListItemMetaDescriptionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaDescriptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-description",
      exportAs: "nzListItemMetaDescription",
      template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemMetaAvatarComponent = class _NzListItemMetaAvatarComponent {
};
_NzListItemMetaAvatarComponent.\u0275fac = function NzListItemMetaAvatarComponent_Factory(t) {
  return new (t || _NzListItemMetaAvatarComponent)();
};
_NzListItemMetaAvatarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemMetaAvatarComponent,
  selectors: [["nz-list-item-meta-avatar"]],
  inputs: {
    nzSrc: "nzSrc"
  },
  exportAs: ["nzListItemMetaAvatar"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 3,
  vars: 1,
  consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc"]],
  template: function NzListItemMetaAvatarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NzListItemMetaAvatarComponent_Conditional_1_Template, 1, 1, "nz-avatar", 1)(2, NzListItemMetaAvatarComponent_Conditional_2_Template, 1, 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.nzSrc ? 1 : 2);
    }
  },
  dependencies: [NzAvatarModule, NzAvatarComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaAvatarComponent = _NzListItemMetaAvatarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaAvatarComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta-avatar",
      exportAs: "nzListItemMetaAvatar",
      template: `
    <div class="ant-list-item-meta-avatar">
      @if (nzSrc) {
        <nz-avatar [nzSrc]="nzSrc" />
      } @else {
        <ng-content />
      }
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [NzAvatarModule],
      standalone: true
    }]
  }], null, {
    nzSrc: [{
      type: Input
    }]
  });
})();
var _NzListItemMetaComponent = class _NzListItemMetaComponent {
  set nzAvatar(value) {
    if (value instanceof TemplateRef) {
      this.avatarStr = "";
      this.avatarTpl = value;
    } else {
      this.avatarStr = value;
    }
  }
  constructor(elementRef) {
    this.elementRef = elementRef;
    this.avatarStr = "";
  }
};
_NzListItemMetaComponent.\u0275fac = function NzListItemMetaComponent_Factory(t) {
  return new (t || _NzListItemMetaComponent)(\u0275\u0275directiveInject(ElementRef));
};
_NzListItemMetaComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemMetaComponent,
  selectors: [["nz-list-item-meta"], ["", "nz-list-item-meta", ""]],
  contentQueries: function NzListItemMetaComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzListItemMetaDescriptionComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzListItemMetaTitleComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.descriptionComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-list-item-meta"],
  inputs: {
    nzAvatar: "nzAvatar",
    nzTitle: "nzTitle",
    nzDescription: "nzDescription"
  },
  exportAs: ["nzListItemMeta"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c2,
  decls: 4,
  vars: 3,
  consts: [[3, "nzSrc"], [1, "ant-list-item-meta-content"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"]],
  template: function NzListItemMetaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c13);
      \u0275\u0275template(0, NzListItemMetaComponent_Conditional_0_Template, 1, 1, "nz-list-item-meta-avatar", 0)(1, NzListItemMetaComponent_Conditional_1_Template, 2, 1, "nz-list-item-meta-avatar");
      \u0275\u0275projection(2);
      \u0275\u0275template(3, NzListItemMetaComponent_Conditional_3_Template, 5, 2, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.avatarStr ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.avatarTpl ? 1 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(3, ctx.nzTitle || ctx.nzDescription || ctx.descriptionComponent || ctx.titleComponent ? 3 : -1);
    }
  },
  dependencies: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzStringTemplateOutletDirective, NzListItemMetaDescriptionComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemMetaComponent = _NzListItemMetaComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemMetaComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-meta, [nz-list-item-meta]",
      exportAs: "nzListItemMeta",
      template: `
    <!--Old API Start-->
    @if (avatarStr) {
      <nz-list-item-meta-avatar [nzSrc]="avatarStr" />
    }

    @if (avatarTpl) {
      <nz-list-item-meta-avatar>
        <ng-container [ngTemplateOutlet]="avatarTpl" />
      </nz-list-item-meta-avatar>
    }

    <!--Old API End-->

    <ng-content select="nz-list-item-meta-avatar" />

    @if (nzTitle || nzDescription || descriptionComponent || titleComponent) {
      <div class="ant-list-item-meta-content">
        <!--Old API Start-->

        @if (nzTitle && !titleComponent) {
          <nz-list-item-meta-title>
            <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
          </nz-list-item-meta-title>
        }

        @if (nzDescription && !descriptionComponent) {
          <nz-list-item-meta-description>
            <ng-container *nzStringTemplateOutlet="nzDescription">{{ nzDescription }}</ng-container>
          </nz-list-item-meta-description>
        }
        <!--Old API End-->

        <ng-content select="nz-list-item-meta-title" />
        <ng-content select="nz-list-item-meta-description" />
      </div>
    }
  `,
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-list-item-meta"
      },
      imports: [NzListItemMetaAvatarComponent, NgTemplateOutlet, NzListItemMetaTitleComponent, NzOutletModule, NzListItemMetaDescriptionComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], {
    nzAvatar: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzDescription: [{
      type: Input
    }],
    descriptionComponent: [{
      type: ContentChild,
      args: [NzListItemMetaDescriptionComponent]
    }],
    titleComponent: [{
      type: ContentChild,
      args: [NzListItemMetaTitleComponent]
    }]
  });
})();
var _NzListItemExtraComponent = class _NzListItemExtraComponent {
};
_NzListItemExtraComponent.\u0275fac = function NzListItemExtraComponent_Factory(t) {
  return new (t || _NzListItemExtraComponent)();
};
_NzListItemExtraComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemExtraComponent,
  selectors: [["nz-list-item-extra"], ["", "nz-list-item-extra", ""]],
  hostAttrs: [1, "ant-list-item-extra"],
  exportAs: ["nzListItemExtra"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzListItemExtraComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemExtraComponent = _NzListItemExtraComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemExtraComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-extra, [nz-list-item-extra]",
      exportAs: "nzListItemExtra",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-item-extra"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListItemActionComponent = class _NzListItemActionComponent {
};
_NzListItemActionComponent.\u0275fac = function NzListItemActionComponent_Factory(t) {
  return new (t || _NzListItemActionComponent)();
};
_NzListItemActionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemActionComponent,
  selectors: [["nz-list-item-action"]],
  viewQuery: function NzListItemActionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateRef = _t.first);
    }
  },
  exportAs: ["nzListItemAction"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzListItemActionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzListItemActionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemActionComponent = _NzListItemActionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item-action",
      exportAs: "nzListItemAction",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template><ng-content></ng-content></ng-template> `,
      standalone: true
    }]
  }], null, {
    templateRef: [{
      type: ViewChild,
      args: [TemplateRef]
    }]
  });
})();
var _NzListItemActionsComponent = class _NzListItemActionsComponent {
  constructor(cdr, destroy$) {
    this.nzActions = [];
    this.actions = [];
    this.inputActionChanges$ = new Subject();
    this.contentChildrenChanges$ = defer(() => {
      if (this.nzListItemActions) {
        return of(null);
      }
      return this.initialized.pipe(mergeMap(() => this.nzListItemActions.changes.pipe(startWith(this.nzListItemActions))));
    });
    this.initialized = new Subject();
    merge(this.contentChildrenChanges$, this.inputActionChanges$).pipe(takeUntil(destroy$)).subscribe(() => {
      if (this.nzActions.length) {
        this.actions = this.nzActions;
      } else {
        this.actions = this.nzListItemActions.map((action) => action.templateRef);
      }
      cdr.detectChanges();
    });
  }
  ngOnChanges() {
    this.inputActionChanges$.next(null);
  }
  ngAfterContentInit() {
    this.initialized.next();
    this.initialized.complete();
  }
};
_NzListItemActionsComponent.\u0275fac = function NzListItemActionsComponent_Factory(t) {
  return new (t || _NzListItemActionsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzDestroyService));
};
_NzListItemActionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemActionsComponent,
  selectors: [["ul", "nz-list-item-actions", ""]],
  contentQueries: function NzListItemActionsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzListItemActionComponent, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzListItemActions = _t);
    }
  },
  hostAttrs: [1, "ant-list-item-action"],
  inputs: {
    nzActions: "nzActions"
  },
  exportAs: ["nzListItemActions"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c3,
  decls: 2,
  vars: 0,
  consts: [[3, "ngTemplateOutlet"], [1, "ant-list-item-action-split"]],
  template: function NzListItemActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, NzListItemActionsComponent_For_1_Template, 3, 2, "li", null, \u0275\u0275repeaterTrackByIdentity);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.actions);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemActionsComponent = _NzListItemActionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemActionsComponent, [{
    type: Component,
    args: [{
      selector: "ul[nz-list-item-actions]",
      exportAs: "nzListItemActions",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @for (i of actions; track i) {
      <li>
        <ng-template [ngTemplateOutlet]="i" />
        @if (!$last) {
          <em class="ant-list-item-action-split"></em>
        }
      </li>
    }
  `,
      host: {
        class: "ant-list-item-action"
      },
      providers: [NzDestroyService],
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }], {
    nzActions: [{
      type: Input
    }],
    nzListItemActions: [{
      type: ContentChildren,
      args: [NzListItemActionComponent]
    }]
  });
})();
var _NzListEmptyComponent = class _NzListEmptyComponent {
};
_NzListEmptyComponent.\u0275fac = function NzListEmptyComponent_Factory(t) {
  return new (t || _NzListEmptyComponent)();
};
_NzListEmptyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListEmptyComponent,
  selectors: [["nz-list-empty"]],
  hostAttrs: [1, "ant-list-empty-text"],
  inputs: {
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzListHeader"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 2,
  consts: [[3, "nzComponentName", "specificContent"]],
  template: function NzListEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "nz-embed-empty", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nzComponentName", "list")("specificContent", ctx.nzNoResult);
    }
  },
  dependencies: [NzEmptyModule, NzEmbedEmptyComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListEmptyComponent = _NzListEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListEmptyComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-empty",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
      host: {
        class: "ant-list-empty-text"
      },
      imports: [NzEmptyModule],
      standalone: true
    }]
  }], null, {
    nzNoResult: [{
      type: Input
    }]
  });
})();
var _NzListHeaderComponent = class _NzListHeaderComponent {
};
_NzListHeaderComponent.\u0275fac = function NzListHeaderComponent_Factory(t) {
  return new (t || _NzListHeaderComponent)();
};
_NzListHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListHeaderComponent,
  selectors: [["nz-list-header"]],
  hostAttrs: [1, "ant-list-header"],
  exportAs: ["nzListHeader"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzListHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListHeaderComponent = _NzListHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-header",
      exportAs: "nzListHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-header"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListFooterComponent = class _NzListFooterComponent {
};
_NzListFooterComponent.\u0275fac = function NzListFooterComponent_Factory(t) {
  return new (t || _NzListFooterComponent)();
};
_NzListFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListFooterComponent,
  selectors: [["nz-list-footer"]],
  hostAttrs: [1, "ant-list-footer"],
  exportAs: ["nzListFooter"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzListFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListFooterComponent = _NzListFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-footer",
      exportAs: "nzListFooter",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-footer"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListPaginationComponent = class _NzListPaginationComponent {
};
_NzListPaginationComponent.\u0275fac = function NzListPaginationComponent_Factory(t) {
  return new (t || _NzListPaginationComponent)();
};
_NzListPaginationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListPaginationComponent,
  selectors: [["nz-list-pagination"]],
  hostAttrs: [1, "ant-list-pagination"],
  exportAs: ["nzListPagination"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzListPaginationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzListPaginationComponent = _NzListPaginationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListPaginationComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-pagination",
      exportAs: "nzListPagination",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-list-pagination"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListLoadMoreDirective = class _NzListLoadMoreDirective {
};
_NzListLoadMoreDirective.\u0275fac = function NzListLoadMoreDirective_Factory(t) {
  return new (t || _NzListLoadMoreDirective)();
};
_NzListLoadMoreDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzListLoadMoreDirective,
  selectors: [["nz-list-load-more"]],
  exportAs: ["nzListLoadMoreDirective"],
  standalone: true
});
var NzListLoadMoreDirective = _NzListLoadMoreDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListLoadMoreDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list-load-more",
      exportAs: "nzListLoadMoreDirective",
      standalone: true
    }]
  }], null, null);
})();
var _NzListGridDirective = class _NzListGridDirective {
};
_NzListGridDirective.\u0275fac = function NzListGridDirective_Factory(t) {
  return new (t || _NzListGridDirective)();
};
_NzListGridDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzListGridDirective,
  selectors: [["nz-list", "nzGrid", ""]],
  hostAttrs: [1, "ant-list-grid"],
  standalone: true
});
var NzListGridDirective = _NzListGridDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListGridDirective, [{
    type: Directive,
    args: [{
      selector: "nz-list[nzGrid]",
      host: {
        class: "ant-list-grid"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzListComponent = class _NzListComponent {
  get itemLayoutNotify$() {
    return this.itemLayoutNotifySource.asObservable();
  }
  constructor(directionality) {
    this.directionality = directionality;
    this.nzBordered = false;
    this.nzGrid = "";
    this.nzItemLayout = "horizontal";
    this.nzRenderItem = null;
    this.nzLoading = false;
    this.nzLoadMore = null;
    this.nzSize = "default";
    this.nzSplit = true;
    this.hasSomethingAfterLastItem = false;
    this.dir = "ltr";
    this.itemLayoutNotifySource = new BehaviorSubject(this.nzItemLayout);
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  getSomethingAfterLastItem() {
    return !!(this.nzLoadMore || this.nzPagination || this.nzFooter || this.nzListFooterComponent || this.nzListPaginationComponent || this.nzListLoadMoreDirective);
  }
  ngOnChanges(changes) {
    if (changes.nzItemLayout) {
      this.itemLayoutNotifySource.next(this.nzItemLayout);
    }
  }
  ngOnDestroy() {
    this.itemLayoutNotifySource.unsubscribe();
    this.destroy$.next();
    this.destroy$.complete();
  }
  ngAfterContentInit() {
    this.hasSomethingAfterLastItem = this.getSomethingAfterLastItem();
  }
};
_NzListComponent.\u0275fac = function NzListComponent_Factory(t) {
  return new (t || _NzListComponent)(\u0275\u0275directiveInject(Directionality, 8));
};
_NzListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListComponent,
  selectors: [["nz-list"], ["", "nz-list", ""]],
  contentQueries: function NzListComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzListFooterComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzListPaginationComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzListLoadMoreDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzListFooterComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzListPaginationComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzListLoadMoreDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-list"],
  hostVars: 16,
  hostBindings: function NzListComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-list-rtl", ctx.dir === "rtl")("ant-list-vertical", ctx.nzItemLayout === "vertical")("ant-list-lg", ctx.nzSize === "large")("ant-list-sm", ctx.nzSize === "small")("ant-list-split", ctx.nzSplit)("ant-list-bordered", ctx.nzBordered)("ant-list-loading", ctx.nzLoading)("ant-list-something-after-last-item", ctx.hasSomethingAfterLastItem);
    }
  },
  inputs: {
    nzDataSource: "nzDataSource",
    nzBordered: "nzBordered",
    nzGrid: "nzGrid",
    nzHeader: "nzHeader",
    nzFooter: "nzFooter",
    nzItemLayout: "nzItemLayout",
    nzRenderItem: "nzRenderItem",
    nzLoading: "nzLoading",
    nzLoadMore: "nzLoadMore",
    nzPagination: "nzPagination",
    nzSize: "nzSize",
    nzSplit: "nzSplit",
    nzNoResult: "nzNoResult"
  },
  exportAs: ["nzList"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c5,
  decls: 14,
  vars: 8,
  consts: [[3, "nzSpinning"], [3, "min-height"], ["nz-row", "", 3, "nzGutter"], [3, "nzNoResult"], [3, "ngTemplateOutlet"], [4, "nzStringTemplateOutlet"], ["nz-col", "", 3, "nzSpan", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ant-list-items"]],
  template: function NzListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c4);
      \u0275\u0275template(0, NzListComponent_Conditional_0_Template, 2, 1, "nz-list-header");
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "nz-spin", 0);
      \u0275\u0275elementContainerStart(3);
      \u0275\u0275template(4, NzListComponent_Conditional_4_Template, 1, 2, "div", 1)(5, NzListComponent_Conditional_5_Template, 3, 1, "div", 2)(6, NzListComponent_Conditional_6_Template, 4, 0)(7, NzListComponent_Conditional_7_Template, 1, 1, "nz-list-empty", 3);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, NzListComponent_Conditional_8_Template, 2, 1, "nz-list-footer");
      \u0275\u0275projection(9, 1);
      \u0275\u0275template(10, NzListComponent_ng_template_10_Template, 0, 0, "ng-template", 4);
      \u0275\u0275projection(11, 2);
      \u0275\u0275template(12, NzListComponent_Conditional_12_Template, 2, 1, "nz-list-pagination");
      \u0275\u0275projection(13, 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.nzHeader ? 0 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzSpinning", ctx.nzLoading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(4, ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(5, ctx.nzGrid && ctx.nzDataSource ? 5 : 6);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(7, !ctx.nzLoading && ctx.nzDataSource && ctx.nzDataSource.length === 0 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(8, ctx.nzFooter ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngTemplateOutlet", ctx.nzLoadMore);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(12, ctx.nzPagination ? 12 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzStringTemplateOutletDirective, NzSpinModule, NzSpinComponent, NzGridModule, NzColDirective, NzRowDirective, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListComponent = _NzListComponent;
__decorate([InputBoolean()], NzListComponent.prototype, "nzBordered", void 0);
__decorate([InputBoolean()], NzListComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzListComponent.prototype, "nzSplit", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListComponent, [{
    type: Component,
    args: [{
      selector: "nz-list, [nz-list]",
      exportAs: "nzList",
      template: `
    @if (nzHeader) {
      <nz-list-header>
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </nz-list-header>
    }

    <ng-content select="nz-list-header" />

    <nz-spin [nzSpinning]="nzLoading">
      <ng-container>
        @if (nzLoading && nzDataSource && nzDataSource.length === 0) {
          <div [style.min-height.px]="53"></div>
        }
        @if (nzGrid && nzDataSource) {
          <div nz-row [nzGutter]="nzGrid.gutter || null">
            @for (item of nzDataSource; track item; let index = $index) {
              <div
                nz-col
                [nzSpan]="nzGrid.span || null"
                [nzXs]="nzGrid.xs || null"
                [nzSm]="nzGrid.sm || null"
                [nzMd]="nzGrid.md || null"
                [nzLg]="nzGrid.lg || null"
                [nzXl]="nzGrid.xl || null"
                [nzXXl]="nzGrid.xxl || null"
              >
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: index }"
                />
              </div>
            }
          </div>
        } @else {
          <div class="ant-list-items">
            @for (item of nzDataSource; track item; let index = $index) {
              <ng-container>
                <ng-template
                  [ngTemplateOutlet]="nzRenderItem"
                  [ngTemplateOutletContext]="{ $implicit: item, index: index }"
                />
              </ng-container>
            }
            <ng-content />
          </div>
        }

        @if (!nzLoading && nzDataSource && nzDataSource.length === 0) {
          <nz-list-empty [nzNoResult]="nzNoResult" />
        }
      </ng-container>
    </nz-spin>

    @if (nzFooter) {
      <nz-list-footer>
        <ng-container *nzStringTemplateOutlet="nzFooter">{{ nzFooter }}</ng-container>
      </nz-list-footer>
    }

    <ng-content select="nz-list-footer, [nz-list-footer]" />

    <ng-template [ngTemplateOutlet]="nzLoadMore"></ng-template>
    <ng-content select="nz-list-load-more, [nz-list-load-more]" />

    @if (nzPagination) {
      <nz-list-pagination>
        <ng-template [ngTemplateOutlet]="nzPagination" />
      </nz-list-pagination>
    }

    <ng-content select="nz-list-pagination, [nz-list-pagination]" />
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list",
        "[class.ant-list-rtl]": `dir === 'rtl'`,
        "[class.ant-list-vertical]": 'nzItemLayout === "vertical"',
        "[class.ant-list-lg]": 'nzSize === "large"',
        "[class.ant-list-sm]": 'nzSize === "small"',
        "[class.ant-list-split]": "nzSplit",
        "[class.ant-list-bordered]": "nzBordered",
        "[class.ant-list-loading]": "nzLoading",
        "[class.ant-list-something-after-last-item]": "hasSomethingAfterLastItem"
      },
      imports: [NgTemplateOutlet, NzListHeaderComponent, NzOutletModule, NzSpinModule, NzGridModule, NzListEmptyComponent, NzListFooterComponent, NzListPaginationComponent],
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzDataSource: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzGrid: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzFooter: [{
      type: Input
    }],
    nzItemLayout: [{
      type: Input
    }],
    nzRenderItem: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzLoadMore: [{
      type: Input
    }],
    nzPagination: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzSplit: [{
      type: Input
    }],
    nzNoResult: [{
      type: Input
    }],
    nzListFooterComponent: [{
      type: ContentChild,
      args: [NzListFooterComponent]
    }],
    nzListPaginationComponent: [{
      type: ContentChild,
      args: [NzListPaginationComponent]
    }],
    nzListLoadMoreDirective: [{
      type: ContentChild,
      args: [NzListLoadMoreDirective]
    }]
  });
})();
var _NzListItemComponent = class _NzListItemComponent {
  get isVerticalAndExtra() {
    return this.itemLayout === "vertical" && (!!this.listItemExtraDirective || !!this.nzExtra);
  }
  constructor(parentComp, cdr) {
    this.parentComp = parentComp;
    this.cdr = cdr;
    this.nzActions = [];
    this.nzExtra = null;
    this.nzNoFlex = false;
  }
  ngAfterViewInit() {
    this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe((val) => {
      this.itemLayout = val;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    if (this.itemLayout$) {
      this.itemLayout$.unsubscribe();
    }
  }
};
_NzListItemComponent.\u0275fac = function NzListItemComponent_Factory(t) {
  return new (t || _NzListItemComponent)(\u0275\u0275directiveInject(NzListComponent), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzListItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzListItemComponent,
  selectors: [["nz-list-item"], ["", "nz-list-item", ""]],
  contentQueries: function NzListItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzListItemExtraComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listItemExtraDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-list-item"],
  hostVars: 2,
  hostBindings: function NzListItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-list-item-no-flex", ctx.nzNoFlex);
    }
  },
  inputs: {
    nzActions: "nzActions",
    nzContent: "nzContent",
    nzExtra: "nzExtra",
    nzNoFlex: "nzNoFlex"
  },
  exportAs: ["nzListItem"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c8,
  decls: 8,
  vars: 1,
  consts: [["actionsTpl", ""], ["contentTpl", ""], ["extraTpl", ""], ["nz-list-item-actions", "", 3, "nzActions"], [4, "nzStringTemplateOutlet"], [1, "ant-list-item-main"], [3, "ngTemplateOutlet"]],
  template: function NzListItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c7);
      \u0275\u0275template(0, NzListItemComponent_ng_template_0_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NzListItemComponent_ng_template_2_Template, 3, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, NzListItemComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, NzListItemComponent_Conditional_6_Template, 5, 4)(7, NzListItemComponent_Conditional_7_Template, 4, 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(6, ctx.isVerticalAndExtra ? 6 : 7);
    }
  },
  dependencies: [NzListItemActionsComponent, NzOutletModule, NzStringTemplateOutletDirective, NgTemplateOutlet, NzListItemExtraComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzListItemComponent = _NzListItemComponent;
__decorate([InputBoolean()], NzListItemComponent.prototype, "nzNoFlex", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-list-item, [nz-list-item]",
      exportAs: "nzListItem",
      template: `
    <ng-template #actionsTpl>
      @if (nzActions && nzActions.length > 0) {
        <ul nz-list-item-actions [nzActions]="nzActions"></ul>
      }
      <ng-content select="nz-list-item-actions, [nz-list-item-actions]" />
    </ng-template>
    <ng-template #contentTpl>
      <ng-content select="nz-list-item-meta, [nz-list-item-meta]" />
      <ng-content />
      @if (nzContent) {
        <ng-container *nzStringTemplateOutlet="nzContent">{{ nzContent }}</ng-container>
      }
    </ng-template>
    <ng-template #extraTpl>
      <ng-content select="nz-list-item-extra, [nz-list-item-extra]" />
    </ng-template>

    @if (isVerticalAndExtra) {
      <div class="ant-list-item-main">
        <ng-template [ngTemplateOutlet]="contentTpl" />
        <ng-template [ngTemplateOutlet]="actionsTpl" />
      </div>
      @if (nzExtra) {
        <nz-list-item-extra>
          <ng-template [ngTemplateOutlet]="nzExtra" />
        </nz-list-item-extra>
      }
      <ng-template [ngTemplateOutlet]="extraTpl" />
    } @else {
      <ng-template [ngTemplateOutlet]="contentTpl" />
      <ng-template [ngTemplateOutlet]="nzExtra" />
      <ng-template [ngTemplateOutlet]="extraTpl" />
      <ng-template [ngTemplateOutlet]="actionsTpl" />
    }
  `,
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        class: "ant-list-item"
      },
      imports: [NzListItemActionsComponent, NzOutletModule, NgTemplateOutlet, NzListItemExtraComponent],
      standalone: true
    }]
  }], () => [{
    type: NzListComponent
  }, {
    type: ChangeDetectorRef
  }], {
    nzActions: [{
      type: Input
    }],
    nzContent: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzNoFlex: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["class.ant-list-item-no-flex"]
    }],
    listItemExtraDirective: [{
      type: ContentChild,
      args: [NzListItemExtraComponent]
    }]
  });
})();
var DIRECTIVES = [NzListComponent, NzListHeaderComponent, NzListFooterComponent, NzListPaginationComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaTitleComponent, NzListItemMetaDescriptionComponent, NzListItemMetaAvatarComponent, NzListItemActionsComponent, NzListItemActionComponent, NzListItemExtraComponent, NzListLoadMoreDirective, NzListGridDirective];
var _NzListModule = class _NzListModule {
};
_NzListModule.\u0275fac = function NzListModule_Factory(t) {
  return new (t || _NzListModule)();
};
_NzListModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzListModule
});
_NzListModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzListComponent, NzListEmptyComponent, NzListItemComponent, NzListItemMetaComponent, NzListItemMetaAvatarComponent]
});
var NzListModule = _NzListModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzListModule, [{
    type: NgModule,
    args: [{
      imports: [DIRECTIVES],
      exports: [DIRECTIVES]
    }]
  }], null, null);
})();

// src/app/components/list-documents/list-documents.component.ts
function ListDocumentsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-list-item")(1, "div", 3)(2, "div", 4)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 3)(8, "div", 5);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275listener("click", function ListDocumentsComponent_For_5_Template_div_click_11_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.downloadItem(item_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7);
    \u0275\u0275listener("click", function ListDocumentsComponent_For_5_Template_div_click_12_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteInfoItem(item_r2));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r4 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", i_r4 + 1, ").\xA0 ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 3, item_r2.createdDateTime, "MMM dd, yy 'at' hh:mm a"), "");
  }
}
function ListDocumentsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-list-empty");
  }
}
function ListDocumentsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "a", 8);
    \u0275\u0275text(2, " Upload ");
    \u0275\u0275elementEnd()();
  }
}
var _ListDocumentsComponent = class _ListDocumentsComponent {
  constructor() {
    this.deleteDocument = new EventEmitter();
    this.saveDocument = new EventEmitter();
  }
  deleteInfoItem(infoFile) {
    this.deleteDocument.emit(infoFile);
  }
  downloadItem(infoFile) {
    this.saveDocument.emit(infoFile);
  }
};
_ListDocumentsComponent.\u0275fac = function ListDocumentsComponent_Factory(t) {
  return new (t || _ListDocumentsComponent)();
};
_ListDocumentsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListDocumentsComponent, selectors: [["app-list-documents"]], inputs: { listDocsForPackage: "listDocsForPackage" }, outputs: { deleteDocument: "deleteDocument", saveDocument: "saveDocument" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [["nzItemLayout", "horizontal"], ["nzBordered", "", "nzSize", "small"], [1, "create-obj-box"], [1, "list-docs-item"], ["nz-typography", "", 1, "list-docs-item"], ["nz-typography", ""], [1, "download-icon", 3, "click"], [1, "delete-icon", 3, "click"], ["routerLink", "/start", "nz-button", "", "nz-tooltip", "", "nzTooltipTitle", "Add an insurance agreement", "nzTooltipColor", "red", 1, "link-text"]], template: function ListDocumentsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list", 0)(1, "nz-list", 1)(2, "nz-list-header");
    \u0275\u0275text(3, "List of documents:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ListDocumentsComponent_For_5_Template, 13, 6, "nz-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(6, ListDocumentsComponent_Conditional_6_Template, 1, 0, "nz-list-empty");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ListDocumentsComponent_Conditional_7_Template, 3, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.listDocsForPackage);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, (ctx.listDocsForPackage == null ? null : ctx.listDocsForPackage.length) === 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(7, (ctx.listDocsForPackage == null ? null : ctx.listDocsForPackage.length) == 0 ? 7 : -1);
  }
}, dependencies: [NzListModule, NzListComponent, NzListHeaderComponent, NzListEmptyComponent, NzListItemComponent, CommonModule, DatePipe, RouterLink, NzToolTipModule, NzTooltipDirective], styles: ['\n\nnz-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n.list-docs-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.list-docs-item__idx[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 8px;\n  padding: 3px;\n  background: url("./media/del.svg") no-repeat center;\n}\n.ant-list-empty-text[_ngcontent-%COMP%] {\n  max-height: 100px;\n  padding: 0;\n}\nnz-empty[_ngcontent-%COMP%] {\n  margin: 0 0 !important;\n}\n@media screen and (max-width: 580px) {\n  nz-list[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=list-documents.component.css.map */'] });
var ListDocumentsComponent = _ListDocumentsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListDocumentsComponent, { className: "ListDocumentsComponent" });
})();

// src/app/components/list-denial-letters/list-denial-letters.component.ts
function ListDenialLettersComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-list-item")(1, "div", 2)(2, "div", 3)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275listener("click", function ListDenialLettersComponent_For_5_Template_div_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickDeleteLetter(item_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r4 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", i_r4 + 1, ").\xA0");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.denialText);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 3, item_r2.createdDateTime, "MMM dd, yy 'at' hh:mm a"), "");
  }
}
function ListDenialLettersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-list-empty");
  }
}
var _ListDenialLettersComponent = class _ListDenialLettersComponent {
  constructor() {
    this.deleteLetter = new EventEmitter();
  }
  clickDeleteLetter(item) {
    this.deleteLetter.emit(item);
  }
};
_ListDenialLettersComponent.\u0275fac = function ListDenialLettersComponent_Factory(t) {
  return new (t || _ListDenialLettersComponent)();
};
_ListDenialLettersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListDenialLettersComponent, selectors: [["app-list-denial-letters"]], inputs: { listDenialLetters: "listDenialLetters" }, outputs: { deleteLetter: "deleteLetter" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [["nzItemLayout", "horizontal"], ["nzBordered", "", "nzSize", "small"], [1, "list-docs-item"], ["nz-typography", ""], [1, "bottom-side-letter-cell"], [1, "delete-icon", 3, "click"]], template: function ListDenialLettersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list", 0)(1, "nz-list", 1)(2, "nz-list-header");
    \u0275\u0275text(3, "List of denial letters:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ListDenialLettersComponent_For_5_Template, 11, 6, "nz-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(6, ListDenialLettersComponent_Conditional_6_Template, 1, 0, "nz-list-empty");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.listDenialLetters);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, !ctx.listDenialLetters || ctx.listDenialLetters.length === 0 ? 6 : -1);
  }
}, dependencies: [NzListModule, NzListComponent, NzListHeaderComponent, NzListEmptyComponent, NzListItemComponent, CommonModule, DatePipe], styles: ['\n\nnz-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n.list-docs-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.list-docs-item__idx[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 8px;\n  padding: 3px;\n  background: url("./media/del.svg") no-repeat center;\n}\n.ant-list-empty-text[_ngcontent-%COMP%] {\n  max-height: 100px;\n  padding: 0;\n}\n.bottom-side-letter-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-empty[_ngcontent-%COMP%] {\n  margin: 0 0 !important;\n}\n@media screen and (max-width: 580px) {\n  nz-list[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=list-denial-letters.component.css.map */'] });
var ListDenialLettersComponent = _ListDenialLettersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListDenialLettersComponent, { className: "ListDenialLettersComponent" });
})();

// src/app/components/list-answer-ai/list-answer-ai.component.ts
function ListAnswerAiComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-list-item")(1, "div", 2)(2, "div", 3)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 5);
    \u0275\u0275listener("click", function ListAnswerAiComponent_For_5_Template_div_click_10_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clickDeleteAnswerAI(item_r2));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r4 = ctx.$index;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", i_r4 + 1, ").\xA0");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r2.appeal);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 3, item_r2.createdDateTime, "MMM dd, yy 'at' hh:mm a"), "");
  }
}
function ListAnswerAiComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-list-empty");
  }
}
var _ListAnswerAiComponent = class _ListAnswerAiComponent {
  constructor() {
    this.deleteAnswerAI = new EventEmitter();
  }
  clickDeleteAnswerAI(item) {
    this.deleteAnswerAI.emit(item);
  }
};
_ListAnswerAiComponent.\u0275fac = function ListAnswerAiComponent_Factory(t) {
  return new (t || _ListAnswerAiComponent)();
};
_ListAnswerAiComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ListAnswerAiComponent, selectors: [["app-list-answer-ai"]], inputs: { listAnswersAI: "listAnswersAI" }, outputs: { deleteAnswerAI: "deleteAnswerAI" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 7, vars: 1, consts: [["nzItemLayout", "horizontal"], ["nzBordered", "", "nzSize", "small"], [1, "list-docs-item"], ["nz-typography", ""], [1, "bottom-side-letter-cell"], [1, "delete-icon", 3, "click"]], template: function ListAnswerAiComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-list", 0)(1, "nz-list", 1)(2, "nz-list-header");
    \u0275\u0275text(3, "List of appeal letters:");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ListAnswerAiComponent_For_5_Template, 11, 6, "nz-list-item", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275template(6, ListAnswerAiComponent_Conditional_6_Template, 1, 0, "nz-list-empty");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.listAnswersAI);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, !ctx.listAnswersAI || ctx.listAnswersAI.length === 0 ? 6 : -1);
  }
}, dependencies: [NzListModule, NzListComponent, NzListHeaderComponent, NzListEmptyComponent, NzListItemComponent, CommonModule, DatePipe], styles: ['\n\nnz-list[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  margin-bottom: 10px;\n}\n.list-docs-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.list-docs-item__idx[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.delete-icon[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 8px;\n  padding: 3px;\n  background: url("./media/del.svg") no-repeat center;\n}\n.ant-list-empty-text[_ngcontent-%COMP%] {\n  max-height: 100px;\n  padding: 0;\n}\n.bottom-side-letter-cell[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\nnz-empty[_ngcontent-%COMP%] {\n  margin: 0 0 !important;\n}\n@media screen and (max-width: 580px) {\n  nz-list[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n/*# sourceMappingURL=list-answer-ai.component.css.map */'] });
var ListAnswerAiComponent = _ListAnswerAiComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ListAnswerAiComponent, { className: "ListAnswerAiComponent" });
})();

// src/app/pages/letter-page-view/letter-page-view.component.ts
function LetterPageViewComponent_nz_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 16);
  }
  if (rf & 2) {
    const org_r1 = ctx.$implicit;
    \u0275\u0275property("nzValue", org_r1)("nzLabel", org_r1.name);
  }
}
function LetterPageViewComponent_nz_option_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option", 16);
  }
  if (rf & 2) {
    const package_r2 = ctx.$implicit;
    \u0275\u0275property("nzValue", package_r2)("nzLabel", package_r2.name);
  }
}
function LetterPageViewComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2, "Company: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275listener("click", function LetterPageViewComponent_div_23_div_1_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteInfoItem("company"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r3.currentCompany == null ? null : ctx_r3.currentCompany.name, "");
  }
}
function LetterPageViewComponent_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275text(2, " Package: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25);
    \u0275\u0275listener("click", function LetterPageViewComponent_div_23_div_2_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteInfoItem("package"));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r3.packageName, " ");
  }
}
function LetterPageViewComponent_div_23_nz_form_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-form-item", 26);
    \u0275\u0275element(1, "textarea", 27);
    \u0275\u0275elementStart(2, "div", 28)(3, "button", 29);
    \u0275\u0275listener("click", function LetterPageViewComponent_div_23_nz_form_item_4_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.submitForm());
    });
    \u0275\u0275text(4, " Search ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("nzAlign", "center");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.documentsForm.valid);
  }
}
function LetterPageViewComponent_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "app-list-documents", 30);
    \u0275\u0275listener("deleteDocument", function LetterPageViewComponent_div_23_div_5_Template_app_list_documents_deleteDocument_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteDocument.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "app-list-denial-letters", 13);
    \u0275\u0275listener("deleteLetter", function LetterPageViewComponent_div_23_div_5_Template_app_list_denial_letters_deleteLetter_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteLetter.emit($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "app-list-answer-ai", 15);
    \u0275\u0275listener("deleteAnswerAI", function LetterPageViewComponent_div_23_div_5_Template_app_list_answer_ai_deleteAnswerAI_3_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.deleteAnswerAI.emit($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("listDocsForPackage", ctx_r3.listDocsForPackage);
    \u0275\u0275advance();
    \u0275\u0275property("listDenialLetters", ctx_r3.listDenialLetters);
    \u0275\u0275advance();
    \u0275\u0275property("listAnswersAI", ctx_r3.listAnswersAI);
  }
}
function LetterPageViewComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, LetterPageViewComponent_div_23_div_1_Template, 6, 1, "div", 18)(2, LetterPageViewComponent_div_23_div_2_Template, 6, 1, "div", 18);
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275template(4, LetterPageViewComponent_div_23_nz_form_item_4_Template, 5, 2, "nz-form-item", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, LetterPageViewComponent_div_23_div_5_Template, 4, 3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.documentsForm.value.company);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.documentsForm.value.package);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.documentsForm.value.package);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r3.documentsForm.value.package);
  }
}
var _LetterPageViewComponent = class _LetterPageViewComponent {
  constructor(fb, localStorage) {
    this.fb = fb;
    this.localStorage = localStorage;
    this.onSelectCompany = new EventEmitter();
    this.onSelectPackage = new EventEmitter();
    this.deleteDocument = new EventEmitter();
    this.deleteLetter = new EventEmitter();
    this.deleteAnswerAI = new EventEmitter();
    this.onUploadDenialLetter = new EventEmitter();
    this.saveDocument = new EventEmitter();
    this.documentsForm = this.fb.group({
      company: ["", [Validators.required]],
      package: ["", [Validators.required]],
      text: ["", [Validators.required]]
    });
  }
  submitForm() {
    this.onUploadDenialLetter.emit(this.documentsForm.value);
  }
  selectCompany(company) {
    if (company) {
      this.documentsForm.value.company = company.id;
      this.onSelectCompany.emit(company);
      this.documentsForm.controls["package"].reset();
      this.deleteInfoItem("letter");
    }
  }
  selectPackage(e) {
    this.packageName = this.documentsForm.value.package.name;
    this.onSelectPackage.emit(this.documentsForm.value.package);
    this.deleteInfoItem("letter");
  }
  deleteInfoItem(typeInfo) {
    switch (typeInfo) {
      case "company":
        this.documentsForm.controls["company"].reset();
        this.localStorage.clean();
        this.documentsForm.reset();
        break;
      case "package":
        this.documentsForm.controls["package"].reset();
        this.localStorage.deletePackage();
        break;
      case "letter":
        break;
    }
  }
};
_LetterPageViewComponent.\u0275fac = function LetterPageViewComponent_Factory(t) {
  return new (t || _LetterPageViewComponent)(\u0275\u0275directiveInject(NonNullableFormBuilder), \u0275\u0275directiveInject(SessionStorageService));
};
_LetterPageViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LetterPageViewComponent, selectors: [["app-letter-page-view"]], inputs: { currentCompany: "currentCompany", listInsuranceOrg: "listInsuranceOrg", packagesList: "packagesList", listDocsForPackage: "listDocsForPackage", answerAI: "answerAI", listAnswersAI: "listAnswersAI", listDenialLetters: "listDenialLetters", listALLDenialLetters: "listALLDenialLetters", listALLAnswersAI: "listALLAnswersAI" }, outputs: { onSelectCompany: "onSelectCompany", onSelectPackage: "onSelectPackage", deleteDocument: "deleteDocument", deleteLetter: "deleteLetter", deleteAnswerAI: "deleteAnswerAI", onUploadDenialLetter: "onUploadDenialLetter", saveDocument: "saveDocument" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 32, vars: 10, consts: [[1, "page"], [1, "container-page"], ["nz-form", "", 1, "form", 3, "nzLayout", "formGroup"], ["nz-flex", "", 1, "form-box", 3, "nzAlign", "nzJustify"], [1, "left-side"], ["nzPlaceHolder", "Select an insurance company", "nzAllowClear", "", "formControlName", "company", 3, "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "create-obj-box"], ["routerLink", "/start", 1, "link-text"], ["nzPlaceHolder", "Select insurance packages", "nzAllowClear", "", "formControlName", "package", 3, "nzOpenChange", "nzDisabled"], ["class", "list-docs-box", 4, "ngIf"], [1, "all-lists-title"], ["nzHeader", "All list of denial letters", "nzActive", "false"], [3, "deleteLetter", "listDenialLetters"], ["nzHeader", "All list of appeal letters", "nzActive", "false"], [3, "deleteAnswerAI", "listAnswersAI"], [3, "nzValue", "nzLabel"], [1, "list-docs-box"], ["class", "list-info-item", 4, "ngIf"], [1, "right-side"], ["class", "nz-form-item-download download", "nz-button", "", "nzType", "primary", 4, "ngIf"], [4, "ngIf"], [1, "list-info-item"], ["nz-typography", ""], [1, "list-info-item-name"], [1, "delete-icon", 3, "click"], ["nz-button", "", "nzType", "primary", 1, "nz-form-item-download", "download"], ["nz-input", "", "placeholder", "Enter your denial letter text", "nzAutosize", "", "formControlName", "text", "type", "text", 1, "textarea"], ["nz-flex", "", 1, "btn-box", 3, "nzAlign"], ["type", "submit", "nz-button", "", "nzType", "primary", 1, "btn-submit", 3, "click", "disabled"], [3, "deleteDocument", "listDocsForPackage"]], template: function LetterPageViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "p");
    \u0275\u0275text(3, "On this page, you can see the AI Attorney in action. First, you choose an insurance company and a policy you set up on a previous step. Then, you upload an isurance denial letter and wait for your appeal to be generated. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 2)(5, "div", 3)(6, "div", 4)(7, "nz-form-item")(8, "nz-select", 5);
    \u0275\u0275listener("ngModelChange", function LetterPageViewComponent_Template_nz_select_ngModelChange_8_listener($event) {
      return ctx.selectCompany($event);
    });
    \u0275\u0275template(9, LetterPageViewComponent_nz_option_9_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "span");
    \u0275\u0275text(12, "Didn't find the company? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 8);
    \u0275\u0275text(14, " Create a new one");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "nz-form-item")(16, "nz-select", 9);
    \u0275\u0275listener("nzOpenChange", function LetterPageViewComponent_Template_nz_select_nzOpenChange_16_listener($event) {
      return ctx.selectPackage($event);
    });
    \u0275\u0275template(17, LetterPageViewComponent_nz_option_17_Template, 1, 2, "nz-option", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 7)(19, "span");
    \u0275\u0275text(20, "Didn't find the package? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "a", 8);
    \u0275\u0275text(22, " Create a new one ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, LetterPageViewComponent_div_23_Template, 6, 4, "div", 10);
    \u0275\u0275elementStart(24, "p", 11);
    \u0275\u0275text(25, "Additionally, you will find all previous denial letters and appeal templates: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "nz-collapse")(27, "nz-collapse-panel", 12)(28, "app-list-denial-letters", 13);
    \u0275\u0275listener("deleteLetter", function LetterPageViewComponent_Template_app_list_denial_letters_deleteLetter_28_listener($event) {
      return ctx.deleteLetter.emit($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "nz-collapse")(30, "nz-collapse-panel", 14)(31, "app-list-answer-ai", 15);
    \u0275\u0275listener("deleteAnswerAI", function LetterPageViewComponent_Template_app_list_answer_ai_deleteAnswerAI_31_listener($event) {
      return ctx.deleteAnswerAI.emit($event);
    });
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("nzLayout", "vertical")("formGroup", ctx.documentsForm);
    \u0275\u0275advance();
    \u0275\u0275property("nzAlign", "center")("nzJustify", "center");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.listInsuranceOrg);
    \u0275\u0275advance(7);
    \u0275\u0275property("nzDisabled", !(ctx.currentCompany == null ? null : ctx.currentCompany.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.packagesList);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.documentsForm.value.company || (ctx.documentsForm.value == null ? null : ctx.documentsForm.value.package));
    \u0275\u0275advance(5);
    \u0275\u0275property("listDenialLetters", ctx.listALLDenialLetters);
    \u0275\u0275advance(3);
    \u0275\u0275property("listAnswersAI", ctx.listALLAnswersAI);
  }
}, dependencies: [
  CommonModule,
  NgForOf,
  NgIf,
  NzButtonModule,
  NzButtonComponent,
  NzTransitionPatchDirective,
  NzWaveDirective,
  NzLayoutModule,
  NzFlexModule,
  NzFlexDirective,
  NzPageHeaderModule,
  NzFormModule,
  NzRowDirective,
  NzFormDirective,
  NzFormItemComponent,
  NzSelectModule,
  NzOptionComponent,
  NzSelectComponent,
  NzInputModule,
  NzInputDirective,
  NzAutosizeDirective,
  FormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  FormGroupDirective,
  FormControlName,
  RouterLink,
  ListDocumentsComponent,
  NzToolTipModule,
  ListDenialLettersComponent,
  ListAnswerAiComponent,
  NzCollapseModule,
  NzCollapsePanelComponent,
  NzCollapseComponent
], styles: ["\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n.form-box[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px !important;\n  width: 100%;\n}\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\nnz-select[_ngcontent-%COMP%] {\n  width: 250px;\n}\nnz-form-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nz-form-item-download[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.left-side[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  width: 100%;\n}\n.right-side[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.right-side[_ngcontent-%COMP%]   .textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 300px;\n}\n.btn-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 5px;\n}\n.list-docs-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 100%;\n}\n.list-info-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.list-info-item-name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--primary-color);\n  font-weight: 600;\n}\n.dialog-contauner[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100px;\n}\n.ant-form-item[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.download[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  gap: 0;\n}\nnz-collapse[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.all-lists-title[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=letter-page-view.component.css.map */"] });
var LetterPageViewComponent = _LetterPageViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LetterPageViewComponent, { className: "LetterPageViewComponent" });
})();

// src/app/pages/letter-page/letter-page/letter-page.component.ts
var _LetterPageComponent = class _LetterPageComponent {
  constructor(companyService, packageService, localStorage, docsService, letterService, messageService) {
    this.companyService = companyService;
    this.packageService = packageService;
    this.localStorage = localStorage;
    this.docsService = docsService;
    this.letterService = letterService;
    this.messageService = messageService;
    this.isLoading = false;
    this.isVisible = false;
  }
  ngOnInit() {
    this.localStorage.clean();
    this.getData();
  }
  onUploadDenialLetter(info) {
    const body = {
      text: info.text,
      package: info.package.id
    };
    this.answerAI$ = this.letterService.addnewFile(body).pipe(map((data) => {
      return data;
    }), tap(() => {
      this.createSuccessMessage("denial letter", "was added");
      this.getListDenialLetters(info.package.id);
    }), catchError((error) => {
      tap(() => this.createErrorMessage("denial letter", "wasn't added"));
      return throwError(() => error);
    }));
  }
  getData() {
    this.listInsuranceOrg$ = this.companyService.getCompanyList().pipe(map((data) => data));
    this.getAllListDenialLetters();
    this.getAllListAppealsFromAI();
  }
  onSelectCompany(company) {
    if (company) {
      this.packagesList$ = this.packageService.getListPackagesForCurrentCompany(company.id).pipe(tap(() => this.saveCurrentCompany(company)));
    }
  }
  onSelectPackage(packageInfo) {
    if (packageInfo) {
      this.packagesList$.pipe(tap((data) => {
        this.localStorage.savePackage(packageInfo.id, packageInfo.name);
        this.getAllDocsForCurrentPackage(packageInfo.id);
        this.getListDenialLetters(packageInfo.id);
      })).subscribe();
    }
  }
  saveCurrentCompany(company) {
    this.currentCompany$ = of(company);
    this.localStorage.saveCompany(company.id, company.name);
  }
  createErrorMessage(type, action) {
    this.messageService.error(`The ${type} ${action}. Try it again`, {
      nzDuration: 2e3
    });
  }
  createSuccessMessage(type, action) {
    this.messageService.success(`The ${type} ${action}.`, {
      nzDuration: 2e3
    });
  }
  saveDocument(documentInfo) {
    this.docsService.downloadDocument(documentInfo.name).pipe(map((result) => {
      console.log(result);
      return result;
    }), tap(() => {
      this.createSuccessMessage("document", "was saved");
      this.getAllDocsForCurrentPackage(documentInfo.packageId);
    }), catchError((error) => {
      this.createErrorMessage("document", "wasn't saved. Smth went wrong");
      console.error(error);
      alert("Problem while downloading the file.\n[" + error.status + "] " + error.statusText);
      return throwError(() => error);
    })).subscribe();
  }
  /*get lists info for current package*/
  getAllDocsForCurrentPackage(packageId) {
    if (packageId) {
      this.listDocsForPackage$ = this.docsService.getListDocsForCurrentPackage(packageId).pipe(map((data) => {
        return data;
      }));
    }
  }
  getListDenialLetters(packageId) {
    this.listDenialLetters$ = this.letterService.getListDenialLettersForPackage(packageId).pipe(map((data) => {
      return data;
    }), tap((data) => {
      if (data) {
        this.getListAppealsFromAI(packageId);
      }
    }));
  }
  getListAppealsFromAI(packageId) {
    this.listAnswersAI$ = this.letterService.getAppealAnswersForPackage(packageId).pipe(map((data) => {
      return data;
    }));
  }
  /*get lists info for all cases*/
  getAllListDenialLetters() {
    this.listALLDenialLetters$ = this.letterService.getAllListDenialLetters().pipe(map((data) => {
      return data;
    }), tap((data) => {
      if (data) {
        this.getAllListAppealsFromAI();
      }
    }));
  }
  getAllListAppealsFromAI() {
    this.listALLAnswersAI$ = this.letterService.getAllAppealAnswers().pipe(map((data) => {
      return data;
    }));
  }
  /*deleting files from server*/
  deleteDocument(documentInfo) {
    this.docsService.deleteDocumentForCurrentPackage(documentInfo.name).pipe(tap(() => {
      this.createSuccessMessage("document", "was deleted");
      this.getAllDocsForCurrentPackage(documentInfo.packageId);
    }), catchError((error) => {
      this.createErrorMessage("document", "wasn't deleted. Smth went wrong");
      return throwError(() => error);
    })).subscribe();
  }
  deleteLetter(letterInfo) {
    this.letterService.deleteDenialLetter(letterInfo.id).pipe(tap(() => {
      this.createSuccessMessage("letter", "was deleted");
      this.getListDenialLetters(String(letterInfo.package));
      this.getListAppealsFromAI(String(letterInfo.package));
    }), catchError((error) => {
      this.createErrorMessage("letter", "wasn't deleted. Smth went wrong");
      return throwError(() => error);
    })).subscribe();
  }
  deleteAnswerAI(appealLetter) {
    this.letterService.deleteAnswerAI(appealLetter.id).pipe(tap(() => {
      this.createSuccessMessage("appeal letter", "was deleted");
      this.getListAppealsFromAI(String(appealLetter.package));
    }), catchError((error) => {
      this.createErrorMessage("appeal letter", "wasn't deleted. Smth went wrong");
      return throwError(() => error);
    })).subscribe();
  }
};
_LetterPageComponent.\u0275fac = function LetterPageComponent_Factory(t) {
  return new (t || _LetterPageComponent)(\u0275\u0275directiveInject(CompanyService), \u0275\u0275directiveInject(PackageService), \u0275\u0275directiveInject(SessionStorageService), \u0275\u0275directiveInject(DocsService), \u0275\u0275directiveInject(LetterService), \u0275\u0275directiveInject(NzMessageService));
};
_LetterPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LetterPageComponent, selectors: [["app-letter-page"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 10, vars: 27, consts: [[3, "onSelectCompany", "onSelectPackage", "onUploadDenialLetter", "deleteDocument", "deleteLetter", "deleteAnswerAI", "saveDocument", "packagesList", "currentCompany", "listInsuranceOrg", "answerAI", "listDocsForPackage", "listDenialLetters", "listAnswersAI", "listALLDenialLetters", "listALLAnswersAI"]], template: function LetterPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-letter-page-view", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("onSelectCompany", function LetterPageComponent_Template_app_letter_page_view_onSelectCompany_0_listener($event) {
      return ctx.onSelectCompany($event);
    })("onSelectPackage", function LetterPageComponent_Template_app_letter_page_view_onSelectPackage_0_listener($event) {
      return ctx.onSelectPackage($event);
    })("onUploadDenialLetter", function LetterPageComponent_Template_app_letter_page_view_onUploadDenialLetter_0_listener($event) {
      return ctx.onUploadDenialLetter($event);
    })("deleteDocument", function LetterPageComponent_Template_app_letter_page_view_deleteDocument_0_listener($event) {
      return ctx.deleteDocument($event);
    })("deleteLetter", function LetterPageComponent_Template_app_letter_page_view_deleteLetter_0_listener($event) {
      return ctx.deleteLetter($event);
    })("deleteAnswerAI", function LetterPageComponent_Template_app_letter_page_view_deleteAnswerAI_0_listener($event) {
      return ctx.deleteAnswerAI($event);
    })("saveDocument", function LetterPageComponent_Template_app_letter_page_view_saveDocument_0_listener($event) {
      return ctx.saveDocument($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("packagesList", \u0275\u0275pipeBind1(1, 9, ctx.packagesList$))("currentCompany", \u0275\u0275pipeBind1(2, 11, ctx.currentCompany$))("listInsuranceOrg", \u0275\u0275pipeBind1(3, 13, ctx.listInsuranceOrg$))("answerAI", \u0275\u0275pipeBind1(4, 15, ctx.answerAI$))("listDocsForPackage", \u0275\u0275pipeBind1(5, 17, ctx.listDocsForPackage$))("listDenialLetters", \u0275\u0275pipeBind1(6, 19, ctx.listDenialLetters$))("listAnswersAI", \u0275\u0275pipeBind1(7, 21, ctx.listAnswersAI$))("listALLDenialLetters", \u0275\u0275pipeBind1(8, 23, ctx.listALLDenialLetters$))("listALLAnswersAI", \u0275\u0275pipeBind1(9, 25, ctx.listALLAnswersAI$));
  }
}, dependencies: [CommonModule, AsyncPipe, LetterPageViewComponent, NzMessageModule] });
var LetterPageComponent = _LetterPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LetterPageComponent, { className: "LetterPageComponent" });
})();
export {
  LetterPageComponent
};
//# sourceMappingURL=chunk-FALZDIXG.js.map
