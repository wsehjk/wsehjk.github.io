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
        "excerpt":"编译器为c++类生成特殊成员函数需要满足一定条件。   c++11开始编译器会为类生成6个特殊成员函数，default constructor, destructor, copy constructor, copy assignment, move constructor, move assignment.   ","categories": [],
        "tags": ["cpp","modern effective cpp reading"],
        "url": "/%E7%90%86%E8%A7%A3%E7%89%B9%E6%AE%8A%E5%87%BD%E6%95%B0%E7%94%9F%E6%88%90/",
        "teaser": null
      },{
        "title": "Reservoir sampling algorithm",
        "excerpt":" ","categories": [],
        "tags": ["algorithm"],
        "url": "/Reservoir-sampling-algorithm/",
        "teaser": null
      },{
        "title": "Boyer mooer voting algorithm",
        "excerpt":"用于选出集合中出现次数最多的元素。  ","categories": [],
        "tags": ["algorithm"],
        "url": "/voting-algorithm/",
        "teaser": null
      },{
        "title": "read in a line from a file",
        "excerpt":"从磁盘上的文件读取第一行。 开始我的想法是用 std::fstream 和 std::getline #include &lt;fstream&gt; int main() { std::ifstream ifs(\"test.txt\"); std::string line; std::getline(ifs, line); } 考虑到文件可能比较大，从 std::fstream 中读取需要两次数据拷贝，效率比较差，使用 mmap。 mmap只做了一次数据拷贝，将文件从磁盘读取到 page cache，并且将地址空间中匿名区映射到这片内存，返回相应的内存指针，这样操作文件就像操作内存的字符。 文件映射到内存之后，怎么把第一行提取到 string 里？常规的做法是 从头开始遍历字符串，同时把字符 append 到 string 里，直到遇到第一个换行符 \\n。 p = mmap(); while(p) { if (*p != '\\n') str.push_back(*p); else break; } 这里的问题是，如果第一行字符串很长，append 操作 会引发扩容，数据拷贝，内存回收开销比较大的操作。更好的做法是先找到第一个 \\n，获取长度，string...","categories": [],
        "tags": ["mmap","c++"],
        "url": "/mmap/",
        "teaser": null
      }]
