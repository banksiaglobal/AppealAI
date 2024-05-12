import {
  FocusMonitor,
  NzFormItemFeedbackIconComponent,
  NzFormNoStatusService,
  NzFormPatchModule,
  NzFormStatusService,
  NzTooltipDirective
} from "./chunk-M73E4B3E.js";
import {
  AbstractControl,
  BACKSPACE,
  COMPOSITION_BUFFER_MODE,
  CdkConnectedOverlay,
  CdkFixedSizeVirtualScroll,
  CdkOverlayOrigin,
  CdkPortalOutlet,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
  ComponentPortal,
  DOWN_ARROW,
  DefaultValueAccessor,
  ENTER,
  ESCAPE,
  FormControlDirective,
  FormControlName,
  FormsModule,
  MediaMatcher,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  NzBreakpointService,
  NzConnectedOverlayDirective,
  NzDestroyService,
  NzI18nService,
  NzNoAnimationDirective,
  NzOverlayModule,
  NzSingletonService,
  Overlay,
  OverlayModule,
  POSITION_MAP,
  PortalModule,
  SPACE,
  TAB,
  TemplatePortal,
  UP_ARROW,
  cancelRequestAnimationFrame,
  collapseMotion,
  getPlacementName,
  gridResponsiveMap,
  helpMotion,
  moveUpMotion,
  reqAnimFrame,
  slideMotion
} from "./chunk-VEWB337I.js";
import {
  Directionality,
  HttpClient,
  InputBoolean,
  InputNumber,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  NzOutletModule,
  NzStringTemplateOutletDirective,
  Platform,
  WithConfig,
  coerceElement,
  getStatusClassNames,
  isNotNil,
  toBoolean,
  toCssPixel
} from "./chunk-6H6XYIWG.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet,
  isPlatformBrowser
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
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  ReplaySubject,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __decorate,
  __spreadValues,
  catchError,
  combineLatest,
  debounce,
  distinctUntilChanged,
  filter,
  forwardRef,
  fromEvent,
  inject,
  map,
  merge,
  of,
  setClassMetadata,
  shareReplay,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  timer,
  withLatestFrom,
  ɵɵInheritDefinitionFeature,
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-M5MRYH5D.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-message.mjs
function NzMessageComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function NzMessageComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 11);
  }
}
function NzMessageComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
}
function NzMessageComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 13);
  }
}
function NzMessageComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 14);
  }
}
function NzMessageComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.instance.content, \u0275\u0275sanitizeHtml);
  }
}
function NzMessageContainerComponent_nz_message_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-message", 2);
    \u0275\u0275listener("destroyed", function NzMessageContainerComponent_nz_message_1_Template_nz_message_destroyed_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove($event.id, $event.userAction));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const instance_r3 = ctx.$implicit;
    \u0275\u0275property("instance", instance_r3);
  }
}
var globalCounter = 0;
var NzMNService = class {
  constructor(nzSingletonService, overlay, injector) {
    this.nzSingletonService = nzSingletonService;
    this.overlay = overlay;
    this.injector = injector;
  }
  remove(id) {
    if (this.container) {
      if (id) {
        this.container.remove(id);
      } else {
        this.container.removeAll();
      }
    }
  }
  getInstanceId() {
    return `${this.componentPrefix}-${globalCounter++}`;
  }
  withContainer(ctor) {
    let containerInstance = this.nzSingletonService.getSingletonWithKey(this.componentPrefix);
    if (containerInstance) {
      return containerInstance;
    }
    const overlayRef = this.overlay.create({
      hasBackdrop: false,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      positionStrategy: this.overlay.position().global()
    });
    const componentPortal = new ComponentPortal(ctor, null, this.injector);
    const componentRef = overlayRef.attach(componentPortal);
    const overlayWrapper = overlayRef.hostElement;
    overlayWrapper.style.zIndex = "1010";
    if (!containerInstance) {
      this.container = containerInstance = componentRef.instance;
      this.nzSingletonService.registerSingletonWithKey(this.componentPrefix, containerInstance);
      this.container.afterAllInstancesRemoved.subscribe(() => {
        this.container = void 0;
        this.nzSingletonService.unregisterSingletonWithKey(this.componentPrefix);
        overlayRef.dispose();
      });
    }
    return containerInstance;
  }
};
var _NzMNContainerComponent = class _NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    this.cdr = cdr;
    this.nzConfigService = nzConfigService;
    this.instances = [];
    this._afterAllInstancesRemoved = new Subject();
    this.afterAllInstancesRemoved = this._afterAllInstancesRemoved.asObservable();
    this.destroy$ = new Subject();
    this.updateConfig();
  }
  ngOnInit() {
    this.subscribeConfigChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  create(data) {
    const instance = this.onCreate(data);
    if (this.instances.length >= this.config.nzMaxStack) {
      this.instances = this.instances.slice(1);
    }
    this.instances = [...this.instances, instance];
    this.readyInstances();
    return instance;
  }
  remove(id, userAction = false) {
    this.instances.map((instance, index) => ({
      index,
      instance
    })).filter(({
      instance
    }) => instance.messageId === id).forEach(({
      index,
      instance
    }) => {
      this.instances.splice(index, 1);
      this.instances = [...this.instances];
      this.onRemove(instance, userAction);
      this.readyInstances();
    });
    if (!this.instances.length) {
      this.onAllInstancesRemoved();
    }
  }
  removeAll() {
    this.instances.forEach((i) => this.onRemove(i, false));
    this.instances = [];
    this.readyInstances();
    this.onAllInstancesRemoved();
  }
  onCreate(instance) {
    instance.options = this.mergeOptions(instance.options);
    instance.onClose = new Subject();
    return instance;
  }
  onRemove(instance, userAction) {
    instance.onClose.next(userAction);
    instance.onClose.complete();
  }
  onAllInstancesRemoved() {
    this._afterAllInstancesRemoved.next();
    this._afterAllInstancesRemoved.complete();
  }
  readyInstances() {
    this.cdr.detectChanges();
  }
  mergeOptions(options) {
    const {
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    } = this.config;
    return __spreadValues({
      nzDuration,
      nzAnimate,
      nzPauseOnHover
    }, options);
  }
};
_NzMNContainerComponent.\u0275fac = function NzMNContainerComponent_Factory(t) {
  return new (t || _NzMNContainerComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzConfigService));
};
_NzMNContainerComponent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzMNContainerComponent
});
var NzMNContainerComponent = _NzMNContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNContainerComponent, [{
    type: Directive
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var _NzMNComponent = class _NzMNComponent {
  constructor(cdr) {
    this.cdr = cdr;
    this.destroyed = new EventEmitter();
    this.animationStateChanged = new Subject();
    this.userAction = false;
  }
  ngOnInit() {
    this.options = this.instance.options;
    if (this.options.nzAnimate) {
      this.instance.state = "enter";
      this.animationStateChanged.pipe(filter((event) => event.phaseName === "done" && event.toState === "leave"), take(1)).subscribe(() => {
        clearTimeout(this.closeTimer);
        this.destroyed.next({
          id: this.instance.messageId,
          userAction: this.userAction
        });
      });
    }
    this.autoClose = this.options.nzDuration > 0;
    if (this.autoClose) {
      this.initErase();
      this.startEraseTimeout();
    }
  }
  ngOnDestroy() {
    if (this.autoClose) {
      this.clearEraseTimeout();
    }
    this.animationStateChanged.complete();
  }
  onEnter() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.clearEraseTimeout();
      this.updateTTL();
    }
  }
  onLeave() {
    if (this.autoClose && this.options.nzPauseOnHover) {
      this.startEraseTimeout();
    }
  }
  destroy(userAction = false) {
    this.userAction = userAction;
    if (this.options.nzAnimate) {
      this.instance.state = "leave";
      this.cdr.detectChanges();
      this.closeTimer = setTimeout(() => {
        this.closeTimer = void 0;
        this.destroyed.next({
          id: this.instance.messageId,
          userAction
        });
      }, 200);
    } else {
      this.destroyed.next({
        id: this.instance.messageId,
        userAction
      });
    }
  }
  initErase() {
    this.eraseTTL = this.options.nzDuration;
    this.eraseTimingStart = Date.now();
  }
  updateTTL() {
    if (this.autoClose) {
      this.eraseTTL -= Date.now() - this.eraseTimingStart;
    }
  }
  startEraseTimeout() {
    if (this.eraseTTL > 0) {
      this.clearEraseTimeout();
      this.eraseTimer = setTimeout(() => this.destroy(), this.eraseTTL);
      this.eraseTimingStart = Date.now();
    } else {
      this.destroy();
    }
  }
  clearEraseTimeout() {
    if (this.eraseTimer !== null) {
      clearTimeout(this.eraseTimer);
      this.eraseTimer = void 0;
    }
  }
};
_NzMNComponent.\u0275fac = function NzMNComponent_Factory(t) {
  return new (t || _NzMNComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzMNComponent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzMNComponent
});
var NzMNComponent = _NzMNComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMNComponent, [{
    type: Directive
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var _NzMessageComponent = class _NzMessageComponent extends NzMNComponent {
  constructor(cdr) {
    super(cdr);
    this.destroyed = new EventEmitter();
  }
};
_NzMessageComponent.\u0275fac = function NzMessageComponent_Factory(t) {
  return new (t || _NzMessageComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzMessageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzMessageComponent,
  selectors: [["nz-message"]],
  inputs: {
    instance: "instance"
  },
  outputs: {
    destroyed: "destroyed"
  },
  exportAs: ["nzMessage"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 10,
  vars: 9,
  consts: [[1, "ant-message-notice", 3, "mouseenter", "mouseleave"], [1, "ant-message-notice-content"], [1, "ant-message-custom-content", 3, "ngClass"], [3, "ngSwitch"], ["nz-icon", "", "nzType", "check-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "info-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "exclamation-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "close-circle", 4, "ngSwitchCase"], ["nz-icon", "", "nzType", "loading", 4, "ngSwitchCase"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "check-circle"], ["nz-icon", "", "nzType", "info-circle"], ["nz-icon", "", "nzType", "exclamation-circle"], ["nz-icon", "", "nzType", "close-circle"], ["nz-icon", "", "nzType", "loading"], [3, "innerHTML"]],
  template: function NzMessageComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("@moveUpMotion.done", function NzMessageComponent_Template_div_animation_moveUpMotion_done_0_listener($event) {
        return ctx.animationStateChanged.next($event);
      })("mouseenter", function NzMessageComponent_Template_div_mouseenter_0_listener() {
        return ctx.onEnter();
      })("mouseleave", function NzMessageComponent_Template_div_mouseleave_0_listener() {
        return ctx.onLeave();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
      \u0275\u0275elementContainerStart(3, 3);
      \u0275\u0275template(4, NzMessageComponent_span_4_Template, 1, 0, "span", 4)(5, NzMessageComponent_span_5_Template, 1, 0, "span", 5)(6, NzMessageComponent_span_6_Template, 1, 0, "span", 6)(7, NzMessageComponent_span_7_Template, 1, 0, "span", 7)(8, NzMessageComponent_span_8_Template, 1, 0, "span", 8);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(9, NzMessageComponent_ng_container_9_Template, 2, 1, "ng-container", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("@moveUpMotion", ctx.instance.state);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngClass", "ant-message-" + ctx.instance.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitch", ctx.instance.type);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "success");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "info");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "warning");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "error");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "loading");
      \u0275\u0275advance();
      \u0275\u0275property("nzStringTemplateOutlet", ctx.instance.content);
    }
  },
  dependencies: [NgClass, NgSwitch, NgSwitchCase, NzIconModule, NzIconDirective, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [moveUpMotion]
  },
  changeDetection: 0
});
var NzMessageComponent = _NzMessageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-message",
      exportAs: "nzMessage",
      preserveWhitespaces: false,
      animations: [moveUpMotion],
      template: `
    <div
      class="ant-message-notice"
      [@moveUpMotion]="instance.state"
      (@moveUpMotion.done)="animationStateChanged.next($event)"
      (mouseenter)="onEnter()"
      (mouseleave)="onLeave()"
    >
      <div class="ant-message-notice-content">
        <div class="ant-message-custom-content" [ngClass]="'ant-message-' + instance.type">
          <ng-container [ngSwitch]="instance.type">
            <span *ngSwitchCase="'success'" nz-icon nzType="check-circle"></span>
            <span *ngSwitchCase="'info'" nz-icon nzType="info-circle"></span>
            <span *ngSwitchCase="'warning'" nz-icon nzType="exclamation-circle"></span>
            <span *ngSwitchCase="'error'" nz-icon nzType="close-circle"></span>
            <span *ngSwitchCase="'loading'" nz-icon nzType="loading"></span>
          </ng-container>
          <ng-container *nzStringTemplateOutlet="instance.content">
            <span [innerHTML]="instance.content"></span>
          </ng-container>
        </div>
      </div>
    </div>
  `,
      imports: [NgClass, NgSwitch, NgSwitchCase, NzIconModule, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    instance: [{
      type: Input
    }],
    destroyed: [{
      type: Output
    }]
  });
})();
var NZ_CONFIG_COMPONENT_NAME = "message";
var NZ_MESSAGE_DEFAULT_CONFIG = {
  nzAnimate: true,
  nzDuration: 3e3,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzTop: 24,
  nzDirection: "ltr"
};
var _NzMessageContainerComponent = class _NzMessageContainerComponent extends NzMNContainerComponent {
  constructor(cdr, nzConfigService) {
    super(cdr, nzConfigService);
    this.dir = "ltr";
    const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
    this.dir = config?.nzDirection || "ltr";
  }
  subscribeConfigChange() {
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.updateConfig();
      const config = this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME);
      if (config) {
        const {
          nzDirection
        } = config;
        this.dir = nzDirection || this.dir;
      }
    });
  }
  updateConfig() {
    this.config = __spreadValues(__spreadValues(__spreadValues({}, NZ_MESSAGE_DEFAULT_CONFIG), this.config), this.nzConfigService.getConfigForComponent(NZ_CONFIG_COMPONENT_NAME));
    this.top = toCssPixel(this.config.nzTop);
    this.cdr.markForCheck();
  }
};
_NzMessageContainerComponent.\u0275fac = function NzMessageContainerComponent_Factory(t) {
  return new (t || _NzMessageContainerComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzConfigService));
};
_NzMessageContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzMessageContainerComponent,
  selectors: [["nz-message-container"]],
  exportAs: ["nzMessageContainer"],
  standalone: true,
  features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [[1, "ant-message"], [3, "instance", "destroyed", 4, "ngFor", "ngForOf"], [3, "destroyed", "instance"]],
  template: function NzMessageContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NzMessageContainerComponent_nz_message_1_Template, 1, 1, "nz-message", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("top", ctx.top);
      \u0275\u0275classProp("ant-message-rtl", ctx.dir === "rtl");
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.instances);
    }
  },
  dependencies: [NzMessageComponent, NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
var NzMessageContainerComponent = _NzMessageContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageContainerComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-message-container",
      exportAs: "nzMessageContainer",
      preserveWhitespaces: false,
      template: `
    <div class="ant-message" [class.ant-message-rtl]="dir === 'rtl'" [style.top]="top">
      <nz-message
        *ngFor="let instance of instances"
        [instance]="instance"
        (destroyed)="remove($event.id, $event.userAction)"
      ></nz-message>
    </div>
  `,
      imports: [NzMessageComponent, NgForOf],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzConfigService
  }], null);
})();
var _NzMessageModule = class _NzMessageModule {
};
_NzMessageModule.\u0275fac = function NzMessageModule_Factory(t) {
  return new (t || _NzMessageModule)();
};
_NzMessageModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzMessageModule
});
_NzMessageModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzMessageContainerComponent, NzMessageComponent]
});
var NzMessageModule = _NzMessageModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageModule, [{
    type: NgModule,
    args: [{
      imports: [NzMessageContainerComponent, NzMessageComponent]
    }]
  }], null, null);
})();
var _NzMessageService = class _NzMessageService extends NzMNService {
  constructor(nzSingletonService, overlay, injector) {
    super(nzSingletonService, overlay, injector);
    this.componentPrefix = "message-";
  }
  success(content, options) {
    return this.createInstance({
      type: "success",
      content
    }, options);
  }
  error(content, options) {
    return this.createInstance({
      type: "error",
      content
    }, options);
  }
  info(content, options) {
    return this.createInstance({
      type: "info",
      content
    }, options);
  }
  warning(content, options) {
    return this.createInstance({
      type: "warning",
      content
    }, options);
  }
  loading(content, options) {
    return this.createInstance({
      type: "loading",
      content
    }, options);
  }
  create(type, content, options) {
    return this.createInstance({
      type,
      content
    }, options);
  }
  createInstance(message, options) {
    this.container = this.withContainer(NzMessageContainerComponent);
    return this.container.create(__spreadValues(__spreadValues({}, message), {
      createdAt: /* @__PURE__ */ new Date(),
      messageId: this.getInstanceId(),
      options
    }));
  }
};
_NzMessageService.\u0275fac = function NzMessageService_Factory(t) {
  return new (t || _NzMessageService)(\u0275\u0275inject(NzSingletonService), \u0275\u0275inject(Overlay), \u0275\u0275inject(Injector));
};
_NzMessageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NzMessageService,
  factory: _NzMessageService.\u0275fac,
  providedIn: "root"
});
var NzMessageService = _NzMessageService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzMessageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzSingletonService
  }, {
    type: Overlay
  }, {
    type: Injector
  }], null);
})();

// src/app/environments/environment.ts
var environment = {
  production: true,
  apiUrl: "http://localhost:52773/api"
};

// src/app/service/company.service.ts
var _CompanyService = class _CompanyService {
  constructor(http) {
    this.http = http;
  }
  getCompanyList() {
    return this.http.get(`${environment.apiUrl}/company/`).pipe(map((response) => response.companies), catchError(() => of()));
  }
  getCurrentCompanyInfo(companyId) {
    return this.http.get(`${environment.apiUrl}/company/${companyId} `).pipe(map((response) => response), catchError(() => of()));
  }
  addNewCompany(companyName) {
    const body = {
      name: companyName
    };
    return this.http.post(`${environment.apiUrl}/company/create`, body);
  }
  deleteCurrentCompany(companyId) {
    return this.http.delete(`${environment.apiUrl}/company/${companyId}`);
  }
};
_CompanyService.\u0275fac = function CompanyService_Factory(t) {
  return new (t || _CompanyService)(\u0275\u0275inject(HttpClient));
};
_CompanyService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CompanyService, factory: _CompanyService.\u0275fac, providedIn: "root" });
var CompanyService = _CompanyService;

// src/app/service/package.service.ts
var _PackageService = class _PackageService {
  constructor(http) {
    this.http = http;
  }
  getListPackagesForCurrentCompany(companyId) {
    return this.http.get(`${environment.apiUrl}/package/all/${companyId}`).pipe(map((response) => response.packages), catchError(() => of()));
  }
  addNewPackageForCompany(companyId, name, description) {
    const body = {
      companyId,
      name,
      description
    };
    return this.http.post(`${environment.apiUrl}/package/create`, body);
  }
  deleteCurrentPackage(packageId) {
    return this.http.delete(`${environment.apiUrl}/package/${packageId}`);
  }
};
_PackageService.\u0275fac = function PackageService_Factory(t) {
  return new (t || _PackageService)(\u0275\u0275inject(HttpClient));
};
_PackageService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PackageService, factory: _PackageService.\u0275fac, providedIn: "root" });
var PackageService = _PackageService;

