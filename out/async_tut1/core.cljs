; I comment the hell out of code in a language/framework I'm new to
(ns async-tut1.core
  ; this is pulling in only the core.async macros that we need for the tutorial: go
  (:require-macros [ cljs.core.async.macros :refer [go] ])

  ; only pulling in google's dom and events functions
  (:require [goog.dom :as dom]
            [goog.events :as events]
            ; from core.async, only the functions we need:
            ; put!, which puts a value to a port
            ; chan, which creats a channel
            ; >!, nonblocking passing values to a port
            ; <!, nonblocking reading from a port
            [cljs.core.async :refer [ put! chan >! <! ] ])
  (:import [goog.net Jsonp]
           [goog Uri])
)


; angellist search
(def angellist-search-url "https://api.angel.co/1/search?query=")


; define our query url as the angellist search url
(defn query-url [q]
  (str angellist-search-url q))


; define our own "listen" function that takes an element, and a type
(defn listen [el type]
  ; let "out" be a newly-created channel
  (let [ out (chan) ]
    (events/listen el type                                        
                   (fn [event] (put! out event)))
    out)
)


; takes a uri, runs a request and makes a json request
(defn jsonp [uri]
  (let [out (chan) req (Jsonp. (Uri. uri)) ]
    (.send req nil (fn [res] (put! out res)))
    out)
)


; let "clicks" be a listen function on #search item on the event "click"
(let [clicks (listen (dom/getElement "search") "click")]
  ; 'go', a macro to async run the body, which locks values from the clicks c
  (go (while true
        (.log js/console (<! clicks))))
)

; function that returns the query of the user
(defn user-query []
  (.-value (dom/getElement "query")))



; renders the query results
(defn render-query [results]
  ; returns a string
  (str
    "<ul>"
    (apply str
      (for [result results]
        (str "<li> <a href='" (aget result "url") "'> <img src='" (aget result "pic") "' title='" (aget result "name") "'></a></li>")))
    "</ul>")
)


(defn init []
  ; let clicks be a listen channel on '#search' for 'click'
  (let [clicks (listen (dom/getElement "search") "click")
        ; and let results-view be the '#results' element
        results-view (dom/getElement "results")]
    ; set up our state machine that reads from the clicks channel
    (go (while true
          (<! clicks)
          ; let the results be a jsonp'd result of the query-url user-query
          (let [results (<! (jsonp (query-url (user-query))))]
            ; and tset the innerHTML of the results view to be the rendering of the query results
            (set! (.-innerHTML results-view) (render-query results))
            )))))

(init)
