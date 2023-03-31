export type Gift = {
    name: string,
    link: string,
    description: string,
    price: number,
    tags : string[]
}

const GIFTS : Gift[]=[
     
     {name:"Portable Hand Warmer",
     link:  "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2019/11/hand-warmers-700x517.png",
     description:  "A hand warmer for the outdoors.",
     price:  39.99,
    tags:   ["technology"]
  },
  {name:"Vinyl",
  link:  "https://i5.walmartimages.com/asr/1988b006-b2e2-4d50-8d73-dea4a4e9510f.4f7152260db1c1c856bfea731ffe5131.jpeg",
  description:  "A vinyl machine, classical way to deliver music.",
  price:  60,
 tags:   ["music","technology","aesthetic"]
},
     {name:"A Jewelry set",
    link: "https://ae01.alicdn.com/kf/Hb9e4715005874f968fa53fe0ab3a3725K/COlOR-BEST-QUALITY-BRILLIANT-CRYSTAL-ZIRCON-EARRINGS-AND-NECKLACE-JEWELRY-SET-WEDDING-DRESS-ACCESSARIES.jpg_Q90.jpg_.webp",
    description: "Diamonds and gold always get sold.",
     price:1600,
    tags: ["fashion","aesthetic"]
},
     {name:"Nike Jordan Retro 2021",
    link: "https://s3.amazonaws.com/nikeinc/assets/100361/AJ_I_RETRO_HIGH_OG_555088-134_A1_Lateral_HR_hd_1600.jpg?1605198450",
    description: "A vey cool looking pair of shoes",
    price: 450,
   tags:  ["fashion","athletics","aesthetic"]
},
     {name:"Lamp Speaker",
    link:"https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1311500-894&recipeName=680",
    description:"Bluetooth portable lamp speaker.",
     price:99.99,
     tags:["music","technology","aesthetic"]
},
     {name:"Headphones",
    link: "https://cdn.luxe.digital/media/2020/06/03164207/best-over-ear-headphones-master-dynamic-MW65-review-luxe-digital%402x.jpg",
    description: "Brown Leather classic headphones.",
     price:249.99,
     tags:["music","technology","aesthetic"]
},
     {name:"Flexispot Bike chair-desk",
    link: "https://m.media-amazon.com/images/I/81YXI9KcClS._AC_SL1500_.jpg",
    description: "Exercise and work at the same time.",
     price:399.99,
     tags:["athletics","technology"]
},
     {name:"PS5",
    link: "https://media.wired.com/photos/601dde27f1bf194f33695d95/4:3/w_2396,h_1797,c_limit/Gear-PS5-2-src-Sony-teal.jpg",
    description: "Latest gaming console.",
     price:499.99,
     tags:["gaming","technology"]
},
     {name:"Arsenal retro jacket",
    link: "https://www.footballshirtculture.com/images/stories/arsenal-90-92-adidas-retro-track-jacket/arsenal_90_92_adidas_retro_track_jacket_e.jpg",
    description: "90/92 Arsenal jacket. Fashion for winners. Tottenham who?",
     price:299.99,
     tags:["sports","aesthetic","athletics","fashion"]
},
     {name:"Rose Sweatshirt",
    link: "https://img.ltwebstatic.com/images3_pi/2020/09/04/159920530285d853cf5a1a40108ea241b2fc018300_thumbnail_600x.webp",
    description: "Black and Pink.",
     price:18.95,
     tags:["aesthetic","fashion"]
},
     {name:"Modern Nike Fleece Sweatpants",
    link: "https://pa.namshicdn.com/product/A6/77127W/1-zoom-desktop.jpg",
   description:  "Sweatpants for your favourite couch potato.",
     price:49.99,
     tags:["aesthetic","athletics","fashion"]
},
     {name:"Polaroid",
    link :"https://pyxis.nymag.com/v1/imgs/29d/08b/bcdea27b1074c845663690281c1c434058-11-polaroid.rsquare.w700.jpg",
     description:"Instant pictures, instant memories.",
     price: 99.99,
     tags:["technology"]
},
     {name:"Air Jordan: Travis Scott",
    link: "https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott/Images/Air-Jordan-6-Retro-Travis-Scott/Lv2/img01.jpg?auto=compress&w=1140&q=90&dpr=2&updated_at=1611191963&fit=clip&fm=jpg&ixlib=react-9.1.5",
    description: "Travis scott signature shoes.",
     price:399.99,
     tags:["fashion","aesthetic"]
},
     {name:"Map Pendant",
    link: "https://i.pinimg.com/originals/18/a7/30/18a7304173d8076830cefb15abeb3dfb.jpg",
    description: "A reminder of origin.",
     price:399.99,
     tags:["aesthetic"]
},
     {name:"Hat",
    link: "https://static.nike.com/a/images/t_default/00e255fe-fc64-4cb1-9f47-d01e554ec69a/sportswear-cap-4c3dXh.png",
   description:  "Keep your head cosy.",
     price:29.99,
     tags:["fashion","aesthetic"]
},
     {name:"Fitbit",
    link: "https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/inspire2/herostatic/black/proxima-black-device-3qt.png",
    description: "Monitor biometrics during workouts.",
     price:139.99,
     tags:["technology","athletics"]
},
     {name:"Dressy Watch",
    link: "https://cdn.luxe.digital/media/2020/06/06175223/best-dress-watches-luxe-digital%402x.jpg",
    description: "Tell time differently.",
     price:249.99,
     tags:["fashion","aesthetic"]
},
     {name:"Book",
    link: "https://robbreport.com/wp-content/uploads/2021/05/Group_Color_Pop.png?w=1000",
    description: "A novel, fiction, drama or sci-fi story.",
     price:29.99,
     tags:["aesthetic"]
},
     {name:"Airfryer",
    link: "https://images.philips.com/is/image/philipsconsumer/10400fe518864b45b2e3ad1f01191d09?$jpglarge$&wid=1250",
    description: "Make frying easier.",
     price:179.99,
     tags:["technology"]
},
     {name:"Concert  Tickets",
    link: "https://media.istockphoto.com/vectors/two-pair-vector-ticket-isolated-isolated-on-white-background-cinema-vector-id1179416950?k=20&m=1179416950&s=612x612&w=0&h=GxQTRUfcHQ-2vhjymO9XaZn5zNht4AX6ZcYX5Cmx0Vk=",
    description: "Enjoy live music",
     price:199.99,
     tags:["music"]
},
     {name:"Beanie",
    link: "https://img.hatshopping.com/Skate-Beanie-with-Cuff-grey.46534_rf13.jpg",
    description: "Best way to keep your head warm",
     price:24.99,
     tags:["fashion","aesthetic"]
},
     {name:"Windbreaker",
    link: "https://s7d5.scene7.com/is/image/UrbanOutfitters/61558862_040_b?$xlarge$&fit=constrain&qlt=80&wid=640",
    description: "Break the wind......Get it",
     price:72.99,
     tags:["aesthetic", "fashion"]
},
     {name:"Adidas running shoes",
     link:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/32cd21bed32344f38f50ab7a011d2044_9366/FortaRun_Running_Shoes_2020_Black_FW3719_01_standard.jpg",
     description:"Run in style",
     price:65.00,
     tags: ["athletics"]
},
     {name:"USB fan",
     link:"https://i5.walmartimages.com/asr/e7eb4f61-706f-49d5-a9d1-0e635848531d.17bb328fb95b0e6a405061886ca32855.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff",
     description:"Portable fan for the summers heat",
     price:40.00,
     tags: ["technology"]
},
     {name:"Les Paul Guitar",
    link: "https://static.gibson.com/product-images/Epiphone/EPIEMA551/Honeyburst/front-banner-1600_900.png",
    description: "or any other instrument of your choice",
     price:1999.99,
     tags:["technology","music"]
},
     {name:"Lava Lamp",
    link: "https://images.unsplash.com/photo-1574882225022-5f45b99d4966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Light up your room colorfully",
     price:29.99,
     tags:["technology","lamp"]
},
     {name:"VGazer floating bulb",
    link: "https://m.media-amazon.com/images/I/51N1Nd3u+ML._AC_SL1000_.jpg",
    description: "Use science or sorcery to brighten your life",
     price:69.99,
     tags:["technology","lamp","aesthetic"]
},
     {name:"Sports Jersey (Liverpool)",
    link: "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/24/27b5eee2dfc7a1ea805b0b25862780b9702a6d1d.jpeg",
    description: "Represent a stylish team",
     price:199.99,
     tags:["athletics","fashion"]
},
     {name:"Blendjet",
    link: "https://m.media-amazon.com/images/I/71R3exZUUVL._AC_SL1500_.jpg",
    description: "Smoothie on the go",
     price:64.99,
     tags:["technology","appliance"]
},
     {name:"Miseyo roller stamp",
    link: "https://m.media-amazon.com/images/I/71s0wmGOvxL._AC_SL1500_.jpg",
    description: "Cover sensitive information conveniently",
     price:19.99,
     tags:["household","appliance"]
},
     {name:"Laptop",
    link: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-macbook-air-gold-select-201902?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1548454547923",
    description: "So much you can do with this one",
     price:1599.99,
     tags:["technology"]
},
     {name:"Rollerblades",
    link: "https://www.rollerblade.com/files/15390/_2000x2000r_07958600816_ZETRABLADE_PHOTO-PRIMARY_ANGLED_VIEW.jpg",
    description: "Skate through life",
     price:219.99,
     tags:["athletics"]
},
     {name:"Desk Plants",
    link: "https://refer.althemist.com/wp-content/uploads/2018/01/mapple-desk-planter_prod2.jpg",
    description: "Add life to your desk",
     price:59.99,
     tags:["household","aesthetic"]
},
     {name:"Soulfood sweatshirt: Zero Fatigue",
    link: "https://freight.cargo.site/w/1200/i/c8ab96661b188881dbe40c098cb5d107edc0fd5e90b2668b31a49602d84c3de7/9.png",
    description: "Shop at your favourite artists merch store",
     price:55.00,
     tags:["music","aesthetic","fashion"]
},
     {name:"Zara: Best sellers collection",
    link: "https://images.milledcdn.com/2020-09-01/ZAwIpiLjjknqVb2q/MQfZuJcPTfsd.jpeg",
    description: "People seem to love Zara",
     price:89.99,
     tags:["aesthetic","fashion"]
},
     {name:"$25 gift card",
    link: "https://imageio.forbes.com/specials-images/imageserve/5f1eaf1de0a87fc7685dbe9b/Apple-iTunes-music-gift-cards-of-different-values/960x0.jpg?format=jpg&width=960",
    description: "Google play or itunes store gift card",
     price:25.00,
     tags:["music"]
},
     {name:"Lululemon Activewear",
    link: "https://akns-images.eonline.com/eol_images/Entire_Site/2020817/rs_1200x1200-200917100917-1200_Ecomm-Lululemon-Ice_Dyed_Collection-gj.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
   description:  "",
     price:80.00,
     tags:["athletics", "fashion"]
},
     


     
]
export default GIFTS