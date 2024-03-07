import React from 'react'
import bgKing from "../../assets/bgKing.jpg"
import bgTemple from "../../assets/bgTemple.jpg"
import bgFood from "../../assets/bgFood.jpg"
import bgFood2 from "../../assets/bgFood2.jpg"
import bgFood3 from "../../assets/bgFood3.jpg"
import bgFood4 from "../../assets/bgFood4.jpg"

const BottomMain = () => {

    const backgroundKing = {
        backgroundImage: `url(${bgKing})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }
    const backgroundFood3 = {
        backgroundImage: `url(${bgFood3})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }
    const backgroundFood4 = {
        backgroundImage: `url(${bgFood4})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }
    const backgroundFood2 = {
        backgroundImage: `url(${bgFood2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }
    const backgroundFood = {
        backgroundImage: `url(${bgFood})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }
    const backgroundTemple = {
        backgroundImage: `url(${bgTemple})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        boxShadow: "inset 1px 1px  100px 55px rgba(0, 0, 0, 0.8)"
    }


    return (
        <div id="section1" className="bg-[#1C1D1F] px-24 pb-7">
            <div className="flex pt-10">
                <div className="w-[60%]">
                    <h1 className=" text-3xl text-white mb-5 font-poppins">History of the South Korea</h1>
                    <p className="text-white font-poppins text-sm">
                        The history of South Korea begins with the Japanese surrender on 2 September 1945. At that time, South Korea and North Korea were divided, despite being the same people and on the same peninsula. In 1950, the Korean War broke out. North Korea overran South Korea until US-lead UN forces intervened. At the end of the war in 1953, the border between South and North remained largely similar. Tensions between the two sides continued. South Korea alternated between dictatorship and liberal democracy. It underwent substantial economic development.After Imperial Japan's defeat in the Pacific War in 1945, the Korean region, which was part of Japan's territory, was occupied by American and Soviet forces. In 1948, with the end of the U.S. military government, South Korea declared its independence from Japan as the Republic of Korea. In 1952, when Japan approved the independence of the Korean region under the San Francisco Peace Treaty, it became a completely independent and sovereign nation under international law. The unconditional surrender of Japan led to the division of Korea into two occupation zones (similar to the four zones in Germany), with the United States administering the southern half of the peninsula and the Soviet Union administering the area north of the 38th parallel. This division was meant to be temporary (as was in Germany) and was first intended to return a unified Korea back to its people after the United States, United Kingdom, Soviet Union, and China could arrange a single government for the peninsula.The two parties were unable to agree on the implementation of a Joint Trusteeship over Korea because of 2 different opinions. This led in 1948 to the establishment of two separate governments with the two very opposite ideologies; the Communist-aligned Democratic People's Republic of Korea (DPRK) and the West-aligned First Republic of Korea  each claiming to be the legitimate government of all of Korea. On 25 June 1950, the Korean War broke out. After much destruction, the war ended on 27 July 1953, with the 1948 status quo being restored, as neither the DPRK nor the First Republic had succeeded in conquering the other's portion of the divided Korea. The peninsula was divided by the Korean Demilitarized Zone and the two separate governments stabilized into the existing political entities of North and South Korea.

                        South Korea's subsequent history is marked by alternating periods of democratic and autocratic rule. Civilian governments are conventionally numbered from the First Republic of Syngman Rhee to the contemporary Sixth Republic. The First Republic, arguably democratic at its inception (though preceded by major anti-communist and anti-socialist purges), became increasingly autocratic until its collapse in 1960. The Second Republic was strongly democratic but was overthrown in under a year and replaced by an autocratic military regime. The Third, Fourth, and Fifth Republics were nominally democratic, but are widely regarded as the continuation of military rule. With the current Sixth Republic, the country has gradually stabilized into a liberal democracy.

                        Since its inception, South Korea has seen substantial development in education, economy, and culture. Since the 1960s, the nation has developed from one of Asia's poorest to one of the world's wealthiest nations. Education, particularly at the tertiary level, has expanded dramatically. It is said to be one of the "Four Tigers" of rising Asian states along with Singapore, Taiwan and Hong Kong.
                    </p>
                </div>
                <div className="flex-1">
                    <div style={backgroundKing} className="w-full h-96 rounded-md ml-6 "></div>
                    <div style={backgroundTemple} className="w-full h-96 rounded-md ml-6 mt-10 "></div>
                </div>
            </div>
            {/* ------------------------------------------------------ */}
            <div className="flex pt-10 mt-5">
                <div className="w-[60%]">
                    <h1 className=" text-3xl text-white mb-5 font-poppins">Korean Cuisine</h1>
                    <p className="text-white font-poppins text-sm mb-4">
                        Korean cuisine has evolved through centuries of social and political change. Originating from ancient agricultural and nomadic traditions in Korea and southern Manchuria, Korean cuisine reflects a complex interaction of the natural environment and different cultural trends.

                        Korean cuisine is largely based on rice, vegetables, seafood and (at least in South Korea) meats. Dairy is largely absent from the traditional Korean diet. Traditional Korean meals are named for the number of side dishes (반찬; 飯饌; banchan) that accompany steam-cooked short-grain rice. Kimchi is served at nearly every meal. Commonly used ingredients include sesame oil, doenjang (fermented bean paste), soy sauce, salt, garlic, ginger, gochugaru (pepper flakes), gochujang (fermented red chili paste) and napa cabbage.

                        Ingredients and dishes vary by province. Many regional dishes have become national. Korean royal court cuisine once brought all of the unique regional specialties together for the royal family. Foods are regulated by Korean cultural etiquette.

                        Kimjang, which means making kimchi, is listed on UNESCO Intangible Heritage List.
                    </p>

                    <h1 className=" text-3xl text-white mb-5 font-poppins">Prehistoric</h1>
                    <p className="text-white font-poppins text-sm mb-4">
                        In the Jeulmun pottery period (approximately 8000 to 1500 BCE), hunter-gatherer societies engaged in fishing and hunting, and incipient agriculture in the later stages. Since the beginning of the Mumun pottery period (1500 BCE), agricultural traditions began to develop with new migrant groups from the Liao River basin of Manchuria. During the Mumun period, people grew millet, barley, wheat, legumes and rice, and continued to hunt and fish. Archaeological remains point to development of fermented beans during this period, and cultural contact with nomadic cultures to the north facilitated domestication of animals.
                    </p>
                    <h1 className=" text-3xl text-white mb-5 font-poppins">Three Kingdoms period</h1>
                    <p className="text-white font-poppins text-sm mb-4">
                        The Three Kingdoms period (57 BCE 668 CE) was one of rapid cultural evolution. The kingdom of Goguryeo (37 BCE  668 CE) was located in the northern part of the peninsula along much of modern-day Manchuria. The second kingdom, Baekje (18 BCE  660 CE), was in the southwestern portion of the peninsula, and the third, Silla (57 BCE  935 CE), was located at the southeastern portion of the peninsula. Each region had its own distinct set of cultural practices and foods. For example, Baekje was known for cold foods and fermented foods like kimchi. The spread of Buddhism and Confucianism through cultural exchanges with China during the fourth century CE began to change the distinct cultures of Korea.

                        Attributed with the earliest kimchi, the Goguryeo people were skilled at fermenting and widely consumed fermented food.
                    </p>
                    <h1 className=" text-3xl text-white mb-5 font-poppins">Goryeo period</h1>
                    <p className="text-white font-poppins text-sm mb-4">
                        During the latter Goryeo period, the Mongols invaded Goryeo in the 13th century. Some traditional foods found today in Korea have their origins during this period. The dumpling dish, mandu, grilled meat dishes, noodle dishes, and the use of seasonings such as black pepper, all have their roots in this period
                    </p>
                    <h1 className=" text-3xl text-white mb-5 font-poppins">Joseon period</h1>
                    <p className="text-white font-poppins text-sm mb-4">
                        Agricultural innovations were significant and widespread during this period, such as the invention of the rain gauge during the 15th century. During 1429, the government began publishing books on agriculture and farming techniques, which included Nongsa jikseol (literally "Straight Talk on Farming"), an agricultural book compiled under King Sejong.

                        A series of invasions in the earlier half of the Joseon caused a dynamic shift in the culture during the second half of the period. Groups of silhak ("practical learning") scholars began to emphasize the importance of looking outside the country for innovation and technology to help improve the agricultural systems. Crops traded by Europeans from the New World began to appear, acquired through trade with China, Japan, Europe, and the Philippines; these crops included maize, sweet potatoes, chili peppers, tomatoes, peanuts, and squash. Potatoes and sweet potatoes were particularly favored as they grew in soils and on terrains that were previously unused.

                        Government further developed agriculture through technology and lower taxation. Complex irrigation systems built by government allowed peasant farmers to produce larger crop volumes and produce crops not only for sustenance but also as cash crops. Reduced taxation of the peasantry also furthered the expanded commerce through increasing periodic markets, usually held every five days. One thousand such markets existed in the 19th century, and were communal centers for economic trade and entertainment.

                        The end of the Joseon period was marked by consistent encouragement to trade with the Western world, China and Japan. In the 1860s, trade agreements pushed by the Japanese government led the Joseon dynasty to open its trade ports with the west, and to numerous treaties with the United States, Britain, France, and other Western countries.

                        The opening of Korea to the Western world brought further exchange of culture and food. Western missionaries introduced new ingredients and dishes to Korea. Joseon elites were introduced to these new foods by way of foreigners who attended the royal court as advisers or physicians. This period also saw the introduction of various seasonings imported from Japan via western traders and alcoholic drinks from China
                    </p>
                </div>
                <div className="flex-1">
                    <div style={backgroundFood} className="w-full h-96 rounded-md ml-6 "></div>
                    <div style={backgroundFood2} className="w-full h-96 rounded-md ml-6 mt-10 "></div>
                    <div style={backgroundFood4} className="w-full h-64 rounded-md ml-6 mt-10 "></div>
                    <div style={backgroundFood3} className="w-full h-80 rounded-md ml-6 mt-10 "></div>
                </div>
            </div>
        </div>
    )
}

export default BottomMain