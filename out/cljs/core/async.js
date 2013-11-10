// Compiled by ClojureScript 0.0-2030
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12381 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12381 = (function (f,fn_handler,meta12382){
this.f = f;
this.fn_handler = fn_handler;
this.meta12382 = meta12382;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12381.cljs$lang$type = true;
cljs.core.async.t12381.cljs$lang$ctorStr = "cljs.core.async/t12381";
cljs.core.async.t12381.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12381");
});
cljs.core.async.t12381.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12383){var self__ = this;
var _12383__$1 = this;return self__.meta12382;
});
cljs.core.async.t12381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12383,meta12382__$1){var self__ = this;
var _12383__$1 = this;return (new cljs.core.async.t12381(self__.f,self__.fn_handler,meta12382__$1));
});
cljs.core.async.__GT_t12381 = (function __GT_t12381(f__$1,fn_handler__$1,meta12382){return (new cljs.core.async.t12381(f__$1,fn_handler__$1,meta12382));
});
}
return (new cljs.core.async.t12381(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12385 = buff;if(G__12385)
{var bit__3752__auto__ = null;if(cljs.core.truth_((function (){var or__3133__auto__ = bit__3752__auto__;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return G__12385.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12385.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12385);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12385);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12386 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12386);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12386);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3124__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__3922__auto___12387 = n;var x_12388 = 0;while(true){
if((x_12388 < n__3922__auto___12387))
{(a[x_12388] = 0);
{
var G__12389 = (x_12388 + 1);
x_12388 = G__12389;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12390 = (i + 1);
i = G__12390;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12394 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12394 = (function (flag,alt_flag,meta12395){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12395 = meta12395;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12394.cljs$lang$type = true;
cljs.core.async.t12394.cljs$lang$ctorStr = "cljs.core.async/t12394";
cljs.core.async.t12394.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12394");
});
cljs.core.async.t12394.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12394.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12394.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12396){var self__ = this;
var _12396__$1 = this;return self__.meta12395;
});
cljs.core.async.t12394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12396,meta12395__$1){var self__ = this;
var _12396__$1 = this;return (new cljs.core.async.t12394(self__.flag,self__.alt_flag,meta12395__$1));
});
cljs.core.async.__GT_t12394 = (function __GT_t12394(flag__$1,alt_flag__$1,meta12395){return (new cljs.core.async.t12394(flag__$1,alt_flag__$1,meta12395));
});
}
return (new cljs.core.async.t12394(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12400 = (function (cb,flag,alt_handler,meta12401){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12401 = meta12401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12400.cljs$lang$type = true;
cljs.core.async.t12400.cljs$lang$ctorStr = "cljs.core.async/t12400";
cljs.core.async.t12400.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12400");
});
cljs.core.async.t12400.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12402){var self__ = this;
var _12402__$1 = this;return self__.meta12401;
});
cljs.core.async.t12400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12402,meta12401__$1){var self__ = this;
var _12402__$1 = this;return (new cljs.core.async.t12400(self__.cb,self__.flag,self__.alt_handler,meta12401__$1));
});
cljs.core.async.__GT_t12400 = (function __GT_t12400(cb__$1,flag__$1,alt_handler__$1,meta12401){return (new cljs.core.async.t12400(cb__$1,flag__$1,alt_handler__$1,meta12401));
});
}
return (new cljs.core.async.t12400(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,cljs.core.PersistentVector.fromArray([null,wport], true));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12403_SHARP_){return fret.call(null,cljs.core.PersistentVector.fromArray([p1__12403_SHARP_,port], true));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([cljs.core.deref.call(null,vbox),(function (){var or__3133__auto__ = wport;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return port;
}
})()], true));
} else
{{
var G__12404 = (i + 1);
i = G__12404;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3133__auto__ = ret;if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3124__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3124__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3124__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], true));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12405){var map__12407 = p__12405;var map__12407__$1 = ((cljs.core.seq_QMARK_.call(null,map__12407))?cljs.core.apply.call(null,cljs.core.hash_map,map__12407):map__12407);var opts = map__12407__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12405 = null;if (arguments.length > 1) {
  p__12405 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12405);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12408){
var ports = cljs.core.first(arglist__12408);
var p__12405 = cljs.core.rest(arglist__12408);
return alts_BANG___delegate(ports,p__12405);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12416 = (function (ch,f,map_LT_,meta12417){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12417 = meta12417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12416.cljs$lang$type = true;
cljs.core.async.t12416.cljs$lang$ctorStr = "cljs.core.async/t12416";
cljs.core.async.t12416.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12416");
});
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12419 = (function (fn1,_,meta12417,ch,f,map_LT_,meta12420){
this.fn1 = fn1;
this._ = _;
this.meta12417 = meta12417;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12420 = meta12420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12419.cljs$lang$type = true;
cljs.core.async.t12419.cljs$lang$ctorStr = "cljs.core.async/t12419";
cljs.core.async.t12419.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12419");
});
cljs.core.async.t12419.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12419.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12419.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12419.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12409_SHARP_){return f1.call(null,(((p1__12409_SHARP_ == null))?null:self__.f.call(null,p1__12409_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12421){var self__ = this;
var _12421__$1 = this;return self__.meta12420;
});
cljs.core.async.t12419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12421,meta12420__$1){var self__ = this;
var _12421__$1 = this;return (new cljs.core.async.t12419(self__.fn1,self__._,self__.meta12417,self__.ch,self__.f,self__.map_LT_,meta12420__$1));
});
cljs.core.async.__GT_t12419 = (function __GT_t12419(fn1__$1,___$2,meta12417__$1,ch__$2,f__$2,map_LT___$2,meta12420){return (new cljs.core.async.t12419(fn1__$1,___$2,meta12417__$1,ch__$2,f__$2,map_LT___$2,meta12420));
});
}
return (new cljs.core.async.t12419(fn1,___$1,self__.meta12417,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3124__auto__ = ret;if(cljs.core.truth_(and__3124__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3124__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12416.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12418){var self__ = this;
var _12418__$1 = this;return self__.meta12417;
});
cljs.core.async.t12416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12418,meta12417__$1){var self__ = this;
var _12418__$1 = this;return (new cljs.core.async.t12416(self__.ch,self__.f,self__.map_LT_,meta12417__$1));
});
cljs.core.async.__GT_t12416 = (function __GT_t12416(ch__$1,f__$1,map_LT___$1,meta12417){return (new cljs.core.async.t12416(ch__$1,f__$1,map_LT___$1,meta12417));
});
}
return (new cljs.core.async.t12416(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12425 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12425 = (function (ch,f,map_GT_,meta12426){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12426 = meta12426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12425.cljs$lang$type = true;
cljs.core.async.t12425.cljs$lang$ctorStr = "cljs.core.async/t12425";
cljs.core.async.t12425.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12425");
});
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12427){var self__ = this;
var _12427__$1 = this;return self__.meta12426;
});
cljs.core.async.t12425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12427,meta12426__$1){var self__ = this;
var _12427__$1 = this;return (new cljs.core.async.t12425(self__.ch,self__.f,self__.map_GT_,meta12426__$1));
});
cljs.core.async.__GT_t12425 = (function __GT_t12425(ch__$1,f__$1,map_GT___$1,meta12426){return (new cljs.core.async.t12425(ch__$1,f__$1,map_GT___$1,meta12426));
});
}
return (new cljs.core.async.t12425(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12431 = (function (ch,p,filter_GT_,meta12432){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12432 = meta12432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12431.cljs$lang$type = true;
cljs.core.async.t12431.cljs$lang$ctorStr = "cljs.core.async/t12431";
cljs.core.async.t12431.cljs$lang$ctorPrWriter = (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t12431");
});
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12431.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12433){var self__ = this;
var _12433__$1 = this;return self__.meta12432;
});
cljs.core.async.t12431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12433,meta12432__$1){var self__ = this;
var _12433__$1 = this;return (new cljs.core.async.t12431(self__.ch,self__.p,self__.filter_GT_,meta12432__$1));
});
cljs.core.async.__GT_t12431 = (function __GT_t12431(ch__$1,p__$1,filter_GT___$1,meta12432){return (new cljs.core.async.t12431(ch__$1,p__$1,filter_GT___$1,meta12432));
});
}
return (new cljs.core.async.t12431(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___12516 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_12495){var state_val_12496 = (state_12495[1]);if((state_val_12496 === 1))
{var state_12495__$1 = state_12495;var statearr_12497_12517 = state_12495__$1;(statearr_12497_12517[2] = null);
(statearr_12497_12517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 2))
{var state_12495__$1 = state_12495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12495__$1,4,ch);
} else
{if((state_val_12496 === 3))
{var inst_12493 = (state_12495[2]);var state_12495__$1 = state_12495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12495__$1,inst_12493);
} else
{if((state_val_12496 === 4))
{var inst_12477 = (state_12495[7]);var inst_12477__$1 = (state_12495[2]);var inst_12478 = (inst_12477__$1 == null);var state_12495__$1 = (function (){var statearr_12498 = state_12495;(statearr_12498[7] = inst_12477__$1);
return statearr_12498;
})();if(cljs.core.truth_(inst_12478))
{var statearr_12499_12518 = state_12495__$1;(statearr_12499_12518[1] = 5);
} else
{var statearr_12500_12519 = state_12495__$1;(statearr_12500_12519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 5))
{var inst_12480 = cljs.core.async.close_BANG_.call(null,out);var state_12495__$1 = state_12495;var statearr_12501_12520 = state_12495__$1;(statearr_12501_12520[2] = inst_12480);
(statearr_12501_12520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 6))
{var inst_12477 = (state_12495[7]);var inst_12482 = p.call(null,inst_12477);var state_12495__$1 = state_12495;if(cljs.core.truth_(inst_12482))
{var statearr_12502_12521 = state_12495__$1;(statearr_12502_12521[1] = 8);
} else
{var statearr_12503_12522 = state_12495__$1;(statearr_12503_12522[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 7))
{var inst_12491 = (state_12495[2]);var state_12495__$1 = state_12495;var statearr_12504_12523 = state_12495__$1;(statearr_12504_12523[2] = inst_12491);
(statearr_12504_12523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 8))
{var inst_12477 = (state_12495[7]);var state_12495__$1 = state_12495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12495__$1,11,out,inst_12477);
} else
{if((state_val_12496 === 9))
{var state_12495__$1 = state_12495;var statearr_12505_12524 = state_12495__$1;(statearr_12505_12524[2] = null);
(statearr_12505_12524[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 10))
{var inst_12488 = (state_12495[2]);var state_12495__$1 = (function (){var statearr_12506 = state_12495;(statearr_12506[8] = inst_12488);
return statearr_12506;
})();var statearr_12507_12525 = state_12495__$1;(statearr_12507_12525[2] = null);
(statearr_12507_12525[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12496 === 11))
{var inst_12485 = (state_12495[2]);var state_12495__$1 = state_12495;var statearr_12508_12526 = state_12495__$1;(statearr_12508_12526[2] = inst_12485);
(statearr_12508_12526[1] = 10);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_12512 = (new Array(9));(statearr_12512[0] = state_machine__5425__auto__);
(statearr_12512[1] = 1);
return statearr_12512;
});
var state_machine__5425__auto____1 = (function (state_12495){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_12495);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e12513){if((e12513 instanceof Object))
{var ex__5428__auto__ = e12513;var statearr_12514_12527 = state_12495;(statearr_12514_12527[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12495);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12513;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12528 = state_12495;
state_12495 = G__12528;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_12495){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_12495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_12515 = f__5495__auto__.call(null);(statearr_12515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___12516);
return statearr_12515;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_12680){var state_val_12681 = (state_12680[1]);if((state_val_12681 === 1))
{var state_12680__$1 = state_12680;var statearr_12682_12719 = state_12680__$1;(statearr_12682_12719[2] = null);
(statearr_12682_12719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 2))
{var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12680__$1,4,in$);
} else
{if((state_val_12681 === 3))
{var inst_12678 = (state_12680[2]);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12680__$1,inst_12678);
} else
{if((state_val_12681 === 4))
{var inst_12626 = (state_12680[7]);var inst_12626__$1 = (state_12680[2]);var inst_12627 = (inst_12626__$1 == null);var state_12680__$1 = (function (){var statearr_12683 = state_12680;(statearr_12683[7] = inst_12626__$1);
return statearr_12683;
})();if(cljs.core.truth_(inst_12627))
{var statearr_12684_12720 = state_12680__$1;(statearr_12684_12720[1] = 5);
} else
{var statearr_12685_12721 = state_12680__$1;(statearr_12685_12721[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 5))
{var inst_12629 = cljs.core.async.close_BANG_.call(null,out);var state_12680__$1 = state_12680;var statearr_12686_12722 = state_12680__$1;(statearr_12686_12722[2] = inst_12629);
(statearr_12686_12722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 6))
{var inst_12626 = (state_12680[7]);var inst_12631 = f.call(null,inst_12626);var inst_12636 = cljs.core.seq.call(null,inst_12631);var inst_12637 = inst_12636;var inst_12638 = null;var inst_12639 = 0;var inst_12640 = 0;var state_12680__$1 = (function (){var statearr_12687 = state_12680;(statearr_12687[8] = inst_12638);
(statearr_12687[9] = inst_12637);
(statearr_12687[10] = inst_12639);
(statearr_12687[11] = inst_12640);
return statearr_12687;
})();var statearr_12688_12723 = state_12680__$1;(statearr_12688_12723[2] = null);
(statearr_12688_12723[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 7))
{var inst_12676 = (state_12680[2]);var state_12680__$1 = state_12680;var statearr_12689_12724 = state_12680__$1;(statearr_12689_12724[2] = inst_12676);
(statearr_12689_12724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 8))
{var inst_12639 = (state_12680[10]);var inst_12640 = (state_12680[11]);var inst_12642 = (inst_12640 < inst_12639);var inst_12643 = inst_12642;var state_12680__$1 = state_12680;if(cljs.core.truth_(inst_12643))
{var statearr_12690_12725 = state_12680__$1;(statearr_12690_12725[1] = 10);
} else
{var statearr_12691_12726 = state_12680__$1;(statearr_12691_12726[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 9))
{var inst_12673 = (state_12680[2]);var state_12680__$1 = (function (){var statearr_12692 = state_12680;(statearr_12692[12] = inst_12673);
return statearr_12692;
})();var statearr_12693_12727 = state_12680__$1;(statearr_12693_12727[2] = null);
(statearr_12693_12727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 10))
{var inst_12638 = (state_12680[8]);var inst_12640 = (state_12680[11]);var inst_12645 = cljs.core._nth.call(null,inst_12638,inst_12640);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12680__$1,13,out,inst_12645);
} else
{if((state_val_12681 === 11))
{var inst_12637 = (state_12680[9]);var inst_12651 = (state_12680[13]);var inst_12651__$1 = cljs.core.seq.call(null,inst_12637);var state_12680__$1 = (function (){var statearr_12697 = state_12680;(statearr_12697[13] = inst_12651__$1);
return statearr_12697;
})();if(inst_12651__$1)
{var statearr_12698_12728 = state_12680__$1;(statearr_12698_12728[1] = 14);
} else
{var statearr_12699_12729 = state_12680__$1;(statearr_12699_12729[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 12))
{var inst_12671 = (state_12680[2]);var state_12680__$1 = state_12680;var statearr_12700_12730 = state_12680__$1;(statearr_12700_12730[2] = inst_12671);
(statearr_12700_12730[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 13))
{var inst_12638 = (state_12680[8]);var inst_12637 = (state_12680[9]);var inst_12639 = (state_12680[10]);var inst_12640 = (state_12680[11]);var inst_12647 = (state_12680[2]);var inst_12648 = (inst_12640 + 1);var tmp12694 = inst_12638;var tmp12695 = inst_12637;var tmp12696 = inst_12639;var inst_12637__$1 = tmp12695;var inst_12638__$1 = tmp12694;var inst_12639__$1 = tmp12696;var inst_12640__$1 = inst_12648;var state_12680__$1 = (function (){var statearr_12701 = state_12680;(statearr_12701[8] = inst_12638__$1);
(statearr_12701[9] = inst_12637__$1);
(statearr_12701[10] = inst_12639__$1);
(statearr_12701[14] = inst_12647);
(statearr_12701[11] = inst_12640__$1);
return statearr_12701;
})();var statearr_12702_12731 = state_12680__$1;(statearr_12702_12731[2] = null);
(statearr_12702_12731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 14))
{var inst_12651 = (state_12680[13]);var inst_12653 = cljs.core.chunked_seq_QMARK_.call(null,inst_12651);var state_12680__$1 = state_12680;if(inst_12653)
{var statearr_12703_12732 = state_12680__$1;(statearr_12703_12732[1] = 17);
} else
{var statearr_12704_12733 = state_12680__$1;(statearr_12704_12733[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 15))
{var state_12680__$1 = state_12680;var statearr_12705_12734 = state_12680__$1;(statearr_12705_12734[2] = null);
(statearr_12705_12734[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 16))
{var inst_12669 = (state_12680[2]);var state_12680__$1 = state_12680;var statearr_12706_12735 = state_12680__$1;(statearr_12706_12735[2] = inst_12669);
(statearr_12706_12735[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 17))
{var inst_12651 = (state_12680[13]);var inst_12655 = cljs.core.chunk_first.call(null,inst_12651);var inst_12656 = cljs.core.chunk_rest.call(null,inst_12651);var inst_12657 = cljs.core.count.call(null,inst_12655);var inst_12637 = inst_12656;var inst_12638 = inst_12655;var inst_12639 = inst_12657;var inst_12640 = 0;var state_12680__$1 = (function (){var statearr_12707 = state_12680;(statearr_12707[8] = inst_12638);
(statearr_12707[9] = inst_12637);
(statearr_12707[10] = inst_12639);
(statearr_12707[11] = inst_12640);
return statearr_12707;
})();var statearr_12708_12736 = state_12680__$1;(statearr_12708_12736[2] = null);
(statearr_12708_12736[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 18))
{var inst_12651 = (state_12680[13]);var inst_12660 = cljs.core.first.call(null,inst_12651);var state_12680__$1 = state_12680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12680__$1,20,out,inst_12660);
} else
{if((state_val_12681 === 19))
{var inst_12666 = (state_12680[2]);var state_12680__$1 = state_12680;var statearr_12709_12737 = state_12680__$1;(statearr_12709_12737[2] = inst_12666);
(statearr_12709_12737[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12681 === 20))
{var inst_12651 = (state_12680[13]);var inst_12662 = (state_12680[2]);var inst_12663 = cljs.core.next.call(null,inst_12651);var inst_12637 = inst_12663;var inst_12638 = null;var inst_12639 = 0;var inst_12640 = 0;var state_12680__$1 = (function (){var statearr_12710 = state_12680;(statearr_12710[8] = inst_12638);
(statearr_12710[9] = inst_12637);
(statearr_12710[10] = inst_12639);
(statearr_12710[15] = inst_12662);
(statearr_12710[11] = inst_12640);
return statearr_12710;
})();var statearr_12711_12738 = state_12680__$1;(statearr_12711_12738[2] = null);
(statearr_12711_12738[1] = 8);
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
}
}
}
}
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
var state_machine__5425__auto____0 = (function (){var statearr_12715 = (new Array(16));(statearr_12715[0] = state_machine__5425__auto__);
(statearr_12715[1] = 1);
return statearr_12715;
});
var state_machine__5425__auto____1 = (function (state_12680){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_12680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e12716){if((e12716 instanceof Object))
{var ex__5428__auto__ = e12716;var statearr_12717_12739 = state_12680;(statearr_12717_12739[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12740 = state_12680;
state_12680 = G__12740;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_12680){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_12680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_12718 = f__5495__auto__.call(null);(statearr_12718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_12718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5494__auto___12821 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_12800){var state_val_12801 = (state_12800[1]);if((state_val_12801 === 1))
{var state_12800__$1 = state_12800;var statearr_12802_12822 = state_12800__$1;(statearr_12802_12822[2] = null);
(statearr_12802_12822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 2))
{var state_12800__$1 = state_12800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12800__$1,4,from);
} else
{if((state_val_12801 === 3))
{var inst_12798 = (state_12800[2]);var state_12800__$1 = state_12800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12800__$1,inst_12798);
} else
{if((state_val_12801 === 4))
{var inst_12783 = (state_12800[7]);var inst_12783__$1 = (state_12800[2]);var inst_12784 = (inst_12783__$1 == null);var state_12800__$1 = (function (){var statearr_12803 = state_12800;(statearr_12803[7] = inst_12783__$1);
return statearr_12803;
})();if(cljs.core.truth_(inst_12784))
{var statearr_12804_12823 = state_12800__$1;(statearr_12804_12823[1] = 5);
} else
{var statearr_12805_12824 = state_12800__$1;(statearr_12805_12824[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 5))
{var state_12800__$1 = state_12800;if(cljs.core.truth_(close_QMARK_))
{var statearr_12806_12825 = state_12800__$1;(statearr_12806_12825[1] = 8);
} else
{var statearr_12807_12826 = state_12800__$1;(statearr_12807_12826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 6))
{var inst_12783 = (state_12800[7]);var state_12800__$1 = state_12800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12800__$1,11,to,inst_12783);
} else
{if((state_val_12801 === 7))
{var inst_12796 = (state_12800[2]);var state_12800__$1 = state_12800;var statearr_12808_12827 = state_12800__$1;(statearr_12808_12827[2] = inst_12796);
(statearr_12808_12827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 8))
{var inst_12787 = cljs.core.async.close_BANG_.call(null,to);var state_12800__$1 = state_12800;var statearr_12809_12828 = state_12800__$1;(statearr_12809_12828[2] = inst_12787);
(statearr_12809_12828[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 9))
{var state_12800__$1 = state_12800;var statearr_12810_12829 = state_12800__$1;(statearr_12810_12829[2] = null);
(statearr_12810_12829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 10))
{var inst_12790 = (state_12800[2]);var state_12800__$1 = state_12800;var statearr_12811_12830 = state_12800__$1;(statearr_12811_12830[2] = inst_12790);
(statearr_12811_12830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12801 === 11))
{var inst_12793 = (state_12800[2]);var state_12800__$1 = (function (){var statearr_12812 = state_12800;(statearr_12812[8] = inst_12793);
return statearr_12812;
})();var statearr_12813_12831 = state_12800__$1;(statearr_12813_12831[2] = null);
(statearr_12813_12831[1] = 2);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_12817 = (new Array(9));(statearr_12817[0] = state_machine__5425__auto__);
(statearr_12817[1] = 1);
return statearr_12817;
});
var state_machine__5425__auto____1 = (function (state_12800){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_12800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e12818){if((e12818 instanceof Object))
{var ex__5428__auto__ = e12818;var statearr_12819_12832 = state_12800;(statearr_12819_12832[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12800);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12833 = state_12800;
state_12800 = G__12833;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_12800){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_12800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_12820 = f__5495__auto__.call(null);(statearr_12820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___12821);
return statearr_12820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5494__auto___12920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_12898){var state_val_12899 = (state_12898[1]);if((state_val_12899 === 1))
{var state_12898__$1 = state_12898;var statearr_12900_12921 = state_12898__$1;(statearr_12900_12921[2] = null);
(statearr_12900_12921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 2))
{var state_12898__$1 = state_12898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12898__$1,4,ch);
} else
{if((state_val_12899 === 3))
{var inst_12896 = (state_12898[2]);var state_12898__$1 = state_12898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12898__$1,inst_12896);
} else
{if((state_val_12899 === 4))
{var inst_12879 = (state_12898[7]);var inst_12879__$1 = (state_12898[2]);var inst_12880 = (inst_12879__$1 == null);var state_12898__$1 = (function (){var statearr_12901 = state_12898;(statearr_12901[7] = inst_12879__$1);
return statearr_12901;
})();if(cljs.core.truth_(inst_12880))
{var statearr_12902_12922 = state_12898__$1;(statearr_12902_12922[1] = 5);
} else
{var statearr_12903_12923 = state_12898__$1;(statearr_12903_12923[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 5))
{var inst_12882 = cljs.core.async.close_BANG_.call(null,tc);var inst_12883 = cljs.core.async.close_BANG_.call(null,fc);var state_12898__$1 = (function (){var statearr_12904 = state_12898;(statearr_12904[8] = inst_12882);
return statearr_12904;
})();var statearr_12905_12924 = state_12898__$1;(statearr_12905_12924[2] = inst_12883);
(statearr_12905_12924[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 6))
{var inst_12879 = (state_12898[7]);var inst_12885 = p.call(null,inst_12879);var state_12898__$1 = state_12898;if(cljs.core.truth_(inst_12885))
{var statearr_12906_12925 = state_12898__$1;(statearr_12906_12925[1] = 9);
} else
{var statearr_12907_12926 = state_12898__$1;(statearr_12907_12926[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 7))
{var inst_12894 = (state_12898[2]);var state_12898__$1 = state_12898;var statearr_12908_12927 = state_12898__$1;(statearr_12908_12927[2] = inst_12894);
(statearr_12908_12927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 8))
{var inst_12891 = (state_12898[2]);var state_12898__$1 = (function (){var statearr_12909 = state_12898;(statearr_12909[9] = inst_12891);
return statearr_12909;
})();var statearr_12910_12928 = state_12898__$1;(statearr_12910_12928[2] = null);
(statearr_12910_12928[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 9))
{var state_12898__$1 = state_12898;var statearr_12911_12929 = state_12898__$1;(statearr_12911_12929[2] = tc);
(statearr_12911_12929[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 10))
{var state_12898__$1 = state_12898;var statearr_12912_12930 = state_12898__$1;(statearr_12912_12930[2] = fc);
(statearr_12912_12930[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12899 === 11))
{var inst_12879 = (state_12898[7]);var inst_12889 = (state_12898[2]);var state_12898__$1 = state_12898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12898__$1,8,inst_12889,inst_12879);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_12916 = (new Array(10));(statearr_12916[0] = state_machine__5425__auto__);
(statearr_12916[1] = 1);
return statearr_12916;
});
var state_machine__5425__auto____1 = (function (state_12898){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_12898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e12917){if((e12917 instanceof Object))
{var ex__5428__auto__ = e12917;var statearr_12918_12931 = state_12898;(statearr_12918_12931[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12932 = state_12898;
state_12898 = G__12932;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_12898){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_12898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_12919 = f__5495__auto__.call(null);(statearr_12919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___12920);
return statearr_12919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return cljs.core.PersistentVector.fromArray([tc,fc], true);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_12979){var state_val_12980 = (state_12979[1]);if((state_val_12980 === 7))
{var inst_12975 = (state_12979[2]);var state_12979__$1 = state_12979;var statearr_12981_12997 = state_12979__$1;(statearr_12981_12997[2] = inst_12975);
(statearr_12981_12997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 6))
{var inst_12968 = (state_12979[7]);var inst_12965 = (state_12979[8]);var inst_12972 = f.call(null,inst_12965,inst_12968);var inst_12965__$1 = inst_12972;var state_12979__$1 = (function (){var statearr_12982 = state_12979;(statearr_12982[8] = inst_12965__$1);
return statearr_12982;
})();var statearr_12983_12998 = state_12979__$1;(statearr_12983_12998[2] = null);
(statearr_12983_12998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 5))
{var inst_12965 = (state_12979[8]);var state_12979__$1 = state_12979;var statearr_12984_12999 = state_12979__$1;(statearr_12984_12999[2] = inst_12965);
(statearr_12984_12999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 4))
{var inst_12968 = (state_12979[7]);var inst_12968__$1 = (state_12979[2]);var inst_12969 = (inst_12968__$1 == null);var state_12979__$1 = (function (){var statearr_12985 = state_12979;(statearr_12985[7] = inst_12968__$1);
return statearr_12985;
})();if(cljs.core.truth_(inst_12969))
{var statearr_12986_13000 = state_12979__$1;(statearr_12986_13000[1] = 5);
} else
{var statearr_12987_13001 = state_12979__$1;(statearr_12987_13001[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12980 === 3))
{var inst_12977 = (state_12979[2]);var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12979__$1,inst_12977);
} else
{if((state_val_12980 === 2))
{var state_12979__$1 = state_12979;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12979__$1,4,ch);
} else
{if((state_val_12980 === 1))
{var inst_12965 = init;var state_12979__$1 = (function (){var statearr_12988 = state_12979;(statearr_12988[8] = inst_12965);
return statearr_12988;
})();var statearr_12989_13002 = state_12979__$1;(statearr_12989_13002[2] = null);
(statearr_12989_13002[1] = 2);
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
var state_machine__5425__auto____0 = (function (){var statearr_12993 = (new Array(9));(statearr_12993[0] = state_machine__5425__auto__);
(statearr_12993[1] = 1);
return statearr_12993;
});
var state_machine__5425__auto____1 = (function (state_12979){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_12979);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e12994){if((e12994 instanceof Object))
{var ex__5428__auto__ = e12994;var statearr_12995_13003 = state_12979;(statearr_12995_13003[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12979);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12994;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13004 = state_12979;
state_12979 = G__13004;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_12979){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_12979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_12996 = f__5495__auto__.call(null);(statearr_12996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_12996;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5494__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13066){var state_val_13067 = (state_13066[1]);if((state_val_13067 === 1))
{var inst_13046 = cljs.core.seq.call(null,coll);var inst_13047 = inst_13046;var state_13066__$1 = (function (){var statearr_13068 = state_13066;(statearr_13068[7] = inst_13047);
return statearr_13068;
})();var statearr_13069_13087 = state_13066__$1;(statearr_13069_13087[2] = null);
(statearr_13069_13087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 2))
{var inst_13047 = (state_13066[7]);var state_13066__$1 = state_13066;if(cljs.core.truth_(inst_13047))
{var statearr_13070_13088 = state_13066__$1;(statearr_13070_13088[1] = 4);
} else
{var statearr_13071_13089 = state_13066__$1;(statearr_13071_13089[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 3))
{var inst_13064 = (state_13066[2]);var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13066__$1,inst_13064);
} else
{if((state_val_13067 === 4))
{var inst_13047 = (state_13066[7]);var inst_13050 = cljs.core.first.call(null,inst_13047);var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13066__$1,7,ch,inst_13050);
} else
{if((state_val_13067 === 5))
{var state_13066__$1 = state_13066;if(cljs.core.truth_(close_QMARK_))
{var statearr_13072_13090 = state_13066__$1;(statearr_13072_13090[1] = 8);
} else
{var statearr_13073_13091 = state_13066__$1;(statearr_13073_13091[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 6))
{var inst_13062 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13074_13092 = state_13066__$1;(statearr_13074_13092[2] = inst_13062);
(statearr_13074_13092[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 7))
{var inst_13047 = (state_13066[7]);var inst_13052 = (state_13066[2]);var inst_13053 = cljs.core.next.call(null,inst_13047);var inst_13047__$1 = inst_13053;var state_13066__$1 = (function (){var statearr_13075 = state_13066;(statearr_13075[7] = inst_13047__$1);
(statearr_13075[8] = inst_13052);
return statearr_13075;
})();var statearr_13076_13093 = state_13066__$1;(statearr_13076_13093[2] = null);
(statearr_13076_13093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 8))
{var inst_13057 = cljs.core.async.close_BANG_.call(null,ch);var state_13066__$1 = state_13066;var statearr_13077_13094 = state_13066__$1;(statearr_13077_13094[2] = inst_13057);
(statearr_13077_13094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 9))
{var state_13066__$1 = state_13066;var statearr_13078_13095 = state_13066__$1;(statearr_13078_13095[2] = null);
(statearr_13078_13095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 10))
{var inst_13060 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13079_13096 = state_13066__$1;(statearr_13079_13096[2] = inst_13060);
(statearr_13079_13096[1] = 6);
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
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_13083 = (new Array(9));(statearr_13083[0] = state_machine__5425__auto__);
(statearr_13083[1] = 1);
return statearr_13083;
});
var state_machine__5425__auto____1 = (function (state_13066){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13066);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13084){if((e13084 instanceof Object))
{var ex__5428__auto__ = e13084;var statearr_13085_13097 = state_13066;(statearr_13085_13097[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13098 = state_13066;
state_13066 = G__13098;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13066){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13086 = f__5495__auto__.call(null);(statearr_13086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto__);
return statearr_13086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return c__5494__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = {};
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3124__auto__ = _;if(and__3124__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3729__auto__ = (((_ == null))?null:_);return (function (){var or__3133__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = {};
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13313 = (function (cs,ch,mult,meta13314){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13314 = meta13314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13313.cljs$lang$type = true;
cljs.core.async.t13313.cljs$lang$ctorStr = "cljs.core.async/t13313";
cljs.core.async.t13313.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13313");
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13313.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13313.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13315){var self__ = this;
var _13315__$1 = this;return self__.meta13314;
});})(cs))
;
cljs.core.async.t13313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13315,meta13314__$1){var self__ = this;
var _13315__$1 = this;return (new cljs.core.async.t13313(self__.cs,self__.ch,self__.mult,meta13314__$1));
});})(cs))
;
cljs.core.async.__GT_t13313 = ((function (cs){
return (function __GT_t13313(cs__$1,ch__$1,mult__$1,meta13314){return (new cljs.core.async.t13313(cs__$1,ch__$1,mult__$1,meta13314));
});})(cs))
;
}
return (new cljs.core.async.t13313(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5494__auto___13527 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13445){var state_val_13446 = (state_13445[1]);if((state_val_13446 === 32))
{var inst_13394 = (state_13445[7]);var inst_13318 = (state_13445[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13445,31,Object,null,30);var inst_13401 = cljs.core.async.put_BANG_.call(null,inst_13394,inst_13318,done);var state_13445__$1 = state_13445;var statearr_13447_13528 = state_13445__$1;(statearr_13447_13528[2] = inst_13401);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 1))
{var state_13445__$1 = state_13445;var statearr_13448_13529 = state_13445__$1;(statearr_13448_13529[2] = null);
(statearr_13448_13529[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 33))
{var inst_13407 = (state_13445[9]);var inst_13409 = cljs.core.chunked_seq_QMARK_.call(null,inst_13407);var state_13445__$1 = state_13445;if(inst_13409)
{var statearr_13449_13530 = state_13445__$1;(statearr_13449_13530[1] = 36);
} else
{var statearr_13450_13531 = state_13445__$1;(statearr_13450_13531[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 2))
{var state_13445__$1 = state_13445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13445__$1,4,ch);
} else
{if((state_val_13446 === 34))
{var state_13445__$1 = state_13445;var statearr_13451_13532 = state_13445__$1;(statearr_13451_13532[2] = null);
(statearr_13451_13532[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 3))
{var inst_13443 = (state_13445[2]);var state_13445__$1 = state_13445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13445__$1,inst_13443);
} else
{if((state_val_13446 === 35))
{var inst_13432 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13452_13533 = state_13445__$1;(statearr_13452_13533[2] = inst_13432);
(statearr_13452_13533[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 4))
{var inst_13318 = (state_13445[8]);var inst_13318__$1 = (state_13445[2]);var inst_13319 = (inst_13318__$1 == null);var state_13445__$1 = (function (){var statearr_13453 = state_13445;(statearr_13453[8] = inst_13318__$1);
return statearr_13453;
})();if(cljs.core.truth_(inst_13319))
{var statearr_13454_13534 = state_13445__$1;(statearr_13454_13534[1] = 5);
} else
{var statearr_13455_13535 = state_13445__$1;(statearr_13455_13535[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 36))
{var inst_13407 = (state_13445[9]);var inst_13411 = cljs.core.chunk_first.call(null,inst_13407);var inst_13412 = cljs.core.chunk_rest.call(null,inst_13407);var inst_13413 = cljs.core.count.call(null,inst_13411);var inst_13386 = inst_13412;var inst_13387 = inst_13411;var inst_13388 = inst_13413;var inst_13389 = 0;var state_13445__$1 = (function (){var statearr_13456 = state_13445;(statearr_13456[10] = inst_13389);
(statearr_13456[11] = inst_13388);
(statearr_13456[12] = inst_13386);
(statearr_13456[13] = inst_13387);
return statearr_13456;
})();var statearr_13457_13536 = state_13445__$1;(statearr_13457_13536[2] = null);
(statearr_13457_13536[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 5))
{var inst_13325 = cljs.core.deref.call(null,cs);var inst_13326 = cljs.core.seq.call(null,inst_13325);var inst_13327 = inst_13326;var inst_13328 = null;var inst_13329 = 0;var inst_13330 = 0;var state_13445__$1 = (function (){var statearr_13458 = state_13445;(statearr_13458[14] = inst_13330);
(statearr_13458[15] = inst_13327);
(statearr_13458[16] = inst_13328);
(statearr_13458[17] = inst_13329);
return statearr_13458;
})();var statearr_13459_13537 = state_13445__$1;(statearr_13459_13537[2] = null);
(statearr_13459_13537[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 37))
{var inst_13407 = (state_13445[9]);var inst_13416 = cljs.core.first.call(null,inst_13407);var state_13445__$1 = (function (){var statearr_13460 = state_13445;(statearr_13460[18] = inst_13416);
return statearr_13460;
})();var statearr_13461_13538 = state_13445__$1;(statearr_13461_13538[2] = null);
(statearr_13461_13538[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 6))
{var inst_13377 = cljs.core.deref.call(null,cs);var inst_13378 = cljs.core.keys.call(null,inst_13377);var inst_13379 = cljs.core.count.call(null,inst_13378);var inst_13380 = cljs.core.reset_BANG_.call(null,dctr,inst_13379);var inst_13385 = cljs.core.seq.call(null,inst_13378);var inst_13386 = inst_13385;var inst_13387 = null;var inst_13388 = 0;var inst_13389 = 0;var state_13445__$1 = (function (){var statearr_13462 = state_13445;(statearr_13462[10] = inst_13389);
(statearr_13462[11] = inst_13388);
(statearr_13462[12] = inst_13386);
(statearr_13462[13] = inst_13387);
(statearr_13462[19] = inst_13380);
return statearr_13462;
})();var statearr_13463_13539 = state_13445__$1;(statearr_13463_13539[2] = null);
(statearr_13463_13539[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 38))
{var inst_13429 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13464_13540 = state_13445__$1;(statearr_13464_13540[2] = inst_13429);
(statearr_13464_13540[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 7))
{var inst_13441 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13465_13541 = state_13445__$1;(statearr_13465_13541[2] = inst_13441);
(statearr_13465_13541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 39))
{var inst_13407 = (state_13445[9]);var inst_13425 = (state_13445[2]);var inst_13426 = cljs.core.next.call(null,inst_13407);var inst_13386 = inst_13426;var inst_13387 = null;var inst_13388 = 0;var inst_13389 = 0;var state_13445__$1 = (function (){var statearr_13466 = state_13445;(statearr_13466[20] = inst_13425);
(statearr_13466[10] = inst_13389);
(statearr_13466[11] = inst_13388);
(statearr_13466[12] = inst_13386);
(statearr_13466[13] = inst_13387);
return statearr_13466;
})();var statearr_13467_13542 = state_13445__$1;(statearr_13467_13542[2] = null);
(statearr_13467_13542[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 8))
{var inst_13330 = (state_13445[14]);var inst_13329 = (state_13445[17]);var inst_13332 = (inst_13330 < inst_13329);var inst_13333 = inst_13332;var state_13445__$1 = state_13445;if(cljs.core.truth_(inst_13333))
{var statearr_13468_13543 = state_13445__$1;(statearr_13468_13543[1] = 10);
} else
{var statearr_13469_13544 = state_13445__$1;(statearr_13469_13544[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 40))
{var inst_13416 = (state_13445[18]);var inst_13417 = (state_13445[2]);var inst_13418 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13419 = cljs.core.async.untap_STAR_.call(null,m,inst_13416);var state_13445__$1 = (function (){var statearr_13470 = state_13445;(statearr_13470[21] = inst_13418);
(statearr_13470[22] = inst_13417);
return statearr_13470;
})();var statearr_13471_13545 = state_13445__$1;(statearr_13471_13545[2] = inst_13419);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 9))
{var inst_13375 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13472_13546 = state_13445__$1;(statearr_13472_13546[2] = inst_13375);
(statearr_13472_13546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 41))
{var inst_13318 = (state_13445[8]);var inst_13416 = (state_13445[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13445,40,Object,null,39);var inst_13423 = cljs.core.async.put_BANG_.call(null,inst_13416,inst_13318,done);var state_13445__$1 = state_13445;var statearr_13473_13547 = state_13445__$1;(statearr_13473_13547[2] = inst_13423);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 10))
{var inst_13330 = (state_13445[14]);var inst_13328 = (state_13445[16]);var inst_13336 = cljs.core._nth.call(null,inst_13328,inst_13330);var inst_13337 = cljs.core.nth.call(null,inst_13336,0,null);var inst_13338 = cljs.core.nth.call(null,inst_13336,1,null);var state_13445__$1 = (function (){var statearr_13474 = state_13445;(statearr_13474[23] = inst_13337);
return statearr_13474;
})();if(cljs.core.truth_(inst_13338))
{var statearr_13475_13548 = state_13445__$1;(statearr_13475_13548[1] = 13);
} else
{var statearr_13476_13549 = state_13445__$1;(statearr_13476_13549[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 42))
{var inst_13438 = (state_13445[2]);var state_13445__$1 = (function (){var statearr_13477 = state_13445;(statearr_13477[24] = inst_13438);
return statearr_13477;
})();var statearr_13478_13550 = state_13445__$1;(statearr_13478_13550[2] = null);
(statearr_13478_13550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 11))
{var inst_13347 = (state_13445[25]);var inst_13327 = (state_13445[15]);var inst_13347__$1 = cljs.core.seq.call(null,inst_13327);var state_13445__$1 = (function (){var statearr_13479 = state_13445;(statearr_13479[25] = inst_13347__$1);
return statearr_13479;
})();if(inst_13347__$1)
{var statearr_13480_13551 = state_13445__$1;(statearr_13480_13551[1] = 16);
} else
{var statearr_13481_13552 = state_13445__$1;(statearr_13481_13552[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 12))
{var inst_13373 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13482_13553 = state_13445__$1;(statearr_13482_13553[2] = inst_13373);
(statearr_13482_13553[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 13))
{var inst_13337 = (state_13445[23]);var inst_13340 = cljs.core.async.close_BANG_.call(null,inst_13337);var state_13445__$1 = state_13445;var statearr_13486_13554 = state_13445__$1;(statearr_13486_13554[2] = inst_13340);
(statearr_13486_13554[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 14))
{var state_13445__$1 = state_13445;var statearr_13487_13555 = state_13445__$1;(statearr_13487_13555[2] = null);
(statearr_13487_13555[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 15))
{var inst_13330 = (state_13445[14]);var inst_13327 = (state_13445[15]);var inst_13328 = (state_13445[16]);var inst_13329 = (state_13445[17]);var inst_13343 = (state_13445[2]);var inst_13344 = (inst_13330 + 1);var tmp13483 = inst_13327;var tmp13484 = inst_13328;var tmp13485 = inst_13329;var inst_13327__$1 = tmp13483;var inst_13328__$1 = tmp13484;var inst_13329__$1 = tmp13485;var inst_13330__$1 = inst_13344;var state_13445__$1 = (function (){var statearr_13488 = state_13445;(statearr_13488[14] = inst_13330__$1);
(statearr_13488[26] = inst_13343);
(statearr_13488[15] = inst_13327__$1);
(statearr_13488[16] = inst_13328__$1);
(statearr_13488[17] = inst_13329__$1);
return statearr_13488;
})();var statearr_13489_13556 = state_13445__$1;(statearr_13489_13556[2] = null);
(statearr_13489_13556[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 16))
{var inst_13347 = (state_13445[25]);var inst_13349 = cljs.core.chunked_seq_QMARK_.call(null,inst_13347);var state_13445__$1 = state_13445;if(inst_13349)
{var statearr_13490_13557 = state_13445__$1;(statearr_13490_13557[1] = 19);
} else
{var statearr_13491_13558 = state_13445__$1;(statearr_13491_13558[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 17))
{var state_13445__$1 = state_13445;var statearr_13492_13559 = state_13445__$1;(statearr_13492_13559[2] = null);
(statearr_13492_13559[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 18))
{var inst_13371 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13493_13560 = state_13445__$1;(statearr_13493_13560[2] = inst_13371);
(statearr_13493_13560[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 19))
{var inst_13347 = (state_13445[25]);var inst_13351 = cljs.core.chunk_first.call(null,inst_13347);var inst_13352 = cljs.core.chunk_rest.call(null,inst_13347);var inst_13353 = cljs.core.count.call(null,inst_13351);var inst_13327 = inst_13352;var inst_13328 = inst_13351;var inst_13329 = inst_13353;var inst_13330 = 0;var state_13445__$1 = (function (){var statearr_13494 = state_13445;(statearr_13494[14] = inst_13330);
(statearr_13494[15] = inst_13327);
(statearr_13494[16] = inst_13328);
(statearr_13494[17] = inst_13329);
return statearr_13494;
})();var statearr_13495_13561 = state_13445__$1;(statearr_13495_13561[2] = null);
(statearr_13495_13561[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 20))
{var inst_13347 = (state_13445[25]);var inst_13357 = cljs.core.first.call(null,inst_13347);var inst_13358 = cljs.core.nth.call(null,inst_13357,0,null);var inst_13359 = cljs.core.nth.call(null,inst_13357,1,null);var state_13445__$1 = (function (){var statearr_13496 = state_13445;(statearr_13496[27] = inst_13358);
return statearr_13496;
})();if(cljs.core.truth_(inst_13359))
{var statearr_13497_13562 = state_13445__$1;(statearr_13497_13562[1] = 22);
} else
{var statearr_13498_13563 = state_13445__$1;(statearr_13498_13563[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 21))
{var inst_13368 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13499_13564 = state_13445__$1;(statearr_13499_13564[2] = inst_13368);
(statearr_13499_13564[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 22))
{var inst_13358 = (state_13445[27]);var inst_13361 = cljs.core.async.close_BANG_.call(null,inst_13358);var state_13445__$1 = state_13445;var statearr_13500_13565 = state_13445__$1;(statearr_13500_13565[2] = inst_13361);
(statearr_13500_13565[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 23))
{var state_13445__$1 = state_13445;var statearr_13501_13566 = state_13445__$1;(statearr_13501_13566[2] = null);
(statearr_13501_13566[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 24))
{var inst_13347 = (state_13445[25]);var inst_13364 = (state_13445[2]);var inst_13365 = cljs.core.next.call(null,inst_13347);var inst_13327 = inst_13365;var inst_13328 = null;var inst_13329 = 0;var inst_13330 = 0;var state_13445__$1 = (function (){var statearr_13502 = state_13445;(statearr_13502[28] = inst_13364);
(statearr_13502[14] = inst_13330);
(statearr_13502[15] = inst_13327);
(statearr_13502[16] = inst_13328);
(statearr_13502[17] = inst_13329);
return statearr_13502;
})();var statearr_13503_13567 = state_13445__$1;(statearr_13503_13567[2] = null);
(statearr_13503_13567[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 25))
{var inst_13389 = (state_13445[10]);var inst_13388 = (state_13445[11]);var inst_13391 = (inst_13389 < inst_13388);var inst_13392 = inst_13391;var state_13445__$1 = state_13445;if(cljs.core.truth_(inst_13392))
{var statearr_13504_13568 = state_13445__$1;(statearr_13504_13568[1] = 27);
} else
{var statearr_13505_13569 = state_13445__$1;(statearr_13505_13569[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 26))
{var inst_13436 = (state_13445[2]);var state_13445__$1 = (function (){var statearr_13506 = state_13445;(statearr_13506[29] = inst_13436);
return statearr_13506;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13445__$1,42,dchan);
} else
{if((state_val_13446 === 27))
{var inst_13389 = (state_13445[10]);var inst_13387 = (state_13445[13]);var inst_13394 = cljs.core._nth.call(null,inst_13387,inst_13389);var state_13445__$1 = (function (){var statearr_13507 = state_13445;(statearr_13507[7] = inst_13394);
return statearr_13507;
})();var statearr_13508_13570 = state_13445__$1;(statearr_13508_13570[2] = null);
(statearr_13508_13570[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 28))
{var inst_13407 = (state_13445[9]);var inst_13386 = (state_13445[12]);var inst_13407__$1 = cljs.core.seq.call(null,inst_13386);var state_13445__$1 = (function (){var statearr_13512 = state_13445;(statearr_13512[9] = inst_13407__$1);
return statearr_13512;
})();if(inst_13407__$1)
{var statearr_13513_13571 = state_13445__$1;(statearr_13513_13571[1] = 33);
} else
{var statearr_13514_13572 = state_13445__$1;(statearr_13514_13572[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 29))
{var inst_13434 = (state_13445[2]);var state_13445__$1 = state_13445;var statearr_13515_13573 = state_13445__$1;(statearr_13515_13573[2] = inst_13434);
(statearr_13515_13573[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 30))
{var inst_13389 = (state_13445[10]);var inst_13388 = (state_13445[11]);var inst_13386 = (state_13445[12]);var inst_13387 = (state_13445[13]);var inst_13403 = (state_13445[2]);var inst_13404 = (inst_13389 + 1);var tmp13509 = inst_13388;var tmp13510 = inst_13386;var tmp13511 = inst_13387;var inst_13386__$1 = tmp13510;var inst_13387__$1 = tmp13511;var inst_13388__$1 = tmp13509;var inst_13389__$1 = inst_13404;var state_13445__$1 = (function (){var statearr_13516 = state_13445;(statearr_13516[10] = inst_13389__$1);
(statearr_13516[11] = inst_13388__$1);
(statearr_13516[12] = inst_13386__$1);
(statearr_13516[13] = inst_13387__$1);
(statearr_13516[30] = inst_13403);
return statearr_13516;
})();var statearr_13517_13574 = state_13445__$1;(statearr_13517_13574[2] = null);
(statearr_13517_13574[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13446 === 31))
{var inst_13394 = (state_13445[7]);var inst_13395 = (state_13445[2]);var inst_13396 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13397 = cljs.core.async.untap_STAR_.call(null,m,inst_13394);var state_13445__$1 = (function (){var statearr_13518 = state_13445;(statearr_13518[31] = inst_13395);
(statearr_13518[32] = inst_13396);
return statearr_13518;
})();var statearr_13519_13575 = state_13445__$1;(statearr_13519_13575[2] = inst_13397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445__$1);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
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
var state_machine__5425__auto____0 = (function (){var statearr_13523 = (new Array(33));(statearr_13523[0] = state_machine__5425__auto__);
(statearr_13523[1] = 1);
return statearr_13523;
});
var state_machine__5425__auto____1 = (function (state_13445){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13524){if((e13524 instanceof Object))
{var ex__5428__auto__ = e13524;var statearr_13525_13576 = state_13445;(statearr_13525_13576[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13577 = state_13445;
state_13445 = G__13577;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13445){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13526 = f__5495__auto__.call(null);(statearr_13526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___13527);
return statearr_13526;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = {};
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3124__auto__ = m;if(and__3124__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3729__auto__ = (((m == null))?null:m);return (function (){var or__3133__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], true);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], true);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13687 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13687 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13688){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta13688 = meta13688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13687.cljs$lang$type = true;
cljs.core.async.t13687.cljs$lang$ctorStr = "cljs.core.async/t13687";
cljs.core.async.t13687.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13687");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13687.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13689){var self__ = this;
var _13689__$1 = this;return self__.meta13688;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13689,meta13688__$1){var self__ = this;
var _13689__$1 = this;return (new cljs.core.async.t13687(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13688__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13687 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13687(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13688){return (new cljs.core.async.t13687(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13688));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13687(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5494__auto___13796 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_13754){var state_val_13755 = (state_13754[1]);if((state_val_13755 === 1))
{var inst_13693 = (state_13754[7]);var inst_13693__$1 = calc_state.call(null);var inst_13694 = cljs.core.seq_QMARK_.call(null,inst_13693__$1);var state_13754__$1 = (function (){var statearr_13756 = state_13754;(statearr_13756[7] = inst_13693__$1);
return statearr_13756;
})();if(inst_13694)
{var statearr_13757_13797 = state_13754__$1;(statearr_13757_13797[1] = 2);
} else
{var statearr_13758_13798 = state_13754__$1;(statearr_13758_13798[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 2))
{var inst_13693 = (state_13754[7]);var inst_13696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13693);var state_13754__$1 = state_13754;var statearr_13759_13799 = state_13754__$1;(statearr_13759_13799[2] = inst_13696);
(statearr_13759_13799[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 3))
{var inst_13693 = (state_13754[7]);var state_13754__$1 = state_13754;var statearr_13760_13800 = state_13754__$1;(statearr_13760_13800[2] = inst_13693);
(statearr_13760_13800[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 4))
{var inst_13693 = (state_13754[7]);var inst_13699 = (state_13754[2]);var inst_13700 = cljs.core.get.call(null,inst_13699,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13701 = cljs.core.get.call(null,inst_13699,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13702 = cljs.core.get.call(null,inst_13699,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13703 = inst_13693;var state_13754__$1 = (function (){var statearr_13761 = state_13754;(statearr_13761[8] = inst_13700);
(statearr_13761[9] = inst_13701);
(statearr_13761[10] = inst_13702);
(statearr_13761[11] = inst_13703);
return statearr_13761;
})();var statearr_13762_13801 = state_13754__$1;(statearr_13762_13801[2] = null);
(statearr_13762_13801[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 5))
{var inst_13703 = (state_13754[11]);var inst_13706 = cljs.core.seq_QMARK_.call(null,inst_13703);var state_13754__$1 = state_13754;if(inst_13706)
{var statearr_13763_13802 = state_13754__$1;(statearr_13763_13802[1] = 7);
} else
{var statearr_13764_13803 = state_13754__$1;(statearr_13764_13803[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 6))
{var inst_13752 = (state_13754[2]);var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13754__$1,inst_13752);
} else
{if((state_val_13755 === 7))
{var inst_13703 = (state_13754[11]);var inst_13708 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13703);var state_13754__$1 = state_13754;var statearr_13765_13804 = state_13754__$1;(statearr_13765_13804[2] = inst_13708);
(statearr_13765_13804[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 8))
{var inst_13703 = (state_13754[11]);var state_13754__$1 = state_13754;var statearr_13766_13805 = state_13754__$1;(statearr_13766_13805[2] = inst_13703);
(statearr_13766_13805[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 9))
{var inst_13711 = (state_13754[12]);var inst_13711__$1 = (state_13754[2]);var inst_13712 = cljs.core.get.call(null,inst_13711__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13713 = cljs.core.get.call(null,inst_13711__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13714 = cljs.core.get.call(null,inst_13711__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13754__$1 = (function (){var statearr_13767 = state_13754;(statearr_13767[12] = inst_13711__$1);
(statearr_13767[13] = inst_13713);
(statearr_13767[14] = inst_13714);
return statearr_13767;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13754__$1,10,inst_13712);
} else
{if((state_val_13755 === 10))
{var inst_13718 = (state_13754[15]);var inst_13719 = (state_13754[16]);var inst_13717 = (state_13754[2]);var inst_13718__$1 = cljs.core.nth.call(null,inst_13717,0,null);var inst_13719__$1 = cljs.core.nth.call(null,inst_13717,1,null);var inst_13720 = (inst_13718__$1 == null);var inst_13721 = cljs.core._EQ_.call(null,inst_13719__$1,change);var inst_13722 = (inst_13720) || (inst_13721);var state_13754__$1 = (function (){var statearr_13768 = state_13754;(statearr_13768[15] = inst_13718__$1);
(statearr_13768[16] = inst_13719__$1);
return statearr_13768;
})();if(cljs.core.truth_(inst_13722))
{var statearr_13769_13806 = state_13754__$1;(statearr_13769_13806[1] = 11);
} else
{var statearr_13770_13807 = state_13754__$1;(statearr_13770_13807[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 11))
{var inst_13718 = (state_13754[15]);var inst_13724 = (inst_13718 == null);var state_13754__$1 = state_13754;if(cljs.core.truth_(inst_13724))
{var statearr_13771_13808 = state_13754__$1;(statearr_13771_13808[1] = 14);
} else
{var statearr_13772_13809 = state_13754__$1;(statearr_13772_13809[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 12))
{var inst_13714 = (state_13754[14]);var inst_13733 = (state_13754[17]);var inst_13719 = (state_13754[16]);var inst_13733__$1 = inst_13714.call(null,inst_13719);var state_13754__$1 = (function (){var statearr_13773 = state_13754;(statearr_13773[17] = inst_13733__$1);
return statearr_13773;
})();if(cljs.core.truth_(inst_13733__$1))
{var statearr_13774_13810 = state_13754__$1;(statearr_13774_13810[1] = 17);
} else
{var statearr_13775_13811 = state_13754__$1;(statearr_13775_13811[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 13))
{var inst_13750 = (state_13754[2]);var state_13754__$1 = state_13754;var statearr_13776_13812 = state_13754__$1;(statearr_13776_13812[2] = inst_13750);
(statearr_13776_13812[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 14))
{var inst_13719 = (state_13754[16]);var inst_13726 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13719);var state_13754__$1 = state_13754;var statearr_13777_13813 = state_13754__$1;(statearr_13777_13813[2] = inst_13726);
(statearr_13777_13813[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 15))
{var state_13754__$1 = state_13754;var statearr_13778_13814 = state_13754__$1;(statearr_13778_13814[2] = null);
(statearr_13778_13814[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 16))
{var inst_13729 = (state_13754[2]);var inst_13730 = calc_state.call(null);var inst_13703 = inst_13730;var state_13754__$1 = (function (){var statearr_13779 = state_13754;(statearr_13779[18] = inst_13729);
(statearr_13779[11] = inst_13703);
return statearr_13779;
})();var statearr_13780_13815 = state_13754__$1;(statearr_13780_13815[2] = null);
(statearr_13780_13815[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 17))
{var inst_13733 = (state_13754[17]);var state_13754__$1 = state_13754;var statearr_13781_13816 = state_13754__$1;(statearr_13781_13816[2] = inst_13733);
(statearr_13781_13816[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 18))
{var inst_13713 = (state_13754[13]);var inst_13714 = (state_13754[14]);var inst_13719 = (state_13754[16]);var inst_13736 = cljs.core.empty_QMARK_.call(null,inst_13714);var inst_13737 = inst_13713.call(null,inst_13719);var inst_13738 = cljs.core.not.call(null,inst_13737);var inst_13739 = (inst_13736) && (inst_13738);var state_13754__$1 = state_13754;var statearr_13782_13817 = state_13754__$1;(statearr_13782_13817[2] = inst_13739);
(statearr_13782_13817[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 19))
{var inst_13741 = (state_13754[2]);var state_13754__$1 = state_13754;if(cljs.core.truth_(inst_13741))
{var statearr_13783_13818 = state_13754__$1;(statearr_13783_13818[1] = 20);
} else
{var statearr_13784_13819 = state_13754__$1;(statearr_13784_13819[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 20))
{var inst_13718 = (state_13754[15]);var state_13754__$1 = state_13754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13754__$1,23,out,inst_13718);
} else
{if((state_val_13755 === 21))
{var state_13754__$1 = state_13754;var statearr_13785_13820 = state_13754__$1;(statearr_13785_13820[2] = null);
(statearr_13785_13820[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 22))
{var inst_13711 = (state_13754[12]);var inst_13747 = (state_13754[2]);var inst_13703 = inst_13711;var state_13754__$1 = (function (){var statearr_13786 = state_13754;(statearr_13786[19] = inst_13747);
(statearr_13786[11] = inst_13703);
return statearr_13786;
})();var statearr_13787_13821 = state_13754__$1;(statearr_13787_13821[2] = null);
(statearr_13787_13821[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13755 === 23))
{var inst_13744 = (state_13754[2]);var state_13754__$1 = state_13754;var statearr_13788_13822 = state_13754__$1;(statearr_13788_13822[2] = inst_13744);
(statearr_13788_13822[1] = 22);
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
}
}
}
}
}
}
}
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
var state_machine__5425__auto____0 = (function (){var statearr_13792 = (new Array(20));(statearr_13792[0] = state_machine__5425__auto__);
(statearr_13792[1] = 1);
return statearr_13792;
});
var state_machine__5425__auto____1 = (function (state_13754){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_13754);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e13793){if((e13793 instanceof Object))
{var ex__5428__auto__ = e13793;var statearr_13794_13823 = state_13754;(statearr_13794_13823[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13754);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13824 = state_13754;
state_13754 = G__13824;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_13754){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_13754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_13795 = f__5495__auto__.call(null);(statearr_13795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___13796);
return statearr_13795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = {};
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3124__auto__ = p;if(and__3124__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3124__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3729__auto__ = (((p == null))?null:p);return (function (){var or__3133__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3729__auto__)]);if(or__3133__auto__)
{return or__3133__auto__;
} else
{var or__3133__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3133__auto____$1)
{return or__3133__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3133__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3133__auto__))
{return or__3133__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3133__auto__,mults){
return (function (p1__13825_SHARP_){if(cljs.core.truth_(p1__13825_SHARP_.call(null,topic)))
{return p1__13825_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13825_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3133__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13950 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13950 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13951){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13951 = meta13951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13950.cljs$lang$type = true;
cljs.core.async.t13950.cljs$lang$ctorStr = "cljs.core.async/t13950";
cljs.core.async.t13950.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3670__auto__,writer__3671__auto__,opt__3672__auto__){return cljs.core._write.call(null,writer__3671__auto__,"cljs.core.async/t13950");
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13950.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13950.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13952){var self__ = this;
var _13952__$1 = this;return self__.meta13951;
});})(mults,ensure_mult))
;
cljs.core.async.t13950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13952,meta13951__$1){var self__ = this;
var _13952__$1 = this;return (new cljs.core.async.t13950(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13951__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13950 = ((function (mults,ensure_mult){
return (function __GT_t13950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13951){return (new cljs.core.async.t13950(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13951));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13950(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5494__auto___14074 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14026){var state_val_14027 = (state_14026[1]);if((state_val_14027 === 1))
{var state_14026__$1 = state_14026;var statearr_14028_14075 = state_14026__$1;(statearr_14028_14075[2] = null);
(statearr_14028_14075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 2))
{var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14026__$1,4,ch);
} else
{if((state_val_14027 === 3))
{var inst_14024 = (state_14026[2]);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14026__$1,inst_14024);
} else
{if((state_val_14027 === 4))
{var inst_13955 = (state_14026[7]);var inst_13955__$1 = (state_14026[2]);var inst_13956 = (inst_13955__$1 == null);var state_14026__$1 = (function (){var statearr_14029 = state_14026;(statearr_14029[7] = inst_13955__$1);
return statearr_14029;
})();if(cljs.core.truth_(inst_13956))
{var statearr_14030_14076 = state_14026__$1;(statearr_14030_14076[1] = 5);
} else
{var statearr_14031_14077 = state_14026__$1;(statearr_14031_14077[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 5))
{var inst_13962 = cljs.core.deref.call(null,mults);var inst_13963 = cljs.core.vals.call(null,inst_13962);var inst_13964 = cljs.core.seq.call(null,inst_13963);var inst_13965 = inst_13964;var inst_13966 = null;var inst_13967 = 0;var inst_13968 = 0;var state_14026__$1 = (function (){var statearr_14032 = state_14026;(statearr_14032[8] = inst_13968);
(statearr_14032[9] = inst_13965);
(statearr_14032[10] = inst_13966);
(statearr_14032[11] = inst_13967);
return statearr_14032;
})();var statearr_14033_14078 = state_14026__$1;(statearr_14033_14078[2] = null);
(statearr_14033_14078[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 6))
{var inst_14003 = (state_14026[12]);var inst_13955 = (state_14026[7]);var inst_14005 = (state_14026[13]);var inst_14003__$1 = topic_fn.call(null,inst_13955);var inst_14004 = cljs.core.deref.call(null,mults);var inst_14005__$1 = cljs.core.get.call(null,inst_14004,inst_14003__$1);var state_14026__$1 = (function (){var statearr_14034 = state_14026;(statearr_14034[12] = inst_14003__$1);
(statearr_14034[13] = inst_14005__$1);
return statearr_14034;
})();if(cljs.core.truth_(inst_14005__$1))
{var statearr_14035_14079 = state_14026__$1;(statearr_14035_14079[1] = 19);
} else
{var statearr_14036_14080 = state_14026__$1;(statearr_14036_14080[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 7))
{var inst_14022 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14037_14081 = state_14026__$1;(statearr_14037_14081[2] = inst_14022);
(statearr_14037_14081[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 8))
{var inst_13968 = (state_14026[8]);var inst_13967 = (state_14026[11]);var inst_13970 = (inst_13968 < inst_13967);var inst_13971 = inst_13970;var state_14026__$1 = state_14026;if(cljs.core.truth_(inst_13971))
{var statearr_14041_14082 = state_14026__$1;(statearr_14041_14082[1] = 10);
} else
{var statearr_14042_14083 = state_14026__$1;(statearr_14042_14083[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 9))
{var inst_14001 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14043_14084 = state_14026__$1;(statearr_14043_14084[2] = inst_14001);
(statearr_14043_14084[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 10))
{var inst_13968 = (state_14026[8]);var inst_13965 = (state_14026[9]);var inst_13966 = (state_14026[10]);var inst_13967 = (state_14026[11]);var inst_13973 = cljs.core._nth.call(null,inst_13966,inst_13968);var inst_13974 = cljs.core.async.muxch_STAR_.call(null,inst_13973);var inst_13975 = cljs.core.async.close_BANG_.call(null,inst_13974);var inst_13976 = (inst_13968 + 1);var tmp14038 = inst_13965;var tmp14039 = inst_13966;var tmp14040 = inst_13967;var inst_13965__$1 = tmp14038;var inst_13966__$1 = tmp14039;var inst_13967__$1 = tmp14040;var inst_13968__$1 = inst_13976;var state_14026__$1 = (function (){var statearr_14044 = state_14026;(statearr_14044[8] = inst_13968__$1);
(statearr_14044[14] = inst_13975);
(statearr_14044[9] = inst_13965__$1);
(statearr_14044[10] = inst_13966__$1);
(statearr_14044[11] = inst_13967__$1);
return statearr_14044;
})();var statearr_14045_14085 = state_14026__$1;(statearr_14045_14085[2] = null);
(statearr_14045_14085[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 11))
{var inst_13979 = (state_14026[15]);var inst_13965 = (state_14026[9]);var inst_13979__$1 = cljs.core.seq.call(null,inst_13965);var state_14026__$1 = (function (){var statearr_14046 = state_14026;(statearr_14046[15] = inst_13979__$1);
return statearr_14046;
})();if(inst_13979__$1)
{var statearr_14047_14086 = state_14026__$1;(statearr_14047_14086[1] = 13);
} else
{var statearr_14048_14087 = state_14026__$1;(statearr_14048_14087[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 12))
{var inst_13999 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14049_14088 = state_14026__$1;(statearr_14049_14088[2] = inst_13999);
(statearr_14049_14088[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 13))
{var inst_13979 = (state_14026[15]);var inst_13981 = cljs.core.chunked_seq_QMARK_.call(null,inst_13979);var state_14026__$1 = state_14026;if(inst_13981)
{var statearr_14050_14089 = state_14026__$1;(statearr_14050_14089[1] = 16);
} else
{var statearr_14051_14090 = state_14026__$1;(statearr_14051_14090[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 14))
{var state_14026__$1 = state_14026;var statearr_14052_14091 = state_14026__$1;(statearr_14052_14091[2] = null);
(statearr_14052_14091[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 15))
{var inst_13997 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14053_14092 = state_14026__$1;(statearr_14053_14092[2] = inst_13997);
(statearr_14053_14092[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 16))
{var inst_13979 = (state_14026[15]);var inst_13983 = cljs.core.chunk_first.call(null,inst_13979);var inst_13984 = cljs.core.chunk_rest.call(null,inst_13979);var inst_13985 = cljs.core.count.call(null,inst_13983);var inst_13965 = inst_13984;var inst_13966 = inst_13983;var inst_13967 = inst_13985;var inst_13968 = 0;var state_14026__$1 = (function (){var statearr_14054 = state_14026;(statearr_14054[8] = inst_13968);
(statearr_14054[9] = inst_13965);
(statearr_14054[10] = inst_13966);
(statearr_14054[11] = inst_13967);
return statearr_14054;
})();var statearr_14055_14093 = state_14026__$1;(statearr_14055_14093[2] = null);
(statearr_14055_14093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 17))
{var inst_13979 = (state_14026[15]);var inst_13988 = cljs.core.first.call(null,inst_13979);var inst_13989 = cljs.core.async.muxch_STAR_.call(null,inst_13988);var inst_13990 = cljs.core.async.close_BANG_.call(null,inst_13989);var inst_13991 = cljs.core.next.call(null,inst_13979);var inst_13965 = inst_13991;var inst_13966 = null;var inst_13967 = 0;var inst_13968 = 0;var state_14026__$1 = (function (){var statearr_14056 = state_14026;(statearr_14056[8] = inst_13968);
(statearr_14056[16] = inst_13990);
(statearr_14056[9] = inst_13965);
(statearr_14056[10] = inst_13966);
(statearr_14056[11] = inst_13967);
return statearr_14056;
})();var statearr_14057_14094 = state_14026__$1;(statearr_14057_14094[2] = null);
(statearr_14057_14094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 18))
{var inst_13994 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14058_14095 = state_14026__$1;(statearr_14058_14095[2] = inst_13994);
(statearr_14058_14095[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 19))
{var state_14026__$1 = state_14026;var statearr_14059_14096 = state_14026__$1;(statearr_14059_14096[2] = null);
(statearr_14059_14096[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 20))
{var state_14026__$1 = state_14026;var statearr_14060_14097 = state_14026__$1;(statearr_14060_14097[2] = null);
(statearr_14060_14097[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 21))
{var inst_14019 = (state_14026[2]);var state_14026__$1 = (function (){var statearr_14061 = state_14026;(statearr_14061[17] = inst_14019);
return statearr_14061;
})();var statearr_14062_14098 = state_14026__$1;(statearr_14062_14098[2] = null);
(statearr_14062_14098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 22))
{var inst_14016 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14063_14099 = state_14026__$1;(statearr_14063_14099[2] = inst_14016);
(statearr_14063_14099[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 23))
{var inst_14003 = (state_14026[12]);var inst_14007 = (state_14026[2]);var inst_14008 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14003);var state_14026__$1 = (function (){var statearr_14064 = state_14026;(statearr_14064[18] = inst_14007);
return statearr_14064;
})();var statearr_14065_14100 = state_14026__$1;(statearr_14065_14100[2] = inst_14008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14027 === 24))
{var inst_13955 = (state_14026[7]);var inst_14005 = (state_14026[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14026,23,Object,null,22);var inst_14012 = cljs.core.async.muxch_STAR_.call(null,inst_14005);var state_14026__$1 = state_14026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14026__$1,25,inst_14012,inst_13955);
} else
{if((state_val_14027 === 25))
{var inst_14014 = (state_14026[2]);var state_14026__$1 = state_14026;var statearr_14066_14101 = state_14026__$1;(statearr_14066_14101[2] = inst_14014);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026__$1);
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
}
}
}
}
}
}
}
}
}
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
var state_machine__5425__auto____0 = (function (){var statearr_14070 = (new Array(19));(statearr_14070[0] = state_machine__5425__auto__);
(statearr_14070[1] = 1);
return statearr_14070;
});
var state_machine__5425__auto____1 = (function (state_14026){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14026);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14071){if((e14071 instanceof Object))
{var ex__5428__auto__ = e14071;var statearr_14072_14102 = state_14026;(statearr_14072_14102[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14071;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14103 = state_14026;
state_14026 = G__14103;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14026){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14073 = f__5495__auto__.call(null);(statearr_14073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14074);
return statearr_14073;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5494__auto___14240 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14210){var state_val_14211 = (state_14210[1]);if((state_val_14211 === 1))
{var state_14210__$1 = state_14210;var statearr_14212_14241 = state_14210__$1;(statearr_14212_14241[2] = null);
(statearr_14212_14241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 2))
{var inst_14173 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14174 = 0;var state_14210__$1 = (function (){var statearr_14213 = state_14210;(statearr_14213[7] = inst_14173);
(statearr_14213[8] = inst_14174);
return statearr_14213;
})();var statearr_14214_14242 = state_14210__$1;(statearr_14214_14242[2] = null);
(statearr_14214_14242[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 3))
{var inst_14208 = (state_14210[2]);var state_14210__$1 = state_14210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14210__$1,inst_14208);
} else
{if((state_val_14211 === 4))
{var inst_14174 = (state_14210[8]);var inst_14176 = (inst_14174 < cnt);var state_14210__$1 = state_14210;if(cljs.core.truth_(inst_14176))
{var statearr_14215_14243 = state_14210__$1;(statearr_14215_14243[1] = 6);
} else
{var statearr_14216_14244 = state_14210__$1;(statearr_14216_14244[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 5))
{var inst_14194 = (state_14210[2]);var state_14210__$1 = (function (){var statearr_14217 = state_14210;(statearr_14217[9] = inst_14194);
return statearr_14217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14210__$1,12,dchan);
} else
{if((state_val_14211 === 6))
{var state_14210__$1 = state_14210;var statearr_14218_14245 = state_14210__$1;(statearr_14218_14245[2] = null);
(statearr_14218_14245[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 7))
{var state_14210__$1 = state_14210;var statearr_14219_14246 = state_14210__$1;(statearr_14219_14246[2] = null);
(statearr_14219_14246[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 8))
{var inst_14192 = (state_14210[2]);var state_14210__$1 = state_14210;var statearr_14220_14247 = state_14210__$1;(statearr_14220_14247[2] = inst_14192);
(statearr_14220_14247[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 9))
{var inst_14174 = (state_14210[8]);var inst_14187 = (state_14210[2]);var inst_14188 = (inst_14174 + 1);var inst_14174__$1 = inst_14188;var state_14210__$1 = (function (){var statearr_14221 = state_14210;(statearr_14221[8] = inst_14174__$1);
(statearr_14221[10] = inst_14187);
return statearr_14221;
})();var statearr_14222_14248 = state_14210__$1;(statearr_14222_14248[2] = null);
(statearr_14222_14248[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 10))
{var inst_14178 = (state_14210[2]);var inst_14179 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14210__$1 = (function (){var statearr_14223 = state_14210;(statearr_14223[11] = inst_14178);
return statearr_14223;
})();var statearr_14224_14249 = state_14210__$1;(statearr_14224_14249[2] = inst_14179);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 11))
{var inst_14174 = (state_14210[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14210,10,Object,null,9);var inst_14183 = chs__$1.call(null,inst_14174);var inst_14184 = done.call(null,inst_14174);var inst_14185 = cljs.core.async.take_BANG_.call(null,inst_14183,inst_14184);var state_14210__$1 = state_14210;var statearr_14225_14250 = state_14210__$1;(statearr_14225_14250[2] = inst_14185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14210__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 12))
{var inst_14196 = (state_14210[12]);var inst_14196__$1 = (state_14210[2]);var inst_14197 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14196__$1);var state_14210__$1 = (function (){var statearr_14226 = state_14210;(statearr_14226[12] = inst_14196__$1);
return statearr_14226;
})();if(cljs.core.truth_(inst_14197))
{var statearr_14227_14251 = state_14210__$1;(statearr_14227_14251[1] = 13);
} else
{var statearr_14228_14252 = state_14210__$1;(statearr_14228_14252[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 13))
{var inst_14199 = cljs.core.async.close_BANG_.call(null,out);var state_14210__$1 = state_14210;var statearr_14229_14253 = state_14210__$1;(statearr_14229_14253[2] = inst_14199);
(statearr_14229_14253[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 14))
{var inst_14196 = (state_14210[12]);var inst_14201 = cljs.core.apply.call(null,f,inst_14196);var state_14210__$1 = state_14210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14210__$1,16,out,inst_14201);
} else
{if((state_val_14211 === 15))
{var inst_14206 = (state_14210[2]);var state_14210__$1 = state_14210;var statearr_14230_14254 = state_14210__$1;(statearr_14230_14254[2] = inst_14206);
(statearr_14230_14254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14211 === 16))
{var inst_14203 = (state_14210[2]);var state_14210__$1 = (function (){var statearr_14231 = state_14210;(statearr_14231[13] = inst_14203);
return statearr_14231;
})();var statearr_14232_14255 = state_14210__$1;(statearr_14232_14255[2] = null);
(statearr_14232_14255[1] = 2);
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
var state_machine__5425__auto____0 = (function (){var statearr_14236 = (new Array(14));(statearr_14236[0] = state_machine__5425__auto__);
(statearr_14236[1] = 1);
return statearr_14236;
});
var state_machine__5425__auto____1 = (function (state_14210){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14237){if((e14237 instanceof Object))
{var ex__5428__auto__ = e14237;var statearr_14238_14256 = state_14210;(statearr_14238_14256[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14257 = state_14210;
state_14210 = G__14257;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14210){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14239 = f__5495__auto__.call(null);(statearr_14239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14240);
return statearr_14239;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14365 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14341){var state_val_14342 = (state_14341[1]);if((state_val_14342 === 1))
{var inst_14312 = cljs.core.vec.call(null,chs);var inst_14313 = inst_14312;var state_14341__$1 = (function (){var statearr_14343 = state_14341;(statearr_14343[7] = inst_14313);
return statearr_14343;
})();var statearr_14344_14366 = state_14341__$1;(statearr_14344_14366[2] = null);
(statearr_14344_14366[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 2))
{var inst_14313 = (state_14341[7]);var inst_14315 = cljs.core.count.call(null,inst_14313);var inst_14316 = (inst_14315 > 0);var state_14341__$1 = state_14341;if(cljs.core.truth_(inst_14316))
{var statearr_14345_14367 = state_14341__$1;(statearr_14345_14367[1] = 4);
} else
{var statearr_14346_14368 = state_14341__$1;(statearr_14346_14368[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 3))
{var inst_14339 = (state_14341[2]);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14341__$1,inst_14339);
} else
{if((state_val_14342 === 4))
{var inst_14313 = (state_14341[7]);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14341__$1,7,inst_14313);
} else
{if((state_val_14342 === 5))
{var inst_14335 = cljs.core.async.close_BANG_.call(null,out);var state_14341__$1 = state_14341;var statearr_14347_14369 = state_14341__$1;(statearr_14347_14369[2] = inst_14335);
(statearr_14347_14369[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 6))
{var inst_14337 = (state_14341[2]);var state_14341__$1 = state_14341;var statearr_14348_14370 = state_14341__$1;(statearr_14348_14370[2] = inst_14337);
(statearr_14348_14370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 7))
{var inst_14321 = (state_14341[8]);var inst_14320 = (state_14341[9]);var inst_14320__$1 = (state_14341[2]);var inst_14321__$1 = cljs.core.nth.call(null,inst_14320__$1,0,null);var inst_14322 = cljs.core.nth.call(null,inst_14320__$1,1,null);var inst_14323 = (inst_14321__$1 == null);var state_14341__$1 = (function (){var statearr_14349 = state_14341;(statearr_14349[8] = inst_14321__$1);
(statearr_14349[10] = inst_14322);
(statearr_14349[9] = inst_14320__$1);
return statearr_14349;
})();if(cljs.core.truth_(inst_14323))
{var statearr_14350_14371 = state_14341__$1;(statearr_14350_14371[1] = 8);
} else
{var statearr_14351_14372 = state_14341__$1;(statearr_14351_14372[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 8))
{var inst_14321 = (state_14341[8]);var inst_14322 = (state_14341[10]);var inst_14320 = (state_14341[9]);var inst_14313 = (state_14341[7]);var inst_14325 = (function (){var c = inst_14322;var v = inst_14321;var vec__14318 = inst_14320;var cs = inst_14313;return ((function (c,v,vec__14318,cs,inst_14321,inst_14322,inst_14320,inst_14313,state_val_14342){
return (function (p1__14258_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14258_SHARP_);
});
;})(c,v,vec__14318,cs,inst_14321,inst_14322,inst_14320,inst_14313,state_val_14342))
})();var inst_14326 = cljs.core.filterv.call(null,inst_14325,inst_14313);var inst_14313__$1 = inst_14326;var state_14341__$1 = (function (){var statearr_14352 = state_14341;(statearr_14352[7] = inst_14313__$1);
return statearr_14352;
})();var statearr_14353_14373 = state_14341__$1;(statearr_14353_14373[2] = null);
(statearr_14353_14373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 9))
{var inst_14321 = (state_14341[8]);var state_14341__$1 = state_14341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14341__$1,11,out,inst_14321);
} else
{if((state_val_14342 === 10))
{var inst_14333 = (state_14341[2]);var state_14341__$1 = state_14341;var statearr_14355_14374 = state_14341__$1;(statearr_14355_14374[2] = inst_14333);
(statearr_14355_14374[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14342 === 11))
{var inst_14313 = (state_14341[7]);var inst_14330 = (state_14341[2]);var tmp14354 = inst_14313;var inst_14313__$1 = tmp14354;var state_14341__$1 = (function (){var statearr_14356 = state_14341;(statearr_14356[11] = inst_14330);
(statearr_14356[7] = inst_14313__$1);
return statearr_14356;
})();var statearr_14357_14375 = state_14341__$1;(statearr_14357_14375[2] = null);
(statearr_14357_14375[1] = 2);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14361 = (new Array(12));(statearr_14361[0] = state_machine__5425__auto__);
(statearr_14361[1] = 1);
return statearr_14361;
});
var state_machine__5425__auto____1 = (function (state_14341){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14341);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14362){if((e14362 instanceof Object))
{var ex__5428__auto__ = e14362;var statearr_14363_14376 = state_14341;(statearr_14363_14376[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14362;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14377 = state_14341;
state_14341 = G__14377;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14341){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14364 = f__5495__auto__.call(null);(statearr_14364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14365);
return statearr_14364;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14447){var state_val_14448 = (state_14447[1]);if((state_val_14448 === 1))
{var inst_14424 = 0;var state_14447__$1 = (function (){var statearr_14449 = state_14447;(statearr_14449[7] = inst_14424);
return statearr_14449;
})();var statearr_14450_14471 = state_14447__$1;(statearr_14450_14471[2] = null);
(statearr_14450_14471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 2))
{var inst_14424 = (state_14447[7]);var inst_14426 = (inst_14424 < n);var state_14447__$1 = state_14447;if(cljs.core.truth_(inst_14426))
{var statearr_14451_14472 = state_14447__$1;(statearr_14451_14472[1] = 4);
} else
{var statearr_14452_14473 = state_14447__$1;(statearr_14452_14473[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 3))
{var inst_14444 = (state_14447[2]);var inst_14445 = cljs.core.async.close_BANG_.call(null,out);var state_14447__$1 = (function (){var statearr_14453 = state_14447;(statearr_14453[8] = inst_14444);
return statearr_14453;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14447__$1,inst_14445);
} else
{if((state_val_14448 === 4))
{var state_14447__$1 = state_14447;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14447__$1,7,ch);
} else
{if((state_val_14448 === 5))
{var state_14447__$1 = state_14447;var statearr_14454_14474 = state_14447__$1;(statearr_14454_14474[2] = null);
(statearr_14454_14474[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 6))
{var inst_14442 = (state_14447[2]);var state_14447__$1 = state_14447;var statearr_14455_14475 = state_14447__$1;(statearr_14455_14475[2] = inst_14442);
(statearr_14455_14475[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 7))
{var inst_14429 = (state_14447[9]);var inst_14429__$1 = (state_14447[2]);var inst_14430 = (inst_14429__$1 == null);var inst_14431 = cljs.core.not.call(null,inst_14430);var state_14447__$1 = (function (){var statearr_14456 = state_14447;(statearr_14456[9] = inst_14429__$1);
return statearr_14456;
})();if(inst_14431)
{var statearr_14457_14476 = state_14447__$1;(statearr_14457_14476[1] = 8);
} else
{var statearr_14458_14477 = state_14447__$1;(statearr_14458_14477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 8))
{var inst_14429 = (state_14447[9]);var state_14447__$1 = state_14447;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14447__$1,11,out,inst_14429);
} else
{if((state_val_14448 === 9))
{var state_14447__$1 = state_14447;var statearr_14459_14478 = state_14447__$1;(statearr_14459_14478[2] = null);
(statearr_14459_14478[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 10))
{var inst_14439 = (state_14447[2]);var state_14447__$1 = state_14447;var statearr_14460_14479 = state_14447__$1;(statearr_14460_14479[2] = inst_14439);
(statearr_14460_14479[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14448 === 11))
{var inst_14424 = (state_14447[7]);var inst_14434 = (state_14447[2]);var inst_14435 = (inst_14424 + 1);var inst_14424__$1 = inst_14435;var state_14447__$1 = (function (){var statearr_14461 = state_14447;(statearr_14461[10] = inst_14434);
(statearr_14461[7] = inst_14424__$1);
return statearr_14461;
})();var statearr_14462_14480 = state_14447__$1;(statearr_14462_14480[2] = null);
(statearr_14462_14480[1] = 2);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14466 = (new Array(11));(statearr_14466[0] = state_machine__5425__auto__);
(statearr_14466[1] = 1);
return statearr_14466;
});
var state_machine__5425__auto____1 = (function (state_14447){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14447);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14467){if((e14467 instanceof Object))
{var ex__5428__auto__ = e14467;var statearr_14468_14481 = state_14447;(statearr_14468_14481[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14447);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14482 = state_14447;
state_14447 = G__14482;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14447){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14469 = f__5495__auto__.call(null);(statearr_14469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14470);
return statearr_14469;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14579 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14554){var state_val_14555 = (state_14554[1]);if((state_val_14555 === 1))
{var inst_14531 = null;var state_14554__$1 = (function (){var statearr_14556 = state_14554;(statearr_14556[7] = inst_14531);
return statearr_14556;
})();var statearr_14557_14580 = state_14554__$1;(statearr_14557_14580[2] = null);
(statearr_14557_14580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 2))
{var state_14554__$1 = state_14554;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14554__$1,4,ch);
} else
{if((state_val_14555 === 3))
{var inst_14551 = (state_14554[2]);var inst_14552 = cljs.core.async.close_BANG_.call(null,out);var state_14554__$1 = (function (){var statearr_14558 = state_14554;(statearr_14558[8] = inst_14551);
return statearr_14558;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14554__$1,inst_14552);
} else
{if((state_val_14555 === 4))
{var inst_14534 = (state_14554[9]);var inst_14534__$1 = (state_14554[2]);var inst_14535 = (inst_14534__$1 == null);var inst_14536 = cljs.core.not.call(null,inst_14535);var state_14554__$1 = (function (){var statearr_14559 = state_14554;(statearr_14559[9] = inst_14534__$1);
return statearr_14559;
})();if(inst_14536)
{var statearr_14560_14581 = state_14554__$1;(statearr_14560_14581[1] = 5);
} else
{var statearr_14561_14582 = state_14554__$1;(statearr_14561_14582[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 5))
{var inst_14534 = (state_14554[9]);var inst_14531 = (state_14554[7]);var inst_14538 = cljs.core._EQ_.call(null,inst_14534,inst_14531);var state_14554__$1 = state_14554;if(inst_14538)
{var statearr_14562_14583 = state_14554__$1;(statearr_14562_14583[1] = 8);
} else
{var statearr_14563_14584 = state_14554__$1;(statearr_14563_14584[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 6))
{var state_14554__$1 = state_14554;var statearr_14565_14585 = state_14554__$1;(statearr_14565_14585[2] = null);
(statearr_14565_14585[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 7))
{var inst_14549 = (state_14554[2]);var state_14554__$1 = state_14554;var statearr_14566_14586 = state_14554__$1;(statearr_14566_14586[2] = inst_14549);
(statearr_14566_14586[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 8))
{var inst_14531 = (state_14554[7]);var tmp14564 = inst_14531;var inst_14531__$1 = tmp14564;var state_14554__$1 = (function (){var statearr_14567 = state_14554;(statearr_14567[7] = inst_14531__$1);
return statearr_14567;
})();var statearr_14568_14587 = state_14554__$1;(statearr_14568_14587[2] = null);
(statearr_14568_14587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 9))
{var inst_14534 = (state_14554[9]);var state_14554__$1 = state_14554;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14554__$1,11,out,inst_14534);
} else
{if((state_val_14555 === 10))
{var inst_14546 = (state_14554[2]);var state_14554__$1 = state_14554;var statearr_14569_14588 = state_14554__$1;(statearr_14569_14588[2] = inst_14546);
(statearr_14569_14588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14555 === 11))
{var inst_14534 = (state_14554[9]);var inst_14543 = (state_14554[2]);var inst_14531 = inst_14534;var state_14554__$1 = (function (){var statearr_14570 = state_14554;(statearr_14570[7] = inst_14531);
(statearr_14570[10] = inst_14543);
return statearr_14570;
})();var statearr_14571_14589 = state_14554__$1;(statearr_14571_14589[2] = null);
(statearr_14571_14589[1] = 2);
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
}
}
}
});return ((function (switch__5424__auto__){
return (function() {
var state_machine__5425__auto__ = null;
var state_machine__5425__auto____0 = (function (){var statearr_14575 = (new Array(11));(statearr_14575[0] = state_machine__5425__auto__);
(statearr_14575[1] = 1);
return statearr_14575;
});
var state_machine__5425__auto____1 = (function (state_14554){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14554);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14576){if((e14576 instanceof Object))
{var ex__5428__auto__ = e14576;var statearr_14577_14590 = state_14554;(statearr_14577_14590[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14554);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14576;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14591 = state_14554;
state_14554 = G__14591;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14554){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14578 = f__5495__auto__.call(null);(statearr_14578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14579);
return statearr_14578;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14726 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14696){var state_val_14697 = (state_14696[1]);if((state_val_14697 === 1))
{var inst_14659 = (new Array(n));var inst_14660 = inst_14659;var inst_14661 = 0;var state_14696__$1 = (function (){var statearr_14698 = state_14696;(statearr_14698[7] = inst_14660);
(statearr_14698[8] = inst_14661);
return statearr_14698;
})();var statearr_14699_14727 = state_14696__$1;(statearr_14699_14727[2] = null);
(statearr_14699_14727[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 2))
{var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14696__$1,4,ch);
} else
{if((state_val_14697 === 3))
{var inst_14694 = (state_14696[2]);var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14696__$1,inst_14694);
} else
{if((state_val_14697 === 4))
{var inst_14664 = (state_14696[9]);var inst_14664__$1 = (state_14696[2]);var inst_14665 = (inst_14664__$1 == null);var inst_14666 = cljs.core.not.call(null,inst_14665);var state_14696__$1 = (function (){var statearr_14700 = state_14696;(statearr_14700[9] = inst_14664__$1);
return statearr_14700;
})();if(inst_14666)
{var statearr_14701_14728 = state_14696__$1;(statearr_14701_14728[1] = 5);
} else
{var statearr_14702_14729 = state_14696__$1;(statearr_14702_14729[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 5))
{var inst_14660 = (state_14696[7]);var inst_14661 = (state_14696[8]);var inst_14669 = (state_14696[10]);var inst_14664 = (state_14696[9]);var inst_14668 = (inst_14660[inst_14661] = inst_14664);var inst_14669__$1 = (inst_14661 + 1);var inst_14670 = (inst_14669__$1 < n);var state_14696__$1 = (function (){var statearr_14703 = state_14696;(statearr_14703[11] = inst_14668);
(statearr_14703[10] = inst_14669__$1);
return statearr_14703;
})();if(cljs.core.truth_(inst_14670))
{var statearr_14704_14730 = state_14696__$1;(statearr_14704_14730[1] = 8);
} else
{var statearr_14705_14731 = state_14696__$1;(statearr_14705_14731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 6))
{var inst_14661 = (state_14696[8]);var inst_14682 = (inst_14661 > 0);var state_14696__$1 = state_14696;if(cljs.core.truth_(inst_14682))
{var statearr_14707_14732 = state_14696__$1;(statearr_14707_14732[1] = 12);
} else
{var statearr_14708_14733 = state_14696__$1;(statearr_14708_14733[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 7))
{var inst_14692 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14709_14734 = state_14696__$1;(statearr_14709_14734[2] = inst_14692);
(statearr_14709_14734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 8))
{var inst_14660 = (state_14696[7]);var inst_14669 = (state_14696[10]);var tmp14706 = inst_14660;var inst_14660__$1 = tmp14706;var inst_14661 = inst_14669;var state_14696__$1 = (function (){var statearr_14710 = state_14696;(statearr_14710[7] = inst_14660__$1);
(statearr_14710[8] = inst_14661);
return statearr_14710;
})();var statearr_14711_14735 = state_14696__$1;(statearr_14711_14735[2] = null);
(statearr_14711_14735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 9))
{var inst_14660 = (state_14696[7]);var inst_14674 = cljs.core.vec.call(null,inst_14660);var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14696__$1,11,out,inst_14674);
} else
{if((state_val_14697 === 10))
{var inst_14680 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14712_14736 = state_14696__$1;(statearr_14712_14736[2] = inst_14680);
(statearr_14712_14736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 11))
{var inst_14676 = (state_14696[2]);var inst_14677 = (new Array(n));var inst_14660 = inst_14677;var inst_14661 = 0;var state_14696__$1 = (function (){var statearr_14713 = state_14696;(statearr_14713[7] = inst_14660);
(statearr_14713[8] = inst_14661);
(statearr_14713[12] = inst_14676);
return statearr_14713;
})();var statearr_14714_14737 = state_14696__$1;(statearr_14714_14737[2] = null);
(statearr_14714_14737[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 12))
{var inst_14660 = (state_14696[7]);var inst_14684 = cljs.core.vec.call(null,inst_14660);var state_14696__$1 = state_14696;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14696__$1,15,out,inst_14684);
} else
{if((state_val_14697 === 13))
{var state_14696__$1 = state_14696;var statearr_14715_14738 = state_14696__$1;(statearr_14715_14738[2] = null);
(statearr_14715_14738[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 14))
{var inst_14689 = (state_14696[2]);var inst_14690 = cljs.core.async.close_BANG_.call(null,out);var state_14696__$1 = (function (){var statearr_14716 = state_14696;(statearr_14716[13] = inst_14689);
return statearr_14716;
})();var statearr_14717_14739 = state_14696__$1;(statearr_14717_14739[2] = inst_14690);
(statearr_14717_14739[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14697 === 15))
{var inst_14686 = (state_14696[2]);var state_14696__$1 = state_14696;var statearr_14718_14740 = state_14696__$1;(statearr_14718_14740[2] = inst_14686);
(statearr_14718_14740[1] = 14);
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
var state_machine__5425__auto____0 = (function (){var statearr_14722 = (new Array(14));(statearr_14722[0] = state_machine__5425__auto__);
(statearr_14722[1] = 1);
return statearr_14722;
});
var state_machine__5425__auto____1 = (function (state_14696){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14696);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14723){if((e14723 instanceof Object))
{var ex__5428__auto__ = e14723;var statearr_14724_14741 = state_14696;(statearr_14724_14741[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14696);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14723;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14742 = state_14696;
state_14696 = G__14742;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14696){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14725 = f__5495__auto__.call(null);(statearr_14725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14726);
return statearr_14725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5494__auto___14885 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5495__auto__ = (function (){var switch__5424__auto__ = (function (state_14855){var state_val_14856 = (state_14855[1]);if((state_val_14856 === 1))
{var inst_14814 = (new Array(0));var inst_14815 = inst_14814;var inst_14816 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14855__$1 = (function (){var statearr_14857 = state_14855;(statearr_14857[7] = inst_14816);
(statearr_14857[8] = inst_14815);
return statearr_14857;
})();var statearr_14858_14886 = state_14855__$1;(statearr_14858_14886[2] = null);
(statearr_14858_14886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 2))
{var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14855__$1,4,ch);
} else
{if((state_val_14856 === 3))
{var inst_14853 = (state_14855[2]);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14855__$1,inst_14853);
} else
{if((state_val_14856 === 4))
{var inst_14819 = (state_14855[9]);var inst_14819__$1 = (state_14855[2]);var inst_14820 = (inst_14819__$1 == null);var inst_14821 = cljs.core.not.call(null,inst_14820);var state_14855__$1 = (function (){var statearr_14859 = state_14855;(statearr_14859[9] = inst_14819__$1);
return statearr_14859;
})();if(inst_14821)
{var statearr_14860_14887 = state_14855__$1;(statearr_14860_14887[1] = 5);
} else
{var statearr_14861_14888 = state_14855__$1;(statearr_14861_14888[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 5))
{var inst_14816 = (state_14855[7]);var inst_14819 = (state_14855[9]);var inst_14823 = (state_14855[10]);var inst_14823__$1 = f.call(null,inst_14819);var inst_14824 = cljs.core._EQ_.call(null,inst_14823__$1,inst_14816);var inst_14825 = cljs.core.keyword_identical_QMARK_.call(null,inst_14816,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14826 = (inst_14824) || (inst_14825);var state_14855__$1 = (function (){var statearr_14862 = state_14855;(statearr_14862[10] = inst_14823__$1);
return statearr_14862;
})();if(cljs.core.truth_(inst_14826))
{var statearr_14863_14889 = state_14855__$1;(statearr_14863_14889[1] = 8);
} else
{var statearr_14864_14890 = state_14855__$1;(statearr_14864_14890[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 6))
{var inst_14815 = (state_14855[8]);var inst_14840 = inst_14815.length;var inst_14841 = (inst_14840 > 0);var state_14855__$1 = state_14855;if(cljs.core.truth_(inst_14841))
{var statearr_14866_14891 = state_14855__$1;(statearr_14866_14891[1] = 12);
} else
{var statearr_14867_14892 = state_14855__$1;(statearr_14867_14892[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 7))
{var inst_14851 = (state_14855[2]);var state_14855__$1 = state_14855;var statearr_14868_14893 = state_14855__$1;(statearr_14868_14893[2] = inst_14851);
(statearr_14868_14893[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 8))
{var inst_14815 = (state_14855[8]);var inst_14819 = (state_14855[9]);var inst_14823 = (state_14855[10]);var inst_14828 = inst_14815.push(inst_14819);var tmp14865 = inst_14815;var inst_14815__$1 = tmp14865;var inst_14816 = inst_14823;var state_14855__$1 = (function (){var statearr_14869 = state_14855;(statearr_14869[7] = inst_14816);
(statearr_14869[8] = inst_14815__$1);
(statearr_14869[11] = inst_14828);
return statearr_14869;
})();var statearr_14870_14894 = state_14855__$1;(statearr_14870_14894[2] = null);
(statearr_14870_14894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 9))
{var inst_14815 = (state_14855[8]);var inst_14831 = cljs.core.vec.call(null,inst_14815);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,11,out,inst_14831);
} else
{if((state_val_14856 === 10))
{var inst_14838 = (state_14855[2]);var state_14855__$1 = state_14855;var statearr_14871_14895 = state_14855__$1;(statearr_14871_14895[2] = inst_14838);
(statearr_14871_14895[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 11))
{var inst_14819 = (state_14855[9]);var inst_14823 = (state_14855[10]);var inst_14833 = (state_14855[2]);var inst_14834 = (new Array(0));var inst_14835 = inst_14834.push(inst_14819);var inst_14815 = inst_14834;var inst_14816 = inst_14823;var state_14855__$1 = (function (){var statearr_14872 = state_14855;(statearr_14872[7] = inst_14816);
(statearr_14872[8] = inst_14815);
(statearr_14872[12] = inst_14833);
(statearr_14872[13] = inst_14835);
return statearr_14872;
})();var statearr_14873_14896 = state_14855__$1;(statearr_14873_14896[2] = null);
(statearr_14873_14896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 12))
{var inst_14815 = (state_14855[8]);var inst_14843 = cljs.core.vec.call(null,inst_14815);var state_14855__$1 = state_14855;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14855__$1,15,out,inst_14843);
} else
{if((state_val_14856 === 13))
{var state_14855__$1 = state_14855;var statearr_14874_14897 = state_14855__$1;(statearr_14874_14897[2] = null);
(statearr_14874_14897[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 14))
{var inst_14848 = (state_14855[2]);var inst_14849 = cljs.core.async.close_BANG_.call(null,out);var state_14855__$1 = (function (){var statearr_14875 = state_14855;(statearr_14875[14] = inst_14848);
return statearr_14875;
})();var statearr_14876_14898 = state_14855__$1;(statearr_14876_14898[2] = inst_14849);
(statearr_14876_14898[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14856 === 15))
{var inst_14845 = (state_14855[2]);var state_14855__$1 = state_14855;var statearr_14877_14899 = state_14855__$1;(statearr_14877_14899[2] = inst_14845);
(statearr_14877_14899[1] = 14);
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
var state_machine__5425__auto____0 = (function (){var statearr_14881 = (new Array(15));(statearr_14881[0] = state_machine__5425__auto__);
(statearr_14881[1] = 1);
return statearr_14881;
});
var state_machine__5425__auto____1 = (function (state_14855){while(true){
var ret_value__5426__auto__ = (function (){try{while(true){
var result__5427__auto__ = switch__5424__auto__.call(null,state_14855);if(cljs.core.keyword_identical_QMARK_.call(null,result__5427__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5427__auto__;
}
break;
}
}catch (e14882){if((e14882 instanceof Object))
{var ex__5428__auto__ = e14882;var statearr_14883_14900 = state_14855;(statearr_14883_14900[5] = ex__5428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14855);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14882;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5426__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14901 = state_14855;
state_14855 = G__14901;
continue;
}
} else
{return ret_value__5426__auto__;
}
break;
}
});
state_machine__5425__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return state_machine__5425__auto____0.call(this);
case 1:
return state_machine__5425__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5425__auto____0;
state_machine__5425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5425__auto____1;
return state_machine__5425__auto__;
})()
;})(switch__5424__auto__))
})();var state__5496__auto__ = (function (){var statearr_14884 = f__5495__auto__.call(null);(statearr_14884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5494__auto___14885);
return statearr_14884;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5496__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map