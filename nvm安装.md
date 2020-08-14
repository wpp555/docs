# nvm安装使用
*2020-08-14*
## 1.nvm是什么
nvm是nodejs的版本管理工具，为什么要用nvm，你能百度到这篇文章相比是遇到不得不用的原因了，我们知道nodejs官方更新的速度非常快，有时候业务需要需要用某某版本，如果用的是msi安装，虽然安装的时候挺简单，但是后面就麻烦了，只要按照这个去配置，绝对没有问题，大家不要嫌麻烦，学会了以后能省去很过时间。


## 2.下载nvm
打开 [github下载地址](https://github.com/coreybutler/nvm-windows/releases)
本次使用安装版
```
nvm-noinstall.zip：绿色免安装版，但使用时需进行配置。
nvm-setup.zip：安装版，推荐使用
```
![dC7m3d.png](https://s1.ax1x.com/2020/08/14/dC7m3d.png)
## 3.安装
1.卸载原来nodejs，并删除相关文件夹

2.双击 `nvm-setup.exe` 

![dCHzO1.png](https://s1.ax1x.com/2020/08/14/dCHzO1.png)
![dCbFYD.png](https://s1.ax1x.com/2020/08/14/dCbFYD.png)

3.一直`next`直到安装完成，然后输入`nvm`，则如下显示，可以看到里面列出了各种命令，安装完成。

![dCqV4U.png](https://s1.ax1x.com/2020/08/14/dCqV4U.png)

4.`不用配置环境变量了`，安装的时候已经配置了`用户变量`和`系统变量`

![dCL8Ln.png](https://s1.ax1x.com/2020/08/14/dCL8Ln.png)
## 4.安装node
1.nvm可能需要科学上网，也可能是国外网址下载太慢，切换淘宝镜像
* 打开nvm安装目录下的`settings.txt`，最后一行换行添加
    ```
    node_mirror: https://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm
    ```
* 或者执行
    ```
    nvm node_mirror https://npm.taobao.org/mirrors/node/
    nvm npm_mirror https://npm.taobao.org/mirrors/npm/
    ```
![dCj3sH.png](https://s1.ax1x.com/2020/08/14/dCj3sH.png)

2.下载nodejs( 默认是64位，32位需指定)
```
nvm ls available        # 列出远程服务器上所有的可用版本
nvm install latest      # 最新稳定版
nvm install v12.14.0    # 下载其他指定版本
nvm ls                # 查看下载的所有版本
```
* 打开nvm文件夹发现多了两个文件夹
![dCvpmd.png](https://s1.ax1x.com/2020/08/14/dCvpmd.png)
* 命令行输入 `nvm ls`
![dCx7Px.png](https://s1.ax1x.com/2020/08/14/dCx7Px.png)
* 打开此时nodejs的属性，发现为快捷方式
![dCxs5q.png](https://s1.ax1x.com/2020/08/14/dCxs5q.png)

4.所需命令
```
nvm ls available        # 列出远程服务器上所有的可用版本
nvm install latest      # 最新稳定版
nvm install v12.14.0    # 下载其他指定版本
nvm ls                  # 查看下载的所有版本
nvm use 12.14.0         # 选择已下载版本
nvm uninstall v12.14.0  # 删除已安装的指定版本，语法与install类似
```
