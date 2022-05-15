exports.ids = [3,1,2];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
const URL_BASE='https://pokeapi.co/api/v2/pokemon/';const getPokemonAll=async URL=>{let url_get='';url_get=URL?URL:URL_BASE;return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url_get).then(res=>{return res.data;});};const getPokemonId=async url=>{return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}`).then(res=>{return res.data;});};/* harmony default export */ __webpack_exports__["a"] = ({getPokemonAll,getPokemonId});

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=de806d96&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:" shadow pt-3 pb-3 bg-dark"},[_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<div class=\" d-flex flex-row justify-content-center align-items-center\">","</div>",[_c('b-img',{staticClass:"img-fluid wh-150 mr-5",attrs:{"src":"/img/pokeball.png"}}),_vm._ssrNode(" "),_c('b-img',{staticClass:"img-fluid w-25 mr-5",attrs:{"src":"/img/logo.png"}}),_vm._ssrNode(" "),_c('b-img',{staticClass:"img-fluid wh-150",attrs:{"src":"/img/pokeball.png"}})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=de806d96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({name:'Header'});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d33957c"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(28).default})


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=template&id=55ad50de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"div-card shadow d-flex flex-column justify-content-center align-items-center",attrs:{"id":_vm.detail.id}},[_vm._ssrNode("<div class=\"d-flex flex-row align-items-baseline justify-content-around\" data-v-55ad50de><h6 class=\"text-xl mr-2 text-white\" data-v-55ad50de>"+_vm._ssrEscape(_vm._s(_vm.detail.name))+"</h6> <p class=\"text-sm mr-2 text-white\" data-v-55ad50de>"+_vm._ssrEscape("PS "+_vm._s(_vm.detail.base_experience))+"</p></div> "),_vm._ssrNode("<div data-v-55ad50de>","</div>",[_c('b-img',{staticClass:"img-fluid img-card",attrs:{"src":(_vm.detail.sprites) ? _vm.detail.sprites.front_default : null}})],1),_vm._ssrNode(" <div data-v-55ad50de><p class=\"font-bold text-white\" data-v-55ad50de>Detalle</p></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Card.vue?vue&type=template&id=55ad50de&scoped=true&

// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Cardvue_type_script_lang_js_ = ({name:'Card',props:['url'],data(){return{detail:[]};},async created(){await this.getPokemonId();this.changeImage(this.detail.id,this.detail);},computed:{showSrc(){try{return this.detail;}catch(error){console.error(error);}}},methods:{async getPokemonId(){await api["a" /* default */].getPokemonId(this.url).then(res=>{this.detail=res;});},changeImage(id,detail){try{let div=document.getElementById(`${id}`);//console.log(div);
let type=detail.types[0].type.name;//console.log(detail.types[0].type.name);
div.style.background='url('+`/img/${type}.png`+')';}catch(error){console.error(error);}}},watch:{async url(){await this.getPokemonId();this.changeImage(this.detail.id,this.detail);}}});
// CONCATENATED MODULE: ./components/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "55ad50de",
  "e42a0382"
  
)

/* harmony default export */ var Card = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=607fa78a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<main>","</main>",[_vm._ssrNode("<section>","</section>",[_c('b-container',{attrs:{"fluid":""}},[_c('b-row',{staticClass:"row-count d-flex justify-content-center align-items-center"},[_c('b-col',[_c('h2',{staticClass:"text-center text-white"},[_vm._v(_vm._s(_vm.showCount)+" de 1126 "),_c('b',{staticClass:"color-pokemon"},[_vm._v("Pokemones")])])])],1)],1),_vm._ssrNode(" "),_c('b-container',{staticClass:"mt-5"},[_c('b-row',{staticClass:"mb-5"},[_c('b-col',{staticClass:"d-flex flex-row justify-content-center"},[_c('div',{class:(_vm.previous) ? 'btn-pokemon cursor-pointer shadow mr-5' : 'btn-pokemon shadow mr-5 cursor-not-allowed opacity-2',on:{"click":function () {
              if(_vm.previous){
                _vm.changeUrl('previous')
              }
              
            }}},[_vm._v("\n              Anterior\n            ")]),_vm._v(" "),_c('div',{staticClass:"btn-pokemon cursor-pointer shadow mr-5",on:{"click":function () {
              if(_vm.next){
                _vm.changeUrl('next')
              }
              else{

              }
              
            }}},[_vm._v("\n              "+_vm._s((_vm.count === 1126) ? 'Iniciar de nuevo' : 'Siguiente')+"\n            ")])])],1),_vm._v(" "),_c('b-row',_vm._l((_vm.pokemones),function(p){return _c('b-col',{key:p.id,staticClass:"mb-5",attrs:{"xl":"4"}},[_c('Card',{attrs:{"url":p.url}})],1)}),1)],1)],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=607fa78a&

// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({name:'IndexPage',data(){return{data:[],pokemones:[],next:'',previous:'',count:0,stop:false,url_old:'https://pokeapi.co/api/v2/pokemon/'};},created(){this.getPokemonAll();},computed:{showCount(){return this.count;}},methods:{async getPokemonAll(){await api["a" /* default */].getPokemonAll().then(res=>{this.pokemones=res.results;console.log(res.results.length);this.count+=res.results.length;this.next=res.next;this.previous=res.previous;});},async changeUrl(type){let url=type==='next'?this.next:this.previous;await api["a" /* default */].getPokemonAll(url).then(res=>{this.pokemones=res.results;if(type==='next'){this.count+=res.results.length;}else{this.count-=res.results.length;}this.next=res.next;this.previous=res.previous;});}}});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fab4a17a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(28).default,Card: __webpack_require__(29).default})


/***/ })

};;
//# sourceMappingURL=index.js.map