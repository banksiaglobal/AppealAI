import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  NzBreakpointService,
  NzNoAnimationDirective,
  OverlayModule,
  POSITION_MAP,
  collapseMotion,
  getPlacementName,
  siderResponsiveMap,
  slideMotion,
  zoomBigMotion
} from "./chunk-VEWB337I.js";
import {
  Directionality,
  InputBoolean,
  NavigationEnd,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Platform,
  Router,
  RouterLink,
  inNextTick,
  toCssPixel
} from "./chunk-6H6XYIWG.js";
import {
  NgClass,
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
  Host,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  Renderer2,
  SkipSelf,
  Subject,
  ViewChild,
  ViewEncapsulation$1,
  __decorate,
  auditTime,
  combineLatest,
  distinctUntilChanged,
  filter,
  forwardRef,
  inject,
  map,
  mapTo,
  merge,
  mergeMap,
  setClassMetadata,
  startWith,
  switchMap,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵsyntheticHostProperty,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-M5MRYH5D.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-menu.mjs
var _c0 = ["nz-menu-item", ""];
var _c1 = ["*"];
var _c2 = ["nz-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) {
}
var _c3 = ["nz-submenu-none-inline-child", ""];
function NzSubmenuNoneInlineChildComponent_ng_template_1_Template(rf, ctx) {
}
var _c4 = ["nz-submenu-title", ""];
function NzSubMenuTitleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzType", ctx_r0.nzIcon);
  }
}
function NzSubMenuTitleComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
}
function NzSubMenuTitleComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275template(1, NzSubMenuTitleComponent_Conditional_3_Case_1_Template, 1, 0)(2, NzSubMenuTitleComponent_Conditional_3_Case_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(1, (tmp_1_0 = ctx_r0.dir) === "rtl" ? 1 : 2);
  }
}
function NzSubMenuTitleComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 6);
  }
}
var _c5 = ["nz-submenu", ""];
var _c6 = [[["", "title", ""]], "*"];
var _c7 = ["[title]", "*"];
function NzSubMenuComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzSubMenuComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const subMenuTemplate_r3 = \u0275\u0275reference(6);
    \u0275\u0275property("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("menuClass", ctx_r1.nzMenuClassName)("templateOutlet", subMenuTemplate_r3);
  }
}
function NzSubMenuComponent_Conditional_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275listener("subMenuMouseState", function NzSubMenuComponent_Conditional_4_ng_template_0_Template_div_subMenuMouseState_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setMouseEnterState($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const subMenuTemplate_r3 = \u0275\u0275reference(6);
    \u0275\u0275property("theme", ctx_r1.theme)("mode", ctx_r1.mode)("nzOpen", ctx_r1.nzOpen)("position", ctx_r1.position)("nzDisabled", ctx_r1.nzDisabled)("isMenuInsideDropDown", ctx_r1.isMenuInsideDropDown)("templateOutlet", subMenuTemplate_r3)("menuClass", ctx_r1.nzMenuClassName)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
  }
}
function NzSubMenuComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, NzSubMenuComponent_Conditional_4_ng_template_0_Template, 1, 10, "ng-template", 4);
    \u0275\u0275listener("positionChange", function NzSubMenuComponent_Conditional_4_Template_ng_template_positionChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPositionChange($event));
    });
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const origin_r6 = \u0275\u0275reference(1);
    \u0275\u0275property("cdkConnectedOverlayPositions", ctx_r1.overlayPositions)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayWidth", ctx_r1.triggerWidth)("cdkConnectedOverlayOpen", ctx_r1.nzOpen)("cdkConnectedOverlayTransformOriginOn", ".ant-menu-submenu");
  }
}
function NzSubMenuComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var _c8 = ["titleElement"];
var _c9 = ["nz-menu-group", ""];
var _c10 = ["*", [["", "title", ""]]];
var _c11 = ["*", "[title]"];
function NzMenuGroupComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTitle);
  }
}
function NzMenuGroupComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 1);
  }
}
var NzIsMenuInsideDropDownToken = new InjectionToken("NzIsInDropDownMenuToken");
var NzMenuServiceLocalToken = new InjectionToken("NzMenuServiceLocalToken");
var _MenuService = class _MenuService {
  constructor() {
    this.descendantMenuItemClick$ = new Subject();
    this.childMenuItemClick$ = new Subject();
    this.theme$ = new BehaviorSubject("light");
    this.mode$ = new BehaviorSubject("vertical");
    this.inlineIndent$ = new BehaviorSubject(24);
    this.isChildSubMenuOpen$ = new BehaviorSubject(false);
  }
  onDescendantMenuItemClick(menu) {
    this.descendantMenuItemClick$.next(menu);
  }
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setMode(mode) {
    this.mode$.next(mode);
  }
  setTheme(theme) {
    this.theme$.next(theme);
  }
  setInlineIndent(indent) {
    this.inlineIndent$.next(indent);
  }
};
_MenuService.\u0275fac = function MenuService_Factory(t) {
  return new (t || _MenuService)();
};
_MenuService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MenuService,
  factory: _MenuService.\u0275fac
});
var MenuService = _MenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuService, [{
    type: Injectable
  }], null, null);
})();
var _NzSubmenuService = class _NzSubmenuService {
  /**
   * menu item inside submenu clicked
   *
   * @param menu
   */
  onChildMenuItemClick(menu) {
    this.childMenuItemClick$.next(menu);
  }
  setOpenStateWithoutDebounce(value) {
    this.isCurrentSubMenuOpen$.next(value);
  }
  setMouseEnterTitleOrOverlayState(value) {
    this.isMouseEnterTitleOrOverlay$.next(value);
  }
  constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
    this.nzHostSubmenuService = nzHostSubmenuService;
    this.nzMenuService = nzMenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.mode$ = this.nzMenuService.mode$.pipe(map((mode) => {
      if (mode === "inline") {
        return "inline";
      } else if (mode === "vertical" || this.nzHostSubmenuService) {
        return "vertical";
      } else {
        return "horizontal";
      }
    }));
    this.level = 1;
    this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
    this.isChildSubMenuOpen$ = new BehaviorSubject(false);
    this.isMouseEnterTitleOrOverlay$ = new Subject();
    this.childMenuItemClick$ = new Subject();
    this.destroy$ = new Subject();
    if (this.nzHostSubmenuService) {
      this.level = this.nzHostSubmenuService.level + 1;
    }
    const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter((mode) => mode !== "inline" || this.isMenuInsideDropDown), mapTo(false));
    const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
    const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
    isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe((data) => {
      this.setOpenStateWithoutDebounce(data);
      if (this.nzHostSubmenuService) {
        this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
      } else {
        this.nzMenuService.isChildSubMenuOpen$.next(data);
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubmenuService.\u0275fac = function NzSubmenuService_Factory(t) {
  return new (t || _NzSubmenuService)(\u0275\u0275inject(_NzSubmenuService, 12), \u0275\u0275inject(MenuService), \u0275\u0275inject(NzIsMenuInsideDropDownToken));
};
_NzSubmenuService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NzSubmenuService,
  factory: _NzSubmenuService.\u0275fac
});
var NzSubmenuService = _NzSubmenuService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuService, [{
    type: Injectable
  }], () => [{
    type: NzSubmenuService,
    decorators: [{
      type: SkipSelf
    }, {
      type: Optional
    }]
  }, {
    type: MenuService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }], null);
})();
var _NzMenuItemComponent = class _NzMenuItemComponent {
  /** clear all item selected status except this */
  clickMenuItem(e) {
    if (this.nzDisabled) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.nzMenuService.onDescendantMenuItemClick(this);
      if (this.nzSubmenuService) {
        this.nzSubmenuService.onChildMenuItemClick(this);
      } else {
        this.nzMenuService.onChildMenuItemClick(this);
      }
    }
  }
  setSelectedState(value) {
    this.nzSelected = value;
    this.selected$.next(value);
  }
  updateRouterActive() {
    if (!this.listOfRouterLink || !this.router || !this.router.navigated || !this.nzMatchRouter) {
      return;
    }
    Promise.resolve().then(() => {
      const hasActiveLinks = this.hasActiveLinks();
      if (this.nzSelected !== hasActiveLinks) {
        this.nzSelected = hasActiveLinks;
        this.setSelectedState(this.nzSelected);
        this.cdr.markForCheck();
      }
    });
  }
  hasActiveLinks() {
    const isActiveCheckFn = this.isLinkActive(this.router);
    return this.routerLink && isActiveCheckFn(this.routerLink) || this.listOfRouterLink.some(isActiveCheckFn);
  }
  isLinkActive(router) {
    return (link) => router.isActive(link.urlTree || "", {
      paths: this.nzMatchRouterExact ? "exact" : "subset",
      queryParams: this.nzMatchRouterExact ? "exact" : "subset",
      fragment: "ignored",
      matrixParams: "ignored"
    });
  }
  constructor(nzMenuService, cdr, nzSubmenuService, isMenuInsideDropDown, directionality, routerLink, router) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.nzSubmenuService = nzSubmenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.directionality = directionality;
    this.routerLink = routerLink;
    this.router = router;
    this.destroy$ = new Subject();
    this.level = this.nzSubmenuService ? this.nzSubmenuService.level + 1 : 1;
    this.selected$ = new Subject();
    this.inlinePaddingLeft = null;
    this.dir = "ltr";
    this.nzDisabled = false;
    this.nzSelected = false;
    this.nzDanger = false;
    this.nzMatchRouterExact = false;
    this.nzMatchRouter = false;
    if (router) {
      this.router.events.pipe(takeUntil(this.destroy$), filter((e) => e instanceof NavigationEnd)).subscribe(() => {
        this.updateRouterActive();
      });
    }
  }
  ngOnInit() {
    combineLatest([this.nzMenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngAfterContentInit() {
    this.listOfRouterLink.changes.pipe(takeUntil(this.destroy$)).subscribe(() => this.updateRouterActive());
    this.updateRouterActive();
  }
  ngOnChanges(changes) {
    if (changes.nzSelected) {
      this.setSelectedState(this.nzSelected);
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzMenuItemComponent.\u0275fac = function NzMenuItemComponent_Factory(t) {
  return new (t || _NzMenuItemComponent)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzSubmenuService, 8), \u0275\u0275directiveInject(NzIsMenuInsideDropDownToken), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(RouterLink, 8), \u0275\u0275directiveInject(Router, 8));
};
_NzMenuItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzMenuItemComponent,
  selectors: [["", "nz-menu-item", ""]],
  contentQueries: function NzMenuItemComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, RouterLink, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfRouterLink = _t);
    }
  },
  hostVars: 20,
  hostBindings: function NzMenuItemComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NzMenuItemComponent_click_HostBindingHandler($event) {
        return ctx.clickMenuItem($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("padding-left", ctx.dir === "rtl" ? null : ctx.nzPaddingLeft || ctx.inlinePaddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.nzPaddingLeft || ctx.inlinePaddingLeft : null, "px");
      \u0275\u0275classProp("ant-dropdown-menu-item", ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-selected", ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-dropdown-menu-item-danger", ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-dropdown-menu-item-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-item", !ctx.isMenuInsideDropDown)("ant-menu-item-selected", !ctx.isMenuInsideDropDown && ctx.nzSelected)("ant-menu-item-danger", !ctx.isMenuInsideDropDown && ctx.nzDanger)("ant-menu-item-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled);
    }
  },
  inputs: {
    nzPaddingLeft: "nzPaddingLeft",
    nzDisabled: "nzDisabled",
    nzSelected: "nzSelected",
    nzDanger: "nzDanger",
    nzMatchRouterExact: "nzMatchRouterExact",
    nzMatchRouter: "nzMatchRouter"
  },
  exportAs: ["nzMenuItem"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  consts: [[1, "ant-menu-title-content"]],
  template: function NzMenuItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzMenuItemComponent = _NzMenuItemComponent;
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzSelected", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzDanger", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzMatchRouterExact", void 0);
__decorate([InputBoolean()], NzMenuItemComponent.prototype, "nzMatchRouter", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuItemComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-item]",
      exportAs: "nzMenuItem",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <span class="ant-menu-title-content">
      <ng-content></ng-content>
    </span>
  `,
      host: {
        "[class.ant-dropdown-menu-item]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-item-selected]": `isMenuInsideDropDown && nzSelected`,
        "[class.ant-dropdown-menu-item-danger]": `isMenuInsideDropDown && nzDanger`,
        "[class.ant-dropdown-menu-item-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-item]": `!isMenuInsideDropDown`,
        "[class.ant-menu-item-selected]": `!isMenuInsideDropDown && nzSelected`,
        "[class.ant-menu-item-danger]": `!isMenuInsideDropDown && nzDanger`,
        "[class.ant-menu-item-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : nzPaddingLeft || inlinePaddingLeft`,
        "[style.paddingRight.px]": `dir === 'rtl' ? nzPaddingLeft || inlinePaddingLeft : null`,
        "(click)": "clickMenuItem($event)"
      },
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzSubmenuService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: RouterLink,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], {
    nzPaddingLeft: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzSelected: [{
      type: Input
    }],
    nzDanger: [{
      type: Input
    }],
    nzMatchRouterExact: [{
      type: Input
    }],
    nzMatchRouter: [{
      type: Input
    }],
    listOfRouterLink: [{
      type: ContentChildren,
      args: [RouterLink, {
        descendants: true
      }]
    }]
  });
})();
var _NzSubmenuInlineChildComponent = class _NzSubmenuInlineChildComponent {
  constructor(elementRef, renderer, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.directionality = directionality;
    this.templateOutlet = null;
    this.menuClass = "";
    this.mode = "vertical";
    this.nzOpen = false;
    this.listOfCacheClassName = [];
    this.expandState = "collapsed";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  calcMotionState() {
    if (this.nzOpen) {
      this.expandState = "expanded";
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen,
      menuClass
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
    if (menuClass) {
      if (this.listOfCacheClassName.length) {
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.removeClass(this.elementRef.nativeElement, className);
        });
      }
      if (this.menuClass) {
        this.listOfCacheClassName = this.menuClass.split(" ");
        this.listOfCacheClassName.filter((item) => !!item).forEach((className) => {
          this.renderer.addClass(this.elementRef.nativeElement, className);
        });
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubmenuInlineChildComponent.\u0275fac = function NzSubmenuInlineChildComponent_Factory(t) {
  return new (t || _NzSubmenuInlineChildComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Directionality, 8));
};
_NzSubmenuInlineChildComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSubmenuInlineChildComponent,
  selectors: [["", "nz-submenu-inline-child", ""]],
  hostAttrs: [1, "ant-menu", "ant-menu-inline", "ant-menu-sub"],
  hostVars: 3,
  hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275syntheticHostProperty("@collapseMotion", ctx.expandState);
      \u0275\u0275classProp("ant-menu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    templateOutlet: "templateOutlet",
    menuClass: "menuClass",
    mode: "mode",
    nzOpen: "nzOpen"
  },
  exportAs: ["nzSubmenuInlineChild"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c2,
  decls: 1,
  vars: 1,
  consts: [[3, "ngTemplateOutlet"]],
  template: function NzSubmenuInlineChildComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngTemplateOutlet", ctx.templateOutlet);
    }
  },
  dependencies: [NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [collapseMotion]
  },
  changeDetection: 0
});
var NzSubmenuInlineChildComponent = _NzSubmenuInlineChildComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-inline-child]",
      animations: [collapseMotion],
      exportAs: "nzSubmenuInlineChild",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template> `,
      host: {
        class: "ant-menu ant-menu-inline ant-menu-sub",
        "[class.ant-menu-rtl]": `dir === 'rtl'`,
        "[@collapseMotion]": "expandState"
      },
      imports: [NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    templateOutlet: [{
      type: Input
    }],
    menuClass: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }]
  });
})();
var _NzSubmenuNoneInlineChildComponent = class _NzSubmenuNoneInlineChildComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.menuClass = "";
    this.theme = "light";
    this.templateOutlet = null;
    this.isMenuInsideDropDown = false;
    this.mode = "vertical";
    this.position = "right";
    this.nzDisabled = false;
    this.nzOpen = false;
    this.subMenuMouseState = new EventEmitter();
    this.expandState = "collapsed";
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  setMouseState(state) {
    if (!this.nzDisabled) {
      this.subMenuMouseState.next(state);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  calcMotionState() {
    if (this.nzOpen) {
      if (this.mode === "horizontal") {
        this.expandState = "bottom";
      } else if (this.mode === "vertical") {
        this.expandState = "active";
      }
    } else {
      this.expandState = "collapsed";
    }
  }
  ngOnInit() {
    this.calcMotionState();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    const {
      mode,
      nzOpen
    } = changes;
    if (mode || nzOpen) {
      this.calcMotionState();
    }
  }
};
_NzSubmenuNoneInlineChildComponent.\u0275fac = function NzSubmenuNoneInlineChildComponent_Factory(t) {
  return new (t || _NzSubmenuNoneInlineChildComponent)(\u0275\u0275directiveInject(Directionality, 8));
};
_NzSubmenuNoneInlineChildComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSubmenuNoneInlineChildComponent,
  selectors: [["", "nz-submenu-none-inline-child", ""]],
  hostAttrs: [1, "ant-menu-submenu", "ant-menu-submenu-popup"],
  hostVars: 14,
  hostBindings: function NzSubmenuNoneInlineChildComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("mouseenter", function NzSubmenuNoneInlineChildComponent_mouseenter_HostBindingHandler() {
        return ctx.setMouseState(true);
      })("mouseleave", function NzSubmenuNoneInlineChildComponent_mouseleave_HostBindingHandler() {
        return ctx.setMouseState(false);
      });
    }
    if (rf & 2) {
      \u0275\u0275syntheticHostProperty("@slideMotion", ctx.expandState)("@zoomBigMotion", ctx.expandState);
      \u0275\u0275classProp("ant-menu-light", ctx.theme === "light")("ant-menu-dark", ctx.theme === "dark")("ant-menu-submenu-placement-bottom", ctx.mode === "horizontal")("ant-menu-submenu-placement-right", ctx.mode === "vertical" && ctx.position === "right")("ant-menu-submenu-placement-left", ctx.mode === "vertical" && ctx.position === "left")("ant-menu-submenu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    menuClass: "menuClass",
    theme: "theme",
    templateOutlet: "templateOutlet",
    isMenuInsideDropDown: "isMenuInsideDropDown",
    mode: "mode",
    position: "position",
    nzDisabled: "nzDisabled",
    nzOpen: "nzOpen"
  },
  outputs: {
    subMenuMouseState: "subMenuMouseState"
  },
  exportAs: ["nzSubmenuNoneInlineChild"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c3,
  decls: 2,
  vars: 16,
  consts: [[3, "ngClass"], [3, "ngTemplateOutlet"]],
  template: function NzSubmenuNoneInlineChildComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NzSubmenuNoneInlineChildComponent_ng_template_1_Template, 0, 0, "ng-template", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-menu", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown)("ant-menu-vertical", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-sub", ctx.isMenuInsideDropDown)("ant-menu-sub", !ctx.isMenuInsideDropDown)("ant-menu-rtl", ctx.dir === "rtl");
      \u0275\u0275property("ngClass", ctx.menuClass);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.templateOutlet);
    }
  },
  dependencies: [NgClass, NgTemplateOutlet],
  encapsulation: 2,
  data: {
    animation: [zoomBigMotion, slideMotion]
  },
  changeDetection: 0
});
var NzSubmenuNoneInlineChildComponent = _NzSubmenuNoneInlineChildComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubmenuNoneInlineChildComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-none-inline-child]",
      exportAs: "nzSubmenuNoneInlineChild",
      encapsulation: ViewEncapsulation$1.None,
      animations: [zoomBigMotion, slideMotion],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div
      [class.ant-dropdown-menu]="isMenuInsideDropDown"
      [class.ant-menu]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-vertical]="isMenuInsideDropDown"
      [class.ant-menu-vertical]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-sub]="isMenuInsideDropDown"
      [class.ant-menu-sub]="!isMenuInsideDropDown"
      [class.ant-menu-rtl]="dir === 'rtl'"
      [ngClass]="menuClass"
    >
      <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
    </div>
  `,
      host: {
        class: "ant-menu-submenu ant-menu-submenu-popup",
        "[class.ant-menu-light]": "theme === 'light'",
        "[class.ant-menu-dark]": "theme === 'dark'",
        "[class.ant-menu-submenu-placement-bottom]": "mode === 'horizontal'",
        "[class.ant-menu-submenu-placement-right]": "mode === 'vertical' && position === 'right'",
        "[class.ant-menu-submenu-placement-left]": "mode === 'vertical' && position === 'left'",
        "[class.ant-menu-submenu-rtl]": 'dir ==="rtl"',
        "[@slideMotion]": "expandState",
        "[@zoomBigMotion]": "expandState",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NgClass, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    menuClass: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    templateOutlet: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var _NzSubMenuTitleComponent = class _NzSubMenuTitleComponent {
  constructor(cdr, directionality) {
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzIcon = null;
    this.nzTitle = null;
    this.isMenuInsideDropDown = false;
    this.nzDisabled = false;
    this.paddingLeft = null;
    this.mode = "vertical";
    this.toggleSubMenu = new EventEmitter();
    this.subMenuMouseState = new EventEmitter();
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setMouseState(state) {
    if (!this.nzDisabled) {
      this.subMenuMouseState.next(state);
    }
  }
  clickTitle() {
    if (this.mode === "inline" && !this.nzDisabled) {
      this.toggleSubMenu.emit();
    }
  }
};
_NzSubMenuTitleComponent.\u0275fac = function NzSubMenuTitleComponent_Factory(t) {
  return new (t || _NzSubMenuTitleComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality, 8));
};
_NzSubMenuTitleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSubMenuTitleComponent,
  selectors: [["", "nz-submenu-title", ""]],
  hostVars: 8,
  hostBindings: function NzSubMenuTitleComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NzSubMenuTitleComponent_click_HostBindingHandler() {
        return ctx.clickTitle();
      })("mouseenter", function NzSubMenuTitleComponent_mouseenter_HostBindingHandler() {
        return ctx.setMouseState(true);
      })("mouseleave", function NzSubMenuTitleComponent_mouseleave_HostBindingHandler() {
        return ctx.setMouseState(false);
      });
    }
    if (rf & 2) {
      \u0275\u0275styleProp("padding-left", ctx.dir === "rtl" ? null : ctx.paddingLeft, "px")("padding-right", ctx.dir === "rtl" ? ctx.paddingLeft : null, "px");
      \u0275\u0275classProp("ant-dropdown-menu-submenu-title", ctx.isMenuInsideDropDown)("ant-menu-submenu-title", !ctx.isMenuInsideDropDown);
    }
  },
  inputs: {
    nzIcon: "nzIcon",
    nzTitle: "nzTitle",
    isMenuInsideDropDown: "isMenuInsideDropDown",
    nzDisabled: "nzDisabled",
    paddingLeft: "paddingLeft",
    mode: "mode"
  },
  outputs: {
    toggleSubMenu: "toggleSubMenu",
    subMenuMouseState: "subMenuMouseState"
  },
  exportAs: ["nzSubmenuTitle"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  attrs: _c4,
  ngContentSelectors: _c1,
  decls: 5,
  vars: 3,
  consts: [["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet"], [1, "ant-dropdown-menu-submenu-expand-icon"], [1, "ant-menu-title-content"], ["nz-icon", "", "nzType", "left", 1, "ant-dropdown-menu-submenu-arrow-icon"], ["nz-icon", "", "nzType", "right", 1, "ant-dropdown-menu-submenu-arrow-icon"], [1, "ant-menu-submenu-arrow"]],
  template: function NzSubMenuTitleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzSubMenuTitleComponent_Conditional_0_Template, 1, 1, "span", 0)(1, NzSubMenuTitleComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
      \u0275\u0275projection(2);
      \u0275\u0275template(3, NzSubMenuTitleComponent_Conditional_3_Template, 3, 1, "span", 2)(4, NzSubMenuTitleComponent_Conditional_4_Template, 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.nzIcon ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("nzStringTemplateOutlet", ctx.nzTitle);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(3, ctx.isMenuInsideDropDown ? 3 : 4);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSubMenuTitleComponent = _NzSubMenuTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuTitleComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu-title]",
      exportAs: "nzSubmenuTitle",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (nzIcon) {
      <span nz-icon [nzType]="nzIcon"></span>
    }
    <ng-container *nzStringTemplateOutlet="nzTitle">
      <span class="ant-menu-title-content">{{ nzTitle }}</span>
    </ng-container>
    <ng-content />
    @if (isMenuInsideDropDown) {
      <span class="ant-dropdown-menu-submenu-expand-icon">
        @switch (dir) {
          @case ('rtl') {
            <span nz-icon nzType="left" class="ant-dropdown-menu-submenu-arrow-icon"></span>
          }
          @default {
            <span nz-icon nzType="right" class="ant-dropdown-menu-submenu-arrow-icon"></span>
          }
        }
      </span>
    } @else {
      <span class="ant-menu-submenu-arrow"></span>
    }
  `,
      host: {
        "[class.ant-dropdown-menu-submenu-title]": "isMenuInsideDropDown",
        "[class.ant-menu-submenu-title]": "!isMenuInsideDropDown",
        "[style.paddingLeft.px]": `dir === 'rtl' ? null : paddingLeft `,
        "[style.paddingRight.px]": `dir === 'rtl' ? paddingLeft : null`,
        "(click)": "clickTitle()",
        "(mouseenter)": "setMouseState(true)",
        "(mouseleave)": "setMouseState(false)"
      },
      imports: [NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIcon: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    isMenuInsideDropDown: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    paddingLeft: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    toggleSubMenu: [{
      type: Output
    }],
    subMenuMouseState: [{
      type: Output
    }]
  });
})();
var listOfVerticalPositions = [POSITION_MAP.rightTop, POSITION_MAP.right, POSITION_MAP.rightBottom, POSITION_MAP.leftTop, POSITION_MAP.left, POSITION_MAP.leftBottom];
var listOfHorizontalPositions = [POSITION_MAP.bottomLeft, POSITION_MAP.bottomRight, POSITION_MAP.topRight, POSITION_MAP.topLeft];
var _NzSubMenuComponent = class _NzSubMenuComponent {
  /** set the submenu host open status directly **/
  setOpenStateWithoutDebounce(open) {
    this.nzSubmenuService.setOpenStateWithoutDebounce(open);
  }
  toggleSubMenu() {
    this.setOpenStateWithoutDebounce(!this.nzOpen);
  }
  setMouseEnterState(value) {
    this.isActive = value;
    if (this.mode !== "inline") {
      this.nzSubmenuService.setMouseEnterTitleOrOverlayState(value);
    }
  }
  setTriggerWidth() {
    if (this.mode === "horizontal" && this.platform.isBrowser && this.cdkOverlayOrigin && this.nzPlacement === "bottomLeft") {
      this.triggerWidth = this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width;
    }
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    if (placement === "rightTop" || placement === "rightBottom" || placement === "right") {
      this.position = "right";
    } else if (placement === "leftTop" || placement === "leftBottom" || placement === "left") {
      this.position = "left";
    }
  }
  constructor(nzMenuService, cdr, nzSubmenuService, platform, isMenuInsideDropDown, directionality, noAnimation) {
    this.nzMenuService = nzMenuService;
    this.cdr = cdr;
    this.nzSubmenuService = nzSubmenuService;
    this.platform = platform;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzMenuClassName = "";
    this.nzPaddingLeft = null;
    this.nzTitle = null;
    this.nzIcon = null;
    this.nzOpen = false;
    this.nzDisabled = false;
    this.nzPlacement = "bottomLeft";
    this.nzOpenChange = new EventEmitter();
    this.cdkOverlayOrigin = null;
    this.listOfNzSubMenuComponent = null;
    this.listOfNzMenuItemDirective = null;
    this.level = this.nzSubmenuService.level;
    this.destroy$ = new Subject();
    this.position = "right";
    this.triggerWidth = null;
    this.theme = "light";
    this.mode = "vertical";
    this.inlinePaddingLeft = null;
    this.overlayPositions = listOfVerticalPositions;
    this.isSelected = false;
    this.isActive = false;
    this.dir = "ltr";
  }
  ngOnInit() {
    this.nzMenuService.theme$.pipe(takeUntil(this.destroy$)).subscribe((theme) => {
      this.theme = theme;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.mode$.pipe(takeUntil(this.destroy$)).subscribe((mode) => {
      this.mode = mode;
      if (mode === "horizontal") {
        this.overlayPositions = [POSITION_MAP[this.nzPlacement], ...listOfHorizontalPositions];
      } else if (mode === "vertical") {
        this.overlayPositions = listOfVerticalPositions;
      }
      this.cdr.markForCheck();
    });
    combineLatest([this.nzSubmenuService.mode$, this.nzMenuService.inlineIndent$]).pipe(takeUntil(this.destroy$)).subscribe(([mode, inlineIndent]) => {
      this.inlinePaddingLeft = mode === "inline" ? this.level * inlineIndent : null;
      this.cdr.markForCheck();
    });
    this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(takeUntil(this.destroy$)).subscribe((open) => {
      this.isActive = open;
      if (open !== this.nzOpen) {
        this.setTriggerWidth();
        this.nzOpen = open;
        this.nzOpenChange.emit(this.nzOpen);
        this.cdr.markForCheck();
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.setTriggerWidth();
    const listOfNzMenuItemDirective = this.listOfNzMenuItemDirective;
    const changes = listOfNzMenuItemDirective.changes;
    const mergedObservable = merge(...[changes, ...listOfNzMenuItemDirective.map((menu) => menu.selected$)]);
    changes.pipe(startWith(listOfNzMenuItemDirective), switchMap(() => mergedObservable), startWith(true), map(() => listOfNzMenuItemDirective.some((e) => e.nzSelected)), takeUntil(this.destroy$)).subscribe((selected) => {
      this.isSelected = selected;
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzOpen
    } = changes;
    if (nzOpen) {
      this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen);
      this.setTriggerWidth();
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSubMenuComponent.\u0275fac = function NzSubMenuComponent_Factory(t) {
  return new (t || _NzSubMenuComponent)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzSubmenuService), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzIsMenuInsideDropDownToken), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NzNoAnimationDirective, 9));
};
_NzSubMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSubMenuComponent,
  selectors: [["", "nz-submenu", ""]],
  contentQueries: function NzSubMenuComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, _NzSubMenuComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzMenuItemComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
    }
  },
  viewQuery: function NzSubMenuComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkOverlayOrigin, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkOverlayOrigin = _t.first);
    }
  },
  hostVars: 34,
  hostBindings: function NzSubMenuComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-dropdown-menu-submenu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled", ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-dropdown-menu-submenu-open", ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-dropdown-menu-submenu-selected", ctx.isMenuInsideDropDown && ctx.isSelected)("ant-dropdown-menu-submenu-vertical", ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-dropdown-menu-submenu-horizontal", ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-dropdown-menu-submenu-inline", ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-dropdown-menu-submenu-active", ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu", !ctx.isMenuInsideDropDown)("ant-menu-submenu-disabled", !ctx.isMenuInsideDropDown && ctx.nzDisabled)("ant-menu-submenu-open", !ctx.isMenuInsideDropDown && ctx.nzOpen)("ant-menu-submenu-selected", !ctx.isMenuInsideDropDown && ctx.isSelected)("ant-menu-submenu-vertical", !ctx.isMenuInsideDropDown && ctx.mode === "vertical")("ant-menu-submenu-horizontal", !ctx.isMenuInsideDropDown && ctx.mode === "horizontal")("ant-menu-submenu-inline", !ctx.isMenuInsideDropDown && ctx.mode === "inline")("ant-menu-submenu-active", !ctx.isMenuInsideDropDown && ctx.isActive)("ant-menu-submenu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzMenuClassName: "nzMenuClassName",
    nzPaddingLeft: "nzPaddingLeft",
    nzTitle: "nzTitle",
    nzIcon: "nzIcon",
    nzOpen: "nzOpen",
    nzDisabled: "nzDisabled",
    nzPlacement: "nzPlacement"
  },
  outputs: {
    nzOpenChange: "nzOpenChange"
  },
  exportAs: ["nzSubmenu"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzSubmenuService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c5,
  ngContentSelectors: _c7,
  decls: 7,
  vars: 8,
  consts: [["origin", "cdkOverlayOrigin"], ["subMenuTemplate", ""], ["nz-submenu-title", "", "cdkOverlayOrigin", "", 3, "subMenuMouseState", "toggleSubMenu", "nzIcon", "nzTitle", "mode", "nzDisabled", "isMenuInsideDropDown", "paddingLeft"], ["nz-submenu-inline-child", "", 3, "mode", "nzOpen", "nzNoAnimation", "menuClass", "templateOutlet"], ["cdkConnectedOverlay", "", 3, "positionChange", "cdkConnectedOverlayPositions", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOpen", "cdkConnectedOverlayTransformOriginOn"], ["nz-submenu-none-inline-child", "", 3, "subMenuMouseState", "theme", "mode", "nzOpen", "position", "nzDisabled", "isMenuInsideDropDown", "templateOutlet", "menuClass", "nzNoAnimation"]],
  template: function NzSubMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275projectionDef(_c6);
      \u0275\u0275elementStart(0, "div", 2, 0);
      \u0275\u0275listener("subMenuMouseState", function NzSubMenuComponent_Template_div_subMenuMouseState_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setMouseEnterState($event));
      })("toggleSubMenu", function NzSubMenuComponent_Template_div_toggleSubMenu_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleSubMenu());
      });
      \u0275\u0275template(2, NzSubMenuComponent_Conditional_2_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, NzSubMenuComponent_Conditional_3_Template, 1, 6, "div", 3)(4, NzSubMenuComponent_Conditional_4_Template, 1, 5)(5, NzSubMenuComponent_ng_template_5_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275property("nzIcon", ctx.nzIcon)("nzTitle", ctx.nzTitle)("mode", ctx.mode)("nzDisabled", ctx.nzDisabled)("isMenuInsideDropDown", ctx.isMenuInsideDropDown)("paddingLeft", ctx.nzPaddingLeft || ctx.inlinePaddingLeft);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, !ctx.nzTitle ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(3, ctx.mode === "inline" ? 3 : 4);
    }
  },
  dependencies: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule, CdkConnectedOverlay, CdkOverlayOrigin],
  encapsulation: 2,
  changeDetection: 0
});
var NzSubMenuComponent = _NzSubMenuComponent;
__decorate([InputBoolean()], NzSubMenuComponent.prototype, "nzOpen", void 0);
__decorate([InputBoolean()], NzSubMenuComponent.prototype, "nzDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSubMenuComponent, [{
    type: Component,
    args: [{
      selector: "[nz-submenu]",
      exportAs: "nzSubmenu",
      providers: [NzSubmenuService],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: `
    <div
      nz-submenu-title
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzIcon]="nzIcon"
      [nzTitle]="nzTitle"
      [mode]="mode"
      [nzDisabled]="nzDisabled"
      [isMenuInsideDropDown]="isMenuInsideDropDown"
      [paddingLeft]="nzPaddingLeft || inlinePaddingLeft"
      (subMenuMouseState)="setMouseEnterState($event)"
      (toggleSubMenu)="toggleSubMenu()"
    >
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    @if (mode === 'inline') {
      <div
        nz-submenu-inline-child
        [mode]="mode"
        [nzOpen]="nzOpen"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [menuClass]="nzMenuClassName"
        [templateOutlet]="subMenuTemplate"
      ></div>
    } @else {
      <ng-template
        cdkConnectedOverlay
        (positionChange)="onPositionChange($event)"
        [cdkConnectedOverlayPositions]="overlayPositions"
        [cdkConnectedOverlayOrigin]="origin"
        [cdkConnectedOverlayWidth]="triggerWidth!"
        [cdkConnectedOverlayOpen]="nzOpen"
        [cdkConnectedOverlayTransformOriginOn]="'.ant-menu-submenu'"
      >
        <div
          nz-submenu-none-inline-child
          [theme]="theme"
          [mode]="mode"
          [nzOpen]="nzOpen"
          [position]="position"
          [nzDisabled]="nzDisabled"
          [isMenuInsideDropDown]="isMenuInsideDropDown"
          [templateOutlet]="subMenuTemplate"
          [menuClass]="nzMenuClassName"
          [@.disabled]="!!noAnimation?.nzNoAnimation"
          [nzNoAnimation]="noAnimation?.nzNoAnimation"
          (subMenuMouseState)="setMouseEnterState($event)"
        ></div>
      </ng-template>
    }

    <ng-template #subMenuTemplate>
      <ng-content />
    </ng-template>
  `,
      host: {
        "[class.ant-dropdown-menu-submenu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-submenu-disabled]": `isMenuInsideDropDown && nzDisabled`,
        "[class.ant-dropdown-menu-submenu-open]": `isMenuInsideDropDown && nzOpen`,
        "[class.ant-dropdown-menu-submenu-selected]": `isMenuInsideDropDown && isSelected`,
        "[class.ant-dropdown-menu-submenu-vertical]": `isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-dropdown-menu-submenu-horizontal]": `isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-dropdown-menu-submenu-inline]": `isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-dropdown-menu-submenu-active]": `isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-submenu-disabled]": `!isMenuInsideDropDown && nzDisabled`,
        "[class.ant-menu-submenu-open]": `!isMenuInsideDropDown && nzOpen`,
        "[class.ant-menu-submenu-selected]": `!isMenuInsideDropDown && isSelected`,
        "[class.ant-menu-submenu-vertical]": `!isMenuInsideDropDown && mode === 'vertical'`,
        "[class.ant-menu-submenu-horizontal]": `!isMenuInsideDropDown && mode === 'horizontal'`,
        "[class.ant-menu-submenu-inline]": `!isMenuInsideDropDown && mode === 'inline'`,
        "[class.ant-menu-submenu-active]": `!isMenuInsideDropDown && isActive`,
        "[class.ant-menu-submenu-rtl]": `dir === 'rtl'`
      },
      imports: [NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzNoAnimationDirective, NzSubmenuNoneInlineChildComponent, OverlayModule],
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzSubmenuService
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], {
    nzMenuClassName: [{
      type: Input
    }],
    nzPaddingLeft: [{
      type: Input
    }],
    nzTitle: [{
      type: Input
    }],
    nzIcon: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzOpenChange: [{
      type: Output
    }],
    cdkOverlayOrigin: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [forwardRef(() => NzSubMenuComponent), {
        descendants: true
      }]
    }],
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }]
  });
})();
function MenuServiceFactory() {
  const serviceInsideDropDown = inject(MenuService, {
    skipSelf: true,
    optional: true
  });
  const serviceOutsideDropDown = inject(NzMenuServiceLocalToken);
  return serviceInsideDropDown ?? serviceOutsideDropDown;
}
function MenuDropDownTokenFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    skipSelf: true,
    optional: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var _NzMenuDirective = class _NzMenuDirective {
  setInlineCollapsed(inlineCollapsed) {
    this.nzInlineCollapsed = inlineCollapsed;
    this.inlineCollapsed$.next(inlineCollapsed);
  }
  updateInlineCollapse() {
    if (this.listOfNzMenuItemDirective) {
      if (this.nzInlineCollapsed) {
        this.listOfOpenedNzSubMenuComponent = this.listOfNzSubMenuComponent.filter((submenu) => submenu.nzOpen);
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      } else {
        this.listOfOpenedNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(true));
        this.listOfOpenedNzSubMenuComponent = [];
      }
    }
  }
  constructor(nzMenuService, isMenuInsideDropDown, cdr, directionality) {
    this.nzMenuService = nzMenuService;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    this.cdr = cdr;
    this.directionality = directionality;
    this.nzInlineIndent = 24;
    this.nzTheme = "light";
    this.nzMode = "vertical";
    this.nzInlineCollapsed = false;
    this.nzSelectable = !this.isMenuInsideDropDown;
    this.nzClick = new EventEmitter();
    this.actualMode = "vertical";
    this.dir = "ltr";
    this.inlineCollapsed$ = new BehaviorSubject(this.nzInlineCollapsed);
    this.mode$ = new BehaviorSubject(this.nzMode);
    this.destroy$ = new Subject();
    this.listOfOpenedNzSubMenuComponent = [];
  }
  ngOnInit() {
    combineLatest([this.inlineCollapsed$, this.mode$]).pipe(takeUntil(this.destroy$)).subscribe(([inlineCollapsed, mode]) => {
      this.actualMode = inlineCollapsed ? "vertical" : mode;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
    this.nzMenuService.descendantMenuItemClick$.pipe(takeUntil(this.destroy$)).subscribe((menu) => {
      this.nzClick.emit(menu);
      if (this.nzSelectable && !menu.nzMatchRouter) {
        this.listOfNzMenuItemDirective.forEach((item) => item.setSelectedState(item === menu));
      }
    });
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.nzMenuService.setMode(this.actualMode);
      this.cdr.markForCheck();
    });
  }
  ngAfterContentInit() {
    this.inlineCollapsed$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateInlineCollapse();
      this.cdr.markForCheck();
    });
  }
  ngOnChanges(changes) {
    const {
      nzInlineCollapsed,
      nzInlineIndent,
      nzTheme,
      nzMode
    } = changes;
    if (nzInlineCollapsed) {
      this.inlineCollapsed$.next(this.nzInlineCollapsed);
    }
    if (nzInlineIndent) {
      this.nzMenuService.setInlineIndent(this.nzInlineIndent);
    }
    if (nzTheme) {
      this.nzMenuService.setTheme(this.nzTheme);
    }
    if (nzMode) {
      this.mode$.next(this.nzMode);
      if (!changes.nzMode.isFirstChange() && this.listOfNzSubMenuComponent) {
        this.listOfNzSubMenuComponent.forEach((submenu) => submenu.setOpenStateWithoutDebounce(false));
      }
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzMenuDirective.\u0275fac = function NzMenuDirective_Factory(t) {
  return new (t || _NzMenuDirective)(\u0275\u0275directiveInject(MenuService), \u0275\u0275directiveInject(NzIsMenuInsideDropDownToken), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality, 8));
};
_NzMenuDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzMenuDirective,
  selectors: [["", "nz-menu", ""]],
  contentQueries: function NzMenuDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzMenuItemComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzSubMenuComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzMenuItemDirective = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSubMenuComponent = _t);
    }
  },
  hostVars: 34,
  hostBindings: function NzMenuDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-dropdown-menu", ctx.isMenuInsideDropDown)("ant-dropdown-menu-root", ctx.isMenuInsideDropDown)("ant-dropdown-menu-light", ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-dropdown-menu-dark", ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-dropdown-menu-vertical", ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-dropdown-menu-horizontal", ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-dropdown-menu-inline", ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-dropdown-menu-inline-collapsed", ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu", !ctx.isMenuInsideDropDown)("ant-menu-root", !ctx.isMenuInsideDropDown)("ant-menu-light", !ctx.isMenuInsideDropDown && ctx.nzTheme === "light")("ant-menu-dark", !ctx.isMenuInsideDropDown && ctx.nzTheme === "dark")("ant-menu-vertical", !ctx.isMenuInsideDropDown && ctx.actualMode === "vertical")("ant-menu-horizontal", !ctx.isMenuInsideDropDown && ctx.actualMode === "horizontal")("ant-menu-inline", !ctx.isMenuInsideDropDown && ctx.actualMode === "inline")("ant-menu-inline-collapsed", !ctx.isMenuInsideDropDown && ctx.nzInlineCollapsed)("ant-menu-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzInlineIndent: "nzInlineIndent",
    nzTheme: "nzTheme",
    nzMode: "nzMode",
    nzInlineCollapsed: "nzInlineCollapsed",
    nzSelectable: "nzSelectable"
  },
  outputs: {
    nzClick: "nzClick"
  },
  exportAs: ["nzMenu"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    {
      provide: NzMenuServiceLocalToken,
      useClass: MenuService
    },
    /** use the top level service **/
    {
      provide: MenuService,
      useFactory: MenuServiceFactory
    },
    /** check if menu inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useFactory: MenuDropDownTokenFactory
    }
  ]), \u0275\u0275NgOnChangesFeature]
});
var NzMenuDirective = _NzMenuDirective;
__decorate([InputBoolean()], NzMenuDirective.prototype, "nzInlineCollapsed", void 0);
__decorate([InputBoolean()], NzMenuDirective.prototype, "nzSelectable", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu]",
      exportAs: "nzMenu",
      providers: [
        {
          provide: NzMenuServiceLocalToken,
          useClass: MenuService
        },
        /** use the top level service **/
        {
          provide: MenuService,
          useFactory: MenuServiceFactory
        },
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuDropDownTokenFactory
        }
      ],
      host: {
        "[class.ant-dropdown-menu]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-root]": `isMenuInsideDropDown`,
        "[class.ant-dropdown-menu-light]": `isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-dropdown-menu-dark]": `isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-dropdown-menu-vertical]": `isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-dropdown-menu-horizontal]": `isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-dropdown-menu-inline]": `isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-dropdown-menu-inline-collapsed]": `isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu]": `!isMenuInsideDropDown`,
        "[class.ant-menu-root]": `!isMenuInsideDropDown`,
        "[class.ant-menu-light]": `!isMenuInsideDropDown && nzTheme === 'light'`,
        "[class.ant-menu-dark]": `!isMenuInsideDropDown && nzTheme === 'dark'`,
        "[class.ant-menu-vertical]": `!isMenuInsideDropDown && actualMode === 'vertical'`,
        "[class.ant-menu-horizontal]": `!isMenuInsideDropDown && actualMode === 'horizontal'`,
        "[class.ant-menu-inline]": `!isMenuInsideDropDown && actualMode === 'inline'`,
        "[class.ant-menu-inline-collapsed]": `!isMenuInsideDropDown && nzInlineCollapsed`,
        "[class.ant-menu-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: MenuService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzMenuItemDirective: [{
      type: ContentChildren,
      args: [NzMenuItemComponent, {
        descendants: true
      }]
    }],
    listOfNzSubMenuComponent: [{
      type: ContentChildren,
      args: [NzSubMenuComponent, {
        descendants: true
      }]
    }],
    nzInlineIndent: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzInlineCollapsed: [{
      type: Input
    }],
    nzSelectable: [{
      type: Input
    }],
    nzClick: [{
      type: Output
    }]
  });
})();
function MenuGroupFactory() {
  const isMenuInsideDropDownToken = inject(NzIsMenuInsideDropDownToken, {
    optional: true,
    skipSelf: true
  });
  return isMenuInsideDropDownToken ?? false;
}
var _NzMenuGroupComponent = class _NzMenuGroupComponent {
  constructor(elementRef, renderer, isMenuInsideDropDown) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.isMenuInsideDropDown = isMenuInsideDropDown;
    const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group" : "ant-menu-item-group";
    this.renderer.addClass(elementRef.nativeElement, className);
  }
  ngAfterViewInit() {
    const ulElement = this.titleElement.nativeElement.nextElementSibling;
    if (ulElement) {
      const className = this.isMenuInsideDropDown ? "ant-dropdown-menu-item-group-list" : "ant-menu-item-group-list";
      this.renderer.addClass(ulElement, className);
    }
  }
};
_NzMenuGroupComponent.\u0275fac = function NzMenuGroupComponent_Factory(t) {
  return new (t || _NzMenuGroupComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NzIsMenuInsideDropDownToken));
};
_NzMenuGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzMenuGroupComponent,
  selectors: [["", "nz-menu-group", ""]],
  viewQuery: function NzMenuGroupComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleElement = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle"
  },
  exportAs: ["nzMenuGroup"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([
    /** check if menu inside dropdown-menu component **/
    {
      provide: NzIsMenuInsideDropDownToken,
      useFactory: MenuGroupFactory
    }
  ]), \u0275\u0275StandaloneFeature],
  attrs: _c9,
  ngContentSelectors: _c11,
  decls: 5,
  vars: 6,
  consts: [["titleElement", ""], [4, "nzStringTemplateOutlet"]],
  template: function NzMenuGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c10);
      \u0275\u0275elementStart(0, "div", null, 0);
      \u0275\u0275template(2, NzMenuGroupComponent_ng_container_2_Template, 2, 1, "ng-container", 1)(3, NzMenuGroupComponent_Conditional_3_Template, 1, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275projection(4);
    }
    if (rf & 2) {
      \u0275\u0275classProp("ant-menu-item-group-title", !ctx.isMenuInsideDropDown)("ant-dropdown-menu-item-group-title", ctx.isMenuInsideDropDown);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzStringTemplateOutlet", ctx.nzTitle);
      \u0275\u0275advance();
      \u0275\u0275conditional(3, !ctx.nzTitle ? 3 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzMenuGroupComponent = _NzMenuGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuGroupComponent, [{
    type: Component,
    args: [{
      selector: "[nz-menu-group]",
      exportAs: "nzMenuGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        /** check if menu inside dropdown-menu component **/
        {
          provide: NzIsMenuInsideDropDownToken,
          useFactory: MenuGroupFactory
        }
      ],
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <div
      [class.ant-menu-item-group-title]="!isMenuInsideDropDown"
      [class.ant-dropdown-menu-item-group-title]="isMenuInsideDropDown"
      #titleElement
    >
      <ng-container *nzStringTemplateOutlet="nzTitle">{{ nzTitle }}</ng-container>
      @if (!nzTitle) {
        <ng-content select="[title]" />
      }
    </div>
    <ng-content></ng-content>
  `,
      preserveWhitespaces: false,
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [NzIsMenuInsideDropDownToken]
    }]
  }], {
    nzTitle: [{
      type: Input
    }],
    titleElement: [{
      type: ViewChild,
      args: ["titleElement"]
    }]
  });
})();
var _NzMenuDividerDirective = class _NzMenuDividerDirective {
  constructor(elementRef) {
    this.elementRef = elementRef;
  }
};
_NzMenuDividerDirective.\u0275fac = function NzMenuDividerDirective_Factory(t) {
  return new (t || _NzMenuDividerDirective)(\u0275\u0275directiveInject(ElementRef));
};
_NzMenuDividerDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzMenuDividerDirective,
  selectors: [["", "nz-menu-divider", ""]],
  hostAttrs: [1, "ant-dropdown-menu-item-divider"],
  exportAs: ["nzMenuDivider"],
  standalone: true
});
var NzMenuDividerDirective = _NzMenuDividerDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuDividerDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-menu-divider]",
      exportAs: "nzMenuDivider",
      host: {
        class: "ant-dropdown-menu-item-divider"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }], null);
})();
var _NzMenuModule = class _NzMenuModule {
};
_NzMenuModule.\u0275fac = function NzMenuModule_Factory(t) {
  return new (t || _NzMenuModule)();
};
_NzMenuModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzMenuModule
});
_NzMenuModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzSubMenuComponent, NzMenuGroupComponent, NzSubMenuTitleComponent]
});
var NzMenuModule = _NzMenuModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMenuModule, [{
    type: NgModule,
    args: [{
      imports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent, NzSubMenuTitleComponent, NzSubmenuInlineChildComponent, NzSubmenuNoneInlineChildComponent],
      exports: [NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent, NzMenuDividerDirective, NzMenuGroupComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-layout.mjs
var _c02 = ["*"];
var _c12 = ["nz-sider-trigger", ""];
function NzSiderTriggerComponent_Conditional_0_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSiderTriggerComponent_Conditional_0_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultZeroTrigger_r2 = \u0275\u0275reference(5);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzZeroTrigger || defaultZeroTrigger_r2);
  }
}
function NzSiderTriggerComponent_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzSiderTriggerComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSiderTriggerComponent_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultTrigger_r3 = \u0275\u0275reference(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzTrigger || defaultTrigger_r3);
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzType", ctx_r0.nzCollapsed ? "left" : "right");
  }
}
function NzSiderTriggerComponent_ng_template_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzType", ctx_r0.nzCollapsed ? "right" : "left");
  }
}
function NzSiderTriggerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSiderTriggerComponent_ng_template_2_Conditional_0_Template, 1, 1, "span", 3)(1, NzSiderTriggerComponent_ng_template_2_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.nzReverseArrow ? 0 : 1);
  }
}
function NzSiderTriggerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4);
  }
}
function NzSiderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function NzSiderComponent_Conditional_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setCollapsed(!ctx_r1.nzCollapsed));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matchBreakPoint", ctx_r1.matchBreakPoint)("nzCollapsedWidth", ctx_r1.nzCollapsedWidth)("nzCollapsed", ctx_r1.nzCollapsed)("nzBreakpoint", ctx_r1.nzBreakpoint)("nzReverseArrow", ctx_r1.nzReverseArrow)("nzTrigger", ctx_r1.nzTrigger)("nzZeroTrigger", ctx_r1.nzZeroTrigger)("siderWidth", ctx_r1.widthSetting);
  }
}
var _NzContentComponent = class _NzContentComponent {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-content");
  }
};
_NzContentComponent.\u0275fac = function NzContentComponent_Factory(t) {
  return new (t || _NzContentComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_NzContentComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzContentComponent,
  selectors: [["nz-content"]],
  exportAs: ["nzContent"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzContentComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzContentComponent = _NzContentComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzContentComponent, [{
    type: Component,
    args: [{
      selector: "nz-content",
      exportAs: "nzContent",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var _NzFooterComponent = class _NzFooterComponent {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-footer");
  }
};
_NzFooterComponent.\u0275fac = function NzFooterComponent_Factory(t) {
  return new (t || _NzFooterComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_NzFooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFooterComponent,
  selectors: [["nz-footer"]],
  exportAs: ["nzFooter"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFooterComponent = _NzFooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFooterComponent, [{
    type: Component,
    args: [{
      selector: "nz-footer",
      exportAs: "nzFooter",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var _NzHeaderComponent = class _NzHeaderComponent {
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.renderer.addClass(this.elementRef.nativeElement, "ant-layout-header");
  }
};
_NzHeaderComponent.\u0275fac = function NzHeaderComponent_Factory(t) {
  return new (t || _NzHeaderComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_NzHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzHeaderComponent,
  selectors: [["nz-header"]],
  exportAs: ["nzHeader"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzHeaderComponent = _NzHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzHeaderComponent, [{
    type: Component,
    args: [{
      selector: "nz-header",
      exportAs: "nzHeader",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], null);
})();
var _NzSiderTriggerComponent = class _NzSiderTriggerComponent {
  constructor() {
    this.nzCollapsed = false;
    this.nzReverseArrow = false;
    this.nzZeroTrigger = null;
    this.nzTrigger = void 0;
    this.matchBreakPoint = false;
    this.nzCollapsedWidth = null;
    this.siderWidth = null;
    this.nzBreakpoint = null;
    this.isZeroTrigger = false;
    this.isNormalTrigger = false;
  }
  updateTriggerType() {
    this.isZeroTrigger = this.nzCollapsedWidth === 0 && (this.nzBreakpoint && this.matchBreakPoint || !this.nzBreakpoint);
    this.isNormalTrigger = this.nzCollapsedWidth !== 0;
  }
  ngOnInit() {
    this.updateTriggerType();
  }
  ngOnChanges() {
    this.updateTriggerType();
  }
};
_NzSiderTriggerComponent.\u0275fac = function NzSiderTriggerComponent_Factory(t) {
  return new (t || _NzSiderTriggerComponent)();
};
_NzSiderTriggerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSiderTriggerComponent,
  selectors: [["", "nz-sider-trigger", ""]],
  hostVars: 10,
  hostBindings: function NzSiderTriggerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("width", ctx.isNormalTrigger ? ctx.siderWidth : null);
      \u0275\u0275classProp("ant-layout-sider-trigger", ctx.isNormalTrigger)("ant-layout-sider-zero-width-trigger", ctx.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right", ctx.isZeroTrigger && ctx.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left", ctx.isZeroTrigger && !ctx.nzReverseArrow);
    }
  },
  inputs: {
    nzCollapsed: "nzCollapsed",
    nzReverseArrow: "nzReverseArrow",
    nzZeroTrigger: "nzZeroTrigger",
    nzTrigger: "nzTrigger",
    matchBreakPoint: "matchBreakPoint",
    nzCollapsedWidth: "nzCollapsedWidth",
    siderWidth: "siderWidth",
    nzBreakpoint: "nzBreakpoint"
  },
  exportAs: ["nzSiderTrigger"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c12,
  decls: 6,
  vars: 2,
  consts: [["defaultTrigger", ""], ["defaultZeroTrigger", ""], [3, "ngTemplateOutlet"], ["nz-icon", "", 3, "nzType"], ["nz-icon", "", "nzType", "bars"]],
  template: function NzSiderTriggerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSiderTriggerComponent_Conditional_0_Template, 1, 1, null, 2)(1, NzSiderTriggerComponent_Conditional_1_Template, 1, 1, null, 2)(2, NzSiderTriggerComponent_ng_template_2_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NzSiderTriggerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.isZeroTrigger ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(1, ctx.isNormalTrigger ? 1 : -1);
    }
  },
  dependencies: [NgTemplateOutlet, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSiderTriggerComponent = _NzSiderTriggerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderTriggerComponent, [{
    type: Component,
    args: [{
      selector: "[nz-sider-trigger]",
      exportAs: "nzSiderTrigger",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (isZeroTrigger) {
      <ng-template [ngTemplateOutlet]="nzZeroTrigger || defaultZeroTrigger" />
    }

    @if (isNormalTrigger) {
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger" />
    }
    <ng-template #defaultTrigger>
      @if (nzReverseArrow) {
        <span nz-icon [nzType]="nzCollapsed ? 'left' : 'right'"></span>
      } @else {
        <span nz-icon [nzType]="nzCollapsed ? 'right' : 'left'"></span>
      }
    </ng-template>
    <ng-template #defaultZeroTrigger>
      <span nz-icon nzType="bars"></span>
    </ng-template>
  `,
      host: {
        "[class.ant-layout-sider-trigger]": "isNormalTrigger",
        "[style.width]": "isNormalTrigger ? siderWidth : null",
        "[class.ant-layout-sider-zero-width-trigger]": "isZeroTrigger",
        "[class.ant-layout-sider-zero-width-trigger-right]": "isZeroTrigger && nzReverseArrow",
        "[class.ant-layout-sider-zero-width-trigger-left]": "isZeroTrigger && !nzReverseArrow"
      },
      imports: [NgTemplateOutlet, NzIconModule],
      standalone: true
    }]
  }], null, {
    nzCollapsed: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    matchBreakPoint: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    siderWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }]
  });
})();
var _NzSiderComponent = class _NzSiderComponent {
  updateStyleMap() {
    this.widthSetting = this.nzCollapsed ? `${this.nzCollapsedWidth}px` : toCssPixel(this.nzWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
    this.cdr.markForCheck();
  }
  updateMenuInlineCollapsed() {
    if (this.nzMenuDirective && this.nzMenuDirective.nzMode === "inline" && this.nzCollapsedWidth !== 0) {
      this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed);
    }
  }
  setCollapsed(collapsed) {
    if (collapsed !== this.nzCollapsed) {
      this.nzCollapsed = collapsed;
      this.nzCollapsedChange.emit(collapsed);
      this.updateMenuInlineCollapsed();
      this.updateStyleMap();
      this.cdr.markForCheck();
    }
  }
  constructor(platform, cdr, breakpointService) {
    this.platform = platform;
    this.cdr = cdr;
    this.breakpointService = breakpointService;
    this.destroy$ = new Subject();
    this.nzMenuDirective = null;
    this.nzCollapsedChange = new EventEmitter();
    this.nzWidth = 200;
    this.nzTheme = "dark";
    this.nzCollapsedWidth = 80;
    this.nzBreakpoint = null;
    this.nzZeroTrigger = null;
    this.nzTrigger = void 0;
    this.nzReverseArrow = false;
    this.nzCollapsible = false;
    this.nzCollapsed = false;
    this.matchBreakPoint = false;
    this.flexSetting = null;
    this.widthSetting = null;
  }
  ngOnInit() {
    this.updateStyleMap();
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(siderResponsiveMap, true).pipe(takeUntil(this.destroy$)).subscribe((map2) => {
        const breakpoint = this.nzBreakpoint;
        if (breakpoint) {
          inNextTick().subscribe(() => {
            this.matchBreakPoint = !map2[breakpoint];
            this.setCollapsed(this.matchBreakPoint);
            this.cdr.markForCheck();
          });
        }
      });
    }
  }
  ngOnChanges(changes) {
    const {
      nzCollapsed,
      nzCollapsedWidth,
      nzWidth
    } = changes;
    if (nzCollapsed || nzCollapsedWidth || nzWidth) {
      this.updateStyleMap();
    }
    if (nzCollapsed) {
      this.updateMenuInlineCollapsed();
    }
  }
  ngAfterContentInit() {
    this.updateMenuInlineCollapsed();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzSiderComponent.\u0275fac = function NzSiderComponent_Factory(t) {
  return new (t || _NzSiderComponent)(\u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzBreakpointService));
};
_NzSiderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSiderComponent,
  selectors: [["nz-sider"]],
  contentQueries: function NzSiderComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzMenuDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzMenuDirective = _t.first);
    }
  },
  hostAttrs: [1, "ant-layout-sider"],
  hostVars: 18,
  hostBindings: function NzSiderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("flex", ctx.flexSetting)("max-width", ctx.widthSetting)("min-width", ctx.widthSetting)("width", ctx.widthSetting);
      \u0275\u0275classProp("ant-layout-sider-zero-width", ctx.nzCollapsed && ctx.nzCollapsedWidth === 0)("ant-layout-sider-light", ctx.nzTheme === "light")("ant-layout-sider-dark", ctx.nzTheme === "dark")("ant-layout-sider-collapsed", ctx.nzCollapsed)("ant-layout-sider-has-trigger", ctx.nzCollapsible && ctx.nzTrigger !== null);
    }
  },
  inputs: {
    nzWidth: "nzWidth",
    nzTheme: "nzTheme",
    nzCollapsedWidth: "nzCollapsedWidth",
    nzBreakpoint: "nzBreakpoint",
    nzZeroTrigger: "nzZeroTrigger",
    nzTrigger: "nzTrigger",
    nzReverseArrow: "nzReverseArrow",
    nzCollapsible: "nzCollapsible",
    nzCollapsed: "nzCollapsed"
  },
  outputs: {
    nzCollapsedChange: "nzCollapsedChange"
  },
  exportAs: ["nzSider"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 3,
  vars: 1,
  consts: [[1, "ant-layout-sider-children"], ["nz-sider-trigger", "", 3, "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"], ["nz-sider-trigger", "", 3, "click", "matchBreakPoint", "nzCollapsedWidth", "nzCollapsed", "nzBreakpoint", "nzReverseArrow", "nzTrigger", "nzZeroTrigger", "siderWidth"]],
  template: function NzSiderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275projection(1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, NzSiderComponent_Conditional_2_Template, 1, 8, "div", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.nzCollapsible && ctx.nzTrigger !== null ? 2 : -1);
    }
  },
  dependencies: [NzSiderTriggerComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzSiderComponent = _NzSiderComponent;
__decorate([InputBoolean()], NzSiderComponent.prototype, "nzReverseArrow", void 0);
__decorate([InputBoolean()], NzSiderComponent.prototype, "nzCollapsible", void 0);
__decorate([InputBoolean()], NzSiderComponent.prototype, "nzCollapsed", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSiderComponent, [{
    type: Component,
    args: [{
      selector: "nz-sider",
      exportAs: "nzSider",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-layout-sider-children">
      <ng-content></ng-content>
    </div>
    @if (nzCollapsible && nzTrigger !== null) {
      <div
        nz-sider-trigger
        [matchBreakPoint]="matchBreakPoint"
        [nzCollapsedWidth]="nzCollapsedWidth"
        [nzCollapsed]="nzCollapsed"
        [nzBreakpoint]="nzBreakpoint"
        [nzReverseArrow]="nzReverseArrow"
        [nzTrigger]="nzTrigger"
        [nzZeroTrigger]="nzZeroTrigger"
        [siderWidth]="widthSetting"
        (click)="setCollapsed(!nzCollapsed)"
      ></div>
    }
  `,
      host: {
        class: "ant-layout-sider",
        "[class.ant-layout-sider-zero-width]": `nzCollapsed && nzCollapsedWidth === 0`,
        "[class.ant-layout-sider-light]": `nzTheme === 'light'`,
        "[class.ant-layout-sider-dark]": `nzTheme === 'dark'`,
        "[class.ant-layout-sider-collapsed]": `nzCollapsed`,
        "[class.ant-layout-sider-has-trigger]": `nzCollapsible && nzTrigger !== null`,
        "[style.flex]": "flexSetting",
        "[style.maxWidth]": "widthSetting",
        "[style.minWidth]": "widthSetting",
        "[style.width]": "widthSetting"
      },
      imports: [NzSiderTriggerComponent],
      standalone: true
    }]
  }], () => [{
    type: Platform
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzBreakpointService
  }], {
    nzMenuDirective: [{
      type: ContentChild,
      args: [NzMenuDirective]
    }],
    nzCollapsedChange: [{
      type: Output
    }],
    nzWidth: [{
      type: Input
    }],
    nzTheme: [{
      type: Input
    }],
    nzCollapsedWidth: [{
      type: Input
    }],
    nzBreakpoint: [{
      type: Input
    }],
    nzZeroTrigger: [{
      type: Input
    }],
    nzTrigger: [{
      type: Input
    }],
    nzReverseArrow: [{
      type: Input
    }],
    nzCollapsible: [{
      type: Input
    }],
    nzCollapsed: [{
      type: Input
    }]
  });
})();
var _NzLayoutComponent = class _NzLayoutComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzLayoutComponent.\u0275fac = function NzLayoutComponent_Factory(t) {
  return new (t || _NzLayoutComponent)(\u0275\u0275directiveInject(Directionality, 8));
};
_NzLayoutComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzLayoutComponent,
  selectors: [["nz-layout"]],
  contentQueries: function NzLayoutComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzSiderComponent, 4);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzSiderComponent = _t);
    }
  },
  hostAttrs: [1, "ant-layout"],
  hostVars: 4,
  hostBindings: function NzLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-layout-rtl", ctx.dir === "rtl")("ant-layout-has-sider", ctx.listOfNzSiderComponent.length > 0);
    }
  },
  exportAs: ["nzLayout"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzLayoutComponent = _NzLayoutComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutComponent, [{
    type: Component,
    args: [{
      selector: "nz-layout",
      exportAs: "nzLayout",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-layout",
        "[class.ant-layout-rtl]": `dir === 'rtl'`,
        "[class.ant-layout-has-sider]": "listOfNzSiderComponent.length > 0"
      },
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    listOfNzSiderComponent: [{
      type: ContentChildren,
      args: [NzSiderComponent]
    }]
  });
})();
var _NzLayoutModule = class _NzLayoutModule {
};
_NzLayoutModule.\u0275fac = function NzLayoutModule_Factory(t) {
  return new (t || _NzLayoutModule)();
};
_NzLayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzLayoutModule
});
_NzLayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzSiderComponent, NzSiderTriggerComponent]
});
var NzLayoutModule = _NzLayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent, NzSiderTriggerComponent],
      exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-flex.mjs
var _NzFlexDirective = class _NzFlexDirective {
  constructor() {
    this.nzVertical = false;
    this.nzJustify = "normal";
    this.nzAlign = "normal";
    this.nzGap = 0;
    this.nzWrap = "nowrap";
    this.nzFlex = "unset";
  }
  get gap() {
    switch (this.nzGap) {
      case "small":
        return "8px";
      case "middle":
        return "16px";
      case "large":
        return "24px";
      default:
        if (typeof this.nzGap === "number") {
          return `${this.nzGap}px`;
        }
        return this.nzGap;
    }
  }
};
_NzFlexDirective.\u0275fac = function NzFlexDirective_Factory(t) {
  return new (t || _NzFlexDirective)();
};
_NzFlexDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzFlexDirective,
  selectors: [["", "nz-flex", ""], ["nz-flex"]],
  hostAttrs: [1, "ant-flex"],
  hostVars: 60,
  hostBindings: function NzFlexDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("gap", ctx.gap)("flex", ctx.nzFlex);
      \u0275\u0275classProp("ant-flex-vertical", ctx.nzVertical)("ant-flex-justify-flex-start", ctx.nzJustify === "flex-start")("ant-flex-justify-center", ctx.nzJustify === "center")("ant-flex-justify-flex-end", ctx.nzJustify === "flex-end")("ant-flex-justify-space-between", ctx.nzJustify === "space-between")("ant-flex-justify-space-around", ctx.nzJustify === "space-around")("ant-flex-justify-space-evenly", ctx.nzJustify === "space-evenly")("ant-flex-justify-start", ctx.nzJustify === "start")("ant-flex-justify-end", ctx.nzJustify === "end")("ant-flex-justify-right", ctx.nzJustify === "right")("ant-flex-justify-left", ctx.nzJustify === "left")("ant-flex-justify-stretch", ctx.nzJustify === "stretch")("ant-flex-justify-normal", ctx.nzJustify === "normal")("ant-flex-align-flex-start", ctx.nzAlign === "flex-start")("ant-flex-align-center", ctx.nzAlign === "center")("ant-flex-align-flex-end", ctx.nzAlign === "flex-end")("ant-flex-align-space-between", ctx.nzAlign === "space-between")("ant-flex-align-space-around", ctx.nzAlign === "space-around")("ant-flex-align-space-evenly", ctx.nzAlign === "space-evenly")("ant-flex-align-start", ctx.nzAlign === "start")("ant-flex-align-end", ctx.nzAlign === "end")("ant-flex-align-right", ctx.nzAlign === "right")("ant-flex-align-left", ctx.nzAlign === "left")("ant-flex-align-stretch", ctx.nzAlign === "stretch")("ant-flex-align-normal", ctx.nzAlign === "normal")("ant-flex-wrap-wrap", ctx.nzWrap === "wrap")("ant-flex-wrap-wrap-reverse", ctx.nzWrap === "wrap-reverse")("ant-flex-wrap-nowrap", ctx.nzWrap === "nowrap");
    }
  },
  inputs: {
    nzVertical: "nzVertical",
    nzJustify: "nzJustify",
    nzAlign: "nzAlign",
    nzGap: "nzGap",
    nzWrap: "nzWrap",
    nzFlex: "nzFlex"
  },
  exportAs: ["nzFlex"],
  standalone: true
});
var NzFlexDirective = _NzFlexDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFlexDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-flex],nz-flex",
      exportAs: "nzFlex",
      standalone: true,
      host: {
        class: "ant-flex",
        "[class.ant-flex-vertical]": `nzVertical`,
        "[class.ant-flex-justify-flex-start]": `nzJustify === 'flex-start'`,
        "[class.ant-flex-justify-center]": `nzJustify === 'center'`,
        "[class.ant-flex-justify-flex-end]": `nzJustify === 'flex-end'`,
        "[class.ant-flex-justify-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-flex-justify-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-flex-justify-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-flex-justify-start]": `nzJustify === 'start'`,
        "[class.ant-flex-justify-end]": `nzJustify === 'end'`,
        "[class.ant-flex-justify-right]": `nzJustify === 'right'`,
        "[class.ant-flex-justify-left]": `nzJustify === 'left'`,
        "[class.ant-flex-justify-stretch]": `nzJustify === 'stretch'`,
        "[class.ant-flex-justify-normal]": `nzJustify === 'normal'`,
        "[class.ant-flex-align-flex-start]": `nzAlign === 'flex-start'`,
        "[class.ant-flex-align-center]": `nzAlign === 'center'`,
        "[class.ant-flex-align-flex-end]": `nzAlign === 'flex-end'`,
        "[class.ant-flex-align-space-between]": `nzAlign === 'space-between'`,
        "[class.ant-flex-align-space-around]": `nzAlign === 'space-around'`,
        "[class.ant-flex-align-space-evenly]": `nzAlign === 'space-evenly'`,
        "[class.ant-flex-align-start]": `nzAlign === 'start'`,
        "[class.ant-flex-align-end]": `nzAlign === 'end'`,
        "[class.ant-flex-align-right]": `nzAlign === 'right'`,
        "[class.ant-flex-align-left]": `nzAlign === 'left'`,
        "[class.ant-flex-align-stretch]": `nzAlign === 'stretch'`,
        "[class.ant-flex-align-normal]": `nzAlign === 'normal'`,
        "[class.ant-flex-wrap-wrap]": `nzWrap === 'wrap'`,
        "[class.ant-flex-wrap-wrap-reverse]": `nzWrap === 'wrap-reverse'`,
        "[class.ant-flex-wrap-nowrap]": `nzWrap === 'nowrap'`,
        "[style.gap]": `gap`,
        "[style.flex]": `nzFlex`
      }
    }]
  }], null, {
    nzVertical: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzAlign: [{
      type: Input
    }],
    nzGap: [{
      type: Input
    }],
    nzWrap: [{
      type: Input
    }],
    nzFlex: [{
      type: Input
    }]
  });
})();
var _NzFlexModule = class _NzFlexModule {
};
_NzFlexModule.\u0275fac = function NzFlexModule_Factory(t) {
  return new (t || _NzFlexModule)();
};
_NzFlexModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzFlexModule
});
_NzFlexModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzFlexModule = _NzFlexModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFlexModule, [{
    type: NgModule,
    args: [{
      imports: [NzFlexDirective],
      exports: [NzFlexDirective]
    }]
  }], null, null);
})();

export {
  NzIsMenuInsideDropDownToken,
  MenuService,
  NzMenuItemComponent,
  NzMenuDirective,
  NzMenuModule,
  NzContentComponent,
  NzFooterComponent,
  NzHeaderComponent,
  NzSiderComponent,
  NzLayoutComponent,
  NzLayoutModule,
  NzFlexDirective,
  NzFlexModule
};
//# sourceMappingURL=chunk-UHV536D3.js.map