// src/app/service/docs.service.ts
var _DocsService = class _DocsService {
  constructor(http) {
    this.http = http;
    this.intervalMin = 1e4;
  }
  addDocumentForPackage(formData) {
    return this.http.post(`${environment.apiUrl}/document/upload`, formData);
  }
  getListDocsForCurrentPackage(packageId) {
    return timer(0, this.intervalMin).pipe(switchMap(() => this.http.get(`${environment.apiUrl}/document/all/${packageId}`).pipe(take(3), map((response) => response.documents), tap(() => console.log("request updated")), shareReplay())));
  }
  /*download file from server */
  downloadDocument(fileName) {
    return this.http.get(`${environment.apiUrl}/document/${fileName}`, {
      observe: "response",
      responseType: "blob"
    });
  }
  deleteDocumentForCurrentPackage(fileName) {
    return this.http.delete(`${environment.apiUrl}/document/${fileName}`);
  }
};
_DocsService.\u0275fac = function DocsService_Factory(t) {
  return new (t || _DocsService)(\u0275\u0275inject(HttpClient));
};
_DocsService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocsService, factory: _DocsService.\u0275fac, providedIn: "root" });
var DocsService = _DocsService;

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-empty.mjs
function NzEmptyComponent_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.nzNotFoundImage, \u0275\u0275sanitizeUrl)("alt", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : "empty");
  }
}
function NzEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmptyComponent_Conditional_1_ng_container_0_Template, 2, 2, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
  }
}
function NzEmptyComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty-simple");
  }
}
function NzEmptyComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty-default");
  }
}
function NzEmptyComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmptyComponent_Conditional_2_Conditional_0_Template, 1, 0, "nz-empty-simple")(1, NzEmptyComponent_Conditional_2_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.nzNotFoundImage === "simple" ? 0 : 1);
  }
}
function NzEmptyComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isContentString ? ctx_r0.nzNotFoundContent : ctx_r0.locale["description"], " ");
  }
}
function NzEmptyComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275template(1, NzEmptyComponent_Conditional_3_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundContent);
  }
}
function NzEmptyComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.nzNotFoundFooter, " ");
  }
}
function NzEmptyComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, NzEmptyComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzNotFoundFooter);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.content, " ");
  }
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template(rf, ctx) {
}
function NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Conditional_1_ng_template_0_Template, 0, 0, "ng-template", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("cdkPortalOutlet", ctx_r0.contentPortal);
  }
}
function NzEmbedEmptyComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Conditional_0_Template, 1, 1)(1, NzEmbedEmptyComponent_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.contentType === "string" ? 0 : 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 1);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty", 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-empty");
  }
}
function NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_0_Template, 1, 0)(1, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_1_Template, 1, 0)(2, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Case_2_Template, 1, 0);
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, (tmp_2_0 = ctx_r0.size) === "normal" ? 0 : tmp_2_0 === "small" ? 1 : 2);
  }
}
function NzEmbedEmptyComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_1_Conditional_0_Template, 3, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(0, ctx_r0.specificContent !== null ? 0 : -1);
  }
}
var NZ_EMPTY_COMPONENT_NAME = new InjectionToken("nz-empty-component-name");
var _NzEmptyDefaultComponent = class _NzEmptyDefaultComponent {
};
_NzEmptyDefaultComponent.\u0275fac = function NzEmptyDefaultComponent_Factory(t) {
  return new (t || _NzEmptyDefaultComponent)();
};
_NzEmptyDefaultComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzEmptyDefaultComponent,
  selectors: [["nz-empty-default"]],
  exportAs: ["nzEmptyDefault"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 12,
  vars: 0,
  consts: [["width", "184", "height", "152", "viewBox", "0 0 184 152", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-default"], ["fill", "none", "fill-rule", "evenodd"], ["transform", "translate(24 31.67)"], ["cx", "67.797", "cy", "106.89", "rx", "67.797", "ry", "12.668", 1, "ant-empty-img-default-ellipse"], ["d", "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z", 1, "ant-empty-img-default-path-1"], ["d", "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z", "transform", "translate(13.56)", 1, "ant-empty-img-default-path-2"], ["d", "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z", 1, "ant-empty-img-default-path-3"], ["d", "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z", 1, "ant-empty-img-default-path-4"], ["d", "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z", 1, "ant-empty-img-default-path-5"], ["transform", "translate(149.65 15.383)", 1, "ant-empty-img-default-g"], ["cx", "20.654", "cy", "3.167", "rx", "2.849", "ry", "2.815"], ["d", "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],
  template: function NzEmptyDefaultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0)(1, "g", 1)(2, "g", 2);
      \u0275\u0275element(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "path", 8);
      \u0275\u0275elementStart(9, "g", 9);
      \u0275\u0275element(10, "ellipse", 10)(11, "path", 11);
      \u0275\u0275elementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyDefaultComponent = _NzEmptyDefaultComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyDefaultComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-default",
      exportAs: "nzEmptyDefault",
      standalone: true,
      template: `
    <svg
      class="ant-empty-img-default"
      width="184"
      height="152"
      viewBox="0 0 184 152"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(24 31.67)">
          <ellipse class="ant-empty-img-default-ellipse" cx="67.797" cy="106.89" rx="67.797" ry="12.668" />
          <path
            class="ant-empty-img-default-path-1"
            d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
          />
          <path
            class="ant-empty-img-default-path-2"
            d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
            transform="translate(13.56)"
          />
          <path
            class="ant-empty-img-default-path-3"
            d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
          />
          <path
            class="ant-empty-img-default-path-4"
            d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
          />
        </g>
        <path
          class="ant-empty-img-default-path-5"
          d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
        />
        <g class="ant-empty-img-default-g" transform="translate(149.65 15.383)">
          <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
          <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
        </g>
      </g>
    </svg>
  `
    }]
  }], null, null);
})();
var _NzEmptySimpleComponent = class _NzEmptySimpleComponent {
};
_NzEmptySimpleComponent.\u0275fac = function NzEmptySimpleComponent_Factory(t) {
  return new (t || _NzEmptySimpleComponent)();
};
_NzEmptySimpleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzEmptySimpleComponent,
  selectors: [["nz-empty-simple"]],
  exportAs: ["nzEmptySimple"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 6,
  vars: 0,
  consts: [["width", "64", "height", "41", "viewBox", "0 0 64 41", "xmlns", "http://www.w3.org/2000/svg", 1, "ant-empty-img-simple"], ["transform", "translate(0 1)", "fill", "none", "fill-rule", "evenodd"], ["cx", "32", "cy", "33", "rx", "32", "ry", "7", 1, "ant-empty-img-simple-ellipse"], ["fill-rule", "nonzero", 1, "ant-empty-img-simple-g"], ["d", "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"], ["d", "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z", 1, "ant-empty-img-simple-path"]],
  template: function NzEmptySimpleComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(0, "svg", 0)(1, "g", 1);
      \u0275\u0275element(2, "ellipse", 2);
      \u0275\u0275elementStart(3, "g", 3);
      \u0275\u0275element(4, "path", 4)(5, "path", 5);
      \u0275\u0275elementEnd()()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptySimpleComponent = _NzEmptySimpleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptySimpleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty-simple",
      exportAs: "nzEmptySimple",
      template: `
    <svg class="ant-empty-img-simple" width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
        <ellipse class="ant-empty-img-simple-ellipse" cx="32" cy="33" rx="32" ry="7" />
        <g class="ant-empty-img-simple-g" fill-rule="nonzero">
          <path
            d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
          />
          <path
            d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
            class="ant-empty-img-simple-path"
          />
        </g>
      </g>
    </svg>
  `,
      standalone: true
    }]
  }], null, null);
})();
var NzEmptyDefaultImages = ["default", "simple"];
var _NzEmptyComponent = class _NzEmptyComponent {
  constructor(i18n, cdr) {
    this.i18n = i18n;
    this.cdr = cdr;
    this.nzNotFoundImage = "default";
    this.isContentString = false;
    this.isImageBuildIn = true;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      nzNotFoundContent,
      nzNotFoundImage
    } = changes;
    if (nzNotFoundContent) {
      const content = nzNotFoundContent.currentValue;
      this.isContentString = typeof content === "string";
    }
    if (nzNotFoundImage) {
      const image = nzNotFoundImage.currentValue || "default";
      this.isImageBuildIn = NzEmptyDefaultImages.findIndex((i) => i === image) > -1;
    }
  }
  ngOnInit() {
    this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.locale = this.i18n.getLocaleData("Empty");
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzEmptyComponent.\u0275fac = function NzEmptyComponent_Factory(t) {
  return new (t || _NzEmptyComponent)(\u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzEmptyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzEmptyComponent,
  selectors: [["nz-empty"]],
  hostAttrs: [1, "ant-empty"],
  inputs: {
    nzNotFoundImage: "nzNotFoundImage",
    nzNotFoundContent: "nzNotFoundContent",
    nzNotFoundFooter: "nzNotFoundFooter"
  },
  exportAs: ["nzEmpty"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 5,
  vars: 3,
  consts: [[1, "ant-empty-image"], [1, "ant-empty-description"], [1, "ant-empty-footer"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"]],
  template: function NzEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, NzEmptyComponent_Conditional_1_Template, 1, 1, "ng-container")(2, NzEmptyComponent_Conditional_2_Template, 2, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(3, NzEmptyComponent_Conditional_3_Template, 2, 1, "p", 1)(4, NzEmptyComponent_Conditional_4_Template, 2, 1, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(1, !ctx.isImageBuildIn ? 1 : 2);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(3, ctx.nzNotFoundContent !== null ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(4, ctx.nzNotFoundFooter ? 4 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzEmptyDefaultComponent, NzEmptySimpleComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmptyComponent = _NzEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-empty",
      exportAs: "nzEmpty",
      template: `
    <div class="ant-empty-image">
      @if (!isImageBuildIn) {
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      } @else {
        @if (nzNotFoundImage === 'simple') {
          <nz-empty-simple />
        } @else {
          <nz-empty-default />
        }
      }
    </div>
    @if (nzNotFoundContent !== null) {
      <p class="ant-empty-description">
        <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
          {{ isContentString ? nzNotFoundContent : locale['description'] }}
        </ng-container>
      </p>
    }

    @if (nzNotFoundFooter) {
      <div class="ant-empty-footer">
        <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
          {{ nzNotFoundFooter }}
        </ng-container>
      </div>
    }
  `,
      host: {
        class: "ant-empty"
      },
      imports: [NzOutletModule, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      standalone: true
    }]
  }], () => [{
    type: NzI18nService
  }, {
    type: ChangeDetectorRef
  }], {
    nzNotFoundImage: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzNotFoundFooter: [{
      type: Input
    }]
  });
})();
function getEmptySize(componentName) {
  switch (componentName) {
    case "table":
    case "list":
      return "normal";
    case "select":
    case "tree-select":
    case "cascader":
    case "transfer":
      return "small";
    default:
      return "";
  }
}
var _NzEmbedEmptyComponent = class _NzEmbedEmptyComponent {
  constructor(configService, viewContainerRef, cdr, injector) {
    this.configService = configService;
    this.viewContainerRef = viewContainerRef;
    this.cdr = cdr;
    this.injector = injector;
    this.contentType = "string";
    this.size = "";
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    if (changes.nzComponentName) {
      this.size = getEmptySize(changes.nzComponentName.currentValue);
    }
    if (changes.specificContent && !changes.specificContent.isFirstChange()) {
      this.content = changes.specificContent.currentValue;
      this.renderEmpty();
    }
  }
  ngOnInit() {
    this.subscribeDefaultEmptyContentChange();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  renderEmpty() {
    const content = this.content;
    if (typeof content === "string") {
      this.contentType = "string";
    } else if (content instanceof TemplateRef) {
      const context = {
        $implicit: this.nzComponentName
      };
      this.contentType = "template";
      this.contentPortal = new TemplatePortal(content, this.viewContainerRef, context);
    } else if (content instanceof Type) {
      const injector = Injector.create({
        parent: this.injector,
        providers: [{
          provide: NZ_EMPTY_COMPONENT_NAME,
          useValue: this.nzComponentName
        }]
      });
      this.contentType = "component";
      this.contentPortal = new ComponentPortal(content, this.viewContainerRef, injector);
    } else {
      this.contentType = "string";
      this.contentPortal = void 0;
    }
    this.cdr.detectChanges();
  }
  subscribeDefaultEmptyContentChange() {
    this.configService.getConfigChangeEventForComponent("empty").pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
      this.content = this.specificContent || this.getUserDefaultEmptyContent();
      this.renderEmpty();
    });
  }
  getUserDefaultEmptyContent() {
    return (this.configService.getConfigForComponent("empty") || {}).nzDefaultEmptyContent;
  }
};
_NzEmbedEmptyComponent.\u0275fac = function NzEmbedEmptyComponent_Factory(t) {
  return new (t || _NzEmbedEmptyComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ViewContainerRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Injector));
};
_NzEmbedEmptyComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzEmbedEmptyComponent,
  selectors: [["nz-embed-empty"]],
  inputs: {
    nzComponentName: "nzComponentName",
    specificContent: "specificContent"
  },
  exportAs: ["nzEmbedEmpty"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 1,
  consts: [[3, "cdkPortalOutlet"], ["nzNotFoundImage", "simple", 1, "ant-empty-normal"], ["nzNotFoundImage", "simple", 1, "ant-empty-small"]],
  template: function NzEmbedEmptyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzEmbedEmptyComponent_Conditional_0_Template, 2, 1)(1, NzEmbedEmptyComponent_Conditional_1_Template, 1, 1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.content ? 0 : 1);
    }
  },
  dependencies: [NzEmptyComponent, PortalModule, CdkPortalOutlet],
  encapsulation: 2,
  changeDetection: 0
});
var NzEmbedEmptyComponent = _NzEmbedEmptyComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmbedEmptyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      selector: "nz-embed-empty",
      exportAs: "nzEmbedEmpty",
      template: `
    @if (content) {
      @if (contentType === 'string') {
        {{ content }}
      } @else {
        <ng-template [cdkPortalOutlet]="contentPortal" />
      }
    } @else {
      @if (specificContent !== null) {
        @switch (size) {
          @case ('normal') {
            <nz-empty class="ant-empty-normal" nzNotFoundImage="simple" />
          }
          @case ('small') {
            <nz-empty class="ant-empty-small" nzNotFoundImage="simple" />
          }
          @default {
            <nz-empty />
          }
        }
      }
    }
  `,
      imports: [NzEmptyComponent, PortalModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ViewContainerRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Injector
  }], {
    nzComponentName: [{
      type: Input
    }],
    specificContent: [{
      type: Input
    }]
  });
})();
var _NzEmptyModule = class _NzEmptyModule {
};
_NzEmptyModule.\u0275fac = function NzEmptyModule_Factory(t) {
  return new (t || _NzEmptyModule)();
};
_NzEmptyModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzEmptyModule
});
_NzEmptyModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzEmptyComponent, NzEmbedEmptyComponent]
});
var NzEmptyModule = _NzEmptyModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzEmptyModule, [{
    type: NgModule,
    args: [{
      imports: [NzEmptyComponent, NzEmbedEmptyComponent, NzEmptyDefaultComponent, NzEmptySimpleComponent],
      exports: [NzEmptyComponent, NzEmbedEmptyComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-select.mjs
var _c0 = ["*"];
function NzOptionItemGroupComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzLabel);
  }
}
function NzOptionItemComponent_ng_template_1_ng_template_0_Template(rf, ctx) {
}
function NzOptionItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzOptionItemComponent_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function NzOptionItemComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function NzOptionItemComponent_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function NzOptionItemComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, NzOptionItemComponent_div_4_span_1_Template, 1, 0, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.icon)("ngIfElse", ctx_r0.icon);
  }
}
function NzOptionContainerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "nz-embed-empty", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("specificContent", ctx_r0.notFoundContent);
  }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-option-item-group", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzLabel", item_r2.groupLabel);
  }
}
function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-item", 10);
    \u0275\u0275listener("itemHover", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemHover_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemHover($event));
    })("itemClick", function NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template_nz_option_item_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onItemClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("icon", ctx_r0.menuItemSelectedIcon)("customContent", item_r2.nzCustomContent)("template", item_r2.template)("grouped", !!item_r2.groupLabel)("disabled", item_r2.nzDisabled || ctx_r0.isMaxLimitReached && !ctx_r0.listOfSelectedValue.includes(item_r2["nzValue"]))("showState", ctx_r0.mode === "tags" || ctx_r0.mode === "multiple")("title", item_r2.nzTitle)("label", item_r2.nzLabel)("compareWith", ctx_r0.compareWith)("activatedValue", ctx_r0.activatedValue)("listOfSelectedValue", ctx_r0.listOfSelectedValue)("value", item_r2.nzValue);
  }
}
function NzOptionContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0, 6);
    \u0275\u0275template(1, NzOptionContainerComponent_ng_template_3_nz_option_item_group_1_Template, 1, 1, "nz-option-item-group", 7)(2, NzOptionContainerComponent_ng_template_3_nz_option_item_2_Template, 1, 12, "nz-option-item", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275property("ngSwitch", item_r2.type);
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "group");
    \u0275\u0275advance();
    \u0275\u0275property("ngSwitchCase", "item");
  }
}
function NzOptionContainerComponent_ng_template_4_Template(rf, ctx) {
}
function NzOptionComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function NzSelectArrowComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.listOfValue.length, " / ", ctx_r0.nzMaxMultipleCount, "");
  }
}
function NzSelectArrowComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 5);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 9);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 10);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectArrowComponent_ng_template_2_ng_container_0_span_1_Template, 1, 0, "span", 7)(2, NzSelectArrowComponent_ng_template_2_ng_container_0_span_2_Template, 1, 0, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.search);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.search);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const suffixIcon_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("nzType", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_span_1_Template, 1, 1, "span", 11);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const suffixIcon_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", suffixIcon_r2);
  }
}
function NzSelectArrowComponent_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_ng_template_2_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.suffixIcon);
  }
}
function NzSelectArrowComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectArrowComponent_ng_template_2_ng_container_0_Template, 3, 2, "ng-container", 6)(1, NzSelectArrowComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const suffixTemplate_r3 = \u0275\u0275reference(2);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r0.showArrow && !ctx_r0.suffixIcon)("ngIfElse", suffixTemplate_r3);
  }
}
function NzSelectArrowComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.feedbackIcon);
  }
}
function NzSelectClearComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 1);
  }
}
var _c1 = (a0) => ({
  $implicit: a0
});
function NzSelectItemComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function NzSelectItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectItemComponent_ng_container_0_div_1_Template, 2, 1, "div", 3)(2, NzSelectItemComponent_ng_container_0_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const labelTemplate_r2 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.deletable)("ngIfElse", labelTemplate_r2);
  }
}
function NzSelectItemComponent_span_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
}
function NzSelectItemComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275listener("click", function NzSelectItemComponent_span_1_Template_span_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onDelete($event));
    });
    \u0275\u0275template(1, NzSelectItemComponent_span_1_span_1_Template, 1, 0, "span", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.removeIcon)("ngIfElse", ctx_r0.removeIcon);
  }
}
function NzSelectPlaceholderComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.placeholder, " ");
  }
}
var _c2 = ["inputElement"];
var _c3 = ["mirrorElement"];
function NzSelectSearchComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 4, 1);
  }
}
function NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-item", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("deletable", false)("disabled", false)("removeIcon", ctx_r1.removeIcon)("label", ctx_r1.listOfTopItem[0].nzLabel)("contentTemplateOutlet", ctx_r1.customTemplate)("contentTemplateOutletContext", ctx_r1.listOfTopItem[0]);
  }
}
function NzSelectTopControlComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "nz-select-search", 4);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_isComposingChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_ng_container_1_Template_nz_select_search_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputValueChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, NzSelectTopControlComponent_ng_container_1_nz_select_item_2_Template, 1, 6, "nz-select-item", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("showInput", ctx_r1.showSearch)("mirrorSync", false)("autofocus", ctx_r1.autofocus)("focusTrigger", ctx_r1.open);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isShowSingleLabel);
  }
}
function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-item", 9);
    \u0275\u0275listener("delete", function NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template_nz_select_item_delete_0_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onDeleteItem(item_r5.contentTemplateOutletContext));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("removeIcon", ctx_r1.removeIcon)("label", item_r5.nzLabel)("disabled", item_r5.nzDisabled || ctx_r1.disabled)("contentTemplateOutlet", item_r5.contentTemplateOutlet)("deletable", true)("contentTemplateOutletContext", item_r5.contentTemplateOutletContext);
  }
}
function NzSelectTopControlComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, NzSelectTopControlComponent_ng_container_2_nz_select_item_1_Template, 1, 6, "nz-select-item", 7);
    \u0275\u0275elementStart(2, "nz-select-search", 8);
    \u0275\u0275listener("isComposingChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_isComposingChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isComposingChange($event));
    })("valueChange", function NzSelectTopControlComponent_ng_container_2_Template_nz_select_search_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onInputValueChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.listOfSlicedItem)("ngForTrackBy", ctx_r1.trackValue);
    \u0275\u0275advance();
    \u0275\u0275property("nzId", ctx_r1.nzId)("disabled", ctx_r1.disabled)("value", ctx_r1.inputValue)("autofocus", ctx_r1.autofocus)("showInput", true)("mirrorSync", true)("focusTrigger", ctx_r1.open);
  }
}
function NzSelectTopControlComponent_nz_select_placeholder_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-select-placeholder", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("placeholder", ctx_r1.placeHolder);
  }
}
function NzSelectComponent_nz_select_arrow_2_ng_template_1_nz_form_item_feedback_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "nz-form-item-feedback-icon", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("status", ctx_r1.status);
  }
}
function NzSelectComponent_nz_select_arrow_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NzSelectComponent_nz_select_arrow_2_ng_template_1_nz_form_item_feedback_icon_0_Template, 1, 1, "nz-form-item-feedback-icon", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.hasFeedback && !!ctx_r1.status);
  }
}
function NzSelectComponent_nz_select_arrow_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-select-arrow", 6);
    \u0275\u0275template(1, NzSelectComponent_nz_select_arrow_2_ng_template_1_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feedbackIconTpl_r3 = \u0275\u0275reference(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showArrow", ctx_r1.nzShowArrow)("loading", ctx_r1.nzLoading)("search", ctx_r1.nzOpen && ctx_r1.nzShowSearch)("suffixIcon", ctx_r1.nzSuffixIcon)("feedbackIcon", feedbackIconTpl_r3)("nzMaxMultipleCount", ctx_r1.nzMaxMultipleCount)("listOfValue", ctx_r1.listOfValue)("isMaxTagCountSet", ctx_r1.isMaxTagCountSet);
  }
}
function NzSelectComponent_nz_select_clear_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-select-clear", 9);
    \u0275\u0275listener("clear", function NzSelectComponent_nz_select_clear_3_Template_nz_select_clear_clear_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClearSelection());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("clearIcon", ctx_r1.nzClearIcon);
  }
}
function NzSelectComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nz-option-container", 10);
    \u0275\u0275listener("keydown", function NzSelectComponent_ng_template_4_Template_nz_option_container_keydown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onKeyDown($event));
    })("itemClick", function NzSelectComponent_ng_template_4_Template_nz_option_container_itemClick_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onItemClick($event));
    })("scrollToBottom", function NzSelectComponent_ng_template_4_Template_nz_option_container_scrollToBottom_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nzScrollToBottom.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-select-dropdown-placement-bottomLeft", ctx_r1.dropDownPosition === "bottomLeft")("ant-select-dropdown-placement-topLeft", ctx_r1.dropDownPosition === "topLeft")("ant-select-dropdown-placement-bottomRight", ctx_r1.dropDownPosition === "bottomRight")("ant-select-dropdown-placement-topRight", ctx_r1.dropDownPosition === "topRight");
    \u0275\u0275property("ngStyle", ctx_r1.nzDropdownStyle)("itemSize", ctx_r1.nzOptionHeightPx)("maxItemLength", ctx_r1.nzOptionOverflowSize)("matchWidth", ctx_r1.nzDropdownMatchSelectWidth)("@slideMotion", "enter")("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation)("listOfContainerItem", ctx_r1.listOfContainerItem)("menuItemSelectedIcon", ctx_r1.nzMenuItemSelectedIcon)("notFoundContent", ctx_r1.nzNotFoundContent)("activatedValue", ctx_r1.activatedValue)("listOfSelectedValue", ctx_r1.listOfValue)("dropdownRender", ctx_r1.nzDropdownRender)("compareWith", ctx_r1.compareWith)("mode", ctx_r1.nzMode)("isMaxLimitReached", ctx_r1.isMaxLimitReached);
  }
}
var _NzOptionGroupComponent = class _NzOptionGroupComponent {
  constructor() {
    this.nzLabel = null;
    this.changes = new Subject();
  }
  ngOnChanges() {
    this.changes.next();
  }
};
_NzOptionGroupComponent.\u0275fac = function NzOptionGroupComponent_Factory(t) {
  return new (t || _NzOptionGroupComponent)();
};
_NzOptionGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzOptionGroupComponent,
  selectors: [["nz-option-group"]],
  inputs: {
    nzLabel: "nzLabel"
  },
  exportAs: ["nzOptionGroup"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionGroupComponent = _NzOptionGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-group",
      exportAs: "nzOptionGroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], null, {
    nzLabel: [{
      type: Input
    }]
  });
})();
var _NzOptionItemGroupComponent = class _NzOptionItemGroupComponent {
  constructor() {
    this.nzLabel = null;
  }
};
_NzOptionItemGroupComponent.\u0275fac = function NzOptionItemGroupComponent_Factory(t) {
  return new (t || _NzOptionItemGroupComponent)();
};
_NzOptionItemGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzOptionItemGroupComponent,
  selectors: [["nz-option-item-group"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-group"],
  inputs: {
    nzLabel: "nzLabel"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzOptionItemGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzOptionItemGroupComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nzStringTemplateOutlet", ctx.nzLabel);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionItemGroupComponent = _NzOptionItemGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item-group",
      template: ` <ng-container *nzStringTemplateOutlet="nzLabel">{{ nzLabel }}</ng-container> `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-select-item ant-select-item-group"
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    nzLabel: [{
      type: Input
    }]
  });
})();
var _NzOptionItemComponent = class _NzOptionItemComponent {
  constructor(elementRef, ngZone, destroy$) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.selected = false;
    this.activated = false;
    this.grouped = false;
    this.customContent = false;
    this.template = null;
    this.disabled = false;
    this.showState = false;
    this.label = null;
    this.value = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.icon = null;
    this.itemClick = new EventEmitter();
    this.itemHover = new EventEmitter();
  }
  ngOnChanges(changes) {
    const {
      value,
      activatedValue,
      listOfSelectedValue
    } = changes;
    if (value || listOfSelectedValue) {
      this.selected = this.listOfSelectedValue.some((v) => this.compareWith(v, this.value));
    }
    if (value || activatedValue) {
      this.activated = this.compareWith(this.activatedValue, this.value);
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (!this.disabled) {
          this.ngZone.run(() => this.itemClick.emit(this.value));
        }
      });
      fromEvent(this.elementRef.nativeElement, "mouseenter").pipe(takeUntil(this.destroy$)).subscribe(() => {
        if (!this.disabled) {
          this.ngZone.run(() => this.itemHover.emit(this.value));
        }
      });
    });
  }
};
_NzOptionItemComponent.\u0275fac = function NzOptionItemComponent_Factory(t) {
  return new (t || _NzOptionItemComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NzDestroyService));
};
_NzOptionItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzOptionItemComponent,
  selectors: [["nz-option-item"]],
  hostAttrs: [1, "ant-select-item", "ant-select-item-option"],
  hostVars: 9,
  hostBindings: function NzOptionItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("title", ctx.title);
      \u0275\u0275classProp("ant-select-item-option-grouped", ctx.grouped)("ant-select-item-option-selected", ctx.selected && !ctx.disabled)("ant-select-item-option-disabled", ctx.disabled)("ant-select-item-option-active", ctx.activated && !ctx.disabled);
    }
  },
  inputs: {
    grouped: "grouped",
    customContent: "customContent",
    template: "template",
    disabled: "disabled",
    showState: "showState",
    title: "title",
    label: "label",
    value: "value",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    icon: "icon",
    compareWith: "compareWith"
  },
  outputs: {
    itemClick: "itemClick",
    itemHover: "itemHover"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 5,
  vars: 3,
  consts: [["noCustomContent", ""], [1, "ant-select-item-option-content"], [3, "ngIf", "ngIfElse"], ["class", "ant-select-item-option-state", "style", "user-select: none", "unselectable", "on", 4, "ngIf"], [3, "ngTemplateOutlet"], ["unselectable", "on", 1, "ant-select-item-option-state", 2, "user-select", "none"], ["nz-icon", "", "nzType", "check", "class", "ant-select-selected-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "check", 1, "ant-select-selected-icon"]],
  template: function NzOptionItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275template(1, NzOptionItemComponent_ng_template_1_Template, 1, 1, "ng-template", 2)(2, NzOptionItemComponent_ng_template_2_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NzOptionItemComponent_div_4_Template, 2, 2, "div", 3);
    }
    if (rf & 2) {
      const noCustomContent_r2 = \u0275\u0275reference(3);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.customContent)("ngIfElse", noCustomContent_r2);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showState && ctx.selected);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionItemComponent = _NzOptionItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-item",
      template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-select-item ant-select-item-option",
        "[attr.title]": "title",
        "[class.ant-select-item-option-grouped]": "grouped",
        "[class.ant-select-item-option-selected]": "selected && !disabled",
        "[class.ant-select-item-option-disabled]": "disabled",
        "[class.ant-select-item-option-active]": "activated && !disabled"
      },
      providers: [NzDestroyService],
      imports: [NgIf, NgTemplateOutlet, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: NzDestroyService
  }], {
    grouped: [{
      type: Input
    }],
    customContent: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    showState: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    itemHover: [{
      type: Output
    }]
  });
})();
var _NzOptionContainerComponent = class _NzOptionContainerComponent {
  constructor() {
    this.notFoundContent = void 0;
    this.menuItemSelectedIcon = null;
    this.dropdownRender = null;
    this.activatedValue = null;
    this.listOfSelectedValue = [];
    this.mode = "default";
    this.matchWidth = true;
    this.itemSize = 32;
    this.maxItemLength = 8;
    this.isMaxLimitReached = false;
    this.listOfContainerItem = [];
    this.itemClick = new EventEmitter();
    this.scrollToBottom = new EventEmitter();
    this.scrolledIndex = 0;
    this.ngZone = inject(NgZone);
    this.platformId = inject(PLATFORM_ID);
  }
  onItemClick(value) {
    this.itemClick.emit(value);
  }
  onItemHover(value) {
    this.activatedValue = value;
  }
  trackValue(_index, option) {
    return option.key;
  }
  onScrolledIndexChange(index) {
    this.scrolledIndex = index;
    if (index === this.listOfContainerItem.length - this.maxItemLength - 1) {
      this.scrollToBottom.emit();
    }
  }
  scrollToActivatedValue() {
    const index = this.listOfContainerItem.findIndex((item) => this.compareWith(item.key, this.activatedValue));
    if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
      this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
    }
  }
  ngOnChanges(changes) {
    const {
      listOfContainerItem,
      activatedValue
    } = changes;
    if (listOfContainerItem || activatedValue) {
      this.scrollToActivatedValue();
    }
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => setTimeout(() => this.scrollToActivatedValue()));
    }
  }
};
_NzOptionContainerComponent.\u0275fac = function NzOptionContainerComponent_Factory(t) {
  return new (t || _NzOptionContainerComponent)();
};
_NzOptionContainerComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzOptionContainerComponent,
  selectors: [["nz-option-container"]],
  viewQuery: function NzOptionContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkVirtualScrollViewport, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkVirtualScrollViewport = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-dropdown"],
  inputs: {
    notFoundContent: "notFoundContent",
    menuItemSelectedIcon: "menuItemSelectedIcon",
    dropdownRender: "dropdownRender",
    activatedValue: "activatedValue",
    listOfSelectedValue: "listOfSelectedValue",
    compareWith: "compareWith",
    mode: "mode",
    matchWidth: "matchWidth",
    itemSize: "itemSize",
    maxItemLength: "maxItemLength",
    isMaxLimitReached: "isMaxLimitReached",
    listOfContainerItem: "listOfContainerItem"
  },
  outputs: {
    itemClick: "itemClick",
    scrollToBottom: "scrollToBottom"
  },
  exportAs: ["nzOptionContainer"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 5,
  vars: 14,
  consts: [["class", "ant-select-item-empty", 4, "ngIf"], [3, "scrolledIndexChange", "itemSize", "maxBufferPx", "minBufferPx"], ["cdkVirtualFor", "", 3, "cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplateCacheSize"], [3, "ngTemplateOutlet"], [1, "ant-select-item-empty"], ["nzComponentName", "select", 3, "specificContent"], [3, "ngSwitch"], [3, "nzLabel", 4, "ngSwitchCase"], [3, "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value", "itemHover", "itemClick", 4, "ngSwitchCase"], [3, "nzLabel"], [3, "itemHover", "itemClick", "icon", "customContent", "template", "grouped", "disabled", "showState", "title", "label", "compareWith", "activatedValue", "listOfSelectedValue", "value"]],
  template: function NzOptionContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div");
      \u0275\u0275template(1, NzOptionContainerComponent_div_1_Template, 2, 1, "div", 0);
      \u0275\u0275elementStart(2, "cdk-virtual-scroll-viewport", 1);
      \u0275\u0275listener("scrolledIndexChange", function NzOptionContainerComponent_Template_cdk_virtual_scroll_viewport_scrolledIndexChange_2_listener($event) {
        return ctx.onScrolledIndexChange($event);
      });
      \u0275\u0275template(3, NzOptionContainerComponent_ng_template_3_Template, 3, 3, "ng-template", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, NzOptionContainerComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.listOfContainerItem.length === 0);
      \u0275\u0275advance();
      \u0275\u0275styleProp("height", ctx.listOfContainerItem.length * ctx.itemSize, "px")("max-height", ctx.itemSize * ctx.maxItemLength, "px");
      \u0275\u0275classProp("full-width", !ctx.matchWidth);
      \u0275\u0275property("itemSize", ctx.itemSize)("maxBufferPx", ctx.itemSize * ctx.maxItemLength)("minBufferPx", ctx.itemSize * ctx.maxItemLength);
      \u0275\u0275advance();
      \u0275\u0275property("cdkVirtualForOf", ctx.listOfContainerItem)("cdkVirtualForTrackBy", ctx.trackValue)("cdkVirtualForTemplateCacheSize", 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngTemplateOutlet", ctx.dropdownRender);
    }
  },
  dependencies: [NzEmptyModule, NzEmbedEmptyComponent, NgIf, NgSwitch, NzOptionItemGroupComponent, NgSwitchCase, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport, NzOverlayModule],
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionContainerComponent = _NzOptionContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionContainerComponent, [{
    type: Component,
    args: [{
      selector: "nz-option-container",
      exportAs: "nzOptionContainer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      preserveWhitespaces: false,
      template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <nz-option-item-group *ngSwitchCase="'group'" [nzLabel]="item.groupLabel"></nz-option-item-group>
            <nz-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.nzCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.nzDisabled || (isMaxLimitReached && !listOfSelectedValue.includes(item['nzValue']))"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.nzTitle"
              [label]="item.nzLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.nzValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></nz-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
      host: {
        class: "ant-select-dropdown"
      },
      imports: [NzEmptyModule, NgIf, NgSwitch, NzOptionItemGroupComponent, NgSwitchCase, NzOptionItemComponent, NgTemplateOutlet, OverlayModule, NzOverlayModule],
      standalone: true
    }]
  }], null, {
    notFoundContent: [{
      type: Input
    }],
    menuItemSelectedIcon: [{
      type: Input
    }],
    dropdownRender: [{
      type: Input
    }],
    activatedValue: [{
      type: Input
    }],
    listOfSelectedValue: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    matchWidth: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    maxItemLength: [{
      type: Input
    }],
    isMaxLimitReached: [{
      type: Input
    }],
    listOfContainerItem: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    scrollToBottom: [{
      type: Output
    }],
    cdkVirtualScrollViewport: [{
      type: ViewChild,
      args: [CdkVirtualScrollViewport, {
        static: true
      }]
    }]
  });
})();
var _NzOptionComponent = class _NzOptionComponent {
  constructor(nzOptionGroupComponent, destroy$) {
    this.nzOptionGroupComponent = nzOptionGroupComponent;
    this.destroy$ = destroy$;
    this.changes = new Subject();
    this.groupLabel = null;
    this.nzLabel = null;
    this.nzValue = null;
    this.nzDisabled = false;
    this.nzHide = false;
    this.nzCustomContent = false;
  }
  ngOnInit() {
    if (this.nzOptionGroupComponent) {
      this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
        this.groupLabel = this.nzOptionGroupComponent.nzLabel;
      });
    }
  }
  ngOnChanges() {
    this.changes.next();
  }
};
_NzOptionComponent.\u0275fac = function NzOptionComponent_Factory(t) {
  return new (t || _NzOptionComponent)(\u0275\u0275directiveInject(NzOptionGroupComponent, 8), \u0275\u0275directiveInject(NzDestroyService));
};
_NzOptionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzOptionComponent,
  selectors: [["nz-option"]],
  viewQuery: function NzOptionComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(TemplateRef, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
    }
  },
  inputs: {
    nzTitle: "nzTitle",
    nzLabel: "nzLabel",
    nzValue: "nzValue",
    nzKey: "nzKey",
    nzDisabled: "nzDisabled",
    nzHide: "nzHide",
    nzCustomContent: "nzCustomContent"
  },
  exportAs: ["nzOption"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function NzOptionComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzOptionComponent_ng_template_0_Template, 1, 0, "ng-template");
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzOptionComponent = _NzOptionComponent;
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzHide", void 0);
__decorate([InputBoolean()], NzOptionComponent.prototype, "nzCustomContent", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOptionComponent, [{
    type: Component,
    args: [{
      selector: "nz-option",
      exportAs: "nzOption",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [NzDestroyService],
      template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
      standalone: true
    }]
  }], () => [{
    type: NzOptionGroupComponent,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    nzTitle: [{
      type: Input
    }],
    nzLabel: [{
      type: Input
    }],
    nzValue: [{
      type: Input
    }],
    nzKey: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzHide: [{
      type: Input
    }],
    nzCustomContent: [{
      type: Input
    }]
  });
})();
var _NzSelectArrowComponent = class _NzSelectArrowComponent {
  constructor() {
    this.listOfValue = [];
    this.loading = false;
    this.search = false;
    this.showArrow = false;
    this.isMaxTagCountSet = false;
    this.suffixIcon = null;
    this.feedbackIcon = null;
    this.nzMaxMultipleCount = Infinity;
  }
};
_NzSelectArrowComponent.\u0275fac = function NzSelectArrowComponent_Factory(t) {
  return new (t || _NzSelectArrowComponent)();
};
_NzSelectArrowComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectArrowComponent,
  selectors: [["nz-select-arrow"]],
  hostAttrs: [1, "ant-select-arrow"],
  hostVars: 2,
  hostBindings: function NzSelectArrowComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-select-arrow-loading", ctx.loading);
    }
  },
  inputs: {
    listOfValue: "listOfValue",
    loading: "loading",
    search: "search",
    showArrow: "showArrow",
    isMaxTagCountSet: "isMaxTagCountSet",
    suffixIcon: "suffixIcon",
    feedbackIcon: "feedbackIcon",
    nzMaxMultipleCount: "nzMaxMultipleCount"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 5,
  vars: 4,
  consts: [["defaultArrow", ""], ["suffixTemplate", ""], [4, "ngIf"], ["nz-icon", "", "nzType", "loading", 4, "ngIf", "ngIfElse"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", "nzType", "loading"], [4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "down", 4, "ngIf"], ["nz-icon", "", "nzType", "search", 4, "ngIf"], ["nz-icon", "", "nzType", "down"], ["nz-icon", "", "nzType", "search"], ["nz-icon", "", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 3, "nzType"]],
  template: function NzSelectArrowComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSelectArrowComponent_ng_container_0_Template, 3, 2, "ng-container", 2)(1, NzSelectArrowComponent_span_1_Template, 1, 0, "span", 3)(2, NzSelectArrowComponent_ng_template_2_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, NzSelectArrowComponent_ng_container_4_Template, 2, 1, "ng-container", 4);
    }
    if (rf & 2) {
      const defaultArrow_r4 = \u0275\u0275reference(3);
      \u0275\u0275property("ngIf", ctx.isMaxTagCountSet);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading)("ngIfElse", defaultArrow_r4);
      \u0275\u0275advance(3);
      \u0275\u0275property("nzStringTemplateOutlet", ctx.feedbackIcon);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectArrowComponent = _NzSelectArrowComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectArrowComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-arrow",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *ngIf="isMaxTagCountSet">
      <span>{{ listOfValue.length }} / {{ nzMaxMultipleCount }}</span>
    </ng-container>
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
      host: {
        class: "ant-select-arrow",
        "[class.ant-select-arrow-loading]": "loading"
      },
      imports: [NzIconModule, NgIf, NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    listOfValue: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    search: [{
      type: Input
    }],
    showArrow: [{
      type: Input
    }],
    isMaxTagCountSet: [{
      type: Input
    }],
    suffixIcon: [{
      type: Input
    }],
    feedbackIcon: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input
    }]
  });
})();
var _NzSelectClearComponent = class _NzSelectClearComponent {
  constructor() {
    this.clearIcon = null;
    this.clear = new EventEmitter();
  }
  onClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.clear.emit(e);
  }
};
_NzSelectClearComponent.\u0275fac = function NzSelectClearComponent_Factory(t) {
  return new (t || _NzSelectClearComponent)();
};
_NzSelectClearComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectClearComponent,
  selectors: [["nz-select-clear"]],
  hostAttrs: [1, "ant-select-clear"],
  hostBindings: function NzSelectClearComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function NzSelectClearComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    clearIcon: "clearIcon"
  },
  outputs: {
    clear: "clear"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 2,
  consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]],
  template: function NzSelectClearComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSelectClearComponent_span_0_Template, 1, 0, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
    }
  },
  dependencies: [NzIconModule, NzIconDirective, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectClearComponent = _NzSelectClearComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectClearComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-clear",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `,
      host: {
        class: "ant-select-clear",
        "(click)": "onClick($event)"
      },
      imports: [NzIconModule, NgIf],
      standalone: true
    }]
  }], () => [], {
    clearIcon: [{
      type: Input
    }],
    clear: [{
      type: Output
    }]
  });
})();
var _NzSelectItemComponent = class _NzSelectItemComponent {
  constructor() {
    this.disabled = false;
    this.label = null;
    this.deletable = false;
    this.removeIcon = null;
    this.contentTemplateOutletContext = null;
    this.contentTemplateOutlet = null;
    this.delete = new EventEmitter();
  }
  onDelete(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!this.disabled) {
      this.delete.next(e);
    }
  }
};
_NzSelectItemComponent.\u0275fac = function NzSelectItemComponent_Factory(t) {
  return new (t || _NzSelectItemComponent)();
};
_NzSelectItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectItemComponent,
  selectors: [["nz-select-item"]],
  hostAttrs: [1, "ant-select-selection-item"],
  hostVars: 3,
  hostBindings: function NzSelectItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("title", ctx.label);
      \u0275\u0275classProp("ant-select-selection-item-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled",
    label: "label",
    deletable: "deletable",
    removeIcon: "removeIcon",
    contentTemplateOutletContext: "contentTemplateOutletContext",
    contentTemplateOutlet: "contentTemplateOutlet"
  },
  outputs: {
    delete: "delete"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [["labelTemplate", ""], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-select-selection-item-remove", 3, "click", 4, "ngIf"], ["class", "ant-select-selection-item-content", 4, "ngIf", "ngIfElse"], [1, "ant-select-selection-item-content"], [1, "ant-select-selection-item-remove", 3, "click"], ["nz-icon", "", "nzType", "close", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close"]],
  template: function NzSelectItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSelectItemComponent_ng_container_0_Template, 4, 2, "ng-container", 1)(1, NzSelectItemComponent_span_1_Template, 2, 2, "span", 2);
    }
    if (rf & 2) {
      \u0275\u0275property("nzStringTemplateOutlet", ctx.contentTemplateOutlet)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(3, _c1, ctx.contentTemplateOutletContext));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.deletable && !ctx.disabled);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NgIf, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectItemComponent = _NzSelectItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-item",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
      host: {
        class: "ant-select-selection-item",
        "[attr.title]": "label",
        "[class.ant-select-selection-item-disabled]": "disabled"
      },
      imports: [NzOutletModule, NgIf, NzIconModule],
      standalone: true
    }]
  }], () => [], {
    disabled: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    deletable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    contentTemplateOutletContext: [{
      type: Input
    }],
    contentTemplateOutlet: [{
      type: Input
    }],
    delete: [{
      type: Output
    }]
  });
})();
var _NzSelectPlaceholderComponent = class _NzSelectPlaceholderComponent {
  constructor() {
    this.placeholder = null;
  }
};
_NzSelectPlaceholderComponent.\u0275fac = function NzSelectPlaceholderComponent_Factory(t) {
  return new (t || _NzSelectPlaceholderComponent)();
};
_NzSelectPlaceholderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectPlaceholderComponent,
  selectors: [["nz-select-placeholder"]],
  hostAttrs: [1, "ant-select-selection-placeholder"],
  inputs: {
    placeholder: "placeholder"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 1,
  vars: 1,
  consts: [[4, "nzStringTemplateOutlet"]],
  template: function NzSelectPlaceholderComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, NzSelectPlaceholderComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("nzStringTemplateOutlet", ctx.placeholder);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectPlaceholderComponent = _NzSelectPlaceholderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectPlaceholderComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-placeholder",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
      host: {
        class: "ant-select-selection-placeholder"
      },
      imports: [NzOutletModule],
      standalone: true
    }]
  }], () => [], {
    placeholder: [{
      type: Input
    }]
  });
})();
var _NzSelectSearchComponent = class _NzSelectSearchComponent {
  setCompositionState(isComposing) {
    this.isComposingChange.next(isComposing);
  }
  onValueChange(value) {
    this.value = value;
    this.valueChange.next(value);
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
  }
  clearInputValue() {
    const inputDOM = this.inputElement.nativeElement;
    inputDOM.value = "";
    this.onValueChange("");
  }
  syncMirrorWidth() {
    const mirrorDOM = this.mirrorElement.nativeElement;
    const hostDOM = this.elementRef.nativeElement;
    const inputDOM = this.inputElement.nativeElement;
    this.renderer.removeStyle(hostDOM, "width");
    this.renderer.setProperty(mirrorDOM, "textContent", `${inputDOM.value}\xA0`);
    this.renderer.setStyle(hostDOM, "width", `${mirrorDOM.scrollWidth}px`);
  }
  focus() {
    this.focusMonitor.focusVia(this.inputElement, "keyboard");
  }
  blur() {
    this.inputElement.nativeElement.blur();
  }
  constructor(elementRef, renderer, focusMonitor) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.focusMonitor = focusMonitor;
    this.nzId = null;
    this.disabled = false;
    this.mirrorSync = false;
    this.showInput = true;
    this.focusTrigger = false;
    this.value = "";
    this.autofocus = false;
    this.valueChange = new EventEmitter();
    this.isComposingChange = new EventEmitter();
  }
  ngOnChanges(changes) {
    const inputDOM = this.inputElement.nativeElement;
    const {
      focusTrigger,
      showInput
    } = changes;
    if (showInput) {
      if (this.showInput) {
        this.renderer.removeAttribute(inputDOM, "readonly");
      } else {
        this.renderer.setAttribute(inputDOM, "readonly", "readonly");
      }
    }
    if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
      inputDOM.focus();
    }
  }
  ngAfterViewInit() {
    if (this.mirrorSync) {
      this.syncMirrorWidth();
    }
    if (this.autofocus) {
      this.focus();
    }
  }
};
_NzSelectSearchComponent.\u0275fac = function NzSelectSearchComponent_Factory(t) {
  return new (t || _NzSelectSearchComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(FocusMonitor));
};
_NzSelectSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectSearchComponent,
  selectors: [["nz-select-search"]],
  viewQuery: function NzSelectSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c2, 7);
      \u0275\u0275viewQuery(_c3, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mirrorElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selection-search"],
  inputs: {
    nzId: "nzId",
    disabled: "disabled",
    mirrorSync: "mirrorSync",
    showInput: "showInput",
    focusTrigger: "focusTrigger",
    value: "value",
    autofocus: "autofocus"
  },
  outputs: {
    valueChange: "valueChange",
    isComposingChange: "isComposingChange"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: COMPOSITION_BUFFER_MODE,
    useValue: false
  }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 3,
  vars: 7,
  consts: [["inputElement", ""], ["mirrorElement", ""], ["autocomplete", "off", 1, "ant-select-selection-search-input", 3, "ngModelChange", "compositionstart", "compositionend", "ngModel", "disabled"], ["class", "ant-select-selection-search-mirror", 4, "ngIf"], [1, "ant-select-selection-search-mirror"]],
  template: function NzSelectSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "input", 2, 0);
      \u0275\u0275listener("ngModelChange", function NzSelectSearchComponent_Template_input_ngModelChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onValueChange($event));
      })("compositionstart", function NzSelectSearchComponent_Template_input_compositionstart_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setCompositionState(true));
      })("compositionend", function NzSelectSearchComponent_Template_input_compositionend_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setCompositionState(false));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, NzSelectSearchComponent_span_2_Template, 2, 0, "span", 3);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("opacity", ctx.showInput ? null : 0);
      \u0275\u0275property("ngModel", ctx.value)("disabled", ctx.disabled);
      \u0275\u0275attribute("id", ctx.nzId)("autofocus", ctx.autofocus ? "autofocus" : null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.mirrorSync);
    }
  },
  dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, NgIf],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectSearchComponent = _NzSelectSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectSearchComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-search",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <input
      #inputElement
      [attr.id]="nzId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
      host: {
        class: "ant-select-selection-search"
      },
      providers: [{
        provide: COMPOSITION_BUFFER_MODE,
        useValue: false
      }],
      imports: [FormsModule, NgIf],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: FocusMonitor
  }], {
    nzId: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mirrorSync: [{
      type: Input
    }],
    showInput: [{
      type: Input
    }],
    focusTrigger: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    isComposingChange: [{
      type: Output
    }],
    inputElement: [{
      type: ViewChild,
      args: ["inputElement", {
        static: true
      }]
    }],
    mirrorElement: [{
      type: ViewChild,
      args: ["mirrorElement", {
        static: false
      }]
    }]
  });
})();
var _NzSelectTopControlComponent = class _NzSelectTopControlComponent {
  updateTemplateVariable() {
    const isSelectedValueEmpty = this.listOfTopItem.length === 0;
    this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
  }
  isComposingChange(isComposing) {
    this.isComposing = isComposing;
    this.updateTemplateVariable();
  }
  onInputValueChange(value) {
    if (value !== this.inputValue) {
      this.inputValue = value;
      this.updateTemplateVariable();
      this.inputValueChange.emit(value);
      this.tokenSeparate(value, this.tokenSeparators);
    }
  }
  tokenSeparate(inputValue, tokenSeparators) {
    const includesSeparators = (str, separators) => {
      for (let i = 0; i < separators.length; ++i) {
        if (str.lastIndexOf(separators[i]) > 0) {
          return true;
        }
      }
      return false;
    };
    const splitBySeparators = (str, separators) => {
      const reg = new RegExp(`[${separators.join()}]`);
      const array = str.split(reg).filter((token) => token);
      return [...new Set(array)];
    };
    if (inputValue && inputValue.length && tokenSeparators.length && this.mode !== "default" && includesSeparators(inputValue, tokenSeparators)) {
      const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
      this.tokenize.next(listOfLabel);
    }
  }
  clearInputValue() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.clearInputValue();
    }
  }
  focus() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.focus();
    }
  }
  blur() {
    if (this.nzSelectSearchComponent) {
      this.nzSelectSearchComponent.blur();
    }
  }
  trackValue(_index, option) {
    return option.nzValue;
  }
  onDeleteItem(item) {
    if (!this.disabled && !item.nzDisabled) {
      this.deleteItem.next(item);
    }
  }
  constructor(elementRef, ngZone, noAnimation) {
    this.elementRef = elementRef;
    this.ngZone = ngZone;
    this.noAnimation = noAnimation;
    this.nzId = null;
    this.showSearch = false;
    this.placeHolder = null;
    this.open = false;
    this.maxTagCount = Infinity;
    this.autofocus = false;
    this.disabled = false;
    this.mode = "default";
    this.customTemplate = null;
    this.maxTagPlaceholder = null;
    this.removeIcon = null;
    this.listOfTopItem = [];
    this.tokenSeparators = [];
    this.tokenize = new EventEmitter();
    this.inputValueChange = new EventEmitter();
    this.deleteItem = new EventEmitter();
    this.listOfSlicedItem = [];
    this.isShowPlaceholder = true;
    this.isShowSingleLabel = false;
    this.isComposing = false;
    this.inputValue = null;
    this.destroy$ = new Subject();
  }
  ngOnChanges(changes) {
    const {
      listOfTopItem,
      maxTagCount,
      customTemplate,
      maxTagPlaceholder
    } = changes;
    if (listOfTopItem) {
      this.updateTemplateVariable();
    }
    if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
      const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map((o) => ({
        nzLabel: o.nzLabel,
        nzValue: o.nzValue,
        nzDisabled: o.nzDisabled,
        contentTemplateOutlet: this.customTemplate,
        contentTemplateOutletContext: o
      }));
      if (this.listOfTopItem.length > this.maxTagCount) {
        const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
        const listOfSelectedValue = this.listOfTopItem.map((item) => item.nzValue);
        const exceededItem = {
          nzLabel: exceededLabel,
          nzValue: "$$__nz_exceeded_item",
          nzDisabled: true,
          contentTemplateOutlet: this.maxTagPlaceholder,
          contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
        };
        listOfSlicedItem.push(exceededItem);
      }
      this.listOfSlicedItem = listOfSlicedItem;
    }
  }
  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
          this.nzSelectSearchComponent.focus();
        }
      });
      fromEvent(this.elementRef.nativeElement, "keydown").pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (event.target instanceof HTMLInputElement) {
          const inputValue = event.target.value;
          if (event.keyCode === BACKSPACE && this.mode !== "default" && !inputValue && this.listOfTopItem.length > 0) {
            event.preventDefault();
            this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
          }
        }
      });
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
  }
};
_NzSelectTopControlComponent.\u0275fac = function NzSelectTopControlComponent_Factory(t) {
  return new (t || _NzSelectTopControlComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NzNoAnimationDirective, 9));
};
_NzSelectTopControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectTopControlComponent,
  selectors: [["nz-select-top-control"]],
  viewQuery: function NzSelectTopControlComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(NzSelectSearchComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectSearchComponent = _t.first);
    }
  },
  hostAttrs: [1, "ant-select-selector"],
  inputs: {
    nzId: "nzId",
    showSearch: "showSearch",
    placeHolder: "placeHolder",
    open: "open",
    maxTagCount: "maxTagCount",
    autofocus: "autofocus",
    disabled: "disabled",
    mode: "mode",
    customTemplate: "customTemplate",
    maxTagPlaceholder: "maxTagPlaceholder",
    removeIcon: "removeIcon",
    listOfTopItem: "listOfTopItem",
    tokenSeparators: "tokenSeparators"
  },
  outputs: {
    tokenize: "tokenize",
    inputValueChange: "inputValueChange",
    deleteItem: "deleteItem"
  },
  exportAs: ["nzSelectTopControl"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 4,
  vars: 3,
  consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "placeholder", 4, "ngIf"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "showInput", "mirrorSync", "autofocus", "focusTrigger"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext", 4, "ngIf"], [3, "deletable", "disabled", "removeIcon", "label", "contentTemplateOutlet", "contentTemplateOutletContext"], [3, "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext", "delete", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "isComposingChange", "valueChange", "nzId", "disabled", "value", "autofocus", "showInput", "mirrorSync", "focusTrigger"], [3, "delete", "removeIcon", "label", "disabled", "contentTemplateOutlet", "deletable", "contentTemplateOutletContext"], [3, "placeholder"]],
  template: function NzSelectTopControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0, 0);
      \u0275\u0275template(1, NzSelectTopControlComponent_ng_container_1_Template, 3, 8, "ng-container", 1)(2, NzSelectTopControlComponent_ng_container_2_Template, 3, 9, "ng-container", 2);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(3, NzSelectTopControlComponent_nz_select_placeholder_3_Template, 1, 1, "nz-select-placeholder", 3);
    }
    if (rf & 2) {
      \u0275\u0275property("ngSwitch", ctx.mode);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "default");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isShowPlaceholder);
    }
  },
  dependencies: [NgSwitch, NzSelectSearchComponent, NgSwitchCase, NzSelectItemComponent, NgIf, NgSwitchDefault, NgForOf, NzSelectPlaceholderComponent],
  encapsulation: 2,
  changeDetection: 0
});
var NzSelectTopControlComponent = _NzSelectTopControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectTopControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-select-top-control",
      exportAs: "nzSelectTopControl",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
        <nz-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].nzLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></nz-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <nz-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.nzLabel"
          [disabled]="item.nzDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></nz-select-item>
        <nz-select-search
          [nzId]="nzId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></nz-select-search>
      </ng-container>
    </ng-container>
    <nz-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></nz-select-placeholder>
  `,
      host: {
        class: "ant-select-selector"
      },
      imports: [NgSwitch, NzSelectSearchComponent, NgSwitchCase, NzSelectItemComponent, NgIf, NgSwitchDefault, NgForOf, NzSelectPlaceholderComponent],
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Host
    }, {
      type: Optional
    }]
  }], {
    nzId: [{
      type: Input
    }],
    showSearch: [{
      type: Input
    }],
    placeHolder: [{
      type: Input
    }],
    open: [{
      type: Input
    }],
    maxTagCount: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    customTemplate: [{
      type: Input
    }],
    maxTagPlaceholder: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    listOfTopItem: [{
      type: Input
    }],
    tokenSeparators: [{
      type: Input
    }],
    tokenize: [{
      type: Output
    }],
    inputValueChange: [{
      type: Output
    }],
    deleteItem: [{
      type: Output
    }],
    nzSelectSearchComponent: [{
      type: ViewChild,
      args: [NzSelectSearchComponent]
    }]
  });
})();
var defaultFilterOption = (searchValue, item) => {
  if (item && item.nzLabel) {
    return item.nzLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
  } else {
    return false;
  }
};
var NZ_CONFIG_MODULE_NAME = "select";
var _NzSelectComponent = class _NzSelectComponent {
  set nzShowArrow(value) {
    this._nzShowArrow = value;
  }
  get nzShowArrow() {
    return this._nzShowArrow === void 0 ? this.nzMode === "default" : this._nzShowArrow;
  }
  get isMaxTagCountSet() {
    return this.nzMaxMultipleCount !== Infinity;
  }
  generateTagItem(value) {
    return {
      nzValue: value,
      nzLabel: value,
      type: "item"
    };
  }
  onItemClick(value) {
    this.activatedValue = value;
    if (this.nzMode === "default") {
      if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
        this.updateListOfValue([value]);
      }
      this.setOpenState(false);
    } else {
      const targetIndex = this.listOfValue.findIndex((o) => this.compareWith(o, value));
      if (targetIndex !== -1) {
        const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
        this.updateListOfValue(listOfValueAfterRemoved);
      } else if (this.listOfValue.length < this.nzMaxMultipleCount) {
        const listOfValueAfterAdded = [...this.listOfValue, value];
        this.updateListOfValue(listOfValueAfterAdded);
      }
      this.focus();
      if (this.nzAutoClearSearchValue) {
        this.clearInput();
      }
    }
  }
  onItemDelete(item) {
    const listOfSelectedValue = this.listOfValue.filter((v) => !this.compareWith(v, item.nzValue));
    this.updateListOfValue(listOfSelectedValue);
    this.clearInput();
  }
  updateListOfContainerItem() {
    let listOfContainerItem = this.listOfTagAndTemplateItem.filter((item) => !item.nzHide).filter((item) => {
      if (!this.nzServerSearch && this.searchValue) {
        return this.nzFilterOption(this.searchValue, item);
      } else {
        return true;
      }
    });
    if (this.nzMode === "tags" && this.searchValue) {
      const matchedItem = this.listOfTagAndTemplateItem.find((item) => item.nzLabel === this.searchValue);
      if (!matchedItem) {
        const tagItem = this.generateTagItem(this.searchValue);
        listOfContainerItem = [tagItem, ...listOfContainerItem];
        this.activatedValue = tagItem.nzValue;
      } else {
        this.activatedValue = matchedItem.nzValue;
      }
    }
    const activatedItem = listOfContainerItem.find((item) => item.nzLabel === this.searchValue) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.activatedValue)) || listOfContainerItem.find((item) => this.compareWith(item.nzValue, this.listOfValue[0])) || listOfContainerItem[0];
    this.activatedValue = activatedItem && activatedItem.nzValue || null;
    let listOfGroupLabel = [];
    if (this.isReactiveDriven) {
      listOfGroupLabel = [...new Set(this.nzOptions.filter((o) => o.groupLabel).map((o) => o.groupLabel))];
    } else {
      if (this.listOfNzOptionGroupComponent) {
        listOfGroupLabel = this.listOfNzOptionGroupComponent.map((o) => o.nzLabel);
      }
    }
    listOfGroupLabel.forEach((label) => {
      const index = listOfContainerItem.findIndex((item) => label === item.groupLabel);
      if (index > -1) {
        const groupItem = {
          groupLabel: label,
          type: "group",
          key: label
        };
        listOfContainerItem.splice(index, 0, groupItem);
      }
    });
    this.listOfContainerItem = [...listOfContainerItem];
    this.updateCdkConnectedOverlayPositions();
  }
  clearInput() {
    this.nzSelectTopControlComponent.clearInputValue();
  }
  updateListOfValue(listOfValue) {
    const covertListToModel = (list, mode) => {
      if (mode === "default") {
        if (list.length > 0) {
          return list[0];
        } else {
          return null;
        }
      } else {
        return list;
      }
    };
    const model = covertListToModel(listOfValue, this.nzMode);
    if (this.value !== model) {
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.value = model;
      this.onChange(this.value);
    }
    this.isMaxLimitReached = this.nzMaxMultipleCount !== Infinity && this.listOfValue.length === this.nzMaxMultipleCount;
  }
  onTokenSeparate(listOfLabel) {
    const listOfMatchedValue = this.listOfTagAndTemplateItem.filter((item) => listOfLabel.findIndex((label) => label === item.nzLabel) !== -1).map((item) => item.nzValue).filter((item) => this.listOfValue.findIndex((v) => this.compareWith(v, item)) === -1);
    if (this.nzMode === "multiple") {
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
    } else if (this.nzMode === "tags") {
      const listOfUnMatchedLabel = listOfLabel.filter((label) => this.listOfTagAndTemplateItem.findIndex((item) => item.nzLabel === label) === -1);
      this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
    }
    this.clearInput();
  }
  onKeyDown(e) {
    if (this.nzDisabled) {
      return;
    }
    const listOfFilteredOptionNotDisabled = this.listOfContainerItem.filter((item) => item.type === "item").filter((item) => !item.nzDisabled);
    const activatedIndex = listOfFilteredOptionNotDisabled.findIndex((item) => this.compareWith(item.nzValue, this.activatedValue));
    switch (e.keyCode) {
      case UP_ARROW:
        e.preventDefault();
        if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
          const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
          this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].nzValue;
        }
        break;
      case DOWN_ARROW:
        e.preventDefault();
        if (this.nzOpen && listOfFilteredOptionNotDisabled.length > 0) {
          const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
          this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].nzValue;
        } else {
          this.setOpenState(true);
        }
        break;
      case ENTER:
        e.preventDefault();
        if (this.nzOpen) {
          if (isNotNil(this.activatedValue) && activatedIndex !== -1) {
            this.onItemClick(this.activatedValue);
          }
        } else {
          this.setOpenState(true);
        }
        break;
      case SPACE:
        if (!this.nzOpen) {
          this.setOpenState(true);
          e.preventDefault();
        }
        break;
      case TAB:
        if (this.nzSelectOnTab) {
          if (this.nzOpen) {
            e.preventDefault();
            if (isNotNil(this.activatedValue)) {
              this.onItemClick(this.activatedValue);
            }
          }
        } else {
          this.setOpenState(false);
        }
        break;
      case ESCAPE:
        break;
      default:
        if (!this.nzOpen) {
          this.setOpenState(true);
        }
    }
  }
  setOpenState(value) {
    if (this.nzOpen !== value) {
      this.nzOpen = value;
      this.nzOpenChange.emit(value);
      this.onOpenChange();
      this.cdr.markForCheck();
    }
  }
  onOpenChange() {
    this.updateCdkConnectedOverlayStatus();
    if (this.nzAutoClearSearchValue) {
      this.clearInput();
    }
  }
  onInputValueChange(value) {
    this.searchValue = value;
    this.updateListOfContainerItem();
    this.nzOnSearch.emit(value);
    this.updateCdkConnectedOverlayPositions();
  }
  onClearSelection() {
    this.updateListOfValue([]);
  }
  onClickOutside(event) {
    if (!this.host.nativeElement.contains(event.target)) {
      this.setOpenState(false);
    }
  }
  focus() {
    this.nzSelectTopControlComponent.focus();
  }
  blur() {
    this.nzSelectTopControlComponent.blur();
  }
  onPositionChange(position) {
    const placement = getPlacementName(position);
    this.dropDownPosition = placement;
  }
  updateCdkConnectedOverlayStatus() {
    if (this.platform.isBrowser && this.originElement.nativeElement) {
      const triggerWidth = this.triggerWidth;
      cancelRequestAnimationFrame(this.requestId);
      this.requestId = reqAnimFrame(() => {
        this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
        if (triggerWidth !== this.triggerWidth) {
          this.cdr.detectChanges();
        }
      });
    }
  }
  updateCdkConnectedOverlayPositions() {
    reqAnimFrame(() => {
      this.cdkConnectedOverlay?.overlayRef?.updatePosition();
    });
  }
  constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
    this.ngZone = ngZone;
    this.destroy$ = destroy$;
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.host = host;
    this.renderer = renderer;
    this.platform = platform;
    this.focusMonitor = focusMonitor;
    this.directionality = directionality;
    this.noAnimation = noAnimation;
    this.nzFormStatusService = nzFormStatusService;
    this.nzFormNoStatusService = nzFormNoStatusService;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzId = null;
    this.nzSize = "default";
    this.nzStatus = "";
    this.nzOptionHeightPx = 32;
    this.nzOptionOverflowSize = 8;
    this.nzDropdownClassName = null;
    this.nzDropdownMatchSelectWidth = true;
    this.nzDropdownStyle = null;
    this.nzNotFoundContent = void 0;
    this.nzPlaceHolder = null;
    this.nzPlacement = null;
    this.nzMaxTagCount = Infinity;
    this.nzDropdownRender = null;
    this.nzCustomTemplate = null;
    this.nzSuffixIcon = null;
    this.nzClearIcon = null;
    this.nzRemoveIcon = null;
    this.nzMenuItemSelectedIcon = null;
    this.nzTokenSeparators = [];
    this.nzMaxTagPlaceholder = null;
    this.nzMaxMultipleCount = Infinity;
    this.nzMode = "default";
    this.nzFilterOption = defaultFilterOption;
    this.compareWith = (o1, o2) => o1 === o2;
    this.nzAllowClear = false;
    this.nzBorderless = false;
    this.nzShowSearch = false;
    this.nzLoading = false;
    this.nzAutoFocus = false;
    this.nzAutoClearSearchValue = true;
    this.nzServerSearch = false;
    this.nzDisabled = false;
    this.nzOpen = false;
    this.nzSelectOnTab = false;
    this.nzBackdrop = false;
    this.nzOptions = [];
    this.nzOnSearch = new EventEmitter();
    this.nzScrollToBottom = new EventEmitter();
    this.nzOpenChange = new EventEmitter();
    this.nzBlur = new EventEmitter();
    this.nzFocus = new EventEmitter();
    this.listOfValue$ = new BehaviorSubject([]);
    this.listOfTemplateItem$ = new BehaviorSubject([]);
    this.listOfTagAndTemplateItem = [];
    this.searchValue = "";
    this.isReactiveDriven = false;
    this.requestId = -1;
    this.isNzDisableFirstChange = true;
    this.onChange = () => {
    };
    this.onTouched = () => {
    };
    this.dropDownPosition = "bottomLeft";
    this.triggerWidth = null;
    this.listOfContainerItem = [];
    this.listOfTopItem = [];
    this.activatedValue = null;
    this.listOfValue = [];
    this.focused = false;
    this.dir = "ltr";
    this.positions = [];
    this.isMaxLimitReached = false;
    this.prefixCls = "ant-select";
    this.statusCls = {};
    this.status = "";
    this.hasFeedback = false;
  }
  writeValue(modelValue) {
    if (this.value !== modelValue) {
      this.value = modelValue;
      const covertModelToList = (model, mode) => {
        if (model === null || model === void 0) {
          return [];
        } else if (mode === "default") {
          return [model];
        } else {
          return model;
        }
      };
      const listOfValue = covertModelToList(modelValue, this.nzMode);
      this.listOfValue = listOfValue;
      this.listOfValue$.next(listOfValue);
      this.cdr.markForCheck();
    }
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(disabled) {
    this.nzDisabled = this.isNzDisableFirstChange && this.nzDisabled || disabled;
    this.isNzDisableFirstChange = false;
    if (this.nzDisabled) {
      this.setOpenState(false);
    }
    this.cdr.markForCheck();
  }
  ngOnChanges(changes) {
    const {
      nzOpen,
      nzDisabled,
      nzOptions,
      nzStatus,
      nzPlacement
    } = changes;
    if (nzOpen) {
      this.onOpenChange();
    }
    if (nzDisabled && this.nzDisabled) {
      this.setOpenState(false);
    }
    if (nzOptions) {
      this.isReactiveDriven = true;
      const listOfOptions = this.nzOptions || [];
      const listOfTransformedItem = listOfOptions.map((item) => {
        return {
          template: item.label instanceof TemplateRef ? item.label : null,
          nzTitle: this.getTitle(item.title, item.label),
          nzLabel: typeof item.label === "string" || typeof item.label === "number" ? item.label : null,
          nzValue: item.value,
          nzDisabled: item.disabled || false,
          nzHide: item.hide || false,
          nzCustomContent: item.label instanceof TemplateRef,
          groupLabel: item.groupLabel || null,
          type: "item",
          key: item.key === void 0 ? item.value : item.key
        };
      });
      this.listOfTemplateItem$.next(listOfTransformedItem);
    }
    if (nzStatus) {
      this.setStatusStyles(this.nzStatus, this.hasFeedback);
    }
    if (nzPlacement) {
      const {
        currentValue
      } = nzPlacement;
      this.dropDownPosition = currentValue;
      const listOfPlacement = ["bottomLeft", "topLeft", "bottomRight", "topRight"];
      if (currentValue && listOfPlacement.includes(currentValue)) {
        this.positions = [POSITION_MAP[currentValue]];
      } else {
        this.positions = listOfPlacement.map((e) => POSITION_MAP[e]);
      }
    }
  }
  ngOnInit() {
    this.nzFormStatusService?.formStatusChanges.pipe(distinctUntilChanged((pre, cur) => {
      return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
    }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{
      status,
      hasFeedback
    }, noStatus]) => ({
      status: noStatus ? "" : status,
      hasFeedback
    })), takeUntil(this.destroy$)).subscribe(({
      status,
      hasFeedback
    }) => {
      this.setStatusStyles(status, hasFeedback);
    });
    this.focusMonitor.monitor(this.host, true).pipe(takeUntil(this.destroy$)).subscribe((focusOrigin) => {
      if (!focusOrigin) {
        this.focused = false;
        this.cdr.markForCheck();
        this.nzBlur.emit();
        Promise.resolve().then(() => {
          this.onTouched();
        });
      } else {
        this.focused = true;
        this.cdr.markForCheck();
        this.nzFocus.emit();
      }
    });
    combineLatest([this.listOfValue$, this.listOfTemplateItem$]).pipe(takeUntil(this.destroy$)).subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
      const listOfTagItem = listOfSelectedValue.filter(() => this.nzMode === "tags").filter((value) => listOfTemplateItem.findIndex((o) => this.compareWith(o.nzValue, value)) === -1).map((value) => this.listOfTopItem.find((o) => this.compareWith(o.nzValue, value)) || this.generateTagItem(value));
      this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
      this.listOfTopItem = this.listOfValue.map((v) => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find((item) => this.compareWith(v, item.nzValue))).filter((item) => !!item);
      this.updateListOfContainerItem();
    });
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.nzConfigService.getConfigChangeEventForComponent("select").pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, "click").pipe(takeUntil(this.destroy$)).subscribe(() => {
      if (this.nzOpen && this.nzShowSearch || this.nzDisabled) {
        return;
      }
      this.ngZone.run(() => this.setOpenState(!this.nzOpen));
    }));
    this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe((event) => {
      if (event.keyCode === ESCAPE) {
        this.setOpenState(false);
      }
    });
  }
  ngAfterContentInit() {
    if (!this.isReactiveDriven) {
      merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes).pipe(startWith(true), switchMap(() => merge(...[this.listOfNzOptionComponent.changes, this.listOfNzOptionGroupComponent.changes, ...this.listOfNzOptionComponent.map((option) => option.changes), ...this.listOfNzOptionGroupComponent.map((option) => option.changes)]).pipe(startWith(true))), takeUntil(this.destroy$)).subscribe(() => {
        const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map((item) => {
          const {
            template,
            nzLabel,
            nzValue,
            nzKey,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel
          } = item;
          return {
            template,
            nzLabel,
            nzValue,
            nzDisabled,
            nzHide,
            nzCustomContent,
            groupLabel,
            nzTitle: this.getTitle(item.nzTitle, item.nzLabel),
            type: "item",
            key: nzKey === void 0 ? nzValue : nzKey
          };
        });
        this.listOfTemplateItem$.next(listOfOptionInterface);
        this.cdr.markForCheck();
      });
    }
  }
  ngOnDestroy() {
    cancelRequestAnimationFrame(this.requestId);
    this.focusMonitor.stopMonitoring(this.host);
  }
  setStatusStyles(status, hasFeedback) {
    this.status = status;
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
    this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
    Object.keys(this.statusCls).forEach((status2) => {
      if (this.statusCls[status2]) {
        this.renderer.addClass(this.host.nativeElement, status2);
      } else {
        this.renderer.removeClass(this.host.nativeElement, status2);
      }
    });
  }
  getTitle(title, label) {
    let rawTitle = void 0;
    if (title === void 0) {
      if (typeof label === "string" || typeof label === "number") {
        rawTitle = label.toString();
      }
    } else if (typeof title === "string" || typeof title === "number") {
      rawTitle = title.toString();
    }
    return rawTitle;
  }
};
_NzSelectComponent.\u0275fac = function NzSelectComponent_Factory(t) {
  return new (t || _NzSelectComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(NzDestroyService), \u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(FocusMonitor), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NzNoAnimationDirective, 9), \u0275\u0275directiveInject(NzFormStatusService, 8), \u0275\u0275directiveInject(NzFormNoStatusService, 8));
};
_NzSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSelectComponent,
  selectors: [["nz-select"]],
  contentQueries: function NzSelectComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzOptionComponent, 5);
      \u0275\u0275contentQuery(dirIndex, NzOptionGroupComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionComponent = _t);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listOfNzOptionGroupComponent = _t);
    }
  },
  viewQuery: function NzSelectComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(CdkOverlayOrigin, 7, ElementRef);
      \u0275\u0275viewQuery(CdkConnectedOverlay, 7);
      \u0275\u0275viewQuery(NzSelectTopControlComponent, 7);
      \u0275\u0275viewQuery(NzOptionGroupComponent, 7, ElementRef);
      \u0275\u0275viewQuery(NzSelectTopControlComponent, 7, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.originElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponent = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzOptionGroupComponentElement = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzSelectTopControlComponentElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-select"],
  hostVars: 26,
  hostBindings: function NzSelectComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-select-in-form-item", !!ctx.nzFormStatusService)("ant-select-lg", ctx.nzSize === "large")("ant-select-sm", ctx.nzSize === "small")("ant-select-show-arrow", ctx.nzShowArrow)("ant-select-disabled", ctx.nzDisabled)("ant-select-show-search", (ctx.nzShowSearch || ctx.nzMode !== "default") && !ctx.nzDisabled)("ant-select-allow-clear", ctx.nzAllowClear)("ant-select-borderless", ctx.nzBorderless)("ant-select-open", ctx.nzOpen)("ant-select-focused", ctx.nzOpen || ctx.focused)("ant-select-single", ctx.nzMode === "default")("ant-select-multiple", ctx.nzMode !== "default")("ant-select-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzId: "nzId",
    nzSize: "nzSize",
    nzStatus: "nzStatus",
    nzOptionHeightPx: "nzOptionHeightPx",
    nzOptionOverflowSize: "nzOptionOverflowSize",
    nzDropdownClassName: "nzDropdownClassName",
    nzDropdownMatchSelectWidth: "nzDropdownMatchSelectWidth",
    nzDropdownStyle: "nzDropdownStyle",
    nzNotFoundContent: "nzNotFoundContent",
    nzPlaceHolder: "nzPlaceHolder",
    nzPlacement: "nzPlacement",
    nzMaxTagCount: "nzMaxTagCount",
    nzDropdownRender: "nzDropdownRender",
    nzCustomTemplate: "nzCustomTemplate",
    nzSuffixIcon: "nzSuffixIcon",
    nzClearIcon: "nzClearIcon",
    nzRemoveIcon: "nzRemoveIcon",
    nzMenuItemSelectedIcon: "nzMenuItemSelectedIcon",
    nzTokenSeparators: "nzTokenSeparators",
    nzMaxTagPlaceholder: "nzMaxTagPlaceholder",
    nzMaxMultipleCount: "nzMaxMultipleCount",
    nzMode: "nzMode",
    nzFilterOption: "nzFilterOption",
    compareWith: "compareWith",
    nzAllowClear: "nzAllowClear",
    nzBorderless: "nzBorderless",
    nzShowSearch: "nzShowSearch",
    nzLoading: "nzLoading",
    nzAutoFocus: "nzAutoFocus",
    nzAutoClearSearchValue: "nzAutoClearSearchValue",
    nzServerSearch: "nzServerSearch",
    nzDisabled: "nzDisabled",
    nzOpen: "nzOpen",
    nzSelectOnTab: "nzSelectOnTab",
    nzBackdrop: "nzBackdrop",
    nzOptions: "nzOptions",
    nzShowArrow: "nzShowArrow"
  },
  outputs: {
    nzOnSearch: "nzOnSearch",
    nzScrollToBottom: "nzScrollToBottom",
    nzOpenChange: "nzOpenChange",
    nzBlur: "nzBlur",
    nzFocus: "nzFocus"
  },
  exportAs: ["nzSelect"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService, {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _NzSelectComponent),
    multi: true
  }]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  decls: 5,
  vars: 25,
  consts: [["origin", "cdkOverlayOrigin"], ["feedbackIconTpl", ""], ["cdkOverlayOrigin", "", 3, "inputValueChange", "tokenize", "deleteItem", "keydown", "nzId", "open", "disabled", "mode", "nzNoAnimation", "maxTagPlaceholder", "removeIcon", "placeHolder", "maxTagCount", "customTemplate", "tokenSeparators", "showSearch", "autofocus", "listOfTopItem"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxTagCountSet", 4, "ngIf"], [3, "clearIcon", "clear", 4, "ngIf"], ["cdkConnectedOverlay", "", "nzConnectedOverlay", "", 3, "overlayOutsideClick", "detach", "positionChange", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayWidth", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions"], [3, "showArrow", "loading", "search", "suffixIcon", "feedbackIcon", "nzMaxMultipleCount", "listOfValue", "isMaxTagCountSet"], [3, "status", 4, "ngIf"], [3, "status"], [3, "clear", "clearIcon"], [3, "keydown", "itemClick", "scrollToBottom", "ngStyle", "itemSize", "maxItemLength", "matchWidth", "nzNoAnimation", "listOfContainerItem", "menuItemSelectedIcon", "notFoundContent", "activatedValue", "listOfSelectedValue", "dropdownRender", "compareWith", "mode", "isMaxLimitReached"]],
  template: function NzSelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nz-select-top-control", 2, 0);
      \u0275\u0275listener("inputValueChange", function NzSelectComponent_Template_nz_select_top_control_inputValueChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInputValueChange($event));
      })("tokenize", function NzSelectComponent_Template_nz_select_top_control_tokenize_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onTokenSeparate($event));
      })("deleteItem", function NzSelectComponent_Template_nz_select_top_control_deleteItem_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onItemDelete($event));
      })("keydown", function NzSelectComponent_Template_nz_select_top_control_keydown_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onKeyDown($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(2, NzSelectComponent_nz_select_arrow_2_Template, 3, 8, "nz-select-arrow", 3)(3, NzSelectComponent_nz_select_clear_3_Template, 1, 1, "nz-select-clear", 4)(4, NzSelectComponent_ng_template_4_Template, 1, 24, "ng-template", 5);
      \u0275\u0275listener("overlayOutsideClick", function NzSelectComponent_Template_ng_template_overlayOutsideClick_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onClickOutside($event));
      })("detach", function NzSelectComponent_Template_ng_template_detach_4_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.setOpenState(false));
      })("positionChange", function NzSelectComponent_Template_ng_template_positionChange_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPositionChange($event));
      });
    }
    if (rf & 2) {
      const origin_r6 = \u0275\u0275reference(1);
      \u0275\u0275property("nzId", ctx.nzId)("open", ctx.nzOpen)("disabled", ctx.nzDisabled)("mode", ctx.nzMode)("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("nzNoAnimation", ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation)("maxTagPlaceholder", ctx.nzMaxTagPlaceholder)("removeIcon", ctx.nzRemoveIcon)("placeHolder", ctx.nzPlaceHolder)("maxTagCount", ctx.nzMaxTagCount)("customTemplate", ctx.nzCustomTemplate)("tokenSeparators", ctx.nzTokenSeparators)("showSearch", ctx.nzShowSearch)("autofocus", ctx.nzAutoFocus)("listOfTopItem", ctx.listOfTopItem);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.nzShowArrow || ctx.hasFeedback && !!ctx.status || ctx.isMaxTagCountSet);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.nzAllowClear && !ctx.nzDisabled && ctx.listOfValue.length);
      \u0275\u0275advance();
      \u0275\u0275property("cdkConnectedOverlayHasBackdrop", ctx.nzBackdrop)("cdkConnectedOverlayMinWidth", ctx.nzDropdownMatchSelectWidth ? null : ctx.triggerWidth)("cdkConnectedOverlayWidth", ctx.nzDropdownMatchSelectWidth ? ctx.triggerWidth : null)("cdkConnectedOverlayOrigin", origin_r6)("cdkConnectedOverlayTransformOriginOn", ".ant-select-dropdown")("cdkConnectedOverlayPanelClass", ctx.nzDropdownClassName)("cdkConnectedOverlayOpen", ctx.nzOpen)("cdkConnectedOverlayPositions", ctx.positions);
    }
  },
  dependencies: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NgIf, NzFormPatchModule, NzFormItemFeedbackIconComponent, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzConnectedOverlayDirective, NzOptionContainerComponent, NgStyle],
  encapsulation: 2,
  data: {
    animation: [slideMotion]
  },
  changeDetection: 0
});
var NzSelectComponent = _NzSelectComponent;
__decorate([WithConfig()], NzSelectComponent.prototype, "nzOptionHeightPx", void 0);
__decorate([WithConfig()], NzSelectComponent.prototype, "nzSuffixIcon", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAllowClear", void 0);
__decorate([WithConfig(), InputBoolean()], NzSelectComponent.prototype, "nzBorderless", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzShowSearch", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAutoFocus", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzAutoClearSearchValue", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzServerSearch", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzDisabled", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzOpen", void 0);
__decorate([InputBoolean()], NzSelectComponent.prototype, "nzSelectOnTab", void 0);
__decorate([WithConfig(), InputBoolean()], NzSelectComponent.prototype, "nzBackdrop", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectComponent, [{
    type: Component,
    args: [{
      selector: "nz-select",
      exportAs: "nzSelect",
      preserveWhitespaces: false,
      providers: [NzDestroyService, {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => NzSelectComponent),
        multi: true
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [slideMotion],
      template: `
    <nz-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [nzId]="nzId"
      [open]="nzOpen"
      [disabled]="nzDisabled"
      [mode]="nzMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="nzMaxTagPlaceholder"
      [removeIcon]="nzRemoveIcon"
      [placeHolder]="nzPlaceHolder"
      [maxTagCount]="nzMaxTagCount"
      [customTemplate]="nzCustomTemplate"
      [tokenSeparators]="nzTokenSeparators"
      [showSearch]="nzShowSearch"
      [autofocus]="nzAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></nz-select-top-control>
    <nz-select-arrow
      *ngIf="nzShowArrow || (hasFeedback && !!status) || isMaxTagCountSet"
      [showArrow]="nzShowArrow"
      [loading]="nzLoading"
      [search]="nzOpen && nzShowSearch"
      [suffixIcon]="nzSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
      [nzMaxMultipleCount]="nzMaxMultipleCount"
      [listOfValue]="listOfValue"
      [isMaxTagCountSet]="isMaxTagCountSet"
    >
      <ng-template #feedbackIconTpl>
        <nz-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></nz-form-item-feedback-icon>
      </ng-template>
    </nz-select-arrow>

    <nz-select-clear
      *ngIf="nzAllowClear && !nzDisabled && listOfValue.length"
      [clearIcon]="nzClearIcon"
      (clear)="onClearSelection()"
    ></nz-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="nzBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(nzDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(nzDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="nzDropdownClassName!"
      [cdkConnectedOverlayOpen]="nzOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <nz-option-container
        [ngStyle]="nzDropdownStyle"
        [itemSize]="nzOptionHeightPx"
        [maxItemLength]="nzOptionOverflowSize"
        [matchWidth]="nzDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="nzMenuItemSelectedIcon"
        [notFoundContent]="nzNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="nzDropdownRender"
        [compareWith]="compareWith"
        [mode]="nzMode"
        [isMaxLimitReached]="isMaxLimitReached"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="nzScrollToBottom.emit()"
      ></nz-option-container>
    </ng-template>
  `,
      host: {
        class: "ant-select",
        "[class.ant-select-in-form-item]": "!!nzFormStatusService",
        "[class.ant-select-lg]": 'nzSize === "large"',
        "[class.ant-select-sm]": 'nzSize === "small"',
        "[class.ant-select-show-arrow]": `nzShowArrow`,
        "[class.ant-select-disabled]": "nzDisabled",
        "[class.ant-select-show-search]": `(nzShowSearch || nzMode !== 'default') && !nzDisabled`,
        "[class.ant-select-allow-clear]": "nzAllowClear",
        "[class.ant-select-borderless]": "nzBorderless",
        "[class.ant-select-open]": "nzOpen",
        "[class.ant-select-focused]": "nzOpen || focused",
        "[class.ant-select-single]": `nzMode === 'default'`,
        "[class.ant-select-multiple]": `nzMode !== 'default'`,
        "[class.ant-select-rtl]": `dir === 'rtl'`
      },
      imports: [NzSelectTopControlComponent, CdkOverlayOrigin, NzNoAnimationDirective, NzSelectArrowComponent, NgIf, NzFormPatchModule, NzSelectClearComponent, CdkConnectedOverlay, NzOverlayModule, NzOptionContainerComponent, NgStyle],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: NzDestroyService
  }, {
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: Platform
  }, {
    type: FocusMonitor
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
  }, {
    type: NzFormStatusService,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormNoStatusService,
    decorators: [{
      type: Optional
    }]
  }], {
    nzId: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzStatus: [{
      type: Input
    }],
    nzOptionHeightPx: [{
      type: Input
    }],
    nzOptionOverflowSize: [{
      type: Input
    }],
    nzDropdownClassName: [{
      type: Input
    }],
    nzDropdownMatchSelectWidth: [{
      type: Input
    }],
    nzDropdownStyle: [{
      type: Input
    }],
    nzNotFoundContent: [{
      type: Input
    }],
    nzPlaceHolder: [{
      type: Input
    }],
    nzPlacement: [{
      type: Input
    }],
    nzMaxTagCount: [{
      type: Input
    }],
    nzDropdownRender: [{
      type: Input
    }],
    nzCustomTemplate: [{
      type: Input
    }],
    nzSuffixIcon: [{
      type: Input
    }],
    nzClearIcon: [{
      type: Input
    }],
    nzRemoveIcon: [{
      type: Input
    }],
    nzMenuItemSelectedIcon: [{
      type: Input
    }],
    nzTokenSeparators: [{
      type: Input
    }],
    nzMaxTagPlaceholder: [{
      type: Input
    }],
    nzMaxMultipleCount: [{
      type: Input
    }],
    nzMode: [{
      type: Input
    }],
    nzFilterOption: [{
      type: Input
    }],
    compareWith: [{
      type: Input
    }],
    nzAllowClear: [{
      type: Input
    }],
    nzBorderless: [{
      type: Input
    }],
    nzShowSearch: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzAutoFocus: [{
      type: Input
    }],
    nzAutoClearSearchValue: [{
      type: Input
    }],
    nzServerSearch: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzOpen: [{
      type: Input
    }],
    nzSelectOnTab: [{
      type: Input
    }],
    nzBackdrop: [{
      type: Input
    }],
    nzOptions: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input
    }],
    nzOnSearch: [{
      type: Output
    }],
    nzScrollToBottom: [{
      type: Output
    }],
    nzOpenChange: [{
      type: Output
    }],
    nzBlur: [{
      type: Output
    }],
    nzFocus: [{
      type: Output
    }],
    originElement: [{
      type: ViewChild,
      args: [CdkOverlayOrigin, {
        static: true,
        read: ElementRef
      }]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay, {
        static: true
      }]
    }],
    nzSelectTopControlComponent: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true
      }]
    }],
    listOfNzOptionComponent: [{
      type: ContentChildren,
      args: [NzOptionComponent, {
        descendants: true
      }]
    }],
    listOfNzOptionGroupComponent: [{
      type: ContentChildren,
      args: [NzOptionGroupComponent, {
        descendants: true
      }]
    }],
    nzOptionGroupComponentElement: [{
      type: ViewChild,
      args: [NzOptionGroupComponent, {
        static: true,
        read: ElementRef
      }]
    }],
    nzSelectTopControlComponentElement: [{
      type: ViewChild,
      args: [NzSelectTopControlComponent, {
        static: true,
        read: ElementRef
      }]
    }]
  });
})();
var _NzSelectModule = class _NzSelectModule {
};
_NzSelectModule.\u0275fac = function NzSelectModule_Factory(t) {
  return new (t || _NzSelectModule)();
};
_NzSelectModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzSelectModule
});
_NzSelectModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzSelectComponent, NzOptionContainerComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent]
});
var NzSelectModule = _NzSelectModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSelectModule, [{
    type: NgModule,
    args: [{
      imports: [NzOptionComponent, NzSelectComponent, NzOptionContainerComponent, NzOptionGroupComponent, NzOptionItemComponent, NzSelectTopControlComponent, NzSelectSearchComponent, NzSelectItemComponent, NzSelectClearComponent, NzSelectArrowComponent, NzSelectPlaceholderComponent, NzOptionItemGroupComponent],
      exports: [NzOptionComponent, NzSelectComponent, NzOptionGroupComponent, NzSelectArrowComponent, NzSelectClearComponent, NzSelectItemComponent, NzSelectPlaceholderComponent, NzSelectSearchComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-collapse.mjs
var _c02 = ["*"];
var _c12 = ["collapseHeader"];
function NzCollapsePanelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const expandedIcon_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", expandedIcon_r1 || "right")("nzRotate", ctx_r1.nzActive ? 90 : 0);
  }
}
function NzCollapsePanelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, NzCollapsePanelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzExpandedIcon);
  }
}
function NzCollapsePanelComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzHeader);
  }
}
function NzCollapsePanelComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.nzExtra);
  }
}
function NzCollapsePanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, NzCollapsePanelComponent_Conditional_5_ng_container_1_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.nzExtra);
  }
}
var NZ_CONFIG_MODULE_NAME$1 = "collapse";
var _NzCollapseComponent = class _NzCollapseComponent {
  constructor(nzConfigService, cdr, directionality, destroy$) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this.destroy$ = destroy$;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
    this.nzAccordion = false;
    this.nzBordered = true;
    this.nzGhost = false;
    this.nzExpandIconPosition = "left";
    this.dir = "ltr";
    this.listOfNzCollapsePanelComponent = [];
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME$1).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  addPanel(value) {
    this.listOfNzCollapsePanelComponent.push(value);
  }
  removePanel(value) {
    this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
  }
  click(collapse) {
    if (this.nzAccordion && !collapse.nzActive) {
      this.listOfNzCollapsePanelComponent.filter((item) => item !== collapse).forEach((item) => {
        if (item.nzActive) {
          item.nzActive = false;
          item.nzActiveChange.emit(item.nzActive);
          item.markForCheck();
        }
      });
    }
    collapse.nzActive = !collapse.nzActive;
    collapse.nzActiveChange.emit(collapse.nzActive);
  }
};
_NzCollapseComponent.\u0275fac = function NzCollapseComponent_Factory(t) {
  return new (t || _NzCollapseComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality, 8), \u0275\u0275directiveInject(NzDestroyService));
};
_NzCollapseComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzCollapseComponent,
  selectors: [["nz-collapse"]],
  hostAttrs: [1, "ant-collapse"],
  hostVars: 10,
  hostBindings: function NzCollapseComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-collapse-icon-position-start", ctx.nzExpandIconPosition === "left")("ant-collapse-icon-position-end", ctx.nzExpandIconPosition === "right")("ant-collapse-ghost", ctx.nzGhost)("ant-collapse-borderless", !ctx.nzBordered)("ant-collapse-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAccordion: "nzAccordion",
    nzBordered: "nzBordered",
    nzGhost: "nzGhost",
    nzExpandIconPosition: "nzExpandIconPosition"
  },
  exportAs: ["nzCollapse"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 1,
  vars: 0,
  template: function NzCollapseComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzCollapseComponent = _NzCollapseComponent;
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzAccordion", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzBordered", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapseComponent.prototype, "nzGhost", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse",
      exportAs: "nzCollapse",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-collapse",
        "[class.ant-collapse-icon-position-start]": `nzExpandIconPosition === 'left'`,
        "[class.ant-collapse-icon-position-end]": `nzExpandIconPosition === 'right'`,
        "[class.ant-collapse-ghost]": `nzGhost`,
        "[class.ant-collapse-borderless]": "!nzBordered",
        "[class.ant-collapse-rtl]": "dir === 'rtl'"
      },
      providers: [NzDestroyService],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzDestroyService
  }], {
    nzAccordion: [{
      type: Input
    }],
    nzBordered: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzExpandIconPosition: [{
      type: Input
    }]
  });
})();
var NZ_CONFIG_MODULE_NAME2 = "collapsePanel";
var _NzCollapsePanelComponent = class _NzCollapsePanelComponent {
  markForCheck() {
    this.cdr.markForCheck();
  }
  constructor(nzConfigService, ngZone, cdr, destroy$, nzCollapseComponent, noAnimation) {
    this.nzConfigService = nzConfigService;
    this.ngZone = ngZone;
    this.cdr = cdr;
    this.destroy$ = destroy$;
    this.nzCollapseComponent = nzCollapseComponent;
    this.noAnimation = noAnimation;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME2;
    this.nzActive = false;
    this.nzDisabled = false;
    this.nzShowArrow = true;
    this.nzActiveChange = new EventEmitter();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME2).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.nzCollapseComponent.addPanel(this);
    this.ngZone.runOutsideAngular(() => fromEvent(this.collapseHeader.nativeElement, "click").pipe(filter(() => !this.nzDisabled), takeUntil(this.destroy$)).subscribe(() => {
      this.ngZone.run(() => {
        this.nzCollapseComponent.click(this);
        this.cdr.markForCheck();
      });
    }));
  }
  ngOnDestroy() {
    this.nzCollapseComponent.removePanel(this);
  }
};
_NzCollapsePanelComponent.\u0275fac = function NzCollapsePanelComponent_Factory(t) {
  return new (t || _NzCollapsePanelComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzDestroyService), \u0275\u0275directiveInject(NzCollapseComponent, 1), \u0275\u0275directiveInject(NzNoAnimationDirective, 8));
};
_NzCollapsePanelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzCollapsePanelComponent,
  selectors: [["nz-collapse-panel"]],
  viewQuery: function NzCollapsePanelComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c12, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.collapseHeader = _t.first);
    }
  },
  hostAttrs: [1, "ant-collapse-item"],
  hostVars: 6,
  hostBindings: function NzCollapsePanelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-collapse-no-arrow", !ctx.nzShowArrow)("ant-collapse-item-active", ctx.nzActive)("ant-collapse-item-disabled", ctx.nzDisabled);
    }
  },
  inputs: {
    nzActive: "nzActive",
    nzDisabled: "nzDisabled",
    nzShowArrow: "nzShowArrow",
    nzExtra: "nzExtra",
    nzHeader: "nzHeader",
    nzExpandedIcon: "nzExpandedIcon"
  },
  outputs: {
    nzActiveChange: "nzActiveChange"
  },
  exportAs: ["nzCollapsePanel"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzDestroyService]), \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c02,
  decls: 9,
  vars: 8,
  consts: [["collapseHeader", ""], ["role", "button", 1, "ant-collapse-header"], [1, "ant-collapse-header-text"], [4, "nzStringTemplateOutlet"], [1, "ant-collapse-extra"], [1, "ant-collapse-content"], [1, "ant-collapse-content-box"], ["nz-icon", "", 1, "ant-collapse-arrow", 3, "nzType", "nzRotate"]],
  template: function NzCollapsePanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 1, 0);
      \u0275\u0275template(2, NzCollapsePanelComponent_Conditional_2_Template, 2, 1, "div");
      \u0275\u0275elementStart(3, "span", 2);
      \u0275\u0275template(4, NzCollapsePanelComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, NzCollapsePanelComponent_Conditional_5_Template, 2, 1, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 5)(7, "div", 6);
      \u0275\u0275projection(8);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-expanded", ctx.nzActive);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.nzShowArrow ? 2 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("nzStringTemplateOutlet", ctx.nzHeader);
      \u0275\u0275advance();
      \u0275\u0275conditional(5, ctx.nzExtra ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("ant-collapse-content-active", ctx.nzActive);
      \u0275\u0275property("@.disabled", !!(ctx.noAnimation == null ? null : ctx.noAnimation.nzNoAnimation))("@collapseMotion", ctx.nzActive ? "expanded" : "hidden");
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  data: {
    animation: [collapseMotion]
  },
  changeDetection: 0
});
var NzCollapsePanelComponent = _NzCollapsePanelComponent;
__decorate([InputBoolean()], NzCollapsePanelComponent.prototype, "nzActive", void 0);
__decorate([InputBoolean()], NzCollapsePanelComponent.prototype, "nzDisabled", void 0);
__decorate([WithConfig(), InputBoolean()], NzCollapsePanelComponent.prototype, "nzShowArrow", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapsePanelComponent, [{
    type: Component,
    args: [{
      selector: "nz-collapse-panel",
      exportAs: "nzCollapsePanel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      animations: [collapseMotion],
      template: `
    <div #collapseHeader role="button" [attr.aria-expanded]="nzActive" class="ant-collapse-header">
      @if (nzShowArrow) {
        <div>
          <ng-container *nzStringTemplateOutlet="nzExpandedIcon; let expandedIcon">
            <span
              nz-icon
              [nzType]="expandedIcon || 'right'"
              class="ant-collapse-arrow"
              [nzRotate]="nzActive ? 90 : 0"
            ></span>
          </ng-container>
        </div>
      }
      <span class="ant-collapse-header-text">
        <ng-container *nzStringTemplateOutlet="nzHeader">{{ nzHeader }}</ng-container>
      </span>
      @if (nzExtra) {
        <div class="ant-collapse-extra">
          <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
        </div>
      }
    </div>
    <div
      class="ant-collapse-content"
      [class.ant-collapse-content-active]="nzActive"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [@collapseMotion]="nzActive ? 'expanded' : 'hidden'"
    >
      <div class="ant-collapse-content-box">
        <ng-content></ng-content>
      </div>
    </div>
  `,
      host: {
        class: "ant-collapse-item",
        "[class.ant-collapse-no-arrow]": "!nzShowArrow",
        "[class.ant-collapse-item-active]": "nzActive",
        "[class.ant-collapse-item-disabled]": "nzDisabled"
      },
      providers: [NzDestroyService],
      imports: [NzOutletModule, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzDestroyService
  }, {
    type: NzCollapseComponent,
    decorators: [{
      type: Host
    }]
  }, {
    type: NzNoAnimationDirective,
    decorators: [{
      type: Optional
    }]
  }], {
    nzActive: [{
      type: Input
    }],
    nzDisabled: [{
      type: Input
    }],
    nzShowArrow: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzHeader: [{
      type: Input
    }],
    nzExpandedIcon: [{
      type: Input
    }],
    nzActiveChange: [{
      type: Output
    }],
    collapseHeader: [{
      type: ViewChild,
      args: ["collapseHeader", {
        static: true
      }]
    }]
  });
})();
var _NzCollapseModule = class _NzCollapseModule {
};
_NzCollapseModule.\u0275fac = function NzCollapseModule_Factory(t) {
  return new (t || _NzCollapseModule)();
};
_NzCollapseModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzCollapseModule
});
_NzCollapseModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzCollapsePanelComponent]
});
var NzCollapseModule = _NzCollapseModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzCollapseModule, [{
    type: NgModule,
    args: [{
      imports: [NzCollapsePanelComponent, NzCollapseComponent],
      exports: [NzCollapsePanelComponent, NzCollapseComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-grid.mjs
var _NzRowDirective = class _NzRowDirective {
  getGutter() {
    const results = [null, null];
    const gutter = this.nzGutter || 0;
    const normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, null];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === "object" && g !== null) {
        results[index] = null;
        Object.keys(gridResponsiveMap).map((screen) => {
          const bp = screen;
          if (this.mediaMatcher.matchMedia(gridResponsiveMap[bp]).matches && g[bp]) {
            results[index] = g[bp];
          }
        });
      } else {
        results[index] = Number(g) || null;
      }
    });
    return results;
  }
  setGutterStyle() {
    const [horizontalGutter, verticalGutter] = this.getGutter();
    this.actualGutter$.next([horizontalGutter, verticalGutter]);
    const renderGutter = (name, gutter) => {
      const nativeElement = this.elementRef.nativeElement;
      if (gutter !== null) {
        this.renderer.setStyle(nativeElement, name, `-${gutter / 2}px`);
      }
    };
    renderGutter("margin-left", horizontalGutter);
    renderGutter("margin-right", horizontalGutter);
    renderGutter("margin-top", verticalGutter);
    renderGutter("margin-bottom", verticalGutter);
  }
  constructor(elementRef, renderer, mediaMatcher, ngZone, platform, breakpointService, directionality) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.mediaMatcher = mediaMatcher;
    this.ngZone = ngZone;
    this.platform = platform;
    this.breakpointService = breakpointService;
    this.directionality = directionality;
    this.nzAlign = null;
    this.nzJustify = null;
    this.nzGutter = null;
    this.actualGutter$ = new ReplaySubject(1);
    this.dir = "ltr";
    this.destroy$ = new Subject();
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
    this.setGutterStyle();
  }
  ngOnChanges(changes) {
    if (changes.nzGutter) {
      this.setGutterStyle();
    }
  }
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      this.breakpointService.subscribe(gridResponsiveMap).pipe(takeUntil(this.destroy$)).subscribe(() => {
        this.setGutterStyle();
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzRowDirective.\u0275fac = function NzRowDirective_Factory(t) {
  return new (t || _NzRowDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(MediaMatcher), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(NzBreakpointService), \u0275\u0275directiveInject(Directionality, 8));
};
_NzRowDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzRowDirective,
  selectors: [["", "nz-row", ""], ["nz-row"], ["nz-form-item"]],
  hostAttrs: [1, "ant-row"],
  hostVars: 20,
  hostBindings: function NzRowDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-row-top", ctx.nzAlign === "top")("ant-row-middle", ctx.nzAlign === "middle")("ant-row-bottom", ctx.nzAlign === "bottom")("ant-row-start", ctx.nzJustify === "start")("ant-row-end", ctx.nzJustify === "end")("ant-row-center", ctx.nzJustify === "center")("ant-row-space-around", ctx.nzJustify === "space-around")("ant-row-space-between", ctx.nzJustify === "space-between")("ant-row-space-evenly", ctx.nzJustify === "space-evenly")("ant-row-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzAlign: "nzAlign",
    nzJustify: "nzJustify",
    nzGutter: "nzGutter"
  },
  exportAs: ["nzRow"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var NzRowDirective = _NzRowDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzRowDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-row],nz-row,nz-form-item",
      exportAs: "nzRow",
      host: {
        class: "ant-row",
        "[class.ant-row-top]": `nzAlign === 'top'`,
        "[class.ant-row-middle]": `nzAlign === 'middle'`,
        "[class.ant-row-bottom]": `nzAlign === 'bottom'`,
        "[class.ant-row-start]": `nzJustify === 'start'`,
        "[class.ant-row-end]": `nzJustify === 'end'`,
        "[class.ant-row-center]": `nzJustify === 'center'`,
        "[class.ant-row-space-around]": `nzJustify === 'space-around'`,
        "[class.ant-row-space-between]": `nzJustify === 'space-between'`,
        "[class.ant-row-space-evenly]": `nzJustify === 'space-evenly'`,
        "[class.ant-row-rtl]": `dir === "rtl"`
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: MediaMatcher
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: NzBreakpointService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzAlign: [{
      type: Input
    }],
    nzJustify: [{
      type: Input
    }],
    nzGutter: [{
      type: Input
    }]
  });
})();
var _NzColDirective = class _NzColDirective {
  setHostClassMap() {
    const hostClassMap = __spreadValues({
      ["ant-col"]: true,
      [`ant-col-${this.nzSpan}`]: isNotNil(this.nzSpan),
      [`ant-col-order-${this.nzOrder}`]: isNotNil(this.nzOrder),
      [`ant-col-offset-${this.nzOffset}`]: isNotNil(this.nzOffset),
      [`ant-col-pull-${this.nzPull}`]: isNotNil(this.nzPull),
      [`ant-col-push-${this.nzPush}`]: isNotNil(this.nzPush),
      ["ant-col-rtl"]: this.dir === "rtl"
    }, this.generateClass());
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i)) {
        this.renderer.removeClass(this.elementRef.nativeElement, i);
      }
    }
    this.classMap = __spreadValues({}, hostClassMap);
    for (const i in this.classMap) {
      if (this.classMap.hasOwnProperty(i) && this.classMap[i]) {
        this.renderer.addClass(this.elementRef.nativeElement, i);
      }
    }
  }
  setHostFlexStyle() {
    this.hostFlexStyle = this.parseFlex(this.nzFlex);
  }
  parseFlex(flex) {
    if (typeof flex === "number") {
      return `${flex} ${flex} auto`;
    } else if (typeof flex === "string") {
      if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
      }
    }
    return flex;
  }
  generateClass() {
    const listOfSizeInputName = ["nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"];
    const listClassMap = {};
    listOfSizeInputName.forEach((name) => {
      const sizeName = name.replace("nz", "").toLowerCase();
      if (isNotNil(this[name])) {
        if (typeof this[name] === "number" || typeof this[name] === "string") {
          listClassMap[`ant-col-${sizeName}-${this[name]}`] = true;
        } else {
          const embedded = this[name];
          const prefixArray = ["span", "pull", "push", "offset", "order"];
          prefixArray.forEach((prefix) => {
            const prefixClass = prefix === "span" ? "-" : `-${prefix}-`;
            listClassMap[`ant-col-${sizeName}${prefixClass}${embedded[prefix]}`] = embedded && isNotNil(embedded[prefix]);
          });
        }
      }
    });
    return listClassMap;
  }
  constructor(elementRef, nzRowDirective, renderer, directionality) {
    this.elementRef = elementRef;
    this.nzRowDirective = nzRowDirective;
    this.renderer = renderer;
    this.directionality = directionality;
    this.classMap = {};
    this.destroy$ = new Subject();
    this.hostFlexStyle = null;
    this.dir = "ltr";
    this.nzFlex = null;
    this.nzSpan = null;
    this.nzOrder = null;
    this.nzOffset = null;
    this.nzPush = null;
    this.nzPull = null;
    this.nzXs = null;
    this.nzSm = null;
    this.nzMd = null;
    this.nzLg = null;
    this.nzXl = null;
    this.nzXXl = null;
  }
  ngOnInit() {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.setHostClassMap();
    });
    this.setHostClassMap();
    this.setHostFlexStyle();
  }
  ngOnChanges(changes) {
    this.setHostClassMap();
    const {
      nzFlex
    } = changes;
    if (nzFlex) {
      this.setHostFlexStyle();
    }
  }
  ngAfterViewInit() {
    if (this.nzRowDirective) {
      this.nzRowDirective.actualGutter$.pipe(takeUntil(this.destroy$)).subscribe(([horizontalGutter, verticalGutter]) => {
        const renderGutter = (name, gutter) => {
          const nativeElement = this.elementRef.nativeElement;
          if (gutter !== null) {
            this.renderer.setStyle(nativeElement, name, `${gutter / 2}px`);
          }
        };
        renderGutter("padding-left", horizontalGutter);
        renderGutter("padding-right", horizontalGutter);
        renderGutter("padding-top", verticalGutter);
        renderGutter("padding-bottom", verticalGutter);
      });
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzColDirective.\u0275fac = function NzColDirective_Factory(t) {
  return new (t || _NzColDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NzRowDirective, 9), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Directionality, 8));
};
_NzColDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzColDirective,
  selectors: [["", "nz-col", ""], ["nz-col"], ["nz-form-control"], ["nz-form-label"]],
  hostVars: 2,
  hostBindings: function NzColDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("flex", ctx.hostFlexStyle);
    }
  },
  inputs: {
    nzFlex: "nzFlex",
    nzSpan: "nzSpan",
    nzOrder: "nzOrder",
    nzOffset: "nzOffset",
    nzPush: "nzPush",
    nzPull: "nzPull",
    nzXs: "nzXs",
    nzSm: "nzSm",
    nzMd: "nzMd",
    nzLg: "nzLg",
    nzXl: "nzXl",
    nzXXl: "nzXXl"
  },
  exportAs: ["nzCol"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var NzColDirective = _NzColDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzColDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-col],nz-col,nz-form-control,nz-form-label",
      exportAs: "nzCol",
      host: {
        "[style.flex]": "hostFlexStyle"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NzRowDirective,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: Renderer2
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzFlex: [{
      type: Input
    }],
    nzSpan: [{
      type: Input
    }],
    nzOrder: [{
      type: Input
    }],
    nzOffset: [{
      type: Input
    }],
    nzPush: [{
      type: Input
    }],
    nzPull: [{
      type: Input
    }],
    nzXs: [{
      type: Input
    }],
    nzSm: [{
      type: Input
    }],
    nzMd: [{
      type: Input
    }],
    nzLg: [{
      type: Input
    }],
    nzXl: [{
      type: Input
    }],
    nzXXl: [{
      type: Input
    }]
  });
})();
var _NzGridModule = class _NzGridModule {
};
_NzGridModule.\u0275fac = function NzGridModule_Factory(t) {
  return new (t || _NzGridModule)();
};
_NzGridModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzGridModule
});
_NzGridModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzGridModule = _NzGridModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzGridModule, [{
    type: NgModule,
    args: [{
      imports: [NzColDirective, NzRowDirective],
      exports: [NzColDirective, NzRowDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-form.mjs
var _c03 = ["*"];
var _c13 = (a0) => [a0];
var _c22 = (a0) => ({
  $implicit: a0
});
function NzFormControlComponent_Conditional_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.innerTip);
  }
}
function NzFormControlComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275template(2, NzFormControlComponent_Conditional_3_ng_container_2_Template, 2, 1, "ng-container", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@helpMotion", void 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c13, "ant-form-item-explain-" + ctx_r0.status));
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.innerTip)("nzStringTemplateOutletContext", \u0275\u0275pureFunction1(6, _c22, ctx_r0.validateControl));
  }
}
function NzFormControlComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzExtra);
  }
}
function NzFormControlComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275template(1, NzFormControlComponent_Conditional_4_ng_container_1_Template, 2, 1, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r0.nzExtra);
  }
}
function NzFormLabelComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "span", 2);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const tooltipIconType_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("nzType", tooltipIconType_r1)("nzTheme", ctx_r1.tooltipIcon.theme);
  }
}
function NzFormLabelComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275template(1, NzFormLabelComponent_Conditional_2_ng_container_1_Template, 2, 2, "ng-container", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("nzTooltipTitle", ctx_r1.nzTooltipTitle);
    \u0275\u0275advance();
    \u0275\u0275property("nzStringTemplateOutlet", ctx_r1.tooltipIcon.type);
  }
}
var _NzFormItemComponent = class _NzFormItemComponent {
  setWithHelpViaTips(value) {
    this.withHelpClass = value;
    this.cdr.markForCheck();
  }
  setStatus(status) {
    this.status = status;
    this.cdr.markForCheck();
  }
  setHasFeedback(hasFeedback) {
    this.hasFeedback = hasFeedback;
    this.cdr.markForCheck();
  }
  constructor(cdr) {
    this.cdr = cdr;
    this.status = "";
    this.hasFeedback = false;
    this.withHelpClass = false;
    this.destroy$ = new Subject();
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormItemComponent.\u0275fac = function NzFormItemComponent_Factory(t) {
  return new (t || _NzFormItemComponent)(\u0275\u0275directiveInject(ChangeDetectorRef));
};
_NzFormItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFormItemComponent,
  selectors: [["nz-form-item"]],
  hostAttrs: [1, "ant-form-item"],
  hostVars: 12,
  hostBindings: function NzFormItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-form-item-has-success", ctx.status === "success")("ant-form-item-has-warning", ctx.status === "warning")("ant-form-item-has-error", ctx.status === "error")("ant-form-item-is-validating", ctx.status === "validating")("ant-form-item-has-feedback", ctx.hasFeedback && ctx.status)("ant-form-item-with-help", ctx.withHelpClass);
    }
  },
  exportAs: ["nzFormItem"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzFormItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormItemComponent = _NzFormItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormItemComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-item",
      exportAs: "nzFormItem",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-form-item",
        "[class.ant-form-item-has-success]": 'status === "success"',
        "[class.ant-form-item-has-warning]": 'status === "warning"',
        "[class.ant-form-item-has-error]": 'status === "error"',
        "[class.ant-form-item-is-validating]": 'status === "validating"',
        "[class.ant-form-item-has-feedback]": "hasFeedback && status",
        "[class.ant-form-item-with-help]": "withHelpClass"
      },
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], null);
})();
var NZ_CONFIG_MODULE_NAME3 = "form";
var DefaultTooltipIcon = {
  type: "question-circle",
  theme: "outline"
};
var _NzFormDirective = class _NzFormDirective {
  getInputObservable(changeType) {
    return this.inputChanges$.pipe(filter((changes) => changeType in changes), map((value) => value[changeType]));
  }
  constructor(nzConfigService, directionality) {
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME3;
    this.nzLayout = "horizontal";
    this.nzNoColon = false;
    this.nzAutoTips = {};
    this.nzDisableAutoTips = false;
    this.nzTooltipIcon = DefaultTooltipIcon;
    this.nzLabelAlign = "right";
    this.nzLabelWrap = false;
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.inputChanges$ = new Subject();
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
    });
  }
  ngOnChanges(changes) {
    this.inputChanges$.next(changes);
  }
  ngOnDestroy() {
    this.inputChanges$.complete();
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormDirective.\u0275fac = function NzFormDirective_Factory(t) {
  return new (t || _NzFormDirective)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(Directionality, 8));
};
_NzFormDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzFormDirective,
  selectors: [["", "nz-form", ""]],
  hostAttrs: [1, "ant-form"],
  hostVars: 8,
  hostBindings: function NzFormDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-form-horizontal", ctx.nzLayout === "horizontal")("ant-form-vertical", ctx.nzLayout === "vertical")("ant-form-inline", ctx.nzLayout === "inline")("ant-form-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzLayout: "nzLayout",
    nzNoColon: "nzNoColon",
    nzAutoTips: "nzAutoTips",
    nzDisableAutoTips: "nzDisableAutoTips",
    nzTooltipIcon: "nzTooltipIcon",
    nzLabelAlign: "nzLabelAlign",
    nzLabelWrap: "nzLabelWrap"
  },
  exportAs: ["nzForm"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var NzFormDirective = _NzFormDirective;
__decorate([WithConfig(), InputBoolean()], NzFormDirective.prototype, "nzNoColon", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzAutoTips", void 0);
__decorate([InputBoolean()], NzFormDirective.prototype, "nzDisableAutoTips", void 0);
__decorate([WithConfig()], NzFormDirective.prototype, "nzTooltipIcon", void 0);
__decorate([WithConfig(), InputBoolean()], NzFormDirective.prototype, "nzLabelWrap", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-form]",
      exportAs: "nzForm",
      host: {
        class: "ant-form",
        "[class.ant-form-horizontal]": `nzLayout === 'horizontal'`,
        "[class.ant-form-vertical]": `nzLayout === 'vertical'`,
        "[class.ant-form-inline]": `nzLayout === 'inline'`,
        "[class.ant-form-rtl]": `dir === 'rtl'`
      },
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzLayout: [{
      type: Input
    }],
    nzNoColon: [{
      type: Input
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input
    }]
  });
})();
var _NzFormControlComponent = class _NzFormControlComponent {
  get disableAutoTips() {
    return this.nzDisableAutoTips !== "default" ? toBoolean(this.nzDisableAutoTips) : this.nzFormDirective?.nzDisableAutoTips;
  }
  set nzHasFeedback(value) {
    this._hasFeedback = toBoolean(value);
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this._hasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setHasFeedback(this._hasFeedback);
    }
  }
  get nzHasFeedback() {
    return this._hasFeedback;
  }
  set nzValidateStatus(value) {
    if (value instanceof AbstractControl || value instanceof NgModel) {
      this.validateControl = value;
      this.validateString = null;
      this.watchControl();
    } else if (value instanceof FormControlName) {
      this.validateControl = value.control;
      this.validateString = null;
      this.watchControl();
    } else {
      this.validateString = value;
      this.validateControl = null;
      this.setStatus();
    }
  }
  watchControl() {
    this.validateChanges.unsubscribe();
    if (this.validateControl && this.validateControl.statusChanges) {
      this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null), takeUntil(this.destroyed$)).subscribe(() => {
        if (!this.disableAutoTips) {
          this.updateAutoErrorTip();
        }
        this.setStatus();
        this.cdr.markForCheck();
      });
    }
  }
  setStatus() {
    this.status = this.getControlStatus(this.validateString);
    this.innerTip = this.getInnerTip(this.status);
    this.nzFormStatusService.formStatusChanges.next({
      status: this.status,
      hasFeedback: this.nzHasFeedback
    });
    if (this.nzFormItemComponent) {
      this.nzFormItemComponent.setWithHelpViaTips(!!this.innerTip);
      this.nzFormItemComponent.setStatus(this.status);
    }
  }
  getControlStatus(validateString) {
    let status;
    if (validateString === "warning" || this.validateControlStatus("INVALID", "warning")) {
      status = "warning";
    } else if (validateString === "error" || this.validateControlStatus("INVALID")) {
      status = "error";
    } else if (validateString === "validating" || validateString === "pending" || this.validateControlStatus("PENDING")) {
      status = "validating";
    } else if (validateString === "success" || this.validateControlStatus("VALID")) {
      status = "success";
    } else {
      status = "";
    }
    return status;
  }
  validateControlStatus(validStatus, statusType) {
    if (!this.validateControl) {
      return false;
    } else {
      const {
        dirty,
        touched,
        status
      } = this.validateControl;
      return (!!dirty || !!touched) && (statusType ? this.validateControl.hasError(statusType) : status === validStatus);
    }
  }
  getInnerTip(status) {
    switch (status) {
      case "error":
        return !this.disableAutoTips && this.autoErrorTip || this.nzErrorTip || null;
      case "validating":
        return this.nzValidatingTip || null;
      case "success":
        return this.nzSuccessTip || null;
      case "warning":
        return this.nzWarningTip || null;
      default:
        return null;
    }
  }
  updateAutoErrorTip() {
    if (this.validateControl) {
      const errors = this.validateControl.errors || {};
      let autoErrorTip = "";
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          autoErrorTip = errors[key]?.[this.localeId] ?? this.nzAutoTips?.[this.localeId]?.[key] ?? this.nzAutoTips.default?.[key] ?? this.nzFormDirective?.nzAutoTips?.[this.localeId]?.[key] ?? this.nzFormDirective?.nzAutoTips.default?.[key];
        }
        if (!!autoErrorTip) {
          break;
        }
      }
      this.autoErrorTip = autoErrorTip;
    }
  }
  subscribeAutoTips(observable) {
    observable?.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      if (!this.disableAutoTips) {
        this.updateAutoErrorTip();
        this.setStatus();
        this.cdr.markForCheck();
      }
    });
  }
  constructor(nzFormItemComponent, cdr, i18n, nzFormDirective, nzFormStatusService) {
    this.nzFormItemComponent = nzFormItemComponent;
    this.cdr = cdr;
    this.nzFormDirective = nzFormDirective;
    this.nzFormStatusService = nzFormStatusService;
    this._hasFeedback = false;
    this.validateChanges = Subscription.EMPTY;
    this.validateString = null;
    this.destroyed$ = new Subject();
    this.status = "";
    this.validateControl = null;
    this.innerTip = null;
    this.nzAutoTips = {};
    this.nzDisableAutoTips = "default";
    this.subscribeAutoTips(i18n.localeChange.pipe(tap((locale) => this.localeId = locale.locale)));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzAutoTips"));
    this.subscribeAutoTips(this.nzFormDirective?.getInputObservable("nzDisableAutoTips").pipe(filter(() => this.nzDisableAutoTips === "default")));
  }
  ngOnChanges(changes) {
    const {
      nzDisableAutoTips,
      nzAutoTips,
      nzSuccessTip,
      nzWarningTip,
      nzErrorTip,
      nzValidatingTip
    } = changes;
    if (nzDisableAutoTips || nzAutoTips) {
      this.updateAutoErrorTip();
      this.setStatus();
    } else if (nzSuccessTip || nzWarningTip || nzErrorTip || nzValidatingTip) {
      this.setStatus();
    }
  }
  ngOnInit() {
    this.setStatus();
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  ngAfterContentInit() {
    if (!this.validateControl && !this.validateString) {
      if (this.defaultValidateControl instanceof FormControlDirective) {
        this.nzValidateStatus = this.defaultValidateControl.control;
      } else {
        this.nzValidateStatus = this.defaultValidateControl;
      }
    }
  }
};
_NzFormControlComponent.\u0275fac = function NzFormControlComponent_Factory(t) {
  return new (t || _NzFormControlComponent)(\u0275\u0275directiveInject(NzFormItemComponent, 9), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzI18nService), \u0275\u0275directiveInject(NzFormDirective, 8), \u0275\u0275directiveInject(NzFormStatusService));
};
_NzFormControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFormControlComponent,
  selectors: [["nz-form-control"]],
  contentQueries: function NzFormControlComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NgControl, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.defaultValidateControl = _t.first);
    }
  },
  hostAttrs: [1, "ant-form-item-control"],
  inputs: {
    nzSuccessTip: "nzSuccessTip",
    nzWarningTip: "nzWarningTip",
    nzErrorTip: "nzErrorTip",
    nzValidatingTip: "nzValidatingTip",
    nzExtra: "nzExtra",
    nzAutoTips: "nzAutoTips",
    nzDisableAutoTips: "nzDisableAutoTips",
    nzHasFeedback: "nzHasFeedback",
    nzValidateStatus: "nzValidateStatus"
  },
  exportAs: ["nzFormControl"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzFormStatusService]), \u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 5,
  vars: 2,
  consts: [[1, "ant-form-item-control-input"], [1, "ant-form-item-control-input-content"], [1, "ant-form-item-explain", "ant-form-item-explain-connected"], [1, "ant-form-item-extra"], ["role", "alert", 3, "ngClass"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], [4, "nzStringTemplateOutlet"]],
  template: function NzFormControlComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275projection(2);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(3, NzFormControlComponent_Conditional_3_Template, 3, 8, "div", 2)(4, NzFormControlComponent_Conditional_4_Template, 2, 1, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275conditional(3, ctx.innerTip ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(4, ctx.nzExtra ? 4 : -1);
    }
  },
  dependencies: [NgClass, NzOutletModule, NzStringTemplateOutletDirective],
  encapsulation: 2,
  data: {
    animation: [helpMotion]
  },
  changeDetection: 0
});
var NzFormControlComponent = _NzFormControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormControlComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-control",
      exportAs: "nzFormControl",
      preserveWhitespaces: false,
      animations: [helpMotion],
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="ant-form-item-control-input">
      <div class="ant-form-item-control-input-content">
        <ng-content></ng-content>
      </div>
    </div>
    @if (innerTip) {
      <div @helpMotion class="ant-form-item-explain ant-form-item-explain-connected">
        <div role="alert" [ngClass]="['ant-form-item-explain-' + status]">
          <ng-container *nzStringTemplateOutlet="innerTip; context: { $implicit: validateControl }">{{
            innerTip
          }}</ng-container>
        </div>
      </div>
    }

    @if (nzExtra) {
      <div class="ant-form-item-extra">
        <ng-container *nzStringTemplateOutlet="nzExtra">{{ nzExtra }}</ng-container>
      </div>
    }
  `,
      providers: [NzFormStatusService],
      host: {
        class: "ant-form-item-control"
      },
      imports: [NgClass, NzOutletModule],
      standalone: true
    }]
  }], () => [{
    type: NzFormItemComponent,
    decorators: [{
      type: Optional
    }, {
      type: Host
    }]
  }, {
    type: ChangeDetectorRef
  }, {
    type: NzI18nService
  }, {
    type: NzFormDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NzFormStatusService
  }], {
    defaultValidateControl: [{
      type: ContentChild,
      args: [NgControl, {
        static: false
      }]
    }],
    nzSuccessTip: [{
      type: Input
    }],
    nzWarningTip: [{
      type: Input
    }],
    nzErrorTip: [{
      type: Input
    }],
    nzValidatingTip: [{
      type: Input
    }],
    nzExtra: [{
      type: Input
    }],
    nzAutoTips: [{
      type: Input
    }],
    nzDisableAutoTips: [{
      type: Input
    }],
    nzHasFeedback: [{
      type: Input
    }],
    nzValidateStatus: [{
      type: Input
    }]
  });
})();
function toTooltipIcon(value) {
  const icon = typeof value === "string" ? {
    type: value
  } : value;
  return __spreadValues(__spreadValues({}, DefaultTooltipIcon), icon);
}
var _NzFormLabelComponent = class _NzFormLabelComponent {
  set nzNoColon(value) {
    this.noColon = toBoolean(value);
  }
  get nzNoColon() {
    return this.noColon !== "default" ? this.noColon : this.nzFormDirective?.nzNoColon;
  }
  set nzTooltipIcon(value) {
    this._tooltipIcon = toTooltipIcon(value);
  }
  // due to 'get' and 'set' accessor must have the same type, so it was renamed to `tooltipIcon`
  get tooltipIcon() {
    return this._tooltipIcon !== "default" ? this._tooltipIcon : toTooltipIcon(this.nzFormDirective?.nzTooltipIcon || DefaultTooltipIcon);
  }
  set nzLabelAlign(value) {
    this.labelAlign = value;
  }
  get nzLabelAlign() {
    return this.labelAlign !== "default" ? this.labelAlign : this.nzFormDirective?.nzLabelAlign || "right";
  }
  set nzLabelWrap(value) {
    this.labelWrap = toBoolean(value);
  }
  get nzLabelWrap() {
    return this.labelWrap !== "default" ? this.labelWrap : this.nzFormDirective?.nzLabelWrap;
  }
  constructor(cdr, nzFormDirective) {
    this.cdr = cdr;
    this.nzFormDirective = nzFormDirective;
    this.nzRequired = false;
    this.noColon = "default";
    this._tooltipIcon = "default";
    this.labelAlign = "default";
    this.labelWrap = "default";
    this.destroy$ = new Subject();
    if (this.nzFormDirective) {
      this.nzFormDirective.getInputObservable("nzNoColon").pipe(filter(() => this.noColon === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzTooltipIcon").pipe(filter(() => this._tooltipIcon === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelAlign").pipe(filter(() => this.labelAlign === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
      this.nzFormDirective.getInputObservable("nzLabelWrap").pipe(filter(() => this.labelWrap === "default"), takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    }
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
};
_NzFormLabelComponent.\u0275fac = function NzFormLabelComponent_Factory(t) {
  return new (t || _NzFormLabelComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NzFormDirective, 12));
};
_NzFormLabelComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFormLabelComponent,
  selectors: [["nz-form-label"]],
  hostAttrs: [1, "ant-form-item-label"],
  hostVars: 4,
  hostBindings: function NzFormLabelComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-form-item-label-left", ctx.nzLabelAlign === "left")("ant-form-item-label-wrap", ctx.nzLabelWrap);
    }
  },
  inputs: {
    nzFor: "nzFor",
    nzRequired: "nzRequired",
    nzNoColon: "nzNoColon",
    nzTooltipTitle: "nzTooltipTitle",
    nzTooltipIcon: "nzTooltipIcon",
    nzLabelAlign: "nzLabelAlign",
    nzLabelWrap: "nzLabelWrap"
  },
  exportAs: ["nzFormLabel"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 3,
  vars: 6,
  consts: [["nz-tooltip", "", 1, "ant-form-item-tooltip", 3, "nzTooltipTitle"], [4, "nzStringTemplateOutlet"], ["nz-icon", "", 3, "nzType", "nzTheme"]],
  template: function NzFormLabelComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "label");
      \u0275\u0275projection(1);
      \u0275\u0275template(2, NzFormLabelComponent_Conditional_2_Template, 2, 2, "span", 0);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classProp("ant-form-item-no-colon", ctx.nzNoColon)("ant-form-item-required", ctx.nzRequired);
      \u0275\u0275attribute("for", ctx.nzFor);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(2, ctx.nzTooltipTitle ? 2 : -1);
    }
  },
  dependencies: [NzOutletModule, NzStringTemplateOutletDirective, NzTooltipDirective, NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzFormLabelComponent = _NzFormLabelComponent;
__decorate([InputBoolean()], NzFormLabelComponent.prototype, "nzRequired", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormLabelComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-label",
      exportAs: "nzFormLabel",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <label [attr.for]="nzFor" [class.ant-form-item-no-colon]="nzNoColon" [class.ant-form-item-required]="nzRequired">
      <ng-content></ng-content>
      @if (nzTooltipTitle) {
        <span class="ant-form-item-tooltip" nz-tooltip [nzTooltipTitle]="nzTooltipTitle">
          <ng-container *nzStringTemplateOutlet="tooltipIcon.type; let tooltipIconType">
            <span nz-icon [nzType]="tooltipIconType" [nzTheme]="tooltipIcon.theme"></span>
          </ng-container>
        </span>
      }
    </label>
  `,
      host: {
        class: "ant-form-item-label",
        "[class.ant-form-item-label-left]": `nzLabelAlign === 'left'`,
        "[class.ant-form-item-label-wrap]": `nzLabelWrap`
      },
      imports: [NzOutletModule, NzTooltipDirective, NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: NzFormDirective,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }], {
    nzFor: [{
      type: Input
    }],
    nzRequired: [{
      type: Input
    }],
    nzNoColon: [{
      type: Input
    }],
    nzTooltipTitle: [{
      type: Input
    }],
    nzTooltipIcon: [{
      type: Input
    }],
    nzLabelAlign: [{
      type: Input
    }],
    nzLabelWrap: [{
      type: Input
    }]
  });
})();
var _NzFormSplitComponent = class _NzFormSplitComponent {
};
_NzFormSplitComponent.\u0275fac = function NzFormSplitComponent_Factory(t) {
  return new (t || _NzFormSplitComponent)();
};
_NzFormSplitComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFormSplitComponent,
  selectors: [["nz-form-split"]],
  hostAttrs: [1, "ant-form-split"],
  exportAs: ["nzFormSplit"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzFormSplitComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormSplitComponent = _NzFormSplitComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormSplitComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-split",
      exportAs: "nzFormSplit",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-split"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzFormTextComponent = class _NzFormTextComponent {
};
_NzFormTextComponent.\u0275fac = function NzFormTextComponent_Factory(t) {
  return new (t || _NzFormTextComponent)();
};
_NzFormTextComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzFormTextComponent,
  selectors: [["nz-form-text"]],
  hostAttrs: [1, "ant-form-text"],
  exportAs: ["nzFormText"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function NzFormTextComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzFormTextComponent = _NzFormTextComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormTextComponent, [{
    type: Component,
    args: [{
      selector: "nz-form-text",
      exportAs: "nzFormText",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: ` <ng-content></ng-content> `,
      host: {
        class: "ant-form-text"
      },
      standalone: true
    }]
  }], null, null);
})();
var _NzFormModule = class _NzFormModule {
};
_NzFormModule.\u0275fac = function NzFormModule_Factory(t) {
  return new (t || _NzFormModule)();
};
_NzFormModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzFormModule
});
_NzFormModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzFormLabelComponent, NzFormControlComponent, NzGridModule]
});
var NzFormModule = _NzFormModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzFormModule, [{
    type: NgModule,
    args: [{
      imports: [NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent],
      exports: [NzGridModule, NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormTextComponent, NzFormSplitComponent]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-cdk-resize-observer.mjs
var _NzResizeObserverFactory = class _NzResizeObserverFactory {
  create(callback) {
    return typeof ResizeObserver === "undefined" ? null : new ResizeObserver(callback);
  }
};
_NzResizeObserverFactory.\u0275fac = function NzResizeObserverFactory_Factory(t) {
  return new (t || _NzResizeObserverFactory)();
};
_NzResizeObserverFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NzResizeObserverFactory,
  factory: _NzResizeObserverFactory.\u0275fac,
  providedIn: "root"
});
var NzResizeObserverFactory = _NzResizeObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _NzResizeObserver = class _NzResizeObserver {
  constructor(nzResizeObserverFactory) {
    this.nzResizeObserverFactory = nzResizeObserverFactory;
    this.observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this.observedElements.forEach((_, element) => this.cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this.observeElement(element);
      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this.unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing ResizeObserver if available, or creating a
   * new one if not.
   */
  observeElement(element) {
    if (!this.observedElements.has(element)) {
      const stream = new Subject();
      const observer = this.nzResizeObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element);
      }
      this.observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this.observedElements.get(element).count++;
    }
    return this.observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying ResizeObserver if nobody else is
   * observing this element.
   */
  unobserveElement(element) {
    if (this.observedElements.has(element)) {
      this.observedElements.get(element).count--;
      if (!this.observedElements.get(element).count) {
        this.cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying ResizeObserver for the specified element. */
  cleanupObserver(element) {
    if (this.observedElements.has(element)) {
      const {
        observer,
        stream
      } = this.observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this.observedElements.delete(element);
    }
  }
};
_NzResizeObserver.\u0275fac = function NzResizeObserver_Factory(t) {
  return new (t || _NzResizeObserver)(\u0275\u0275inject(NzResizeObserverFactory));
};
_NzResizeObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NzResizeObserver,
  factory: _NzResizeObserver.\u0275fac,
  providedIn: "root"
});
var NzResizeObserver = _NzResizeObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NzResizeObserverFactory
  }], null);
})();
var _NzResizeObserverDirective = class _NzResizeObserverDirective {
  subscribe() {
    this.unsubscribe();
    this.currentSubscription = this.nzResizeObserver.observe(this.elementRef).subscribe(this.nzResizeObserve);
  }
  unsubscribe() {
    this.currentSubscription?.unsubscribe();
  }
  constructor(nzResizeObserver, elementRef) {
    this.nzResizeObserver = nzResizeObserver;
    this.elementRef = elementRef;
    this.nzResizeObserve = new EventEmitter();
    this.nzResizeObserverDisabled = false;
    this.currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this.currentSubscription && !this.nzResizeObserverDisabled) {
      this.subscribe();
    }
  }
  ngOnDestroy() {
    this.unsubscribe();
  }
  ngOnChanges(changes) {
    const {
      nzResizeObserve
    } = changes;
    if (nzResizeObserve) {
      if (this.nzResizeObserverDisabled) {
        this.unsubscribe();
      } else {
        this.subscribe();
      }
    }
  }
};
_NzResizeObserverDirective.\u0275fac = function NzResizeObserverDirective_Factory(t) {
  return new (t || _NzResizeObserverDirective)(\u0275\u0275directiveInject(NzResizeObserver), \u0275\u0275directiveInject(ElementRef));
};
_NzResizeObserverDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzResizeObserverDirective,
  selectors: [["", "nzResizeObserver", ""]],
  inputs: {
    nzResizeObserverDisabled: "nzResizeObserverDisabled"
  },
  outputs: {
    nzResizeObserve: "nzResizeObserve"
  },
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([NzResizeObserverFactory]), \u0275\u0275NgOnChangesFeature]
});
var NzResizeObserverDirective = _NzResizeObserverDirective;
__decorate([InputBoolean()], NzResizeObserverDirective.prototype, "nzResizeObserverDisabled", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverDirective, [{
    type: Directive,
    args: [{
      selector: "[nzResizeObserver]",
      standalone: true,
      providers: [NzResizeObserverFactory]
    }]
  }], () => [{
    type: NzResizeObserver
  }, {
    type: ElementRef
  }], {
    nzResizeObserve: [{
      type: Output
    }],
    nzResizeObserverDisabled: [{
      type: Input
    }]
  });
})();
var _NzResizeObserverModule = class _NzResizeObserverModule {
};
_NzResizeObserverModule.\u0275fac = function NzResizeObserverModule_Factory(t) {
  return new (t || _NzResizeObserverModule)();
};
_NzResizeObserverModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzResizeObserverModule
});
_NzResizeObserverModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzResizeObserverModule = _NzResizeObserverModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzResizeObserverModule, [{
    type: NgModule,
    args: [{
      imports: [NzResizeObserverDirective],
      exports: [NzResizeObserverDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-spin.mjs
var _c04 = ["*"];
function NzSpinComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275element(1, "i", 4)(2, "i", 4)(3, "i", 4)(4, "i", 4);
    \u0275\u0275elementEnd();
  }
}
function NzSpinComponent_div_2_ng_template_2_Template(rf, ctx) {
}
function NzSpinComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.nzTip);
  }
}
function NzSpinComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 5);
    \u0275\u0275template(2, NzSpinComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6)(3, NzSpinComponent_div_2_div_3_Template, 2, 1, "div", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const defaultTemplate_r2 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275classProp("ant-spin-rtl", ctx_r0.dir === "rtl")("ant-spin-spinning", ctx_r0.isLoading)("ant-spin-lg", ctx_r0.nzSize === "large")("ant-spin-sm", ctx_r0.nzSize === "small")("ant-spin-show-text", ctx_r0.nzTip);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.nzIndicator || defaultTemplate_r2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.nzTip);
  }
}
function NzSpinComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("ant-spin-blur", ctx_r0.isLoading);
  }
}
var NZ_CONFIG_MODULE_NAME4 = "spin";
var _NzSpinComponent = class _NzSpinComponent {
  constructor(nzConfigService, cdr, directionality) {
    this.nzConfigService = nzConfigService;
    this.cdr = cdr;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME4;
    this.nzIndicator = null;
    this.nzSize = "default";
    this.nzTip = null;
    this.nzDelay = 0;
    this.nzSimple = false;
    this.nzSpinning = true;
    this.destroy$ = new Subject();
    this.spinning$ = new BehaviorSubject(this.nzSpinning);
    this.delay$ = new ReplaySubject(1);
    this.isLoading = false;
    this.dir = "ltr";
  }
  ngOnInit() {
    const loading$ = this.delay$.pipe(startWith(this.nzDelay), distinctUntilChanged(), switchMap((delay) => {
      if (delay === 0) {
        return this.spinning$;
      }
      return this.spinning$.pipe(debounce((spinning) => timer(spinning ? delay : 0)));
    }), takeUntil(this.destroy$));
    loading$.subscribe((loading) => {
      this.isLoading = loading;
      this.cdr.markForCheck();
    });
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME4).pipe(takeUntil(this.destroy$)).subscribe(() => this.cdr.markForCheck());
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
  }
  ngOnChanges(changes) {
    const {
      nzSpinning,
      nzDelay
    } = changes;
    if (nzSpinning) {
      this.spinning$.next(this.nzSpinning);
    }
    if (nzDelay) {
      this.delay$.next(this.nzDelay);
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzSpinComponent.\u0275fac = function NzSpinComponent_Factory(t) {
  return new (t || _NzSpinComponent)(\u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Directionality, 8));
};
_NzSpinComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzSpinComponent,
  selectors: [["nz-spin"]],
  hostVars: 2,
  hostBindings: function NzSpinComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-spin-nested-loading", !ctx.nzSimple);
    }
  },
  inputs: {
    nzIndicator: "nzIndicator",
    nzSize: "nzSize",
    nzTip: "nzTip",
    nzDelay: "nzDelay",
    nzSimple: "nzSimple",
    nzSpinning: "nzSpinning"
  },
  exportAs: ["nzSpin"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c04,
  decls: 4,
  vars: 2,
  consts: [["defaultTemplate", ""], [4, "ngIf"], ["class", "ant-spin-container", 3, "ant-spin-blur", 4, "ngIf"], [1, "ant-spin-dot", "ant-spin-dot-spin"], [1, "ant-spin-dot-item"], [1, "ant-spin"], [3, "ngTemplateOutlet"], ["class", "ant-spin-text", 4, "ngIf"], [1, "ant-spin-text"], [1, "ant-spin-container"]],
  template: function NzSpinComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzSpinComponent_ng_template_0_Template, 5, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, NzSpinComponent_div_2_Template, 4, 12, "div", 1)(3, NzSpinComponent_div_3_Template, 2, 2, "div", 2);
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.nzSimple);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
var NzSpinComponent = _NzSpinComponent;
__decorate([WithConfig()], NzSpinComponent.prototype, "nzIndicator", void 0);
__decorate([InputNumber()], NzSpinComponent.prototype, "nzDelay", void 0);
__decorate([InputBoolean()], NzSpinComponent.prototype, "nzSimple", void 0);
__decorate([InputBoolean()], NzSpinComponent.prototype, "nzSpinning", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinComponent, [{
    type: Component,
    args: [{
      selector: "nz-spin",
      exportAs: "nzSpin",
      preserveWhitespaces: false,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    <ng-template #defaultTemplate>
      <span class="ant-spin-dot ant-spin-dot-spin">
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
        <i class="ant-spin-dot-item"></i>
      </span>
    </ng-template>
    <div *ngIf="isLoading">
      <div
        class="ant-spin"
        [class.ant-spin-rtl]="dir === 'rtl'"
        [class.ant-spin-spinning]="isLoading"
        [class.ant-spin-lg]="nzSize === 'large'"
        [class.ant-spin-sm]="nzSize === 'small'"
        [class.ant-spin-show-text]="nzTip"
      >
        <ng-template [ngTemplateOutlet]="nzIndicator || defaultTemplate"></ng-template>
        <div class="ant-spin-text" *ngIf="nzTip">{{ nzTip }}</div>
      </div>
    </div>
    <div *ngIf="!nzSimple" class="ant-spin-container" [class.ant-spin-blur]="isLoading">
      <ng-content></ng-content>
    </div>
  `,
      host: {
        "[class.ant-spin-nested-loading]": "!nzSimple"
      },
      imports: [NgIf, NgTemplateOutlet],
      standalone: true
    }]
  }], () => [{
    type: NzConfigService
  }, {
    type: ChangeDetectorRef
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIndicator: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }],
    nzTip: [{
      type: Input
    }],
    nzDelay: [{
      type: Input
    }],
    nzSimple: [{
      type: Input
    }],
    nzSpinning: [{
      type: Input
    }]
  });
})();
var _NzSpinModule = class _NzSpinModule {
};
_NzSpinModule.\u0275fac = function NzSpinModule_Factory(t) {
  return new (t || _NzSpinModule)();
};
_NzSpinModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzSpinModule
});
_NzSpinModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzSpinModule = _NzSpinModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzSpinModule, [{
    type: NgModule,
    args: [{
      imports: [NzSpinComponent],
      exports: [NzSpinComponent]
    }]
  }], null, null);
})();

export {
  NzEmbedEmptyComponent,
  NzEmptyModule,
  NzResizeObserver,
  NzOptionComponent,
  NzSelectComponent,
  NzSelectModule,
  NzSpinComponent,
  NzSpinModule,
  NzCollapseComponent,
  NzCollapsePanelComponent,
  NzCollapseModule,
  NzRowDirective,
  NzColDirective,
  NzGridModule,
  NzFormItemComponent,
  NzFormDirective,
  NzFormLabelComponent,
  NzFormModule,
  NzMessageModule,
  NzMessageService,
  environment,
  CompanyService,
  PackageService,
  DocsService
};
//# sourceMappingURL=chunk-DIVX4RWM.js.map
