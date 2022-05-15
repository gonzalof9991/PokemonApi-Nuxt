exports.ids = [1];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
const URL_BASE='https://pokeapi.co/api/v2/pokemon/';const getPokemonAll=async URL=>{let url_get='';url_get=URL?URL:URL_BASE;return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url_get).then(res=>{return res.data;});};const getPokemonId=async url=>{return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${url}`).then(res=>{return res.data;});};/* harmony default export */ __webpack_exports__["a"] = ({getPokemonAll,getPokemonId});

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

/***/ })

};;
//# sourceMappingURL=card.js.map