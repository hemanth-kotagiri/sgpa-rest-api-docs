import{d as s}from"./app.288d9a66.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="new-all-regular-endpoint" tabindex="-1"><a class="header-anchor" href="#new-all-regular-endpoint" aria-hidden="true">#</a> New-All-Regular-Endpoint</h1><p>Endpoint to Fetch all regular results links.</p><p><code>GET /new/all/regular</code></p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ol><li>Go here:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://results-restapi.up.railway.app/new/all/regular
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Copy and paste this url in a new tab:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://results-restapi.up.railway.app/new/all/regular
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>You would obtain a sample response as such:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B.Tech I Year II Semester (R18) Regular Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;16-DEC-2021&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1503&amp;etype=r17&amp;type=intgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1503&amp;etype=r17&amp;type=intgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1503&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;intgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B.Tech III Year II Semester (R18) Regular Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;09-DEC-2021&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1502&amp;etype=r17&amp;type=intgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1502&amp;etype=r17&amp;type=intgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1502&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;intgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;B.Tech II Year II Semester (R18) Regular Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18-NOV-2021&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1501&amp;etype=r17&amp;type=intgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1501&amp;etype=r17&amp;type=intgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1501&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;intgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RC/RV B.Tech I Year I Semester (R18) Regular Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;26-SEP-2021&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1467&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1467&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1467&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gradercrv&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rcrvintgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>...
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div>`,11);function e(t,o){return p}var u=n(a,[["render",e]]);export{u as default};
