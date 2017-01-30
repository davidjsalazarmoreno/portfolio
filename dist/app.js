/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// React
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	// Containers/Components
	var portfolio_1 = __webpack_require__(3);
	window.addEventListener('load', function () {
	    ReactDOM.render(React.createElement(portfolio_1.PortfolioContainer, null), document.getElementById('app'));
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vdHN0cmFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQm9vdHN0cmFwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsUUFBUTtBQUNSLDZCQUErQjtBQUMvQixvQ0FBc0M7QUFLdEMsd0JBQXdCO0FBQ3hCLDhEQUFvRTtBQUVuRSxNQUFjLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQ3ZDLFFBQVEsQ0FBQyxNQUFNLENBQ2Isb0JBQUMsOEJBQWtCLE9BQUcsRUFDdEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDL0IsQ0FBQztBQUVKLENBQUMsQ0FBQyxDQUFDIn0=

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	// React
	var React = __webpack_require__(1);
	// React intl
	var react_intl_1 = __webpack_require__(4);
	// Components
	var language_selector_1 = __webpack_require__(28);
	var github_ribbon_1 = __webpack_require__(31);
	var flat_separator_1 = __webpack_require__(33);
	var showcase_1 = __webpack_require__(35);
	var header_1 = __webpack_require__(45);
	var excerpt_1 = __webpack_require__(51);
	var section_header_1 = __webpack_require__(53);
	var project_1 = __webpack_require__(55);
	var footer_1 = __webpack_require__(57);
	// Intl Messages
	var messages_1 = __webpack_require__(49);
	var index_1 = __webpack_require__(48);
	// Styles
	__webpack_require__(59);
	;
	var PortfolioContainer = (function (_super) {
	    __extends(PortfolioContainer, _super);
	    function PortfolioContainer(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            language: 'en'
	        };
	        return _this;
	    }
	    PortfolioContainer.prototype.render = function () {
	        var _this = this;
	        // State
	        var language = this.state.language;
	        return (React.createElement(react_intl_1.IntlProvider, { locale: language },
	            React.createElement("section", { className: "PortfolioComponent" },
	                React.createElement(language_selector_1.LanguageSelectorComponent, { languages: [
	                        'en',
	                        'es',
	                    ], languageLabel: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.language)), selected: language, messages: messages_1.messages, onChange: function (event) {
	                        var languageSelected = event.target.value;
	                        console.log(languageSelected);
	                        _this.setState(__assign({}, _this.state, { language: languageSelected }));
	                    } }),
	                React.createElement(github_ribbon_1.GithubRibbon, null),
	                React.createElement(header_1.HeaderComponent, { avatarUrl: "/assets/avatar.jpg" }),
	                React.createElement(flat_separator_1.FlatSeparatorComponent, { margin: "16px auto", width: "20%" }),
	                React.createElement(excerpt_1.ExcerptComponent, { short: React.createElement("span", null,
	                        React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.excerptShort))), long: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.excerptLong)), moreLabel: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.more)), lessLabel: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.less)) }),
	                React.createElement("hr", null),
	                React.createElement(section_header_1.SectionHeaderComponent, { title: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.myWork)) }),
	                React.createElement(project_1.ProjectComponent, { id: "playsmatch", image: "/assets/pm-showcase-1.png", name: "Cuádrala / Playsmatch", excerpt: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.pmDescription)), information: [
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.client)), value: 'Cuádrala / Playsmatch' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.period)), value: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.pmPeriod)) },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.workType)), value: 'FullTime' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.role)), value: 'Full Stack Web Developer' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.technologies)), value: 'React / Nodejs' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.companyWebsite)), value: React.createElement("a", { href: "https://www.cuadrala.com" }, "Cu\u00E1drala") }
	                    ] }),
	                React.createElement(showcase_1.ShowcaseComponent, { id: "PlaysmatchShowcase", title: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.showcaseTitle)), elements: index_1.pmShowcase, emptyStateText: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.showcaseEmptyText)) }),
	                React.createElement(project_1.ProjectComponent, { id: "systrix", image: "/assets/Systrix/sys-3.jpg", name: "Systrix", excerpt: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.sysDescription)), information: [
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.client)), value: 'Systrix' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.period)), value: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.sysPeriod)) },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.workType)), value: 'FullTime' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.role)), value: 'Full Stack Web Developer / Wordpress Developer / Frontend Team Leader' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.technologies)), value: 'Angular 2 / React/ Elixir / Phoenix / Elm' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.companyWebsite)), value: React.createElement("a", { href: "https://www.linkedin.com/company/systrix" }, "Systrix") }
	                    ] }),
	                React.createElement(showcase_1.ShowcaseComponent, { id: "SystrixShowcase", title: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.showcaseTitle)), columnCount: "2", elements: index_1.sysShowcase }),
	                React.createElement(project_1.ProjectComponent, { id: "GE", image: "/assets/GE/ge.jpeg", name: "Gente Excelente Venezuela", excerpt: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.geDescription)), information: [
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.client)), value: 'Gente Excelente Venezuela' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.period)), value: '2016' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.workType)), value: 'Freelancer' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.role)), value: 'Web Developer / Wordpress Consultant' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.technologies)), value: 'Wordpress / HTML / CSS / Javascript' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.companyWebsite)), value: React.createElement("a", { href: "http://gentexcelente.com" }, "gentexcelente.com") }
	                    ] }),
	                React.createElement(showcase_1.ShowcaseComponent, { id: "GenteExcelenteVenezuelaShowcase", title: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.showcaseTitle)), emptyStateText: "Soon", elements: index_1.geShowcase, columnCount: "2" }),
	                React.createElement(project_1.ProjectComponent, { id: "ilc", image: "/assets/ilc/ilc-main.jpg", name: "ILC Academy", excerpt: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.ilcDescription)), information: [
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.client)), value: 'ILC Academy' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.period)), value: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.ilcPeriod)) },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.workType)), value: 'FullTime' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.role)), value: 'Web Developer / Wordpress Consultant / Project Leader' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.technologies)), value: 'Wordpress / jQuery / HTML / CSS' },
	                        { key: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.companyWebsite)), value: React.createElement("a", { href: "http://ilcacademy.com/" }, "ilcacademy.com") }
	                    ] }),
	                React.createElement(showcase_1.ShowcaseComponent, { id: "ILCAcademyShowcase", title: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.showcaseTitle)), columnCount: "2", elements: index_1.ILCShowcase }),
	                React.createElement("hr", null),
	                React.createElement(footer_1.FooterComponent, { contactMe: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.contactMe)), networks: index_1.networks, made: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.made)), inspiration: React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages.inspiration)) }))));
	    };
	    return PortfolioContainer;
	}(React.Component));
	exports.PortfolioContainer = PortfolioContainer;
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = PortfolioContainer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9ydGZvbGlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9ydGZvbGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLFFBQVE7QUFDUiw2QkFBK0I7QUFFL0IsYUFBYTtBQUNiLHlDQUEwRDtBQUUxRCxhQUFhO0FBQ2IsNEZBQWlHO0FBQ2pHLGdGQUE0RTtBQUM1RSxtRkFBd0Y7QUFDeEYsaUVBQXVFO0FBQ3ZFLDJEQUFpRTtBQUNqRSw4REFBb0U7QUFDcEUsbUZBQXdGO0FBQ3hGLDhEQUFvRTtBQUVwRSwyREFBaUU7QUFFakUsZ0JBQWdCO0FBQ2hCLDZDQUEwQztBQUUxQyw4Q0FBZ0c7QUFFaEcsU0FBUztBQUNULDRCQUEwQjtBQUl6QixDQUFDO0FBRUY7SUFBd0Msc0NBQThDO0lBS3BGLDRCQUFZLEtBQUs7UUFBakIsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FDYjtRQU5ELFdBQUssR0FBRztZQUNOLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQzs7SUFJRixDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUFBLGlCQTZKQztRQTVKQyxRQUFRO1FBQ0EsSUFBQSw4QkFBUSxDQUFnQjtRQUVoQyxNQUFNLENBQUMsQ0FDTCxvQkFBQyx5QkFBWSxJQUFDLE1BQU0sRUFBRSxRQUFRO1lBQzVCLGlDQUFTLFNBQVMsRUFBQyxvQkFBb0I7Z0JBQ3JDLG9CQUFDLDZDQUF5QixJQUN4QixTQUFTLEVBQUU7d0JBQ1QsSUFBSTt3QkFDSixJQUFJO3FCQUNMLEVBQ0QsYUFBYSxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsUUFBUSxFQUFJLEVBQzFELFFBQVEsRUFBRSxRQUFRLEVBQ2xCLFFBQVEsRUFBRSxtQkFBUSxFQUNsQixRQUFRLEVBQUUsVUFBQyxLQUFLO3dCQUNkLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7d0JBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFFOUIsS0FBSSxDQUFDLFFBQVEsY0FDUixLQUFJLENBQUMsS0FBSyxJQUNiLFFBQVEsRUFBRSxnQkFBZ0IsSUFDMUIsQ0FBQztvQkFDTCxDQUFDLEdBQ0Q7Z0JBRUYsb0JBQUMsNEJBQVksT0FBRztnQkFFaEIsb0JBQUMsd0JBQWUsSUFBQyxTQUFTLEVBQUMsb0JBQW9CLEdBQUc7Z0JBR2xELG9CQUFDLHVDQUFzQixJQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLEtBQUssR0FBRztnQkFFekQsb0JBQUMsMEJBQWdCLElBQ2YsS0FBSyxFQUNIO3dCQUNFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsWUFBWSxFQUFJLENBQzFDLEVBRVQsSUFBSSxFQUNGLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsV0FBVyxFQUFJLEVBRWhELFNBQVMsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLElBQUksRUFBSSxFQUNsRCxTQUFTLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxJQUFJLEVBQUksR0FDbEQ7Z0JBSUYsK0JBQU07Z0JBRU4sb0JBQUMsdUNBQXNCLElBQUMsS0FBSyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsTUFBTSxFQUFJLEdBQUk7Z0JBRzVFLG9CQUFDLDBCQUFnQixJQUNmLEVBQUUsRUFBQyxZQUFZLEVBQ2YsS0FBSyxFQUFDLDJCQUEyQixFQUNqQyxJQUFJLEVBQUMsdUJBQXVCLEVBQzVCLE9BQU8sRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGFBQWEsRUFBSSxFQUN6RCxXQUFXLEVBQUU7d0JBQ1gsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxNQUFNLEVBQUksRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUU7d0JBQ2xGLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsTUFBTSxFQUFJLEVBQUUsS0FBSyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsUUFBUSxFQUFJLEVBQUU7d0JBQ3RHLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsUUFBUSxFQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTt3QkFDdkUsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxJQUFJLEVBQUksRUFBRSxLQUFLLEVBQUUsMEJBQTBCLEVBQUU7d0JBQ25GLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsWUFBWSxFQUFJLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixFQUFFO3dCQUNqRixFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGNBQWMsRUFBSSxFQUFFLEtBQUssRUFBRSwyQkFBRyxJQUFJLEVBQUMsMEJBQTBCLG9CQUFhLEVBQUU7cUJBQ25ILEdBQ0Q7Z0JBRUYsb0JBQUMsNEJBQWlCLElBQUMsRUFBRSxFQUFDLG9CQUFvQixFQUN4QyxLQUFLLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxhQUFhLEVBQUksRUFDdkQsUUFBUSxFQUFFLGtCQUFVLEVBQ3BCLGNBQWMsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGlCQUFpQixFQUFJLEdBQ3BFO2dCQUdGLG9CQUFDLDBCQUFnQixJQUNmLEVBQUUsRUFBQyxTQUFTLEVBQ1osS0FBSyxFQUFDLDJCQUEyQixFQUNqQyxJQUFJLEVBQUMsU0FBUyxFQUNkLE9BQU8sRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGNBQWMsRUFBSSxFQUMxRCxXQUFXLEVBQUU7d0JBQ1gsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxNQUFNLEVBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO3dCQUNwRSxFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLE1BQU0sRUFBSSxFQUFFLEtBQUssRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLFNBQVMsRUFBSSxFQUFFO3dCQUN2RyxFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLFFBQVEsRUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7d0JBQ3ZFLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsSUFBSSxFQUFJLEVBQUUsS0FBSyxFQUFFLHVFQUF1RSxFQUFFO3dCQUNoSSxFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLFlBQVksRUFBSSxFQUFFLEtBQUssRUFBRSwyQ0FBMkMsRUFBRTt3QkFDNUcsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxjQUFjLEVBQUksRUFBRSxLQUFLLEVBQUUsMkJBQUcsSUFBSSxFQUFDLDBDQUEwQyxjQUFZLEVBQUU7cUJBQ2xJLEdBQ0Q7Z0JBRUYsb0JBQUMsNEJBQWlCLElBQ2hCLEVBQUUsRUFBQyxpQkFBaUIsRUFDcEIsS0FBSyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsYUFBYSxFQUFJLEVBQ3ZELFdBQVcsRUFBQyxHQUFHLEVBQ2YsUUFBUSxFQUFFLG1CQUFXLEdBQ3JCO2dCQUdGLG9CQUFDLDBCQUFnQixJQUNmLEVBQUUsRUFBQyxJQUFJLEVBQ1AsS0FBSyxFQUFDLG9CQUFvQixFQUMxQixJQUFJLEVBQUMsMkJBQTJCLEVBQ2hDLE9BQU8sRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGFBQWEsRUFBSSxFQUN6RCxXQUFXLEVBQUU7d0JBQ1gsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxNQUFNLEVBQUksRUFBRSxLQUFLLEVBQUUsMkJBQTJCLEVBQUU7d0JBQ3RGLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsTUFBTSxFQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTt3QkFDakUsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxRQUFRLEVBQUksRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO3dCQUN6RSxFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLElBQUksRUFBSSxFQUFFLEtBQUssRUFBRSxzQ0FBc0MsRUFBRTt3QkFDL0YsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxZQUFZLEVBQUksRUFBRSxLQUFLLEVBQUUscUNBQXFDLEVBQUU7d0JBQ3RHLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsY0FBYyxFQUFJLEVBQUUsS0FBSyxFQUFFLDJCQUFHLElBQUksRUFBQywwQkFBMEIsd0JBQXNCLEVBQUU7cUJBQzVILEdBQ0Q7Z0JBRUYsb0JBQUMsNEJBQWlCLElBQ2hCLEVBQUUsRUFBQyxpQ0FBaUMsRUFDcEMsS0FBSyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsYUFBYSxFQUFJLEVBQ3ZELGNBQWMsRUFBQyxNQUFNLEVBQ3JCLFFBQVEsRUFBRSxrQkFBVSxFQUNwQixXQUFXLEVBQUMsR0FBRyxHQUNmO2dCQUdGLG9CQUFDLDBCQUFnQixJQUNmLEVBQUUsRUFBQyxLQUFLLEVBQ1IsS0FBSyxFQUFDLDBCQUEwQixFQUNoQyxJQUFJLEVBQUMsYUFBYSxFQUNsQixPQUFPLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxjQUFjLEVBQUksRUFDMUQsV0FBVyxFQUFFO3dCQUNYLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsTUFBTSxFQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTt3QkFDeEUsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxNQUFNLEVBQUksRUFBRSxLQUFLLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxTQUFTLEVBQUksRUFBRTt3QkFDdkcsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxRQUFRLEVBQUksRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO3dCQUN2RSxFQUFFLEdBQUcsRUFBRSxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLElBQUksRUFBSSxFQUFFLEtBQUssRUFBRSx1REFBdUQsRUFBRTt3QkFDaEgsRUFBRSxHQUFHLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxZQUFZLEVBQUksRUFBRSxLQUFLLEVBQUUsaUNBQWlDLEVBQUU7d0JBQ2xHLEVBQUUsR0FBRyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsY0FBYyxFQUFJLEVBQUUsS0FBSyxFQUFFLDJCQUFHLElBQUksRUFBQyx3QkFBd0IscUJBQW1CLEVBQUU7cUJBQ3ZILEdBQ0Q7Z0JBRUYsb0JBQUMsNEJBQWlCLElBQ2hCLEVBQUUsRUFBQyxvQkFBb0IsRUFDdkIsS0FBSyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsYUFBYSxFQUFJLEVBQ3ZELFdBQVcsRUFBQyxHQUFHLEVBQ2YsUUFBUSxFQUFFLG1CQUFXLEdBQ3JCO2dCQUdGLCtCQUFNO2dCQUNOLG9CQUFDLHdCQUFlLElBQ2QsU0FBUyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsU0FBUyxFQUFJLEVBQ3ZELFFBQVEsRUFBRSxnQkFBUSxFQUNsQixJQUFJLEVBQUUsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxJQUFJLEVBQUksRUFDN0MsV0FBVyxFQUFFLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsV0FBVyxFQUFJLEdBQzNELENBRU0sQ0FDRyxDQUNoQixDQUFDO0lBQ0osQ0FBQztJQUNILHlCQUFDO0FBQUQsQ0FBQyxBQXZLRCxDQUF3QyxLQUFLLENBQUMsU0FBUyxHQXVLdEQ7QUF2S1ksZ0RBQWtCO0FBdUs5QixDQUFDOztBQUVGLGtCQUFlLGtCQUFrQixDQUFDIn0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Copyright 2017, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var allLocaleData = _interopDefault(__webpack_require__(6));
	var IntlMessageFormat = _interopDefault(__webpack_require__(7));
	var IntlRelativeFormat = _interopDefault(__webpack_require__(17));
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var invariant = _interopDefault(__webpack_require__(24));
	var memoizeIntlConstructor = _interopDefault(__webpack_require__(25));
	
	// GENERATED FILE
	var defaultLocaleData = { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
	    var s = String(n).split("."),
	        v0 = !s[1],
	        t0 = Number(s[0]) == n,
	        n10 = t0 && s[0].slice(-1),
	        n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
	  }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } };
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	function addLocaleData() {
	    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	
	    var locales = Array.isArray(data) ? data : [data];
	
	    locales.forEach(function (localeData) {
	        if (localeData && localeData.locale) {
	            IntlMessageFormat.__addLocaleData(localeData);
	            IntlRelativeFormat.__addLocaleData(localeData);
	        }
	    });
	}
	
	function hasLocaleData(locale) {
	    var localeParts = (locale || '').split('-');
	
	    while (localeParts.length > 0) {
	        if (hasIMFAndIRFLocaleData(localeParts.join('-'))) {
	            return true;
	        }
	
	        localeParts.pop();
	    }
	
	    return false;
	}
	
	function hasIMFAndIRFLocaleData(locale) {
	    var normalizedLocale = locale && locale.toLowerCase();
	
	    return !!(IntlMessageFormat.__localeData__[normalizedLocale] && IntlRelativeFormat.__localeData__[normalizedLocale]);
	}
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
	
	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var bool = React.PropTypes.bool;
	var number = React.PropTypes.number;
	var string = React.PropTypes.string;
	var func = React.PropTypes.func;
	var object = React.PropTypes.object;
	var oneOf = React.PropTypes.oneOf;
	var shape = React.PropTypes.shape;
	var any = React.PropTypes.any;
	
	var localeMatcher = oneOf(['best fit', 'lookup']);
	var narrowShortLong = oneOf(['narrow', 'short', 'long']);
	var numeric2digit = oneOf(['numeric', '2-digit']);
	var funcReq = func.isRequired;
	
	var intlConfigPropTypes = {
	    locale: string,
	    formats: object,
	    messages: object,
	    textComponent: any,
	
	    defaultLocale: string,
	    defaultFormats: object
	};
	
	var intlFormatPropTypes = {
	    formatDate: funcReq,
	    formatTime: funcReq,
	    formatRelative: funcReq,
	    formatNumber: funcReq,
	    formatPlural: funcReq,
	    formatMessage: funcReq,
	    formatHTMLMessage: funcReq
	};
	
	var intlShape = shape(_extends({}, intlConfigPropTypes, intlFormatPropTypes, {
	    formatters: object,
	    now: funcReq
	}));
	
	var messageDescriptorPropTypes = {
	    id: string.isRequired,
	    description: string,
	    defaultMessage: string
	};
	
	var dateTimeFormatPropTypes = {
	    localeMatcher: localeMatcher,
	    formatMatcher: oneOf(['basic', 'best fit']),
	
	    timeZone: string,
	    hour12: bool,
	
	    weekday: narrowShortLong,
	    era: narrowShortLong,
	    year: numeric2digit,
	    month: oneOf(['numeric', '2-digit', 'narrow', 'short', 'long']),
	    day: numeric2digit,
	    hour: numeric2digit,
	    minute: numeric2digit,
	    second: numeric2digit,
	    timeZoneName: oneOf(['short', 'long'])
	};
	
	var numberFormatPropTypes = {
	    localeMatcher: localeMatcher,
	
	    style: oneOf(['decimal', 'currency', 'percent']),
	    currency: string,
	    currencyDisplay: oneOf(['symbol', 'code', 'name']),
	    useGrouping: bool,
	
	    minimumIntegerDigits: number,
	    minimumFractionDigits: number,
	    maximumFractionDigits: number,
	    minimumSignificantDigits: number,
	    maximumSignificantDigits: number
	};
	
	var relativeFormatPropTypes = {
	    style: oneOf(['best fit', 'numeric']),
	    units: oneOf(['second', 'minute', 'hour', 'day', 'month', 'year'])
	};
	
	var pluralFormatPropTypes = {
	    style: oneOf(['cardinal', 'ordinal'])
	};
	
	/*
	HTML escaping and shallow-equals implementations are the same as React's
	(on purpose.) Therefore, it has the following Copyright and Licensing:
	
	Copyright 2013-2014, Facebook, Inc.
	All rights reserved.
	
	This source code is licensed under the BSD-style license found in the LICENSE
	file in the root directory of React's source tree.
	*/
	
	var intlConfigPropNames = Object.keys(intlConfigPropTypes);
	
	var ESCAPED_CHARS = {
	    '&': '&amp;',
	    '>': '&gt;',
	    '<': '&lt;',
	    '"': '&quot;',
	    '\'': '&#x27;'
	};
	
	var UNSAFE_CHARS_REGEX = /[&><"']/g;
	
	function escape(str) {
	    return ('' + str).replace(UNSAFE_CHARS_REGEX, function (match) {
	        return ESCAPED_CHARS[match];
	    });
	}
	
	function filterProps(props, whitelist) {
	    var defaults$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    return whitelist.reduce(function (filtered, name) {
	        if (props.hasOwnProperty(name)) {
	            filtered[name] = props[name];
	        } else if (defaults$$1.hasOwnProperty(name)) {
	            filtered[name] = defaults$$1[name];
	        }
	
	        return filtered;
	    }, {});
	}
	
	function invariantIntlContext() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        intl = _ref.intl;
	
	    invariant(intl, '[React Intl] Could not find required `intl` object. ' + '<IntlProvider> needs to exist in the component ancestry.');
	}
	
	function shallowEquals(objA, objB) {
	    if (objA === objB) {
	        return true;
	    }
	
	    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = Object.keys(objA);
	    var keysB = Object.keys(objB);
	
	    if (keysA.length !== keysB.length) {
	        return false;
	    }
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < keysA.length; i++) {
	        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	            return false;
	        }
	    }
	
	    return true;
	}
	
	function shouldIntlComponentUpdate(_ref2, nextProps, nextState) {
	    var props = _ref2.props,
	        state = _ref2.state,
	        _ref2$context = _ref2.context,
	        context = _ref2$context === undefined ? {} : _ref2$context;
	    var nextContext = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var _context$intl = context.intl,
	        intl = _context$intl === undefined ? {} : _context$intl;
	    var _nextContext$intl = nextContext.intl,
	        nextIntl = _nextContext$intl === undefined ? {} : _nextContext$intl;
	
	
	    return !shallowEquals(nextProps, props) || !shallowEquals(nextState, state) || !(nextIntl === intl || shallowEquals(filterProps(nextIntl, intlConfigPropNames), filterProps(intl, intlConfigPropNames)));
	}
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	// Inspired by react-redux's `connect()` HOC factory function implementation:
	// https://github.com/rackt/react-redux
	
	function getDisplayName(Component$$1) {
	    return Component$$1.displayName || Component$$1.name || 'Component';
	}
	
	function injectIntl(WrappedComponent) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    var _options$intlPropName = options.intlPropName,
	        intlPropName = _options$intlPropName === undefined ? 'intl' : _options$intlPropName,
	        _options$withRef = options.withRef,
	        withRef = _options$withRef === undefined ? false : _options$withRef;
	
	    var InjectIntl = function (_Component) {
	        inherits(InjectIntl, _Component);
	
	        function InjectIntl(props, context) {
	            classCallCheck(this, InjectIntl);
	
	            var _this = possibleConstructorReturn(this, (InjectIntl.__proto__ || Object.getPrototypeOf(InjectIntl)).call(this, props, context));
	
	            invariantIntlContext(context);
	            return _this;
	        }
	
	        createClass(InjectIntl, [{
	            key: 'getWrappedInstance',
	            value: function getWrappedInstance() {
	                invariant(withRef, '[React Intl] To access the wrapped instance, ' + 'the `{withRef: true}` option must be set when calling: ' + '`injectIntl()`');
	
	                return this.refs.wrappedInstance;
	            }
	        }, {
	            key: 'render',
	            value: function render() {
	                return React__default.createElement(WrappedComponent, _extends({}, this.props, defineProperty({}, intlPropName, this.context.intl), {
	                    ref: withRef ? 'wrappedInstance' : null
	                }));
	            }
	        }]);
	        return InjectIntl;
	    }(React.Component);
	
	    InjectIntl.displayName = 'InjectIntl(' + getDisplayName(WrappedComponent) + ')';
	    InjectIntl.contextTypes = {
	        intl: intlShape
	    };
	    InjectIntl.WrappedComponent = WrappedComponent;
	
	
	    return InjectIntl;
	}
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	function defineMessages(messageDescriptors) {
	  // This simply returns what's passed-in because it's meant to be a hook for
	  // babel-plugin-react-intl.
	  return messageDescriptors;
	}
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	// This is a "hack" until a proper `intl-pluralformat` package is created.
	
	function resolveLocale(locales) {
	    // IntlMessageFormat#_resolveLocale() does not depend on `this`.
	    return IntlMessageFormat.prototype._resolveLocale(locales);
	}
	
	function findPluralFunction(locale) {
	    // IntlMessageFormat#_findPluralFunction() does not depend on `this`.
	    return IntlMessageFormat.prototype._findPluralRuleFunction(locale);
	}
	
	var IntlPluralFormat = function IntlPluralFormat(locales) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    classCallCheck(this, IntlPluralFormat);
	
	    var useOrdinal = options.style === 'ordinal';
	    var pluralFn = findPluralFunction(resolveLocale(locales));
	
	    this.format = function (value) {
	        return pluralFn(value, useOrdinal);
	    };
	};
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var DATE_TIME_FORMAT_OPTIONS = Object.keys(dateTimeFormatPropTypes);
	var NUMBER_FORMAT_OPTIONS = Object.keys(numberFormatPropTypes);
	var RELATIVE_FORMAT_OPTIONS = Object.keys(relativeFormatPropTypes);
	var PLURAL_FORMAT_OPTIONS = Object.keys(pluralFormatPropTypes);
	
	var RELATIVE_FORMAT_THRESHOLDS = {
	    second: 60, // seconds to minute
	    minute: 60, // minutes to hour
	    hour: 24, // hours to day
	    day: 30, // days to month
	    month: 12 };
	
	function updateRelativeFormatThresholds(newThresholds) {
	    var thresholds = IntlRelativeFormat.thresholds;
	    thresholds.second = newThresholds.second;
	    thresholds.minute = newThresholds.minute;
	    thresholds.hour = newThresholds.hour;
	    thresholds.day = newThresholds.day;
	    thresholds.month = newThresholds.month;
	}
	
	function getNamedFormat(formats, type, name) {
	    var format = formats && formats[type] && formats[type][name];
	    if (format) {
	        return format;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	        console.error('[React Intl] No ' + type + ' format named: ' + name);
	    }
	}
	
	function formatDate(config, state, value) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale,
	        formats = config.formats;
	    var format = options.format;
	
	
	    var date = new Date(value);
	    var defaults$$1 = format && getNamedFormat(formats, 'date', format);
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);
	
	    try {
	        return state.getDateTimeFormat(locale, filteredOptions).format(date);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting date.\n' + e);
	        }
	    }
	
	    return String(date);
	}
	
	function formatTime(config, state, value) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale,
	        formats = config.formats;
	    var format = options.format;
	
	
	    var date = new Date(value);
	    var defaults$$1 = format && getNamedFormat(formats, 'time', format);
	    var filteredOptions = filterProps(options, DATE_TIME_FORMAT_OPTIONS, defaults$$1);
	
	    if (!filteredOptions.hour && !filteredOptions.minute && !filteredOptions.second) {
	        // Add default formatting options if hour, minute, or second isn't defined.
	        filteredOptions = _extends({}, filteredOptions, { hour: 'numeric', minute: 'numeric' });
	    }
	
	    try {
	        return state.getDateTimeFormat(locale, filteredOptions).format(date);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting time.\n' + e);
	        }
	    }
	
	    return String(date);
	}
	
	function formatRelative(config, state, value) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale,
	        formats = config.formats;
	    var format = options.format;
	
	
	    var date = new Date(value);
	    var now = new Date(options.now);
	    var defaults$$1 = format && getNamedFormat(formats, 'relative', format);
	    var filteredOptions = filterProps(options, RELATIVE_FORMAT_OPTIONS, defaults$$1);
	
	    // Capture the current threshold values, then temporarily override them with
	    // specific values just for this render.
	    var oldThresholds = _extends({}, IntlRelativeFormat.thresholds);
	    updateRelativeFormatThresholds(RELATIVE_FORMAT_THRESHOLDS);
	
	    try {
	        return state.getRelativeFormat(locale, filteredOptions).format(date, {
	            now: isFinite(now) ? now : state.now()
	        });
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting relative time.\n' + e);
	        }
	    } finally {
	        updateRelativeFormatThresholds(oldThresholds);
	    }
	
	    return String(date);
	}
	
	function formatNumber(config, state, value) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale,
	        formats = config.formats;
	    var format = options.format;
	
	
	    var defaults$$1 = format && getNamedFormat(formats, 'number', format);
	    var filteredOptions = filterProps(options, NUMBER_FORMAT_OPTIONS, defaults$$1);
	
	    try {
	        return state.getNumberFormat(locale, filteredOptions).format(value);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting number.\n' + e);
	        }
	    }
	
	    return String(value);
	}
	
	function formatPlural(config, state, value) {
	    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale;
	
	
	    var filteredOptions = filterProps(options, PLURAL_FORMAT_OPTIONS);
	
	    try {
	        return state.getPluralFormat(locale, filteredOptions).format(value);
	    } catch (e) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Error formatting plural.\n' + e);
	        }
	    }
	
	    return 'other';
	}
	
	function formatMessage(config, state) {
	    var messageDescriptor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	    var locale = config.locale,
	        formats = config.formats,
	        messages = config.messages,
	        defaultLocale = config.defaultLocale,
	        defaultFormats = config.defaultFormats;
	    var id = messageDescriptor.id,
	        defaultMessage = messageDescriptor.defaultMessage;
	
	    // `id` is a required field of a Message Descriptor.
	
	    invariant(id, '[React Intl] An `id` must be provided to format a message.');
	
	    var message = messages && messages[id];
	    var hasValues = Object.keys(values).length > 0;
	
	    // Avoid expensive message formatting for simple messages without values. In
	    // development messages will always be formatted in case of missing values.
	    if (!hasValues && process.env.NODE_ENV === 'production') {
	        return message || defaultMessage || id;
	    }
	
	    var formattedMessage = void 0;
	
	    if (message) {
	        try {
	            var formatter = state.getMessageFormat(message, locale, formats);
	
	            formattedMessage = formatter.format(values);
	        } catch (e) {
	            if (process.env.NODE_ENV !== 'production') {
	                console.error('[React Intl] Error formatting message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : '') + ('\n' + e));
	            }
	        }
	    } else {
	        if (process.env.NODE_ENV !== 'production') {
	            // This prevents warnings from littering the console in development
	            // when no `messages` are passed into the <IntlProvider> for the
	            // default locale, and a default message is in the source.
	            if (!defaultMessage || locale && locale.toLowerCase() !== defaultLocale.toLowerCase()) {
	
	                console.error('[React Intl] Missing message: "' + id + '" for locale: "' + locale + '"' + (defaultMessage ? ', using default message as fallback.' : ''));
	            }
	        }
	    }
	
	    if (!formattedMessage && defaultMessage) {
	        try {
	            var _formatter = state.getMessageFormat(defaultMessage, defaultLocale, defaultFormats);
	
	            formattedMessage = _formatter.format(values);
	        } catch (e) {
	            if (process.env.NODE_ENV !== 'production') {
	                console.error('[React Intl] Error formatting the default message for: "' + id + '"' + ('\n' + e));
	            }
	        }
	    }
	
	    if (!formattedMessage) {
	        if (process.env.NODE_ENV !== 'production') {
	            console.error('[React Intl] Cannot format message: "' + id + '", ' + ('using message ' + (message || defaultMessage ? 'source' : 'id') + ' as fallback.'));
	        }
	    }
	
	    return formattedMessage || message || defaultMessage || id;
	}
	
	function formatHTMLMessage(config, state, messageDescriptor) {
	    var rawValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
	    // Process all the values before they are used when formatting the ICU
	    // Message string. Since the formatted message might be injected via
	    // `innerHTML`, all String-based values need to be HTML-escaped.
	    var escapedValues = Object.keys(rawValues).reduce(function (escaped, name) {
	        var value = rawValues[name];
	        escaped[name] = typeof value === 'string' ? escape(value) : value;
	        return escaped;
	    }, {});
	
	    return formatMessage(config, state, messageDescriptor, escapedValues);
	}
	
	
	
	var format = Object.freeze({
		formatDate: formatDate,
		formatTime: formatTime,
		formatRelative: formatRelative,
		formatNumber: formatNumber,
		formatPlural: formatPlural,
		formatMessage: formatMessage,
		formatHTMLMessage: formatHTMLMessage
	});
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var intlConfigPropNames$1 = Object.keys(intlConfigPropTypes);
	var intlFormatPropNames = Object.keys(intlFormatPropTypes);
	
	// These are not a static property on the `IntlProvider` class so the intl
	// config values can be inherited from an <IntlProvider> ancestor.
	var defaultProps = {
	    formats: {},
	    messages: {},
	    textComponent: 'span',
	
	    defaultLocale: 'en',
	    defaultFormats: {}
	};
	
	var IntlProvider = function (_Component) {
	    inherits(IntlProvider, _Component);
	
	    function IntlProvider(props) {
	        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        classCallCheck(this, IntlProvider);
	
	        var _this = possibleConstructorReturn(this, (IntlProvider.__proto__ || Object.getPrototypeOf(IntlProvider)).call(this, props, context));
	
	        invariant(typeof Intl !== 'undefined', '[React Intl] The `Intl` APIs must be available in the runtime, ' + 'and do not appear to be built-in. An `Intl` polyfill should be loaded.\n' + 'See: http://formatjs.io/guides/runtime-environments/');
	
	        var intlContext = context.intl;
	
	        // Used to stabilize time when performing an initial rendering so that
	        // all relative times use the same reference "now" time.
	
	        var initialNow = void 0;
	        if (isFinite(props.initialNow)) {
	            initialNow = Number(props.initialNow);
	        } else {
	            // When an `initialNow` isn't provided via `props`, look to see an
	            // <IntlProvider> exists in the ancestry and call its `now()`
	            // function to propagate its value for "now".
	            initialNow = intlContext ? intlContext.now() : Date.now();
	        }
	
	        // Creating `Intl*` formatters is expensive. If there's a parent
	        // `<IntlProvider>`, then its formatters will be used. Otherwise, this
	        // memoize the `Intl*` constructors and cache them for the lifecycle of
	        // this IntlProvider instance.
	
	        var _ref = intlContext || {},
	            _ref$formatters = _ref.formatters,
	            formatters = _ref$formatters === undefined ? {
	            getDateTimeFormat: memoizeIntlConstructor(Intl.DateTimeFormat),
	            getNumberFormat: memoizeIntlConstructor(Intl.NumberFormat),
	            getMessageFormat: memoizeIntlConstructor(IntlMessageFormat),
	            getRelativeFormat: memoizeIntlConstructor(IntlRelativeFormat),
	            getPluralFormat: memoizeIntlConstructor(IntlPluralFormat)
	        } : _ref$formatters;
	
	        _this.state = _extends({}, formatters, {
	
	            // Wrapper to provide stable "now" time for initial render.
	            now: function now() {
	                return _this._didDisplay ? Date.now() : initialNow;
	            }
	        });
	        return _this;
	    }
	
	    createClass(IntlProvider, [{
	        key: 'getConfig',
	        value: function getConfig() {
	            var intlContext = this.context.intl;
	
	            // Build a whitelisted config object from `props`, defaults, and
	            // `context.intl`, if an <IntlProvider> exists in the ancestry.
	
	            var config = filterProps(this.props, intlConfigPropNames$1, intlContext);
	
	            // Apply default props. This must be applied last after the props have
	            // been resolved and inherited from any <IntlProvider> in the ancestry.
	            // This matches how React resolves `defaultProps`.
	            for (var propName in defaultProps) {
	                if (config[propName] === undefined) {
	                    config[propName] = defaultProps[propName];
	                }
	            }
	
	            if (!hasLocaleData(config.locale)) {
	                var _config = config,
	                    locale = _config.locale,
	                    defaultLocale = _config.defaultLocale,
	                    defaultFormats = _config.defaultFormats;
	
	
	                if (process.env.NODE_ENV !== 'production') {
	                    console.error('[React Intl] Missing locale data for locale: "' + locale + '". ' + ('Using default locale: "' + defaultLocale + '" as fallback.'));
	                }
	
	                // Since there's no registered locale data for `locale`, this will
	                // fallback to the `defaultLocale` to make sure things can render.
	                // The `messages` are overridden to the `defaultProps` empty object
	                // to maintain referential equality across re-renders. It's assumed
	                // each <FormattedMessage> contains a `defaultMessage` prop.
	                config = _extends({}, config, {
	                    locale: defaultLocale,
	                    formats: defaultFormats,
	                    messages: defaultProps.messages
	                });
	            }
	
	            return config;
	        }
	    }, {
	        key: 'getBoundFormatFns',
	        value: function getBoundFormatFns(config, state) {
	            return intlFormatPropNames.reduce(function (boundFormatFns, name) {
	                boundFormatFns[name] = format[name].bind(null, config, state);
	                return boundFormatFns;
	            }, {});
	        }
	    }, {
	        key: 'getChildContext',
	        value: function getChildContext() {
	            var config = this.getConfig();
	
	            // Bind intl factories and current config to the format functions.
	            var boundFormatFns = this.getBoundFormatFns(config, this.state);
	
	            var _state = this.state,
	                now = _state.now,
	                formatters = objectWithoutProperties(_state, ['now']);
	
	
	            return {
	                intl: _extends({}, config, boundFormatFns, {
	                    formatters: formatters,
	                    now: now
	                })
	            };
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this._didDisplay = true;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return React.Children.only(this.props.children);
	        }
	    }]);
	    return IntlProvider;
	}(React.Component);
	
	IntlProvider.displayName = 'IntlProvider';
	IntlProvider.contextTypes = {
	    intl: intlShape
	};
	IntlProvider.childContextTypes = {
	    intl: intlShape.isRequired
	};
	process.env.NODE_ENV !== "production" ? IntlProvider.propTypes = _extends({}, intlConfigPropTypes, {
	    children: React.PropTypes.element.isRequired,
	    initialNow: React.PropTypes.any
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedDate = function (_Component) {
	    inherits(FormattedDate, _Component);
	
	    function FormattedDate(props, context) {
	        classCallCheck(this, FormattedDate);
	
	        var _this = possibleConstructorReturn(this, (FormattedDate.__proto__ || Object.getPrototypeOf(FormattedDate)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedDate, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatDate = _context$intl.formatDate,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                value = _props.value,
	                children = _props.children;
	
	
	            var formattedDate = formatDate(value, this.props);
	
	            if (typeof children === 'function') {
	                return children(formattedDate);
	            }
	
	            return React__default.createElement(
	                Text,
	                null,
	                formattedDate
	            );
	        }
	    }]);
	    return FormattedDate;
	}(React.Component);
	
	FormattedDate.displayName = 'FormattedDate';
	FormattedDate.contextTypes = {
	    intl: intlShape
	};
	process.env.NODE_ENV !== "production" ? FormattedDate.propTypes = _extends({}, dateTimeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedTime = function (_Component) {
	    inherits(FormattedTime, _Component);
	
	    function FormattedTime(props, context) {
	        classCallCheck(this, FormattedTime);
	
	        var _this = possibleConstructorReturn(this, (FormattedTime.__proto__ || Object.getPrototypeOf(FormattedTime)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedTime, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatTime = _context$intl.formatTime,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                value = _props.value,
	                children = _props.children;
	
	
	            var formattedTime = formatTime(value, this.props);
	
	            if (typeof children === 'function') {
	                return children(formattedTime);
	            }
	
	            return React__default.createElement(
	                Text,
	                null,
	                formattedTime
	            );
	        }
	    }]);
	    return FormattedTime;
	}(React.Component);
	
	FormattedTime.displayName = 'FormattedTime';
	FormattedTime.contextTypes = {
	    intl: intlShape
	};
	process.env.NODE_ENV !== "production" ? FormattedTime.propTypes = _extends({}, dateTimeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var SECOND = 1000;
	var MINUTE = 1000 * 60;
	var HOUR = 1000 * 60 * 60;
	var DAY = 1000 * 60 * 60 * 24;
	
	// The maximum timer delay value is a 32-bit signed integer.
	// See: https://mdn.io/setTimeout
	var MAX_TIMER_DELAY = 2147483647;
	
	function selectUnits(delta) {
	    var absDelta = Math.abs(delta);
	
	    if (absDelta < MINUTE) {
	        return 'second';
	    }
	
	    if (absDelta < HOUR) {
	        return 'minute';
	    }
	
	    if (absDelta < DAY) {
	        return 'hour';
	    }
	
	    // The maximum scheduled delay will be measured in days since the maximum
	    // timer delay is less than the number of milliseconds in 25 days.
	    return 'day';
	}
	
	function getUnitDelay(units) {
	    switch (units) {
	        case 'second':
	            return SECOND;
	        case 'minute':
	            return MINUTE;
	        case 'hour':
	            return HOUR;
	        case 'day':
	            return DAY;
	        default:
	            return MAX_TIMER_DELAY;
	    }
	}
	
	function isSameDate(a, b) {
	    if (a === b) {
	        return true;
	    }
	
	    var aTime = new Date(a).getTime();
	    var bTime = new Date(b).getTime();
	
	    return isFinite(aTime) && isFinite(bTime) && aTime === bTime;
	}
	
	var FormattedRelative = function (_Component) {
	    inherits(FormattedRelative, _Component);
	
	    function FormattedRelative(props, context) {
	        classCallCheck(this, FormattedRelative);
	
	        var _this = possibleConstructorReturn(this, (FormattedRelative.__proto__ || Object.getPrototypeOf(FormattedRelative)).call(this, props, context));
	
	        invariantIntlContext(context);
	
	        var now = isFinite(props.initialNow) ? Number(props.initialNow) : context.intl.now();
	
	        // `now` is stored as state so that `render()` remains a function of
	        // props + state, instead of accessing `Date.now()` inside `render()`.
	        _this.state = { now: now };
	        return _this;
	    }
	
	    createClass(FormattedRelative, [{
	        key: 'scheduleNextUpdate',
	        value: function scheduleNextUpdate(props, state) {
	            var _this2 = this;
	
	            var updateInterval = props.updateInterval;
	
	            // If the `updateInterval` is falsy, including `0`, then auto updates
	            // have been turned off, so we bail and skip scheduling an update.
	
	            if (!updateInterval) {
	                return;
	            }
	
	            var time = new Date(props.value).getTime();
	            var delta = time - state.now;
	            var units = props.units || selectUnits(delta);
	
	            var unitDelay = getUnitDelay(units);
	            var unitRemainder = Math.abs(delta % unitDelay);
	
	            // We want the largest possible timer delay which will still display
	            // accurate information while reducing unnecessary re-renders. The delay
	            // should be until the next "interesting" moment, like a tick from
	            // "1 minute ago" to "2 minutes ago" when the delta is 120,000ms.
	            var delay = delta < 0 ? Math.max(updateInterval, unitDelay - unitRemainder) : Math.max(updateInterval, unitRemainder);
	
	            clearTimeout(this._timer);
	
	            this._timer = setTimeout(function () {
	                _this2.setState({ now: _this2.context.intl.now() });
	            }, delay);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.scheduleNextUpdate(this.props, this.state);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(_ref) {
	            var nextValue = _ref.value;
	
	            // When the `props.value` date changes, `state.now` needs to be updated,
	            // and the next update can be rescheduled.
	            if (!isSameDate(nextValue, this.props.value)) {
	                this.setState({ now: this.context.intl.now() });
	            }
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps, nextState) {
	            this.scheduleNextUpdate(nextProps, nextState);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearTimeout(this._timer);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatRelative = _context$intl.formatRelative,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                value = _props.value,
	                children = _props.children;
	
	
	            var formattedRelative = formatRelative(value, _extends({}, this.props, this.state));
	
	            if (typeof children === 'function') {
	                return children(formattedRelative);
	            }
	
	            return React__default.createElement(
	                Text,
	                null,
	                formattedRelative
	            );
	        }
	    }]);
	    return FormattedRelative;
	}(React.Component);
	
	FormattedRelative.displayName = 'FormattedRelative';
	FormattedRelative.contextTypes = {
	    intl: intlShape
	};
	FormattedRelative.defaultProps = {
	    updateInterval: 1000 * 10
	};
	process.env.NODE_ENV !== "production" ? FormattedRelative.propTypes = _extends({}, relativeFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    updateInterval: React.PropTypes.number,
	    initialNow: React.PropTypes.any,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedNumber = function (_Component) {
	    inherits(FormattedNumber, _Component);
	
	    function FormattedNumber(props, context) {
	        classCallCheck(this, FormattedNumber);
	
	        var _this = possibleConstructorReturn(this, (FormattedNumber.__proto__ || Object.getPrototypeOf(FormattedNumber)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedNumber, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatNumber = _context$intl.formatNumber,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                value = _props.value,
	                children = _props.children;
	
	
	            var formattedNumber = formatNumber(value, this.props);
	
	            if (typeof children === 'function') {
	                return children(formattedNumber);
	            }
	
	            return React__default.createElement(
	                Text,
	                null,
	                formattedNumber
	            );
	        }
	    }]);
	    return FormattedNumber;
	}(React.Component);
	
	FormattedNumber.displayName = 'FormattedNumber';
	FormattedNumber.contextTypes = {
	    intl: intlShape
	};
	process.env.NODE_ENV !== "production" ? FormattedNumber.propTypes = _extends({}, numberFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	    format: React.PropTypes.string,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedPlural = function (_Component) {
	    inherits(FormattedPlural, _Component);
	
	    function FormattedPlural(props, context) {
	        classCallCheck(this, FormattedPlural);
	
	        var _this = possibleConstructorReturn(this, (FormattedPlural.__proto__ || Object.getPrototypeOf(FormattedPlural)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedPlural, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate() {
	            for (var _len = arguments.length, next = Array(_len), _key = 0; _key < _len; _key++) {
	                next[_key] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatPlural = _context$intl.formatPlural,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                value = _props.value,
	                other = _props.other,
	                children = _props.children;
	
	
	            var pluralCategory = formatPlural(value, this.props);
	            var formattedPlural = this.props[pluralCategory] || other;
	
	            if (typeof children === 'function') {
	                return children(formattedPlural);
	            }
	
	            return React__default.createElement(
	                Text,
	                null,
	                formattedPlural
	            );
	        }
	    }]);
	    return FormattedPlural;
	}(React.Component);
	
	FormattedPlural.displayName = 'FormattedPlural';
	FormattedPlural.contextTypes = {
	    intl: intlShape
	};
	FormattedPlural.defaultProps = {
	    style: 'cardinal'
	};
	process.env.NODE_ENV !== "production" ? FormattedPlural.propTypes = _extends({}, pluralFormatPropTypes, {
	    value: React.PropTypes.any.isRequired,
	
	    other: React.PropTypes.node.isRequired,
	    zero: React.PropTypes.node,
	    one: React.PropTypes.node,
	    two: React.PropTypes.node,
	    few: React.PropTypes.node,
	    many: React.PropTypes.node,
	
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedMessage = function (_Component) {
	    inherits(FormattedMessage, _Component);
	
	    function FormattedMessage(props, context) {
	        classCallCheck(this, FormattedMessage);
	
	        var _this = possibleConstructorReturn(this, (FormattedMessage.__proto__ || Object.getPrototypeOf(FormattedMessage)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedMessage, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            var values = this.props.values;
	            var nextValues = nextProps.values;
	
	
	            if (!shallowEquals(nextValues, values)) {
	                return true;
	            }
	
	            // Since `values` has already been checked, we know they're not
	            // different, so the current `values` are carried over so the shallow
	            // equals comparison on the other props isn't affected by the `values`.
	            var nextPropsToCheck = _extends({}, nextProps, {
	                values: values
	            });
	
	            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                next[_key - 1] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatMessage = _context$intl.formatMessage,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                id = _props.id,
	                description = _props.description,
	                defaultMessage = _props.defaultMessage,
	                values = _props.values,
	                _props$tagName = _props.tagName,
	                Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
	                children = _props.children;
	
	
	            var tokenDelimiter = void 0;
	            var tokenizedValues = void 0;
	            var elements = void 0;
	
	            var hasValues = values && Object.keys(values).length > 0;
	            if (hasValues) {
	                (function () {
	                    // Creates a token with a random UID that should not be guessable or
	                    // conflict with other parts of the `message` string.
	                    var uid = Math.floor(Math.random() * 0x10000000000).toString(16);
	
	                    var generateToken = function () {
	                        var counter = 0;
	                        return function () {
	                            return 'ELEMENT-' + uid + '-' + (counter += 1);
	                        };
	                    }();
	
	                    // Splitting with a delimiter to support IE8. When using a regex
	                    // with a capture group IE8 does not include the capture group in
	                    // the resulting array.
	                    tokenDelimiter = '@__' + uid + '__@';
	                    tokenizedValues = {};
	                    elements = {};
	
	                    // Iterates over the `props` to keep track of any React Element
	                    // values so they can be represented by the `token` as a placeholder
	                    // when the `message` is formatted. This allows the formatted
	                    // message to then be broken-up into parts with references to the
	                    // React Elements inserted back in.
	                    Object.keys(values).forEach(function (name) {
	                        var value = values[name];
	
	                        if (React.isValidElement(value)) {
	                            var token = generateToken();
	                            tokenizedValues[name] = tokenDelimiter + token + tokenDelimiter;
	                            elements[token] = value;
	                        } else {
	                            tokenizedValues[name] = value;
	                        }
	                    });
	                })();
	            }
	
	            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
	            var formattedMessage = formatMessage(descriptor, tokenizedValues || values);
	
	            var nodes = void 0;
	
	            var hasElements = elements && Object.keys(elements).length > 0;
	            if (hasElements) {
	                // Split the message into parts so the React Element values captured
	                // above can be inserted back into the rendered message. This
	                // approach allows messages to render with React Elements while
	                // keeping React's virtual diffing working properly.
	                nodes = formattedMessage.split(tokenDelimiter).filter(function (part) {
	                    return !!part;
	                }).map(function (part) {
	                    return elements[part] || part;
	                });
	            } else {
	                nodes = [formattedMessage];
	            }
	
	            if (typeof children === 'function') {
	                return children.apply(undefined, toConsumableArray(nodes));
	            }
	
	            // Needs to use `createElement()` instead of JSX, otherwise React will
	            // warn about a missing `key` prop with rich-text message formatting.
	            return React.createElement.apply(undefined, [Component$$1, null].concat(toConsumableArray(nodes)));
	        }
	    }]);
	    return FormattedMessage;
	}(React.Component);
	
	FormattedMessage.displayName = 'FormattedMessage';
	FormattedMessage.contextTypes = {
	    intl: intlShape
	};
	FormattedMessage.defaultProps = {
	    values: {}
	};
	process.env.NODE_ENV !== "production" ? FormattedMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
	    values: React.PropTypes.object,
	    tagName: React.PropTypes.string,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	var FormattedHTMLMessage = function (_Component) {
	    inherits(FormattedHTMLMessage, _Component);
	
	    function FormattedHTMLMessage(props, context) {
	        classCallCheck(this, FormattedHTMLMessage);
	
	        var _this = possibleConstructorReturn(this, (FormattedHTMLMessage.__proto__ || Object.getPrototypeOf(FormattedHTMLMessage)).call(this, props, context));
	
	        invariantIntlContext(context);
	        return _this;
	    }
	
	    createClass(FormattedHTMLMessage, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps) {
	            var values = this.props.values;
	            var nextValues = nextProps.values;
	
	
	            if (!shallowEquals(nextValues, values)) {
	                return true;
	            }
	
	            // Since `values` has already been checked, we know they're not
	            // different, so the current `values` are carried over so the shallow
	            // equals comparison on the other props isn't affected by the `values`.
	            var nextPropsToCheck = _extends({}, nextProps, {
	                values: values
	            });
	
	            for (var _len = arguments.length, next = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                next[_key - 1] = arguments[_key];
	            }
	
	            return shouldIntlComponentUpdate.apply(undefined, [this, nextPropsToCheck].concat(next));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _context$intl = this.context.intl,
	                formatHTMLMessage = _context$intl.formatHTMLMessage,
	                Text = _context$intl.textComponent;
	            var _props = this.props,
	                id = _props.id,
	                description = _props.description,
	                defaultMessage = _props.defaultMessage,
	                rawValues = _props.values,
	                _props$tagName = _props.tagName,
	                Component$$1 = _props$tagName === undefined ? Text : _props$tagName,
	                children = _props.children;
	
	
	            var descriptor = { id: id, description: description, defaultMessage: defaultMessage };
	            var formattedHTMLMessage = formatHTMLMessage(descriptor, rawValues);
	
	            if (typeof children === 'function') {
	                return children(formattedHTMLMessage);
	            }
	
	            // Since the message presumably has HTML in it, we need to set
	            // `innerHTML` in order for it to be rendered and not escaped by React.
	            // To be safe, all string prop values were escaped when formatting the
	            // message. It is assumed that the message is not UGC, and came from the
	            // developer making it more like a template.
	            //
	            // Note: There's a perf impact of using this component since there's no
	            // way for React to do its virtual DOM diffing.
	            var html = { __html: formattedHTMLMessage };
	            return React__default.createElement(Component$$1, { dangerouslySetInnerHTML: html });
	        }
	    }]);
	    return FormattedHTMLMessage;
	}(React.Component);
	
	FormattedHTMLMessage.displayName = 'FormattedHTMLMessage';
	FormattedHTMLMessage.contextTypes = {
	    intl: intlShape
	};
	FormattedHTMLMessage.defaultProps = {
	    values: {}
	};
	process.env.NODE_ENV !== "production" ? FormattedHTMLMessage.propTypes = _extends({}, messageDescriptorPropTypes, {
	    values: React.PropTypes.object,
	    tagName: React.PropTypes.string,
	    children: React.PropTypes.func
	}) : void 0;
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	addLocaleData(defaultLocaleData);
	
	/*
	 * Copyright 2015, Yahoo Inc.
	 * Copyrights licensed under the New BSD License.
	 * See the accompanying LICENSE file for terms.
	 */
	
	addLocaleData(allLocaleData);
	
	exports.addLocaleData = addLocaleData;
	exports.intlShape = intlShape;
	exports.injectIntl = injectIntl;
	exports.defineMessages = defineMessages;
	exports.IntlProvider = IntlProvider;
	exports.FormattedDate = FormattedDate;
	exports.FormattedTime = FormattedTime;
	exports.FormattedRelative = FormattedRelative;
	exports.FormattedNumber = FormattedNumber;
	exports.FormattedPlural = FormattedPlural;
	exports.FormattedMessage = FormattedMessage;
	exports.FormattedHTMLMessage = FormattedHTMLMessage;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 6 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */
	
	'use strict';
	
	var IntlMessageFormat = __webpack_require__(8)['default'];
	
	// Add all locale data to `IntlMessageFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(16);
	
	// Re-export `IntlMessageFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlMessageFormat;
	exports['default'] = exports;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */
	
	"use strict";
	var src$core$$ = __webpack_require__(9), src$en$$ = __webpack_require__(15);
	
	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';
	
	exports["default"] = src$core$$["default"];
	
	//# sourceMappingURL=main.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var src$utils$$ = __webpack_require__(10), src$es5$$ = __webpack_require__(11), src$compiler$$ = __webpack_require__(12), intl$messageformat$parser$$ = __webpack_require__(13);
	exports["default"] = MessageFormat;
	
	// -- MessageFormat --------------------------------------------------------
	
	function MessageFormat(message, locales, formats) {
	    // Parse string messages into an AST.
	    var ast = typeof message === 'string' ?
	            MessageFormat.__parse(message) : message;
	
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new TypeError('A message must be provided as a String or AST.');
	    }
	
	    // Creates a new object with the specified `formats` merged with the default
	    // formats.
	    formats = this._mergeFormats(MessageFormat.formats, formats);
	
	    // Defined first because it's used to build the format pattern.
	    src$es5$$.defineProperty(this, '_locale',  {value: this._resolveLocale(locales)});
	
	    // Compile the `ast` to a pattern that is highly optimized for repeated
	    // `format()` invocations. **Note:** This passes the `locales` set provided
	    // to the constructor instead of just the resolved locale.
	    var pluralFn = this._findPluralRuleFunction(this._locale);
	    var pattern  = this._compilePattern(ast, locales, formats, pluralFn);
	
	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var messageFormat = this;
	    this.format = function (values) {
	        return messageFormat._format(pattern, values);
	    };
	}
	
	// Default format options used as the prototype of the `formats` provided to the
	// constructor. These are used when constructing the internal Intl.NumberFormat
	// and Intl.DateTimeFormat instances.
	src$es5$$.defineProperty(MessageFormat, 'formats', {
	    enumerable: true,
	
	    value: {
	        number: {
	            'currency': {
	                style: 'currency'
	            },
	
	            'percent': {
	                style: 'percent'
	            }
	        },
	
	        date: {
	            'short': {
	                month: 'numeric',
	                day  : 'numeric',
	                year : '2-digit'
	            },
	
	            'medium': {
	                month: 'short',
	                day  : 'numeric',
	                year : 'numeric'
	            },
	
	            'long': {
	                month: 'long',
	                day  : 'numeric',
	                year : 'numeric'
	            },
	
	            'full': {
	                weekday: 'long',
	                month  : 'long',
	                day    : 'numeric',
	                year   : 'numeric'
	            }
	        },
	
	        time: {
	            'short': {
	                hour  : 'numeric',
	                minute: 'numeric'
	            },
	
	            'medium':  {
	                hour  : 'numeric',
	                minute: 'numeric',
	                second: 'numeric'
	            },
	
	            'long': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            },
	
	            'full': {
	                hour        : 'numeric',
	                minute      : 'numeric',
	                second      : 'numeric',
	                timeZoneName: 'short'
	            }
	        }
	    }
	});
	
	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(MessageFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(MessageFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlMessageFormat is missing a ' +
	            '`locale` property'
	        );
	    }
	
	    MessageFormat.__localeData__[data.locale.toLowerCase()] = data;
	}});
	
	// Defines `__parse()` static method as an exposed private.
	src$es5$$.defineProperty(MessageFormat, '__parse', {value: intl$messageformat$parser$$["default"].parse});
	
	// Define public `defaultLocale` property which defaults to English, but can be
	// set by the developer.
	src$es5$$.defineProperty(MessageFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});
	
	MessageFormat.prototype.resolvedOptions = function () {
	    // TODO: Provide anything else?
	    return {
	        locale: this._locale
	    };
	};
	
	MessageFormat.prototype._compilePattern = function (ast, locales, formats, pluralFn) {
	    var compiler = new src$compiler$$["default"](locales, formats, pluralFn);
	    return compiler.compile(ast);
	};
	
	MessageFormat.prototype._findPluralRuleFunction = function (locale) {
	    var localeData = MessageFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];
	
	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find a `pluralRuleFunction` to return.
	    while (data) {
	        if (data.pluralRuleFunction) {
	            return data.pluralRuleFunction;
	        }
	
	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }
	
	    throw new Error(
	        'Locale data added to IntlMessageFormat is missing a ' +
	        '`pluralRuleFunction` for :' + locale
	    );
	};
	
	MessageFormat.prototype._format = function (pattern, values) {
	    var result = '',
	        i, len, part, id, value;
	
	    for (i = 0, len = pattern.length; i < len; i += 1) {
	        part = pattern[i];
	
	        // Exist early for string parts.
	        if (typeof part === 'string') {
	            result += part;
	            continue;
	        }
	
	        id = part.id;
	
	        // Enforce that all required values are provided by the caller.
	        if (!(values && src$utils$$.hop.call(values, id))) {
	            throw new Error('A value must be provided for: ' + id);
	        }
	
	        value = values[id];
	
	        // Recursively format plural and select parts' option — which can be a
	        // nested pattern structure. The choosing of the option to use is
	        // abstracted-by and delegated-to the part helper object.
	        if (part.options) {
	            result += this._format(part.getOption(value), values);
	        } else {
	            result += part.format(value);
	        }
	    }
	
	    return result;
	};
	
	MessageFormat.prototype._mergeFormats = function (defaults, formats) {
	    var mergedFormats = {},
	        type, mergedType;
	
	    for (type in defaults) {
	        if (!src$utils$$.hop.call(defaults, type)) { continue; }
	
	        mergedFormats[type] = mergedType = src$es5$$.objCreate(defaults[type]);
	
	        if (formats && src$utils$$.hop.call(formats, type)) {
	            src$utils$$.extend(mergedType, formats[type]);
	        }
	    }
	
	    return mergedFormats;
	};
	
	MessageFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }
	
	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(MessageFormat.defaultLocale);
	
	    var localeData = MessageFormat.__localeData__;
	    var i, len, localeParts, data;
	
	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');
	
	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }
	
	            localeParts.pop();
	        }
	    }
	
	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlMessageFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};
	
	//# sourceMappingURL=core.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	exports.extend = extend;
	var hop = Object.prototype.hasOwnProperty;
	
	function extend(obj) {
	    var sources = Array.prototype.slice.call(arguments, 1),
	        i, len, source, key;
	
	    for (i = 0, len = sources.length; i < len; i += 1) {
	        source = sources[i];
	        if (!source) { continue; }
	
	        for (key in source) {
	            if (hop.call(source, key)) {
	                obj[key] = source[key];
	            }
	        }
	    }
	
	    return obj;
	}
	exports.hop = hop;
	
	//# sourceMappingURL=utils.js.map

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var src$utils$$ = __webpack_require__(10);
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!src$utils$$.hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (src$utils$$.hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate;
	
	//# sourceMappingURL=es5.js.map

/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	exports["default"] = Compiler;
	
	function Compiler(locales, formats, pluralFn) {
	    this.locales  = locales;
	    this.formats  = formats;
	    this.pluralFn = pluralFn;
	}
	
	Compiler.prototype.compile = function (ast) {
	    this.pluralStack        = [];
	    this.currentPlural      = null;
	    this.pluralNumberFormat = null;
	
	    return this.compileMessage(ast);
	};
	
	Compiler.prototype.compileMessage = function (ast) {
	    if (!(ast && ast.type === 'messageFormatPattern')) {
	        throw new Error('Message AST is not of type: "messageFormatPattern"');
	    }
	
	    var elements = ast.elements,
	        pattern  = [];
	
	    var i, len, element;
	
	    for (i = 0, len = elements.length; i < len; i += 1) {
	        element = elements[i];
	
	        switch (element.type) {
	            case 'messageTextElement':
	                pattern.push(this.compileMessageText(element));
	                break;
	
	            case 'argumentElement':
	                pattern.push(this.compileArgument(element));
	                break;
	
	            default:
	                throw new Error('Message element does not have a valid type');
	        }
	    }
	
	    return pattern;
	};
	
	Compiler.prototype.compileMessageText = function (element) {
	    // When this `element` is part of plural sub-pattern and its value contains
	    // an unescaped '#', use a `PluralOffsetString` helper to properly output
	    // the number with the correct offset in the string.
	    if (this.currentPlural && /(^|[^\\])#/g.test(element.value)) {
	        // Create a cache a NumberFormat instance that can be reused for any
	        // PluralOffsetString instance in this message.
	        if (!this.pluralNumberFormat) {
	            this.pluralNumberFormat = new Intl.NumberFormat(this.locales);
	        }
	
	        return new PluralOffsetString(
	                this.currentPlural.id,
	                this.currentPlural.format.offset,
	                this.pluralNumberFormat,
	                element.value);
	    }
	
	    // Unescape the escaped '#'s in the message text.
	    return element.value.replace(/\\#/g, '#');
	};
	
	Compiler.prototype.compileArgument = function (element) {
	    var format = element.format;
	
	    if (!format) {
	        return new StringFormat(element.id);
	    }
	
	    var formats  = this.formats,
	        locales  = this.locales,
	        pluralFn = this.pluralFn,
	        options;
	
	    switch (format.type) {
	        case 'numberFormat':
	            options = formats.number[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.NumberFormat(locales, options).format
	            };
	
	        case 'dateFormat':
	            options = formats.date[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };
	
	        case 'timeFormat':
	            options = formats.time[format.style];
	            return {
	                id    : element.id,
	                format: new Intl.DateTimeFormat(locales, options).format
	            };
	
	        case 'pluralFormat':
	            options = this.compileOptions(element);
	            return new PluralFormat(
	                element.id, format.ordinal, format.offset, options, pluralFn
	            );
	
	        case 'selectFormat':
	            options = this.compileOptions(element);
	            return new SelectFormat(element.id, options);
	
	        default:
	            throw new Error('Message element does not have a valid format type');
	    }
	};
	
	Compiler.prototype.compileOptions = function (element) {
	    var format      = element.format,
	        options     = format.options,
	        optionsHash = {};
	
	    // Save the current plural element, if any, then set it to a new value when
	    // compiling the options sub-patterns. This conforms the spec's algorithm
	    // for handling `"#"` syntax in message text.
	    this.pluralStack.push(this.currentPlural);
	    this.currentPlural = format.type === 'pluralFormat' ? element : null;
	
	    var i, len, option;
	
	    for (i = 0, len = options.length; i < len; i += 1) {
	        option = options[i];
	
	        // Compile the sub-pattern and save it under the options's selector.
	        optionsHash[option.selector] = this.compileMessage(option.value);
	    }
	
	    // Pop the plural stack to put back the original current plural value.
	    this.currentPlural = this.pluralStack.pop();
	
	    return optionsHash;
	};
	
	// -- Compiler Helper Classes --------------------------------------------------
	
	function StringFormat(id) {
	    this.id = id;
	}
	
	StringFormat.prototype.format = function (value) {
	    if (!value) {
	        return '';
	    }
	
	    return typeof value === 'string' ? value : String(value);
	};
	
	function PluralFormat(id, useOrdinal, offset, options, pluralFn) {
	    this.id         = id;
	    this.useOrdinal = useOrdinal;
	    this.offset     = offset;
	    this.options    = options;
	    this.pluralFn   = pluralFn;
	}
	
	PluralFormat.prototype.getOption = function (value) {
	    var options = this.options;
	
	    var option = options['=' + value] ||
	            options[this.pluralFn(value - this.offset, this.useOrdinal)];
	
	    return option || options.other;
	};
	
	function PluralOffsetString(id, offset, numberFormat, string) {
	    this.id           = id;
	    this.offset       = offset;
	    this.numberFormat = numberFormat;
	    this.string       = string;
	}
	
	PluralOffsetString.prototype.format = function (value) {
	    var number = this.numberFormat.format(value - this.offset);
	
	    return this.string
	            .replace(/(^|[^\\])#/g, '$1' + number)
	            .replace(/\\#/g, '#');
	};
	
	function SelectFormat(id, options) {
	    this.id      = id;
	    this.options = options;
	}
	
	SelectFormat.prototype.getOption = function (value) {
	    var options = this.options;
	    return options[value] || options.other;
	};
	
	//# sourceMappingURL=compiler.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(14)['default'];
	exports['default'] = exports;


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = (function() {
	  /*
	   * Generated by PEG.js 0.8.0.
	   *
	   * http://pegjs.majda.cz/
	   */
	
	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }
	
	  function SyntaxError(message, expected, found, offset, line, column) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.offset   = offset;
	    this.line     = line;
	    this.column   = column;
	
	    this.name     = "SyntaxError";
	  }
	
	  peg$subclass(SyntaxError, Error);
	
	  function parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	
	        peg$FAILED = {},
	
	        peg$startRuleFunctions = { start: peg$parsestart },
	        peg$startRuleFunction  = peg$parsestart,
	
	        peg$c0 = [],
	        peg$c1 = function(elements) {
	                return {
	                    type    : 'messageFormatPattern',
	                    elements: elements
	                };
	            },
	        peg$c2 = peg$FAILED,
	        peg$c3 = function(text) {
	                var string = '',
	                    i, j, outerLen, inner, innerLen;
	
	                for (i = 0, outerLen = text.length; i < outerLen; i += 1) {
	                    inner = text[i];
	
	                    for (j = 0, innerLen = inner.length; j < innerLen; j += 1) {
	                        string += inner[j];
	                    }
	                }
	
	                return string;
	            },
	        peg$c4 = function(messageText) {
	                return {
	                    type : 'messageTextElement',
	                    value: messageText
	                };
	            },
	        peg$c5 = /^[^ \t\n\r,.+={}#]/,
	        peg$c6 = { type: "class", value: "[^ \\t\\n\\r,.+={}#]", description: "[^ \\t\\n\\r,.+={}#]" },
	        peg$c7 = "{",
	        peg$c8 = { type: "literal", value: "{", description: "\"{\"" },
	        peg$c9 = null,
	        peg$c10 = ",",
	        peg$c11 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c12 = "}",
	        peg$c13 = { type: "literal", value: "}", description: "\"}\"" },
	        peg$c14 = function(id, format) {
	                return {
	                    type  : 'argumentElement',
	                    id    : id,
	                    format: format && format[2]
	                };
	            },
	        peg$c15 = "number",
	        peg$c16 = { type: "literal", value: "number", description: "\"number\"" },
	        peg$c17 = "date",
	        peg$c18 = { type: "literal", value: "date", description: "\"date\"" },
	        peg$c19 = "time",
	        peg$c20 = { type: "literal", value: "time", description: "\"time\"" },
	        peg$c21 = function(type, style) {
	                return {
	                    type : type + 'Format',
	                    style: style && style[2]
	                };
	            },
	        peg$c22 = "plural",
	        peg$c23 = { type: "literal", value: "plural", description: "\"plural\"" },
	        peg$c24 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: false,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                };
	            },
	        peg$c25 = "selectordinal",
	        peg$c26 = { type: "literal", value: "selectordinal", description: "\"selectordinal\"" },
	        peg$c27 = function(pluralStyle) {
	                return {
	                    type   : pluralStyle.type,
	                    ordinal: true,
	                    offset : pluralStyle.offset || 0,
	                    options: pluralStyle.options
	                }
	            },
	        peg$c28 = "select",
	        peg$c29 = { type: "literal", value: "select", description: "\"select\"" },
	        peg$c30 = function(options) {
	                return {
	                    type   : 'selectFormat',
	                    options: options
	                };
	            },
	        peg$c31 = "=",
	        peg$c32 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c33 = function(selector, pattern) {
	                return {
	                    type    : 'optionalFormatPattern',
	                    selector: selector,
	                    value   : pattern
	                };
	            },
	        peg$c34 = "offset:",
	        peg$c35 = { type: "literal", value: "offset:", description: "\"offset:\"" },
	        peg$c36 = function(number) {
	                return number;
	            },
	        peg$c37 = function(offset, options) {
	                return {
	                    type   : 'pluralFormat',
	                    offset : offset,
	                    options: options
	                };
	            },
	        peg$c38 = { type: "other", description: "whitespace" },
	        peg$c39 = /^[ \t\n\r]/,
	        peg$c40 = { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" },
	        peg$c41 = { type: "other", description: "optionalWhitespace" },
	        peg$c42 = /^[0-9]/,
	        peg$c43 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c44 = /^[0-9a-f]/i,
	        peg$c45 = { type: "class", value: "[0-9a-f]i", description: "[0-9a-f]i" },
	        peg$c46 = "0",
	        peg$c47 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c48 = /^[1-9]/,
	        peg$c49 = { type: "class", value: "[1-9]", description: "[1-9]" },
	        peg$c50 = function(digits) {
	            return parseInt(digits, 10);
	        },
	        peg$c51 = /^[^{}\\\0-\x1F \t\n\r]/,
	        peg$c52 = { type: "class", value: "[^{}\\\\\\0-\\x1F \\t\\n\\r]", description: "[^{}\\\\\\0-\\x1F \\t\\n\\r]" },
	        peg$c53 = "\\\\",
	        peg$c54 = { type: "literal", value: "\\\\", description: "\"\\\\\\\\\"" },
	        peg$c55 = function() { return '\\'; },
	        peg$c56 = "\\#",
	        peg$c57 = { type: "literal", value: "\\#", description: "\"\\\\#\"" },
	        peg$c58 = function() { return '\\#'; },
	        peg$c59 = "\\{",
	        peg$c60 = { type: "literal", value: "\\{", description: "\"\\\\{\"" },
	        peg$c61 = function() { return '\u007B'; },
	        peg$c62 = "\\}",
	        peg$c63 = { type: "literal", value: "\\}", description: "\"\\\\}\"" },
	        peg$c64 = function() { return '\u007D'; },
	        peg$c65 = "\\u",
	        peg$c66 = { type: "literal", value: "\\u", description: "\"\\\\u\"" },
	        peg$c67 = function(digits) {
	                return String.fromCharCode(parseInt(digits, 16));
	            },
	        peg$c68 = function(chars) { return chars.join(''); },
	
	        peg$currPos          = 0,
	        peg$reportedPos      = 0,
	        peg$cachedPos        = 0,
	        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,
	
	        peg$result;
	
	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }
	
	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }
	
	    function text() {
	      return input.substring(peg$reportedPos, peg$currPos);
	    }
	
	    function offset() {
	      return peg$reportedPos;
	    }
	
	    function line() {
	      return peg$computePosDetails(peg$reportedPos).line;
	    }
	
	    function column() {
	      return peg$computePosDetails(peg$reportedPos).column;
	    }
	
	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        peg$reportedPos
	      );
	    }
	
	    function error(message) {
	      throw peg$buildException(message, null, peg$reportedPos);
	    }
	
	    function peg$computePosDetails(pos) {
	      function advance(details, startPos, endPos) {
	        var p, ch;
	
	        for (p = startPos; p < endPos; p++) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	        }
	      }
	
	      if (peg$cachedPos !== pos) {
	        if (peg$cachedPos > pos) {
	          peg$cachedPos = 0;
	          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
	        }
	        advance(peg$cachedPosDetails, peg$cachedPos, pos);
	        peg$cachedPos = pos;
	      }
	
	      return peg$cachedPosDetails;
	    }
	
	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }
	
	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }
	
	      peg$maxFailExpected.push(expected);
	    }
	
	    function peg$buildException(message, expected, pos) {
	      function cleanupExpected(expected) {
	        var i = 1;
	
	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });
	
	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }
	
	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }
	
	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }
	
	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;
	
	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }
	
	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];
	
	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
	
	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }
	
	      var posDetails = peg$computePosDetails(pos),
	          found      = pos < input.length ? input.charAt(pos) : null;
	
	      if (expected !== null) {
	        cleanupExpected(expected);
	      }
	
	      return new SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        pos,
	        posDetails.line,
	        posDetails.column
	      );
	    }
	
	    function peg$parsestart() {
	      var s0;
	
	      s0 = peg$parsemessageFormatPattern();
	
	      return s0;
	    }
	
	    function peg$parsemessageFormatPattern() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsemessageFormatElement();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsemessageFormatElement();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c1(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parsemessageFormatElement() {
	      var s0;
	
	      s0 = peg$parsemessageTextElement();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseargumentElement();
	      }
	
	      return s0;
	    }
	
	    function peg$parsemessageText() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$currPos;
	      s3 = peg$parse_();
	      if (s3 !== peg$FAILED) {
	        s4 = peg$parsechars();
	        if (s4 !== peg$FAILED) {
	          s5 = peg$parse_();
	          if (s5 !== peg$FAILED) {
	            s3 = [s3, s4, s5];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	      } else {
	        peg$currPos = s2;
	        s2 = peg$c2;
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$currPos;
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parsechars();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s3 = [s3, s4, s5];
	                s2 = s3;
	              } else {
	                peg$currPos = s2;
	                s2 = peg$c2;
	              }
	            } else {
	              peg$currPos = s2;
	              s2 = peg$c2;
	            }
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c3(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$parsews();
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }
	
	      return s0;
	    }
	
	    function peg$parsemessageTextElement() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      s1 = peg$parsemessageText();
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c4(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseargument() {
	      var s0, s1, s2;
	
	      s0 = peg$parsenumber();
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = [];
	        if (peg$c5.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c6); }
	        }
	        if (s2 !== peg$FAILED) {
	          while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            if (peg$c5.test(input.charAt(peg$currPos))) {
	              s2 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s2 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c6); }
	            }
	          }
	        } else {
	          s1 = peg$c2;
	        }
	        if (s1 !== peg$FAILED) {
	          s1 = input.substring(s0, peg$currPos);
	        }
	        s0 = s1;
	      }
	
	      return s0;
	    }
	
	    function peg$parseargumentElement() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 123) {
	        s1 = peg$c7;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c8); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseargument();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$currPos;
	              if (input.charCodeAt(peg$currPos) === 44) {
	                s6 = peg$c10;
	                peg$currPos++;
	              } else {
	                s6 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c11); }
	              }
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parse_();
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseelementFormat();
	                  if (s8 !== peg$FAILED) {
	                    s6 = [s6, s7, s8];
	                    s5 = s6;
	                  } else {
	                    peg$currPos = s5;
	                    s5 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s5;
	                  s5 = peg$c2;
	                }
	              } else {
	                peg$currPos = s5;
	                s5 = peg$c2;
	              }
	              if (s5 === peg$FAILED) {
	                s5 = peg$c9;
	              }
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parse_();
	                if (s6 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 125) {
	                    s7 = peg$c12;
	                    peg$currPos++;
	                  } else {
	                    s7 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                  }
	                  if (s7 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c14(s3, s5);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseelementFormat() {
	      var s0;
	
	      s0 = peg$parsesimpleFormat();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsepluralFormat();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseselectOrdinalFormat();
	          if (s0 === peg$FAILED) {
	            s0 = peg$parseselectFormat();
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parsesimpleFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c15) {
	        s1 = peg$c15;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c16); }
	      }
	      if (s1 === peg$FAILED) {
	        if (input.substr(peg$currPos, 4) === peg$c17) {
	          s1 = peg$c17;
	          peg$currPos += 4;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c18); }
	        }
	        if (s1 === peg$FAILED) {
	          if (input.substr(peg$currPos, 4) === peg$c19) {
	            s1 = peg$c19;
	            peg$currPos += 4;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c20); }
	          }
	        }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s4 = peg$c10;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parse_();
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parsechars();
	              if (s6 !== peg$FAILED) {
	                s4 = [s4, s5, s6];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$c2;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$c2;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$c2;
	          }
	          if (s3 === peg$FAILED) {
	            s3 = peg$c9;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c21(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsepluralFormat() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c22) {
	        s1 = peg$c22;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c23); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c24(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselectOrdinalFormat() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 13) === peg$c25) {
	        s1 = peg$c25;
	        peg$currPos += 13;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c26); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parsepluralStyle();
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c27(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselectFormat() {
	      var s0, s1, s2, s3, s4, s5, s6;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 6) === peg$c28) {
	        s1 = peg$c28;
	        peg$currPos += 6;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c29); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s3 = peg$c10;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c11); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parse_();
	            if (s4 !== peg$FAILED) {
	              s5 = [];
	              s6 = peg$parseoptionalFormatPattern();
	              if (s6 !== peg$FAILED) {
	                while (s6 !== peg$FAILED) {
	                  s5.push(s6);
	                  s6 = peg$parseoptionalFormatPattern();
	                }
	              } else {
	                s5 = peg$c2;
	              }
	              if (s5 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c30(s5);
	                s0 = s1;
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseselector() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 61) {
	        s2 = peg$c31;
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c32); }
	      }
	      if (s2 !== peg$FAILED) {
	        s3 = peg$parsenumber();
	        if (s3 !== peg$FAILED) {
	          s2 = [s2, s3];
	          s1 = s2;
	        } else {
	          peg$currPos = s1;
	          s1 = peg$c2;
	        }
	      } else {
	        peg$currPos = s1;
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$parsechars();
	      }
	
	      return s0;
	    }
	
	    function peg$parseoptionalFormatPattern() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
	
	      s0 = peg$currPos;
	      s1 = peg$parse_();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseselector();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parse_();
	          if (s3 !== peg$FAILED) {
	            if (input.charCodeAt(peg$currPos) === 123) {
	              s4 = peg$c7;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c8); }
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$parse_();
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parsemessageFormatPattern();
	                if (s6 !== peg$FAILED) {
	                  s7 = peg$parse_();
	                  if (s7 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 125) {
	                      s8 = peg$c12;
	                      peg$currPos++;
	                    } else {
	                      s8 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c13); }
	                    }
	                    if (s8 !== peg$FAILED) {
	                      peg$reportedPos = s0;
	                      s1 = peg$c33(s2, s6);
	                      s0 = s1;
	                    } else {
	                      peg$currPos = s0;
	                      s0 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$c2;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$c2;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parseoffset() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 7) === peg$c34) {
	        s1 = peg$c34;
	        peg$currPos += 7;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsenumber();
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c36(s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsepluralStyle() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      s1 = peg$parseoffset();
	      if (s1 === peg$FAILED) {
	        s1 = peg$c9;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parse_();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parseoptionalFormatPattern();
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              s4 = peg$parseoptionalFormatPattern();
	            }
	          } else {
	            s3 = peg$c2;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c37(s1, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$c2;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$c2;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$c2;
	      }
	
	      return s0;
	    }
	
	    function peg$parsews() {
	      var s0, s1;
	
	      peg$silentFails++;
	      s0 = [];
	      if (peg$c39.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c40); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c39.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c40); }
	          }
	        }
	      } else {
	        s0 = peg$c2;
	      }
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c38); }
	      }
	
	      return s0;
	    }
	
	    function peg$parse_() {
	      var s0, s1, s2;
	
	      peg$silentFails++;
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsews();
	      while (s2 !== peg$FAILED) {
	        s1.push(s2);
	        s2 = peg$parsews();
	      }
	      if (s1 !== peg$FAILED) {
	        s1 = input.substring(s0, peg$currPos);
	      }
	      s0 = s1;
	      peg$silentFails--;
	      if (s0 === peg$FAILED) {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c41); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsedigit() {
	      var s0;
	
	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsehexDigit() {
	      var s0;
	
	      if (peg$c44.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c45); }
	      }
	
	      return s0;
	    }
	
	    function peg$parsenumber() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c46;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c47); }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = peg$currPos;
	        s2 = peg$currPos;
	        if (peg$c48.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c49); }
	        }
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          s5 = peg$parsedigit();
	          while (s5 !== peg$FAILED) {
	            s4.push(s5);
	            s5 = peg$parsedigit();
	          }
	          if (s4 !== peg$FAILED) {
	            s3 = [s3, s4];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$c2;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$c2;
	        }
	        if (s2 !== peg$FAILED) {
	          s2 = input.substring(s1, peg$currPos);
	        }
	        s1 = s2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c50(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parsechar() {
	      var s0, s1, s2, s3, s4, s5, s6, s7;
	
	      if (peg$c51.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c52); }
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        if (input.substr(peg$currPos, 2) === peg$c53) {
	          s1 = peg$c53;
	          peg$currPos += 2;
	        } else {
	          s1 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c54); }
	        }
	        if (s1 !== peg$FAILED) {
	          peg$reportedPos = s0;
	          s1 = peg$c55();
	        }
	        s0 = s1;
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          if (input.substr(peg$currPos, 2) === peg$c56) {
	            s1 = peg$c56;
	            peg$currPos += 2;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c57); }
	          }
	          if (s1 !== peg$FAILED) {
	            peg$reportedPos = s0;
	            s1 = peg$c58();
	          }
	          s0 = s1;
	          if (s0 === peg$FAILED) {
	            s0 = peg$currPos;
	            if (input.substr(peg$currPos, 2) === peg$c59) {
	              s1 = peg$c59;
	              peg$currPos += 2;
	            } else {
	              s1 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c60); }
	            }
	            if (s1 !== peg$FAILED) {
	              peg$reportedPos = s0;
	              s1 = peg$c61();
	            }
	            s0 = s1;
	            if (s0 === peg$FAILED) {
	              s0 = peg$currPos;
	              if (input.substr(peg$currPos, 2) === peg$c62) {
	                s1 = peg$c62;
	                peg$currPos += 2;
	              } else {
	                s1 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c63); }
	              }
	              if (s1 !== peg$FAILED) {
	                peg$reportedPos = s0;
	                s1 = peg$c64();
	              }
	              s0 = s1;
	              if (s0 === peg$FAILED) {
	                s0 = peg$currPos;
	                if (input.substr(peg$currPos, 2) === peg$c65) {
	                  s1 = peg$c65;
	                  peg$currPos += 2;
	                } else {
	                  s1 = peg$FAILED;
	                  if (peg$silentFails === 0) { peg$fail(peg$c66); }
	                }
	                if (s1 !== peg$FAILED) {
	                  s2 = peg$currPos;
	                  s3 = peg$currPos;
	                  s4 = peg$parsehexDigit();
	                  if (s4 !== peg$FAILED) {
	                    s5 = peg$parsehexDigit();
	                    if (s5 !== peg$FAILED) {
	                      s6 = peg$parsehexDigit();
	                      if (s6 !== peg$FAILED) {
	                        s7 = peg$parsehexDigit();
	                        if (s7 !== peg$FAILED) {
	                          s4 = [s4, s5, s6, s7];
	                          s3 = s4;
	                        } else {
	                          peg$currPos = s3;
	                          s3 = peg$c2;
	                        }
	                      } else {
	                        peg$currPos = s3;
	                        s3 = peg$c2;
	                      }
	                    } else {
	                      peg$currPos = s3;
	                      s3 = peg$c2;
	                    }
	                  } else {
	                    peg$currPos = s3;
	                    s3 = peg$c2;
	                  }
	                  if (s3 !== peg$FAILED) {
	                    s3 = input.substring(s2, peg$currPos);
	                  }
	                  s2 = s3;
	                  if (s2 !== peg$FAILED) {
	                    peg$reportedPos = s0;
	                    s1 = peg$c67(s2);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$c2;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$c2;
	                }
	              }
	            }
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parsechars() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsechar();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsechar();
	        }
	      } else {
	        s1 = peg$c2;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$reportedPos = s0;
	        s1 = peg$c68(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    peg$result = peg$startRuleFunction();
	
	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }
	
	      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
	    }
	  }
	
	  return {
	    SyntaxError: SyntaxError,
	    parse:       parse
	  };
	})();
	
	//# sourceMappingURL=parser.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}};
	
	//# sourceMappingURL=en.js.map

