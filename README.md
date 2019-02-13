# stepsy

A content stepper implementation for the react.

## Installation



```
npm install stepsy
```

## Usage

```javascript
import Stepsy from 'stepsy'

const mockData = [
  {
    title: 'Evaluate Yourself',
    content: <div>
      <p>Why do you want to start a business? Use this question to guide what kind of business you want to start. If you want extra money, maybe you should start a side hustle. If you want more freedom, maybe it's time to leave your 9-to-5 job and start something new.</p>
      <p>Once you have the reason, start asking yourself even more questions to help you figure out the type of business you should start, and if you have what it takes.</p>
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
      <p>Do you already have a killer business idea? If so, congratulations, you can proceed to the next section. If not, there are a ton of ways to start brainstorming for a good idea. An article on Entrepreneur, “8 Ways to Come Up With a Business Idea,” helps people break down potential business ideas. Here are a few pointers from the article:</p>
      <ul>
        <li>Ask yourself what's next. What technology or advancement is coming soon, and how will that change the business landscape as we know it? Can you get ahead of the curve?</li>
        <li>Fix something that bugs you. People would rather have less of a bad thing than more of a good thing. If your business can fix a problem for your customers, they'll thank you for it.</li>
      </ul>
      <p>Also, go out and meet people and ask them questions, seek advice from other entrepreneurs, research ideas online or use whatever method makes the most sense to you.</p>
      <p>And, if you've exhausted all your options and you're still stuck, here are 55 great business options you can start.</p>
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
You can tweak some of the features as shown below.

```javascript
//That would render stepper at the top of the page, you can omit that though. It's default configuration.
<Stepsy position='top' contents={mockData} />
//Similarly, that would render the stepper at the bottom of the page.
<Stepsy position='bottom' contents={mockData} />
```

Stepper is able to track your scroll position and accordingly will highlight the current step. You also can go to specific step by clicking that on the stepper.






## Styling
As default, semantic-ui has utilized on this component. It will render via that styling as out of the box but you always can override it with your own css rules.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
Thanks :raised_hands:


## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)
