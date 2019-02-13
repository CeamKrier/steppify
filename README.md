# steppify

A content stepper implementation for the react.

## Installation



```
npm install steppify
```

## Usage

```javascript
import Steppify from 'steppify'

const mockData = [
  {
    title: 'Evaluate Yourself',
    content: <div>
      <p>Why do you want to start a business? Use this question to guide what kind of business you want to start. 
      If you want extra money, maybe you should start a side hustle. 
      If you want more freedom, maybe it´s time to leave your 9-to-5 job and start something new.</p>
      <ul>
        <li>What skills do you have?</li>
        <li>Where does your passion lie?</li>
        <li>Where is your area of expertise?</li>
        <p>Be brutally honest with your answers.</p>
      </ul>
    </div>
  },
  {
    title: 'Think of a business idea.',
    content: <div>
      <p>Do you already have a killer business idea? If so, congratulations, you can proceed to the next section. 
      If not, there are a ton of ways to start brainstorming for a good idea. 
      An article on Entrepreneur, “8 Ways to Come Up With a Business Idea,” helps people break down potential business ideas. 
      Here are a few pointers from the article:</p>
      <ul>
        <li>Ask yourself what´s next. What technology or advancement is coming soon, 
        and how will that change the business landscape as we know it? Can you get ahead of the curve?</li>
        <li>Fix something that bugs you. People would rather have less of a bad thing than more of a good thing. 
        If your business can fix a problem for your customers, they´ll thank you for it.</li>
      </ul>
      <p>Also, go out and meet people and ask them questions, seek advice from other entrepreneurs, 
      research ideas online or use whatever method makes the most sense to you.</p>
    </div>
  }
]

export default class Root extends Component {
  render () {
    return (
      <Stepsy position='top' contents={mockData} />
    )
  }
}

```



## Features
It's quite easy to get started with the steppify! All you need to do is create an array of json objects which have the structure that specified down below.

```javascript
{
  title: 'Your title',
  content: <div>
              Your custom content here
          </div>
}
```

You also can decide where to display your stepper!

```javascript
//That would render stepper at the top of the page, you can omit that though. It's default configuration.
<Stepsy position='top' contents={mockData} />
//Similarly, that would render the stepper at the bottom of the page.
<Stepsy position='bottom' contents={mockData} />
```

Also, stepper is able to track your scroll position and accordingly will highlight the current step to help your users to follow the steps even more easier. You also can go to the specific step by clicking that on the stepper.






## Styling
No front-end framework has utilized on this component. Feel free to experiment with its styling according to your own imagination! :zap:


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
Thanks :raised_hands:


## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)
