(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{482:function(n,o,t){"use strict";t.r(o);var a=t(22),r=Object(a.a)({},(function(){var n=this.$createElement,o=this._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[o("h1",{attrs:{id:"api"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[this._v("#")]),this._v(" API")]),this._v(" "),o("chart-editor",{attrs:{code:"// <block:data:1>\nconst NUMBER_CFG = {count: 20, min: -100, max: 100};\nconst data = {\n  datasets: [{\n    label: 'My First dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }, {\n    label: 'My Second dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.points(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scaleOpts = {\n  reverse: true,\n  ticks: {\n    callback: (val, index, ticks) => index === 0 || index === ticks.length - 1 ? null : val,\n  },\n  grid: {\n    borderColor: Utils.randomColor(1),\n    color: 'rgba( 0, 0, 0, 0.1)',\n  },\n  title: {\n    display: true,\n    text: (ctx) => ctx.scale.axis + ' axis',\n  }\n};\nconst scales = {\n  x: {\n    position: 'top',\n  },\n  y: {\n    position: 'right',\n  },\n};\nObject.keys(scales).forEach(scale => Object.assign(scales[scale], scaleOpts));\n// </block:scales>\n\n// <block:config:1>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    scales: scales,\n  }\n};\n// </block:config>\n\n// <block:actions:0>\n// Note: changes to these actions are not applied to the buttons.\nconst actions = [\n  {\n    name: 'Zoom +10%',\n    handler(chart) {\n      chart.zoom(1.1);\n    }\n  }, {\n    name: 'Zoom -10%',\n    handler(chart) {\n      chart.zoom(0.9);\n    },\n  }, {\n    name: 'Zoom x +10%',\n    handler(chart) {\n      chart.zoom({x: 1.1});\n    }\n  }, {\n    name: 'Zoom x -10%',\n    handler(chart) {\n      chart.zoom({x: 0.9});\n    },\n  }, {\n    name: 'Pan x 100px (anim)',\n    handler(chart) {\n      chart.pan({x: 100}, undefined, 'default');\n    }\n  }, {\n    name: 'Pan x -100px (anim)',\n    handler(chart) {\n      chart.pan({x: -100}, undefined, 'default');\n    },\n  }, {\n    name: 'Zoom x: 0..-100, y: 0..100',\n    handler(chart) {\n      chart.zoomScale('x', {min: -100, max: 0}, 'default');\n      chart.zoomScale('y', {min: 0, max: 100}, 'default');\n    }\n  }, {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n];\n// </block:actions>\n\nmodule.exports = {\n  actions,\n  config\n};\n"}})],1)}),[],!1,null,null,null);o.default=r.exports}}]);