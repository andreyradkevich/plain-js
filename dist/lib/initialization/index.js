!function(t){var n=t.pushState;t.pushState=function(a,e,o){return"function"==typeof t.onpushstate&&t.onpushstate({state:a,pathname:o}),n.apply(t,arguments)}}(window.history);