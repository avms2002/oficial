"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[49096],{321329:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(667294),l=i(703404),s=i(839391),r=i(5859);function a(e){let{mountedPlacements:t,completeExperience:i,dismissExperience:a,experiences:c,fetchAllExperiences:n,fetchAllExperiencesMulti:d,fetchExperienceForPlacements:_,triggerExperimentsForPlacement:h,viewExperience:u}=(0,s.Z)(),{isBot:b}=(0,r.B)(),f=e&&!b?(0,l.MQ)(c,t,e):null;return(0,o.useMemo)(()=>({completeExperience:i,dismissExperience:a,experienceForPlacement:f,fetchAllExperiences:n,fetchAllExperiencesMulti:d,fetchExperienceForPlacements:_,triggerExperimentsForPlacement:h,viewExperience:u}),[i,a,f,n,d,_,h,u])}},416049:(e,t,i)=>{i.d(t,{Z:()=>o});let o=2},673463:(e,t,i)=>{i.d(t,{j:()=>r});let o={á:"a",à:"a",â:"a",ä:"a",ã:"a",å:"a",æ:"a",ç:"c",é:"e",è:"e",ê:"e",ë:"e",í:"i",ì:"i",î:"i",ï:"i",ñ:"n",ó:"o",ò:"o",ô:"o",ö:"o",õ:"o",ø:"o",œ:"o",ß:"s",ú:"u",ù:"u",û:"u",ü:"u"},l=e=>{if(!e)return"";let t="";for(let i=0;i<e.length;i+=1)t+=o[e.charAt(i)]||e.charAt(i);return t},s=(e,t)=>{let i=t.split(" "),o=e.split(" "),s=0;for(let e=0;e<o.length;e+=1)(l(o[e]).includes(i[s])||o[e].includes(i[s]))&&(s+=1);return s===i.length},r=(e,t,i="name")=>{let o=t.toLowerCase();return e.filter(e=>s(e[i].toLowerCase(),o))}},425577:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),l=i(140017),s=i(785893);function r(){let e=(0,l.ZP)();return(0,s.jsx)(o.JO,{accessibilityLabel:e.bt("Pasta secreta", "Secret board", "Accessibility label for icon indicating a secret board", undefined, true),color:"default",icon:"lock",inline:!0})}},267508:(e,t,i)=>{i.d(t,{Z:()=>c});var o=i(883119),l=i(860910),s=i(327540),r=i(785893);let a=({collaborator_count:e,useLegoLayout:t,type:i})=>t?(0,r.jsx)(o.xu,{marginEnd:e?2:0,children:(0,r.jsx)(s.Z,{type:i})}):(0,r.jsx)(s.Z,{type:i}),c=({board:e,showCollaborativeIcon:t,showPrivateIcon:i,showProtectedIcon:c,showSectionsIcon:n,useLegoLayout:d})=>{let _=e?.collaborating_users?.length||0;return t||i||c||n?(0,r.jsxs)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{paddingLeft:8}},"data-test-id":"board-picker-row-icon-list-box",direction:"row",display:"flex",marginEnd:d?0:5,children:[i&&(0,r.jsx)(a,{collaborator_count:_,type:"secret",useLegoLayout:d}),c&&(0,r.jsx)(a,{collaborator_count:_,type:"protected",useLegoLayout:d}),t&&(d?(0,r.jsx)(l.Z,{board:e,isCompact:!0,ownerOnly:!1}):(0,r.jsx)(s.Z,{type:"group"})),n&&(0,r.jsx)(s.Z,{type:"sections"})]}):null}},319510:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(883119),l=i(785893);let s=({image_url:e,naturalHeight:t,naturalWidth:i})=>(0,l.jsx)(o.xu,{"aria-hidden":"true",height:48,marginBottom:1,marginEnd:2,marginTop:1,overflow:"hidden",width:48,children:(0,l.jsx)(o.zd,{height:48,rounding:2,wash:!0,width:48,children:(0,l.jsx)(o.Ee,{alt:"",naturalHeight:t,naturalWidth:i,src:e})})})},465274:(e,t,i)=>{i.d(t,{Z:()=>u});var o=i(883119),l=i(549629),s=i(140017),r=i(5859),a=i(425577),c=i(668649),n=i(785893);function d({cover:e,height:t,image:i,width:l}){return e?(0,n.jsx)(c.Z,{customCover:e.isCustom,height:t,imgPos:e.position||{width:0,height:0,x:0,y:0},imgUrl:e.url??"",width:l}):i?(0,n.jsx)(o.zd,{height:t,wash:!0,width:l,children:(0,n.jsx)(o.Ee,{alt:"Board collage cover image",color:"#EFEFEF",fit:"cover",naturalHeight:i.height??1,naturalWidth:i.width??1,src:i.url??""})}):(0,n.jsx)(o.xu,{color:"secondary",height:t,width:l})}var _=i(175395),h=i(818177);function u({boardThumbs:e=[],cover:t,editButton:i,isActive:c,isSecret:u,layout:b,sensitivityScreenAuxData:f,showSensitivityScreen:p=!1}){let g=(0,s.ZP)();(0,l.Q)(p?{component:13861,view_type:215,aux_data:f}:null);let{isRTL:m}=(0,r.B)(),{height:x,width:y}=(0,h.F)(b),I=t?void 0:e[0],w=e.slice(t?0:1);return(0,n.jsxs)(o.zd,{height:x,rounding:4,wash:c,width:y,children:[(0,n.jsx)(o.xu,{"aria-label":"Board",color:"default",dangerouslySetInlineStyle:{__style:p?{filter:"blur(20px)"}:{}},display:"flex",height:"100%",justifyContent:"between",width:"100%",children:(0,n.jsxs)(o.xu,{"aria-hidden":"true",display:"flex",height:"100%",justifyContent:"between",width:"100%",children:[(0,n.jsx)(d,{cover:t,height:x,image:I,width:Math.floor(y/3*2)}),(0,n.jsxs)(o.kC,{alignItems:"stretch",direction:"column",flex:"none",height:"100%",justifyContent:"between",children:[(0,n.jsx)(_.Z,{height:Math.floor(x/2),image:w[0],width:Math.floor(y/3)}),(0,n.jsx)(_.Z,{height:Math.floor(x/2),image:w[1],width:Math.floor(y/3)})]})]})}),u&&(0,n.jsx)(o.xu,{alignItems:"center",color:"default",display:"flex",height:32,justifyContent:"center",left:!m,marginStart:2,marginTop:2,position:"absolute",right:m,rounding:"circle",top:!0,width:32,children:(0,n.jsx)(a.Z,{})}),c&&i&&(0,n.jsx)(o.xu,{alignItems:"center",bottom:!0,color:"default",display:"flex",height:32,justifyContent:"center",left:m,marginBottom:2,marginEnd:2,position:"absolute",right:!m,rounding:"circle",width:32,children:i}),p&&(0,n.jsx)(o.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{background:"rgba(0,0,0,0.5)"}},display:"flex",height:"100%",justifyContent:"center",position:"absolute",top:!0,width:"100%",children:(0,n.jsx)(o.X6,{align:"center",color:"light",size:"400",children:g.bt("Esta pasta pode ter conteúdo sensível", "This board may contain sensitive content", "profileBoardCard.boardCollage.heading", undefined, true)})})]})}},175395:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(883119),l=i(785893);function s({image:e,width:t,height:i}){return e?(0,l.jsx)(o.zd,{height:i,wash:!0,width:t,children:(0,l.jsx)(o.Ee,{alt:"Board collage image",color:"#EFEFEF",fit:"cover",naturalHeight:e.height||1,naturalWidth:e.width||1,src:e.url||""})}):(0,l.jsx)(o.xu,{color:"secondary",height:i,width:t})}},860910:(e,t,i)=>{i.d(t,{Z:()=>n});var o=i(883119),l=i(140017),s=i(339001),r=i(149722),a=i(785893);function c(e){let t=e?.imageMediumUrl??e?.image_medium_url??"";return{name:e?.fullName??e?.full_name??"",src:"https://s.pinimg.com/images/user/default_75.png"===t?void 0:t}}function n({board:e,forceViewer:t,isCompact:i,ownerOnly:n}){let d=(0,l.ZP)(),_=(0,r.Z)(),h=n?[c(e?.owner)]:(function(e,t,i){let{collaborated_by_me:o,collaborating_users:l,owner:s}=e??{},r=l??[],a=[s];if(o||i){let e=r.findIndex(e=>t.isAuth&&e.id===t.id);if(-1!==e){let t=r.splice(e,1)[0];a.push(t)}else a.push(t)}return[...a,...[...r].sort((e,t)=>(e.full_name??"")>(t.full_name??"")?1:(t.full_name??"")>(e.full_name??"")?-1:0)]})(e,_,t).map(c),u=h.slice(0,3).map(e=>e.name),b="";switch(h.length){case 3:b=(0,s.Wc)(`${d.bt("{{ first }}, {{ second }} e {{ last }}", "{{ first }}, {{ second }}, and {{ last }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.ThreeAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`,last:`${u[2]??""}`});break;case 2:b=(0,s.Wc)(`${d.bt("{{ first }} e {{ second }}", "{{ first }} and {{ second }}", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.usernames.TwoAvatars", undefined, true)}`,{first:`${u[0]??""}`,second:`${u[1]??""}`});break;default:b=u.join(", ")}let f=h.length>3?(0,s.Wc)(`, ${d.nbt(["Colaboradores: {{ userNames }} e mais {{ leftCount }}.", "Colaboradores: {{ userNames }} e mais {{ leftCount }}."], h.length - 3, "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.aboveThree", true)}`,{userNames:b,leftCount:`${h.length-3}`}):(0,s.Wc)(`, ${d.bt("Colaboradores: {{ userNames }}.", "Collaborators: {{ userNames }}.", "CollaboratorsFacePile.AvatarGroup.accessibilityLabel.notAboveThree", undefined, true)}`,{userNames:b});return(0,a.jsx)(o.HE,{accessibilityLabel:f,collaborators:h,size:i?"xs":"sm"})}},818177:(e,t,i)=>{i.d(t,{F:()=>l,m:()=>s});let o={square:{width:236,height:157},wide:{width:320,height:213}};function l(e){return o["square"===e?"square":"wide"]}function s(e){return l(e).width+16}},23625:(e,t,i)=>{i.d(t,{Z:()=>a});var o=i(883119),l=i(140017),s=i(465274),r=i(785893);function a({boardThumbs:e,isChangeBoardModal:t,isSecret:i,name:a,onNameChange:c,onVisibilityChange:n,submitError:d}){let _=(0,l.ZP)();return(0,r.jsx)(o.xu,{paddingX:8,children:(0,r.jsxs)(o.kC,{direction:"column",gap:{row:0,column:4},children:[e&&!t&&(0,r.jsx)(s.Z,{boardThumbs:e,editButton:null,isActive:!1,isSecret:!1,layout:"square"}),(0,r.jsxs)(o.kC,{direction:"column",gap:{row:0,column:2},children:[(0,r.jsx)(o.xv,{size:"100",children:_.bt("Nome", "Name", "boardlessPins.createBoard.boardNameText", undefined, true)}),(0,r.jsx)(o.nv,{id:"boardName",name:"boardName",onChange:c,placeholder:_.bt("Adicione um título, como \"Faça você mesmo\" ou \"Receitas\"", "Add a title, like “DIY” or “Recipes”", "boardlessPins.createBoard.boardNameTextPlaceholder", undefined, true),size:"lg",value:a})]}),(0,r.jsxs)(o.kC,{direction:"column",gap:{row:0,column:2},children:[(0,r.jsx)(o.xv,{size:"100",children:_.bt("Visibilidade", "Visibility", "boardlessPins.createBoard.visibilityTitle", undefined, true)}),(0,r.jsxs)(o.kC,{gap:{row:4,column:0},children:[(0,r.jsx)(o.XZ,{checked:i,id:"boardVisibility",name:"boardVisibility",onChange:n}),(0,r.jsxs)(o.kC,{direction:"column",gap:{row:0,column:1},children:[(0,r.jsx)(o.xv,{children:_.bt("Manter essa pasta secreta", "Keep this board secret", "boardlessPins.createBoard.visibilityCheckbox", undefined, true)}),(0,r.jsx)(o.xv,{color:"subtle",children:_.bt("Apenas você e seus colaboradores poderão ver a pasta.", "So only you and collaborators can see it.", "boardlessPins.createBoard.visibilityCheckboxInfo", undefined, true)})]})]})]}),d&&(0,r.jsx)(o.xv,{color:"error",children:d})]})})}},895581:(e,t,i)=>{i.d(t,{Z:()=>l});var o=i(227258);function l(e,t,i){return(0,o.U)("BoardResource",{options:{board_id:e,field_set_key:t,...i?{orbac_subject_id:i}:{}}})}},430408:(e,t,i)=>{i.d(t,{Z:()=>u,S:()=>h});var o=i(216167),l=i(895581),s=i(265192),r=i(64819),a=i(937310),c=i(622888);let n=e=>t=>{c.Z.showError(function(e,t){switch(e.api_error_code){case 2171:case 2172:case 2173:return t.bt("Aguarde até concluir a ação da pasta anterior.", "Please wait until the previous board action finishes.", " - ", undefined, true);default:return e.message}}(t,e))},d=e=>(0,r.N8)(e.sectionId?a.Z.BOARD_SECTION_PINS:a.Z.BOARDFEED,e.sectionId||e.boardId);function _(e,t){let{source:i,target:o}=e;o.boardId!==i.boardId?(t((0,l.Z)(i.boardId,"pin_count")),t((0,l.Z)(o.boardId,"pin_count"))):i.sectionId&&o.sectionId||t((0,l.Z)(o.boardId,"pin_count")),i.sectionId&&t((0,s.Z)(i.sectionId)),o.sectionId&&t((0,s.Z)(o.sectionId))}function h(e){return t=>{let{selectedPinIds:i,source:o,target:l}=e;t((0,r.EX)({feedId:o.sectionId||o.boardId,feedType:o.sectionId?a.Z.BOARD_SECTION_PINS:a.Z.BOARDFEED,itemIds:i,itemType:"pin"})),t((0,r.vX)({feedId:l.sectionId||l.boardId,feedType:l.sectionId?a.Z.BOARD_SECTION_PINS:a.Z.BOARDFEED,itemIds:i,itemType:"pin"})),_(e,t)}}function u(e,t){return i=>(function(e,t,i){let{inverseSelection:l,selectedPinIds:s,source:c,target:_,orbacSubjectId:h}=e;if(c.boardId===_.boardId&&(c.sectionId||null)===(_.sectionId||null))return Promise.reject();if(l){let e={board_id:c.boardId,new_board_id:_.boardId,old_section_id:c.sectionId||void 0,new_section_id:_.sectionId||void 0,pin_ids:s,orbac_subject_id:h};return o.Z.create("BulkEditSelectAllResource",e).callUpdate({showError:!1}).then(()=>Promise.all([t(d(c)),t(d(_))])).catch(n(i))}{let e=(e,i)=>{t((0,r.EX)({feedId:e.sectionId||e.boardId,feedType:e.sectionId?a.Z.BOARD_SECTION_PINS:a.Z.BOARDFEED,itemIds:s,itemType:"pin"})),t((0,r.vX)({feedId:i.sectionId||i.boardId,feedType:i.sectionId?a.Z.BOARD_SECTION_PINS:a.Z.BOARDFEED,itemIds:s,itemType:"pin"}))};e(c,_);let l=()=>e(_,c);if(_.boardId===c.boardId){if(_.sectionId){let e={section_id:_.sectionId,pins:s,orbac_subject_id:h};return o.Z.create("BoardSectionEditResource",e).callUpdate({showError:!1}).catch(e=>{l(),n(i)(e)})}{let e={section_id:c.sectionId,pins:s,orbac_subject_id:h};return o.Z.create("BoardSectionPinsResource",e).callDelete({showError:!1}).catch(e=>{l(),n(i)(e)})}}{let e={board_id:_.boardId,section_id:_.sectionId||void 0,pin_ids:s,orbac_subject_id:h};return o.Z.create("BulkEditResource",e).callUpdate({showError:!1}).catch(e=>{l(),n(i)(e)})}}})(e,i,t).then(()=>_(e,i))}},327540:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(883119),l=i(140017),s=i(785893);let r=function({type:e}){let t=(0,l.ZP)(),i={group:{accessibilityLabel:t.bt("pasta compartilhada", "group board", "Board picker group board icon", undefined, true),icon:"people"},protected:{accessibilityLabel:t.bt("pasta protegida", "protected board", "Board picker protected board icon", undefined, true),icon:"protect"},secret:{accessibilityLabel:t.bt("Pasta secreta", "secret board", "Board picker secret board icon", undefined, true),icon:"lock"},sections:{accessibilityLabel:t.bt("pasta com subpastas", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-forward"},sectionsInline:{accessibilityLabel:t.bt("pasta com subpastas", "board with sections", "Board picker board with sections icon", undefined, true),icon:"arrow-down"}}[e];return(0,s.jsx)(o.xu,{marginStart:1,children:(0,s.jsx)(o.xu,{marginStart:2,children:"sections"===e||"sectionsInline"===e?(0,s.jsx)(o.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:"12"}):(0,s.jsx)(o.JO,{accessibilityLabel:i.accessibilityLabel,color:"default",icon:i.icon,size:16})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/49096.pt_BR-660ad2c3ab77a99a.mjs.map