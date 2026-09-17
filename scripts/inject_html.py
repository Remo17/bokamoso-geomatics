import os
import re
from bs4 import BeautifulSoup

css_content = """
<style>
    .bk-form-container, .bk-expertise-container, .bk-project-grid {
        width: 100%;
        max-width: 600px;
        margin: 40px auto;
        padding: 40px;
        background-color: #f7f7f7;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        font-family: "Inter Variable", sans-serif;
    }
    .bk-project-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 20px;
        max-width: 800px;
    }
    .bk-form-container h3, .bk-expertise-title {
        margin-top: 0;
        margin-bottom: 24px;
        font-family: "Cabinet Grotesk Variable", sans-serif;
        font-size: 24px;
        color: #1a1a1a;
    }
    .bk-form-group {
        margin-bottom: 20px;
    }
    .bk-form-group label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 14px;
        color: #4a4a4a;
    }
    .bk-form-group input, .bk-form-group textarea, .bk-form-group select {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
        font-family: "Inter Variable", sans-serif;
        box-sizing: border-box;
    }
    .bk-form-group textarea {
        min-height: 120px;
        resize: vertical;
    }
    .bk-submit-btn {
        background-color: #1a1a1a;
        color: #ffffff;
        border: none;
        padding: 14px 24px;
        font-size: 16px;
        font-weight: 600;
        border-radius: 4px;
        cursor: pointer;
        min-height: 48px;
        min-width: 48px;
    }
    .bk-expertise-list li {
        margin-bottom: 12px;
        font-size: 16px;
        line-height: 1.5;
        color: #4a4a4a;
    }
    .bk-project-card {
        display: block;
        padding: 20px;
        background-color: #fff;
        border: 1px solid #eee;
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        transition: box-shadow 0.2s ease;
        min-height: 48px;
        min-width: 48px;
    }
    .bk-project-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .bk-project-category {
        font-size: 14px;
        color: #666;
        margin-bottom: 8px;
        font-weight: 500;
    }
    .bk-project-title {
        font-size: 18px;
        color: #1a1a1a;
        margin: 0;
    }
    a[href^="tel:"], a[href^="mailto:"], button {
        min-width: 48px;
        min-height: 48px;
        display: inline-block;
    }
    @media (min-width: 768px) {
        .bk-project-grid {
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width: 375px) {
        .bk-form-container, .bk-expertise-container, .bk-project-grid {
            padding: 20px;
            margin: 20px auto;
        }
    }
</style>
"""

