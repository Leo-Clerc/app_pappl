(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{151:function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),a=r(4),u=n(r(424)),s=r(4),l=r(23);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var c=s.StyleSheet.create({input:{height:40,margin:12,borderWidth:1,padding:10,width:a.Dimensions.get("window").width/4-10,alignSelf:"center"}}),f=function(e){var t=e.bonAge,r=e.age,n=e.changeAge,s=e.changeAgeOk,d=(0,o.useState)(r),f=(0,i.default)(d,2),g=f[0],p=f[1];return(0,l.jsxs)(a.View,{children:[(0,l.jsx)(a.TextInput,{style:c.input,value:g.toString(),onChangeText:function(e){return p(parseInt(e))},onBlur:function(){n(parseInt(g)),p(r),s(parseInt(g)==t)},keyboardType:"numeric"}),(0,l.jsx)(u.default,{value:r,onValueChange:function(e){n(e),p(e)},onSlidingComplete:function(e){return s(e==t)},step:1,minimumValue:20,maximumValue:80,style:{width:a.Dimensions.get("window").width/4-10,alignSelf:"center"}})]})};t.default=f},152:function(e,t,r){e.exports=r.p+"static/media/docteur.f9d64ef1.png"},156:function(e,t,r){e.exports=r(157)},157:function(e,t,r){var n=r(0),i=r(4),o=r(330),a=r(331);r(335);var u=n(r(339));i.AppRegistry.registerComponent(o.name,(function(){return u.default})),(0,a.registerRootComponent)(u.default)},330:function(e){e.exports=JSON.parse('{"name":"app_pappl","displayName":"app_pappl"}')},335:function(e,t,r){var n=r(336),i=r(337);"string"===typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var o={insert:"head",singleton:!1};n(i,o);e.exports=i.locals||{}},337:function(e,t,r){(t=r(338)(!1)).push([e.i,".titre {\r\n    color: red\r\n}",""]),e.exports=t},339:function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n(r(1));var i=r(22),o=r(399),a=(r(4),n(r(417))),u=n(r(420)),s=n(r(421)),l=n(r(422)),d=n(r(430)),c=n(r(438)),f=r(23),g=(0,o.createNativeStackNavigator)(),p=function(){return(0,f.jsx)(i.NavigationContainer,{initialRouteName:"Accueil",children:(0,f.jsxs)(g.Navigator,{children:[(0,f.jsx)(g.Screen,{name:"Accueil",component:a.default,options:{title:"Transplant'action"}}),(0,f.jsx)(g.Screen,{name:"Aide",component:u.default}),(0,f.jsx)(g.Screen,{name:"ParametragePartie",component:s.default}),(0,f.jsx)(g.Screen,{name:"EcranDeJeu1",component:l.default}),(0,f.jsx)(g.Screen,{name:"EcranDeJeu2",component:d.default}),(0,f.jsx)(g.Screen,{name:"EcranDeFinDePartie",component:c.default})]})})};t.default=p},417:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=o(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var u=i?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=e[a]}n.default=e,r&&r.set(e,n)}(r(1));var n=r(4),i=r(23);function o(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(o=function(e){return e?r:t})(e)}r(419);var a=n.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20},buttonText:{fontSize:20,color:"white"},title:{alignSelf:"center",fontSize:40,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},soustitre:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},bottom:{flex:.3,backgroundColor:"pink",borderWidth:5,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{flex:1,resizeMode:"cover",justifyContent:"center",opacity:1,tintColor:"black"},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"}}),u=function(e){var t=e.navigation;return(0,i.jsxs)(n.View,{style:a.container,children:[(0,i.jsx)(n.Text,{style:a.title,children:"Transplant'Action"}),(0,i.jsx)(n.Text,{style:a.soustitre,children:' Un "Escape Game" \xe9ducatif '}),(0,i.jsxs)(n.Text,{style:{textAlign:"center"},children:[(0,i.jsx)(n.Pressable,{style:a.button,title:"Jouer",onPress:function(){return t.navigate("ParametragePartie")},children:(0,i.jsx)(n.Text,{style:a.buttonText,children:" Jouer "})}),(0,i.jsx)(n.Pressable,{title:"Aide",style:a.button,onPress:function(){return t.navigate("Aide")},children:(0,i.jsx)(n.Text,{style:a.buttonText,children:" Aide "})})]})]})};t.default=u},419:function(e,t,r){e.exports=r.p+"static/media/test_photo.7d79f644.png"},420:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(1));var n=r(4),i=r(22),o=r(23);function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}var u=n.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white"},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:300,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},buttonpressed:{textAlign:"center",backgroundColor:"#accae0",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:900,height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"},input:{height:40,margin:12,borderWidth:1,padding:10}}),s=function(){var e=(0,i.useNavigation)();return(0,o.jsxs)(n.View,{style:u.container,children:[(0,o.jsx)(n.Text,{style:u.title,children:"Bienvenue dans Transplant'Action !"}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Le docteur Carma Saha souffre d'une d\xe9ficience reinale, et vous devez en urgence lui trouver un donneur !"}),(0,o.jsx)(n.Text,{style:u.instruction,children:'Pour lancer une partie, revenez sur l\'\xe9cran pr\xe9c\xe9dent, et appuyez sur le bouton "Jouer"'}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Vous pourrez alors configuerer la dur\xe9e de votre partie en minutes, puis la commencez."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Vous devrez dans un premier temps trouver les informations suivantes sur le docteur Saha gr\xe2ce \xe0 la brochure et aux indices cach\xe9s dans le laboratoire : Son sexe, son \xe2ge et la s\xe9quence prot\xe9inique permettant de d\xe9terminer sa compatibilit\xe9 avec un \xe9ventuel donneur."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Attention : La s\xe9quence prot\xe9inique doit \xeatre rentr\xe9e tout en majuscule et sans espace, sinon le r\xe9sultat ne sera pas valide."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Une fois les informations correctement rentr\xe9e, vous pouvez acc\xe9der \xe0 l'\xe9cran suivant : Sur celui ci, vous verrez les diff\xe9rents donneurs potentiels parmi lesquels vous devrez faire votre choix."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Mais vous devez d'abord trouver leurs informations : Pour chacun d'entre eux, indiquez son \xe2ge et son sexe."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Une fois ces informations remplies, leur s\xe9quence prot\xe9inique et celle du docteur Saha seront affich\xe9es : Vous devez alors indiquer le nombre de peptides diff\xe9rents entre les deux cha\xeenes, ce qui vous permettra de conna\xeetre le degr\xe9 de compatibilit\xe9 de la greffe."}),(0,o.jsx)(n.Text,{style:u.instruction,children:"Une fois tous les champs remplis, vous pourrez effectuer votre choix."}),(0,o.jsxs)(n.Pressable,{style:u.button,title:"Revenir",onPress:function(){return e.navigate("Accueil")},children:[(0,o.jsx)(n.Text,{style:u.buttonText,children:" Accueil "})," "]})]})};t.default=s},421:function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),a=r(4),u=r(23);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var l=a.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:300,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},parametre:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{flex:1,resizeMode:"cover",justifyContent:"center",opacity:1,tintColor:"black"},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"}}),d=function(e){var t=e.navigation,r=o.default.useState(30),n=(0,i.default)(r,2),s=n[0],d=n[1];return(0,u.jsxs)(a.View,{style:l.container,children:[(0,u.jsx)(a.Text,{style:l.title,children:" Param\xe9trage de la partie "}),(0,u.jsx)(a.Text,{style:l.parametre,children:"Modifier la dur\xe9e de la partie en minute ici:"}),(0,u.jsxs)(a.Text,{children:[(0,u.jsx)(a.TextInput,{style:l.barreTexte,onChangeText:d,value:s}),(0,u.jsx)(a.Text,{children:" minutes "})]}),(0,u.jsx)(a.Pressable,{style:l.button,title:"Lancer la partie",onPress:function(){return t.navigate("EcranDeJeu1",{timer:s})},children:(0,u.jsx)(a.Text,{style:l.buttonText,children:" Lancer la partie "})})]})};t.default=d},422:function(e,t,r){(function(e){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),a=r(4),u=n(r(423)),s=r(87),l=r(23);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var c=r(152),f=a.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white"},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:a.Dimensions.get("window").width/5-10,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:300,height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"}}),g={container:{backgroundColor:"#FF0000",padding:5,borderRadius:5,width:200,alignItems:"center",alignSelf:"center"},text:{fontSize:25,color:"#FFF",marginLeft:7}},p=function(t){var r=t.route,n=t.navigation,d=6e4*r.params.timer,p=(0,o.useState)(!0),h=(0,i.default)(p,2),b=h[0],x=(h[1],(0,o.useState)(d)),m=(0,i.default)(x,2),y=m[0],v=(m[1],(0,o.useState)(!1)),j=(0,i.default)(v,2),T=j[0];j[1];return e.time=d,(0,l.jsxs)(a.View,{style:f.container,children:[(0,l.jsx)(s.Timer,{totalDuration:y,secs:!0,start:b,reset:T,options:g,handleFinish:function(){n.navigate("EcranDeFinDePartie",{gagne:!1})},getTime:function(t){t=t.split(":"),t=1e3*(3600*Number(t[0])+60*Number(t[1])+Number(t[2])),e.time=t,console.log(t)}}),(0,l.jsx)(a.Text,{style:f.title,children:" \xc9tape 1: "}),(0,l.jsx)(a.Text,{style:f.instruction,children:"Trouver les informations sur le docteur Saha pour continuer"}),(0,l.jsx)(a.Image,{style:f.image,source:c}),(0,l.jsx)(u.default,{}),(0,l.jsx)(a.Text,{children:" "})]})};t.default=p}).call(this,r(21))},423:function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=r(4),a=r(22),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),s=n(r(151)),l=r(23);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}r(152);var c=o.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white"},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:100,borderColor:"gray",borderWidth:1,width:o.Dimensions.get("window").width-1e3,alignSelf:"center",marginHorizontal:10,marginBottom:30},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:o.Dimensions.get("window").width/40,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},buttonpressed:{textAlign:"center",backgroundColor:"#accae0",paddingHorizontal:o.Dimensions.get("window").width/40,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:300,height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"},input:{height:40,margin:12,borderWidth:1,padding:10,width:o.Dimensions.get("window").width/4-10,alignSelf:"center"}}),f=function(){var e=(0,u.useState)(!1),t=(0,i.default)(e,2),r=t[0],n=t[1],d=(0,u.useState)(20),f=(0,i.default)(d,2),g=f[0],p=f[1],h=(0,u.useState)(),b=(0,i.default)(h,2),x=b[0],m=b[1],y=(0,a.useNavigation)(),v=(0,u.useState)(!1),j=(0,i.default)(v,2),T=j[0],R=j[1];return(0,l.jsxs)(o.View,{style:c.container,children:[(0,l.jsx)(o.Text,{style:c.instruction,children:" Quelle est le sexe du docteur Saha ?"}),(0,l.jsxs)(o.Text,{children:[(0,l.jsxs)(o.Pressable,{style:[x?c.button:c.buttonpressed],title:"Homme",onPress:function(){return m(!1)},children:[" ",(0,l.jsx)(o.Text,{style:c.buttonText,children:" Homme "})," "]}),(0,l.jsxs)(o.Pressable,{style:[x?c.buttonpressed:c.button],title:"Femme",onPress:function(){return m(!0)},children:[" ",(0,l.jsx)(o.Text,{style:c.buttonText,children:" Femme "})," "]})]}),(0,l.jsx)(o.Text,{style:c.instruction,children:" Quelle est l'\xe2ge du docteur Saha ? "}),(0,l.jsx)(s.default,{style:c.barreTexte,bonAge:47,age:g,changeAge:function(e){isNaN(parseInt(e)&&isNaN(e))||parseInt(e)<20?p(20):parseInt(e)>80?p(80):p(e)},changeAgeOk:function(e){return n(e)}}),(0,l.jsx)(o.Text,{style:c.instruction,children:" Quelle est la s\xe9quence prot\xe9inique du docteur Saha ? "}),(0,l.jsx)(o.TextInput,{onChangeText:function(e){return R("MYHKL"===e)},style:c.input}),(0,l.jsx)(l.Fragment,{children:r&&T&&x&&(0,l.jsxs)(o.Pressable,{style:c.button,title:"Continuer",onPress:function(){return y.navigate("EcranDeJeu2")},children:[" ",(0,l.jsx)(o.Text,{style:c.buttonText,children:" Continuer "})," "]})}),(0,l.jsx)(o.Text,{children:r})]})};t.default=f},430:function(e,t,r){(function(e){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),a=r(4),u=(r(22),n(r(431))),s=r(87),l=r(23);function d(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}var c=r(432),f=[["L\xe9on Patounec",22,"M",40,r(433),"M Y W I T"],["Dr Emilia Caubert",65,"F",60,r(434),"M G R K P"],["Tomas Parker",61,"M",60,r(435),"M Y H A H"],["B\xe9atrice Tapalinga",23,"F",0,r(436),"_"],["Vlad Koscov",37,"M",0,r(437),"_"]];function g(e){return Math.floor(Math.random()*e)}for(var p=g(4),h=[];h.length<3;){var b=g(5);-1===h.indexOf(b)&&h.push(b)}var x=a.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white"},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:300,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},buttonpressed:{textAlign:"center",backgroundColor:"#accae0",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:300,height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"},input:{height:40,margin:12,borderWidth:1,padding:10,width:a.Dimensions.get("window").width/5-10}}),m={container:{backgroundColor:"#FF0000",padding:5,borderRadius:5,width:200,alignItems:"center",alignSelf:"center"},text:{fontSize:25,color:"#FFF",marginLeft:7}},y=function(t){var r=t.navigation,n=e.time,d=(0,o.useState)(!0),g=(0,i.default)(d,2),b=g[0],y=(g[1],(0,o.useState)(n)),v=(0,i.default)(y,2),j=v[0],T=(v[1],(0,o.useState)(!1)),R=(0,i.default)(T,2),w=R[0],S=(R[1],[]),O=[],P=[],k=[],A=[],z=[],M=[],C=[],W=(0,o.useState)(!1),D=(0,i.default)(W,2),L=D[0],B=D[1];(0,o.useEffect)((function(){M.every(Boolean)&&B(L=!0)}));var _=function(){var e=(0,o.useState)(20),t=(0,i.default)(e,2),r=t[0],n=t[1];S.push(r);O.push((function(e){isNaN(parseInt(e)&&isNaN(e))||parseInt(e)<20?n(20):parseInt(e)>80?n(80):n(e)}));var a=(0,o.useState)(!1),u=(0,i.default)(a,2),s=u[0],l=u[1];P.push(s);k.push((function(e){l(e)}));var d=(0,o.useState)(),c=(0,i.default)(d,2),f=c[0],g=c[1];A.push(f);z.push((function(e){g(e)}));var p=(0,o.useState)(),h=(0,i.default)(p,2),b=h[0],x=h[1];M.push(b);C.push((function(e){x(e)}))};for(index=0;index<4;index++)_();for(var F=[],V=!1,H=0;H<4;H++)dernierStop=H,H==p?(F.push((0,l.jsx)(u.default,{nom:"Dr Maya Curado",age:S[H],bonAge:33,changeAge:O[H],ageOk:P[H],changeAgeOk:k[H],indicationGenre:"F",genre:A[H],changeGenre:z[H],compatibilite:100,correct:!0,resolu:L,imageSource:c,mismatchOk:M[H],changeMismatchOk:C[H],sequence:"M Y H K L"},H.toString())),V=!0):V?F.push((0,l.jsx)(u.default,{nom:f[h[H-1]][0],age:S[H],bonAge:f[h[H-1]][1],changeAge:O[H],ageOk:P[H],changeAgeOk:k[H],indicationGenre:f[h[H-1]][2],genre:A[H],changeGenre:z[H],compatibilite:f[h[H-1]][3],correct:!1,resolu:L,imageSource:f[h[H-1]][4],mismatchOk:M[H],changeMismatchOk:C[H],sequence:f[h[H-1]][5]},H.toString())):F.push((0,l.jsx)(u.default,{nom:f[h[H]][0],age:S[H],bonAge:f[h[H]][1],changeAge:O[H],ageOk:P[H],changeAgeOk:k[H],indicationGenre:f[h[H]][2],genre:A[H],changeGenre:z[H],compatibilite:f[h[H]][3],correct:!1,resolu:L,imageSource:f[h[H]][4],mismatchOk:M[H],changeMismatchOk:C[H],sequence:f[h[H]][5]},H.toString()));return(0,l.jsxs)(a.View,{style:x.container,children:[(0,l.jsx)(s.Timer,{totalDuration:j,secs:!0,start:b,reset:w,options:m,handleFinish:function(){r.navigate("EcranDeFinDePartie",{gagne:!1})},getTime:function(t){t=t.split(":"),t=1e3*(3600*Number(t[0])+60*Number(t[1])+Number(t[2])),e.time=t,console.log(t)}}),(0,l.jsx)(a.Text,{style:x.title,children:" \xc9tape 2 "}),(0,l.jsx)(a.Text,{style:x.instruction,children:" Rentrer les informations relatives aux donneurs "}),(0,l.jsx)(a.Text,{children:L}),(0,l.jsx)(a.Text,{children:F})]})};t.default=y}).call(this,r(21))},431:function(e,t,r){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(4),o=r(22),a=(function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n)}(r(1)),n(r(151))),u=r(23);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var l=i.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white",width:i.Dimensions.get("window").width/4,height:i.Dimensions.get("window").height-30},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:300,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:i.Dimensions.get("window").width/60,paddingVertical:10,margin:25,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},buttonpressed:{textAlign:"center",backgroundColor:"#accae0",paddingHorizontal:i.Dimensions.get("window").width/60,paddingVertical:10,margin:25,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:300,height:150,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"},input:{height:40,margin:12,borderWidth:1,padding:10,width:i.Dimensions.get("window").width/4-10,alignSelf:"center"},nom:{fontSize:25,fontWeight:"bold"}}),d=function(e){var t=e.nom,r=e.age,n=e.bonAge,s=e.imageSource,d=e.ageOk,c=e.changeAge,f=e.changeAgeOk,g=e.indicationGenre,p=e.genre,h=e.changeGenre,b=e.compatibilite,x=e.correct,m=e.resolu,y=e.sequence,v=e.mismatchOk,j=e.changeMismatchOk,T=(0,o.useNavigation)();return(0,u.jsxs)(i.View,{style:l.container,children:[(0,u.jsx)(i.Text,{numberOfLines:1,style:l.nom,children:t}),(0,u.jsx)(i.Image,{source:s,style:l.image}),(0,u.jsx)(i.Text,{style:l.instruction,children:" Sexe du donneur ? "}),(0,u.jsxs)(i.Text,{children:[(0,u.jsxs)(i.Pressable,{style:["F"===g?[p?l.button:l.buttonpressed]:[p?l.buttonpressed:l.button]],title:"Homme",onPress:function(){return h("M"===g)},children:[" ",(0,u.jsx)(i.Text,{style:l.buttonText,children:" Homme "})," "]}),(0,u.jsxs)(i.Pressable,{style:["F"===g?[p?l.buttonpressed:l.button]:[p?l.button:l.buttonpressed]],title:"Femme",onPress:function(){return h("F"===g)},children:[" ",(0,u.jsx)(i.Text,{style:l.buttonText,children:" Femme "})," "]})]}),(0,u.jsx)(i.Text,{style:l.instruction,children:" \xc2ge du donneur ? "}),(0,u.jsx)(a.default,{bonAge:n,age:r,changeAge:c,changeAgeOk:f}),(0,u.jsx)(u.Fragment,{children:d&&p&&(0,u.jsx)(i.Text,{children:"Combien de prot\xe9ines sont diff\xe9rentes entre les deux s\xe9quences ?"})}),(0,u.jsx)(u.Fragment,{children:d&&p&&(0,u.jsx)(i.Text,{children:"Dr Saha : M Y H K L\n"+t+" : "+y})}),(0,u.jsx)(u.Fragment,{children:d&&p&&(0,u.jsx)(i.TextInput,{onChangeText:function(e){return j(parseInt(e)===(100-b)/20)},style:l.input})}),(0,u.jsx)(u.Fragment,{children:v&&(0,u.jsxs)(i.Text,{children:["Compatibilit\xe9 : ",b,"%"]})}),(0,u.jsx)(u.Fragment,{children:m&&(0,u.jsxs)(i.Pressable,{style:l.button,title:x?"gagner":"perdre",onPress:function(){return T.navigate("EcranDeFinDePartie",{gagne:x})},children:[" ",(0,u.jsx)(i.Text,{style:l.buttonText,children:" Choisir "})," "]})}),(0,u.jsx)(i.Text,{children:m})]})};t.default=d},432:function(e,t,r){e.exports=r.p+"static/media/Maya.8cabcdc3.png"},433:function(e,t,r){e.exports=r.p+"static/media/Leon.36edcf7f.png"},434:function(e,t,r){e.exports=r.p+"static/media/Emilia.b2cd3775.png"},435:function(e,t,r){e.exports=r.p+"static/media/Tomas.66808078.png"},436:function(e,t,r){e.exports=r.p+"static/media/Beatrice.96f0df70.png"},437:function(e,t,r){e.exports=r.p+"static/media/Vlad.b76b44d7.png"},438:function(e,t,r){(function(e){var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(6)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var a=i?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(r(1)),a=r(4),u=r(87),s=r(23);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var d=a.StyleSheet.create({container:{flex:1,flexDirection:"column",textAlign:"center",justifyContent:"start",marginTop:20,backgroundColor:"white"},buttonText:{fontSize:20,color:"white"},barreTexte:{textAlign:"center",height:40,borderColor:"gray",borderWidth:1,width:300,alignSelf:"center",marginHorizontal:10},title:{fontSize:50,fontWeight:"bold",color:"#148ce8",borderTopLeftRadius:20,borderTopRightRadius:20},instruction:{textAlign:"center",fontSize:20,fontWeight:"bold",margin:10},button:{textAlign:"center",backgroundColor:"#148ce8",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},buttonpressed:{textAlign:"center",backgroundColor:"#accae0",paddingHorizontal:30,paddingVertical:15,margin:30,borderTopLeftRadius:20,borderTopRightRadius:20,borderBottomLeftRadius:20,borderBottomRightRadius:20},image:{alignSelf:"center",flex:1,resizeMode:"cover",justifyContent:"center",width:900,height:300,borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20,margin:5},text:{color:"white",fontSize:42,fontWeight:"bold",textAlign:"center",backgroundColor:"#000000a0"},input:{height:40,margin:12,borderWidth:1,padding:10}}),c={container:{backgroundColor:"#FF0000",padding:5,borderRadius:5,width:200,alignItems:"center",alignSelf:"center"},text:{fontSize:25,color:"#FFF",marginLeft:7}},f=function(t){var n=t.route,l=t.navigation,f=n.params.gagne,g=e.time,p=(0,o.useState)(!1),h=(0,i.default)(p,2),b=h[0],x=(h[1],(0,o.useState)(g)),m=(0,i.default)(x,2),y=m[0],v=(m[1],(0,o.useState)(!1)),j=(0,i.default)(v,2),T=j[0];j[1];return(0,s.jsxs)(a.View,{style:d.container,children:[(0,s.jsx)(u.Timer,{totalDuration:y,secs:!0,start:b,reset:T,options:c,handleFinish:function(){l.navigate("EcranDeFinDePartie",{gagne:!1})},getTime:function(t){t=t.split(":"),t=1e3*(3600*Number(t[0])+60*Number(t[1])+Number(t[2])),e.time=t,console.log(t)}}),(0,s.jsx)(a.Text,{style:d.title,children:f?"F\xe9licitation":"Dommage"}),(0,s.jsxs)(a.Text,{style:d.instruction,children:[" ",f?"Vous avez r\xe9ussi \xe0 sauver le docteur Saha":"Vous n'avez pas r\xe9ussi \xe0 sauver le docteur Saha"]}),(0,s.jsx)(a.Image,{style:d.image,source:r(f?439:440)}),(0,s.jsxs)(a.Pressable,{style:d.button,title:"Revenir",onPress:function(){return l.navigate("Accueil")},children:[(0,s.jsx)(a.Text,{style:d.buttonText,children:" Acceuil "})," "]})]})};t.default=f}).call(this,r(21))},439:function(e,t,r){e.exports=r.p+"static/media/congrats.13b8ce70.gif"},440:function(e,t,r){e.exports=r.p+"static/media/kermit-worried.4f365d3f.gif"}},[[156,1,2]]]);
//# sourceMappingURL=app.87cb74f3.chunk.js.map