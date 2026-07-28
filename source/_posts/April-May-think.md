---
title: April_May_think
date: 2026-05-17 17:51:50
tags:
    - writing
---

最近对policy这边的理解有了些更新，所谓vla is dead or not，甚至 wm is dead or not，都值得时间证明。wm的魅力还是在于能够很好的、自然的学习到dynamics知识，再把dynamics知识映射到动作，还是觉得这比vlm to a更自然。

越来越对真机实验感到有意思，你可以清晰的看到不同数据在真机上的效果。好的结果令人兴奋，但差的结果应当更令人兴奋，因为差意味着梯度，或者说，不同的结果才是有梯度的好结果。

human data（from community） 和 umi的实验结果（from my personal observation）也说明robotics数据又开始diverse了，这令人开心。很认同罗老师说的，现在的所谓pre-train其实是mid-train，全是真机expert数据不够diverse，信息量也不足以作为pretrain。真机数据作为mid-train的adapter也许已经够了。比如你应该在足够diverse的世界中学习到各种知识和能力，最后适应你的地球的真机躯体，再精调一下完成final mission。

未来各种各样的数据怎么用，什么是好数据什么是差数据，差数据为什么somehow对好数据影响那么严重，flow matching的机制……还有许多急需学习和可以解决的，long way to go。隐约觉得数据scaleup已经不能solve everything，甚至只能solve little things了，下一步怎么用好数据，数据背后意味着什么，很有趣。robotics需要自己的算法，不能是vlm+action head了，wm也是。