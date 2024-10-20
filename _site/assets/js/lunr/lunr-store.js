var store = [{
        "title": "我的第一篇文章",
        "excerpt":"这里是你的文章内容。  ","categories": [],
        "tags": ["学习笔记","编程"],
        "url": "/init/",
        "teaser": null
      },{
        "title": "kmp ",
        "excerpt":"kmp笔记 kmp算法是巧妙的字符串匹配算法。当模式串(pattern)和文本(text)不匹配时，利用模式串的性质得到下一个应该比较的模式串字符，文本串指针不回退，达到线性的运行效率。 brute force 解法 text: abaabacabaabaabaabab pattern: abaabab 暴力解法中，比较第6个字符发现不匹配(c 和 b)，文本指针回到1，模式串指针回到0，重新开始匹配。代码实现为： int search(const std::string&amp; text, const std::string&amp; pat) { for(int i = 0; i &lt;= text.size() - pat.size(); ++i) { for(j = 0; j &lt; pat.size(); ++j) { if (text[i+j] != pat[j]) { break; } } if (j ==...","categories": [],
        "tags": ["Algorithm","xv6"],
        "url": "/kmp/",
        "teaser": null
      },{
        "title": "xv6 pagetable",
        "excerpt":"pagetable  ","categories": [],
        "tags": ["operating system","xv6"],
        "url": "/xv6/",
        "teaser": null
      },{
        "title": "understanding special function generation",
        "excerpt":" ","categories": [],
        "tags": ["cpp","morden effective cpp reading"],
        "url": "/%E7%90%86%E8%A7%A3%E7%89%B9%E6%AE%8A%E5%87%BD%E6%95%B0%E7%94%9F%E6%88%90/",
        "teaser": null
      }]
