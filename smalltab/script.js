qsqsa = (a, b, c) => {
    return document.querySelector(a).querySelector(b).querySelectorAll(c);
};
tabButton = () => {
    let a = qsqsa('tab', '.nav', "button");
    let post = qsqsa('tab', '.body', ".post");
    postFun = (a, b) => {
        return post[a].style.display = b;
    }
    let addCls = (b) => {
        return a[b].classList.add('active-tab');
    };
    a.forEach((e, i) => {
        postFun(i, "none");
        a[i].addEventListener('click', () => {
            // reset class list in class
            a.forEach((e, i) => {
                a[i].classList.remove('active-tab');
                postFun(i, "none");
            });
            // Add class list in class
            postFun(i, "grid");
            addCls(i);
        });
    });
    addCls(0);
    postFun(0, "grid");
};

// if tab is here then work it
if (document.querySelector('tab').nodeName == 'TAB') {
    tabButton();
};