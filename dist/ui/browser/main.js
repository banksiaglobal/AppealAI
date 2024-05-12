import {
  NzContentComponent,
  NzFlexDirective,
  NzFlexModule,
  NzFooterComponent,
  NzHeaderComponent,
  NzLayoutComponent,
  NzLayoutModule,
  NzMenuDirective,
  NzMenuItemComponent,
  NzMenuModule,
  NzSiderComponent
} from "./chunk-UHV536D3.js";
import {
  FormsModule,
  en_US,
  provideNzI18n
} from "./chunk-VEWB337I.js";
import {
  DashboardOutline,
  DomRendererFactory2,
  FormOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  NzIconModule,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withHashLocation
} from "./chunk-6H6XYIWG.js";
import {
  CommonModule,
  DOCUMENT,
  registerLocaleData
} from "./chunk-OILZ7NY5.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Injectable,
  NgZone,
  RendererFactory2,
  RuntimeError,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  performanceMarkFeature,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinvalidFactory,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-M5MRYH5D.js";

// src/app/app.routes.ts
var routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  {
    path: "welcome",
    loadComponent: () => import("./chunk-JOGE5VLH.js").then((m) => m.WelcomeComponent),
    title: "Welcome"
  },
  {
    path: "start",
    loadComponent: () => import("./chunk-R3YKXYCC.js").then((m) => m.StartPageComponent),
    title: "Start"
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-OG4XVQEY.js").then((m) => m.AboutPageComponent),
    title: "About"
  },
  {
    path: "letter",
    loadComponent: () => import("./chunk-GFXFYDWW.js").then((m) => m.LetterPageComponent),
    title: "Docs",
    pathMatch: "full"
  },
  {
    path: "answer",
    loadComponent: () => import("./chunk-7NXPAAPT.js").then((m) => m.AiComponent),
    title: "AI",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "welcome"
  }
];

// src/app/icons-provider.ts
var icons = [MenuFoldOutline, MenuUnfoldOutline, DashboardOutline, FormOutline];
function provideNzIcons() {
  return importProvidersFrom(NzIconModule.forRoot(icons));
}

