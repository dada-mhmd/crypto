(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{188:function(e,t,c){},296:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(33),s=c.n(n),i=(c(188),c(40)),r=c(23),l=c(299),o=c(301),j=c(308),d=c(6),h=c(305),b=c(177),u=c(307),O=c(309),x=c(310),p=c(311),m=c(312),v=c(313),g=c.p+"static/media/cryptocurrency.1548aced.png",y=c(2),f=function(){var e=Object(a.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(void 0),r=Object(d.a)(s,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){var e=function(){return j(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){n(!(l<=800))}),[l]),Object(y.jsxs)("div",{className:"nav-container",children:[Object(y.jsxs)("div",{className:"logo-container",children:[Object(y.jsx)(h.a,{src:g,size:"large"}),Object(y.jsx)(o.a.Title,{level:2,className:"logo",children:Object(y.jsx)(i.b,{to:"/",children:"Cryptoverse"})}),Object(y.jsx)(b.a,{className:"menu-control-container",onClick:function(){return n(!c)},children:Object(y.jsx)(O.a,{})})]}),c&&Object(y.jsxs)(u.a,{theme:"dark",children:[Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(x.a,{}),children:Object(y.jsx)(i.b,{to:"/",children:"Home"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(p.a,{}),children:Object(y.jsx)(i.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(m.a,{}),children:Object(y.jsx)(i.b,{to:"/exchanges",children:"Exchanges"})}),Object(y.jsx)(u.a.Item,{icon:Object(y.jsx)(v.a,{}),children:Object(y.jsx)(i.b,{to:"/news",children:"News"})})]})]})},N=c(37),w=c.n(N),C=c(92),k=c(58),S=c(302),T=c(123),P=c(48),E={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"f884b6de58msh0ce6fc0a5668e45p119799jsn16ec29381aae"},q=function(e){return{url:e,headers:E}},I=Object(T.a)({reducerPath:"cryptoApi",baseQuery:Object(P.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return q("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return q("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return q("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return q("coin/".concat(t,"/history/").concat(c))}})}}}),A=I.useGetCryptosQuery,F=I.useGetCryptoDetailsQuery,M=I.useGetExchangesQuery,D=I.useGetCryptoHistoryQuery,L=c(304),U=c(300),V=function(e){var t=e.simplified,c=A(t?10:200),n=c.data,s=c.isFetching,r=Object(a.useState)([]),l=Object(d.a)(r,2),o=l[0],j=l[1],h=Object(a.useState)(""),b=Object(d.a)(h,2),u=b[0],O=b[1];return Object(a.useEffect)((function(){var e,t=null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));j(t)}),[n,u]),s?"Loading...":Object(y.jsxs)(y.Fragment,{children:[!t&&Object(y.jsx)("div",{className:"search-crypto",children:Object(y.jsx)(L.a,{type:"text",placeholder:"Search Crypto Currency",onChange:function(e){return O(e.target.value)}})}),Object(y.jsx)(C.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(y.jsx)(k.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(y.jsx)(i.b,{to:"/crypto/".concat(e.id),children:Object(y.jsxs)(U.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(y.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:"crypto"}),hoverable:!0,children:[Object(y.jsxs)("p",{children:["Price: ",w()(e.price)]}),Object(y.jsxs)("p",{children:["Market Cap: ",w()(e.marketCap)]}),Object(y.jsxs)("p",{children:["Daily Change: ",w()(e.change),"%"]})]})})},e.id)}))})]})},Q=c(303),$=c(170),G=c.n($),H={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"f884b6de58msh0ce6fc0a5668e45p119799jsn16ec29381aae"},z=Object(T.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(P.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:H}}})}}}),R=z.useGetCryptoNewsQuery,W=c(298),J=function(){return Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)(W.a,{})})},Z="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",_=o.a.Text,B=o.a.Title,K=Q.a.Option,X=function(e){var t,c,n=e.simplified,s=Object(a.useState)("Cryptocurrency"),i=Object(d.a)(s,2),r=i[0],l=i[1],o=A(100).data,j=R({newsCategory:r,count:n?6:12}).data;return(null===j||void 0===j?void 0:j.value)?Object(y.jsxs)(C.a,{gutter:[24,24],children:[!n&&Object(y.jsx)(k.a,{span:24,children:Object(y.jsxs)(Q.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return l(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(y.jsx)(K,{value:"Cryptocurency",children:"Cryptocurrency"}),null===o||void 0===o||null===(t=o.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e){return Object(y.jsx)(K,{value:e.name,children:e.name})}))]})}),j.value.map((function(e,t){var c,a,n,s,i,r;return Object(y.jsx)(k.a,{xs:24,sm:12,lg:8,children:Object(y.jsx)(U.a,{hoverable:!0,className:"news-card",children:Object(y.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(y.jsxs)("div",{className:"news-image-container",children:[Object(y.jsx)(B,{className:"news-title",level:4,children:e.name}),Object(y.jsx)("img",{src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||Z,alt:""})]}),Object(y.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(y.jsxs)("div",{className:"provider-container",children:[Object(y.jsxs)("div",{children:[Object(y.jsx)(h.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||Z,alt:""}),Object(y.jsx)(_,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(y.jsx)(_,{children:G()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(y.jsx)(J,{})},Y=o.a.Title,ee=function(){var e,t=A(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return console.log(c),a?Object(y.jsx)(J,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Y,{level:2,className:"heading",children:"Global Crypto Stats"}),Object(y.jsxs)(C.a,{gutter:[32,32],children:[Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Exchanges",value:w()(n.totalExchanges)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Market Cap:",value:w()(n.totalMarketCap)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total 24h Volume",value:w()(n.total24hVolume)})}),Object(y.jsx)(k.a,{span:12,children:Object(y.jsx)(S.a,{title:"Total Markets",value:w()(n.totalMarkets)})})]}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(Y,{level:2,className:"home-title",children:"Top 10 Cryptos In The World"}),Object(y.jsx)(Y,{level:3,className:"show-more",children:Object(y.jsx)(i.b,{to:"/cryptocurrencies",children:"Show more"})})]}),Object(y.jsx)(V,{simplified:!0}),Object(y.jsxs)("div",{className:"home-heading-container",children:[Object(y.jsx)(Y,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(y.jsx)(Y,{level:3,children:Object(y.jsx)(i.b,{to:"/news",children:"Show more"})})]}),Object(y.jsx)(X,{simplified:!0})]})},te=c(306),ce=c(126),ae=o.a.Text,ne=te.a.Panel,se=function(){var e,t=M(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(y.jsx)(J,{}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(C.a,{children:[Object(y.jsx)(k.a,{span:6,children:"Exchanges"}),Object(y.jsx)(k.a,{span:6,children:"24h Trade Volume"}),Object(y.jsx)(k.a,{span:6,children:"Markets"}),Object(y.jsx)(k.a,{span:6,children:"Change"})]}),Object(y.jsx)(C.a,{children:n.map((function(e){return Object(y.jsx)(k.a,{span:24,children:Object(y.jsx)(te.a,{children:Object(y.jsx)(ne,{showArrow:!1,header:Object(y.jsxs)(C.a,{children:[Object(y.jsxs)(k.a,{span:6,children:[Object(y.jsx)(ae,{children:Object(y.jsxs)("strong",{children:[e.rank,"."]})}),Object(y.jsx)(h.a,{className:"exchange-image",src:e.iconUrl}),Object(y.jsx)(ae,{children:Object(y.jsx)("strong",{children:e.name})})]}),Object(y.jsxs)(k.a,{span:6,children:["$",w()(e.volume)]}),Object(y.jsx)(k.a,{span:6,children:w()(e.numberOfMarkets)}),Object(y.jsxs)(k.a,{span:6,children:[w()(e.marketShare),"%"]})]},e.id),children:Object(ce.a)(e.description||"")},e.id)})})}))})]})},ie=c(314),re=c(315),le=c(316),oe=c(317),je=c(128),de=c(318),he=c(181),be=c(178),ue=o.a.Title,Oe=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o,j;s.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[r].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;i.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var O={labels:i,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(C.a,{className:"chart-header",children:[Object(y.jsxs)(ue,{level:2,className:"chart-title",children:[n," Price Chart"]}),Object(y.jsxs)(k.a,{className:"price-container",children:[Object(y.jsxs)(ue,{level:5,className:"price-change",children:["Change: ",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(y.jsxs)(ue,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})]}),Object(y.jsx)(be.a,{data:O,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},xe=o.a.Title,pe=o.a.Text,me=Q.a.Option,ve=function(){var e,t,c,n,s=Object(r.g)().coinId,i=Object(a.useState)("7d"),l=Object(d.a)(i,2),o=l[0],j=l[1],h=F(s),b=h.data,u=h.isFetching,O=D({coinId:s,timeperiod:o}).data,x=null===b||void 0===b||null===(e=b.data)||void 0===e?void 0:e.coin;if(u)return Object(y.jsx)(J,{});var v=[{title:"Price to USD",value:"$ ".concat(x.price&&w()(x.price)),icon:Object(y.jsx)(ie.a,{})},{title:"Rank",value:x.rank,icon:Object(y.jsx)(re.a,{})},{title:"24h Volume",value:"$ ".concat(x.volume&&w()(x.volume)),icon:Object(y.jsx)(le.a,{})},{title:"Market Cap",value:"$ ".concat(x.marketCap&&w()(x.marketCap)),icon:Object(y.jsx)(ie.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(w()(x.allTimeHigh.price)),icon:Object(y.jsx)(oe.a,{})}],g=[{title:"Number Of Markets",value:x.numberOfMarkets,icon:Object(y.jsx)(p.a,{})},{title:"Number Of Exchanges",value:x.numberOfExchanges,icon:Object(y.jsx)(m.a,{})},{title:"Aprroved Supply",value:x.approvedSupply?Object(y.jsx)(je.a,{}):Object(y.jsx)(de.a,{}),icon:Object(y.jsx)(he.a,{})},{title:"Total Supply",value:"$ ".concat(w()(x.totalSupply)),icon:Object(y.jsx)(he.a,{})},{title:"Circulating Supply",value:"$ ".concat(w()(x.circulatingSupply)),icon:Object(y.jsx)(he.a,{})}];return Object(y.jsxs)(k.a,{className:"coin-detail-container",children:[Object(y.jsxs)(k.a,{className:"coin-heading-container",children:[Object(y.jsxs)(xe,{level:2,className:"coin-name",children:[null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.coin.name," (",null===b||void 0===b||null===(c=b.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(y.jsxs)("p",{children:[x.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(y.jsx)(Q.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return j(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(y.jsx)(me,{children:e},e)}))}),Object(y.jsx)(Oe,{coinHistory:O,currentPrice:w()(x.price),coinName:x.name}),Object(y.jsxs)(k.a,{className:"stats-container",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(y.jsxs)(xe,{level:3,className:"coin-details-heading",children:[x.name," Value Statistics"]}),Object(y.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),v.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(y.jsxs)(k.a,{className:"coin-stats",children:[Object(y.jsxs)(k.a,{className:"coin-stats-name",children:[Object(y.jsx)(pe,{children:t}),Object(y.jsx)(pe,{children:c})]}),Object(y.jsx)(pe,{className:"stats",children:a})]})}))]}),Object(y.jsxs)(k.a,{className:"other-stats-info",children:[Object(y.jsxs)(k.a,{className:"coin-value-statistics-heading",children:[Object(y.jsx)(xe,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(y.jsxs)("p",{children:["An overview showing the statistics of ",x.name,", such as the base and quote currency, the rank, and trading volume."]})]}),g.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(y.jsxs)(k.a,{className:"coin-stats",children:[Object(y.jsxs)(k.a,{className:"coin-stats-name",children:[Object(y.jsx)(pe,{children:t}),Object(y.jsx)(pe,{children:c})]}),Object(y.jsx)(pe,{className:"stats",children:a})]})}))]})]}),Object(y.jsxs)(k.a,{className:"coin-desc-link",children:[Object(y.jsxs)(C.a,{className:"coin-desc",children:[Object(y.jsxs)(xe,{level:3,className:"coin-details-heading",children:["What is ",x.name,"?"]}),Object(ce.a)(x.description)]}),Object(y.jsxs)(k.a,{className:"coin-links",children:[Object(y.jsxs)(xe,{level:3,className:"coin-details-heading",children:[x.name," Links"]}),null===(n=x.links)||void 0===n?void 0:n.map((function(e){return Object(y.jsxs)(C.a,{className:"coin-link",children:[Object(y.jsx)(xe,{level:5,className:"link-name",children:e.type}),Object(y.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})};var ge,ye=function(){return Object(y.jsx)(i.a,{children:Object(y.jsxs)("div",{className:"app",children:[Object(y.jsx)("div",{className:"navbar",children:Object(y.jsx)(f,{})}),Object(y.jsxs)("div",{className:"main",children:[Object(y.jsx)(l.a,{children:Object(y.jsx)("div",{className:"routes",children:Object(y.jsxs)(r.c,{children:[Object(y.jsx)(r.a,{path:"/",element:Object(y.jsx)(ee,{})}),Object(y.jsx)(r.a,{path:"/exchanges",element:Object(y.jsx)(se,{})}),Object(y.jsx)(r.a,{path:"/cryptocurrencies",element:Object(y.jsx)(V,{})}),Object(y.jsx)(r.a,{path:"/crypto/:coinId",element:Object(y.jsx)(ve,{})}),Object(y.jsx)(r.a,{path:"/news",element:Object(y.jsx)(X,{})})]})})}),Object(y.jsxs)("div",{className:"footer",children:[Object(y.jsxs)(o.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Crypto ",Object(y.jsx)("br",{}),"All rights reserved"]}),Object(y.jsxs)(j.b,{children:[Object(y.jsx)(i.b,{to:"/",children:"Home"}),Object(y.jsx)(i.b,{to:"/exchanges",children:"Exchanges"}),Object(y.jsx)(i.b,{to:"/news",children:"News"})]})]})]})]})})},fe=(c(295),c(46)),Ne=c(7),we=c(14),Ce=Object(we.a)({reducer:(ge={},Object(Ne.a)(ge,I.reducerPath,I.reducer),Object(Ne.a)(ge,z.reducerPath,z.reducer),ge)});s.a.render(Object(y.jsx)(fe.a,{store:Ce,children:Object(y.jsx)(ye,{})}),document.getElementById("root"))}},[[296,1,2]]]);
//# sourceMappingURL=main.b00973f3.chunk.js.map