class HTAnalytics extends HTMLElement {
    connectedCallback() {
        const key = this.getAttribute('key');
        let gtag = window.createElement("script");
        gtag.src = `https://www.googletagmanager.com/gtag/js?id=${key}`;
        gtag.async = true;
        document.getElementsByTagName('head')[0].appendChild(gtag);
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', key);
    }
}
customElements.define('ht-analytics', HTAnalytics);