/***/ },
/* 16 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* jshint node:true */
	
	'use strict';
	
	var IntlRelativeFormat = __webpack_require__(18)['default'];
	
	// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
	// bundling for the browser with Browserify/Webpack.
	__webpack_require__(23);
	
	// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
	// locale data registered, and with English set as the default locale. Define
	// the `default` prop for use with other compiled ES6 Modules.
	exports = module.exports = IntlRelativeFormat;
	exports['default'] = exports;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/* jslint esnext: true */
	
	"use strict";
	var src$core$$ = __webpack_require__(19), src$en$$ = __webpack_require__(22);
	
	src$core$$["default"].__addLocaleData(src$en$$["default"]);
	src$core$$["default"].defaultLocale = 'en';
	
	exports["default"] = src$core$$["default"];
	
	//# sourceMappingURL=main.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	var intl$messageformat$$ = __webpack_require__(7), src$diff$$ = __webpack_require__(20), src$es5$$ = __webpack_require__(21);
	exports["default"] = RelativeFormat;
	
	// -----------------------------------------------------------------------------
	
	var FIELDS = ['second', 'minute', 'hour', 'day', 'month', 'year'];
	var STYLES = ['best fit', 'numeric'];
	
	// -- RelativeFormat -----------------------------------------------------------
	
	function RelativeFormat(locales, options) {
	    options = options || {};
	
	    // Make a copy of `locales` if it's an array, so that it doesn't change
	    // since it's used lazily.
	    if (src$es5$$.isArray(locales)) {
	        locales = locales.concat();
	    }
	
	    src$es5$$.defineProperty(this, '_locale', {value: this._resolveLocale(locales)});
	    src$es5$$.defineProperty(this, '_options', {value: {
	        style: this._resolveStyle(options.style),
	        units: this._isValidUnits(options.units) && options.units
	    }});
	
	    src$es5$$.defineProperty(this, '_locales', {value: locales});
	    src$es5$$.defineProperty(this, '_fields', {value: this._findFields(this._locale)});
	    src$es5$$.defineProperty(this, '_messages', {value: src$es5$$.objCreate(null)});
	
	    // "Bind" `format()` method to `this` so it can be passed by reference like
	    // the other `Intl` APIs.
	    var relativeFormat = this;
	    this.format = function format(date, options) {
	        return relativeFormat._format(date, options);
	    };
	}
	
	// Define internal private properties for dealing with locale data.
	src$es5$$.defineProperty(RelativeFormat, '__localeData__', {value: src$es5$$.objCreate(null)});
	src$es5$$.defineProperty(RelativeFormat, '__addLocaleData', {value: function (data) {
	    if (!(data && data.locale)) {
	        throw new Error(
	            'Locale data provided to IntlRelativeFormat is missing a ' +
	            '`locale` property value'
	        );
	    }
	
	    RelativeFormat.__localeData__[data.locale.toLowerCase()] = data;
	
	    // Add data to IntlMessageFormat.
	    intl$messageformat$$["default"].__addLocaleData(data);
	}});
	
	// Define public `defaultLocale` property which can be set by the developer, or
	// it will be set when the first RelativeFormat instance is created by
	// leveraging the resolved locale from `Intl`.
	src$es5$$.defineProperty(RelativeFormat, 'defaultLocale', {
	    enumerable: true,
	    writable  : true,
	    value     : undefined
	});
	
	// Define public `thresholds` property which can be set by the developer, and
	// defaults to relative time thresholds from moment.js.
	src$es5$$.defineProperty(RelativeFormat, 'thresholds', {
	    enumerable: true,
	
	    value: {
	        second: 45,  // seconds to minute
	        minute: 45,  // minutes to hour
	        hour  : 22,  // hours to day
	        day   : 26,  // days to month
	        month : 11   // months to year
	    }
	});
	
	RelativeFormat.prototype.resolvedOptions = function () {
	    return {
	        locale: this._locale,
	        style : this._options.style,
	        units : this._options.units
	    };
	};
	
	RelativeFormat.prototype._compileMessage = function (units) {
	    // `this._locales` is the original set of locales the user specified to the
	    // constructor, while `this._locale` is the resolved root locale.
	    var locales        = this._locales;
	    var resolvedLocale = this._locale;
	
	    var field        = this._fields[units];
	    var relativeTime = field.relativeTime;
	    var future       = '';
	    var past         = '';
	    var i;
	
	    for (i in relativeTime.future) {
	        if (relativeTime.future.hasOwnProperty(i)) {
	            future += ' ' + i + ' {' +
	                relativeTime.future[i].replace('{0}', '#') + '}';
	        }
	    }
	
	    for (i in relativeTime.past) {
	        if (relativeTime.past.hasOwnProperty(i)) {
	            past += ' ' + i + ' {' +
	                relativeTime.past[i].replace('{0}', '#') + '}';
	        }
	    }
	
	    var message = '{when, select, future {{0, plural, ' + future + '}}' +
	                                 'past {{0, plural, ' + past + '}}}';
	
	    // Create the synthetic IntlMessageFormat instance using the original
	    // locales value specified by the user when constructing the the parent
	    // IntlRelativeFormat instance.
	    return new intl$messageformat$$["default"](message, locales);
	};
	
	RelativeFormat.prototype._getMessage = function (units) {
	    var messages = this._messages;
	
	    // Create a new synthetic message based on the locale data from CLDR.
	    if (!messages[units]) {
	        messages[units] = this._compileMessage(units);
	    }
	
	    return messages[units];
	};
	
	RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
	    var field = this._fields[units];
	
	    if (field.relative) {
	        return field.relative[diff];
	    }
	};
	
	RelativeFormat.prototype._findFields = function (locale) {
	    var localeData = RelativeFormat.__localeData__;
	    var data       = localeData[locale.toLowerCase()];
	
	    // The locale data is de-duplicated, so we have to traverse the locale's
	    // hierarchy until we find `fields` to return.
	    while (data) {
	        if (data.fields) {
	            return data.fields;
	        }
	
	        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
	    }
	
	    throw new Error(
	        'Locale data added to IntlRelativeFormat is missing `fields` for :' +
	        locale
	    );
	};
	
	RelativeFormat.prototype._format = function (date, options) {
	    var now = options && options.now !== undefined ? options.now : src$es5$$.dateNow();
	
	    if (date === undefined) {
	        date = now;
	    }
	
	    // Determine if the `date` and optional `now` values are valid, and throw a
	    // similar error to what `Intl.DateTimeFormat#format()` would throw.
	    if (!isFinite(now)) {
	        throw new RangeError(
	            'The `now` option provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }
	
	    if (!isFinite(date)) {
	        throw new RangeError(
	            'The date value provided to IntlRelativeFormat#format() is not ' +
	            'in valid range.'
	        );
	    }
	
	    var diffReport  = src$diff$$["default"](now, date);
	    var units       = this._options.units || this._selectUnits(diffReport);
	    var diffInUnits = diffReport[units];
	
	    if (this._options.style !== 'numeric') {
	        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
	        if (relativeUnits) {
	            return relativeUnits;
	        }
	    }
	
	    return this._getMessage(units).format({
	        '0' : Math.abs(diffInUnits),
	        when: diffInUnits < 0 ? 'past' : 'future'
	    });
	};
	
	RelativeFormat.prototype._isValidUnits = function (units) {
	    if (!units || src$es5$$.arrIndexOf.call(FIELDS, units) >= 0) {
	        return true;
	    }
	
	    if (typeof units === 'string') {
	        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
	        if (suggestion && src$es5$$.arrIndexOf.call(FIELDS, suggestion) >= 0) {
	            throw new Error(
	                '"' + units + '" is not a valid IntlRelativeFormat `units` ' +
	                'value, did you mean: ' + suggestion
	            );
	        }
	    }
	
	    throw new Error(
	        '"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
	        'must be one of: "' + FIELDS.join('", "') + '"'
	    );
	};
	
	RelativeFormat.prototype._resolveLocale = function (locales) {
	    if (typeof locales === 'string') {
	        locales = [locales];
	    }
	
	    // Create a copy of the array so we can push on the default locale.
	    locales = (locales || []).concat(RelativeFormat.defaultLocale);
	
	    var localeData = RelativeFormat.__localeData__;
	    var i, len, localeParts, data;
	
	    // Using the set of locales + the default locale, we look for the first one
	    // which that has been registered. When data does not exist for a locale, we
	    // traverse its ancestors to find something that's been registered within
	    // its hierarchy of locales. Since we lack the proper `parentLocale` data
	    // here, we must take a naive approach to traversal.
	    for (i = 0, len = locales.length; i < len; i += 1) {
	        localeParts = locales[i].toLowerCase().split('-');
	
	        while (localeParts.length) {
	            data = localeData[localeParts.join('-')];
	            if (data) {
	                // Return the normalized locale string; e.g., we return "en-US",
	                // instead of "en-us".
	                return data.locale;
	            }
	
	            localeParts.pop();
	        }
	    }
	
	    var defaultLocale = locales.pop();
	    throw new Error(
	        'No locale data has been added to IntlRelativeFormat for: ' +
	        locales.join(', ') + ', or the default locale: ' + defaultLocale
	    );
	};
	
	RelativeFormat.prototype._resolveStyle = function (style) {
	    // Default to "best fit" style.
	    if (!style) {
	        return STYLES[0];
	    }
	
	    if (src$es5$$.arrIndexOf.call(STYLES, style) >= 0) {
	        return style;
	    }
	
	    throw new Error(
	        '"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
	        'must be one of: "' + STYLES.join('", "') + '"'
	    );
	};
	
	RelativeFormat.prototype._selectUnits = function (diffReport) {
	    var i, l, units;
	
	    for (i = 0, l = FIELDS.length; i < l; i += 1) {
	        units = FIELDS[i];
	
	        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
	            break;
	        }
	    }
	
	    return units;
	};
	
	//# sourceMappingURL=core.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	
	var round = Math.round;
	
	function daysToYears(days) {
	    // 400 years have 146097 days (taking into account leap year rules)
	    return days * 400 / 146097;
	}
	
	exports["default"] = function (from, to) {
	    // Convert to ms timestamps.
	    from = +from;
	    to   = +to;
	
	    var millisecond = round(to - from),
	        second      = round(millisecond / 1000),
	        minute      = round(second / 60),
	        hour        = round(minute / 60),
	        day         = round(hour / 24),
	        week        = round(day / 7);
	
	    var rawYears = daysToYears(day),
	        month    = round(rawYears * 12),
	        year     = round(rawYears);
	
	    return {
	        millisecond: millisecond,
	        second     : second,
	        minute     : minute,
	        hour       : hour,
	        day        : day,
	        week       : week,
	        month      : month,
	        year       : year
	    };
	};
	
	//# sourceMappingURL=diff.js.map

/***/ },
/* 21 */
/***/ function(module, exports) {

	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	"use strict";
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var hop = Object.prototype.hasOwnProperty;
	var toString = Object.prototype.toString;
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	
	var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
	    /*jshint validthis:true */
	    var arr = this;
	    if (!arr.length) {
	        return -1;
	    }
	
	    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
	        if (arr[i] === search) {
	            return i;
	        }
	    }
	
	    return -1;
	};
	
	var isArray = Array.isArray || function (obj) {
	    return toString.call(obj) === '[object Array]';
	};
	
	var dateNow = Date.now || function () {
	    return new Date().getTime();
	};
	exports.defineProperty = defineProperty, exports.objCreate = objCreate, exports.arrIndexOf = arrIndexOf, exports.isArray = isArray, exports.dateNow = dateNow;
	
	//# sourceMappingURL=es5.js.map

