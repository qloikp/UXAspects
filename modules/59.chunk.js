webpackJsonp([59],{1714:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function n(n){var t=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(e){var a=e.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),s=n(e);s.snippet&&(t.snippets.compiled[a]=s.snippet),s.example&&(t.snippets.raw[a]=s.example)})}return n}();t.BaseDocumentationSection=a},3404:function(n,t,e){"use strict";var a=this&&this.__decorate||function(n,t,e,a){var s,p=arguments.length,o=p<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,e,a);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(o=(p<3?s(o):p>3?s(t,e,o):s(t,e))||o);return p>3&&o&&Object.defineProperty(t,e,o),o},s=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var p=e(0),o=e(24),c=e(407),i=e(173),l=e(408),u=e(3405),r=[u.CssPageTitleComponent],f=[{path:"**",component:l.DocumentationCategoryComponent,data:{category:i.ResolverService.resolveCategoryData(i.DocumentationPage.Css,"Page Title")}}],k=function(){function n(n,t){t.registerResolver(n)}return n}();k=a([p.NgModule({imports:[c.DocumentationComponentsModule,o.RouterModule.forChild(f)],exports:r,declarations:r,entryComponents:r}),s("design:paramtypes",[p.ComponentFactoryResolver,i.ResolverService])],k),t.CssPageTitleModule=k},3405:function(n,t,e){"use strict";var a=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function a(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),s=this&&this.__decorate||function(n,t,e,a){var s,p=arguments.length,o=p<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,t,e,a);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(o=(p<3?s(o):p>3?s(t,e,o):s(t,e))||o);return p>3&&o&&Object.defineProperty(t,e,o),o},p=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=e(0),c=e(406),i=e(1714),l=function(n){function t(){return n.call(this,e(3406))||this}return a(t,n),t}(i.BaseDocumentationSection);l=s([o.Component({selector:"uxd-css-page-title-page-title",template:e(3409)}),c.DocumentationSectionComponent("CssPageTitleComponent"),p("design:paramtypes",[])],l),t.CssPageTitleComponent=l},3406:function(n,t,e){function a(n){return e(s(n))}function s(n){var t=p[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var p={"./sample.snippet.html":3407,"./sample.snippet.js":3408};a.keys=function(){return Object.keys(p)},a.resolve=s,n.exports=a,a.id=3406},3407:function(n,t){n.exports={snippet:'<span class="token doctype">&lt;!DOCTYPE html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">ng-app</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ux-aspects<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span> <span class="token attr-name">page-title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>UX Aspects<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>'}},3408:function(n,t){n.exports={snippet:'$stateProvider<span class="token punctuation">.</span><span class="token function">state</span><span class="token punctuation">(</span><span class="token string">\'pagetitle\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">:</span> <span class="token string">\'/pagetitle\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">"app/pageTitle/pageTitle.html"</span><span class="token punctuation">,</span>\n    controller<span class="token punctuation">:</span> <span class="token string">"PageTitleCtrl as pt"</span><span class="token punctuation">,</span>\n    data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        pageTitle<span class="token punctuation">:</span><span class="token string">\'Page Title\'</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'}},3409:function(n,t){n.exports='<p>When defining states for your application specify a <code>pageTitle</code> property for the <code>data</code> option when\n  defining your state.</p>\n\n<uxd-snippet language="javascript" [content]="snippets.compiled.sampleSnippetJs"></uxd-snippet>\n\n<p>Specify the <code>page-title</code> attribute on the <code>title</code> element. You can specify a default page title in\n  the <code>page-title</code> attribute. Note that your app must be defined on the <code>html</code> element.</p>\n\n<uxd-snippet [content]="snippets.compiled.sampleSnippetHtml"></uxd-snippet>'}});