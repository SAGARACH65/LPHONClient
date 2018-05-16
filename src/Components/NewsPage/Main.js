import React, {Component} from 'react';
import {Image, Linking} from 'react-native';
import {Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body} from 'native-base';

//input
//http://localhost:3000/api/getnews?token=pxSS-GQ3XT9VbGE


//output

let dataArray = {
    "status": "ok",
    "totalResults": 6,
    "articles": [
        {
            "source": {
                "id": "cnbc",
                "name": "CNBC"
            },
            "author": null,
            "title": "Why 'Bitcoin Jesus' is so bullish about Bitcoin cash",
            "description": "Bitcoin.com CEO Roger Ver, aka \"Bitcoin Jesus,\" says bitcoin cash is faster and more reliable than bitcoin core.",
            "url": "https://www.cnbc.com/2018/05/15/why-bitcoin-jesus-is-so-bullish-about-bitcoin-cash.html",
            "urlToImage": "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/12/02/101237533-10264_Roger-Ver-2.1910x1000.jpg",
            "publishedAt": "2018-05-16T03:48:21Z"
        },
        {
            "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
            },
            "author": "a",
            "title": "Derivatives Exchange LedgerX Launches CFTC-Regulated Bitcoin Savings Account",
            "description": "Cryptocurrency derivatives exchange LedgerX has launched the first bitcoin savings account regulated by the Commodity Futures Trading Commission (SEC).",
            "url": "https://www.ccn.com/derivatives-exchange-ledgerx-launches-cftc-regulated-bitcoin-savings-account/",
            "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/05/bitcoin-savings-account-ledgerx.jpg",
            "publishedAt": "2018-05-15T22:23:39Z"
        },
        {
            "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
            },
            "author": "a",
            "title": "Op-Ed: Bitcoin Cash Hard Fork Addresses Bottlenecks around BlockSize Limits and Enables Smart-Contract Scripting",
            "description": "This opinion piece on the May 15 Bitcoin Cash hard fork was written by Alejandro de la Torre, VP of Business Operations at BTC.com, the leading digital platform for cryptocurrency users, miners and developers. Follow him on Twitter @bitentrepreneur.",
            "url": "https://www.ccn.com/op-ed-bitcoin-cash-hard-fork-addresses-bottlenecks-around-blocksize-limits-and-enables-smart-contract-scripting/",
            "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/05/train-track-fork.jpg",
            "publishedAt": "2018-05-15T21:38:48Z"
        },
        {
            "source": {
                "id": "ars-technica",
                "name": "Ars Technica"
            },
            "author": "Cyrus Farivar",
            "title": "Man who claims he created bitcoin committed perjury, lawsuit says",
            "description": "Craig Wright once told another court that he co-owned W&K—but now denies it.",
            "url": "https://arstechnica.com/tech-policy/2018/05/man-who-claims-he-created-bitcoin-committed-perjury-lawsuit-says/",
            "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2018/05/GettyImages-944641014-760x380.jpg",
            "publishedAt": "2018-05-15T20:42:27+00:00"
        },
        {
            "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
            },
            "author": "a",
            "title": "Bitcoin Cash Hard Forks to Raise the BCH Block Size [Again]",
            "description": "Today Bitcoin Cash activated a hard fork that will increase the BCH block size from 8MB to 32MB and add new OP_Codes to the codebase.",
            "url": "https://www.ccn.com/bitcoin-cash-hard-forks-to-raise-the-bch-block-size-again/",
            "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/05/bitcoin-cash-hard-fork.jpg",
            "publishedAt": "2018-05-15T18:59:15Z"
        },
        {
            "source": {
                "id": "crypto-coins-news",
                "name": "Crypto Coins News"
            },
            "author": "a",
            "title": "Bing Hops On Anti-Bitcoin Bandwagon, Bans Cryptocurrency Ads",
            "description": "Search engine Bing has joined social media giants Google, Twitter, and Facebook in banning cryptocurrency advertising, citing the need to protect users from scams.",
            "url": "https://www.ccn.com/bing-hops-on-anti-bitcoin-bandwagon-bans-cryptocurrency-ads-joining-google/",
            "urlToImage": "https://www.ccn.com/wp-content/uploads/2018/05/Bing.jpg",
            "publishedAt": "2018-05-15T18:12:06Z"
        }
    ]
};
//
export default class Main extends Component {


    render() {
        return (
            <Container>

                <Content>

                    {dataArray.articles.map((data) => {

                            return (<Card key={data.publishedAt} style={{flex: 0}}>


                                    <CardItem header bordered>
                                        <Left>
                                            <Body>
                                            <Text style={{fontWeight: 'bold'}}>{data.title}</Text>
                                            {/*<Text note>Random Writer</Text>*/}
                                            /*discarding the time */
                                            <Text note>{data.publishedAt.substr(0,10)}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>
                                        <Image
                                            source={{uri: data.urlToImage}}
                                            style={{height: 180, width: 322, flex: 1}}/>
                                        <Text style={{fontSize: 14}}>
                                            {data.description}
                                        </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Left>
                                            <Button transparent onPress={() =>Linking.openURL(data.url) }
                                                    textStyle={{color: '#87838B'}}>
                                                <Icon name="unread" type='Entypo'/>
                                                <Text>View Full</Text>
                                            </Button>
                                        </Left>
                                    </CardItem>


                                </Card>


                            );

                        }
                    )}

                </Content>
            </Container>
        );
    }
}

