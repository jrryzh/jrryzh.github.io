---
title: VLA 思考 & PI 红杉播客
date: 2026-01-12 23:58:45
tags:
    - writing
---

好久没写东西了，理清下思路。写一下现阶段对VLA的看法，以及关于PI上周和红杉录制的播客记一点想法。

VLM-based VLA有什么缺陷吗？我不知道。当最初VLA在几个小task上不work时，我质疑过；但当看到随着数据scaleup后开始出现越来越多的somehow泛化的行为后，我感觉如果后撤一步看过去，假如large scale data&training下众生平等的话，VLM-based VLA似乎确实是一个说得过去的载体。For the concept of VLA，V是embodiment运动的condition，somehow必须存在；A是必要的输出；那么L呢，是为人而存在的，无论是交互还是未来的可解释性，似乎L都是很好的载体。这里L的传入复杂度似乎是一个未定的问题，但是为了做到和人类的复杂指令和自身规划需求角度讲，VLM似乎都是目前为这两个需求存在的好东西；同时浪漫的想，如果action能够follow我的语言所表达的意思（比如快慢，细粒度的要求等），似乎都需要VLM目前的功能。所以结论可能是VLM-based model没错，错的是还没找到最好的用法。同时Video model和VLM-based VLA到底是否在底层存在互补性，还需要补充更多paper的结论和思考，至少现阶段通过观察IDM的work程度，video prediction作为VLM-based VLA的补充监督应该是没问题的。

下面快速记录下播客感兴趣的内容。首先似乎PI06已经遇到单纯收集正常数据的性能瓶颈期了，所以他们开始尝试更好的学习策略和收集方法，也提到了finetune时候数据选择对最终表现的巨大改变。另外一个很重要的事，尽管翻译有误（“部署”和“投放”差距还是挺大的），但是意识到确实一旦有算法可以第一个真正部署甚至投放（真实现实场景，意味着diverse），飞轮会一下指数级加速转动，彻底拉开停在前一阶段的那些算法性能。另外也提到了他们对video model的快速迭代感到的惊讶。另外提到一个小例子，人在打网球时是不会考虑具体如何pick move and swing的，而是“think in motions”，我个人感觉是"think high-level",那么是否要么该指导我们设计模型架构，要么最终模型会类似包含这些知识。