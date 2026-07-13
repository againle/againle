---
layout: default
title: Notebook
permalink: /notebook/
---

# 📓 Independent Research Notebook

This is my personal space for research notes, reading summaries, and unfiltered ideas. All views are my own.

---

## All Posts

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
<p style="color: #7a7a7a;">No posts yet. Stay tuned...</p>
{% endif %}