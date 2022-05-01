qsqsa = (a, b) => {
    return document.querySelector(a).querySelectorAll(b);
};
tabButton = () => {
    let a = qsqsa('tab', 'button');
    let post = qsqsa('tab', ".post");
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
            postFun(i, "block");
            addCls(i);
        });
    });
    addCls(0);
    postFun(0, "block");
};

// if tab is here then work it
if (document.querySelector('tab').nodeName == 'TAB') {
    tabButton();
};