class HTAnalytics extends HTMLElement {
  connectedCallback() {
    const key = this.getAttribute("key");
    let script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${key}`;
    script.async = true;
    document.getElementsByTagName("head")[0].appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", key);
  }
}
customElements.define("ht-analytics", HTAnalytics);
