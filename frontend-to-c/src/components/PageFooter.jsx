import React from 'react';

function PageFooter(props) {
    return (
        <>
            <p className="links">
                <span className="linkItem">友情链接：</span>
                <a
                    href="https://developer.mozilla.org/zh-CN/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    MDN
                </a>
                <a
                    href="https://juejin.cn/"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    稀土掘金
                </a>
                <a
                    href="https://zh-hans.react.dev/learn"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    React
                </a>
                <a
                    href="https://developers.google.cn/?hl=zh-cn"
                    target="_blank"
                    rel="noreferrer"
                    className="linkItem"
                >
                    Google for Developers
                </a>
            </p>
            <p>© 2024 - Coder Station</p>
            <p>Powered by Create React App</p>
        </>
    );
}

export default PageFooter;