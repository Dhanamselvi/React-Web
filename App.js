import React from "react";
import ReactDOM from "react-dom/client";

/*
* Header
    - Logo
    - Nav Items
* Body
    - Search 
    - RestrauntContainer
        - RestrauntCard
            - Img
            - Name of Res,Cusine,Start Rating,Delivery Time
* Footer
    - CopyRight
    - Links
    - Address
    - Contact
*/
const resList = [
        {
            "info": {
                "id": "17819",
                "name": "KFC",
                "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
                "locality": "Thyagaraya Road",
                "areaName": "T. Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "17819",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3700
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3700
                },
                "parentId": "547",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 2.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "23 mins",
                    "lastMileTravelString": "2.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 01:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-thyagaraya-road-t-nagar-chennai-17819",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "10108",
                "name": "Meat and Eat",
                "cloudinaryImageId": "o7jmumglefb1mc1dm93c",
                "locality": "Ameerjan Street",
                "areaName": "Choolaimedu",
                "costForTwo": "₹250 for two",
                "cuisines": [
                    "Indian"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "10108",
                    "fees": [
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "632",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 43,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "43 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-27 23:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/meat-and-eat-ameerjan-street-choolaimedu-chennai-10108",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "24343",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "pfqyaxli3x1e6vrxnurj",
                "locality": "Nungambakam",
                "areaName": "Nungambakkam",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas",
                    "Italian",
                    "Pastas",
                    "Desserts"
                ],
                "avgRating": 4.5,
                "feeDetails": {
                    "restaurantId": "24343",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "2456",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-27 22:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "₹100 OFF",
                    "subHeader": "ABOVE ₹999",
                    "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-nungambakam-nungambakkam-chennai-24343",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "410398",
                "name": "McDonald's",
                "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                "locality": "Thousand Lights",
                "areaName": "Nungambakkam",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "410398",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "630",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 1.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "23 mins",
                    "lastMileTravelString": "1.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 02:45:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-thousand-lights-nungambakkam-chennai-410398",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "16235",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Nungambakkam",
                "areaName": "Nungambakkam",
                "costForTwo": "₹400 for two",
                "cuisines": [
                    "Pizzas"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "16235",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "721",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 23,
                    "lastMileTravel": 1.1,
                    "serviceability": "SERVICEABLE",
                    "slaString": "23 mins",
                    "lastMileTravelString": "1.1 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 00:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "50% OFF",
                    "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-nungambakkam-chennai-16235",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "410277",
                "name": "Wow! Momo",
                "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
                "locality": "Nungambakkam",
                "areaName": "Nungambakkam",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Tibetan",
                    "Healthy Food",
                    "Asian",
                    "Chinese",
                    "Snacks",
                    "Continental",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                    "restaurantId": "410277",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "1776",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 29,
                    "lastMileTravel": 0.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "29 mins",
                    "lastMileTravelString": "0.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 03:00:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "EVERY ITEM",
                    "subHeader": "@ ₹99"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-momo-nungambakkam-chennai-410277",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "47812",
                "name": "The Belgian Waffle Co.",
                "cloudinaryImageId": "8cb220fa3997a3b928d2ffb6c098acaf",
                "locality": "KNK Road",
                "areaName": "Nungambakkam",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Waffle",
                    "Desserts",
                    "Ice Cream"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "47812",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "2233",
                "avgRatingString": "4.4",
                "totalRatingsString": "5K+",
                "sla": {
                    "deliveryTime": 24,
                    "lastMileTravel": 1.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "24 mins",
                    "lastMileTravelString": "1.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 01:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-knk-road-nungambakkam-chennai-47812",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "9358",
                "name": "Subway",
                "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                "locality": "Nungambakkam",
                "areaName": "Ispahani center",
                "costForTwo": "₹350 for two",
                "cuisines": [
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages"
                ],
                "avgRating": 4.1,
                "feeDetails": {
                    "restaurantId": "9358",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "2",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 25,
                    "lastMileTravel": 2.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "25 mins",
                    "lastMileTravelString": "2.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-28 05:59:00",
                    "opened": true
                },
                "badges": {},
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "40% OFF",
                    "subHeader": "UPTO ₹80"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/subway-nungambakkam-ispahani-center-chennai-9358",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "18045",
                "name": "A2B - Adyar Ananda Bhavan",
                "cloudinaryImageId": "mmwqluenvuuvnz4wntqm",
                "locality": "Pondy Bazaar",
                "areaName": "T. Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Sweets",
                    "Chinese"
                ],
                "avgRating": 4.4,
                "veg": true,
                "feeDetails": {
                    "restaurantId": "18045",
                    "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "22",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                    "deliveryTime": 26,
                    "lastMileTravel": 2.8,
                    "serviceability": "SERVICEABLE",
                    "slaString": "26 mins",
                    "lastMileTravelString": "2.8 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-27 22:45:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {},
                        "textExtendedBadges": {}
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-pondy-bazaar-t-nagar-chennai-18045",
                "type": "WEBLINK"
            }
        },
        {
            "info": {
                "id": "448584",
                "name": "EatFit",
                "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
                "locality": "Manickam road",
                "areaName": "Aminjikarai",
                "costForTwo": "₹270 for two",
                "cuisines": [
                    "Chinese",
                    "Healthy Food",
                    "Tandoor",
                    "Pizzas",
                    "North Indian",
                    "Thalis",
                    "Biryani"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                    "restaurantId": "448584",
                    "fees": [
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        },
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 3300
                        },
                        {
                            "name": "BASE_TIME"
                        }
                    ],
                    "totalFee": 3300
                },
                "parentId": "76139",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                    "deliveryTime": 35,
                    "lastMileTravel": 2.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "35 mins",
                    "lastMileTravelString": "2.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2023-09-27 23:00:00",
                    "opened": true
                },
                "badges": {
                    "textExtendedBadges": [
                        {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "brand",
                            "fontColor": "#7E808C"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {},
                        "textBased": {},
                        "textExtendedBadges": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "",
                                        "fontColor": "#7E808C",
                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                        "shortDescription": "brand"
                                    }
                                }
                            ]
                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "EVERY ITEM",
                    "subHeader": "@ ₹159"
                },
                "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                        "text": "BENEFITS",
                        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                    },
                    "freedelMessage": "FREE DELIVERY"
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {},
                        "video": {}
                    }
                },
                "reviewsSummary": {},
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {}
            },
            "analytics": {},
            "cta": {
                "link": "https://www.swiggy.com/restaurants/eatfit-manickam-road-aminjikarai-chennai-448584",
                "type": "WEBLINK"
            }
        }
    ]

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://th.bing.com/th/id/OIP.LGetv97_2OwMpxHVYpn25gHaE8?w=260&h=180&c=7&r=0&o=5&pid=1.7" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// Destructring Live API in the Component
const RestaurantCardWithLiveAPI = (props) =>{
    const {resData} = props;
    const { id,
            cloudinaryImageId,
            name,
            cuisines,
            avgRating,
            deliveryTime
          } = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img alt="res-logo"
                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} 
                 className="res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCardWithLiveAPI key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);