---
title: "Reservior sampling algorithm"
date: 2024-10-07
tags: [algorithm]
---

蓄水池采样算法用于在未知大小的数据集中以等概率抽取 k 个样本。

初次使用这个算法 是在我给 `kvrocks` 社区提交的 [#2032pr](https://github.com/apache/kvrocks/pull/2032) 中。

算法如下：
数据大小 `n` 未知
1. 选择前 `k` 个元素。
2. 对于第 `j (j > k)` 个元素，以 $\frac{k}{j}$ 的概率保留，并且随机替换前 `k` 个元素中的一个


数学证明：

在处理第 `j (j > k)` 个元素时，前 `k` 个中的元素被替换的概率$ p = \frac{k}{j} * \frac{1}{k} $，则被保留的概率是$ 1 - \frac{1}{j} = \frac{j-1}{j} $。在处理完 `n` 个元素之后，元素被保留概率是 

$$ 
\frac{k}{k+1}  * \frac{k+1}{k+2} * ... * \frac{n-1}{n} = \frac{k}{n}   
$$