target_files = {
    "public/contact/index.html": """
                <div class="bk-form-container">
                    <h3>Contact Information</h3>
                    <p><strong>Head Office:</strong> Regus Business Park, 214 Beyers Naude Dr, Rustenburg, 0299</p>
                    <p><strong>Satellite Office:</strong> Stand 152, Phatsima Township, Rustenburg, 0351</p>
                    <p><strong>Phone:</strong> <a href="tel:0615027201">061 502 7201</a>, <a href="tel:0765346929">076 534 6929</a></p>
                    <p><strong>Email:</strong> <a href="mailto:kerengsenna@gmail.com">kerengsenna@gmail.com</a></p>
                    <h3>Send us a message</h3>
                    <form action="#" method="POST">
                        <div class="bk-form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit" class="bk-submit-btn">Send Message</button>
                    </form>
                </div>
""",
    "public/expertise/index.html": """
                <div class="bk-expertise-container">
                    <h3 class="bk-expertise-title">Technical Competence & Credentials</h3>
                    <ul class="bk-expertise-list">
                        <li><strong>SAGC Compliance:</strong> Fully registered Professional Land Surveyors conforming to the highest ethical and technical standards of the South African Geomatics Council.</li>
                        <li><strong>GNSS/RTK Surveying:</strong> Utilisation of dual-frequency GNSS rover equipment for cm-level accurate coordinate positioning and rapid topographic mapping.</li>
                        <li><strong>Total Station Traverse:</strong> Rigorous traverse network calculations, precise optical setting out, and engineering benchmarks.</li>
                        <li><strong>Cadastral Demarcation:</strong> Lawful boundary identification, peg relocation, and drafting of SG diagrams/general plans for lodgement with the Surveyor-General.</li>
                        <li><strong>Drone Photogrammetry:</strong> Aerial surveying providing high-resolution orthomosaics and digital elevation models (DEM) for volume calculations.</li>
                        <li><strong>Spatial GIS Management:</strong> Advanced geographic database creation, spatial manipulation, and asset mapping using modern GIS software.</li>
                    </ul>
                </div>
""",
    "public/projects/index.html": """
                <div class="bk-project-grid">
                    <a href="/projects/topographic-survey-—-kanana-estate" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Topographic Survey</div>
                            <h3 class="bk-project-title">Topographic Survey — Kanana Estate</h3>
                        </div>
                    </a>
                    <a href="/projects/township-establishment-ikageleng-township" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Township Establishment</div>
                            <h3 class="bk-project-title">Township Establishment: Ikageleng Township</h3>
                        </div>
                    </a>
                    <a href="/projects/subdivision-of-a-farm-343-it" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Cadastral Survey</div>
                            <h3 class="bk-project-title">Subdivision of a Farm 343 IT</h3>
                        </div>
                    </a>
                    <a href="/projects/topographic-survey-township-establishment-mogwase" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Topographic Survey</div>
                            <h3 class="bk-project-title">Topographic Survey & Township Establishment: Mogwase</h3>
                        </div>
                    </a>
                    <a href="/projects/topographic-survey-makouspan" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Topographic Survey</div>
                            <h3 class="bk-project-title">Topographic Survey: Makouspan</h3>
                        </div>
                    </a>
                    <a href="/projects/beacon-relocation-erf-20478" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Cadastral Survey</div>
                            <h3 class="bk-project-title">Beacon Relocation Erf 20478</h3>
                        </div>
                    </a>
                    <a href="/projects/consolidation-subdivision-of-various-municipal-erven" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Cadastral Survey</div>
                            <h3 class="bk-project-title">Consolidation & Subdivision of Various Municipal Erven</h3>
                        </div>
                    </a>
                    <a href="/projects/subdivision-of-various-municipal-erven" class="bk-project-card">
                        <div>
                            <div class="bk-project-category">Cadastral Survey</div>
                            <h3 class="bk-project-title">Subdivision of Various Municipal Erven</h3>
                        </div>
                    </a>
                </div>
""",
    "public/request-a-quote/index.html": """
                <div class="bk-form-container">
                    <h3>Request a Quote</h3>
                    <form action="#" method="POST">
                        <div class="bk-form-group">
                            <label for="name">Full Name / Company</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="survey-type">Survey Type</label>
                            <select id="survey-type" name="survey-type" required>
                                <option value="">Select a survey type</option>
                                <option value="topographic">Topographic Survey</option>
                                <option value="cadastral">Cadastral Survey</option>
                                <option value="engineering">Engineering Survey</option>
                                <option value="gis">GIS</option>
                                <option value="town-planning">Town Planning</option>
                            </select>
                        </div>
                        <div class="bk-form-group">
                            <label for="location">Project Location (Address or Coordinates)</label>
                            <input type="text" id="location" name="location" required />
                        </div>
                        <div class="bk-form-group">
                            <label for="details">Project Details</label>
                            <textarea id="details" name="details" required></textarea>
                        </div>
                        <button type="submit" class="bk-submit-btn">Submit Request</button>
                    </form>
                </div>
"""
}

def inject():
    for root, dirs, files in os.walk('public'):
        for file in files:
            if file == 'index.html':
                filepath = os.path.join(root, file)
                # Ensure OS compatibility by normalizing path string for matching
                normalized_filepath = filepath.replace('\\', '/')

                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Cleanup previous run's old logic
                script_pattern = re.compile(r"<script>\s*window\.addEventListener\('load', function\(\)\s*\{[\s\S]*?\}\);\s*</script>", re.IGNORECASE)
                content = script_pattern.sub("", content)

                soup = BeautifulSoup(content, 'lxml')

                # Check head for css
                head = soup.find('head')
                if head and ".bk-form-container" not in str(head):
                    new_css_soup = BeautifulSoup(css_content, 'html.parser')
                    head.append(new_css_soup)

                if normalized_filepath in target_files:
                    # Clear out the direct static HTML inside framer-cwupne
                    target_div = soup.find('div', class_='framer-cwupne')
                    if target_div:
                        target_div.clear()

                        custom_content = target_files[normalized_filepath].replace('`', '\\`').replace('\n', '')
                        script_content = f"""
<script id="bk-guard-script">
  (function() {{
    const customContent = `{custom_content}`;
    const enforceContent = () => {{
      const target = document.querySelector('.framer-cwupne');
      if (target && !target.querySelector('.bk-form-container, .bk-project-grid, .bk-expertise-card, .bk-expertise-container')) {{
        target.innerHTML = customContent;
      }}
    }};
    // Run immediately
    enforceContent();
    // Guard against React hydration wipes
    const observer = new MutationObserver(enforceContent);
    observer.observe(document.body, {{ childList: true, subtree: true }});
  }})();
</script>"""

                        body = soup.find('body')
                        if body:
                            # Cleanup existing observer script to be idempotent
                            existing_script = body.find('script', id='bk-guard-script')
                            if existing_script:
                                existing_script.decompose()

                            # Also clean up the previously duplicated scripts that lacked ID
                            for old_script in body.find_all('script'):
                                if old_script.string and "MutationObserver" in old_script.string and "enforceContent" in old_script.string:
                                    old_script.decompose()

                            script_soup = BeautifulSoup(script_content, 'html.parser')
                            body.append(script_soup)
                            print(f"Injected Observer script into {filepath}")

                content = str(soup)
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)

if __name__ == '__main__':
    inject()
