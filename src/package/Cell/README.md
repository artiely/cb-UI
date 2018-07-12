# Cell 单元格

单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。包含了 cell,list,field 的功能

### 规则

- 数据录入
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。

## CellGroup

### props

| 属性   | 说明           | 类型    | 默认值 |
| ------ | -------------- | ------- | ------ |
| border | 是否显示外边框 | Boolean | true   |

## Cell

### props

| 属性     | 说明                                                                                               | 类型                               | 默认值 |
| -------- | -------------------------------------------------------------------------------------------------- | ---------------------------------- | ------ |
| title    | 左边内容                                                                                           | String/Slot Default `name="title"` | -      |
| text     | 右边内容                                                                                           | String                             | -      |
| leftIcon | 左边图标 icon 的 name 值                                                                           | String / Slot `name="left-icon"`   | -      |
| link     | 箭头方向(右,上,下), 可选`horizontal`,`up`,`down`,`empty`，如果是 empty 则存在对应的 dom,但是不显示 | String                             | false  |
| wrap     | 是否换行，默认情况下，文字超长会被隐藏                                                             | Boolean                            | false  |
| required | 是否必填（一般用于有 input 属性时）                                                                | Boolean                            | false  |

### input 属性才有效的 继承所有 input 原生属性

| 属性     | 说明                                       | 类型          | 默认值 |
| -------- | ------------------------------------------ | ------------- | ------ |
| v-model  | 输入的值                                   | String/Number | -      |
| currency | 是否只能输入金额 `88.88`格式 `type=number` | Number        | -      |
| clear    | 是否清空输入                               | Boolean       | false  |

## Cell

辅助说明，提供一个 slot
