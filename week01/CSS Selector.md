## CSS选择器

### 基础选择器

- ID选择器

	- #idName
	
- 类选择器

	- .className
	
- 通配选择器

	- *
	- 通配选择器使用星号来选择到页面里所有元素

- 标签选择器

	- tagName
	
- 属性选择器

	- []，通过DOM的属性来选择该DOM节点
	- [attr]，用来选择带有attr属性的元素，e.g.:a[href]
	- [attr=xxx]，用来选择有attr属性且属性值等于xxx的元素，e.g.:input[type=text]
	- [attr~=xxx]，选择属性值中包含xxx的元素，但一定是空格分隔的多个值中有一个能和xxx相等才行，e.g.:input[class~=input]
	- [attr|=xxx]，用来选择属性值为xxx或xxx-开头的元素，比较常用的场景是选择某一类的属性，e.g.:div[class|=article]
	- [attr^=xxx]，匹配以xxx开头的元素，实际上就是用正则去匹配属性值，只要以xxx开头都可以，e.g.:div[class^=article]
	- attr[$=xxx]，正则匹配的方式来选择属性值以xxx结尾的元素，e.g.:[class$=disabled]
	- attr[*=xxx]，正则匹配的方式来选择属性值中包含xxx字符的所有元素，e.g.:[class*=disabled]

### 组合选择器

- 后代选择器

	- 用空格分隔的多个选择器组合
	- 语法形式：选择器A 选择器B
	
- 子元素选择器

	- 语法：选择器A>选择器B
	
- 兄弟选择器

  - 相邻兄弟选择器

    - 语法：选择器A+选择器B

  - 通用兄弟选择器

    - 语法：选择器A~选择器B

- 交集选择器

  - 语法：选择器A选择器B

- 并集选择器

  - 语法：选择器A,选择器B

### 伪类和伪元素选择器

- 伪类选择器

  - ：，在正常的选择器后面加上伪类名称，中间用冒号（：）隔开
  - 标记状态的伪类

  	- :link，选取未访问过的超链接元素
  	- :visited，选取访问过的超链接元素
  	- :hover，选取鼠标悬停的元素
  	- :active，选取点中的元素
  	- :focus，选取获得焦点的元素

  - 筛选功能的伪类

    - :empty，选取没有子元素的元素
    - :checked，选取勾选状态的input元素，只对radio和checkbox生效
    - :disabled，选取禁用的表单元素
    - :first-child，选取当前选择器下第一个元素
    - :last-child，选取当前选择器下最后一个元素
    - :nth-child(an+b)，选取指定位置的元素

    - :nth-last-child(an+b)
    - :only-child，选取唯一子元素。
    - :only-of-type，选取唯一的某个类型的元素

- 伪元素选择器

	- 常用伪元素选择器
	  - ::first-line，为某个元素的第一行文字使用样式
  - ::first-letter，为某个元素中的文字的首字母或第一个字使用样式
	  - ::before，在某个元素之前插入一些内容
	  - ::after，在某个元素之后插入一些内容
	  - ::selection，在光标选中的元素添加样式
