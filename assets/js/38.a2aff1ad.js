(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{412:function(e,a,r){"use strict";r.r(a);var t=r(27),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),r("blockquote",[r("p",[e._v("Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.")]),e._v(" "),r("p",[e._v("-- "),r("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[e._v("lerna"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("对于维护多个 "),r("code",[e._v("package")]),e._v(" 来说，都会遇到一个选择，是选择 "),r("code",[e._v("mono-repo")]),e._v(" 还是 "),r("code",[e._v("multi-repo")]),e._v("。"),r("code",[e._v("multi-repo")]),e._v(" 一个模块（module）一个仓库（repository），而 "),r("code",[e._v("mono-repo")]),e._v(" 是所有模块整合在一个仓库，"),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Monorepo",target:"_blank",rel:"noopener noreferrer"}},[e._v("语义来源"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("h2",{attrs:{id:"使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[e._v("#")]),e._v(" 使用")]),e._v(" "),r("p",[r("code",[e._v("lerna")]),e._v(" 初始化分为两种模式："),r("code",[e._v("fix")]),e._v("（默认，锁定模式，项目内的所有 package 共用版本号）、"),r("code",[e._v("independent")]),e._v("（独立模式，每个 "),r("code",[e._v("package")]),e._v(" 拥有独立版本号）。个人认为大部分情况下都应该使用独立模式，即每个 "),r("code",[e._v("package")]),e._v(" 都有自己的版本号。")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 安装")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i lerna -g\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# git")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" init lerna-repo "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" lerna-repo\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# lerna")]),e._v("\nlerna init "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--independent"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 生成下方文件夹")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#lerna-repo")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#├── lerna.json")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#├── package.json")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#└── packages")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 创建 packages")]),e._v("\nlerna create pkg-1 -y\nlerna create pkg-2 -y\n")])])]),r("h2",{attrs:{id:"依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#依赖"}},[e._v("#")]),e._v(" 依赖")]),e._v(" "),r("h3",{attrs:{id:"_1-工具依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-工具依赖"}},[e._v("#")]),e._v(" 1. 工具依赖")]),e._v(" "),r("p",[e._v("对于 "),r("code",[e._v("eslint")]),e._v("、"),r("code",[e._v("commit-lint")]),e._v(" 等工具依赖，可以直接使用 "),r("code",[e._v("yarn")]),e._v(" 或 "),r("code",[e._v("npm")]),e._v(" 安装到顶层。")]),e._v(" "),r("h3",{attrs:{id:"_2-package-依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-package-依赖"}},[e._v("#")]),e._v(" 2. package 依赖")]),e._v(" "),r("p",[e._v("针对 package 的依赖可以交由 "),r("code",[e._v("lerna")]),e._v(" 安装。")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("所有 packages")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("lerna "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" module1\n")])])])]),e._v(" "),r("li",[r("p",[e._v("单独 package")]),e._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[e._v("lerna "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" module1 packages/pkg-1\n")])])])])]),e._v(" "),r("h2",{attrs:{id:"更多命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更多命令"}},[e._v("#")]),e._v(" 更多命令")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/publish#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna publish")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/version#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna version")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/bootstrap#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna bootstrap")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/list#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna list")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/changed#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna changed")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/diff#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna diff")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/exec#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna exec")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/run#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna run")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/init#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna init")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/add#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna add")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/clean#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna clean")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/import#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna import")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/link#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna link")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/create#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna create")]),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/lerna/lerna/blob/master/commands/info#readme",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("lerna info")]),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);