/***/ },
/* 22 */
/***/ function(module, exports) {

	// GENERATED FILE
	"use strict";
	exports["default"] = {"locale":"en","pluralRuleFunction":function (n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"},"fields":{"year":{"displayName":"year","relative":{"0":"this year","1":"next year","-1":"last year"},"relativeTime":{"future":{"one":"in {0} year","other":"in {0} years"},"past":{"one":"{0} year ago","other":"{0} years ago"}}},"month":{"displayName":"month","relative":{"0":"this month","1":"next month","-1":"last month"},"relativeTime":{"future":{"one":"in {0} month","other":"in {0} months"},"past":{"one":"{0} month ago","other":"{0} months ago"}}},"day":{"displayName":"day","relative":{"0":"today","1":"tomorrow","-1":"yesterday"},"relativeTime":{"future":{"one":"in {0} day","other":"in {0} days"},"past":{"one":"{0} day ago","other":"{0} days ago"}}},"hour":{"displayName":"hour","relativeTime":{"future":{"one":"in {0} hour","other":"in {0} hours"},"past":{"one":"{0} hour ago","other":"{0} hours ago"}}},"minute":{"displayName":"minute","relativeTime":{"future":{"one":"in {0} minute","other":"in {0} minutes"},"past":{"one":"{0} minute ago","other":"{0} minutes ago"}}},"second":{"displayName":"second","relative":{"0":"now"},"relativeTime":{"future":{"one":"in {0} second","other":"in {0} seconds"},"past":{"one":"{0} second ago","other":"{0} seconds ago"}}}}};
	
	//# sourceMappingURL=en.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports = module.exports = __webpack_require__(26)['default'];
	exports['default'] = exports;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var src$es5$$ = __webpack_require__(27);
	exports["default"] = createFormatCache;
	
	// -----------------------------------------------------------------------------
	
	function createFormatCache(FormatConstructor) {
	    var cache = src$es5$$.objCreate(null);
	
	    return function () {
	        var args    = Array.prototype.slice.call(arguments);
	        var cacheId = getCacheId(args);
	        var format  = cacheId && cache[cacheId];
	
	        if (!format) {
	            format = new (src$es5$$.bind.apply(FormatConstructor, [null].concat(args)))();
	
	            if (cacheId) {
	                cache[cacheId] = format;
	            }
	        }
	
	        return format;
	    };
	}
	
	// -- Utilities ----------------------------------------------------------------
	
	function getCacheId(inputs) {
	    // When JSON is not available in the runtime, we will not create a cache id.
	    if (typeof JSON === 'undefined') { return; }
	
	    var cacheId = [];
	
	    var i, len, input;
	
	    for (i = 0, len = inputs.length; i < len; i += 1) {
	        input = inputs[i];
	
	        if (input && typeof input === 'object') {
	            cacheId.push(orderedProps(input));
	        } else {
	            cacheId.push(input);
	        }
	    }
	
	    return JSON.stringify(cacheId);
	}
	
	function orderedProps(obj) {
	    var props = [],
	        keys  = [];
	
	    var key, i, len, prop;
	
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) {
	            keys.push(key);
	        }
	    }
	
	    var orderedKeys = keys.sort();
	
	    for (i = 0, len = orderedKeys.length; i < len; i += 1) {
	        key  = orderedKeys[i];
	        prop = {};
	
	        prop[key] = obj[key];
	        props[i]  = prop;
	    }
	
	    return props;
	}
	
	//# sourceMappingURL=memoizer.js.map

/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	/*
	Copyright (c) 2014, Yahoo! Inc. All rights reserved.
	Copyrights licensed under the New BSD License.
	See the accompanying LICENSE file for terms.
	*/
	
	/* jslint esnext: true */
	
	// Function.prototype.bind implementation from Mozilla Developer Network:
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Polyfill
	
	var bind = Function.prototype.bind || function (oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }
	
	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };
	
	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }
	    fBound.prototype = new fNOP();
	
	    return fBound;
	};
	
	// Purposely using the same implementation as the Intl.js `Intl` polyfill.
	// Copyright 2013 Andy Earnshaw, MIT License
	
	var hop = Object.prototype.hasOwnProperty;
	
	var realDefineProp = (function () {
	    try { return !!Object.defineProperty({}, 'a', {}); }
	    catch (e) { return false; }
	})();
	
	var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
	
	var defineProperty = realDefineProp ? Object.defineProperty :
	        function (obj, name, desc) {
	
	    if ('get' in desc && obj.__defineGetter__) {
	        obj.__defineGetter__(name, desc.get);
	    } else if (!hop.call(obj, name) || 'value' in desc) {
	        obj[name] = desc.value;
	    }
	};
	
	var objCreate = Object.create || function (proto, props) {
	    var obj, k;
	
	    function F() {}
	    F.prototype = proto;
	    obj = new F();
	
	    for (k in props) {
	        if (hop.call(props, k)) {
	            defineProperty(obj, k, props[k]);
	        }
	    }
	
	    return obj;
	};
	
	exports.bind = bind, exports.defineProperty = defineProperty, exports.objCreate = objCreate;
	
	//# sourceMappingURL=es5.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// React
	var React = __webpack_require__(1);
	// React Intl
	var react_intl_1 = __webpack_require__(4);
	// Styles
	__webpack_require__(29);
	;
	var LanguageSelector = function (props) {
	    var languages = props.languages, onChange = props.onChange, selected = props.selected, intl = props.intl, messages = props.messages, languageLabel = props.languageLabel;
	    return (React.createElement("div", { className: "LanguageSelectorComponent" },
	        React.createElement("i", { className: "fa fa-language", "aria-hidden": "true" }),
	        React.createElement("span", { className: "languageSelectorLabel" }, languageLabel),
	        React.createElement("select", { name: "LanguageSelector", id: "LanguageSelector", onChange: onChange, defaultValue: selected }, languages.map(function (value, index) {
	            return (React.createElement("option", { key: index, value: value }, intl.formatMessage(messages[value])));
	        }))));
	};
	exports.LanguageSelectorComponent = react_intl_1.injectIntl(LanguageSelector);
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.LanguageSelectorComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Utc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsYW5ndWFnZS1zZWxlY3Rvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQVE7QUFDUiw2QkFBK0I7QUFFL0IsYUFBYTtBQUNiLHlDQUE4RDtBQUU5RCxTQUFTO0FBQ1Qsb0NBQWtDO0FBU2pDLENBQUM7QUFFRixJQUFNLGdCQUFnQixHQUFHLFVBQUUsS0FBc0M7SUFDdkQsSUFBQSwyQkFBUyxFQUFFLHlCQUFRLEVBQUUseUJBQVEsRUFBRSxpQkFBSSxFQUFFLHlCQUFRLEVBQUUsbUNBQWEsQ0FBVztJQUUvRSxNQUFNLENBQUMsQ0FDTCw2QkFBSyxTQUFTLEVBQUMsMkJBQTJCO1FBQ3hDLDJCQUFHLFNBQVMsRUFBQyxnQkFBZ0IsaUJBQWEsTUFBTSxHQUFLO1FBQ3JELDhCQUFNLFNBQVMsRUFBQyx1QkFBdUIsSUFBRSxhQUFhLENBQVE7UUFDOUQsZ0NBQVEsSUFBSSxFQUFDLGtCQUFrQixFQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLElBRTVGLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBQyxLQUFLLEVBQUUsS0FBSztZQUN6QixNQUFNLENBQUMsQ0FDTCxnQ0FDRSxHQUFHLEVBQUUsS0FBSyxFQUNWLEtBQUssRUFBRSxLQUFLLElBRVYsSUFBSSxDQUFDLGFBQWEsQ0FBRSxRQUFRLENBQUUsS0FBSyxDQUFFLENBQUUsQ0FFbEMsQ0FDVixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBRUcsQ0FDTCxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUM7QUFJVyxRQUFBLHlCQUF5QixHQUFHLHVCQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFDdEUsa0JBQWUsaUNBQXlCLENBQUMifQ==

