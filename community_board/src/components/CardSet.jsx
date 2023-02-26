import React from "react";
import Card from "./Card"

const CardSet = () => {
    return (
        <div className="Cardset">
            <Card 
            image="./src/assets/Rickys.jpeg" 
            alt="Ricky's Hot Chicken chicken sandwich with fries" 
            name="Ricky's Hot Chicken"
            food="The Sando"
            link="https://www.rickyshotchicken.com/menu"/>
            <Card 
            image="./src/assets/Tommy_Tamale.jpeg" 
            alt="Tommy Bowl with tamales, beans, cheese, and pico de gallo" 
            name="Tommy Tamale"
            food="Tommy Bowl"
            link="https://tommytamale.com/tommy-tamale-menu/"/>
            <Card 
            image="./src/assets/Angel_Chicken_Kitchen.jpg" 
            alt="Spicy chicken sandwich with slaw, pickle, and sauce" 
            name="Angel Chicken Kitchen"
            food="Nashville Hot"
            link="https://www.angelchickenkitchen.com/"/>
            <Card 
            image="./src/assets/monta_ramen.jpg" 
            alt="tonkotsu ramen with meat, mushrooms, green onions and a creamy pork broth" 
            name="Monta Ramen"
            food="Tonkotsu Ramen with Kimchi Fried Rice"
            link="https://www.montaramentogotx.com/"/>
            <Card 
            image="./src/assets/palios.jpg" 
            alt="buffalo chicken pizza with bacon and drizzled in ranch dressing" 
            name="Palio's Pizza Cafe"
            food="The Classic"
            link="https://www.paliospizzacafe.com/menu"/>
            <Card 
            image="./src/assets/piada.jpg" 
            alt="Pasta with chicken, parmesan, red sauce, and green onions" 
            name="Piada Italian Street Food"
            food="Diavolo Pasta"
            link="https://mypiada.com/menu/richardson"/>
            <Card 
            image="./src/assets/eataly.jpg" 
            alt="margherita pizza with sauce, cheese, and basil" 
            name="Eataly"
            food="Margherita Pizza"
            link="https://www.eataly.com/us_en/stores/dallas/dallas-restaurants/"/>
            <Card 
            image="./src/assets/bcd_tofu_house.jpg" 
            alt="a set of korean food" 
            name="BCD Tofu House"
            food="Bulgogi Combo"
            link="https://www.bcdtofuhouse.com/view-the-menu"/>
            <Card 
            image="./src/assets/tongue_in_cheek.jpg" 
            alt="two ice creams held in a hand in front of the tongue in cheek store" 
            name="Tongue in Cheek Ice Cream"
            food="Mango Sorbet"
            link="https://direct.chownow.com/order/31115/locations/46068"/>
            <Card 
            image="./src/assets/sushi_kadan.jpg" 
            alt="two sets of sushi on a table" 
            name="Sushi Kadan"
            food="Crazy Boy Roll and a Miso Soup"
            link="https://www.doordash.com/store/sushi-kadan-carrollton-24478929/?pickup=true&utm_campaign=gpa"/>
            <Card 
            image="./src/assets/mango_mango.jpeg" 
            alt="an assortment of dessert treats" 
            name="Mango Mango"
            food="Mango Sundae"
            link="https://www.mangomangodessert.com/menu"/>
        </div>
    )
}

export default CardSet;