(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{509:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"生成-rsa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成-rsa"}},[s._v("#")]),s._v(" 生成 RSA")]),s._v(" "),t("p",[s._v("此处直接参考 "),t("a",{attrs:{href:"/os/linux/generate-ssh-key"}},[s._v("创建 SSH Key")]),s._v(" 。")]),s._v(" "),t("p",[s._v("将生成的公钥（"),t("code",[s._v("id_rsa_new.pub")]),s._v("）拷贝。")]),s._v(" "),t("h2",{attrs:{id:"开启-rsa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-rsa"}},[s._v("#")]),s._v(" 开启 RSA")]),s._v(" "),t("h3",{attrs:{id:"_1-登录服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-登录服务器"}},[s._v("#")]),s._v(" 1. 登录服务器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xxx.xxx.xxx.xxx 为你的 ip 地址")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@xxx.xxx.xxx.xxx\n")])])]),t("h3",{attrs:{id:"_2-拷贝公钥到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-拷贝公钥到服务器"}},[s._v("#")]),s._v(" 2. 拷贝公钥到服务器")]),s._v(" "),t("p",[s._v("注意事项：若需要其余用户登录，则需要在该用户下创建该文件，root 下的该文件将不会生效。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑服务器认证 keys")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若保存失败则需要先创建该文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ～/.ssh/authorized_keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确认保存")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ～/.ssh/authorized_keys\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内容为： ssh-rsa……")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更好的形式是利用 ssh-copy-id 直接推送")]),s._v("\nssh-copy-id -i id_rsa_name.pub root@ip\n")])])]),t("h3",{attrs:{id:"_3-编辑-ssh-配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-编辑-ssh-配置文件"}},[s._v("#")]),s._v(" 3. 编辑 SSH 配置文件")]),s._v(" "),t("p",[t("strong",[s._v("启用公钥认证")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 normal 模式下输入 “/” 进入查找模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用以下三项")]),s._v("\nRSAAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# RSA认证")]),s._v("\nPubkeyAuthentication "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥认证")]),s._v("\nAuthorizedKeysFile .ssh/authorized_keys  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥认证文件路径")]),s._v("\n")])])]),t("p",[t("strong",[s._v("重启 sshd 服务")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或")]),s._v("\nsystemctl restart sshd\n")])])]),t("p",[t("strong",[s._v("测试公钥登录")])]),s._v(" "),t("p",[s._v("在测试前先跳转至第四步完成本地配置。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" aliyun\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 得到结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Welcome to Alibaba Cloud Elastic Compute Service !")]),s._v("\n")])])]),t("p",[t("strong",[s._v("拒绝密码登录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 normal 模式下输入 “/” 进入查找模式")]),s._v("\nPasswordAuthentication no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 密码认证")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再执行上方的 重启 sshd 服务")]),s._v("\n")])])]),t("p",[t("strong",[s._v("测试密码登录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" root@xxx.xxx.xxx.xxx\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root@xxx.xxx.xxx.xxx: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).")]),s._v("\n")])])]),t("p",[t("strong",[s._v("拒绝 root 用户登录")])]),s._v(" "),t("p",[s._v("在使用该项时，先完成 "),t("a",{attrs:{href:"/os/linux/user"}},[s._v("增加用户")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 normal 模式下输入 “/” 进入查找模式")]),s._v("\nPermitRootLogin no "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止 root 登录")]),s._v("\nAllowUsers shanyuhai "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许登录的用户")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再执行上方的 重启 sshd 服务")]),s._v("\n")])])]),t("p",[t("strong",[s._v("测试 root 用户登录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" aliyun\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root@47.112.26.219: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 4.快速访问服务器 的 User 为 User shanyuhai")]),s._v("\n")])])]),t("h2",{attrs:{id:"设置文件权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置文件权限"}},[s._v("#")]),s._v(" 设置文件权限")]),s._v(" "),t("p",[s._v("关于 "),t("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Chmod",target:"_blank",rel:"noopener noreferrer"}},[s._v("chmod"),t("OutboundLink")],1),s._v("，对文件设置权限可以很好的保护系统。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" ~/.ssh/authorized_keys "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),s._v(" ~/.ssh/\n")])])]),t("h2",{attrs:{id:"快速访问服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速访问服务器"}},[s._v("#")]),s._v(" 快速访问服务器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑 config 文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.ssh/config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在 config 文件末尾追加内容")]),s._v("\nHost aliyun                  \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个便于你区别这是哪台机器的名字")]),s._v("\n    HostName xxx.xxx.xxx.xxx  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 目的机器的ip")]),s._v("\n    User root         \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh登陆时候的用户名")]),s._v("\n    Port "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("               \t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh所使用的端口，默认是22")]),s._v("\n    IdentityFile /home/yuan/.ssh/id_rsa_new    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对应服务器公钥的本地私钥文件路径")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);