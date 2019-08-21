import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Steppify from '../../src/jsx/Container'
/**
 * For production
 * import Steppify from './src/jsx/Container'

 * Into index.js

 * require('./src/css/index.css')

   var _StepTracker = _interopRequireDefault(require('./src/jsx/StepTracker'))

   var _StepContent = _interopRequireDefault(require('./src/jsx/StepContent'))
 */
/**
 * For development
 * import Steppify from '../../src/jsx/Container' */

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
        <li>How much can you afford to spend, knowing that most businesses fail?</li>
        <li>How much capital do you need?</li>
        <li>What sort of lifestyle do you want to live?</li>
        <li>Are you even ready to be an entrepreneur?</li>
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
        <li>Apply your skills to an entirely new field. Many businesses and industries do things one way because that's the way they've always been done. In those cases, a fresh set of eyes from a new perspective can make all the difference.</li>
        <li>Use the better, cheaper, faster approach. Do you have a business idea that isn’t completely new? If so, think about the current offerings and focus on how you can create something better, cheaper or faster.</li>

      </ul>
      <p>Also, go out and meet people and ask them questions, seek advice from other entrepreneurs, research ideas online or use whatever method makes the most sense to you.</p>
      <p>And, if you've exhausted all your options and you're still stuck, here are 55 great business options you can start.</p>
    </div>
  },
  {
    title: 'Do market research',
    content: <div>
      <p>Is anyone else already doing what you want to start doing? If not, is there a good reason why?</p>

      <p>Start researching your potential rivals or partners within the market by using this guide. It breaks down the objectives you need to complete with your research and the methods you can use to do just that. For example, you can conduct interviews by telephone or face to face. You can also offer surveys or questionnaires that ask questions like “What factors do you consider when purchasing this product or service?” and “What areas would you suggest for improvement?”</p>
      <p>Just as importantly, it explains three of the most common mistakes people make when starting their market research, which are:</p>
      <ul>
        <li>Using only secondary research.</li>
        <li>Using only online resources.</li>
        <li>Surveying only the people you know.</li>
      </ul>
    </div>
  },
  {
    title: 'Get feedback',
    content: <div>
      <p>Let people interact with your product or service and see what their take is on it. A fresh set of eyes can help point out a problem you might have missed. Plus, these people will become your first brand advocates, especially if you listen to their input and they like the product.</p>

      <p>One of the easiest ways to utilize feedback is to focus on “The Lean Startup” approach (read more about it here), but it involves three basic pillars: prototyping, experimenting and pivoting. By pushing out a product, getting feedback and then adapting before you push out the next product, you can constantly improve and make sure you stay relevant.</p>
      <p>Just realize that some of that advice, solicited or not, will be good. Some of it won't be. That's why you should have a plan on how to receive feedback.</p>
      <p>Here are six steps for handling feedback:</p>
      <ul>
        <li>Stop! Your brain will probably be in an excited state when receiving feedback, and it might start racing to bad conclusions. Slow down and take the time to consider carefully what you've just heard.</li>
        <li>Start by saying ‘thank you.’ People who give you negative feedback won't expect you to thank them for it, but doing so will probably make them respect you and encourage them to continue be honest in the future.</li>
        <li>Look for the grain of truth. If someone doesn't like one idea, it doesn't mean they hate everything you've just said. Remember that these people are trying to help, and they might just be pointing out a smaller problem or solution that you should look into further.</li>
        <li>Seek out the patterns. If you keep hearing the same comments, then it's time to start sitting up and taking notice.</li>
        <li>Listen with curiosity. Be willing to enter a conversation where the customer is in control.</li>
        <li>Ask questions. Figure out why someone liked or didn't like something. How could you make it better? What would be a better solution?</li>
      </ul>
      <li>Also, one way to help you get through negative feedback is to create a "wall of love," where you can post all of the positive messages you've received.Not only will this wall of love inspire you, but you can use these messages later when you begin selling your product or service. Positive reviews online and word-of-mouth testimonials can help make a big difference.</li>
    </div>
  },
  {
    title: 'Make it official',
    content: <div>
      <p>Get all of the legal aspects out of the way early. That way, you don't have to worry about someone taking your big idea, screwing you over in a partnership or suing you for something you never saw coming. A quick checklist of things to shore up might include:</p>
      <ul>
        <li>Business structure (LLC, corporation or a partnership, to name a few.)</li>
        <li>Business name</li>
        <li>Register your business</li>
        <li>Federal tax ID</li>
        <li>State tax ID</li>
        <li>Permits (more on permits here)</li>
        <li>License</li>
        <li>Necessary bank account</li>
        <li>Trademarks, copyrights or patents</li>
      </ul>
    </div>
  },
  {
    title: 'Write your business plan',
    content: <div>
      <p>A business plan is a written description of how your business will evolve from when it starts to the finish product.</p>
      <p>As angel investor and tech-company founder Tim Berry wrote on Entrepreneur, "You can probably cover everything you need to convey in 20 to 30 pages of text plus another 10 pages of appendices for monthly projections, management resumes and other details. If you've got a plan that's more than 40 pages long, you're probably not summarizing very well."</p>
      <p>Here's what we suggest should be in your business plan:</p>
      <ul>
        <li>Title page. Start with name the name of your business, which is harder than it sounds. This article can help you avoid common mistakes when picking.</li>
        <li>Executive summary. This is a high-level summary of what the plan includes, often touching on the company description, the problem the business is solving, the solution and why now. (Here’s what you should include in the summary and how you can make it appeal to investors.)</li>
        <li>Business description. What kind of business do you want to start? What does your industry look like? What will it look like in the future?</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
      </ul>
      <p>For each question, you can spend between one to three pages. Keep in mind, the business plan is a living, breathing document and as time goes on and your business matures, you will be updating it.</p>
    </div>
  },
  {
    title: 'Finance your business',
    content: <div>
      <p>A business plan is a written description of how your business will evolve from when it starts to the finish product.</p>
      <p>As angel investor and tech-company founder Tim Berry wrote on Entrepreneur, "You can probably cover everything you need to convey in 20 to 30 pages of text plus another 10 pages of appendices for monthly projections, management resumes and other details. If you've got a plan that's more than 40 pages long, you're probably not summarizing very well."</p>
      <p>Here's what we suggest should be in your business plan:</p>
      <ul>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
      </ul>
      <p>For each question, you can spend between one to three pages. Keep in mind, the business plan is a living, breathing document and as time goes on and your business matures, you will be updating it.</p>
    </div>
  },
  {
    title: 'Develop your product or service',
    content: <div>
      <p>A business plan is a written description of how your business will evolve from when it starts to the finish product.</p>
      <p>As angel investor and tech-company founder Tim Berry wrote on Entrepreneur, "You can probably cover everything you need to convey in 20 to 30 pages of text plus another 10 pages of appendices for monthly projections, management resumes and other details. If you've got a plan that's more than 40 pages long, you're probably not summarizing very well."</p>
      <p>Here's what we suggest should be in your business plan:</p>
      <ul>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
      </ul>
      <p>For each question, you can spend between one to three pages. Keep in mind, the business plan is a living, breathing document and as time goes on and your business matures, you will be updating it.</p>
    </div>
  },
  {
    title: 'Start building your team',
    content: <div>
      <p>To scale your business, you are going to need to hand off responsibilities to other people. You need a team.</p>
      <p>Whether you need a partner, employee or freelancer, these three tips can help you find a good fit:</p>
      <ul>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
      </ul>
      <p>For each question, you can spend between one to three pages. Keep in mind, the business plan is a living, breathing document and as time goes on and your business matures, you will be updating it.</p>
    </div>
  },
  {
    title: 'Find a location',
    content: <div>
      <p>This could mean an office or a store. Your priorities will differ depending on need, but here are 10 basic things to consider:</p>
      <ul>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
        <li>Fund your startup yourself. Bootstrapping your business might take longer, but the good part is that you control your own destiny (and equity).</li>
        <li>Pitch your needs to friends and family. It can be hard to separate business from personal relationships, but if you’re considering asking for a loan, here’s a resource you can use to make it as straightforward as possible.</li>
        <li>Request a small-business grant. Start by checking out our guide to small-business grants. Then, head over to Grants.gov, which is a searchable, online directory of more than 1,000 federal grant programs. It might be a long process, but it doesn’t cost you any equity.</li>
        <li>Market strategies. What is your target market, and how can you best sell to that market?</li>
        <li>Competitive analysis. What are the strengths and weakness of your competitors? How will you beat them?</li>
        <li>Design and development plan. What is your product or service and how will it develop? Then, create a budget for that product or service.</li>
        <li>Operations and management plan. How does the business function on a daily basis?</li>
      </ul>
      <p>For each question, you can spend between one to three pages. Keep in mind, the business plan is a living, breathing document and as time goes on and your business matures, you will be updating it.</p>
    </div>
  }
]

export default class Root extends Component {
  render () {
    return (
      <Steppify position='bottom' contents={mockData} />
    )
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('main')
)
