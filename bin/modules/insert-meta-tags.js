module.exports = (dom, data) => {
  let head = dom.querySelector("head");
  head.appendChild(el(dom, "meta", {"chartset": "utf-8"}));

  if (!dom.querySelector("meta[name=viewport]")) {
    head.appendChild(el(dom, "meta", {"name": "viewport", "content": "width=device-width, initial-scale=1"}));
  }
  head.appendChild(el(dom, "meta", {"http-equiv": "X-UA-Compatible", "content": "IE=Edge,chrome=1"}));
  head.appendChild(el(dom, "link", {"rel": "icon", "type": "image/png", "href": "/favicon.png"}));
  head.appendChild(el(dom, "link", {"href": "/rss.xml", "rel": "alternate", "type": "application/rss+xml", "title": "Articles from Distill"}));

  head.appendChild(el(dom, "title", data.title));
  head.appendChild(el(dom, "link", {"rel": "canonical", "href": data.url}));

  // <meta name="author" content="Carter, et al.">

  // <!--  https://schema.org/Article -->
  // <meta property="article:published" itemprop="datePublished" content="Tue Dec 06 2016 20:39:33 GMT-0800 (PST)" />
  // <meta property="article:modified" itemprop="dateModified" content="Tue Dec 06 2016 20:39:33 GMT-0800 (PST)" />
  // <meta property="article:author" content="Shan Carter" />
  // <meta property="article:author" content="David Ha" />
  // <meta property="article:author" content="Ian Johnson" />
  // <meta property="article:author" content="Chris Olah" />

  // <!--  https://developers.facebook.com/docs/sharing/webmasters#markup -->
  // <meta property="og:type" content="article"/>
  // <meta property="og:title" content="Experiments in Handwriting with a Neural Network"/>
  // <meta property="og:description" content="Several interactive visualizations of a generative model of handwriting. Some are fun, some are serious.">
  // <meta property="og:url" content="http://distill.pub/2016/handwriting/"/>
  // <meta property="og:image" content="http://distill.pub/2016/handwriting/thumbnail.png"/>

  // <!--  https://dev.twitter.com/cards/types/summary -->
  // <meta name="twitter:card" value="summary_large_image">
  // <meta name="twitter:title" content="Experiments in Handwriting with a Neural Network">
  // <meta name="twitter:description" content="Several interactive visualizations of a generative model of handwriting. Some are fun, some are serious.">
  // <meta name="twitter:url" content="http://distill.pub/2016/handwriting/">
  // <meta name="twitter:image" content="http://distill.pub/2016/handwriting/thumbnail.png">
  // <meta name="twitter:image:width" content="560">
  // <meta name="twitter:image:height" content="295">

  // <!--  https://scholar.google.com/intl/en/scholar/inclusion.html#indexing -->
  // <meta name="citation_title" content="Experiments in Handwriting with a Neural Network">
  // <meta name="citation_author" content="Carter, Shan">
  // <meta name="citation_author" content="Ha, David">
  // <meta name="citation_author" content="Johnson, Ian">
  // <meta name="citation_author" content="Olah, Chris">
  // <meta name="citation_publication_date" content="2016/12/06">
  // <meta name="citation_journal_title" content="Distill">

  //
  //
  // // <meta name="citation_title" content="Experiments in Handwriting with a Neural Network">
  head.appendChild(el(dom, "meta", {name: "citation_title", content: data.title});
  // // <meta name="citation_author" content="Carter, Shan">
  // // <meta name="citation_author" content="Ha, David">
  // // ...
  // data.authors.forEach(author => {
  //   var author_name = author.lastName + ", " + author.firstName;
  //   appendMeta({name: "citation_author", content: author_name});
  // });
  // // <meta name="citation_publication_date" content="2016/12/06">
  // var date = new Date(data.firstPublished);
  // var date_string = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();
  // appendMeta({name: "citation_publication_date", content: date_string});
  // // <meta name="citation_journal_title" content="Distill">
  // appendMeta({name: "citation_journal_title", content: data.journal.full_title});
  // appendMeta({name: "citation_volume", content: data.volume});
  // appendMeta({name: "citation_issue", content: data.issue});
  head.appendChild(el(dom, "meta", {name: "citation_fulltext_html_url", content: data.url});
  // // TODO: Get DOI and ISSN
  // appendMeta({name: "citation_doi", content: data.doi});
  // appendMeta({name: "citation_issn", content: data.journal.issn});


  return dom;
}

function el(dom, tag, attributes) {
  let element = dom.createElement(tag);
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key]);
  });
  return element;
}
//
// function appendMeta(params){
//   head.appendChild(el(dom, "meta", params));
// }