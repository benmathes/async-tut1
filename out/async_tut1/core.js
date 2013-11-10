// Compiled by ClojureScript 0.0-2030
goog.provide('async_tut1.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('goog.net.Jsonp');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
async_tut1.core.angellist_search_url = "https://api.angel.co/1/search?query=";
async_tut1.core.query_url = (function query_url(q){return [cljs.core.str(async_tut1.core.angellist_search_url),cljs.core.str(q)].join('');
});
async_tut1.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (event){return cljs.core.async.put_BANG_.call(null,out,event);
}));
return out;
});
async_tut1.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.call(null,out,res);
}));
return out;
});
var clicks_21274 = async_tut1.core.listen.call(null,goog.dom.getElement("search"),"click");var c__5494__auto___21275 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_21258){var state_val_21259 = (state_21258[1]);if((state_val_21259 === 7))
{var inst_21249 = (state_21258[2]);var inst_21250 = console.log(inst_21249);var state_21258__$1 = (function (){var statearr_21260 = state_21258;(statearr_21260[7] = inst_21250);
return statearr_21260;
})();var statearr_21261_21276 = state_21258__$1;(statearr_21261_21276[2] = null);
(statearr_21261_21276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21259 === 6))
{var inst_21254 = (state_21258[2]);var state_21258__$1 = state_21258;var statearr_21262_21277 = state_21258__$1;(statearr_21262_21277[2] = inst_21254);
(statearr_21262_21277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21259 === 5))
{var state_21258__$1 = state_21258;var statearr_21263_21278 = state_21258__$1;(statearr_21263_21278[2] = null);
(statearr_21263_21278[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21259 === 4))
{var state_21258__$1 = state_21258;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21258__$1,7,clicks_21274);
} else
{if((state_val_21259 === 3))
{var inst_21256 = (state_21258[2]);var state_21258__$1 = state_21258;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21258__$1,inst_21256);
} else
{if((state_val_21259 === 2))
{var state_21258__$1 = state_21258;if(true)
{var statearr_21264_21279 = state_21258__$1;(statearr_21264_21279[1] = 4);
} else
{var statearr_21265_21280 = state_21258__$1;(statearr_21265_21280[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21259 === 1))
{var state_21258__$1 = state_21258;var statearr_21266_21281 = state_21258__$1;(statearr_21266_21281[2] = null);
(statearr_21266_21281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_21270 = (new Array(8));(statearr_21270[0] = state_machine__5425__auto__);
(statearr_21270[1] = 1);
return statearr_21270;
});
var state_machine__5425__auto____1 = (function (state_21258){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_21258);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e21271){if((e21271 instanceof Object))
{var ex__5428__auto__ = e21271;var statearr_21272_21282 = state_21258;(statearr_21272_21282[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21258);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21283 = state_21258;
state_21258 = G__21283;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_21258){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_21258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_21273 = f__5495__auto__.call(null);(statearr_21273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___21275);
return statearr_21273;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
async_tut1.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
async_tut1.core.render_query = (function render_query(results){return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__3819__auto__ = (function iter__21288(s__21289){return (new cljs.core.LazySeq(null,(function (){var s__21289__$1 = s__21289;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__21289__$1);if(temp__4092__auto__)
{var s__21289__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21289__$2))
{var c__3817__auto__ = cljs.core.chunk_first.call(null,s__21289__$2);var size__3818__auto__ = cljs.core.count.call(null,c__3817__auto__);var b__21291 = cljs.core.chunk_buffer.call(null,size__3818__auto__);if((function (){var i__21290 = 0;while(true){
if((i__21290 < size__3818__auto__))
{var result = cljs.core._nth.call(null,c__3817__auto__,i__21290);cljs.core.chunk_append.call(null,b__21291,[cljs.core.str("<li> <a href='"),cljs.core.str((result["url"])),cljs.core.str("'> <img src='"),cljs.core.str((result["pic"])),cljs.core.str("' title='"),cljs.core.str((result["name"])),cljs.core.str("'></a></li>")].join(''));
{
var G__21292 = (i__21290 + 1);
i__21290 = G__21292;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21291),iter__21288.call(null,cljs.core.chunk_rest.call(null,s__21289__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21291),null);
}
} else
{var result = cljs.core.first.call(null,s__21289__$2);return cljs.core.cons.call(null,[cljs.core.str("<li> <a href='"),cljs.core.str((result["url"])),cljs.core.str("'> <img src='"),cljs.core.str((result["pic"])),cljs.core.str("' title='"),cljs.core.str((result["name"])),cljs.core.str("'></a></li>")].join(''),iter__21288.call(null,cljs.core.rest.call(null,s__21289__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3819__auto__.call(null,results);
})())),cljs.core.str("</ul>")].join('');
});
async_tut1.core.init = (function init(){var clicks = async_tut1.core.listen.call(null,goog.dom.getElement("search"),"click");var results_view = goog.dom.getElement("results");var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_21346){var state_val_21347 = (state_21346[1]);if((state_val_21347 === 8))
{var inst_21336 = (state_21346[2]);var inst_21337 = async_tut1.core.render_query.call(null,inst_21336);var inst_21338 = results_view.innerHTML = inst_21337;var state_21346__$1 = (function (){var statearr_21348 = state_21346;(statearr_21348[7] = inst_21338);
return statearr_21348;
})();var statearr_21349_21363 = state_21346__$1;(statearr_21349_21363[2] = null);
(statearr_21349_21363[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21347 === 7))
{var inst_21331 = (state_21346[2]);var inst_21332 = async_tut1.core.user_query.call(null);var inst_21333 = async_tut1.core.query_url.call(null,inst_21332);var inst_21334 = async_tut1.core.jsonp.call(null,inst_21333);var state_21346__$1 = (function (){var statearr_21350 = state_21346;(statearr_21350[8] = inst_21331);
return statearr_21350;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21346__$1,8,inst_21334);
} else
{if((state_val_21347 === 6))
{var inst_21342 = (state_21346[2]);var state_21346__$1 = state_21346;var statearr_21351_21364 = state_21346__$1;(statearr_21351_21364[2] = inst_21342);
(statearr_21351_21364[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21347 === 5))
{var state_21346__$1 = state_21346;var statearr_21352_21365 = state_21346__$1;(statearr_21352_21365[2] = null);
(statearr_21352_21365[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21347 === 4))
{var state_21346__$1 = state_21346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21346__$1,7,clicks);
} else
{if((state_val_21347 === 3))
{var inst_21344 = (state_21346[2]);var state_21346__$1 = state_21346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21346__$1,inst_21344);
} else
{if((state_val_21347 === 2))
{var state_21346__$1 = state_21346;if(true)
{var statearr_21353_21366 = state_21346__$1;(statearr_21353_21366[1] = 4);
} else
{var statearr_21354_21367 = state_21346__$1;(statearr_21354_21367[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21347 === 1))
{var state_21346__$1 = state_21346;var statearr_21355_21368 = state_21346__$1;(statearr_21355_21368[2] = null);
(statearr_21355_21368[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_21359 = (new Array(9));(statearr_21359[0] = state_machine__5425__auto__);
(statearr_21359[1] = 1);
return statearr_21359;
});
var state_machine__5425__auto____1 = (function (state_21346){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_21346);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object))
{var ex__5428__auto__ = e21360;var statearr_21361_21369 = state_21346;(statearr_21361_21369[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21346);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21360;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21370 = state_21346;
state_21346 = G__21370;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_21346){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_21346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_21362 = f__5495__auto__.call(null);(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_21362;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
async_tut1.core.init.call(null);

//# sourceMappingURL=core.js.map