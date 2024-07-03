(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[456],{9929:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stairs",function(){return n(1940)}])},6858:function(e,t,n){"use strict";n.d(t,{Z:function(){return battles_filter}});var i,r,a,s,l=n(1527),o=n(959),c=n(8519),d=n(3837),h=n(1644);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var blue_coin_mini=function(e){return o.createElement("svg",_extends({width:21,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),i||(i=o.createElement("circle",{cx:10.598,cy:11.119,r:8.16,fill:"#2967E0",stroke:"#5182E1",strokeWidth:4.115,strokeDasharray:"7.64 7.64"})),r||(r=o.createElement("circle",{cx:10.598,cy:11.12,r:6.072,fill:"#5182E1",stroke:"#2967E0",strokeWidth:1.764})))},u=n(7210);function red_coin_mini_extends(){return(red_coin_mini_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var red_coin_mini=function(e){return o.createElement("svg",red_coin_mini_extends({width:21,height:22,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),a||(a=o.createElement("circle",{cx:10.682,cy:11.119,r:8.16,fill:"#D74467",stroke:"#C7234A",strokeWidth:4.115,strokeDasharray:"7.64 7.64"})),s||(s=o.createElement("circle",{cx:10.682,cy:11.12,r:6.072,fill:"#D74467",stroke:"#C7234A",strokeWidth:1.764})))},m=n(6131),f=n(4156),b=n.n(f),battles_filter=function(e){let{battlesCount:t,gameName:n,showJoinable:i,handleCreateBattle:r,setShowJoinable:a,showTotalValue:s,showCoins:o}=e,f=(0,m.L)(e=>e.globalUser),p=(0,m.a)(e=>e.setShowLogin);return(0,l.jsxs)("div",{className:b().filterWrapper,children:[(0,l.jsxs)("div",{className:b().filterWrapperLeft,children:[!!s&&(0,l.jsxs)("div",{children:[(0,l.jsx)(u.Z,{style:{marginRight:10}})," ",s," Value"]}),(0,l.jsxs)("div",{children:[t," ",1==t?"public battle":"public battles"]}),(0,l.jsxs)("div",{className:b().filterWrapperLeftSwitchWrapper,children:[(0,l.jsx)(h.Z,{element:"p",textType:"label",children:"Show Joinable"}),(0,l.jsx)(d.Z,{checked:i,onChange:()=>{localStorage.setItem("show_joinable",JSON.stringify(!i)),a(!i)}})]})]}),(0,l.jsxs)("div",{className:b().filterWrapperRight,children:[o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(blue_coin_mini,{}),(0,l.jsx)("p",{children:" 55 %"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(red_coin_mini,{}),(0,l.jsx)("p",{children:" 45 %"})]})]}),(0,l.jsxs)(c.Z,{className:b().filterWrapperRightBtn,variant:"primary",onClick:()=>{(null==f?void 0:f.id)?r():p({forceUserPass:!1,visible:!0})},children:["Create ",n," Battle"]})]})]})}},1940:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Stairs}});var i=n(1527),r=n(6284),a=n(959),s=n(462),l=n(2524),o=n(6858),c=n(7572),d=n(6131),h=n(896),u=n(4641),m=n(8863);let f={name:"Stairs",info:"Players climb up stairs while rocks tumble down from above. Getting hit by a rock eliminates you; the last player remaining wins!"};function Stairs(){let e=(0,r.useRouter)(),t=(0,d.L)(e=>e.globalUser),n=a.useMemo(()=>(0,u.P)("margin"),["margin"]),s=(0,d.a)(e=>e.setShowModal),[b,p]=(0,a.useState)([]),[_,g]=(0,a.useState)(!1),E=(0,d.a)(e=>e.setShowLogin),addNewBattle=e=>{p(t=>[e,...t])},handleBattleEnd=e=>{p(t=>t.filter(t=>{let{id:n}=t;return n!==e}))},handleAddMember=e=>{p(t=>{let n=[...t],i=n.findIndex(t=>{let{id:n}=t;return n===e.battleId});return -1!==i&&n[i].players.push(e.player),n})},fetchInitialData=async()=>{var e;let{data:t}=null!==(e=await (0,h.Uk)("stairs"))&&void 0!==e?e:{};p(t)};(0,a.useEffect)(()=>(m.Wb.emit("JOIN-ROOM","GENERAL-STAIRS"),m.Wb.on("STAIRS_REMOVE_BATTLE",handleBattleEnd),m.Wb.on("NEW_STAIRS_BATTLE",addNewBattle),m.Wb.on("STAIRS_ADD_MEMBER",handleAddMember),fetchInitialData(),()=>{m.Wb.off("NEW_STAIRS_BATTLE"),m.Wb.off("STAIRS_REMOVE_BATTLE"),m.Wb.off("STAIRS_ADD_MEMBER")}),[]);let joinFromOutside=n=>{(null==t?void 0:t.id)?(e.push("/stairs/".concat(n)),setTimeout(()=>{m.Wb.emit("JOIN_STAIRS_BATTLE",n)})):E({forceUserPass:!1,visible:!0})};return b?(0,i.jsxs)("div",{className:"battle-list",children:[(0,i.jsx)(c.Z,{gameInfo:f.info,gameName:f.name,withButtons:!1,gameBanner:void 0,isAdmin:!1,refundData:{gameMode:"STAIRS",battleId:0}}),(0,i.jsx)(o.Z,{setShowJoinable:g,showJoinable:_,battlesCount:b.length,gameName:f.name,handleCreateBattle:function(){s("createStairsBattle",!0),setTimeout(()=>{document.body.style.overflow="hidden",document.body.style.paddingRight=n.gap+"px"},0)}}),b.length?(0,i.jsx)("div",{className:"battles-grid",children:(_?b.filter(e=>{let{spots:t,players:n}=e;return n.length<t}):b).map((e,t)=>(0,i.jsx)(l.Z,{style:{animation:"bottomTop ".concat(.2+.15*t,"s")},gameMode:"Stairs",gameData:e,isFull:e.players.length===e.spots,handleJoinFromOutside:joinFromOutside},e.id))}):(0,i.jsxs)("h1",{className:"empty-state-battle",children:["There are no battles right now, you can create one in top right"," "]})]}):(0,i.jsx)("h1",{children:"\uD83D\uDEE0BATTLE NOT FOUND, THIS IS MAYBE BECAUSE IT WAS DELETED... \uD83D\uDEA7"})}Stairs.getLayout=e=>(0,i.jsx)(s.Z,{children:e})}},function(e){e.O(0,[83,462,748,774,888,179],function(){return e(e.s=9929)}),_N_E=e.O()}]);