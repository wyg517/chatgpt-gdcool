export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "ourongxing",
  systemRule: ""
}

export const message = `Powered by OpenAI Vercel
- 由 [@果冻 QQ:52091199](https://github.com/gdcoolme) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/gdcoolme/chatgpt-gdcool)，欢迎自部署。
- 该网站仅作为演示，不提供长期服务，网站密码为 \`ourongxing\`，请勿滥用。
- 如果本项目对你有所帮助，可以给小猫 [买点零食](http://www.gdcool.net/gdpay.jpg)，但不接受任何付费功能请求。
- API Key 由我自己免费提供，珍惜调用次数，注意不要滥用。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击顶部名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
