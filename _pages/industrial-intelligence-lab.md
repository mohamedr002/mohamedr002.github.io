---
layout: page
title: Industrial Intelligence Lab
permalink: /industrial-intelligence-lab/
description: From data to decisions on the factory floor. Foundation models, physics-informed deep learning, generative AI, and agentic systems for industrial assets.
nav: true
nav_order: 4
published: true # Flip to true (and set industrial_intelligence_lab_enabled: true in _config.yml) to launch the lab publicly.
---

<!-- Hero -->
<div class="lab-hero text-center mb-5">
  <p class="lead font-italic mb-2">{{ site.data.lab.tagline }}</p>
  <p class="text-muted">
    Led by <a href="/">Mohamed Ragab</a>, Senior Researcher at the
    <a href="https://www.tii.ae/" target="_blank" rel="noopener">Technology Innovation Institute (TII)</a>, UAE.
  </p>
</div>

<!-- Vision / Mission -->

## Vision

{{ site.data.lab.mission }}

We position ourselves alongside applied industrial-AI groups (e.g., the
[ZHAW Rieter Industrial AI Group](https://www.zhaw.ch/en/engineering/institutes-centres/cai/industrial-artificial-intelligence-group))
with a distinct angle: where they emphasize neuro-symbolic AI and learning-based
control, we focus on **foundation models, physics-informed deep learning,
generative AI, and agentic systems** for physical industrial assets.

<!-- Research Pillars -->

## Research Pillars

{% include lab_pillars.liquid %}

<!-- Current Projects -->

## Current Projects

Active and in-flight work under the lab umbrella. Each card links to the full
project page with publications, code, and deeper context.

<div class="projects mt-3">
  {% assign lab_projects = site.projects | where: "lab", true | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in lab_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

<!-- Roadmap -->

## Roadmap

{% include lab_roadmap.liquid %}

<!-- Team & Collaborators -->

## Team & Collaborators

**Lab Lead.** [{{ site.data.lab.team.lead.name }}]({{ site.data.lab.team.lead.url }}) — {{ site.data.lab.team.lead.role }}, {{ site.data.lab.team.lead.affiliation }}.

**Current members.**

<ul>
{% for member in site.data.lab.team.members %}
  <li><strong>{{ member.name }}</strong> — {{ member.role }}, {{ member.affiliation }}. <em>{{ member.topic }}</em></li>
{% endfor %}
</ul>

**Alumni.**

<ul>
{% for alum in site.data.lab.team.alumni %}
  <li>{{ alum }}</li>
{% endfor %}
</ul>

**Institutional partners.**

<ul>
{% for partner in site.data.lab.team.partners %}
  <li><a href="{{ partner.url }}" target="_blank" rel="noopener">{{ partner.name }}</a></li>
{% endfor %}
</ul>

---

Interested in collaborating, joining, or funding this work? Reach out via
[email](mailto:mohamed.ragab@tii.ae) or see [contact details](/).
