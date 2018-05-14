import React, {Component} from 'react';
import {Image, Linking} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';

// const items = [
//     {
//         iconName: "logo-googleplus",
//         text: "Google Plus"
//     },
//     {
//         iconName: "logo-facebook",
//         text: "Facebook"
//     },
//     {
//         iconName: "logo-twitter",
//         text: "Twitter"
//     },
//     {
//         iconName: "logo-reddit",
//         text: "Reddit"
//     },
//     {
//         iconName: "logo-linkedin",
//         text: "LinkedIn"
//     },
// ];


export default class Main extends Component {
    _onPress() {
        Linking.openURL("https://www.cnbc.com/2018/05/14/feds-mester-reiterates-support-for-gradual-us-rate-increases.html");
        //this.props.url
    }

    render() {
        return (
            <Container>

                <Content>
                    <Card style={{flex: 0}} >

                        <CardItem header bordered>
                            <Left>
                                <Body>
                                <Text style={{fontWeight:'bold'}}>Random Women</Text>
                                {/*<Text note>Random Writer</Text>*/}
                                <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                            <Image
                                source={{uri: 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/07/104001971-IMG_7445r.1910x1000.jpg'}}
                                style={{height: 180, width: 322, flex: 1}}/>
                            <Text style={{fontSize:14}}>
                                The Fed should continue its gradual approach to raising interest rates, Cleveland Fed
                                President Loretta Mester said on Monday.
                            </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Left>
                                <Button onPress={this._onPress} transparent textStyle={{color: '#87838B'}}>
                                    <Icon name="unread" type='Entypo'/>
                                    <Text>View Full</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

//Data for test
// {
//
//     "status": "ok",
//     "totalResults": 20,
//     -
//         "articles": [
//     -
//         {
//     -
//     "source": {
//     "id": "cnbc",
//         "name": "CNBC"
// },
//     "author": "Reuters",
//     "title": "Fed's Mester reiterates support for gradual US rate increases",
//     "description": "The Fed should continue its gradual approach to raising interest rates, Cleveland Fed President Loretta Mester said on Monday.",
//     "url": "https://www.cnbc.com/2018/05/14/feds-mester-reiterates-support-for-gradual-us-rate-increases.html",
//     "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/10/07/104001971-IMG_7445r.1910x1000.jpg",
//     "publishedAt": "2018-05-14T09:58:07Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "the-hindu",
//         "name": "The Hindu"
// },
//     "author": "PTI",
//     "title": "PNB-Nirav Modi fraud case: CBI files charge sheet; names ex-chief, senior officials of bank",
//     "description": "The charge sheet deals with the first FIR registered in the case relating to the fraudulent issuance over ₹6,000 crore of LoUs to Diamond R US, Solar Exports and Stellar Diamonds.",
//     "url": "http://www.thehindu.com/business/Industry/pnb-nirav-modi-case-cbi-files-charge-sheet-names-pnb-ex-chief-senior-officials/article23880719.ece",
//     "urlToImage": "http://www.thehindu.com/business/Industry/yokd4v/article23880718.ece/ALTERNATES/LANDSCAPE_615/THJVNNIRAVMODI",
//     "publishedAt": "2018-05-14T09:49:57Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Npr.org"
// },
//     "author": "Scott Neuman",
//     "title": "AirAsia CEO Says 'Sorry' For Endorsing Malaysia's Ousted Prime Minister",
//     "description": "Tony Fernandes, who founded the Kuala Lumpur-based low-cost carrier in 1993, said he 'buckled' under pressure from Prime Minister Najib Razak to back him in last week's election.",
//     "url": "https://www.npr.org/sections/thetwo-way/2018/05/14/610912957/airasia-ceo-says-sorry-for-endorsing-malaysia-s-ousted-prime-minister",
//     "urlToImage": "https://media.npr.org/assets/img/2018/05/14/gettyimages-477306558_wide-bd01cf8b433f507ef3bf74fc0bda67b111bf9d77.jpg?s=1400",
//     "publishedAt": "2018-05-14T09:43:00Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "bloomberg",
//         "name": "Bloomberg"
// },
//     "author": "Dana Hull",
//     "title": "Tesla's Churn Is Making It Tougher for Musk to 'Burn' Short Sellers",
//     "description": "Elon Musk has said the “short burn of the century” is coming soon to investors betting against Tesla Inc. He’s rapidly losing top deputies to help him deliver on that prediction.",
//     "url": "https://www.bloomberg.com/news/articles/2018-05-14/tesla-s-churn-making-it-tougher-for-musk-to-burn-short-sellers",
//     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iK6AYwak3pkM/v1/1200x800.jpg",
//     "publishedAt": "2018-05-14T09:15:17Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "reuters",
//         "name": "Reuters"
// },
//     "author": "Reuters Editorial",
//     "title": "Nissan sees lower annual profit on firmer yen",
//     "description": "Nissan Motor Co forecast a third straight year of lower operating profits, on expectations a stronger yen and higher raw material prices would outweigh a rise in global vehicle sales.",
//     "url": "https://in.reuters.com/article/nissan-results/nissan-sees-lower-annual-profit-on-firmer-yen-idINKCN1IF0SH",
//     "urlToImage": "https://s3.reutersmedia.net/resources/r/?m=02&d=20180514&t=2&i=1261825362&w=1200&r=LYNXNPEE4D0F7",
//     "publishedAt": "2018-05-14T08:05:52Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "the-wall-street-journal",
//         "name": "The Wall Street Journal"
// },
//     "author": "Cara Lombardo",
//     "title": "Xerox Drops Fujifilm Merger Plan, Strikes a Deal With Activists",
//     "description": "Xerox said it will back out of its merger deal with Fujifilm Holdings Corp. as it reached a new settlement with activist shareholders Carl Icahn and Darwin Deason.",
//     "url": "https://www.wsj.com/articles/xerox-drops-fujifilm-merger-plan-strikes-a-deal-with-activists-1526251867",
//     "urlToImage": "https://images.wsj.net/im-8648/social",
//     "publishedAt": "2018-05-14T07:03:40Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Seekingalpha.com"
// },
//     "author": "Jason Phillips, CFA",
//     "title": "Dick's: Solid Long-Term Value, But Are There Better Opportunities Elsewhere?",
//     "description": "Over the medium to long-term shares in Dick's Sporting Goods may be undervalued by as much as 30%. Shorter-term we felt there were better opportunities elsewher",
//     "url": "https://seekingalpha.com/article/4173581-dicks-solid-long-term-value-better-opportunities-elsewhere",
//     "urlToImage": "https://static1.seekingalpha.com/uploads/2018/5/13/13109712-15262256960600355.png",
//     "publishedAt": "2018-05-14T05:18:33Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "techcrunch",
//         "name": "TechCrunch"
// },
//     "author": "Connie Loizos",
//     "title": "Walmart's deal to buy Flipkart came with an interesting caveat",
//     "description": "Retail giant Walmart, which earlier this week announced that it’s paying $16 billion for a 77 percent stake in the Indian e-commerce company, Flipkart Group, could have to take Flipkart public within four years, shows a public filing that was reported on earl…",
//     "url": "https://techcrunch.com/2018/05/13/walmarts-deal-to-buy-flipkart-came-with-an-interesting-caveat/",
//     "urlToImage": "https://techcrunch.com/wp-content/uploads/2017/07/gettyimages-681409878.jpg?w=625",
//     "publishedAt": "2018-05-14T03:46:11Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "the-washington-post",
//         "name": "The Washington Post"
// },
//     "author": null,
//     "title": "Hong Kong shares jump after Trump tweets on China's ZTE",
//     "description": "Asian shares were mostly higher Monday, with Hong Kong shares surging after President Donald Trump said he wanted to help a sanctioned Chinese tech giant, signaling a possible improvement in U.S.-China relations.",
//     "url": "https://www.washingtonpost.com/business/hong-kong-shares-jump-after-trump-tweets-on-chinas-zte/2018/05/13/32081f90-5725-11e8-9889-07bcc1327f4b_story.html",
//     "urlToImage": "https://www.washingtonpost.com/resizer/2CjPNwqvXHPS_2RpuRTKY-p3eVo=/1484x0/www.washingtonpost.com/pb/resources/img/twp-social-share.png",
//     "publishedAt": "2018-05-14T03:18:24Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Nydailynews.com"
// },
//     "author": "Nicole Hensley",
//     "title": "Uber rebuffed Michael Cohen's consulting offer despite promises to share White House insight: report",
//     "description": "Uber was the one ride Michael Cohen couldn't get.",
//     "url": "http://www.nydailynews.com/news/politics/uber-rebuffed-michael-cohen-consulting-offer-article-1.3988155",
//     "urlToImage": "http://www.nydailynews.com/resizer/Bxmt6aQF1Mol1J5ufZB3dCiy7NE=/1200x0/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/ICDGTSNNWCQF5JXJYDWLCYTJ6E.jpg",
//     "publishedAt": "2018-05-14T03:02:24Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Energymatters.com.au"
// },
//     "author": null,
//     "title": "Clean Energy Regulator confirms 2020 Renewable Energy Target already achieved",
//     "description": "Increasing numbers of large and small scale solar power installations will help Australia meet 2020 Renewable Energy Target says Clean Energy Regulator.",
//     "url": "https://www.energymatters.com.au/renewable-news/meet-2020-renewable-energy-target/",
//     "urlToImage": "http://www.energymatters.com.au/wp-content/uploads/2017/09/Clean-Energy-Regulator-200-x-200.png",
//     "publishedAt": "2018-05-14T02:20:27Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "abc-news",
//         "name": "ABC News"
// },
//     "author": "ABC News",
//     "title": "African woman removed from United flight after white passenger complained she was 'pungent': Lawsuit",
//     "description": "An African woman says in a lawsuit that she was removed from a United flight after a white passenger complained she was \"pungent.\"",
//     "url": "https://abcnews.go.com/ABCNews/african-woman-removed-united-flight-white-passenger-complained/story?id=55135645",
//     "urlToImage": "https://s.abcnews.com/images/US/united-airlines-plane-gty-jt-180513_hpMain_16x9_992.jpg",
//     "publishedAt": "2018-05-14T01:24:36Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "reuters",
//         "name": "Reuters"
// },
//     "author": "Sumeet Chatterjee",
//     "title": "HSBC says performs first trade finance transaction using blockchain",
//     "description": "HSBC Holdings Plc (HSBA.L) said on Monday it has performed the world's first trade finance transaction using a single blockchain platform, in a push to boost efficiency in the multi-trillion-dollar funding of international trade.",
//     "url": "https://www.reuters.com/article/us-hsbc-blockchain/hsbc-says-performs-first-trade-finance-transaction-using-blockchain-idUSKCN1IF01X",
//     "urlToImage": "https://s4.reutersmedia.net/resources/r/?m=02&d=20180514&t=2&i=1261850067&w=1200&r=LYNXNPEE4D00T",
//     "publishedAt": "2018-05-14T01:09:46Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "the-wall-street-journal",
//         "name": "The Wall Street Journal"
// },
//     "author": "Tim Higgins",
//     "title": "Tesla Executives Step Away, Adding to Auto Maker's Challenges",
//     "description": "Tesla Inc. will be without two important executives just as the electric-car maker struggles to boost production of its first mass-market vehicle and faces doubts about its ability to raise cash.",
//     "url": "https://www.wsj.com/articles/tesla-executives-step-away-adding-to-auto-makers-challenges-1526254993",
//     "urlToImage": "https://images.wsj.net/im-10433/social",
//     "publishedAt": "2018-05-13T23:43:00Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "reuters",
//         "name": "Reuters"
// },
//     "author": "Reuters Editorial",
//     "title": "Conoco has seized Venezuela PDVSA products from Isla refinery - Curacao",
//     "description": "U.S. oil major ConocoPhillips hasseized products belonging to Venezuelan state oil company PDVSAfrom the Isla refinery it runs on Curacao, an islandofficial told Reuters on Sunday.",
//     "url": "https://www.reuters.com/article/conocophillips-pdvsa/conoco-has-seized-venezuela-pdvsa-products-from-isla-refinery-curacao-idUSL2N1SK09X",
//     "urlToImage": "https://s4.reutersmedia.net/resources_v2/images/rcom-default.png",
//     "publishedAt": "2018-05-13T18:30:18Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Psu.edu"
// },
//     "author": "Cissy Ming | The Daily Collegian",
//     "title": "Blown away: Penn State places second in Department of Energy Collegiate Wind Competition",
//     "description": "Penn State has placed within the top three since the competition began in 2014.",
//     "url": "http://www.collegian.psu.edu/news/campus/article_3b24a158-56cf-11e8-80ae-270920540d58.html",
//     "urlToImage": "https://bloximages.newyork1.vip.townnews.com/collegian.psu.edu/content/tncms/assets/v3/editorial/e/ff/effadbc0-56ce-11e8-8391-3b42623c7d42/5af86f27b2b78.image.jpg?resize=840%2C630",
//     "publishedAt": "2018-05-13T17:23:44Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "fortune",
//         "name": "Fortune"
// },
//     "author": "David Z. Morris",
//     "title": "Chili's Malware Attack May Have Compromised Customers' Credit Card Information at Some Restaurants",
//     "description": "",
//     "url": "http://fortune.com/2018/05/13/chilis-data-breach/",
//     "urlToImage": "https://fortunedotcom.files.wordpress.com/2016/11/535061725.jpg",
//     "publishedAt": "2018-05-13T15:49:16Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": "bloomberg",
//         "name": "Bloomberg"
// },
//     "author": "Justin Fox",
//     "title": "Let's Talk About Net Present Value and Solar Panels",
//     "description": "Without understanding it, you’ll never know if putting solar panels on your roof (or buying a share of stock) is a good deal or not.",
//     "url": "https://www.bloomberg.com/view/articles/2018-05-13/california-solar-panels-and-understanding-net-present-value",
//     "urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iELzoZryGKw4/v1/1200x796.jpg",
//     "publishedAt": "2018-05-13T15:19:58Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Komonews.com"
// },
//     "author": "KOMO Staff",
//     "title": "More than 100 rally, march to protest Amazon",
//     "description": "SEATTLE --  More than 100 people gathered on Saturday for the March on Amazon protest headed by councilmember Kshama Sawant and the Affordable Housing Alliance. Marchers rallied at at Seattle Central College then began making their way to the Amazon headqu",
//     "url": "http://komonews.com/news/local/rally-march-to-protest-amazon-set-to-begin",
//     "urlToImage": "http://static-38.sinclairstoryline.com/resources/media/37ff536a-4c76-402d-b250-29c51b733ab3-large16x9_DN12SuwantRallyRAWmhp_frame_285851.jpg?1526159555945",
//     "publishedAt": "2018-05-12T20:55:55Z"
// },
//     -
//         {
//     -
//     "source": {
//     "id": null,
//         "name": "Chicagotribune.com"
// },
//     "author": "Tom Krisher",
//     "title": "Parts shortage that hit Ford spreads to more companies",
//     "description": "Ford was forced to temporarily halt production of its popular F-150 pickup truck Wednesday after a fire at a supplier last week caused a parts shortage.",
//     "url": "http://www.chicagotribune.com/business/ct-ford-suspends-f-150-production-20180510-story.html",
//     "urlToImage": "http://www.trbimg.com/img-5af489c5/turbine/ct-ford-suspends-f-150-production-20180510",
//     "publishedAt": "2018-05-10T18:04:00Z"
// }
// ]
//
// }