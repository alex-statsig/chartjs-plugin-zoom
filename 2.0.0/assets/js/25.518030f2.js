(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{491:function(n,t,o){"use strict";o.r(t);var a=o(22),s=Object(a.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"category-scale"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#category-scale"}},[this._v("#")]),this._v(" Category Scale")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:data:1>\nconst DATA_COUNT = 20;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\nconst data = {\n  labels: Utils.months({count: DATA_COUNT}),\n  datasets: [{\n    label: 'Dataset 1',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'Dataset 2',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }, {\n    label: 'Dataset 3',\n    borderColor: Utils.randomColor(0.7),\n    backgroundColor: Utils.randomColor(0.5),\n    data: Utils.numbers(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scaleOpts = {\n  grid: {\n    borderColor: Utils.randomColor(1),\n    color: 'rgba( 0, 0, 0, 0.1)',\n  },\n  title: {\n    display: true,\n    text: (ctx) => ctx.scale.axis + ' axis',\n  }\n};\nconst scales = {\n  x: {\n    type: 'category',\n    min: 5,\n    max: 11,\n  },\n  y: {\n    type: 'linear'\n  },\n};\nObject.keys(scales).forEach(scale => Object.assign(scales[scale], scaleOpts));\n// </block:scales>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    scales: scales,\n    plugins: {\n      zoom: {\n        pan: {\n          enabled: true,\n          mode: 'xy',\n          threshold: 5,\n        },\n        zoom: {\n          wheel: {\n            enabled: true\n          },\n          pinch: {\n            enabled: true\n          },\n          mode: 'xy',\n        },\n      }\n    },\n  }\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);