import {
  Directionality,
  InputBoolean,
  NzConfigService,
  NzIconDirective,
  NzIconModule,
  Platform,
  WithConfig
} from "./chunk-5A5HIE3N.js";
import {
  ANIMATION_MODULE_TYPE,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  PLATFORM_ID,
  Renderer2,
  Subject,
  ViewEncapsulation$1,
  __decorate,
  filter,
  fromEvent,
  makeEnvironmentProviders,
  setClassMetadata,
  startWith,
  takeUntil,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
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
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵqueryRefresh,
  ɵɵtemplate
} from "./chunk-M5MRYH5D.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-transition-patch.mjs
var _NzTransitionPatchDirective = class _NzTransitionPatchDirective {
  setHiddenAttribute() {
    if (this.hidden) {
      if (typeof this.hidden === "string") {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", this.hidden);
      } else {
        this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
      }
    } else {
      this.renderer.removeAttribute(this.elementRef.nativeElement, "hidden");
    }
  }
  constructor(elementRef, renderer) {
    this.elementRef = elementRef;
    this.renderer = renderer;
    this.hidden = null;
    this.renderer.setAttribute(this.elementRef.nativeElement, "hidden", "");
  }
  ngOnChanges() {
    this.setHiddenAttribute();
  }
  ngAfterViewInit() {
    this.setHiddenAttribute();
  }
};
_NzTransitionPatchDirective.\u0275fac = function NzTransitionPatchDirective_Factory(t) {
  return new (t || _NzTransitionPatchDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2));
};
_NzTransitionPatchDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzTransitionPatchDirective,
  selectors: [["", "nz-button", ""], ["nz-button-group"], ["", "nz-icon", ""], ["", "nz-menu-item", ""], ["", "nz-submenu", ""], ["nz-select-top-control"], ["nz-select-placeholder"], ["nz-input-group"]],
  inputs: {
    hidden: "hidden"
  },
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature]
});
var NzTransitionPatchDirective = _NzTransitionPatchDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchDirective, [{
    type: Directive,
    args: [{
      selector: "[nz-button], nz-button-group, [nz-icon], [nz-menu-item], [nz-submenu], nz-select-top-control, nz-select-placeholder, nz-input-group",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }], {
    hidden: [{
      type: Input
    }]
  });
})();
var _NzTransitionPatchModule = class _NzTransitionPatchModule {
};
_NzTransitionPatchModule.\u0275fac = function NzTransitionPatchModule_Factory(t) {
  return new (t || _NzTransitionPatchModule)();
};
_NzTransitionPatchModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzTransitionPatchModule
});
_NzTransitionPatchModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var NzTransitionPatchModule = _NzTransitionPatchModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzTransitionPatchModule, [{
    type: NgModule,
    args: [{
      imports: [NzTransitionPatchDirective],
      exports: [NzTransitionPatchDirective]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-wave.mjs
var NzWaveRenderer = class {
  get waveAttributeName() {
    return this.insertExtraNode ? "ant-click-animating" : "ant-click-animating-without-extra-node";
  }
  constructor(triggerElement, ngZone, insertExtraNode, platformId, cspNonce) {
    this.triggerElement = triggerElement;
    this.ngZone = ngZone;
    this.insertExtraNode = insertExtraNode;
    this.platformId = platformId;
    this.cspNonce = cspNonce;
    this.waveTransitionDuration = 400;
    this.styleForPseudo = null;
    this.extraNode = null;
    this.lastTime = 0;
    this.onClick = (event) => {
      if (!this.triggerElement || !this.triggerElement.getAttribute || this.triggerElement.getAttribute("disabled") || event.target.tagName === "INPUT" || this.triggerElement.className.indexOf("disabled") >= 0) {
        return;
      }
      this.fadeOutWave();
    };
    this.platform = new Platform(this.platformId);
    this.clickHandler = this.onClick.bind(this);
    this.bindTriggerEvent();
  }
  bindTriggerEvent() {
    if (this.platform.isBrowser) {
      this.ngZone.runOutsideAngular(() => {
        this.removeTriggerEvent();
        if (this.triggerElement) {
          this.triggerElement.addEventListener("click", this.clickHandler, true);
        }
      });
    }
  }
  removeTriggerEvent() {
    if (this.triggerElement) {
      this.triggerElement.removeEventListener("click", this.clickHandler, true);
    }
  }
  removeStyleAndExtraNode() {
    if (this.styleForPseudo && document.body.contains(this.styleForPseudo)) {
      document.body.removeChild(this.styleForPseudo);
      this.styleForPseudo = null;
    }
    if (this.insertExtraNode && this.triggerElement.contains(this.extraNode)) {
      this.triggerElement.removeChild(this.extraNode);
    }
  }
  destroy() {
    this.removeTriggerEvent();
    this.removeStyleAndExtraNode();
  }
  fadeOutWave() {
    const node = this.triggerElement;
    const waveColor = this.getWaveColor(node);
    node.setAttribute(this.waveAttributeName, "true");
    if (Date.now() < this.lastTime + this.waveTransitionDuration) {
      return;
    }
    if (this.isValidColor(waveColor)) {
      if (!this.styleForPseudo) {
        this.styleForPseudo = document.createElement("style");
        if (this.cspNonce) {
          this.styleForPseudo.nonce = this.cspNonce;
        }
      }
      this.styleForPseudo.innerHTML = `
      [ant-click-animating-without-extra-node='true']::after, .ant-click-animating-node {
        --antd-wave-shadow-color: ${waveColor};
      }`;
      document.body.appendChild(this.styleForPseudo);
    }
    if (this.insertExtraNode) {
      if (!this.extraNode) {
        this.extraNode = document.createElement("div");
      }
      this.extraNode.className = "ant-click-animating-node";
      node.appendChild(this.extraNode);
    }
    this.lastTime = Date.now();
    this.runTimeoutOutsideZone(() => {
      node.removeAttribute(this.waveAttributeName);
      this.removeStyleAndExtraNode();
    }, this.waveTransitionDuration);
  }
  isValidColor(color) {
    return !!color && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && this.isNotGrey(color) && !/rgba\(\d*, \d*, \d*, 0\)/.test(color) && color !== "transparent";
  }
  isNotGrey(color) {
    const match = color.match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);
    if (match && match[1] && match[2] && match[3]) {
      return !(match[1] === match[2] && match[2] === match[3]);
    }
    return true;
  }
  getWaveColor(node) {
    const nodeStyle = getComputedStyle(node);
    return nodeStyle.getPropertyValue("border-top-color") || // Firefox Compatible
    nodeStyle.getPropertyValue("border-color") || nodeStyle.getPropertyValue("background-color");
  }
  runTimeoutOutsideZone(fn, delay) {
    this.ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
};
var NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
  disabled: false
};
var NZ_WAVE_GLOBAL_CONFIG = new InjectionToken("nz-wave-global-options");
function provideNzWave(config) {
  return makeEnvironmentProviders([{
    provide: NZ_WAVE_GLOBAL_CONFIG,
    useValue: config
  }]);
}
var _NzWaveDirective = class _NzWaveDirective {
  get disabled() {
    return this.waveDisabled;
  }
  get rendererRef() {
    return this.waveRenderer;
  }
  constructor(ngZone, elementRef, config, animationType, platformId, cspNonce) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.config = config;
    this.animationType = animationType;
    this.platformId = platformId;
    this.cspNonce = cspNonce;
    this.nzWaveExtraNode = false;
    this.waveDisabled = false;
    this.waveDisabled = this.isConfigDisabled();
  }
  isConfigDisabled() {
    let disabled = false;
    if (this.config && typeof this.config.disabled === "boolean") {
      disabled = this.config.disabled;
    }
    if (this.animationType === "NoopAnimations") {
      disabled = true;
    }
    return disabled;
  }
  ngOnDestroy() {
    if (this.waveRenderer) {
      this.waveRenderer.destroy();
    }
  }
  ngOnInit() {
    this.renderWaveIfEnabled();
  }
  renderWaveIfEnabled() {
    if (!this.waveDisabled && this.elementRef.nativeElement) {
      this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode, this.platformId, this.cspNonce);
    }
  }
  disable() {
    this.waveDisabled = true;
    if (this.waveRenderer) {
      this.waveRenderer.removeTriggerEvent();
      this.waveRenderer.removeStyleAndExtraNode();
    }
  }
  enable() {
    this.waveDisabled = this.isConfigDisabled() || false;
    if (this.waveRenderer) {
      this.waveRenderer.bindTriggerEvent();
    }
  }
};
_NzWaveDirective.\u0275fac = function NzWaveDirective_Factory(t) {
  return new (t || _NzWaveDirective)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NZ_WAVE_GLOBAL_CONFIG, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(CSP_NONCE, 8));
};
_NzWaveDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _NzWaveDirective,
  selectors: [["", "nz-wave", ""], ["button", "nz-button", "", 3, "nzType", "link", 3, "nzType", "text"]],
  inputs: {
    nzWaveExtraNode: "nzWaveExtraNode"
  },
  exportAs: ["nzWave"],
  standalone: true
});
var NzWaveDirective = _NzWaveDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaveDirective, [{
    type: Directive,
    args: [{
      selector: '[nz-wave],button[nz-button]:not([nzType="link"]):not([nzType="text"])',
      exportAs: "nzWave",
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [NZ_WAVE_GLOBAL_CONFIG]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], {
    nzWaveExtraNode: [{
      type: Input
    }]
  });
})();
var _NzWaveModule = class _NzWaveModule {
};
_NzWaveModule.\u0275fac = function NzWaveModule_Factory(t) {
  return new (t || _NzWaveModule)();
};
_NzWaveModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzWaveModule
});
_NzWaveModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)]
});
var NzWaveModule = _NzWaveModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzWaveModule, [{
    type: NgModule,
    args: [{
      imports: [NzWaveDirective],
      exports: [NzWaveDirective],
      providers: [provideNzWave(NZ_WAVE_GLOBAL_DEFAULT_CONFIG)]
    }]
  }], null, null);
})();

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-button.mjs
var _c0 = ["nz-button", ""];
var _c1 = ["*"];
function NzButtonComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
}
var NZ_CONFIG_MODULE_NAME = "button";
var _NzButtonComponent = class _NzButtonComponent {
  insertSpan(nodes, renderer) {
    nodes.forEach((node) => {
      if (node.nodeName === "#text") {
        const span = renderer.createElement("span");
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
  get iconOnly() {
    const listOfNode = Array.from(this.elementRef?.nativeElement?.childNodes || []);
    const noText = listOfNode.every((node) => node.nodeName !== "#text");
    const noSpan = listOfNode.filter((node) => {
      return !(node.nodeName === "#comment" || !!node?.attributes?.getNamedItem("nz-icon"));
    }).length == 0;
    return !!this.nzIconDirectiveElement && noSpan && noText;
  }
  constructor(ngZone, elementRef, cdr, renderer, nzConfigService, directionality) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this.cdr = cdr;
    this.renderer = renderer;
    this.nzConfigService = nzConfigService;
    this.directionality = directionality;
    this._nzModuleName = NZ_CONFIG_MODULE_NAME;
    this.nzBlock = false;
    this.nzGhost = false;
    this.nzSearch = false;
    this.nzLoading = false;
    this.nzDanger = false;
    this.disabled = false;
    this.tabIndex = null;
    this.nzType = null;
    this.nzShape = null;
    this.nzSize = "default";
    this.dir = "ltr";
    this.destroy$ = new Subject();
    this.loading$ = new Subject();
    this.nzConfigService.getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.cdr.markForCheck();
    });
  }
  ngOnInit() {
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
      this.dir = direction;
      this.cdr.detectChanges();
    });
    this.dir = this.directionality.value;
    this.ngZone.runOutsideAngular(() => {
      fromEvent(this.elementRef.nativeElement, "click", {
        capture: true
      }).pipe(takeUntil(this.destroy$)).subscribe((event) => {
        if (this.disabled && event.target?.tagName === "A" || this.nzLoading) {
          event.preventDefault();
          event.stopImmediatePropagation();
        }
      });
    });
  }
  ngOnChanges(changes) {
    const {
      nzLoading
    } = changes;
    if (nzLoading) {
      this.loading$.next(this.nzLoading);
    }
  }
  ngAfterViewInit() {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }
  ngAfterContentInit() {
    this.loading$.pipe(startWith(this.nzLoading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$)).subscribe((loading) => {
      const nativeElement = this.nzIconDirectiveElement.nativeElement;
      if (loading) {
        this.renderer.setStyle(nativeElement, "display", "none");
      } else {
        this.renderer.removeStyle(nativeElement, "display");
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
};
_NzButtonComponent.\u0275fac = function NzButtonComponent_Factory(t) {
  return new (t || _NzButtonComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(NzConfigService), \u0275\u0275directiveInject(Directionality, 8));
};
_NzButtonComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzButtonComponent,
  selectors: [["button", "nz-button", ""], ["a", "nz-button", ""]],
  contentQueries: function NzButtonComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      \u0275\u0275contentQuery(dirIndex, NzIconDirective, 5, ElementRef);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    }
  },
  hostAttrs: [1, "ant-btn"],
  hostVars: 34,
  hostBindings: function NzButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
      \u0275\u0275classProp("ant-btn-default", ctx.nzType === "default")("ant-btn-primary", ctx.nzType === "primary")("ant-btn-dashed", ctx.nzType === "dashed")("ant-btn-link", ctx.nzType === "link")("ant-btn-text", ctx.nzType === "text")("ant-btn-circle", ctx.nzShape === "circle")("ant-btn-round", ctx.nzShape === "round")("ant-btn-lg", ctx.nzSize === "large")("ant-btn-sm", ctx.nzSize === "small")("ant-btn-dangerous", ctx.nzDanger)("ant-btn-loading", ctx.nzLoading)("ant-btn-background-ghost", ctx.nzGhost)("ant-btn-block", ctx.nzBlock)("ant-input-search-button", ctx.nzSearch)("ant-btn-rtl", ctx.dir === "rtl")("ant-btn-icon-only", ctx.iconOnly);
    }
  },
  inputs: {
    nzBlock: "nzBlock",
    nzGhost: "nzGhost",
    nzSearch: "nzSearch",
    nzLoading: "nzLoading",
    nzDanger: "nzDanger",
    disabled: "disabled",
    tabIndex: "tabIndex",
    nzType: "nzType",
    nzShape: "nzShape",
    nzSize: "nzSize"
  },
  exportAs: ["nzButton"],
  standalone: true,
  features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature],
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [["nz-icon", "", "nzType", "loading"]],
  template: function NzButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275template(0, NzButtonComponent_Conditional_0_Template, 1, 0, "span", 0);
      \u0275\u0275projection(1);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.nzLoading ? 0 : -1);
    }
  },
  dependencies: [NzIconModule, NzIconDirective],
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonComponent = _NzButtonComponent;
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzBlock", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzGhost", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzSearch", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzLoading", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "nzDanger", void 0);
__decorate([InputBoolean()], NzButtonComponent.prototype, "disabled", void 0);
__decorate([WithConfig()], NzButtonComponent.prototype, "nzSize", void 0);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[nz-button], a[nz-button]",
      exportAs: "nzButton",
      preserveWhitespaces: false,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      template: `
    @if (nzLoading) {
      <span nz-icon nzType="loading"></span>
    }
    <ng-content></ng-content>
  `,
      host: {
        class: "ant-btn",
        "[class.ant-btn-default]": `nzType === 'default'`,
        "[class.ant-btn-primary]": `nzType === 'primary'`,
        "[class.ant-btn-dashed]": `nzType === 'dashed'`,
        "[class.ant-btn-link]": `nzType === 'link'`,
        "[class.ant-btn-text]": `nzType === 'text'`,
        "[class.ant-btn-circle]": `nzShape === 'circle'`,
        "[class.ant-btn-round]": `nzShape === 'round'`,
        "[class.ant-btn-lg]": `nzSize === 'large'`,
        "[class.ant-btn-sm]": `nzSize === 'small'`,
        "[class.ant-btn-dangerous]": `nzDanger`,
        "[class.ant-btn-loading]": `nzLoading`,
        "[class.ant-btn-background-ghost]": `nzGhost`,
        "[class.ant-btn-block]": `nzBlock`,
        "[class.ant-input-search-button]": `nzSearch`,
        "[class.ant-btn-rtl]": `dir === 'rtl'`,
        "[class.ant-btn-icon-only]": `iconOnly`,
        "[attr.tabindex]": "disabled ? -1 : (tabIndex === null ? null : tabIndex)",
        "[attr.disabled]": "disabled || null"
      },
      imports: [NzIconModule],
      standalone: true
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: NzConfigService
  }, {
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzIconDirectiveElement: [{
      type: ContentChild,
      args: [NzIconDirective, {
        read: ElementRef
      }]
    }],
    nzBlock: [{
      type: Input
    }],
    nzGhost: [{
      type: Input
    }],
    nzSearch: [{
      type: Input
    }],
    nzLoading: [{
      type: Input
    }],
    nzDanger: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    nzType: [{
      type: Input
    }],
    nzShape: [{
      type: Input
    }],
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonGroupComponent = class _NzButtonGroupComponent {
  constructor(directionality) {
    this.directionality = directionality;
    this.nzSize = "default";
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
_NzButtonGroupComponent.\u0275fac = function NzButtonGroupComponent_Factory(t) {
  return new (t || _NzButtonGroupComponent)(\u0275\u0275directiveInject(Directionality, 8));
};
_NzButtonGroupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _NzButtonGroupComponent,
  selectors: [["nz-button-group"]],
  hostAttrs: [1, "ant-btn-group"],
  hostVars: 6,
  hostBindings: function NzButtonGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("ant-btn-group-lg", ctx.nzSize === "large")("ant-btn-group-sm", ctx.nzSize === "small")("ant-btn-group-rtl", ctx.dir === "rtl");
    }
  },
  inputs: {
    nzSize: "nzSize"
  },
  exportAs: ["nzButtonGroup"],
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  ngContentSelectors: _c1,
  decls: 1,
  vars: 0,
  template: function NzButtonGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
var NzButtonGroupComponent = _NzButtonGroupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonGroupComponent, [{
    type: Component,
    args: [{
      selector: "nz-button-group",
      exportAs: "nzButtonGroup",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "ant-btn-group",
        "[class.ant-btn-group-lg]": `nzSize === 'large'`,
        "[class.ant-btn-group-sm]": `nzSize === 'small'`,
        "[class.ant-btn-group-rtl]": `dir === 'rtl'`
      },
      preserveWhitespaces: false,
      template: ` <ng-content></ng-content> `,
      standalone: true
    }]
  }], () => [{
    type: Directionality,
    decorators: [{
      type: Optional
    }]
  }], {
    nzSize: [{
      type: Input
    }]
  });
})();
var _NzButtonModule = class _NzButtonModule {
};
_NzButtonModule.\u0275fac = function NzButtonModule_Factory(t) {
  return new (t || _NzButtonModule)();
};
_NzButtonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NzButtonModule
});
_NzButtonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [NzButtonComponent, NzTransitionPatchModule, NzWaveModule]
});
var NzButtonModule = _NzButtonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzButtonModule, [{
    type: NgModule,
    args: [{
      imports: [NzButtonComponent, NzButtonGroupComponent],
      exports: [NzButtonComponent, NzButtonGroupComponent, NzTransitionPatchModule, NzWaveModule]
    }]
  }], null, null);
})();

export {
  NzTransitionPatchDirective,
  NzWaveDirective,
  NzButtonComponent,
  NzButtonGroupComponent,
  NzButtonModule
};
//# sourceMappingURL=chunk-Y2PAPL5U.js.map
