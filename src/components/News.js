import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class News extends Component { 
  // articles = [
  //   {
  //     "source": {
  //       "id": "abc-news",
  //       "name": "ABC News"
  //     },
  //     "author": "The Associated Press",
  //     "title": "Today in History",
  //     "description": "Today in History \n\nToday is Tuesday, March 1, the 60th day of 2022. There are 305 days left in the year. \n\nToday’s Highlight in History: \n\nOn March 1, 1974, seven people, including former Nixon White House aides H.R. Haldeman and John D. Ehrlichman, former At…",
  //     "url": "https://abcnews.go.com/US/wireStory/today-history-83172198",
  //     "urlToImage": "null",
  //     "publishedAt": "2022-03-01T05:00:32Z",
  //     "content": "Today in History\r\nToday is Tuesday, March 1, the 60th day of 2022. There are 305 days left in the year.\r\nTodays Highlight in History:\r\nOn March 1, 1974, seven people, including former Nixon White Hou… [+4869 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Boston Globe"
  //     },
  //     "author": "The Associated Press",
  //     "title": "Today in History",
  //     "description": "Today is Tuesday, March 1, the 60th day of 2022.",
  //     "url": "https://www.bostonglobe.com/2022/03/01/metro/today-history/",
  //     "urlToImage": "https://www.bostonglobe.com/pf/resources/images/logo-bg.jpg?d=319",
  //     "publishedAt": "2022-03-01T05:00:01Z",
  //     "content": "In 1815, Napoleon, having escaped exile in Elba, arrived in Cannes, France, and headed for Paris to begin his Hundred Days rule.\r\nIn 1867, Nebraska became the 37th state as President Andrew Johnson s… [+3735 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Madshrimps.be"
  //     },
  //     "author": "Stefan Mileschin",
  //     "title": "Tesla offers free EV charging near Ukraine for those fleeing conflict",
  //     "description": "Tesla Superchargers close to the Ukraine border will offer free electric vehicle charging to support those leaving the country following Russia's invasion. Owners of Tesla and non-Tesla EVs will be able to use stations at Trzebownisko, Poland; Koice, Slovaki…",
  //     "url": "http://www.madshrimps.be/news/item/212605",
  //     "urlToImage": null,
  //     "publishedAt": "2022-03-01T04:38:19Z",
  //     "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Madshrimps.be"
  //     },
  //     "author": "Stefan Mileschin",
  //     "title": "Panasonic will start making Tesla's higher-capacity EV batteries by March 2024",
  //     "description": "Panasonic aims to start mass production of a higher-capacity battery for Tesla by March 2024. The company is building a production facility for the battery at its Wakayama Factory, where it will create two more production lines and make structural improvement…",
  //     "url": "http://www.madshrimps.be/news/item/212599",
  //     "urlToImage": null,
  //     "publishedAt": "2022-03-01T04:37:16Z",
  //     "content": "Copyright © 2001-2011 Madshrimps, All rights reserved.Graphic Design by Dennis Kestelle, Programming by Maarten Menten,\r\nOverall Site design by John Meys\r\nAll information and graphics contained in Ma… [+135 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Gizmodo Australia"
  //     },
  //     "author": "Bradley Brownell",
  //     "title": "The Faraday Future FF 91 Is Apparently Going To Actually Happen",
  //     "description": "Faraday Future was founded all the way back in 2014, and it has been through some seriously tumultuous times since...\nThe post The Faraday Future FF 91 Is Apparently Going To Actually Happen appeared first on Gizmodo Australia.\n\n  Related Stories\r\n<ul><li>Tes…",
  //     "url": "https://www.gizmodo.com.au/2022/03/the-faraday-future-ff-91-is-apparently-going-to-actually-happen/",
  //     "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2022/02/26/46bb3783d2d859db94f7d2c0629e1ac5.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
  //     "publishedAt": "2022-03-01T04:00:01Z",
  //     "content": "Faraday Future was founded all the way back in 2014, and it has been through some seriously tumultuous times since then. The company has been passed through a series of financial struggles, the depar… [+2173 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Motley Fool"
  //     },
  //     "author": "newsfeedback@fool.com (Chris Hill)",
  //     "title": "How Can Investors Cope With Market Volatility",
  //     "description": "The last few weeks have been particularly head-spinning for investors.",
  //     "url": "https://www.fool.com/investing/2022/02/28/how-can-investors-cope-with-market-volatility/",
  //     "urlToImage": "https://g.foolcdn.com/editorial/images/668199/mfm_20220204_1lxlLBT.jpg",
  //     "publishedAt": "2022-03-01T03:30:00Z",
  //     "content": "Investors have seen stocks setting records (both good and bad) as volatility seems like it's becoming the norm. It's important to remember how much better investing can be when we focus on the long t… [+39532 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Seeking Alpha"
  //     },
  //     "author": "SA Transcripts",
  //     "title": "Lucid Group Inc. (LCID) CEO Peter Rawlinson on Q4 2021 Results - Earnings Call Transcript",
  //     "description": "Lucid Group Inc. (NASDAQ:LCID) Q4 2021 Results Conference Call February 28, 2022 5:30 PM ETCompany ParticipantsLauren Sloane - IRPeter Rawlinson - CEOSherry House - CFOConference Call...",
  //     "url": "https://seekingalpha.com/article/4491560-lucid-group-inc-lcid-ceo-peter-rawlinson-on-q4-2021-results-earnings-call-transcript",
  //     "urlToImage": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
  //     "publishedAt": "2022-03-01T03:23:05Z",
  //     "content": "Lucid Group Inc. (NASDAQ:LCID) Q4 2021 Results Conference Call February 28, 2022 5:30 PM ET\r\n\nCompany Participants\r\n\nLauren Sloane - IR\r\n\nPeter Rawlinson - CEO\r\n\nSherry House - CFO\r\n\nConference Call … [+46412 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Tech Times"
  //     },
  //     "author": "Joseph Henry",
  //     "title": "Toyota Halts Production in 14 Japanese Factories Following a Potential Cyberattack",
  //     "description": "Japanese automaker Toyota has stopped all operations on its domestic plants after a cyberattack took place earlier this week.",
  //     "url": "https://www.techtimes.com/articles/272399/20220228/toyota-halts-production-14-japanese-factories-following-potential-cyberattack.htm",
  //     "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/401331/toyota-halts-production-in-14-japanese-factories-following-a-potential-cyberattack.jpg",
  //     "publishedAt": "2022-03-01T02:50:00Z",
  //     "content": "(Photo : Christina Telep from Unsplash) Japanese automaker Toyota has stopped all operations on its domestic plants after a cyberattack took place earlier this week.\r\nToyota has stopped all operation… [+3188 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Daily Mail"
  //     },
  //     "author": "James Gordon",
  //     "title": "Student sets up Twitter account tracking locations of Russian oligarchs' private jets",
  //     "description": "Jack Sweeney, 19, who earlier this month set up a Twitter account to track Tesla CEO's Elon Musk's private jet is now focusing his efforts on Russian oligarchs and their planes.",
  //     "url": "https://www.dailymail.co.uk/news/article-10562731/Student-sets-Twitter-account-tracking-locations-Russian-oligarchs-private-jets.html",
  //     "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/01/02/54781825-0-image-a-2_1646101563911.jpg",
  //     "publishedAt": "2022-03-01T02:33:59Z",
  //     "content": "A 19-year-old who created a Twitter account that tracked the location of Elon Musk's private jet, has now turned his attention to the planes owned by Russian oligarchs. \r\nA college freshman student a… [+4617 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Gizmodo Australia"
  //     },
  //     "author": "Owen Bellwood",
  //     "title": "Toyota’s Expanding Steering Wheel Would Tell You That You’re A Bad Driver",
  //     "description": "If you do something wrong while you’re in a car, there’s a good chance some form of alarm, beep, buzz...\nThe post Toyota’s Expanding Steering Wheel Would Tell You That You’re A Bad Driver appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li>Tesla I…",
  //     "url": "https://www.gizmodo.com.au/2022/03/toyotas-expanding-steering-wheel-would-tell-you-that-youre-a-bad-driver/",
  //     "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2022/03/01/7becea717a383d77d28ea1768e16bec2.jpg?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
  //     "publishedAt": "2022-03-01T02:00:14Z",
  //     "content": "If you do something wrong while youre in a car, theres a good chance some form of alarm, beep, buzz or honk from a passing motorist will let you know you goofed up. But now, Toyota is hoping that its… [+2163 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-hill",
  //       "name": "The Hill"
  //     },
  //     "author": "Olafimihan Oshin",
  //     "title": "Teen who tracked Elon Musk's plane launches Russian Oligarch Jets account",
  //     "description": "Jack Sweeney, the teenager who made headlines tracking Telsa CEO Elon Musk's private plane, has launched another Twitter account that tracks those of Russian oligarchs amid the ongoing conflict between Russia and Uk...",
  //     "url": "https://thehill.com/policy/technology/technology/596232-teen-who-tracked-elon-musks-plane-launches-russian-oligarch-jets",
  //     "urlToImage": "https://thehill.com/sites/default/files/russianflag_12032011_getty.jpg",
  //     "publishedAt": "2022-03-01T01:58:09Z",
  //     "content": "Jack Sweeney, the teenager who made headlines tracking Telsa CEO Elon MuskElon Reeve MuskMusk says SpaceX Starlink satellite internet service activated in Ukraine amid Russian invasionHillicon Valley… [+1994 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "24/7 Wall St."
  //     },
  //     "author": "247chrislange",
  //     "title": "Cathie Wood’s ARK Invest Buys for 2/28",
  //     "description": "Here's a look at what the ARK Invest exchange-traded funds bought on February 28, 2022.",
  //     "url": "https://247wallst.com/investing/2022/02/28/cathie-woods-ark-invest-buys-for-2-28/",
  //     "urlToImage": "https://247wallst.com/wp-content/uploads/2018/12/imageForEntry1-7.jpg",
  //     "publishedAt": "2022-03-01T01:41:36Z",
  //     "content": "The broad markets had a mixed day on Monday with the Nasdaq pushing higher while the Dow and S&amp;P 500 lagged on the day. ARK Funds had a solid performance to kick off the week as well. ARKW perfor… [+5781 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "24/7 Wall St."
  //     },
  //     "author": "247chrislange",
  //     "title": "Cathie Wood’s ARK Invest Sells for 2/28",
  //     "description": "Here's a look at what the ARK Invest exchange-traded funds sold on February 28, 2022.",
  //     "url": "https://247wallst.com/investing/2022/02/28/cathie-woods-ark-invest-sells-for-2-28/",
  //     "urlToImage": "https://247wallst.com/wp-content/uploads/2022/02/imageForEntry22-zbs.jpg",
  //     "publishedAt": "2022-03-01T01:38:06Z",
  //     "content": "Markets were mixed to start out the week, and while the Dow Jones and S&amp;P 500 were down, the Nasdaq leapt forward up about 0.4%. ARK Funds followed the Nasdaq higher. ARKW performed the best out … [+4642 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Gizmodo Australia"
  //     },
  //     "author": "Matt Novak",
  //     "title": "7 Crypto and NFT Projects That Were Total Scams (February 2022 Edition)",
  //     "description": "The world of cryptocurrencies and NFTs is filled with scammers. And every month there seems to be more and more...\nThe post 7 Crypto and NFT Projects That Were Total Scams (February 2022 Edition) appeared first on Gizmodo Australia.\n  Related Stories\r\n<ul><li…",
  //     "url": "https://www.gizmodo.com.au/2022/03/7-crypto-and-nft-projects-that-were-total-scams-february-2022-edition/",
  //     "urlToImage": "https://imgix.gizmodo.com.au/content/uploads/sites/2/2022/02/28/6df8b75c042319dbec3651e049cb5677.png?ar=16%3A9&auto=format&fit=crop&q=65&w=1200",
  //     "publishedAt": "2022-03-01T01:30:00Z",
  //     "content": "The world of cryptocurrencies and NFTs is filled with scammers. And every month there seems to be more and more hucksters launching new crypto tokens and shilling ripoff apes.\r\nLast month some of the… [+6303 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Daily Mail"
  //     },
  //     "author": "Michelle Thompson, Matt Mcnulty",
  //     "title": "Ukraine's Deputy PM thanks Elon Musk for sending Starlink satellites to guarantee internet access",
  //     "description": "SpaceX founder Elon Musk is getting credit for ensuring Ukrainians have access to the Internet as they continue to fend off scores of Russian invaders attempting to takeover the nation",
  //     "url": "https://www.dailymail.co.uk/news/article-10562601/Ukraines-Deputy-PM-thanks-Elon-Musk-sending-Starlink-satellites-guarantee-internet-access.html",
  //     "urlToImage": "https://i.dailymail.co.uk/1s/2022/03/01/01/54779699-0-image-a-17_1646097008278.jpg",
  //     "publishedAt": "2022-03-01T01:16:46Z",
  //     "content": "Ukraine's deputy prime minister is sharing his appreciation for billionaire Elon Musk, who activated Starlink satellites for the war-torn country after its Internet service was disrupted by relentles… [+6036 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Tech Times"
  //     },
  //     "author": "Teejay Boris",
  //     "title": "Lucid Motors Cuts 2022 EV Production Forecast—Gravity Electric SUV Delayed?",
  //     "description": "Here's why Lucid Motors significantly slashed its 2022 EV production forecast:",
  //     "url": "https://www.techtimes.com/articles/272394/20220228/lucid-motors-cuts-2022-ev-production-lucid-ev-2022-production.htm",
  //     "urlToImage": "https://1734811051.rsc.cdn77.org/data/images/full/394817/lucid-motors-vs-tesla-ceos-plans-that-could-beat-elon-musk-better-ev-than-model-s-largest-spac-deal-and-more.jpg",
  //     "publishedAt": "2022-03-01T01:10:00Z",
  //     "content": "Lucid Motors cuts its 2022 electric vehicle or EV production forecast significantly, slashing its previous prediction of up to 20,000 units for this year alone.\r\nLucid Motors and 2022 EV Production\r\n… [+2635 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "newsweek",
  //       "name": "Newsweek"
  //     },
  //     "author": "James McCandless",
  //     "title": "The Autonomous Car Revolution May Leave Some Jews Behind",
  //     "description": "As self-driving cars loom, rabbis weigh in on whether a Shabbat observer can ride in an autonomous car.",
  //     "url": "https://www.newsweek.com/autonomous-car-revolution-may-leave-some-jews-behind-1680692",
  //     "urlToImage": "https://d.newsweek.com/en/full/1992427/iraw-kurdish-shabbat-shabbas-jewish.jpg",
  //     "publishedAt": "2022-03-01T01:00:01Z",
  //     "content": "Evangelists for the self-driving future of cars often say that their arrival is inevitable, that people would be much happier tending to other business rather than wasting time driving a car.\r\nTesla … [+6335 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Los Angeles Times"
  //     },
  //     "author": "Dana Hull",
  //     "title": "Musk's SpaceX satellite dishes arrive in Ukraine, drawing minister's thanks",
  //     "description": "Elon Musk fulfilled a promise to get a shipment of Starlink satellite dishes into Ukraine, helping the country maintain internet connectivity in the face of Russian onslaught",
  //     "url": "https://www.latimes.com/business/technology/story/2022-02-28/musks-spacex-satellite-dishes-arrive-in-ukraine-drawing-ministers-thanks",
  //     "urlToImage": "https://ca-times.brightspotcdn.com/dims4/default/fadbe31/2147483647/strip/true/crop/3000x1575+0+213/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F10%2F96%2F9a7b27f64786b3f0a215ccbbb47f%2Fepa-rex-spacex-launches-more-starlink-sa-10543170a.JPG",
  //     "publishedAt": "2022-03-01T00:54:07Z",
  //     "content": "Elon Musk fulfilled a promise to get additional SpaceX satellite dishes into Ukraine, drawing thanks from the deputy prime minister who over the weekend had pleaded for the equipment to keep internet… [+1268 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Electrek"
  //     },
  //     "author": "Fred Lambert",
  //     "title": "New Tesla Cybertruck prototype spotted with bed cover",
  //     "description": "A new Tesla Cybertruck prototype has been spotted at Tesla Fremont factory and it featured a bed cover – something that was missing in other recently spotted prototypes. We were expecting to get an update about the Cybertruck during Tesla’s product roadmap up…",
  //     "url": "https://electrek.co/2022/02/28/new-tesla-cybertruck-prototype-spotted-bed-cover/",
  //     "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2022/02/New-Tesla-cybertruck-prototype-bed-cover.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //     "publishedAt": "2022-03-01T00:32:07Z",
  //     "content": "A new Tesla Cybertruck prototype has been spotted at Tesla Fremont factory and it featured a bed cover – something that was missing in other recently spotted prototypes.\r\nWe were expecting to get an … [+1999 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Seeking Alpha"
  //     },
  //     "author": "Fred Piard",
  //     "title": "ICVT: Portfolio And Performance Update",
  //     "description": "iShares Convertible Bond ETF invests in cash pay convertible bonds. More than 40% of asset value is in convertibles issued by tech companies. Read more on ICVT here.",
  //     "url": "https://seekingalpha.com/article/4491477-ishares-icvt-portfolio-and-performance-update",
  //     "urlToImage": "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1132930101/image_1132930101.jpg?io=getty-c-w750",
  //     "publishedAt": "2022-03-01T00:11:52Z",
  //     "content": "Eoneren/E+ via Getty Images\r\nICVT strategy and portfolio \r\n The iShares Convertible Bond ETF (ICVT) has been tracking the Bloomberg Barclays U.S. Convertible Cash Pay Bond &gt; $250MM Index since 06/… [+6671 chars]"
  //   }
  // ]
  static defaultProps={
    country:"in",
    pageSize: 9,
    category:"general",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      key: "892e15909169411698504f8b575b0a80",
    }
    document.title=this.Capitalize(this.props.category);
    this.handleNextClick=this.handleNextClick.bind(this);
  }
  Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }


  
  handlePrevClick =async() => {
    await this.pageprev();
    // console.log(this.state.page)
    this.updateData()
  }

   async handleNextClick(){
    await this.pagenext();
    // console.log(this.state.page)
    this.updateData()
  }
  pagenext=()=>{
    this.setState({page: this.state.page + 1})
    
  }
  pageprev=()=>{
    this.setState({page: this.state.page - 1})
  }
  static getDerivedStateFromProps(props,state){
    return ({props,state})
  }

  async updateData(){
    this.setState({ loading: true });

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, loading: false })
    
  }
  
  
  async fetchData(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.key}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(
      'parsed data'
    )
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    document.title=`NewsMonkey-`+this.Capitalize(this.props.category);
  
  }
  
  
  componentDidUpdate(prevProps){
    if(prevProps.category !== this.props.category){
      this.fetchData();
      this.setState({pageno:1});
    }
    
  }

  async componentDidMount() {
    this.fetchData()
  }

  render() {
    console.log(this.props.themecolor)
    return (
      <div className='container my-3'>
        <h2 className='text-center m-5'style={{color:`${this.props.themecolor}`}}>NewsMonkey - Top Headlines on {this.Capitalize(this.props.category)}</h2>
        {this.state.loading && <Spinner />}
        <div className="row" style={{alignItems:"flex-start", justifyContent:"flex-start"}}>
          {!this.state.loading && this.state.articles.map((ele) => {
            return <div className="col-md-4 col-12 p-2" key={ele.url}>
              <NewsItem title={ele.title} themecolor={this.props.themecolor} description={ele.description} imgUrl={ele.urlToImage} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name}/>
              
            </div>
            
          })}
          
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' style={{backgroundColor:`${this.props.themecolor}`}} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type='button' className='btn btn-dark' style={{backgroundColor:`${this.props.themecolor}`}} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      
      </div>
    )
  }
}

export default News