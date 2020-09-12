(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{417:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"起始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起始"}},[t._v("#")]),t._v(" 起始")]),t._v(" "),a("p",[t._v("搭建私有 NPM 的方案有几个，此处选取 "),a("a",{attrs:{href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Verdaccio"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"尝试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尝试"}},[t._v("#")]),t._v(" 尝试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全局安装")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i verdaccio -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用")]),t._v("\nverdaccio\n")])])]),a("p",[t._v("接着在 "),a("code",[t._v("4873")]),t._v(" 端口就可以看到它的页面。")]),t._v(" "),a("h2",{attrs:{id:"持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[t._v("#")]),t._v(" 持久化")]),t._v(" "),a("p",[t._v("可利用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/pm2",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm2"),a("OutboundLink")],1),t._v(" 使 "),a("code",[t._v("verdaccio")]),t._v(" 维持在后台且开机启动服务。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先全局安装 pm2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i pm2 -g\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pm2 启动 verdaccio")]),t._v("\npm2 start verdaccio\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存现有 pm2 数据")]),t._v("\npm2 save\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置开机启动")]),t._v("\npm2 startup\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 ubuntu 下会生成一段提示")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据提示执行指令即可")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启服务器验证")]),t._v("\npm2 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 还可以在 systemd 中查看状态")]),t._v("\nsystemctl status pm2-shanyuhai.service\n")])])]),a("p",[t._v("当然可能更好的选择是使用 "),a("code",[t._v("docker")]),t._v("，"),a("code",[t._v("verdaccio")]),t._v(" 为我们提供了其使用方式。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("其使用如 "),a("code",[t._v("npm")]),t._v(" 一般，利用 "),a("code",[t._v("npm adduser --registry http://localhost:4873")]),t._v(" 即可以注册用户了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://verdaccio.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v(" 上有更多的细节可以查看。")])]),t._v(" "),a("h3",{attrs:{id:"_1-帐号限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-帐号限制"}},[t._v("#")]),t._v(" 1. 帐号限制")]),t._v(" "),a("p",[t._v("作为私有 npm 服务，一般拒绝自行添加用户，一般由管理员分配帐号。")]),t._v(" "),a("p",[t._v("可设置 "),a("code",[t._v("config.yaml")]),t._v(" 中的 "),a("code",[t._v("max_users: -1")]),t._v(" 来禁用 "),a("code",[t._v("npm adduser")]),t._v(" 指令，并使用 "),a("a",{attrs:{href:"https://www.npmjs.com/package/verdaccio-htpasswd",target:"_blank",rel:"noopener noreferrer"}},[t._v("verdaccio-htpasswd"),a("OutboundLink")],1),t._v(" 来替代。")]),t._v(" "),a("h3",{attrs:{id:"_2-config-文件说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-config-文件说明"}},[t._v("#")]),t._v(" 2. config 文件说明")]),t._v(" "),a("p",[a("code",[t._v("verdaccio")]),t._v(" 配置文件在 "),a("code",[t._v("~/.config/verdaccio")]),t._v(" 目录下。")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is the default config file. It allows all users to do anything,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# so don't use it on production systems.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Look here for more config file examples:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https://github.com/verdaccio/verdaccio/tree/master/conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# path to a directory with all packages")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 发布的 npm 包的存放路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./storage\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# path to a directory with plugins to include")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用的插件路径")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("plugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./plugins\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 web 界面")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Verdaccio\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# comment out to disable gravatar support")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gravatar: false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# by default packages are ordercer ascendant (asc|desc)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sort_packages: asc")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# convert your UI to the dark side")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# darkMode: true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# translate your registry, api i18n not available yet")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i18n:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# list of the available translations https://github.com/verdaccio/ui/tree/master/i18n/translations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   web: en-US")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 用户验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("htpasswd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ./htpasswd\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Maximum amount of users allowed to register, defaults to "+inf".')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can set this to -1 to disable registration.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max_users: 1000")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# a list of other known repositories we can talk to")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 未找到 npm 包时寻找的地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uplinks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("npmjs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//registry.npmjs.org/\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 npm 包权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("packages")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'@*/*'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# scoped packages")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可访问权限")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $all "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $all 表示所有人")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可发布权限")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# $authenticated 表示只有通过验证的人")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可取消发布权限")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unpublish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 包不存在时的代理")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npmjs\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("'**'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# allow all users (including non-authenticated users) to read and")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# publish all packages")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# you can specify usernames/groupnames (depending on your auth plugin)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# and three keywords: "$all", "$anonymous", "$authenticated"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("access")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $all\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# allow all known users to publish/publish packages")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (anyone can register by default, remember?)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("unpublish")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $authenticated\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# if package is not available locally, proxy requests to 'npmjs' registry")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" npmjs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You can specify HTTP/1.1 server keep alive timeout in seconds for incoming connections.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# A value of 0 makes the http server behave similarly to Node.js versions prior to 8.0.0, which did not have a keep-alive timeout.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WORKAROUND: Through given configuration you can workaround following issue https://github.com/verdaccio/verdaccio/issues/301. Set to 0 in case 60 is not enough.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keepAliveTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("middlewares")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("audit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log settings")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("logs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stdout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#- {type: file, path: verdaccio.log, level: info}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#experiments:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  # support for npm token command")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  token: false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  # support for the new v1 search endpoint, functional by incomplete read more on ticket 1732")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  search: false")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This affect the web and api (not developed yet)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#i18n:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#web: en-US")]),t._v("\n")])])]),a("p",[t._v("更新配置后：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("verdaccio -c config.yaml\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);