FIS 组件平台建设
=============================

fis 组件安装可以支持 github、gitlab 和 lights 三种。

相信大家都比较关心私有组件平台如何搭建。

首先请先了解一下 fis install 目标组件时，是以什么的一种规则去定位的（[详情请看这](https://github.com/fis-components/components/blob/master/install.md#component-%E8%B7%AF%E5%BE%84%E8%AF%B4%E6%98%8E)）, 掌握之后你会发现，给当前项目里面的 component.json 加上 `protocol` 属性就能改变 fis 安装的平台了。

