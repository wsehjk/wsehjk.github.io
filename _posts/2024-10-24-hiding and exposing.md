---
title: "hiding and exposure"
date: 2024-10-24
tags: [cpp, c]
---
`static`, `inline`, `extern`,  `thread_local` 

## static
### static in class
when the keyword `static` is used to the class member in c++, it means the static member belongs to the class and can be accessed by all the instantiated objects. `static` func can only access other static member because they don't know the `this` pointer that points to each object.

```c++
class Myclass {
    private:
        static int cnt;
        const static int tot = 10;
    public:
        static void Incr(int add) {
            cnt += add;
        }
};
int Myclass::cnt = 0;   // static  mem var should be initialized out of the class and explicitly
```
`static` variables are located in the `data segement` of address space, so their lifetime is same as the programe. 

### static acts on general func
when the `static` keyword acts on the general func or member, it limits the visibility only to the translation unit (object file compiled from .c/.c++ file and its header)。

```cpp
// a.cpp
#include <iostream>
void test() {
    std::cout << "this is test is a.cpp\n";
}
```cpp
// b.cpp
#include <iostream>
using namespace std;
static void test() {
    std::cout << __PRETTY_FUNCTION__ << std::endl;
    std::cout << "this is test in b.cpp" << std::endl;
}
```
```cpp
// main.cpp
#include <iostream>
#include <type_traits>
using namespace std;

void test();

int main() {
    test();
}
```

``` bash
(base) ➜  static git:(master) ✗ g++ -std=c++17 main.cpp a.cpp b.cpp -o main 
(base) ➜  static git:(master) ✗ ./main  
this is test is test.cpp
```
if don't compile `a.cpp`, `symbol not found error` will be emitted, even though there is a specifed `test` in `b.cpp`

```bash
(base) ➜  static git:(master) ✗ g++ -std=c++17 main.cpp b.cpp -o main          
Undefined symbols for architecture x86_64:
  "test()", referenced from:
      _main in main-07d8dc.o
ld: symbol(s) not found for architecture x86_64
clang++: error: linker command failed with exit code 1 (use -v to see invocation)
```
### problems with static 
Because static var is local to the translation unit, different units can have their own static var.

```cpp
#include "test1.h"
#include "test2.h"

int main(){
        func1();
        func1();
        func2();
        func2();
        func1();
        func2();
        return 0;
}

```

```c++
// test1.h
#ifndef __TEST1_H
#define __TEST1_H
#include "static.h"
#include <iostream>
void func1();
#endif
```

```cpp
// test1.cpp
#include <iostream>
void func1(){
        var += 10;
        std::cout << "in test1::func1 : var = " << var << std::endl;
        return;
}
```

```cpp
// test2.h
#ifndef __TEST2_H
#define __TEST2_H
#include <iostream>
void func2();
#endif
```

```cpp
// test2.cpp
#include <iostream>
#include "static.h"

void func2(){
        var += 1;
        std::cout << "in test2::func2 : var = " << var << std::endl;
        return;
}
```
```cpp
#ifndef __STATIC_H
#define __STATIC_H
static int var = 1;
#endif
```
``` bash
(base) ➜  static_var_in_header git:(master) ✗ g++ -std=c++17  main.cpp test2.cpp test1.cpp -o main  
(base) ➜  static_var_in_header git:(master) ✗ ./main  
in test1::func1 : var = 11
in test1::func1 : var = 21
in test2::func2 : var = 2
in test2::func2 : var = 3
in test1::func1 : var = 31
in test2::func2 : var = 4
```
`func1` and `func2` operate on its own `var` 


## extern


## inline