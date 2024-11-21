export interface IParcels_data {
  id: string;
  logo: string;
  status: string;
  from: string;
  to: string;
  days: string;
  type: string;
  weight: string;
  history: History[];
}

export interface History {
  message: string;
  location: string;
  date: string;
  time: string;
}

export const parcels_data: IParcels_data[] = [
  {
    id: "RD 7239 4911",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
    status: "Delivered",
    from: "Germany, Europe",
    to: "India, Asia",
    days: "7 days",
    type: "Transit",
    weight: "10kg",
    history: [
      {
        message: "Accepted by DHL Express",
        location: "DHL Express, Germany",
        date: "1st August, 2023",
        time: "10:00am",
      },
      {
        message: "Shipped to India, Asia",
        location: "DHL Express, Germany",
        date: "2nd August, 2023",
        time: "2:00pm",
      },
      {
        message: "Arrived at India, Asia",
        location: "India, Asia",
        date: "5th August, 2023",
        time: "11:00am",
      },
      {
        message: "Departed India, Asia",
        location: "New Delhi, India",
        date: "6th August, 2023",
        time: "3:00pm",
      },
      {
        message: "Delivered to recipient",
        location: "Mumbai, India",
        date: "7th August, 2023",
        time: "9:00am",
      },
    ],
  },
  {
    id: "RD 5321 2385",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAIk5LiyuXxBmL2cfQFyoquKpu87d7VI_prqlEunsKQu5lj9Ns24v4P_SR86bpwDtuWY&usqp=CAU",
    status: "In Transit",
    from: "Brazil, South America",
    to: "Australia, Oceania",
    days: "8 days",
    type: "Transit",
    weight: "7kg",
    history: [
      {
        message: "Accepted by Global Express",
        location: "Global Express, Brazil",
        date: "5th September, 2023",
        time: "9:00am",
      },
      {
        message: "Shipped to Australia, Oceania",
        location: "Global Express, Brazil",
        date: "6th September, 2023",
        time: "1:00pm",
      },
      {
        message: "Arrived at Sydney, Australia",
        location: "Sydney, Australia",
        date: "9th September, 2023",
        time: "4:00pm",
      },
      {
        message: "Departed Sydney, Australia",
        location: "Melbourne, Australia",
        date: "10th September, 2023",
        time: "12:00pm",
      },
      {
        message: "On the way to Melbourne, Australia",
        location: "Australia",
        date: "11th September, 2023",
        time: "8:00am",
      },
    ],
  },
  {
    id: "RD 9420 6823",
    logo: "https://seeklogo.com/images/F/flipkart-logo-C9E637A758-seeklogo.com.png",
    status: "Delivered",
    from: "Japan, Asia",
    to: "South Africa, Africa",
    days: "12 days",
    type: "Transit",
    weight: "3kg",
    history: [
      {
        message: "Accepted by Japan Express",
        location: "Japan Express, Japan",
        date: "12th November, 2023",
        time: "11:00am",
      },
      {
        message: "Shipped to South Africa, Africa",
        location: "Japan Express, Japan",
        date: "14th November, 2023",
        time: "2:00pm",
      },
      {
        message: "Arrived at South Africa, Africa",
        location: "South Africa, Africa",
        date: "17th November, 2023",
        time: "10:00am",
      },
      {
        message: "Departed South Africa, Africa",
        location: "Johannesburg, South Africa",
        date: "18th November, 2023",
        time: "5:00pm",
      },
      {
        message: "Delivered to recipient",
        location: "Cape Town, South Africa",
        date: "20th November, 2023",
        time: "1:00pm",
      },
    ],
  },
  {
    id: "RD 2647 5910",
    logo: "https://pbs.twimg.com/profile_images/1567807256091308032/4AXfLwia_400x400.jpg",
    status: "In Transit",
    from: "China, Asia",
    to: "United Kingdom, Europe",
    days: "6 days",
    type: "Transit",
    weight: "4kg",
    history: [
      {
        message: "Accepted by China Post",
        location: "Beijing, China",
        date: "15th October, 2023",
        time: "10:00am",
      },
      {
        message: "Shipped to United Kingdom, Europe",
        location: "Beijing, China",
        date: "16th October, 2023",
        time: "3:00pm",
      },
      {
        message: "Arrived at United Kingdom, Europe",
        location: "London, UK",
        date: "18th October, 2023",
        time: "9:00am",
      },
      {
        message: "Departed London, UK",
        location: "Manchester, UK",
        date: "19th October, 2023",
        time: "4:00pm",
      },
      {
        message: "On the way to Manchester, UK",
        location: "UK",
        date: "20th October, 2023",
        time: "7:00am",
      },
    ],
  },
  {
    id: "RD 7239 4911",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSR4sWGfuHCmHvYGFZVQvgRWI1CGQMSVVN2g&s",
    status: "Delivered",
    from: "Germany, Europe",
    to: "India, Asia",
    days: "7 days",
    type: "Transit",
    weight: "10kg",
    history: [
      {
        message: "Accepted by DHL Express",
        location: "DHL Express, Germany",
        date: "1st August, 2023",
        time: "10:00am",
      },
      {
        message: "Shipped to India, Asia",
        location: "DHL Express, Germany",
        date: "2nd August, 2023",
        time: "2:00pm",
      },
      {
        message: "Arrived at India, Asia",
        location: "India, Asia",
        date: "5th August, 2023",
        time: "11:00am",
      },
      {
        message: "Departed India, Asia",
        location: "New Delhi, India",
        date: "6th August, 2023",
        time: "3:00pm",
      },
      {
        message: "Delivered to recipient",
        location: "Mumbai, India",
        date: "7th August, 2023",
        time: "9:00am",
      },
    ],
  },
];
