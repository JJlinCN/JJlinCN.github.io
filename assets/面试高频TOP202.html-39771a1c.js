import{_ as p,r as o,o as l,c as i,a as n,b as a,d as c,f as s,e}from"./app-e78bd472.js";const r={},d={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"题目来源",-1),k={href:"https://www.nowcoder.com/exam/oj",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链表","aria-hidden":"true"},"#"),a(" 链表")],-1),m=n("h3",{id:"nb1-删除链表峰值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nb1-删除链表峰值","aria-hidden":"true"},"#"),a(" NB1 删除链表峰值")],-1),b=e(`<details class="hint-container details"><summary>题目</summary><h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h4><p>农场主人有一群牛，他给每只牛都打了一个编号，编号由整数表示。这些牛按照编号的大小形成了一个链表。现在农场主人想删除链表中比前后结点值都大的牛的编号，你能帮他设计一个算法来实现这个功能吗？注意，只考虑删除前，首尾的牛的编号不删除。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-示例 line-numbers-mode" data-ext="示例"><pre class="language-示例"><code>输入：{1,3,2,4,5}
返回值：{1,2,4,5}

输入：{5,4,3,2,1}
返回值：{5,4,3,2,1}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>代码</summary><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * ListNode(int x) : val(x), next(nullptr) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">/**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     * 
     * @param head ListNode类 
     * @return ListNode类
     */</span>
    ListNode<span class="token operator">*</span> <span class="token function">deleteNodes</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// write code here</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">nullptr</span> <span class="token operator">||</span> head<span class="token operator">-&gt;</span>next<span class="token operator">==</span><span class="token keyword">nullptr</span> <span class="token operator">||</span> head<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ListNode <span class="token operator">*</span>cur <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        ListNode <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        ListNode <span class="token operator">*</span>next <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token operator">-&gt;</span>val<span class="token operator">&gt;</span>pre<span class="token operator">-&gt;</span>val <span class="token operator">&amp;&amp;</span> cur<span class="token operator">-&gt;</span>val<span class="token operator">&gt;</span>next<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span><span class="token comment">//改第一个节点的指向为第三个节点</span>
                pre <span class="token operator">=</span> next<span class="token punctuation">;</span><span class="token comment">//pre指针指向第三个节点，后移</span>
                cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span><span class="token comment">//断开中间节点</span>
                cur <span class="token operator">=</span> next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//cur后移2个位置</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>cur <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span><span class="token comment">//如果cur指向为空，说明next-&gt;next为空，说明数据已全部结束</span>
                next <span class="token operator">=</span> next<span class="token operator">-&gt;</span>next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//后移2个位置</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">else</span><span class="token punctuation">{</span>
                pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> next<span class="token punctuation">;</span>
                next <span class="token operator">=</span> next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2),h=n("h3",{id:"nb2-牛群排列去重",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nb2-牛群排列去重","aria-hidden":"true"},"#"),a(" NB2 牛群排列去重")],-1),x=e(`<details class="hint-container details"><summary>题目</summary><h4 id="描述-1" tabindex="-1"><a class="header-anchor" href="#描述-1" aria-hidden="true">#</a> 描述</h4><p>农场里有一群牛，每头牛都有一个独特的编号，编号由一个整数表示，整数范围是[0, 200]。牛群中的牛用单链表表示，链表已经按照非降序排列。<br> 因为一些事故，导致一头牛可能多次出现在链表中。给你一个链表的头 head，删除链表中所有重复的编号，只留下所有牛的不重复编号。返回已排序的链表。</p><h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h4><div class="language-示例 line-numbers-mode" data-ext="示例"><pre class="language-示例"><code>输入：{1,2,2,3,3,4,5,5}
返回值：{1,2,3,4,5}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>代码</summary><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * ListNode(int x) : val(x), next(nullptr) {}
 * };
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">/**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     * 
     * @param head ListNode类 
     * @return ListNode类
     */</span>
    ListNode<span class="token operator">*</span> <span class="token function">deleteDuplicates</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// write code here</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token operator">==</span><span class="token keyword">nullptr</span> <span class="token operator">||</span> head<span class="token operator">-&gt;</span>next <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//保证传进来的head链表至少有两个元素</span>
            <span class="token keyword">return</span> head<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        ListNode <span class="token operator">*</span>next <span class="token operator">=</span> head<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
        ListNode <span class="token operator">*</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span>next<span class="token operator">!=</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//管else正常结束循环的</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>next<span class="token operator">-&gt;</span>val <span class="token operator">==</span> pre<span class="token operator">-&gt;</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pre<span class="token operator">-&gt;</span>next <span class="token operator">=</span> next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//将前一个节点的指针指向第三个节点</span>
                    next<span class="token operator">-&gt;</span>next <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span><span class="token comment">//断开重复节点</span>
                    <span class="token keyword">delete</span> next<span class="token punctuation">;</span>
                    pre <span class="token operator">=</span> head<span class="token punctuation">;</span><span class="token comment">//</span>
                    next <span class="token operator">=</span> pre<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//到第三个节点的下一个节点 段错误就说明next为空然后next-&gt;next了</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//尽量不要用二级访问如cur-&gt;next-&gt;next 循环中容易段错误</span>
                    pre <span class="token operator">=</span> next<span class="token punctuation">;</span>
                    next <span class="token operator">=</span> next<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function g(w,y){const t=o("ExternalLinkIcon");return l(),i("div",null,[n("div",d,[u,n("p",null,[n("a",k,[a("牛客/题库/在线编程/算法篇/面试高频TOP202"),c(t)])])]),v,m,s(" #region "),b,s(" #endregion "),h,s(" #region "),x,s(" #endregion ")])}const N=p(r,[["render",g],["__file","面试高频TOP202.html.vue"]]);export{N as default};
