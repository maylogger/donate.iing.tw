!function(e){function t(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return e[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/resource/",t(0)}({0:function(e,t,n){e.exports=n(105)},2:function(e,t){e.exports=React},3:function(e,t,n){var a;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function s(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e+=" "+n;else if(Array.isArray(n))e+=" "+s.apply(null,n);else if("object"===a)for(var r in n)n.hasOwnProperty(r)&&n[r]&&(e+=" "+r)}}return e.substr(1)}"undefined"!=typeof e&&e.exports?e.exports=s:(a=function(){return s}.call(t,n,t,e),!(void 0!==a&&(e.exports=a)))}()},89:function(e,t,n){"use strict";var a=n(2),s=(n(3),{"基隆市":{"仁愛區":"200","信義區":"201","中正區":"202","中山區":"203","安樂區":"204","暖暖區":"205","七堵區":"206"},"台北市":{"中正區":"100","大同區":"103","中山區":"104","松山區":"105","大安區":"106","萬華區":"108","信義區":"110","士林區":"111","北投區":"112","內湖區":"114","南港區":"115","文山區":"116"},"新北市":{"萬里區":"207","金山區":"208","板橋區":"220","汐止區":"221","深坑區":"222","石碇區":"223","瑞芳區":"224","平溪區":"226","雙溪區":"227","貢寮區":"228","新店區":"231","坪林區":"232","烏來區":"233","永和區":"234","中和區":"235","土城區":"236","三峽區":"237","樹林區":"238","鶯歌區":"239","三重區":"241","新莊區":"242","泰山區":"243","林口區":"244","蘆洲區":"247","五股區":"248","八里區":"249","淡水區":"251","三芝區":"252","石門區":"253"},"宜蘭縣":{"宜蘭市":"260","頭城鎮":"261","礁溪鄉":"262","壯圍鄉":"263","員山鄉":"264","羅東鎮":"265","三星鄉":"266","大同鄉":"267","五結鄉":"268","冬山鄉":"269","蘇澳鎮":"270","南澳鄉":"272","釣魚台列嶼":"290"},"新竹市":{"東區":"300","北區":"300","香山區":"300"},"新竹縣":{"竹北市":"302","湖口鄉":"303","新豐鄉":"304","新埔鎮":"305","關西鎮":"306","芎林鄉":"307","寶山鄉":"308","竹東鎮":"310","五峰鄉":"311","橫山鄉":"312","尖石鄉":"313","北埔鄉":"314","峨嵋鄉":"315"},"桃園市":{"中壢區":"320","平鎮區":"324","龍潭區":"325","楊梅區":"326","新屋區":"327","觀音區":"328","桃園區":"330","龜山區":"333","八德區":"334","大溪區":"335","復興區":"336","大園區":"337","蘆竹區":"338"},"苗栗縣":{"竹南鎮":"350","頭份鎮":"351","三灣鄉":"352","南庄鄉":"353","獅潭鄉":"354","後龍鎮":"356","通霄鎮":"357","苑裡鎮":"358","苗栗市":"360","造橋鄉":"361","頭屋鄉":"362","公館鄉":"363","大湖鄉":"364","泰安鄉":"365","銅鑼鄉":"366","三義鄉":"367","西湖鄉":"368","卓蘭鎮":"369"},"台中市":{"中區":"400","東區":"401","南區":"402","西區":"403","北區":"404","北屯區":"406","西屯區":"407","南屯區":"408","太平區":"411","大里區":"412","霧峰區":"413","烏日區":"414","豐原區":"420","后里區":"421","石岡區":"422","東勢區":"423","和平區":"424","新社區":"426","潭子區":"427","大雅區":"428","神岡區":"429","大肚區":"432","沙鹿區":"433","龍井區":"434","梧棲區":"435","清水區":"436","大甲區":"437","外埔區":"438","大安區":"439"},"彰化縣":{"彰化市":"500","芬園鄉":"502","花壇鄉":"503","秀水鄉":"504","鹿港鎮":"505","福興鄉":"506","線西鄉":"507","和美鎮":"508","伸港鄉":"509","員林鎮":"510","社頭鄉":"511","永靖鄉":"512","埔心鄉":"513","溪湖鎮":"514","大村鄉":"515","埔鹽鄉":"516","田中鎮":"520","北斗鎮":"521","田尾鄉":"522","埤頭鄉":"523","溪州鄉":"524","竹塘鄉":"525","二林鎮":"526","大城鄉":"527","芳苑鄉":"528","二水鄉":"530"},"南投縣":{"南投市":"540","中寮鄉":"541","草屯鎮":"542","國姓鄉":"544","埔里鎮":"545","仁愛鄉":"546","名間鄉":"551","集集鎮":"552","水里鄉":"553","魚池鄉":"555","信義鄉":"556","竹山鎮":"557","鹿谷鄉":"558"},"嘉義市":{"東區":"600","西區":"600"},"嘉義縣":{"番路鄉":"602","梅山鄉":"603","竹崎鄉":"604","阿里山":"605","中埔鄉":"606","大埔鄉":"607","水上鄉":"608","鹿草鄉":"611","太保市":"612","朴子市":"613","東石鄉":"614","六腳鄉":"615","新港鄉":"616","民雄鄉":"621","大林鎮":"622","溪口鄉":"623","義竹鄉":"624","布袋鎮":"625"},"雲林縣":{"斗南鎮":"630","大埤鄉":"631","虎尾鎮":"632","土庫鎮":"633","褒忠鄉":"634","東勢鄉":"635","臺西鄉":"636","崙背鄉":"637","麥寮鄉":"638","斗六市":"640","林內鄉":"643","古坑鄉":"646","莿桐鄉":"647","西螺鎮":"648","二崙鄉":"649","北港鎮":"651","水林鄉":"652","口湖鄉":"653","四湖鄉":"654","元長鄉":"655"},"台南市":{"中西區":"700","東區":"701","南區":"702","北區":"704","安平區":"708","安南區":"709","永康區":"710","歸仁區":"711","新化區":"712","左鎮區":"713","玉井區":"714","楠西區":"715","南化區":"716","仁德區":"717","關廟區":"718","龍崎區":"719","官田區":"720","麻豆區":"721","佳里區":"722","西港區":"723","七股區":"724","將軍區":"725","學甲區":"726","北門區":"727","新營區":"730","後壁區":"731","白河區":"732","東山區":"733","六甲區":"734","下營區":"735","柳營區":"736","鹽水區":"737","善化區":"741","大內區":"742","山上區":"743","新市區":"744","安定區":"745"},"高雄市":{"新興區":"800","前金區":"801","苓雅區":"802","鹽埕區":"803","鼓山區":"804","旗津區":"805","前鎮區":"806","三民區":"807","楠梓區":"811","小港區":"812","左營區":"813","仁武區":"814","大社區":"815","岡山區":"820","路竹區":"821","阿蓮區":"822","田寮鄉":"823","燕巢區":"824","橋頭區":"825","梓官區":"826","彌陀區":"827","永安區":"828","湖內鄉":"829","鳳山區":"830","大寮區":"831","林園區":"832","鳥松區":"833","大樹區":"840","旗山區":"842","美濃區":"843","六龜區":"844","內門區":"845","杉林區":"846","甲仙區":"847","桃源區":"848","那瑪夏區":"849","茂林區":"851","茄萣區":"852"},"屏東縣":{"屏東市":"900","三地門":"901","霧臺鄉":"902","瑪家鄉":"903","九如鄉":"904","里港鄉":"905","高樹鄉":"906","鹽埔鄉":"907","長治鄉":"908","麟洛鄉":"909","竹田鄉":"911","內埔鄉":"912","萬丹鄉":"913","潮州鎮":"920","泰武鄉":"921","來義鄉":"922","萬巒鄉":"923","崁頂鄉":"924","新埤鄉":"925","南州鄉":"926","林邊鄉":"927","東港鎮":"928","琉球鄉":"929","佳冬鄉":"931","新園鄉":"932","枋寮鄉":"940","枋山鄉":"941","春日鄉":"942","獅子鄉":"943","車城鄉":"944","牡丹鄉":"945","恆春鎮":"946","滿州鄉":"947"},"台東縣":{"臺東市":"950","綠島鄉":"951","蘭嶼鄉":"952","延平鄉":"953","卑南鄉":"954","鹿野鄉":"955","關山鎮":"956","海端鄉":"957","池上鄉":"958","東河鄉":"959","成功鎮":"961","長濱鄉":"962","太麻里鄉":"963","金峰鄉":"964","大武鄉":"965","達仁鄉":"966"},"花蓮縣":{"花蓮市":"970","新城鄉":"971","秀林鄉":"972","吉安鄉":"973","壽豐鄉":"974","鳳林鎮":"975","光復鄉":"976","豐濱鄉":"977","瑞穗鄉":"978","萬榮鄉":"979","玉里鎮":"981","卓溪鄉":"982","富里鄉":"983"},"金門縣":{"金沙鎮":"890","金湖鎮":"891","金寧鄉":"892","金城鎮":"893","烈嶼鄉":"894","烏坵鄉":"896"},"連江縣":{"南竿鄉":"209","北竿鄉":"210","莒光鄉":"211","東引鄉":"212"},"澎湖縣":{"馬公市":"880","西嶼鄉":"881","望安鄉":"882","七美鄉":"883","白沙鄉":"884","湖西鄉":"885"},"南海諸島":{"東沙":"817","南沙":"819"}}),r=a.createClass({displayName:"TWzipcode",getInitialState:function(){return{county:"",district:"",zipcode:"",address:""}},getData:function(){return this.state},validInput:function(){var e=[],t=a.findDOMNode(this.refs.county).value,n=a.findDOMNode(this.refs.district).value;if(""==t&&e.push("請選擇收件縣市"),""==n&&e.push("請選擇收件區域"),e.length)return e;var r=s[t]&&s[t][n];return $.trim(a.findDOMNode(this.refs.address).value)==r+" "+t+n&&e.push("請輸入詳細地址"),e},onChangeCounty:function(){var e=a.findDOMNode(this.refs.county).value,t=null;for(var n in s[e]){t=n;break}var r=s[e]&&s[e][t];if(r){var i=a.findDOMNode(this.refs.address);i.value=r+" "+e+t,a.findDOMNode(this.refs.district).focus()}this.setState({county:e,district:t,zip:r,address:r+" "+e+t},function(){this.props.onChange&&this.props.onChange()})},onChangeDistrict:function(){var e=a.findDOMNode(this.refs.county).value,t=a.findDOMNode(this.refs.district).value,n=s[e]&&s[e][t];if(n){var r=a.findDOMNode(this.refs.address);r.value=n+" "+e+t,r.focus()}this.setState({district:t,address:n+" "+e+t},function(){this.props.onChange&&this.props.onChange()})},onChangeAddress:function(){var e=a.findDOMNode(this.refs.address).value;this.setState({address:e},function(){this.props.onChange&&this.props.onChange()})},setAllValue:function(e){var t=e.county,n=e.district,s=e.zip,r=e.address;a.findDOMNode(this.refs.address).value=r,this.setState({county:t,district:n,zip:s,address:r})},render:function(){var e=[];for(var t in s)e.push(a.createElement("option",{selected:this.state.county==t,key:t,value:t},t));var n=[];for(var t in s[this.state.county])n.push(a.createElement("option",{selected:this.state.district==t,key:t,value:t},t));return a.createElement("div",{className:"modify_addr_text",id:"twzipcode"},a.createElement("select",{disabled:this.props.disabled,onChange:this.onChangeCounty,ref:"county",className:"county"},a.createElement("option",{value:""},"縣市"),e),a.createElement("select",{disabled:this.props.disabled,onChange:this.onChangeDistrict,ref:"district",className:"district"},n.length>0?n:a.createElement("option",{value:""},"鄉鎮市區")),a.createElement("br",null),a.createElement("input",{name:"zipcode",type:"hidden",value:this.state.zip,className:"zipcode"}),a.createElement("input",{disabled:this.props.disabled,onChange:this.onChangeAddress,name:"address",type:"text",style:{width:"100%"},ref:"address",className:"zipcode"}))}});e.exports=r},100:function(e,t,n){"use strict";var a=n(2),s=(n(3),n(89)),r="http://52.68.16.72",i=a.createClass({displayName:"Donation",getInitialState:function(){return{E:0,T:0,register:1,sameUser:!0,sameAddr:!0,sendRecept:1,status:this.props.status}},onSelectE:function(e){this.setState({E:e})},onSelectT:function(e){this.setState({T:e})},_renderPrice:function(e){return 0==this.state.E&&0==this.state.T?e?a.createElement("div",{style:{color:"red","font-weight":"bold"}},"請先選擇悠遊卡或一卡通張數與填寫相關資料"):null:a.createElement("div",{style:{"font-weight":"bold","font-size":"30px"}}," 捐款金額： ",1e3*(this.state.E+this.state.T),a.createElement("hr",null))},validate:function(){var e=[];0==this.state.E&&0==this.state.T&&e.push("請至少選擇一張悠遊卡或一張一卡通"),""==$.trim(a.findDOMNode(this.refs.username).value)&&e.push("請輸入收件者姓名");var t=this.refs.zip.validInput();if(t.length&&[].push.apply(e,t),""==$.trim(a.findDOMNode(this.refs.phone).value)&&e.push("請輸入收件者電話"),""==$.trim(a.findDOMNode(this.refs.email).value)&&e.push("請輸入捐款者 email "),this.state.register&&(""==$.trim(a.findDOMNode(this.refs.dn_identify).value)&&e.push("請輸入捐款者身份證字號（公司請寫統一編號） "),this.state.sameUser||""!=$.trim(a.findDOMNode(this.refs.dn_name).value)||e.push("請輸入捐款者姓名（公司請寫公司名稱） "),!this.state.sameAddr)){var n=this.refs.zip2.validInput();n.length&&[].push.apply(e,n)}return e},confirm:function(){var e=["請再次確認您輸入的以下聯絡資訊正確（若輸入錯誤我們可能無法寄送給您）："],t=this.refs.zip.getData();return e.push("收件地址："+t.address),e.push("聯絡電話："+a.findDOMNode(this.refs.phone).value),e.push("收件人："+a.findDOMNode(this.refs.username).value),e.push("Email："+a.findDOMNode(this.refs.email).value),e.push("確認後請按確定前往線上付款頁面"),window.confirm(e.join("\n"))},onSubmit:function(e){var t=this,n=[];if(n.length)return alert(n.join("\n")),!1;if(!this.confirm())return!1;var s=["username","phone","email"],i={E:this.state.E,T:this.state.T};for(var d in s){var _=a.findDOMNode(this.refs[s[d]]);null!=_.value&&(i[s[d]]=_.value)}var o=this.refs.zip.getData();for(var d in o)i[d]=o[d];var u=this.refs.zip2.getData();for(var d in u)i["donate_"+d]=u[d];i.register=this.state.register,i.sendRecept=this.state.sendRecept,i.dn_name=a.findDOMNode(this.refs.dn_name).value,i.dn_identify=a.findDOMNode(this.refs.dn_identify).value,i.sameAddr=this.state.sameAddr,i.sameUser=this.state.sameUser,$.post(r+"/api/donate-1",i,function(e){return 0==e.ok?(alert(e.msg),!0):void t.setState({_post:e},function(){a.findDOMNode(t.refs.form).submit()})}),e.preventDefault()},onChangeRegister:function(e){this.setState({register:e})},onChangeSameUser:function(e){e.target.checked&&(a.findDOMNode(this.refs.dn_name).value=a.findDOMNode(this.refs.username).value),this.setState({sameUser:e.target.checked})},onChangeSameAddr:function(e){e.target.checked&&this.refs.zip2.setAllValue(this.refs.zip.getData()),this.setState({sameAddr:e.target.checked})},onChangeUser:function(e){this.state.sameUser&&(a.findDOMNode(this.refs.dn_name).value=e.target.value)},onChangeAddr:function(e){this.state.sameAddr&&this.refs.zip2.setAllValue(this.refs.zip.getData())},onChangeSendRecept:function(e){this.setState({sendRecept:e})},render:function(){var e=this,t=(this.props.item,this.props.votes,[]);if(this.state._post)for(var n in this.state._post)t.push(a.createElement("input",{type:"hidden",name:n,value:this.state._post[n]}));var r="";0==this.state.status.E?r="(已全數贈完)":this.state.status.E<10&&(r="(目前只剩"+this.state.status.E+"張)");var i="";return 0==this.state.status.T?i="(已全數贈完)":this.state.status.T<10&&(i="(目前只剩"+this.state.status.T+"張)"),a.createElement("div",null,(0!=this.state.status.E||0!=this.state.status.T)&&a.createElement("div",null,a.createElement("h3",null,"請透過填寫以下表單參與活動"),a.createElement("div",{className:"custom-donate-amount"},a.createElement("form",{ref:"form",action:"https://api.pay2go.com/MPG/mpg_gateway",method:"POST"},t,a.createElement("p",null,a.createElement("h3",null,"* 請選擇悠遊卡張數 ",r," "),a.createElement("label",{style:{"font-size":"20px"}},a.createElement("input",{defaultChecked:0==this.state.status.E,onClick:this.onSelectE.bind(null,0),name:"cnt",type:"radio",value:"0"}),"無"),"   ",[1,3,5,10].map(function(t){return e.state.status.E>=t&&a.createElement("label",{style:{"font-size":"20px"}},a.createElement("input",{onClick:e.onSelectE.bind(null,t),name:"cnt",type:"radio",value:t})," ",t,"   ")})),a.createElement("p",null,a.createElement("h3",null,"* 請選擇一卡通張數 ",i),a.createElement("label",{style:{"font-size":"20px"}},a.createElement("input",{defaultChecked:0==this.state.status.T,onClick:this.onSelectT.bind(null,0),name:"cnt2",type:"radio",value:"0"}),"無"),"   ",[1,3,5,10].map(function(t){return e.state.status.T>=t&&a.createElement("label",{style:{"font-size":"20px"}},a.createElement("input",{onClick:e.onSelectT.bind(null,t),name:"cnt2",type:"radio",value:t})," ",t,"   ")})),a.createElement("hr",null),a.createElement("p",null,this._renderPrice()),a.createElement("p",null,a.createElement("h3",null,"* 請填寫收件者姓名"),a.createElement("input",{type:"text",onChange:this.onChangeUser,ref:"username",name:"username"})),a.createElement("p",null,a.createElement("h3",null,"* 請填寫完整寄送地址"),a.createElement(s,{onChange:this.onChangeAddr,ref:"zip"})),a.createElement("p",null,a.createElement("h3",null,"* 請填寫收件者電話"),a.createElement("input",{type:"text",ref:"phone",name:"phone"})),a.createElement("p",null,a.createElement("h3",null,"* 請填寫收件者 Email "),a.createElement("input",{type:"text",ref:"email",name:"email"})),a.createElement("h3",null,"* 政治獻金申報：",a.createElement("label",null,a.createElement("input",{onClick:this.onChangeRegister.bind(null,1),name:"anno",defaultChecked:1==this.state.register,type:"radio",value:"1"}),"具名"),"    ",a.createElement("label",null,a.createElement("input",{onClick:this.onChangeRegister.bind(null,0),name:"anno",defaultChecked:0==this.state.register,type:"radio",value:"0"}),"匿名")),a.createElement("fieldset",{style:{display:1==this.state.register?"block":"none"}},a.createElement("legend",null,"政治獻金申報資料"),a.createElement("p",null,"身份證字號（公司請寫統一編號）: ",a.createElement("input",{ref:"dn_identify",type:"text"})),a.createElement("p",null,"捐款人姓名（公司請寫公司名稱）: ",a.createElement("input",{disabled:this.state.sameUser,ref:"dn_name",type:"text"}),a.createElement("label",{className:"sameUser"}," ",a.createElement("input",{type:"checkbox",defaultChecked:this.state.sameUser,onClick:this.onChangeSameUser})," 同收件人 ")),a.createElement("p",null,"戶籍地址: ",a.createElement(s,{disabled:this.state.sameAddr,ref:"zip2"}),a.createElement("label",null," ",a.createElement("input",{defaultChecked:this.state.sameAddr,onClick:this.onChangeSameAddr,type:"checkbox"}),"同寄送地址 ")),a.createElement("p",null,"是否寄送政治獻金收據：",a.createElement("label",null,a.createElement("input",{name:"send",onClick:this.onChangeSendRecept.bind(null,1),defaultChecked:1==this.state.sendRecept,type:"radio",value:"1"}),"是"),"    ",a.createElement("label",null,a.createElement("input",{name:"send",onClick:this.onChangeSendRecept.bind(null,0),defaultChecked:0==this.state.sendRecept,type:"radio",value:"0"}),"否"))),a.createElement("p",null),this._renderPrice(!0),a.createElement("br",null),a.createElement("p",null,"捐款人注意事項"),a.createElement("ul",null,a.createElement("li",null,"一、捐款人必須為本國國民且具有選舉權。"),a.createElement("li",null,"二、請註明捐款人姓名、身分證字號、地址(含戶籍地址與收件人地址以便寄發收據)、電話。"),a.createElement("li",null,"三、任何人不得以本人以外之名義捐贈。"),a.createElement("li",null,"四、匿名捐贈不得超過新台幣1萬元。"),a.createElement("li",null,"五、個人對同一擬參選人每年捐贈總額不得超過新台幣10萬元；對不同擬參選人每年捐贈總額合計不得超過新 台幣20萬元。"),a.createElement("li",null,"六、於申報所得稅時，捐款金額可作為列舉扣除額；每申報戶最高為綜合所得額20%，且上限為新台幣20萬元。"),a.createElement("li",null,"七、本活動必須透過此表單連結送出，並進行線上捐款方可符合資格。"),a.createElement("li",null,"其他規定請參閱政治獻金法或監察院網站。                ")),a.createElement("input",{onClick:this.onSubmit,type:"button",className:"btn btn-primary donate-button",value:"送出捐款"})))),0==this.props.status.E&&0==this.props.status.T&&a.createElement("div",{style:{"min-height":"200px"}},a.createElement("p",null),a.createElement("p",null),a.createElement("p",null," 感謝您的支持，目前悠遊卡跟一卡通專案已全數贈完，請密切留意我們的最新消息。 ")))}});e.exports=i},105:function(e,t,n){"use strict";var a=n(2),s=(n(3),n(100)),r=!1,i="http://52.68.16.72",d=function _(){$.get(i+"/api/status",function(e){r||(a.render(a.createElement(s,{status:e}),document.getElementById("react-root")),r=!0)}),window.setTimeout(function(){r||(0==$("#msg").length&&$("#react-root").prepend("<div id='msg'>目前站上使用者人數過多，請再耐心稍候 ...</div>"),console.log("timeout..."),_())},1e4)};d()}});