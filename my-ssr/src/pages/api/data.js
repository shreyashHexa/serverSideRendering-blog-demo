// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


// pages/api/data.js
export default function handler(req, res) {
  const data = {
    title: "Some North West Facing House Vastu Tips to Maintain a Prosperous Life",
    meta: {
      postedOn: "21 September, 2024",
      time: "12:20 IST"
    },
    image: {
      src: "/images/unnamed.jpg",
      alt: "Demo",
      width: 1000,
      height: 300
    },
    intro: {
      text: "A North-West facing house can be auspicious if built and designed according to Vastu principles. Vastu Shastra emphasizes balance and harmony within a home by leveraging natural elements. The North-West direction is governed by the air element, and careful attention to its design can enhance prosperity, peace, and well-being. Below are some important Vastu tips to follow for a North-West facing house."
    },
    tableOfContents: [
      { id: "main-entrance", title: "1. Main Entrance Placement" },
      { id: "living-room", title: "2. Living Room Vastu" },
      { id: "kitchen-placement", title: "3. Kitchen Placement" },
      { id: "master-bedroom", title: "4. Master Bedroom Location" }
    ],
    sections: [
      {
        id: "main-entrance",
        title: "1. Main Entrance Placement",
        content: "For a North-West facing house, the ideal location for the main entrance is in the West-North-West (WNW) section, facing directly West or slightly North-West. This placement optimally balances energies associated with the air element, promoting prosperity, social relationships, and opportunities, which are crucial for business growth and harmonious living. The entrance door should open inwards and be made of sturdy materials, preferably wood, to symbolize strength and protection. It’s essential to keep the entrance area well-lit and aesthetically pleasing, possibly adorned with plants and symbols of positivity, while ensuring there are no obstructions that could hinder energy flow. By following these guidelines, residents can enhance their social connections, improve networking opportunities, and maintain a harmonious environment within their home. main entrance for a North-West facing house should ideally be in the North-West corner facing West..."
      },
      {
        id: "living-room",
        title: "2.Living Room Vastu",
        content: "Positioning the living room in the East or North-East direction is essential for utilizing natural light effectively, as it allows ample sunlight to flood the space throughout the day. The East orientation captures the warm morning rays, creating an inviting and energizing atmosphere that promotes positive vibes and enhances mood. Similarly, the North-East direction ensures a bright and airy ambiance, which aligns with Vastu principles that foster tranquility and harmony. This strategic placement not only contributes to a lively and pleasant environment for family gatherings but also encourages a sense of well-being and connection with nature.Position the living room in the East or North-East direction to utilize natural light..."
      },
      {
        id: "kitchen-placement",
        title: "3. Kitchen Placement",
        content: "In a North-West facing house, the living room should ideally be positioned in the East or North-East direction to maximize natural light and create a vibrant, welcoming atmosphere. This placement allows for the morning sunlight to fill the space, enhancing the overall mood and energy levels while promoting a sense of positivity and warmth. Additionally, aligning the living room with these directions adheres to Vastu principles, fostering harmony and tranquility within the home. This strategic arrangement not only encourages social interactions and family bonding but also ensures a bright and airy environment, making it an ideal gathering space for relaxation and enjoyment."
      },
      {
        id: "master-bedroom",
        title: "4. Master Bedroom Location",
        content: "In a North-West facing house, the master bedroom should ideally be situated in the South-West corner to promote stability, strength, and restful sleep. This strategic placement aligns with Vastu principles, which indicate that the South-West direction is auspicious for the head of the family, enhancing authority and well-being. The position provides a sense of security and support, contributing to a peaceful environment conducive to relaxation. Additionally, the South-West orientation allows for improved energy flow and helps maintain a balanced atmosphere in the home, making it a perfect retreat for rejuvenation and tranquility."
      }
    ]
  };

  res.status(200).json(data);
}
