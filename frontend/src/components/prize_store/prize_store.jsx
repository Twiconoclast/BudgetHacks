import React from 'react'

class PrizeStore extends React.Component {
    constructor(props) {
        super(props)
        this.prizes = [{
                        name: "ColdStone Gift Card",
                        points: 500,
                        url: "https://productimages.nimbledeals.com/nimblebuy/cold-stone-peanut-buttercup-gift-card-3-9819-regular.jpg"
                    },
                    {
                        name: "Starbucks Gift Card",
                        points: 750,
                        url: "https://globalassets.starbucks.com/assets/a1e98bec4d304103a5b49ec968b60782.jpg",
                    },
                    {
                        name: "Safeway Gift Card",
                        points: 1000,
                        url: "https://marketingcdn.giftcardgranny.com/merchant-images/lg/safeway-gift-card.png"
                    },
                    {
                        name: "Olive Garden GIft Card",
                        points: 1250,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7UviddWUewkY0NB_W59F85l8OqFfPGj1pzw&usqp=CAU"
                    },
                    {
                        name: "One month membership to Gold's Gym",
                        points: 1500,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtulkYRCEz_dAK4cHl6vMzpCIJYNrwL2WgA&usqp=CAU"
                    },
                    {
                        name: "Netflix for 6 months",
                        points: 1750,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT333AnnuLRv9tpR79Bb4XiBQSLz_cidxrTKg&usqp=CAU"
                    },
                    {
                        name: "Chevron Gift Card",
                        points: 2000,
                        url: "https://www.chevron.com/-/media/shared-media/images/chevron-hallmark-twitter.jpg"
                    },
                    {
                        name: "Amazon Gift Card",
                        points: 2250,
                        url: "https://cdn.dundle.com/resources/images/products/product-google-search/amazon-16x9.png"
                    },
                    {
                        name: "Steam Gift Card",
                        points: 2500,
                        url: "https://i.ytimg.com/vi/R_kHcFIeXHc/maxresdefault.jpg"
                    },
                    {
                        name: "One free bike from Fixie",
                        points: 2750,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnMTjlO66WxD4cQoYopkgEHjnaBcXM8noHO82DC03U9xXQt-5pZZ_tFyofE8bTH7P_TrN4UQ&usqp=CAc"
                    },
                    {
                        name: "San Fransisco Bay Boat Cruise Wine Tasting",
                        points: 3000,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKBgCY-a1h7TBDf-zPs_HGoCV_C7VqEotk9g&usqp=CAU"
                    },
                    {
                        name: "Disneyland Tickets",
                        points: 10000,
                        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CTTaMs-QzcrjBBmAL-jQRxjE6c_ofIdqyw&usqp=CAU"
                    }
                ]
    }


    render() {

        let prizeItems = this.prizes.map((prize) => {
            return (
                <li key={prize.name} className="prize-item">
                    <figure className="prize-img">
                        <img src={prize.url} alt={prize.name} />
                    </figure>
                    <button onClick={() => this.props.addPrize(this.props.userId, prize)}>Redeem this prize!</button>
                    <div className="prize-points">{prize.points} <span>Points</span></div>
                </li>
            )
        })

        return (
            <div className="prizes">
                <ul className="prizes-container">
                    {prizeItems}
                </ul>
            </div>
        )
    }
}

export default PrizeStore
