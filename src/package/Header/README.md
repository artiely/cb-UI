# Header 导航栏

位于 app 内容区的上方，系统状态栏的下方，并且提供在一系列页面中的导航能力。

### 规则

- 可在导航栏中显示当前视图的标题。如果标题非常冗长且无法精简，可以空缺。

- 可在导航栏中使用 SegmentedControl 对内容进行层级划分。

- 避免用过多的元素填满导航栏。一般情况下，一个『返回按钮』、一个『标题』、一个『当前视图的控件』就足够了；如果已经有了 SegmentedControl ，一般只搭配一个『返回按钮』或者『当前视图的控件』。

- 为图标和文字控件，提供更大的点击热区。

### props

| 属性        | 说明                                         | 类型                              | 默认值   |
| ----------- | -------------------------------------------- | --------------------------------- | -------- |
| mode        | 模式                                         | String `'dark'` `'light'`         | `'dark'` |
| icon        | 出现在最左边的图标占位符                     | Slot `name="icon"`                | -        |
| left        | 导航左边内容                                 | String / Slot `name="left"`       | -        |
| right       | 导航右边内容                                 | Slot `name="right"`               | -        |
| onLeftClick | 导航左边点击回调                             | Function                          | -        |
| leftIcon    | 导航左边的图标                               | String `name=""`                  | -        |
| rightIcon   | 导航右边的图标                               | String `name=""`                  | -        |
| back        | 是否展示返回按钮                             | Boolean                           | false    |
| fixed       | 是否固定到顶部                               | Boolean                           | false    |
| to          | 返回到指定的路由，在 back 的情况下           | Router `{name:'Index',params:{}}` | false    |
| replace     | replace 配合 to 使用将路由 push 改为 replace | Boolean                           | false    |
