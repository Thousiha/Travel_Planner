const DestinationPackages = {
  "Azerbaijan": [
    {
      title: "Caspian Explorer",
      cost: "$950",
      foods: "Breakfast only",
      stay: "3-star hotel",
      features: ["City tour", "Mud volcanoes", "Gobustan tour"]
    },
    {
      title: "Cultural Retreat",
      cost: "$1300",
      foods: "All meals",
      stay: "4-star resort",
      features: ["Local experiences", "Museum entries", "Mountain hiking"]
    }
  ],
  "Bali": [
    {
      title: "Beach Bliss",
      cost: "$1200",
      foods: "Breakfast and Dinner",
      stay: "Beach villa",
      features: ["Surfing lessons", "Island hopping", "Sunset cruise"]
    },
    {
      title: "Zen Escape",
      cost: "$1400",
      foods: "All-inclusive",
      stay: "Luxury retreat",
      features: ["Yoga retreat", "Balinese spa", "Cultural dance night"]
    }
  ],
  "Bangkok": [
    {
      title: "City Adventures",
      cost: "$1100",
      foods: "Breakfast only",
      stay: "City hotel",
      features: ["Grand Palace", "Wat Arun", "Chatuchak Market"]
    },
    {
      title: "Nightlife Experience",
      cost: "$1300",
      foods: "All meals",
      stay: "Luxury hotel",
      features: ["Rooftop bars", "Night markets", "Thai boxing"]
    }
  ],
  "Cambodia": [
    {
      title: "Angkor Wat Tour",
      cost: "$1200",
      foods: "Breakfast only",
      stay: "Guesthouse",
      features: ["Angkor Wat", "Tonle Sap Lake", "Floating villages"]
    },
    {
      title: "Cultural Exploration",
      cost: "$1500",
      foods: "All meals",
      stay: "Boutique hotel",
      features: ["Temples tour", "Local villages", "Cambodian cooking class"]
    }
  ],
  "Costa Rica": [
    {
      title: "Rainforest Adventure",
      cost: "$1250",
      foods: "Breakfast and Dinner",
      stay: "Eco-lodge",
      features: ["Zip-lining", "Wildlife spotting", "Rainforest hike"]
    },
    {
      title: "Beach Paradise",
      cost: "$1450",
      foods: "All-inclusive",
      stay: "Luxury beachfront resort",
      features: ["Scuba diving", "Snorkeling", "Beach volleyball"]
    }
  ],
  "Dubai": [
    {
      title: "Luxury Shopping",
      cost: "$1600",
      foods: "Breakfast only",
      stay: "5-star hotel",
      features: ["Dubai Mall", "Burj Khalifa", "Desert safari"]
    },
    {
      title: "Desert Adventure",
      cost: "$1800",
      foods: "Full board",
      stay: "Luxury desert resort",
      features: ["Camel trekking", "Sandboarding", "Bedouin camp experience"]
    }
  ],
  "Egypt": [
    {
      title: "Pyramids and Nile",
      cost: "$1600",
      foods: "All meals",
      stay: "Luxury cruise",
      features: ["Nile cruise", "Pyramids of Giza", "Valley of the Kings"]
    },
    {
      title: "Cairo & Alexandria",
      cost: "$1300",
      foods: "Breakfast only",
      stay: "5-star hotel",
      features: ["Cairo Museum", "Alexandria library", "Mediterranean beaches"]
    }
  ],
  "Hungary": [
    {
      title: "Budapest Tour",
      cost: "$1100",
      foods: "Breakfast and Dinner",
      stay: "3-star hotel",
      features: ["Buda Castle", "Thermal baths", "Danube river cruise"]
    },
    {
      title: "Cultural Escape",
      cost: "$1300",
      foods: "All meals",
      stay: "Boutique hotel",
      features: ["Folk dance", "Traditional meals", "Historic sites"]
    }
  ],
  "Indonesia": [
    {
      title: "Bali Highlights",
      cost: "$1300",
      foods: "Breakfast only",
      stay: "Beach villa",
      features: ["Mount Batur hike", "Sacred Monkey Forest", "Uluwatu Temple"]
    },
    {
      title: "Cultural Exploration",
      cost: "$1500",
      foods: "All meals",
      stay: "Eco-lodge",
      features: ["Traditional ceremonies", "Balinese cooking class", "Rice terrace trek"]
    }
  ],
  "Kazakhstan": [
    {
      title: "Almaty Adventure",
      cost: "$1200",
      foods: "Breakfast only",
      stay: "City hotel",
      features: ["Shymbulak Ski Resort", "Big Almaty Lake", "Kazakh culture tour"]
    },
    {
      title: "Steppe Exploration",
      cost: "$1400",
      foods: "All meals",
      stay: "Nomadic camp",
      features: ["Horseback riding", "Kazakh eagle hunting", "Cultural immersion"]
    }
  ],
  "Kenya": [
    {
      title: "Safari Adventure",
      cost: "$2500",
      foods: "Full board",
      stay: "Luxury lodge",
      features: ["Big Five safari", "Masai Mara", "Hot air balloon ride"]
    },
    {
      title: "Wildlife Expedition",
      cost: "$1800",
      foods: "All meals",
      stay: "Safari camp",
      features: ["Giraffe sanctuary", "Lake Nakuru", "Cultural encounters"]
    }
  ],
  "Krabi": [
    {
      title: "Beach Bliss",
      cost: "$1100",
      foods: "Breakfast and Dinner",
      stay: "Beach resort",
      features: ["Railay Beach", "Emerald Pool", "James Bond Island"]
    },
    {
      title: "Island Hopping",
      cost: "$1300",
      foods: "All meals",
      stay: "Island bungalow",
      features: ["Phi Phi Islands", "Snorkeling", "Kayaking"]
    }
  ],
  "Maldives": [
    {
      title: "Luxury Retreat",
      cost: "$2200",
      foods: "All-inclusive",
      stay: "Overwater villa",
      features: ["Private island", "Snorkeling", "Sunset dinners"]
    },
    {
      title: "Island Escape",
      cost: "$1900",
      foods: "Breakfast and Dinner",
      stay: "Beach villa",
      features: ["Yoga retreat", "Spa treatment", "Cultural experiences"]
    }
  ],
  "Mauritius": [
    {
      title: "Tropical Relaxation",
      cost: "$1600",
      foods: "All meals",
      stay: "Beach resort",
      features: ["Coral reefs", "Island tours", "Beach parties"]
    },
    {
      title: "Nature and Adventure",
      cost: "$1800",
      foods: "Breakfast and Dinner",
      stay: "Eco-lodge",
      features: ["Black River Gorges", "Hiking", "Waterfalls"]
    }
  ],
  "Netherlands": [
    {
      title: "Amsterdam Experience",
      cost: "$1300",
      foods: "Breakfast only",
      stay: "Canal house",
      features: ["Van Gogh Museum", "Rijksmuseum", "Cycling tours"]
    },
    {
      title: "Tulip Season",
      cost: "$1500",
      foods: "All meals",
      stay: "Country inn",
      features: ["Keukenhof Gardens", "Windmill tours", "Canal cruising"]
    }
  ],
  "Philippines": [
    {
      title: "Island Getaway",
      cost: "$1000",
      foods: "Breakfast only",
      stay: "Beach resort",
      features: ["Snorkeling", "Island hopping", "Relaxing on white sandy beaches"]
    },
    {
      title: "Cultural Exploration",
      cost: "$1350",
      foods: "All meals",
      stay: "Eco-lodge",
      features: ["Tribal tours", "Cultural immersion", "Local cooking classes"]
    }
  ],
  "Saudi Arabia": [
    {
      title: "Desert Exploration",
      cost: "$1600",
      foods: "All meals",
      stay: "Luxury desert resort",
      features: ["Camel trekking", "Bedouin culture", "Ancient ruins"]
    },
    {
      title: "Historical Journey",
      cost: "$1400",
      foods: "Breakfast only",
      stay: "5-star hotel",
      features: ["Al-Ula", "Madain Saleh", "Mecca visit"]
    }
  ]
};

export default DestinationPackages;
