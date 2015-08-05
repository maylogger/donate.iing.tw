/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/resource/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(104);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(2);
	var cx = __webpack_require__(4);

	var data = {
	  '基隆市': { '仁愛區': '200', '信義區': '201', '中正區': '202', '中山區': '203', '安樂區': '204', '暖暖區': '205', '七堵區': '206' },
	  '台北市': { '中正區': '100', '大同區': '103', '中山區': '104', '松山區': '105', '大安區': '106', '萬華區': '108', '信義區': '110', '士林區': '111', '北投區': '112', '內湖區': '114', '南港區': '115', '文山區': '116' },
	  '新北市': {
	    '萬里區': '207', '金山區': '208', '板橋區': '220', '汐止區': '221', '深坑區': '222', '石碇區': '223',
	    '瑞芳區': '224', '平溪區': '226', '雙溪區': '227', '貢寮區': '228', '新店區': '231', '坪林區': '232',
	    '烏來區': '233', '永和區': '234', '中和區': '235', '土城區': '236', '三峽區': '237', '樹林區': '238',
	    '鶯歌區': '239', '三重區': '241', '新莊區': '242', '泰山區': '243', '林口區': '244', '蘆洲區': '247',
	    '五股區': '248', '八里區': '249', '淡水區': '251', '三芝區': '252', '石門區': '253'
	  },
	  '宜蘭縣': {
	    '宜蘭市': '260', '頭城鎮': '261', '礁溪鄉': '262', '壯圍鄉': '263', '員山鄉': '264', '羅東鎮': '265',
	    '三星鄉': '266', '大同鄉': '267', '五結鄉': '268', '冬山鄉': '269', '蘇澳鎮': '270', '南澳鄉': '272',
	    '釣魚台列嶼': '290'
	  },
	  '新竹市': { '東區': '300', '北區': '300', '香山區': '300' },
	  '新竹縣': {
	    '竹北市': '302', '湖口鄉': '303', '新豐鄉': '304', '新埔鎮': '305', '關西鎮': '306', '芎林鄉': '307',
	    '寶山鄉': '308', '竹東鎮': '310', '五峰鄉': '311', '橫山鄉': '312', '尖石鄉': '313', '北埔鄉': '314',
	    '峨嵋鄉': '315'
	  },
	  '桃園市': {
	    '中壢區': '320', '平鎮區': '324', '龍潭區': '325', '楊梅區': '326', '新屋區': '327', '觀音區': '328',
	    '桃園區': '330', '龜山區': '333', '八德區': '334', '大溪區': '335', '復興區': '336', '大園區': '337',
	    '蘆竹區': '338'
	  },
	  '苗栗縣': {
	    '竹南鎮': '350', '頭份鎮': '351', '三灣鄉': '352', '南庄鄉': '353', '獅潭鄉': '354', '後龍鎮': '356',
	    '通霄鎮': '357', '苑裡鎮': '358', '苗栗市': '360', '造橋鄉': '361', '頭屋鄉': '362', '公館鄉': '363',
	    '大湖鄉': '364', '泰安鄉': '365', '銅鑼鄉': '366', '三義鄉': '367', '西湖鄉': '368', '卓蘭鎮': '369'
	  },
	  '台中市': {
	    '中區': '400', '東區': '401', '南區': '402', '西區': '403', '北區': '404', '北屯區': '406', '西屯區': '407', '南屯區': '408',
	    '太平區': '411', '大里區': '412', '霧峰區': '413', '烏日區': '414', '豐原區': '420', '后里區': '421',
	    '石岡區': '422', '東勢區': '423', '和平區': '424', '新社區': '426', '潭子區': '427', '大雅區': '428',
	    '神岡區': '429', '大肚區': '432', '沙鹿區': '433', '龍井區': '434', '梧棲區': '435', '清水區': '436',
	    '大甲區': '437', '外埔區': '438', '大安區': '439'
	  },
	  '彰化縣': {
	    '彰化市': '500', '芬園鄉': '502', '花壇鄉': '503', '秀水鄉': '504', '鹿港鎮': '505', '福興鄉': '506',
	    '線西鄉': '507', '和美鎮': '508', '伸港鄉': '509', '員林鎮': '510', '社頭鄉': '511', '永靖鄉': '512',
	    '埔心鄉': '513', '溪湖鎮': '514', '大村鄉': '515', '埔鹽鄉': '516', '田中鎮': '520', '北斗鎮': '521',
	    '田尾鄉': '522', '埤頭鄉': '523', '溪州鄉': '524', '竹塘鄉': '525', '二林鎮': '526', '大城鄉': '527',
	    '芳苑鄉': '528', '二水鄉': '530'
	  },
	  '南投縣': {
	    '南投市': '540', '中寮鄉': '541', '草屯鎮': '542', '國姓鄉': '544', '埔里鎮': '545', '仁愛鄉': '546',
	    '名間鄉': '551', '集集鎮': '552', '水里鄉': '553', '魚池鄉': '555', '信義鄉': '556', '竹山鎮': '557',
	    '鹿谷鄉': '558'
	  },
	  '嘉義市': { '東區': '600', '西區': '600' },
	  '嘉義縣': {
	    '番路鄉': '602', '梅山鄉': '603', '竹崎鄉': '604', '阿里山': '605', '中埔鄉': '606', '大埔鄉': '607',
	    '水上鄉': '608', '鹿草鄉': '611', '太保市': '612', '朴子市': '613', '東石鄉': '614', '六腳鄉': '615',
	    '新港鄉': '616', '民雄鄉': '621', '大林鎮': '622', '溪口鄉': '623', '義竹鄉': '624', '布袋鎮': '625'
	  },
	  '雲林縣': {
	    '斗南鎮': '630', '大埤鄉': '631', '虎尾鎮': '632', '土庫鎮': '633', '褒忠鄉': '634', '東勢鄉': '635',
	    '臺西鄉': '636', '崙背鄉': '637', '麥寮鄉': '638', '斗六市': '640', '林內鄉': '643', '古坑鄉': '646',
	    '莿桐鄉': '647', '西螺鎮': '648', '二崙鄉': '649', '北港鎮': '651', '水林鄉': '652', '口湖鄉': '653',
	    '四湖鄉': '654', '元長鄉': '655'
	  },
	  '台南市': {
	    '中西區': '700', '東區': '701', '南區': '702', '北區': '704', '安平區': '708', '安南區': '709',
	    '永康區': '710', '歸仁區': '711', '新化區': '712', '左鎮區': '713', '玉井區': '714', '楠西區': '715',
	    '南化區': '716', '仁德區': '717', '關廟區': '718', '龍崎區': '719', '官田區': '720', '麻豆區': '721',
	    '佳里區': '722', '西港區': '723', '七股區': '724', '將軍區': '725', '學甲區': '726', '北門區': '727',
	    '新營區': '730', '後壁區': '731', '白河區': '732', '東山區': '733', '六甲區': '734', '下營區': '735',
	    '柳營區': '736', '鹽水區': '737', '善化區': '741', '大內區': '742', '山上區': '743', '新市區': '744',
	    '安定區': '745'
	  },
	  '高雄市': {
	    '新興區': '800', '前金區': '801', '苓雅區': '802', '鹽埕區': '803', '鼓山區': '804', '旗津區': '805',
	    '前鎮區': '806', '三民區': '807', '楠梓區': '811', '小港區': '812', '左營區': '813',
	    '仁武區': '814', '大社區': '815', '岡山區': '820', '路竹區': '821', '阿蓮區': '822', '田寮鄉': '823',
	    '燕巢區': '824', '橋頭區': '825', '梓官區': '826', '彌陀區': '827', '永安區': '828', '湖內鄉': '829',
	    '鳳山區': '830', '大寮區': '831', '林園區': '832', '鳥松區': '833', '大樹區': '840', '旗山區': '842',
	    '美濃區': '843', '六龜區': '844', '內門區': '845', '杉林區': '846', '甲仙區': '847', '桃源區': '848',
	    '那瑪夏區': '849', '茂林區': '851', '茄萣區': '852'
	  },
	  '屏東縣': {
	    '屏東市': '900', '三地門': '901', '霧臺鄉': '902', '瑪家鄉': '903', '九如鄉': '904', '里港鄉': '905',
	    '高樹鄉': '906', '鹽埔鄉': '907', '長治鄉': '908', '麟洛鄉': '909', '竹田鄉': '911', '內埔鄉': '912',
	    '萬丹鄉': '913', '潮州鎮': '920', '泰武鄉': '921', '來義鄉': '922', '萬巒鄉': '923', '崁頂鄉': '924',
	    '新埤鄉': '925', '南州鄉': '926', '林邊鄉': '927', '東港鎮': '928', '琉球鄉': '929', '佳冬鄉': '931',
	    '新園鄉': '932', '枋寮鄉': '940', '枋山鄉': '941', '春日鄉': '942', '獅子鄉': '943', '車城鄉': '944',
	    '牡丹鄉': '945', '恆春鎮': '946', '滿州鄉': '947'
	  },
	  '台東縣': {
	    '臺東市': '950', '綠島鄉': '951', '蘭嶼鄉': '952', '延平鄉': '953', '卑南鄉': '954', '鹿野鄉': '955',
	    '關山鎮': '956', '海端鄉': '957', '池上鄉': '958', '東河鄉': '959', '成功鎮': '961', '長濱鄉': '962',
	    '太麻里鄉': '963', '金峰鄉': '964', '大武鄉': '965', '達仁鄉': '966'
	  },
	  '花蓮縣': {
	    '花蓮市': '970', '新城鄉': '971', '秀林鄉': '972', '吉安鄉': '973', '壽豐鄉': '974', '鳳林鎮': '975',
	    '光復鄉': '976', '豐濱鄉': '977', '瑞穗鄉': '978', '萬榮鄉': '979', '玉里鎮': '981', '卓溪鄉': '982',
	    '富里鄉': '983'
	  },
	  '金門縣': { '金沙鎮': '890', '金湖鎮': '891', '金寧鄉': '892', '金城鎮': '893', '烈嶼鄉': '894', '烏坵鄉': '896' },
	  '連江縣': { '南竿鄉': '209', '北竿鄉': '210', '莒光鄉': '211', '東引鄉': '212' },
	  '澎湖縣': { '馬公市': '880', '西嶼鄉': '881', '望安鄉': '882', '七美鄉': '883', '白沙鄉': '884', '湖西鄉': '885' },
	  '南海諸島': { '東沙': '817', '南沙': '819' }
	};

	// var util = require("./util");

	var TWzipcode = React.createClass({
	  displayName: 'TWzipcode',

	  getInitialState: function getInitialState() {
	    return {
	      county: "",
	      district: "",
	      zipcode: "",
	      address: ""
	    };
	  },
	  getData: function getData() {
	    return this.state;
	  },
	  validInput: function validInput() {
	    var error = [];

	    var county = React.findDOMNode(this.refs.county).value;
	    var district = React.findDOMNode(this.refs.district).value;
	    if (county == "") {
	      error.push("請選擇收件縣市");
	    }
	    if (district == "") {
	      error.push("請選擇收件區域");
	    }
	    if (error.length) {
	      return error;
	    }
	    var zip = data[county] && data[county][district];
	    if ($.trim(React.findDOMNode(this.refs.address).value) == zip + " " + county + district) {
	      error.push("請輸入詳細地址");
	    }
	    return error;
	  },
	  onChangeCounty: function onChangeCounty() {
	    var county = React.findDOMNode(this.refs.county).value;
	    var firstCity = null;
	    for (var k in data[county]) {
	      firstCity = k;
	      break;
	    }

	    var zip = data[county] && data[county][firstCity];
	    if (zip) {
	      var address = React.findDOMNode(this.refs.address);
	      address.value = zip + " " + county + firstCity;
	      React.findDOMNode(this.refs.district).focus();
	    }
	    this.setState({
	      county: county,
	      district: firstCity,
	      zip: zip,
	      address: zip + " " + county + firstCity
	    }, function () {
	      this.props.onChange && this.props.onChange();
	    });
	  },
	  onChangeDistrict: function onChangeDistrict() {
	    var county = React.findDOMNode(this.refs.county).value;
	    var district = React.findDOMNode(this.refs.district).value;

	    var zip = data[county] && data[county][district];
	    if (zip) {
	      var address = React.findDOMNode(this.refs.address);
	      address.value = zip + " " + county + district;
	      address.focus();
	    }
	    this.setState({
	      district: district,
	      address: zip + " " + county + district
	    }, function () {
	      this.props.onChange && this.props.onChange();
	    });
	  },
	  onChangeAddress: function onChangeAddress() {
	    var value = React.findDOMNode(this.refs.address).value;
	    this.setState({ address: value }, function () {
	      this.props.onChange && this.props.onChange();
	    });
	  },
	  setAllValue: function setAllValue(opt) {
	    var county = opt.county;

	    // React.findDOMNode(this.refs.county).value = county;
	    // React.findDOMNode(this.refs.district).value = district;
	    var district = opt.district;
	    var zip = opt.zip;
	    var address = opt.address;
	    React.findDOMNode(this.refs.address).value = address;
	    this.setState({
	      county: county,
	      district: district,
	      zip: zip,
	      address: address
	    });
	  },
	  render: function render() {
	    var counties = [];
	    for (var k in data) {
	      counties.push(React.createElement(
	        'option',
	        { selected: this.state.county == k, key: k, value: k },
	        k
	      ));
	    }
	    var districts = [];
	    for (var k in data[this.state.county]) {
	      districts.push(React.createElement(
	        'option',
	        { selected: this.state.district == k, key: k, value: k },
	        k
	      ));
	    }
	    return React.createElement(
	      'div',
	      { className: "modify_addr_text", id: "twzipcode" },
	      React.createElement(
	        'select',
	        { disabled: this.props.disabled, onChange: this.onChangeCounty, ref: "county", className: "county" },
	        React.createElement(
	          'option',
	          { value: "" },
	          '縣市'
	        ),
	        counties
	      ),
	      React.createElement(
	        'select',
	        { disabled: this.props.disabled, onChange: this.onChangeDistrict, ref: "district", className: "district" },
	        districts.length > 0 ? districts : React.createElement(
	          'option',
	          { value: "" },
	          '鄉鎮市區'
	        )
	      ),
	      React.createElement('br', null),
	      React.createElement('input', { name: "zipcode", type: "hidden", value: this.state.zip, className: "zipcode" }),
	      React.createElement('input', { disabled: this.props.disabled, onChange: this.onChangeAddress, name: "address",
	        type: "text", style: { width: "100%" }, ref: "address", className: "zipcode" })
	    );
	  }
	});

	module.exports = TWzipcode;

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(2);
	var cx = __webpack_require__(4);
	// var util = require("./util");
	var TWzipcode = __webpack_require__(7);

	var Donation = React.createClass({
	  displayName: "Donation",

	  getInitialState: function getInitialState() {
	    return {
	      E: 0,
	      T: 0,
	      register: 1,
	      sameUser: true,
	      sameAddr: true,
	      sendRecept: 1
	    };
	  },
	  onSelectE: function onSelectE(num) {
	    this.setState({ E: num });
	  },
	  onSelectT: function onSelectT(num) {
	    this.setState({ T: num });
	  },

	  _renderPrice: function _renderPrice() {
	    if (this.state.E == 0 && this.state.T == 0) {
	      return React.createElement(
	        "div",
	        { style: { color: "red", "font-weight": "bold" } },
	        "請先選擇悠遊卡或一卡通張數與填寫相關資料"
	      );
	    }
	    return React.createElement(
	      "div",
	      { style: { "font-weight": "bold", "font-size": "30px" } },
	      " 捐款金額： ",
	      (this.state.E + this.state.T) * 1000
	    );
	  },
	  validate: function validate() {
	    var error = [];
	    if (this.state.E == 0 && this.state.T == 0) {
	      error.push("請至少選擇一張悠遊卡或一張一卡通");
	    }
	    if ($.trim(React.findDOMNode(this.refs.username).value) == "") {
	      error.push("請輸入收件者姓名");
	    }

	    var zipErr = this.refs.zip.validInput();

	    if (zipErr.length) {
	      [].push.apply(error, zipErr);
	    }

	    if ($.trim(React.findDOMNode(this.refs.phone).value) == "") {
	      error.push("請輸入收件者電話");
	    }
	    if ($.trim(React.findDOMNode(this.refs.email).value) == "") {
	      error.push("請輸入捐款者 email ");
	    }

	    if (this.state.register) {

	      if ($.trim(React.findDOMNode(this.refs.dn_identify).value) == "") {
	        error.push("請輸入捐款者身份證字號（公司請寫統一編號） ");
	      }

	      if (!this.state.sameUser && $.trim(React.findDOMNode(this.refs.dn_name).value) == "") {
	        error.push("請輸入捐款者姓名（公司請寫公司名稱） ");
	      }

	      if (!this.state.sameAddr) {
	        var zipErr2 = this.refs.zip2.validInput();

	        if (zipErr2.length) {
	          [].push.apply(error, zipErr2);
	        }
	      }
	    }

	    return error;
	  },
	  confirm: function confirm() {
	    var message = ["請再次確認您輸入的以下聯絡資訊正確（若輸入錯誤我們可能無法寄送給您）："];
	    var addrSet = this.refs.zip.getData();
	    message.push("收件地址：" + addrSet.address);
	    message.push("聯絡電話：" + React.findDOMNode(this.refs.phone).value);
	    message.push("收件人：" + React.findDOMNode(this.refs.username).value);
	    message.push("Email：" + React.findDOMNode(this.refs.email).value);
	    message.push("確認後請按確定前往線上付款頁面");
	    return window.confirm(message.join("\n"));
	  },
	  onSubmit: function onSubmit(e) {
	    var _this = this;

	    var error = this.validate();

	    if (error.length) {
	      alert(error.join("\n"));
	      return false;
	    }

	    if (!this.confirm()) {
	      return false;
	    }

	    var keys = ["username", "phone", "email"];
	    var data = { E: this.state.E, T: this.state.T };
	    for (var k in keys) {
	      var dom = React.findDOMNode(this.refs[keys[k]]);
	      if (dom.value != null) {
	        data[keys[k]] = dom.value;
	      }
	    }

	    var d2 = this.refs.zip.getData();
	    for (var k in d2) {
	      data[k] = d2[k];
	    }

	    var d3 = this.refs.zip2.getData();
	    for (var k in d3) {
	      data["donate_" + k] = d3[k];
	    }

	    data["register"] = this.state.register;
	    data["sendRecept"] = this.state.sendRecept;
	    data["dn_name"] = React.findDOMNode(this.refs.dn_name).value;
	    data["dn_identify"] = React.findDOMNode(this.refs.dn_identify).value;
	    data["sameAddr"] = this.state.sameAddr;
	    data["sameUser"] = this.state.sameUser;

	    $.post("/api/donate-1", data, function (res) {
	      _this.setState({ _post: res }, function () {
	        React.findDOMNode(_this.refs.form).submit();
	      });
	      console.log(res);
	    });
	    e.preventDefault();
	  },
	  onChangeRegister: function onChangeRegister(register) {
	    this.setState({ register: register });
	  },
	  onChangeSameUser: function onChangeSameUser(e) {
	    if (e.target.checked) {
	      React.findDOMNode(this.refs.dn_name).value = React.findDOMNode(this.refs.username).value;
	    }
	    this.setState({ sameUser: e.target.checked });
	  },
	  onChangeSameAddr: function onChangeSameAddr(e) {
	    if (e.target.checked) {
	      this.refs.zip2.setAllValue(this.refs.zip.getData());
	    }
	    this.setState({ sameAddr: e.target.checked });
	  },
	  onChangeUser: function onChangeUser(e) {
	    if (this.state.sameUser) {
	      React.findDOMNode(this.refs.dn_name).value = e.target.value;
	    }
	  },
	  onChangeAddr: function onChangeAddr(e) {
	    if (this.state.sameAddr) {
	      this.refs.zip2.setAllValue(this.refs.zip.getData());
	    }
	  },
	  onChangeSendRecept: function onChangeSendRecept(val) {
	    this.setState({ sendRecept: val });
	  },
	  render: function render() {
	    var _this2 = this;

	    var item = this.props.item;
	    var votes = this.props.votes;

	    var comp = this;

	    var detail = null;
	    //https://capi.pay2go.com/MPG/mpg_gateway

	    var inputs = [];
	    if (this.state._post) {
	      for (var k in this.state._post) {
	        inputs.push(React.createElement("input", { type: "hidden", name: k, value: this.state._post[k] }));
	      }
	    }

	    return React.createElement(
	      "div",
	      { className: "custom-donate-amount" },
	      React.createElement(
	        "form",
	        { ref: "form", action: "https://capi.pay2go.com/MPG/mpg_gateway", method: "POST" },
	        inputs,
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請選擇悠遊卡張數"
	          ),
	          React.createElement(
	            "label",
	            { style: { "font-size": "20px" } },
	            React.createElement("input", { onClick: this.onSelectE.bind(null, 0), name: "cnt", type: "radio", value: "0" }),
	            "無"
	          ),
	          "   ",
	          [1, 3, 5, 10].map(function (num) {
	            return React.createElement(
	              "label",
	              { style: { "font-size": "20px" } },
	              React.createElement("input", { onClick: _this2.onSelectE.bind(null, num), name: "cnt", type: "radio", value: num }),
	              " ",
	              num,
	              "   "
	            );
	          })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請選擇一卡通張數"
	          ),
	          React.createElement(
	            "label",
	            { style: { "font-size": "20px" } },
	            React.createElement("input", { onClick: this.onSelectT.bind(null, 0), name: "cnt2", type: "radio", value: "0" }),
	            "無"
	          ),
	          "   ",
	          [1, 3, 5, 10].map(function (num) {
	            return React.createElement(
	              "label",
	              { style: { "font-size": "20px" } },
	              React.createElement("input", { onClick: _this2.onSelectT.bind(null, num), name: "cnt2", type: "radio", value: num }),
	              " ",
	              num,
	              "   "
	            );
	          })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請填寫收件者姓名"
	          ),
	          React.createElement("input", { type: "text", onChange: this.onChangeUser, ref: "username", name: "username" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請填寫完整寄送地址"
	          ),
	          React.createElement(TWzipcode, { onChange: this.onChangeAddr, ref: "zip" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請填寫收件者電話"
	          ),
	          React.createElement("input", { type: "text", ref: "phone", name: "phone" })
	        ),
	        React.createElement(
	          "p",
	          null,
	          React.createElement(
	            "h3",
	            null,
	            "* 請填寫收件者 Email "
	          ),
	          React.createElement("input", { type: "text", ref: "email", name: "email" })
	        ),
	        React.createElement(
	          "h3",
	          null,
	          "* 政治獻金相關申報資料：",
	          React.createElement(
	            "label",
	            null,
	            React.createElement("input", { onClick: this.onChangeRegister.bind(null, 1), name: "anno", defaultChecked: this.state.register == 1, type: "radio", value: "1" }),
	            "具名"
	          ),
	          "    ",
	          React.createElement(
	            "label",
	            null,
	            React.createElement("input", { onClick: this.onChangeRegister.bind(null, 0), name: "anno", defaultChecked: this.state.register == 0, type: "radio", value: "0" }),
	            "匿名"
	          )
	        ),
	        React.createElement(
	          "fieldset",
	          { style: { display: this.state.register == 1 ? "block" : "none" } },
	          React.createElement(
	            "legend",
	            null,
	            "政治獻金申報資料"
	          ),
	          React.createElement(
	            "p",
	            null,
	            "身份證字號（公司請寫統一編號）: ",
	            React.createElement("input", { ref: "dn_identify", type: "text" })
	          ),
	          React.createElement(
	            "p",
	            null,
	            "捐款人姓名（公司請寫公司名稱）: ",
	            React.createElement("input", { disabled: this.state.sameUser, ref: "dn_name", type: "text" }),
	            React.createElement(
	              "label",
	              null,
	              " ",
	              React.createElement("input", { type: "checkbox", defaultChecked: this.state.sameUser, onClick: this.onChangeSameUser }),
	              "同收件人 "
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            "戶籍地址: ",
	            React.createElement(TWzipcode, { disabled: this.state.sameAddr, ref: "zip2" }),
	            React.createElement(
	              "label",
	              null,
	              " ",
	              React.createElement("input", { defaultChecked: this.state.sameAddr, onClick: this.onChangeSameAddr, type: "checkbox" }),
	              "同寄送地址 "
	            )
	          ),
	          React.createElement(
	            "p",
	            null,
	            "是否寄送政治獻金收據：",
	            React.createElement(
	              "label",
	              null,
	              React.createElement("input", { name: "send", onClick: this.onChangeSendRecept.bind(null, 1), defaultChecked: this.state.sendRecept == 1, type: "radio", value: "1" }),
	              "是"
	            ),
	            "    ",
	            React.createElement(
	              "label",
	              null,
	              React.createElement("input", { name: "send", onClick: this.onChangeSendRecept.bind(null, 0), defaultChecked: this.state.sendRecept == 0, type: "radio", value: "0" }),
	              "否"
	            )
	          )
	        ),
	        React.createElement("p", null),
	        this._renderPrice(),
	        React.createElement("br", null),
	        React.createElement("input", { onClick: this.onSubmit, type: "button", className: "btn btn-primary donate-button", value: "捐款" })
	      )
	    );
	  }
	});

	module.exports = Donation;

/***/ }

/******/ });