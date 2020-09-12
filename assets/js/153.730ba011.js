(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{529:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("有时系统（"),t("code",[s._v("ubuntu20.04")]),s._v("）部分应用提示 502。")]),s._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),t("h3",{attrs:{id:"_1-初始状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始状态"}},[s._v("#")]),s._v(" 1. 初始状态")]),s._v(" "),t("p",[s._v("查看大小：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n\n              total        used        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("      shared  buff/cache   available\nMem:           15Gi       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".5Gi       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(".7Gi        14Mi       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".2Gi        11Gi\nSwap:         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0Gi          0B       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".0Gi\n")])])]),t("p",[s._v("查看位置：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" -s\n\nFilename                                Type            Size    Used    Priority\n/swap.img                               "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4194300")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       -2\n")])])]),t("h3",{attrs:{id:"_2-新增-swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-新增-swap"}},[s._v("#")]),s._v(" 2. 新增 swap")]),s._v(" "),t("p",[s._v("一般 swap 为内存的 1-1.5 倍。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dd")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("if")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/zero "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("of")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/swapfile "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bs")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1G "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\nll /sw*\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改文件权限")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 0600 /swapfile\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成 swap")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkswap")]),s._v(" -f /swapfile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\nll /sw*\n")])])]),t("h3",{attrs:{id:"_3-替换-swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-替换-swap"}},[s._v("#")]),s._v(" 3. 替换 swap")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭旧的")]),s._v("\nswapoff /swap.img\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用新的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("swapon")]),s._v(" /swapfile\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n")])])]),t("h3",{attrs:{id:"_4-开机启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-开机启动"}},[s._v("#")]),s._v(" 4. 开机启动")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/fstab /etc/fstab.bak\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将对应的 /swap.img 修改为 /swapfile")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/fstab\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f /swap.img "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认后删除旧 swap")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);