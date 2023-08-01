import{_ as t,r as i,o as c,c as o,a as n,b as s,d as l,f as a,e as p}from"./app-e78bd472.js";const r={},d={class:"hint-container tip"},u=n("p",{class:"hint-container-title"},"题目来源",-1),m={href:"https://www.nowcoder.com/exam/oj",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#链表","aria-hidden":"true"},"#"),s(" 链表")],-1),k=n("h3",{id:"bm1-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bm1-反转链表","aria-hidden":"true"},"#"),s(" BM1 反转链表")],-1),b=p(`<details class="hint-container details"><summary>题目</summary><h4 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h4><p>给定一个单链表的头结点pHead(该头节点是有值的，比如在下图，它的val是1)，长度为n，反转该链表后，返回新链表的表头。<br> 如当输入链表{1,2,3}时，<br> 经反转后，原链表变为{3,2,1}，所以对应的输出为{3,2,1}。</p><h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h4><div class="language-示例 line-numbers-mode" data-ext="示例"><pre class="language-示例"><code>输入：{1,2,3}
返回值：{3,2,1}

输入：{}
返回值：{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>代码</summary><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/**
 * struct ListNode {
 * int val;
 * struct ListNode *next;
 * ListNode(int x) : val(x), next(nullptr) {}
 * };
 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstddef&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstdio&gt;</span></span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">/**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     * 
     * @param head ListNode类 
     * @return ListNode类
     */</span>
    ListNode<span class="token operator">*</span> <span class="token function">ReverseList</span><span class="token punctuation">(</span>ListNode<span class="token operator">*</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// write code here</span>
        ListNode<span class="token operator">*</span> res <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span><span class="token comment">//存储节点</span>
        ListNode<span class="token operator">*</span> temp <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span><span class="token comment">//临时保存要操作的链表后续地址，防止断开后找不到节点入口遍历</span>
        ListNode<span class="token operator">*</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span><span class="token comment">//遍历指针</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token operator">!=</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//当遍历指针为空时，则不需要进行操作说明已经反转好了，循环条件为!=nullptr</span>
            temp <span class="token operator">=</span> cur<span class="token operator">-&gt;</span>next<span class="token punctuation">;</span><span class="token comment">//记录下待反转链表的入口地址以便提供给下一次遍历指针</span>
            cur<span class="token operator">-&gt;</span>next <span class="token operator">=</span> res<span class="token punctuation">;</span><span class="token comment">//断开cur-&gt;next指针指向res反转链表</span>
            res <span class="token operator">=</span> cur<span class="token punctuation">;</span><span class="token comment">//后移反转链表指针</span>
            cur <span class="token operator">=</span> temp<span class="token punctuation">;</span><span class="token comment">//cur开始遍历下一个节点</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span><span class="token comment">//最后返回反转链表指针</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function h(_,x){const e=i("ExternalLinkIcon");return c(),o("div",null,[n("div",d,[u,n("p",null,[n("a",m,[s("牛客/题库/在线编程/算法篇/面试必刷TOP101"),l(e)])])]),v,k,a(" #region "),b,a(" #endregion ")])}const f=t(r,[["render",h],["__file","面试必刷TOP101.html.vue"]]);export{f as default};
