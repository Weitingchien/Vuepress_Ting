---
title: lifecycle
date: 2021-12-23
tags: ['React']
---

## 加入生命週期方法到 Class component

![lifecycle](https://i.imgur.com/ujWZFTc.png)

componentDidMount: 當元件實體被建立且加入到 DOM 的時候才會執行，可在這時進行非同步 API 串接

componentWillUnmount: 用於清除 Cookie 或 Local Storage 等資料、如果有綁定監聽，要在這個方法中移除

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'));
```