// node_modules/@angular/common/locales/en.mjs
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length;
  if (i === 1 && v === 0)
    return 1;
  return 5;
}
var en_default = ["en", [["a", "p"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-4Z6WFDSN.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
registerLocaleData(en_default);
var appConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideNzIcons(),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.isCollapsed = false;
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 4, consts: [[1, "app-layout"], ["nzCollapsible", "", 1, "menu-sidebar", 3, "nzCollapsedChange", "nzCollapsed", "nzTrigger", "nzBreakpoint"], [1, "sidebar-logo"], ["href", "https://community.intersystems.com/post/intersystems-vector-search-genai-and-ml-contest", "target", "_blank"], ["src", "assets/logo.png", "alt", "logo"], ["nz-menu", "", "nzTheme", "dark", "nzMode", "horizontal"], ["nz-menu-item", ""], ["routerLink", "welcome"], ["routerLink", "/start"], ["routerLink", "/letter"], ["routerLink", "/about"], [1, "vertical-header-var"], ["nz-flex", "", 1, "app-header", 3, "nzAlign"], ["nz-flex", "", 1, "header-title"], [1, "logo-title"], [1, "description-logo"], [1, "logo-bg"], ["nz-flex", "", "nzJustify", "space-between", 1, "horizontal-header-var"], [1, "logo"], [1, "h2"], [1, "inner-content"], ["nz-flex", "", "nzJustify", "center"], ["href", "https://banksiaglobal.com/"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nz-layout", 0)(1, "nz-sider", 1);
    \u0275\u0275twoWayListener("nzCollapsedChange", function AppComponent_Template_nz_sider_nzCollapsedChange_1_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.isCollapsed, $event) || (ctx.isCollapsed = $event);
      return $event;
    });
    \u0275\u0275elementStart(2, "div", 2)(3, "a", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "AppealAI");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "ul", 5)(8, "ul")(9, "li", 6)(10, "a", 7);
    \u0275\u0275text(11, "Intro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "li", 6)(13, "a", 8);
    \u0275\u0275text(14, "Setup");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "li", 6)(16, "a", 9);
    \u0275\u0275text(17, "Run");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "li", 6)(19, "a", 10);
    \u0275\u0275text(20, "About Us");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(21, "nz-layout")(22, "nz-header", 11)(23, "div", 12)(24, "div", 13);
    \u0275\u0275element(25, "div", 14);
    \u0275\u0275elementStart(26, "div", 15);
    \u0275\u0275text(27, " by ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "div", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "nz-header", 17)(30, "ul", 5)(31, "li", 6)(32, "a", 7);
    \u0275\u0275text(33, "Intro");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "li", 6)(35, "a", 8);
    \u0275\u0275text(36, "Setup");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li", 6)(38, "a", 9);
    \u0275\u0275text(39, "Run");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "li", 6)(41, "a", 10);
    \u0275\u0275text(42, "About Us");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 18)(44, "span", 19);
    \u0275\u0275text(45, "Appeal");
    \u0275\u0275elementStart(46, "b");
    \u0275\u0275text(47, "AI");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "nz-content")(49, "div", 20);
    \u0275\u0275element(50, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "nz-footer", 21)(52, "span");
    \u0275\u0275text(53, "\xA92024");
    \u0275\u0275elementEnd();
    \u0275\u0275text(54, "\xA0");
    \u0275\u0275elementStart(55, "a", 22);
    \u0275\u0275text(56, " Banksia Global ");
    \u0275\u0275elementEnd();
    \u0275\u0275text(57, ". Professional services for InterSystems technologies.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("nzCollapsed", ctx.isCollapsed);
    \u0275\u0275property("nzTrigger", null)("nzBreakpoint", "md");
    \u0275\u0275advance(22);
    \u0275\u0275property("nzAlign", "center");
  }
}, dependencies: [
  CommonModule,
  RouterOutlet,
  RouterLink,
  NzIconModule,
  NzLayoutModule,
  NzLayoutComponent,
  NzHeaderComponent,
  NzContentComponent,
  NzFooterComponent,
  NzSiderComponent,
  NzMenuModule,
  NzMenuDirective,
  NzMenuItemComponent,
  NzFlexModule,
  NzFlexDirective
], styles: ['\n\n[_nghost-%COMP%] {\n  display: flex;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.logo-title[_ngcontent-%COMP%] {\n  background: url("./media/title.svg") no-repeat;\n  height: 40px;\n  width: 170px;\n}\n.app-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n.horizontal-header-var[_ngcontent-%COMP%] {\n  display: none;\n}\n.menu-sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  min-height: 100vh;\n  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);\n}\n.header-trigger[_ngcontent-%COMP%] {\n  align-self: center;\n  height: 64px;\n  padding: 0 24px;\n  font-size: 20px;\n  cursor: pointer;\n  transition: all 0.3s, padding 0s;\n}\n.trigger[_ngcontent-%COMP%]:hover {\n  color: #1890ff;\n}\n.sidebar-logo[_ngcontent-%COMP%] {\n  position: relative;\n  height: 64px;\n  padding-left: 24px;\n  overflow: hidden;\n  line-height: 64px;\n  background: #001529;\n  transition: all 0.3s;\n}\n.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 32px;\n  width: 32px;\n  vertical-align: middle;\n}\n.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0 20px;\n  color: #fff;\n  font-weight: 600;\n  font-size: 14px;\n  font-family:\n    Avenir,\n    Helvetica Neue,\n    Arial,\n    Helvetica,\n    sans-serif;\n  vertical-align: middle;\n}\nnz-header[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 64px;\n  width: 100%;\n  z-index: 2;\n}\n.app-header[_ngcontent-%COMP%] {\n  position: relative;\n  background: #fff;\n  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n}\n.inner-content[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #fff;\n  height: 100%;\n}\n.logo-bg[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 200px;\n  margin-left: 10px;\n  background: url("./media/logo-bg.svg") 50% no-repeat;\n}\n.h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: var(--primary-color);\n  margin: 0;\n}\n.header-title[_ngcontent-%COMP%] {\n  margin: auto;\n  gap: 5px;\n  align-items: flex-end;\n}\n.description-logo[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: var(--dark-bg-color);\n}\nnz-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: #fff;\n}\n@media screen and (max-width: 680px) {\n  .menu-sidebar[_ngcontent-%COMP%], .description-logo[_ngcontent-%COMP%], .logo-bg[_ngcontent-%COMP%], .header-trigger[_ngcontent-%COMP%], .vertical-header-var[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .horizontal-header-var[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .logo[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .horizontal-header-var[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 440px) {\n  .horizontal-header-var[_ngcontent-%COMP%]   .ant-menu-item[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */'] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 24 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/common/locales/en.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.3
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
