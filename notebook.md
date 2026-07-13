---
layout: default
title: Notebook
---

# 📓 Independent Research Notebook

这里记录我的独立研究思考、读书笔记和未发表的想法。所有内容均为个人观点，欢迎讨论。

---

## 全部笔记

<ul class="post-list">
{% for post in site.posts %}
    <li>
        <span class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </span>
        <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
{% endfor %}
</ul>

{% if site.posts.size == 0 %}
<p style="color: #999;">还没有笔记，敬请期待...</p>
{% endif %}