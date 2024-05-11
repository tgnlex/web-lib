const sanitizeDoc = (str, nodes) => {
    // parse doc from string
    const stringToHTML = () => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(str, 'text/html')
        return doc.body || document.createElement('body');
    }

    const deleteJS = (html) => {
        let scripts = html.querySelectorAll('script');
        for (let script of scripts) {
            script.remove();
        }
    }
    const checkDanger = (name, value) => {
        let v = value.replace(/\s+/g, '').toLowerCase();
        if (['src', 'href', 'xlink:href'].includes(name)) {
          if (v.includes('javascript:') || v.includes('data:')) return true;
        }   
        if (name.startsWith('on')) return true;
    }
    const deleteDanger = (elem) => {
        let attrs = elem.attributes;
        for (let {name, value} of attr) {
            if (!checkDanger (name, value)) continue;
            elem.removeAttribute(name)
        }
    }
    const sanitize = (html) => {
        let nodes = html.children;
        for (let node of nodes) {
            deleteDanger(node);
            sanitize(node);
        }
    }

    let html = stringToHTML()
    deleteJS(html);
    sanitize(html);

    return nodes ? html.childNodes : html.innerHTML;
}