/***/ },
/* 29 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	__webpack_require__(32);
	/**
	 * Github ribbon
	 * Source: https://github.com/simonwhitaker/github-fork-ribbon-css
	 */
	exports.GithubRibbon = function (props) {
	    return (React.createElement("a", { className: "GithubRibbonComponent", href: "https://github.com/davidjsalazarmoreno/portfolio", "aria-label": "View source on Github" },
	        React.createElement("svg", { width: "80", height: "80", viewBox: "0 0 250 250", "aria-hidden": "true" },
	            React.createElement("path", { d: "M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" }),
	            React.createElement("path", { d: "M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2", fill: "currentColor", className: "octo-arm" }),
	            React.createElement("path", { d: "M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z", fill: "currentColor", className: "octo-body" }))));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.GithubRibbon;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXJpYmJvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdpdGh1Yi1yaWJib24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBK0I7QUFFL0IsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFaEM7OztHQUdHO0FBQ1UsUUFBQSxZQUFZLEdBQUcsVUFBQyxLQUFLO0lBQ2hDLE1BQU0sQ0FBQyxDQUNKLDJCQUFHLFNBQVMsRUFBQyx1QkFBdUIsRUFBQyxJQUFJLEVBQUMsa0RBQWtELGdCQUFZLHVCQUF1QjtRQUMvSCw2QkFBSyxLQUFLLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLGFBQWEsaUJBQWEsTUFBTTtZQUNuRSw4QkFBTSxDQUFDLEVBQUMsbURBQW1ELEdBQVE7WUFDbkUsOEJBQU0sQ0FBQyxFQUFDLDBMQUEwTCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLFVBQVUsR0FBUTtZQUNuUCw4QkFBTSxDQUFDLEVBQUMscWhCQUFxaEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFNBQVMsRUFBQyxXQUFXLEdBQVEsQ0FDemtCLENBQ0gsQ0FDTixDQUFDO0FBQ0osQ0FBQyxDQUFBOztBQUVELGtCQUFlLG9CQUFZLENBQUMifQ==

/***/ },
/* 32 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	__webpack_require__(34);
	exports.FlatSeparatorComponent = function (props) {
	    return (React.createElement("div", { className: "FlatSeparatorComponent", style: { margin: props.margin, width: props.width } }));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.FlatSeparatorComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC1zZXBhcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbGF0LXNlcGFyYXRvci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZCQUErQjtBQUUvQixPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUVwQixRQUFBLHNCQUFzQixHQUFHLFVBQUMsS0FBSztJQUMxQyxNQUFNLENBQUEsQ0FDSiw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUMsR0FBUSxDQUNsRyxDQUFBO0FBQ0gsQ0FBQyxDQUFBOztBQUVELGtCQUFlLDhCQUFzQixDQUFBIn0=

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	// React
	var React = __webpack_require__(1);
	// Components
	var lightbox_1 = __webpack_require__(36);
	__webpack_require__(44);
	exports.ShowcaseComponent = function (props) {
	    // Props
	    var title = props.title, elements = props.elements, emptyStateText = props.emptyStateText;
	    if (elements.length === 0) {
	        return (React.createElement("div", { id: "" + (props.id | title), className: "ShowcaseComponent" },
	            React.createElement("h3", null, title),
	            React.createElement("p", null, emptyStateText)));
	    }
	    return (React.createElement("div", { id: "" + (props.id | title), className: "ShowcaseComponent" },
	        React.createElement("h3", null, title),
	        React.createElement("div", { className: "Thumbnails", style: {
	                columnCount: props.columnCount || '4'
	            } }, props.elements.map(function (element) { return React.createElement(lightbox_1.LightboxComponent, __assign({ key: "" + element.url }, element)); }))));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.ShowcaseComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Nhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaG93Y2FzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsUUFBUTtBQUNSLDZCQUErQjtBQUUvQixhQUFhO0FBQ2IsaURBQXVEO0FBRXZELDJCQUF5QjtBQUVaLFFBQUEsaUJBQWlCLEdBQUcsVUFBQyxLQUFLO0lBQ3JDLFFBQVE7SUFDQSxJQUFBLG1CQUFLLEVBQUUseUJBQVEsRUFBRSxxQ0FBYyxDQUFXO0lBRWxELEVBQUUsQ0FBQyxDQUFFLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsQ0FDTCw2QkFBSyxFQUFFLEVBQUUsTUFBRyxLQUFLLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBRSxFQUFFLFNBQVMsRUFBQyxtQkFBbUI7WUFDM0QsZ0NBQUssS0FBSyxDQUFNO1lBQ2hCLCtCQUFJLGNBQWMsQ0FBSyxDQUNuQixDQUNQLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQ0wsNkJBQUssRUFBRSxFQUFFLE1BQUcsS0FBSyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUUsRUFBRSxTQUFTLEVBQUMsbUJBQW1CO1FBQzNELGdDQUFLLEtBQUssQ0FBTTtRQUVoQiw2QkFBSyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRTtnQkFDakMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLElBQUksR0FBRzthQUN0QyxJQUVHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsb0JBQUMsNEJBQWlCLGFBQUMsR0FBRyxFQUFFLEtBQUcsT0FBTyxDQUFDLEdBQUssSUFBTSxPQUFPLEVBQUksRUFBekQsQ0FBeUQsQ0FBQyxDQUV4RixDQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTs7QUFFRCxrQkFBZSx5QkFBaUIsQ0FBQSJ9

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	var LazyLoad = __webpack_require__(37).default;
	__webpack_require__(43);
	var LightboxComponent = (function (_super) {
	    __extends(LightboxComponent, _super);
	    function LightboxComponent(props) {
	        var _this = _super.call(this, props) || this;
	        _this.state = {
	            visible: false,
	            isLoading: true
	        };
	        // Render Methods
	        _this.renderImageLightbox = _this.renderImageLightbox.bind(_this);
	        _this.renderYoutubeLightbox = _this.renderYoutubeLightbox.bind(_this);
	        // State getters/setters
	        _this.toggleVisibility = _this.toggleVisibility.bind(_this);
	        return _this;
	    }
	    LightboxComponent.prototype.toggleVisibility = function () {
	        var newState = __assign({}, this.state, { visible: !this.state.visible });
	        this.setState(newState);
	    };
	    LightboxComponent.prototype.renderImageLightbox = function () {
	        // Props
	        var _a = this.props, url = _a.url, alt = _a.alt;
	        // State
	        var visible = this.state.visible;
	        // State getters/setters
	        var toggleVisibility = this.toggleVisibility;
	        if (!visible) {
	            return null;
	        }
	        return (React.createElement("div", { className: "Lightbox" },
	            React.createElement("i", { className: "fa fa-close", onClick: function (e) {
	                    e.preventDefault();
	                    toggleVisibility();
	                } }),
	            React.createElement("figure", null,
	                React.createElement("img", { src: url, alt: alt, onClick: function (e) {
	                        e.preventDefault();
	                        toggleVisibility();
	                    } }),
	                React.createElement("figcaption", null, alt))));
	    };
	    LightboxComponent.prototype.renderYoutubeLightbox = function () {
	        var _this = this;
	        // Props
	        var _a = this.props, url = _a.url, alt = _a.alt;
	        // State
	        var visible = this.state.visible;
	        // State getters/setters
	        var toggleVisibility = this.toggleVisibility;
	        if (!visible) {
	            return null;
	        }
	        return (React.createElement("div", { key: "" + url, className: "Lightbox" },
	            React.createElement("i", { className: "fa fa-close", onClick: function (e) {
	                    e.preventDefault();
	                    toggleVisibility();
	                } }),
	            React.createElement("figure", null,
	                this.state.isLoading && React.createElement("h2", null, "Loading video, please wait..."),
	                React.createElement("iframe", { src: "https://www.youtube.com/embed/" + url, width: "640", height: "480", frameBorder: "0", allowFullScreen: true, onLoad: function () {
	                        if (!!_this.state.isLoading) {
	                            console.info('Iframe onload');
	                            var newState = __assign({}, _this.state, { isLoading: false });
	                            _this.setState(newState);
	                        }
	                    } }),
	                React.createElement("figcaption", null, alt))));
	    };
	    LightboxComponent.prototype.render = function () {
	        // Props
	        var _a = this.props, type = _a.type, url = _a.url, alt = _a.alt, id = _a.id;
	        // State
	        var visible = this.state.visible;
	        // Render Methods
	        var _b = this, renderImageLightbox = _b.renderImageLightbox, renderYoutubeLightbox = _b.renderYoutubeLightbox;
	        // State getters/setters
	        var toggleVisibility = this.toggleVisibility;
	        var dispatchTable = {
	            'image': renderImageLightbox,
	            'youtube': renderYoutubeLightbox
	        };
	        return (
	        // <ReactCSSTransitionGroup
	        //   transitionName="example"
	        //       transitionAppear={false}
	        //   transitionEnterTimeout={0}
	        //   transitionLeaveTimeout={0}
	        // >
	        React.createElement("div", { key: url + "-" + Math.random(), id: id, className: "LightboxComponent" },
	            React.createElement("a", { href: type === 'youtube' ? "https://www.youtube.com/watch?v=" + url : "" + url, className: "Thumbnail", onClick: function (e) {
	                    e.preventDefault();
	                    toggleVisibility();
	                } },
	                React.createElement(LazyLoad, { offset: 100, placeholder: React.createElement("div", { className: "placeholder" },
	                        React.createElement("i", { className: "fa fa-circle-o-notch fa-spin fa-3x fa-fw" })) },
	                    React.createElement("img", { src: type === 'youtube' ? "http://img.youtube.com/vi/" + url + "/mqdefault.jpg" : "" + url, style: {
	                            width: this.props.width || '100%',
	                            height: this.props.height || '100%'
	                        } }))),
	            dispatchTable[type]()));
	    };
	    return LightboxComponent;
	}(React.Component));
	exports.LightboxComponent = LightboxComponent;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LightboxComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlnaHRib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWdodGJveC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2QkFBK0I7QUFJL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDO0FBRW5ELDJCQUF5QjtBQUV6QjtJQUF1QyxxQ0FBeUI7SUFNOUQsMkJBQVksS0FBSztRQUFqQixZQUNFLGtCQUFNLEtBQUssQ0FBQyxTQVFiO1FBZEQsV0FBSyxHQUFHO1lBQ04sT0FBTyxFQUFFLEtBQUs7WUFDZCxTQUFTLEVBQUUsSUFBSTtTQUNoQixDQUFDO1FBS0EsaUJBQWlCO1FBQ2pCLEtBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQy9ELEtBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRW5FLHdCQUF3QjtRQUN4QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQzs7SUFDM0QsQ0FBQztJQUVELDRDQUFnQixHQUFoQjtRQUNFLElBQU0sUUFBUSxnQkFBUSxJQUFJLENBQUMsS0FBSyxJQUFFLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFFLENBQUM7UUFFakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CO1FBQ0UsUUFBUTtRQUNGLElBQUEsZUFBeUIsRUFBdkIsWUFBRyxFQUFFLFlBQUcsQ0FBZ0I7UUFFaEMsUUFBUTtRQUNBLElBQUEsNEJBQU8sQ0FBZ0I7UUFFL0Isd0JBQXdCO1FBQ2hCLElBQUEsd0NBQWdCLENBQVU7UUFFbEMs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

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.forceCheck = exports.lazyload = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _event = __webpack_require__(38);
	
	var _scrollParent = __webpack_require__(39);
	
	var _scrollParent2 = _interopRequireDefault(_scrollParent);
	
	var _debounce = __webpack_require__(40);
	
	var _debounce2 = _interopRequireDefault(_debounce);
	
	var _throttle = __webpack_require__(41);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _decorator = __webpack_require__(42);
	
	var _decorator2 = _interopRequireDefault(_decorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var LISTEN_FLAG = 'data-lazyload-listened';
	var listeners = [];
	var pending = [];
	
	/**
	 * Check if `component` is visible in overflow container `parent`
	 * @param  {node} component React component
	 * @param  {node} parent    component's scroll parent
	 * @return {bool}
	 */
	var checkOverflowVisible = function checkOverflowVisible(component, parent) {
	  var node = _reactDom2.default.findDOMNode(component);
	
	  var _parent$getBoundingCl = parent.getBoundingClientRect();
	
	  var parentTop = _parent$getBoundingCl.top;
	  var parentHeight = _parent$getBoundingCl.height;
	
	  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
	
	  // calculate top and height of the intersection of the element's scrollParent and viewport
	  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
	  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height
	
	  // check whether the element is visible in the intersection
	
	  var _node$getBoundingClie = node.getBoundingClientRect();
	
	  var top = _node$getBoundingClie.top;
	  var height = _node$getBoundingClie.height;
	
	  var offsetTop = top - intersectionTop; // element's top relative to intersection
	
	  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API
	
	  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0;
	};
	
	/**
	 * Check if `component` is visible in document
	 * @param  {node} component React component
	 * @return {bool}
	 */
	var checkNormalVisible = function checkNormalVisible(component) {
	  var node = _reactDom2.default.findDOMNode(component);
	
	  var _node$getBoundingClie2 = node.getBoundingClientRect();
	
	  var top = _node$getBoundingClie2.top;
	  var elementHeight = _node$getBoundingClie2.height;
	
	
	  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
	
	  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API
	
	  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
	};
	
	/**
	 * Detect if element is visible in viewport, if so, set `visible` state to true.
	 * If `once` prop is provided true, remove component as listener after checkVisible
	 *
	 * @param  {React} component   React component that respond to scroll and resize
	 */
	var checkVisible = function checkVisible(component) {
	  var node = _reactDom2.default.findDOMNode(component);
	  if (!node) {
	    return;
	  }
	
	  var parent = (0, _scrollParent2.default)(node);
	  var isOverflow = parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
	
	  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
	
	  if (visible) {
	    // Avoid extra render if previously is visible, yeah I mean `render` call,
	    // not actual DOM render
	    if (!component.visible) {
	      if (component.props.once) {
	        pending.push(component);
	      }
	
	      component.visible = true;
	      component.forceUpdate();
	    }
	  } else if (!(component.props.once && component.visible)) {
	    component.visible = false;
	    if (component.props.unmountIfInvisible) {
	      component.forceUpdate();
	    }
	  }
	};
	
	var purgePending = function purgePending() {
	  pending.forEach(function (component) {
	    var index = listeners.indexOf(component);
	    if (index !== -1) {
	      listeners.splice(index, 1);
	    }
	  });
	
	  pending = [];
	};
	
	var lazyLoadHandler = function lazyLoadHandler() {
	  for (var i = 0; i < listeners.length; ++i) {
	    var listener = listeners[i];
	    checkVisible(listener);
	  }
	
	  // Remove `once` component in listeners
	  purgePending();
	};
	
	// Depending on component's props
	var delayType = void 0;
	var finalLazyLoadHandler = null;
	
	var LazyLoad = function (_Component) {
	  _inherits(LazyLoad, _Component);
	
	  function LazyLoad(props) {
	    _classCallCheck(this, LazyLoad);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LazyLoad).call(this, props));
	
	    _this.visible = false;
	
	    return _this;
	  }
	
	  _createClass(LazyLoad, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
	        if (_react2.default.Children.count(this.props.children) > 1) {
	          console.warn('[react-lazyload] Only one child is allowed to be passed to `LazyLoad`.');
	        }
	
	        if (this.props.wheel) {
	          // eslint-disable-line
	          console.warn('[react-lazyload] Props `wheel` is not supported anymore, try set `overflow` for lazy loading in overflow containers.');
	        }
	
	        // Warn the user if placeholder and height is not specified and the rendered height is 0
	        if (!this.props.placeholder && this.props.height === undefined && _reactDom2.default.findDOMNode(this).offsetHeight === 0) {
	          console.warn('[react-lazyload] Please add `height` props to <LazyLoad> for better performance.');
	        }
	      }
	
	      // It's unlikely to change delay type on the fly, this is mainly
	      // designed for tests
	      var needResetFinalLazyLoadHandler = false;
	      if (this.props.debounce !== undefined && delayType === 'throttle') {
	        console.warn('[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously');
	        needResetFinalLazyLoadHandler = true;
	      } else if (delayType === 'debounce' && this.props.debounce === undefined) {
	        console.warn('[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously');
	        needResetFinalLazyLoadHandler = true;
	      }
	
	      if (needResetFinalLazyLoadHandler) {
	        (0, _event.off)(window, 'scroll', finalLazyLoadHandler);
	        (0, _event.off)(window, 'resize', finalLazyLoadHandler);
	        finalLazyLoadHandler = null;
	      }
	
	      if (!finalLazyLoadHandler) {
	        if (this.props.debounce !== undefined) {
	          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
	          delayType = 'debounce';
	        } else {
	          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
	          delayType = 'throttle';
	        }
	      }
	
	      if (this.props.overflow) {
	        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
	        if (parent) {
	          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
	          if (listenerCount === 1) {
	            parent.addEventListener('scroll', finalLazyLoadHandler);
	          }
	          parent.setAttribute(LISTEN_FLAG, listenerCount);
	        }
	      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
	        var _props = this.props;
	        var scroll = _props.scroll;
	        var resize = _props.resize;
	
	
	        if (scroll) {
	          (0, _event.on)(window, 'scroll', finalLazyLoadHandler);
	        }
	
	        if (resize) {
	          (0, _event.on)(window, 'resize', finalLazyLoadHandler);
	        }
	      }
	
	      listeners.push(this);
	      checkVisible(this);
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate() {
	      return this.visible;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.overflow) {
	        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
	        if (parent) {
	          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
	          if (listenerCount === 0) {
	            parent.removeEventListener('scroll', finalLazyLoadHandler);
	            parent.removeAttribute(LISTEN_FLAG);
	          } else {
	            parent.setAttribute(LISTEN_FLAG, listenerCount);
	          }
	        }
	      }
	
	      var index = listeners.indexOf(this);
	      if (index !== -1) {
	        listeners.splice(index, 1);
	      }
	
	      if (listeners.length === 0) {
	        (0, _event.off)(window, 'resize', finalLazyLoadHandler);
	        (0, _event.off)(window, 'scroll', finalLazyLoadHandler);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });
	    }
	  }]);
	
	  return LazyLoad;
	}(_react.Component);
	
	LazyLoad.propTypes = {
	  once: _react.PropTypes.bool,
	  height: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	  offset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.arrayOf(_react.PropTypes.number)]),
	  overflow: _react.PropTypes.bool,
	  resize: _react.PropTypes.bool,
	  scroll: _react.PropTypes.bool,
	  children: _react.PropTypes.node,
	  throttle: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
	  debounce: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
	  placeholder: _react.PropTypes.node,
	  unmountIfInvisible: _react.PropTypes.bool
	};
	
	LazyLoad.defaultProps = {
	  once: false,
	  offset: 0,
	  overflow: false,
	  resize: false,
	  scroll: true,
	  unmountIfInvisible: false
	};
	
	var lazyload = exports.lazyload = _decorator2.default;
	exports.default = LazyLoad;
	exports.forceCheck = lazyLoadHandler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.on = on;
	exports.off = off;
	function on(el, eventName, callback) {
	  if (el.addEventListener) {
	    el.addEventListener(eventName, callback, false);
	  } else if (el.attachEvent) {
	    el.attachEvent("on" + eventName, function (e) {
	      callback.call(el, e || window.event);
	    });
	  }
	}
	
	function off(el, eventName, callback) {
	  if (el.removeEventListener) {
	    el.removeEventListener(eventName, callback);
	  } else if (el.detachEvent) {
	    el.detachEvent("on" + eventName, callback);
	  }
	}

