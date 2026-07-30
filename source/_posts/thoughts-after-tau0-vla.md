---
title: Thoughts after Tau0-VLA
date: 2026-07-30 20:23:54
tags:
    - writing
    - robotics
---

我们在 7 月 27 日发布了 τ0-VLA，并将它命名为 **A Hierarchical Robot Foundation Model with World-Model-Guided Test-Time Computation**。

![τ0-VLA system overview](/assets/images/publications/tau0-vla-teaser.webp)

<!-- more -->

## 一个分层的 VLA 系统

在这个系统中，我们将决策和执行分别拆分为 High-level Policy 和 Low-level Policy。

### High-level Policy

High-level Policy 包含几个相互配合的模块：

- Proposal model 根据当前 observation 预测合理的 subtask；
- World model 被设计为 subtask-conditioned，能够针对不同 subtask 进行单步或链式的视觉 outcome 预测——链式预测正是它很有意思的地方；
- Value model 对预测结果进行判断。

在此基础上，我们可以对不同 path 进行多层 visual thinking 和 search，最后再由 reflect model 对保留的结果进行反思与修正，得到最终决策。

### Low-level Policy

Low-level Policy 使用统一的 40-dimensional state/action space，同时支持：

- 单臂与双臂；
- 关节角与末端执行器位姿；
- 夹爪、头部、腰部与移动底盘。

不同本体都可以映射到这个统一表示中，再用对应的 mask 控制监督维度。这使我们能够融合 UMI、rollout data、闭源和开源数据，最终使用超过四万小时的机器人数据进行训练。

至此，我们拥有了一个能够维护执行记忆、预见视觉后果、反思决策，并控制双臂与移动底盘完成长程任务的 VLA 系统。基于这个系统，我们在房间清洁、番茄炒蛋、制作奶茶等持续数分钟的长程复杂任务，以及跨本体任务上取得了较好的表现。具体视频可以在 project website 中观看。

我们的论文、代码和模型权重目前均已开放，欢迎大家交流和使用：

- [Project website](https://tau0-vla.github.io/)
- [Paper](https://tau0-vla.github.io/tau0-vla.pdf)
- [Code](https://github.com/sii-research/tau-0-vla)
- [Model weights](https://huggingface.co/sii-research/tau-0-vla)

## 参与完整个项目后的一些想法

介绍完我们的工作，我想记录一些自己从项目开始到发布一直参与下来后，留下的想法和问题。

### 为什么需要 High-level / Low-level Policy？

我依然认为，从 language 到 action 的 mapping 本身是有歧义的。

*Make me coffee* 和 *Use your right arm to grasp the cup*，前者显然是一个需要拆解的复杂指令，后者则相对明确。For a robot，这两种指令不加区分地参与训练也许可以接受，但不加区分地 inference 一定会产生问题。

反过来，从 action 到 language 的 mapping 也同样存在歧义：一个 approaching cup 的 action chunk，可以对应各种各样的 instruction。

基于这些原因，我们认为目前将决策与动作拆开，用 language——更具体地说，用 subtask instruction——作为 interface，是一个可以接受的方案。但 language 有好处也有坏处：是否还存在更 low-level、更 high-frequency 的 interface，感觉仍然值得探索。

### 如何理解 Pre-training 和 Post-training？

Pre-training 和 post-training 中分别还有很多有意思的问题。

对 VLA 来说，pre-training 更多是在解决如何将 VL pre-training 与 A 更好地 mapping。差的 pre-training 可以拟合 action distribution，却可能丢掉 meaningful 的 VL pre-training；好的 pre-training 应该尽可能自然地把 A 加入 VL pre-training。

用一句不完全准确、但能表达大致意思的话来说，就是：**make A another language**。

目前 action token、bridging language-action data，都是对这个问题的探索。但除此之外，仍然有很多问题需要解决：pre-training 可以接受什么程度的 error？哪些 error 会成为 bias？哪些 V / L / A 数据更适合 pre-training？

For post-training，high-quality data matters。有些数据能够用更少的条数，很神奇地达到更好的效果。同时，post-training 暂时仍有存在的必要，因为你也没法让一个人去完成一个从未见过的技能。那么，如何更高效、更优雅地 post-train？

Pre-training 和 post-training 的真正边界似乎也并不明确。或者像一位非常优秀的朋友曾经问我的：action 的 pre-training 是否已经算 post-training？It's still an open question.

### 具身智能是一个系统性问题

具身智能显然是系统性问题，基建很重要。没有好的基础设施，模型很难在各种 error 中高效地学习到智能，errors 会 bound 住最终效果。

**Embodied Intelligence is learned from and tested on robotics.**

有时算法和模型可以看作从 data 到 performance 的映射，不过好的算法同样重要，哈哈。模型真正走进物理世界，需要算法、数据、系统与硬件之间大量细节的共同支撑。Everything counts; everything relates.

但我们仍然需要找到合适的 scope：not solve everything at once，而是把这些问题逐个解决好。

## 之后

还有很多问题，没法一下子列清楚。随着这个项目的进行，外面的工作也层出不穷。给我最大的感受是，大家从最开始绝大部分都在走 VLM → VLA，逐渐开始加入自己的理解，diverge into different paths。

τ0-VLA 之后，也希望有机会把这些问题和 sense 大量投回实验，进一步理解和探索 robotic science and physical intelligence。
