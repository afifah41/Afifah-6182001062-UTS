System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,r,n,o,l,s,a,p,c,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){o=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,p=e.Collider2D,c=e.Contact2DType,u=e.Sprite,h=e.Component}],execute:function(){var d,v,g,f,m,B,y,C,b,T,R;o._RF.push({},"ccdbesM1FpAr6dqxO1k9w1f","Bird",void 0);var w=l.ccclass,z=l.property;e("Bird",(d=w("Bird"),v=z({type:[s]}),g=z({type:[a]}),f=z({type:s}),m=z({type:s}),d((C=t((y=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),l=0;l<i;l++)o[l]=arguments[l];return t=e.call.apply(e,[this].concat(o))||this,r(t,"spriteBird",C,n(t)),r(t,"scaleList",b,n(t)),r(t,"spriteBirdMerah",T,n(t)),r(t,"spriteBirdBiru",R,n(t)),t.listToRemove=[],t.level=0,t}i(t,e);var o=t.prototype;return o.start=function(){var e=this.getComponent(p);e&&(e.on(c.BEGIN_CONTACT,this.onBeginContact,this),e.on(c.END_CONTACT,this.onEndContact,this))},o.onBeginContact=function(e,i,r){e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelUp(),this.listToRemove.push(i.node))},o.onEndContact=function(e,t,i){console.log("onEndContact")},o.levelUp=function(){this.level+1<this.spriteBird.length&&(this.level++,this.node.emit("merge",this.level),this.getComponent(u).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]),console.log("level: "+this.level))},o.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[],console.log("update bird")},t}(h)).prototype,"spriteBird",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),b=t(y.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(y.prototype,"spriteBirdMerah",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=t(y.prototype,"spriteBirdBiru",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),B=y))||B));o._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,o,n,i,a,s,c,l,u,p,d,h,f;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,s=t.Prefab,c=t.Label,l=t.input,u=t.Input,p=t.instantiate,d=t.RigidBody2D,h=t.ERigidBody2DType,f=t.Component}],execute:function(){var y,b,g,m,v,P,R,C;i._RF.push({},"19721ezRxRIhK8YRDeJRyPG","GameController",void 0);var T=a.ccclass,_=a.property;t("GameController",(y=T("GameController"),b=_({type:s}),g=_({type:c}),y(((C=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,o(e,"birdPrefab",P,n(e)),o(e,"text_score",R,n(e)),e.score=void 0,e}r(e,t);var i=e.prototype;return i.start=function(){this.score=0,this.score=0,e.Instance=this,l.on(u.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){var e=this,r=p(this.birdPrefab),o=t.getUILocation();r.setParent(this.node),r.setWorldPosition(o.x,o.y,0),r.getComponent(d).type=h.Dynamic,r.getComponent(d).wakeUp(),r.on("merge",(function(t){e.addScore(t)}))},i.addScore=function(t){this.score+=t,this.text_score.string=this.score.toString()},i.pasue=function(t,e){},i.update=function(t){},e}(f)).Instance=void 0,P=e((v=C).prototype,"birdPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=e(v.prototype,"text_score",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=v))||m));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});