/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * @fileOverview Find scroll parent
	 */
	
	exports.default = function (node) {
	  if (!node) {
	    return document;
	  }
	
	  var excludeStaticParent = node.style.position === 'absolute';
	  var overflowRegex = /(scroll|auto)/;
	  var parent = node;
	
	  while (parent) {
	    if (!parent.parentNode) {
	      return node.ownerDocument || document;
	    }
	
	    var style = window.getComputedStyle(parent);
	    var position = style.position;
	    var overflow = style.overflow;
	    var overflowX = style['overflow-x'];
	    var overflowY = style['overflow-y'];
	
	    if (position === 'static' && excludeStaticParent) {
	      continue;
	    }
	
	    if (overflowRegex.test(overflow + overflowX + overflowY)) {
	      return parent;
	    }
	
	    parent = parent.parentNode;
	  }
	
	  return node.ownerDocument || node.documentElement || document;
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = debounce;
	function debounce(func, wait, immediate) {
	  var timeout = void 0;
	  var args = void 0;
	  var context = void 0;
	  var timestamp = void 0;
	  var result = void 0;
	
	  var later = function later() {
	    var last = +new Date() - timestamp;
	
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      if (!immediate) {
	        result = func.apply(context, args);
	        if (!timeout) {
	          context = args = null;
	        }
	      }
	    }
	  };
	
	  return function debounced() {
	    context = this;
	    args = arguments;
	    timestamp = +new Date();
	
	    var callNow = immediate && !timeout;
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	
	    if (callNow) {
	      result = func.apply(context, args);
	      context = args = null;
	    }
	
	    return result;
	  };
	}

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = throttle;
	/*eslint-disable */
	function throttle(fn, threshhold, scope) {
	  threshhold || (threshhold = 250);
	  var last, deferTimer;
	  return function () {
	    var context = scope || this;
	
	    var now = +new Date(),
	        args = arguments;
	    if (last && now < last + threshhold) {
	      // hold on to it
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _index = __webpack_require__(37);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var getDisplayName = function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	};
	
	exports.default = function () {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  return function lazyload(WrappedComponent) {
	    return function (_Component) {
	      _inherits(LazyLoadDecorated, _Component);
	
	      function LazyLoadDecorated() {
	        _classCallCheck(this, LazyLoadDecorated);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LazyLoadDecorated).call(this));
	
	        _this.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
	        return _this;
	      }
	
	      _createClass(LazyLoadDecorated, [{
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(
	            _index2.default,
	            options,
	            _react2.default.createElement(WrappedComponent, this.props)
	          );
	        }
	      }]);
	
	      return LazyLoadDecorated;
	    }(_react.Component);
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var social_1 = __webpack_require__(46);
	var index_1 = __webpack_require__(48);
	__webpack_require__(50);
	;
	/**
	 * Portfolio Header
	 */
	exports.HeaderComponent = function (props) {
	    return (React.createElement("header", { className: "HeaderComponent" },
	        React.createElement("h1", { className: "title" }, "David Salazar"),
	        React.createElement("img", { className: "HeaderAvatar", src: props.avatarUrl, width: "150", height: "150", alt: "David Salazar" }),
	        React.createElement(social_1.SocialComponent, { id: "SocialsOnHeader", networks: index_1.networks })));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.HeaderComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQStCO0FBRS9CLDZDQUFtRDtBQUVuRCw0Q0FBNEM7QUFHNUMseUJBQXVCO0FBSXRCLENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsZUFBZSxHQUFHLFVBQUMsS0FBNEI7SUFDMUQsTUFBTSxDQUFDLENBQ0wsZ0NBQVEsU0FBUyxFQUFDLGlCQUFpQjtRQUNqQyw0QkFBSSxTQUFTLEVBQUMsT0FBTyxvQkFFaEI7UUFFTCw2QkFDRSxTQUFTLEVBQUMsY0FBYyxFQUN4QixHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFDcEIsS0FBSyxFQUFDLEtBQUssRUFDWCxNQUFNLEVBQUMsS0FBSyxFQUNaLEdBQUcsRUFBQyxlQUFlLEdBQ2xCO1FBQ0gsb0JBQUMsd0JBQWUsSUFBQyxFQUFFLEVBQUMsaUJBQWlCLEVBQUMsUUFBUSxFQUFFLGdCQUFRLEdBQUksQ0FDckQsQ0FFVixDQUFBO0FBQ0gsQ0FBQyxDQUFBOztBQUVELGtCQUFlLHVCQUFlLENBQUEifQ==

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	__webpack_require__(47);
	exports.SocialComponent = function (props) {
	    // Props
	    var id = props.id, networks = props.networks;
	    return (React.createElement("div", { id: id, className: "SocialComponent" }, networks.map(function (_a, index) {
	        var url = _a.url, iconClassName = _a.iconClassName, title = _a.title;
	        return React.createElement("span", { key: "" + index },
	            React.createElement("a", { href: url },
	                React.createElement("i", { className: iconClassName, title: title })));
	    })));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.SocialComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29jaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29jaWFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQStCO0FBRS9CLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVaLFFBQUEsZUFBZSxHQUFHLFVBQUMsS0FBSztJQUNuQyxRQUFRO0lBQ0EsSUFBQSxhQUFFLEVBQUUseUJBQVEsQ0FBVztJQUUvQixNQUFNLENBQUMsQ0FDTCw2QkFBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBQyxpQkFBaUIsSUFFcEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQTJCLEVBQUUsS0FBSztZQUFqQyxZQUFHLEVBQUUsZ0NBQWEsRUFBRSxnQkFBSztRQUN0QyxPQUFBLDhCQUFNLEdBQUcsRUFBRSxLQUFHLEtBQU87WUFDbkIsMkJBQUcsSUFBSSxFQUFFLEdBQUc7Z0JBQ1YsMkJBQUcsU0FBUyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFNLENBQzdDLENBQ0M7SUFKUCxDQUlPLENBQ1IsQ0FFQyxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUM7O0FBRUYsa0JBQWUsdUJBQWUsQ0FBQSJ9

/***/ },
/* 47 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	// React
	var React = __webpack_require__(1);
	// React intl
	var react_intl_1 = __webpack_require__(4);
	// Intl Messages
	var messages_1 = __webpack_require__(49);
	// Playsmatch
	exports.pmShowcase = [];
	// Systrix
	exports.sysShowcase = [
	    {
	        type: 'image',
	        url: '/assets/Systrix/sys-1.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-1']))),
	        id: 'sys-showcase-1'
	    },
	    {
	        type: 'image',
	        url: '/assets/Systrix/sys-2.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-1']))),
	        id: 'sys-image-2'
	    },
	    {
	        type: 'image',
	        url: '/assets/Systrix/sys-3.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-3']))),
	        id: 'sys-showcase-3'
	    },
	    {
	        type: 'image',
	        url: '/assets/Systrix/sys-4.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-1']))),
	        id: 'sys-showcase-4'
	    },
	    {
	        type: 'youtube',
	        url: 'Dr732zk-ltw',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-1']))),
	        id: 'sys-showcase-5'
	    },
	    {
	        type: 'youtube',
	        url: 'opDk68CFwLA',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['sysShowcase-6']))),
	        id: 'sys-showcase-6'
	    },
	];
	// GenteExcelente Venezuela
	exports.geShowcase = [
	    {
	        type: 'image',
	        url: '/assets/GE/ge-1-web.jpeg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['geShowcase-1']))),
	        id: 'ge-showcase-1'
	    }
	];
	// ILC Academy
	exports.ILCShowcase = [
	    {
	        type: 'youtube',
	        url: 'igTVc5yygt8',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-1']))),
	        id: 'ilc-showcase-1'
	    },
	    {
	        type: 'youtube',
	        url: 'AU-N8X3j7w8',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-2']))),
	        id: 'ilc-showcase-2'
	    },
	    {
	        type: 'youtube',
	        url: 'qoGVn7bbgFg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-3']))),
	        id: 'ilc-showcase-3'
	    },
	    {
	        type: 'youtube',
	        url: '21_bpODeA8s',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-4']))),
	        id: 'ilc-showcase-4'
	    },
	    {
	        type: 'image',
	        url: '/assets/ilc/subscribe-1.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-5']))),
	        id: 'ilc-showcase-5'
	    },
	    {
	        type: 'image',
	        url: '/assets/ilc/subscribe-2.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-5']))),
	        id: 'ilc-showcase-6'
	    },
	    {
	        type: 'image',
	        url: '/assets/ilc/ilc-certificates-prototype.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-7']))),
	        id: 'ilc-showcase-7'
	    },
	    {
	        type: 'image',
	        url: '/assets/ilc/ilc-welcome.jpg',
	        alt: (React.createElement(react_intl_1.FormattedMessage, __assign({}, messages_1.messages['ilcShowcase-8']))),
	        id: 'ilc-showcase-8'
	    },
	];
	// Others configurations
	exports.networks = [
	    { url: 'https://twitter.com/davidjsmoreno', iconClassName: 'fa fa-twitter', title: 'Twitter' },
	    { url: 'https://github.com/davidjsalazarmoreno', iconClassName: 'fa fa-github', title: 'Github' },
	    { url: 'https://ve.linkedin.com/in/david-salazar-63500724', iconClassName: 'fa fa-linkedin', title: 'Linkedin' },
	    { url: 'http://davidjsmoreno.com.ve/', iconClassName: 'fa fa-wordpress', title: 'Wordpress blog' }
	];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsUUFBUTtBQUNSLDZCQUErQjtBQUUvQixhQUFhO0FBQ2IseUNBQTRDO0FBRTVDLGdCQUFnQjtBQUNoQiwwQ0FBdUM7QUFFdkMsYUFBYTtBQUVBLFFBQUEsVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUc3QixVQUFVO0FBRUcsUUFBQSxXQUFXLEdBQUc7SUFDekI7UUFDRSxJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSwyQkFBMkI7UUFDaEMsR0FBRyxFQUFFLENBQUMsb0JBQUMsNkJBQWdCLGVBQUssbUJBQVEsQ0FBQyxlQUFlLENBQUMsRUFBSSxDQUFDO1FBQzFELEVBQUUsRUFBRSxnQkFBZ0I7S0FDckI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUFFLDJCQUEyQjtRQUNoQyxHQUFHLEVBQUUsQ0FBQyxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFJLENBQUM7UUFDMUQsRUFBRSxFQUFFLGFBQWE7S0FDbEI7SUFDRDtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsR0FBRyxFQUFFLDJCQUEyQjtRQUNoQyxHQUFHLEVBQUUsQ0FBQyxvQkFBQyw2QkFBZ0IsZUFBSyxtQkFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFJLENBQUM7UUFDMUQsRUFBRSxFQUFFLGdCQUFnQjtLQUNyQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixHQUFHLEVBQUUsMkJBQTJCO1FBQ2hDLEdBQUcsRUFBRSxDQUFDLG9CQUFDLDZCQUFnQixlQUFLLG1CQUFRLENBQUMsZUFBZSxDQUFDLEVBQUksQ0FBQztRQUMxRCxFQUFFLEVBQUUsZ0JBQWdCO0tBQ3JCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsU0FBUztRQUNmLEdBQUcsRUFBRSxhQUFhO1FBQ2xCLEdBQUcsRUFBRSxDQUFDLG9CQUFD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

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// React
	var React = __webpack_require__(1);
	// React intl
	var react_intl_1 = __webpack_require__(4);
	exports.messages = react_intl_1.defineMessages({
	    en: {
	        id: 'general.english',
	        defaultMessage: 'English'
	    },
	    es: {
	        id: 'general.spanish',
	        defaultMessage: 'Spanish'
	    },
	    excerptShort: {
	        id: 'excerpt.short',
	        defaultMessage: "Hi, I'm Software Developer, currently at {currently}, you can see the technologies and approaches that \n                I have worked in {attention} or visit {blog} to know some of my thoughts,",
	        values: {
	            currently: React.createElement("a", { href: "https://www.cuadrala.com/es/" }, "Cuadrala"),
	            blog: React.createElement("a", { href: "http://davidjsmoreno.com.ve/" }, "my blog"),
	            attention: React.createElement("b", null, "my projects section right below")
	        }
	    },
	    excerptLong: {
	        id: 'excerpt.long',
	        defaultMessage: "{long},",
	        values: {
	            long: React.createElement("span", null,
	                "Hi, I'm Software Developer, currently at ",
	                React.createElement("a", { href: "https://www.cuadrala.com/es/" }, "Cuadrala"),
	                ", I have experience with several web technologies like  ",
	                React.createElement("code", null, "Javascript"),
	                ", ",
	                React.createElement("code", null, "HTML"),
	                ",",
	                React.createElement("code", null, "CSS"),
	                " and ",
	                React.createElement("code", null, "PHP"),
	                ", I have worked on both backend and frontend but spent more of the time working with the last one." + " " + "Recently I has been immerse in ",
	                React.createElement("code", null, "NodeJS"),
	                ", ",
	                React.createElement("code", null, "React"),
	                " and  ",
	                React.createElement("code", null, "Functional Programming"),
	                "," + " " + "you can see the other technologies and approaches that I have worked in ",
	                React.createElement("b", null, "my projects section right below"),
	                " or" + " " + "visit ",
	                React.createElement("a", { href: "http://davidjsmoreno.com.ve/" }, "my blog"),
	                " to know some of my thoughts")
	        }
	    },
	    client: {
	        id: 'general.client',
	        defaultMessage: 'Client'
	    },
	    period: {
	        id: 'general.period',
	        defaultMessage: 'Period'
	    },
	    workType: {
	        id: 'general.workType',
	        defaultMessage: 'Work Type'
	    },
	    role: {
	        id: 'general.role',
	        defaultMessage: 'Role'
	    },
	    technologies: {
	        id: 'general.technologies',
	        defaultMessage: 'Technologies used'
	    },
	    companyWebsite: {
	        id: 'general.companyWebsite',
	        defaultMessage: 'Company Website'
	    },
	    showcaseTitle: {
	        id: 'general.showcaseTitle',
	        defaultMessage: 'Showcase'
	    },
	    showcaseEmptyText: {
	        id: 'general.showcaseEmptyText',
	        defaultMessage: 'Soon (Work in progress ;-D)'
	    },
	    myWork: {
	        id: 'general.myWorkTitle',
	        defaultMessage: 'My Work'
	    },
	    pmTitle: {
	        id: 'pm.title',
	        defaultMessage: 'Playsmatch'
	    },
	    pmDescription: {
	        id: 'pm.description',
	        defaultMessage: 'Playsmatch is a reservation and payment management system for sports complexes, which seeks to eliminate all the flaws and difficulties that have a moment of renting a court for both users and administrators.'
	    },
	    pmPeriod: {
	        id: 'pm.period',
	        defaultMessage: 'June 2016 - Currently'
	    },
	    sysDescription: {
	        id: 'sys.description',
	        defaultMessage: 'Web development, media agency and call center outsourcing.'
	    },
	    sysPeriod: {
	        id: 'sys.period',
	        defaultMessage: 'January 2016 - May 2016'
	    },
	    'sysShowcase-1': {
	        id: 'sys.sysShowcase-1',
	        defaultMessage: 'Angular Survey Prototype'
	    },
	    'sysShowcase-3': {
	        id: 'sys.sysShowcase-3',
	        defaultMessage: 'Braintree Subscriptions + Elixir/Phoenix'
	    },
	    'sysShowcase-6': {
	        id: 'sys.sysShowcase-6',
	        defaultMessage: 'Working demo of Survey in IE11'
	    },
	    geDescription: {
	        id: 'ge.description',
	        defaultMessage: 'We are Gente Excelente Venezuela. Our mission is the success of People. Our motto Saving in readiness is to invest in ignorance. Life Coaching.'
	    },
	    'geShowcase-1': {
	        id: 'ge.geShowcase-1',
	        defaultMessage: 'Gente Excelente Venezuela Website'
	    },
	    ilcDescription: {
	        id: 'ilc.description',
	        defaultMessage: 'ILC Academy, a platform for expanding awareness, knowledge and skills to enhance your attributes like LifeCoach.'
	    },
	    ilcPeriod: {
	        id: 'ilc.period',
	        defaultMessage: 'January 2013 - January 2015'
	    },
	    'ilcShowcase-1': {
	        id: 'ilc.ilcShowcase-1',
	        defaultMessage: 'Wordpress plugin video inside the web: This Wordpress plugin allows the user to play the links of youtube and vimeo directly inside the web with the help of the fancybox library.'
	    },
	    'ilcShowcase-2': {
	        id: 'ilc.ilcShowcase-2',
	        defaultMessage: 'Application Wheel of Life: It is a tool used in the world of coaching but taken to web application, with it you can create wheel life charts, save wheels, associate a customer with a wheel and generate a report in a PDF document.'
	    },
	    'ilcShowcase-3': {
	        id: 'ilc.ilcShowcase-3',
	        defaultMessage: 'Small design of a contact page, with the button to call via skype.'
	    },
	    'ilcShowcase-4': {
	        id: 'ilc.ilcShowcase-4',
	        defaultMessage: 'Modification to budypress directory (Wordpress plugin): Basically the directory was modified to show specific roles of wordpress, depending on those roles apply CSS styles (the medallion on the right) in addition to adding these new roles to the filters to refine the users search .'
	    },
	    'ilcShowcase-5': {
	        id: 'ilc.ilcShowcase-5',
	        defaultMessage: 'Subscriptions buttons with constant contact integration.'
	    },
	    'ilcShowcase-7': {
	        id: 'ilc.ilcShowcase-7',
	        defaultMessage: '.'
	    },
	    'ilcShowcase-8': {
	        id: 'ilc.ilcShowcase-8',
	        defaultMessage: 'Design of the landing page parallax, in this project I made the design and the layout, as well as applying the parallax effect with the library skroll.js'
	    },
	    contactMe: {
	        id: 'general.contactMe',
	        defaultMessage: 'Contact me'
	    },
	    language: {
	        id: 'general.language',
	        defaultMessage: 'Language'
	    },
	    more: {
	        id: 'general.more',
	        defaultMessage: 'more'
	    },
	    less: {
	        id: 'general.less',
	        defaultMessage: 'less'
	    },
	    made: {
	        id: 'general.made',
	        defaultMessage: 'Made with {love} and React.js',
	        values: {
	            love: React.createElement("i", { className: "fa fa-heart", title: "Love" })
	        }
	    },
	    inspiration: {
	        id: 'general.inspiration',
	        defaultMessage: 'The styles are inspired by {link}',
	        values: {
	            link: React.createElement("a", { href: "http://www.hamvocke.com/" }, "hamvocke")
	        }
	    },
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQVE7QUFDUiw2QkFBK0I7QUFFL0IsYUFBYTtBQUNiLHlDQUEwQztBQUU3QixRQUFBLFFBQVEsR0FBRywyQkFBYyxDQUFDO0lBQ3JDLEVBQUUsRUFBRTtRQUNGLEVBQUUsRUFBRSxpQkFBaUI7UUFDckIsY0FBYyxFQUFFLFNBQVM7S0FDMUI7SUFDRCxFQUFFLEVBQUU7UUFDRixFQUFFLEVBQUUsaUJBQWlCO1FBQ3JCLGNBQWMsRUFBRSxTQUFTO0tBQzFCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osRUFBRSxFQUFFLGVBQWU7UUFDbkIsY0FBYyxFQUFFLG9NQUNzRTtRQUN0RixNQUFNLEVBQUU7WUFDTixTQUFTLEVBQUUsMkJBQUcsSUFBSSxFQUFDLDhCQUE4QixlQUFhO1lBQzlELElBQUksRUFBRSwyQkFBRyxJQUFJLEVBQUMsOEJBQThCLGNBQVk7WUFDeEQsU0FBUyxFQUFFLGlFQUFzQztTQUNsRDtLQUNGO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsRUFBRSxFQUFFLGNBQWM7UUFDbEIsY0FBYyxFQUFFLFNBQVM7UUFDekIsTUFBTSxFQUFFO1lBQ04sSUFBSSxFQUFFOztnQkFDMkMsMkJBQUcsSUFBSSxFQUFDLDhCQUE4QixlQUFhOztnQkFBd0QsK0NBQXVCOztnQkFBRSx5Q0FBaUI7O2dCQUM5TCx3Q0FBZ0I7O2dCQUFLLHdDQUFnQjs7Z0JBRU4sMkNBQW1COztnQkFBRSwwQ0FBa0I7O2dCQUFNLDJEQUFtQzs7Z0JBQ3ZDLGlFQUFzQzs7Z0JBQ3hHLDJCQUFHLElBQUksRUFBQyw4QkFBOEIsY0FBWTsrQ0FDbkQ7U0FDZDtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixjQUFjLEVBQUUsUUFBUTtLQUN6QjtJQUNELE1BQU0sRUFBRTtRQUNOLEVBQUUsRUFBRSxnQkFBZ0I7UUFDcEIs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

/***/ },
/* 50 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __assign = (this && this.__assign) || Object.assign || function(t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	            t[p] = s[p];
	    }
	    return t;
	};
	var React = __webpack_require__(1);
	__webpack_require__(52);
	;
	var ExcerptComponent = (function (_super) {
	    __extends(ExcerptComponent, _super);
	    function ExcerptComponent() {
	        var _this = _super !== null && _super.apply(this, arguments) || this;
	        _this.state = {
	            showMore: false
	        };
	        return _this;
	    }
	    ExcerptComponent.prototype.render = function () {
	        var _this = this;
	        var _a = this.props, short = _a.short, long = _a.long, moreLabel = _a.moreLabel, lessLabel = _a.lessLabel;
	        var showMore = this.state.showMore;
	        return (React.createElement("div", { className: "ExcerptComponent" },
	            React.createElement("article", null,
	                React.createElement("p", { className: "description" },
	                    showMore ? long : short,
	                    "\u00A0",
	                    React.createElement("a", { href: "#", onClick: function (event) {
	                            event.preventDefault();
	                            _this.setState(__assign({}, _this.state, { showMore: !showMore }));
	                        } }, !showMore ? moreLabel : lessLabel),
	                    "."))));
	    };
	    return ExcerptComponent;
	}(React.Component));
	exports.ExcerptComponent = ExcerptComponent;
	;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ExcerptComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXJwdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4Y2VycHQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkJBQStCO0FBRS9CLDBCQUF3QjtBQVF2QixDQUFDO0FBRUY7SUFBc0Msb0NBQTRDO0lBQWxGO1FBQUEscUVBaUNDO1FBaENDLFdBQUssR0FBRztZQUNOLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUM7O0lBOEJKLENBQUM7SUE1QkMsaUNBQU0sR0FBTjtRQUFBLGlCQTJCQztRQTFCTyxJQUFBLGVBQWtELEVBQWhELGdCQUFLLEVBQUUsY0FBSSxFQUFFLHdCQUFTLEVBQUUsd0JBQVMsQ0FBZ0I7UUFFakQsSUFBQSw4QkFBUSxDQUFnQjtRQUVoQyxNQUFNLENBQUMsQ0FDTCw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCO1lBQy9CO2dCQUNFLDJCQUFHLFNBQVMsRUFBQyxhQUFhO29CQUN2QixRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUs7O29CQUV4QiwyQkFBRyxJQUFJLEVBQUMsR0FBRyxFQUNULE9BQU8sRUFBRSxVQUFDLEtBQUs7NEJBQ2IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDOzRCQUN2QixLQUFJLENBQUMsUUFBUSxjQUNSLEtBQUksQ0FBQyxLQUFLLElBQ2IsUUFBUSxFQUFFLENBQUMsUUFBUSxJQUNyQixDQUFDO3dCQUNMLENBQUMsSUFDRSxDQUFDLFFBQVEsR0FBSSxTQUFTLEdBQUcsU0FBUyxDQUNqQzt3QkFFRixDQUNJLENBQ04sQ0FDUCxDQUFBO0lBRUgsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUFzQyxLQUFLLENBQUMsU0FBUyxHQWlDcEQ7QUFqQ1ksNENBQWdCO0FBaUM1QixDQUFDOztBQUVGLGtCQUFlLGdCQUFnQixDQUFDIn0=

/***/ },
/* 52 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var flat_separator_1 = __webpack_require__(33);
	__webpack_require__(54);
	;
	exports.SectionHeaderComponent = function (props) {
	    return (React.createElement("div", { className: "SectionHeaderComponent" },
	        React.createElement("h1", null, props.title),
	        React.createElement(flat_separator_1.FlatSeparatorComponent, { margin: "0 0", width: "20%" })));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.SectionHeaderComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1oZWFkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWN0aW9uLWhlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDZCQUErQjtBQUUvQixxRUFBMEU7QUFFMUUsaUNBQStCO0FBSTlCLENBQUM7QUFFVyxRQUFBLHNCQUFzQixHQUFHLFVBQUMsS0FBSztJQUMxQyxNQUFNLENBQUEsQ0FDSiw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCO1FBQ3JDLGdDQUFLLEtBQUssQ0FBQyxLQUFLLENBQU07UUFDdEIsb0JBQUMsdUNBQXNCLElBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxHQUFHLENBQy9DLENBQ1AsQ0FBQztBQUNKLENBQUMsQ0FBQTs7QUFFRCxrQkFBZSw4QkFBc0IsQ0FBQyJ9

/***/ },
/* 54 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	__webpack_require__(56);
	var lightbox_1 = __webpack_require__(36);
	;
	exports.ProjectComponent = function (props) {
	    var id = props.id, image = props.image, name = props.name, excerpt = props.excerpt, information = props.information;
	    return (React.createElement("div", null,
	        React.createElement("div", { id: id, className: "ProjectsComponent" },
	            React.createElement("div", { className: "main-project-image" },
	                React.createElement(lightbox_1.LightboxComponent, { id: image, type: "image", url: image, alt: excerpt })),
	            React.createElement("div", { className: "ProjectExcerpt" },
	                React.createElement("h2", { className: "ProjectName" }, name),
	                React.createElement("p", { className: "ProjectExcerpt" }, excerpt),
	                React.createElement("ul", { className: "ProjectInformation" }, information.map(function (_a, index) {
	                    var key = _a.key, value = _a.value;
	                    return (React.createElement("li", { key: key + "-" + index },
	                        React.createElement("b", null,
	                            key,
	                            ":"),
	                        " ",
	                        value));
	                }))))));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.ProjectComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2plY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBK0I7QUFFL0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFMUIsaURBQXVEO0FBVXRELENBQUM7QUFFVyxRQUFBLGdCQUFnQixHQUFHLFVBQUUsS0FBNkI7SUFDckQsSUFBQSxhQUFFLEVBQUUsbUJBQUssRUFBRSxpQkFBSSxFQUFFLHVCQUFPLEVBQUUsK0JBQVcsQ0FBVztJQUV4RCxNQUFNLENBQUEsQ0FDSjtRQUNFLDZCQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFDLG1CQUFtQjtZQUN0Qyw2QkFBSyxTQUFTLEVBQUMsb0JBQW9CO2dCQUNqQyxvQkFBQyw0QkFBaUIsSUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFHLElBQUksRUFBQyxPQUFPLEVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxHQUFJLENBQ3BFO1lBRU4sNkJBQUssU0FBUyxFQUFDLGdCQUFnQjtnQkFDN0IsNEJBQUksU0FBUyxFQUFDLGFBQWEsSUFDeEIsSUFBSSxDQUNGO2dCQUNMLDJCQUFHLFNBQVMsRUFBQyxnQkFBZ0IsSUFDMUIsT0FBTyxDQUNOO2dCQUNKLDRCQUFJLFNBQVMsRUFBQyxvQkFBb0IsSUFFOUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQVksRUFBRSxLQUFLO3dCQUFsQixZQUFHLEVBQUUsZ0JBQUs7b0JBQzFCLE1BQU0sQ0FBQyxDQUNMLDRCQUFJLEdBQUcsRUFBSyxHQUFHLFNBQUksS0FBTzt3QkFDeEI7NEJBQUksR0FBRztnQ0FBTTs7d0JBQUUsS0FBSyxDQUNqQixDQUNOLENBQUE7Z0JBQ0gsQ0FBQyxDQUFDLENBRUQsQ0FDRCxDQUNGLENBQ0osQ0FDUCxDQUFBO0FBQ0gsQ0FBQyxDQUFBOztBQUVELGtCQUFlLHdCQUFnQixDQUFBIn0=

/***/ },
/* 56 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var social_1 = __webpack_require__(46);
	var flat_separator_1 = __webpack_require__(33);
	__webpack_require__(58);
	;
	/**
	 * Portfolio Header
	 */
	exports.FooterComponent = function (props) {
	    return (React.createElement("footer", { className: "FooterComponent" },
	        React.createElement("p", null,
	            React.createElement("a", { href: "mailto:davidjsalazarmoreno@gmail.com?subject=Awesome%20Project" },
	                React.createElement("i", { className: "fa fa-envelope-o" }),
	                React.createElement("br", null),
	                props.contactMe)),
	        React.createElement(flat_separator_1.FlatSeparatorComponent, { margin: "8px auto", width: "13%" }),
	        React.createElement(social_1.SocialComponent, { id: "SocialsOnFooter", networks: props.networks }),
	        React.createElement("small", { className: "footnote" },
	            React.createElement("hr", null),
	            React.createElement("a", { href: "https://github.com/davidjsalazarmoreno/portfolio" }, props.made),
	            "|",
	            props.inspiration)));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = exports.FooterComponent;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkJBQStCO0FBRS9CLDZDQUFtRDtBQUNuRCxxRUFBMEU7QUFFMUUseUJBQXVCO0FBT3RCLENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsZUFBZSxHQUFHLFVBQUMsS0FBdUI7SUFDckQsTUFBTSxDQUFDLENBQ0wsZ0NBQVEsU0FBUyxFQUFDLGlCQUFpQjtRQUNqQztZQUNFLDJCQUFHLElBQUksRUFBQyxnRUFBZ0U7Z0JBQ3RFLDJCQUFHLFNBQVMsRUFBQyxrQkFBa0IsR0FBSztnQkFDcEMsK0JBQUs7Z0JBQ0osS0FBSyxDQUFDLFNBQVMsQ0FDZCxDQUNGO1FBRUosb0JBQUMsdUNBQXNCLElBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUMsS0FBSyxHQUFHO1FBRXhELG9CQUFDLHdCQUFlLElBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFJO1FBRWxFLCtCQUFPLFNBQVMsRUFBQyxVQUFVO1lBQ3pCLCtCQUFNO1lBQ04sMkJBQUcsSUFBSSxFQUFDLGtEQUFrRCxJQUN2RCxLQUFLLENBQUMsSUFBSSxDQUNUOztZQUVILEtBQUssQ0FBQyxXQUFXLENBQ1osQ0FDRCxDQUNWLENBQUM7QUFDSixDQUFDLENBQUE7O0FBRUQsa0JBQWUsdUJBQWUsQ0FBQyJ9

/***/ },
/* 58 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 59 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map