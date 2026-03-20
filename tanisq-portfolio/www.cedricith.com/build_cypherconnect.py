import re

file_path = "cypherconnect.html"
with open(file_path, "r", encoding="utf-8") as f:
    html = f.read()

# 1. Project Overview
html = html.replace('class="h1-project-page">AI<br/>Agency<br/>Platform</h1>', 'class="h1-project-page">CypherConnect</h1>')
html = html.replace('<title>AI Agency Platform Design</title>', '<title>CypherConnect - Product Design</title>')

old_desc = "End-to-end UX/UI design for an AI-powered website creation platform, focusing on seamless user onboarding, prompt-based generation, and an intuitive dashboard interface for full customization."
new_desc = "A community-driven platform enabling underground artists to discover opportunities, collaborate, and grow through a seamless digital experience."
html = html.replace(old_desc, new_desc)

html = html.replace('../assets/images/AI Agency HD .png', '../assets/images/Cypherconnect%20HD%20.png')
html = html.replace('../assets/images/AI%20Agency%20HD%20.png', '../assets/images/Cypherconnect%20HD%20.png')

# 2. Problem & 3. Solution
problem_pattern = r'(<h2 class="proj-subhead">Problem</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">).*?(</div></div></div></div></main>)'
new_problem_text = '<p>Underground artists often struggle to find the right platforms to showcase their talent, discover open mic opportunities, and collaborate with like-minded creators. Existing platforms are fragmented and lack a focused ecosystem for niche communities like hip-hop, ghazal, and independent artists.</p>'

solution_html = '''
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Solution</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext"><p>CypherConnect provides a unified platform where artists can explore open mic events, connect with collaborators, and showcase their work. The platform leverages community and intelligent matching to help artists grow faster and build meaningful connections.</p></div></div></div></div></main>
'''
html = re.sub(problem_pattern, r'\g<1>' + new_problem_text + r'\g<2>\n' + solution_html, html, flags=re.DOTALL)

# 4. Research
research_pattern = r'(<h2 class="proj-subhead">Research</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">).*?(</div></div></div></div></main>)'
new_research_text = '''<ul role="list">
<li>Users: underground artists, performers, creators</li>
<li>Key needs: discovery, collaboration, exposure</li>
<li>Pain points: lack of visibility, scattered platforms, no community</li>
</ul>'''
html = re.sub(research_pattern, r'\g<1>' + new_research_text + r'\g<2>', html, flags=re.DOTALL)

# 5. User Flow
uf_pattern = r'(<h2 class="proj-subhead">User Flow</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">).*?(</div></div></div></div></main>)'
new_uf_text = '''<ul role="list">
<li>User lands on platform</li>
<li>Explores artists/events</li>
<li>Joins community / signs up</li>
<li>Connects or collaborates</li>
<li>Participates in open mic</li>
</ul>'''
html = re.sub(uf_pattern, r'\g<1>' + new_uf_text + r'\g<2>', html, flags=re.DOTALL)

# 6. Low-Fidelity Wireframes
html = html.replace('<h2 class="proj-subhead">Wireframes</h2>', '<h2 class="proj-subhead">Low-Fidelity Wireframes</h2>')

# 7. High-Fidelity Screens
hf_pattern = r'(<h2 class="proj-subhead">High-Fidelity Screens</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">).*?(</div></div></div></div></main>)'
new_hf_text = '<p>Final high-fidelity designs were crafted to translate wireframes into a polished, production-ready interface focused on discovery, engagement, and seamless collaboration.</p>'
html = re.sub(hf_pattern, r'\g<1>' + new_hf_text + r'\g<2>', html, flags=re.DOTALL)

# 8. Design System & Typography
ds_pattern = r'(<h2 class="proj-subhead">Design System &amp; Typography</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">).*?(</div></div></div></div></main>)'
new_ds_text = '<p>A vibrant yet balanced design system was created to reflect the energy of underground music culture while maintaining clarity and usability.</p>'
html = re.sub(ds_pattern, r'\g<1>' + new_ds_text + r'\g<2>', html, flags=re.DOTALL)

# 9. OUTCOME / IMPACT
outcome_html = '''
<main class="full-height-text"><div class="proj-copy-contain w-container"><div class="proj-col w-row"><div class="w-col w-col-3"><h2 class="proj-subhead">Outcome</h2></div><div class="w-col w-col-9"><div class="rich-text w-richtext">
<ul role="list" style="margin-left: 0; padding-left: 20px;">
<li style="margin-bottom: 10px;">Improved artist discovery experience</li>
<li style="margin-bottom: 10px;">Stronger community engagement</li>
<li style="margin-bottom: 10px;">Clear collaboration pathways</li>
<li style="margin-bottom: 10px;">Scalable platform structure</li>
</ul>
</div></div></div></div></main>
'''
ds_img_pattern = r'(<div class="full-width-img" style="[^\"]+"><img src="\.\./assets/images/design%20system\.png".*?</div>)'
html = re.sub(ds_img_pattern, r'\g<1>\n' + outcome_html, html, flags=re.DOTALL)

# Next Project section
# In CypherConnect, we point next project to AI Agency maybe, or back to Carepods (which doesn't exist yet but user has it setup). Since they only asked to make Cypherconnect, I'll update it to point to AI Agency.
html = html.replace('NEXT PROJECT</div><div class="h1-project-page next">CypherConnect</div>', 'NEXT PROJECT</div><div class="h1-project-page next">AI Agency</div>')
html = html.replace('../assets/images/Cypherconnect%20HD%20.png" class="next-img"', '../assets/images/AI%20Agency%20HD%20.png" class="next-img"')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(html)
print("Done writing cypherconnect.html")
