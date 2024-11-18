(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{401:function(n,o,t){"use strict";t.r(o);var e=t(7),a=Object(e.a)({},(function(){var n=this._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"timeseries-scale"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#timeseries-scale"}},[this._v("#")]),this._v(" Timeseries Scale")]),this._v(" "),n("p",[this._v("Zooming is performed by clicking and selecting an area over the chart with the mouse. Pan is activated by keeping "),n("code",[this._v("ctrl")]),this._v(" pressed.")]),this._v(" "),n("chart-editor",{attrs:{code:"// <block:data:1>\nconst NUMBER_CFG = {count: 200, min: 0, max: 100};\nconst data = {\n  datasets: [{\n    label: 'My First dataset',\n    borderColor: Utils.randomColor(0.4),\n    backgroundColor: Utils.randomColor(0.1),\n    pointBorderColor: Utils.randomColor(0.7),\n    pointBackgroundColor: Utils.randomColor(0.5),\n    pointBorderWidth: 1,\n    data: Utils.officeHourPoints(NUMBER_CFG),\n  }]\n};\n// </block:data>\n\n// <block:scales:2>\nconst scales = {\n  x: {\n    position: 'bottom',\n    type: 'timeseries',\n    ticks: {\n      autoSkip: true,\n      autoSkipPadding: 50,\n      maxRotation: 0,\n      major: {\n        enabled: true\n      }\n    },\n    time: {\n      displayFormats: {\n        hour: 'HH:mm',\n        minute: 'HH:mm',\n        second: 'HH:mm:ss'\n      }\n    }\n  },\n  y: {\n    position: 'right',\n    ticks: {\n      callback: (val, index, ticks) => index === 0 || index === ticks.length - 1 ? null : val,\n    },\n    grid: {\n      borderColor: Utils.randomColor(1),\n      color: 'rgba( 0, 0, 0, 0.1)',\n    },\n    title: {\n      display: true,\n      text: (ctx) => ctx.scale.axis + ' axis',\n    }\n  },\n};\n// </block:scales>\n\n// <block:zoom:0>\nconst zoomOptions = {\n  pan: {\n    enabled: true,\n    modifierKey: 'ctrl',\n  },\n  zoom: {\n    drag: {\n      enabled: true,\n    },\n    mode: 'xy',\n  },\n};\n// </block>\n\nconst panStatus = () => zoomOptions.pan.enabled ? 'enabled' : 'disabled';\nconst zoomStatus = () => zoomOptions.zoom.drag.enabled ? 'enabled' : 'disabled';\n\n// <block:config:1>\nconst config = {\n  type: 'scatter',\n  data: data,\n  options: {\n    scales: scales,\n    plugins: {\n      zoom: zoomOptions,\n      title: {\n        display: true,\n        position: 'bottom',\n        text: (ctx) => 'Zoom: ' + zoomStatus() + ', Pan: ' + panStatus()\n      }\n    },\n  }\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Toggle zoom',\n    handler(chart) {\n      zoomOptions.zoom.drag.enabled = !zoomOptions.zoom.drag.enabled;\n      chart.update();\n    }\n  }, {\n    name: 'Toggle pan',\n    handler(chart) {\n      zoomOptions.pan.enabled = !zoomOptions.pan.enabled;\n      chart.update();\n    },\n  }, {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}})],1)}),[],!1,null,null,null);o.default=a.exports}}]);