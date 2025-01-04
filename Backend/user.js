const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Example cards array
const cards = [
    {
        id: 1,
        title: "First Time Login",
        image: "https://embed-ssl.wistia.com/deliveries/bdd35f63db2d3df62407d2138284631edcbf1d6b.webp?image_crop_resized=640x405",
        video: "/Videos/video1.mp4"
      },
      {
        id: 2,
        title: "Homescreen Navigation",
        image: "https://embed-ssl.wistia.com/deliveries/7166856205fe3a7000c2ac16787711dde3b5113e.webp?image_crop_resized=640x321",
        video: "/Videos/video2.mp4"
      },
      {
        id: 3,
        title: "Start A New Return",
        image: "https://embed-ssl.wistia.com/deliveries/8b1ffe856d9b2ba1a84cc415dd69384bc63f7f87.webp?image_crop_resized=640x366",
        video: "/videos/video3.mp4"
      },
      {
        id: 4,
        title: "Filing Status Selection",
        image: "https://embed-ssl.wistia.com/deliveries/f28fdc49fd214344484ef61ebbe664cd986eba2d.webp?image_crop_resized=640x364",
        video: "/videos/video4.mp4"
      },
      {
        id: 5,
        title: "Personal Information Entry ",
        image: "https://embed-ssl.wistia.com/deliveries/8b1ffe856d9b2ba1a84cc415dd69384bc63f7f87.webp?image_crop_resized=640x366",
        video: "/videos/video5.mp4"
      },
      {
        id: 6,
        title: "Dependent Entry Screen ",
        image: "https://embed-ssl.wistia.com/deliveries/f28fdc49fd214344484ef61ebbe664cd986eba2d.webp?image_crop_resized=640x364",
        video: "/videos/video6.mp4"
      },
      {
        id: 7,
        title: "Client List Search Option ",
        image: "https://embed-ssl.wistia.com/deliveries/abb4f13e02d4b57033f87f078fedd9a0a0c3251d.webp?image_crop_resized=640x367",
        video: "/videos/video7.mp4"
      },
      {
        id: 8,
        title: "Branded Mobile App ",
        image: "https://embed-ssl.wistia.com/deliveries/f51e0b9948a882f9ceb873b08f963e0872e36bfc.webp?image_crop_resized=640x320",
        video: "/videos/video8.mp4"
      },
      {
        id: 9,
        title: "Quick Refund Calculator ",
        image: "https://embed-ssl.wistia.com/deliveries/dbfba93bd588097271585804d9548d2d656fdf28.webp?image_crop_resized=640x360",
        video: "/videos/video9.mp4"
      },
      {
        id: 10,
        title: "Going Paperless ",
        image: "https://embed-ssl.wistia.com/deliveries/5896fa40a42e65df92ebf68bae178a4655f92257.webp?image_crop_resized=640x401",
        video: "/videos/video10.mp4"
      },
      {
        id: 11,
        title: "Carry Forward – Prior Year Client",
        image: "https://embed-ssl.wistia.com/deliveries/d7cf91fe15a49573bec1a195cc04724123c31067.webp?image_crop_resized=640x320",
        video: "/videos/video11.mp4"
      },
      {
        id: 12,
        title: "Adding Forms – Return Navigation",
        image: "https://embed-ssl.wistia.com/deliveries/42b1f9a903568678b75b68e1f6c5711ff79fc8f5.webp?image_crop_resized=640x367",
        video: "/videos/video12.mp4"
      },
      {
        id: 13,
        title: "Add Bank Product -Efile Page",
        image: "https://embed-ssl.wistia.com/deliveries/3f7ec81bea1a0a5ff4dab377402fc8d1b1110ccc.webp?image_crop_resized=640x320",
        video: "/videos/video13.mp4"
      },
      {
        id: 14,
        title: "Submission Page – Mark For Review",
        image: "https://embed-ssl.wistia.com/deliveries/1d9e5362a01f121d4186c3b4f1ed220e05df35ef.webp?image_crop_resized=640x320",
        video: "/videos/video14.mp4"
      },
      {
        id: 15,
        title: "Customer Portal – Client Portal",
        image: "https://embed-ssl.wistia.com/deliveries/15511a24f6de66ea19695238a6581ab8d6ee96ca.webp?image_crop_resized=640x324",
        video: "/videos/video15.mp4"
      },
      {
        id: 16,
        title: "Review Return Work Flow",
        image: "https://embed-ssl.wistia.com/deliveries/cccd2f306d50c33d5845b72d4a4630f7820dc798.webp?image_crop_resized=640x328",
        video: "/videos/video16.mp4"
      },
      {
        id: 17,
        title: "W2 Input",
        image: "https://embed-ssl.wistia.com/deliveries/7fddfa4db724c090e4aa7710c011584f4fc1951c.webp?image_crop_resized=640x325",
        video: "/videos/video17.mp4"
      },
      {
        id: 18,
        title: "Sch-C and 1099-NEC",
        image: "https://embed-ssl.wistia.com/deliveries/03372dc12829590aa10ff18bf4d653ae3ae827a0.webp?image_crop_resized=640x320",
        video: "/videos/video18.mp4"
      },
      {
        id: 19,
        title: "Child Care Credit – 2441",
        image: "https://embed-ssl.wistia.com/deliveries/1b2c3cd7e0bfc7629e25b75f323927c6a73611f0.webp?image_crop_resized=640x321",
        video: "/videos/video19.mp4"
      },
      {
        id: 20,
        title: "8867 – Due Dilligence",
        image: "https://embed-ssl.wistia.com/deliveries/bc97c4d20ed0cc1b1781f5a8072ac712b1b721ee.webp?image_crop_resized=640x323",
        video: "/videos/video20.mp4"
      },
      {
        id: 21,
        title: "8863 – 1098T – Education Credit",
        image: "https://embed-ssl.wistia.com/deliveries/ac887fdcc83f7eb9cfda2df7ab49bf885d88a6bc.webp?image_crop_resized=640x326",
        video: "/videos/video21.mp4"
      },
      {
        id: 22,
        title: "1095A – Healthcare Reporting",
        image: "https://embed-ssl.wistia.com/deliveries/e7fa451f779987ff7aadfcfa838d9374e283683f.webp?image_crop_resized=640x325",
        video: "/videos/video22.mp4"
      },
      {
        id: 23,
        title: "Schedule A – Basic Navigation",
        image: "https://embed-ssl.wistia.com/deliveries/04ec1c71164013dc15f00aaf39e83c796d3c9355.webp?image_crop_resized=640x326",
        video: "/videos/video23.mp4"
      },
      {
        id: 24,
        title: "Schedule A – Navigation and Entry",
        image: "https://embed-ssl.wistia.com/deliveries/674f760764bc6ffb4c263dc2a11f6469c1c1ff90.webp?image_crop_resized=640x333",
        video: "/videos/video24.mp4"
      },
      {
        id: 25,
        title: "Schedule B – Navigation and Entry",
        image: "https://embed-ssl.wistia.com/deliveries/436d2b3ffe510345f025ebff1c9099fe5c728f49.webp?image_crop_resized=640x332",
        video: "/videos/video25.mp4"
      },
      {
        id: 26,
        title: "Schedule E – Navigation and Entry",
        image: "https://embed-ssl.wistia.com/deliveries/d40e51e9f0bd007102d532d813052aa241e6a1eb.webp?image_crop_resized=640x339",
        video: "/videos/video26.mp4"
      },
      {
        id: 27,
        title: "W-7 ITIN Application",
        image: "https://embed-ssl.wistia.com/deliveries/497f0ef98a7dafbcd7ce91b015b2cec96810aa2c.webp?image_crop_resized=640x329",
        video: "/videos/video27.mp4"
      },
      {
        id: 28,
        title: "First Time Home Buyer Credit – 5405",
        image: "https://embed-ssl.wistia.com/deliveries/f2650daa86b2f925042fbd0b6716f8083e3ed05f.webp?image_crop_resized=640x336",
        video: "/videos/video28.mp4"
      },
      {
        id: 29,
        title: "Depriciation Navigation and Entry",
        image: "https://embed-ssl.wistia.com/deliveries/137306fe974c334be573c716f966fa3093d40a02.webp?image_crop_resized=640x325",
        video: "/videos/video29.mp4"
      },
      {
        id: 30,
        title: "Car and Truck Expense – Mileage",
        image: "https://embed-ssl.wistia.com/deliveries/06a7b20c990ba2a4fc8b84912044b305e8566c05.webp?image_crop_resized=640x329",
        video: "/videos/video30.mp4"
      },
      {
        id: 31,
        title: "Amended – Fixing Another Offices Errors",
        image: "https://embed-ssl.wistia.com/deliveries/5d7628284e4dde4d1191bce6f660c3246a19926d.webp?image_crop_resized=640x326",
        video: "/videos/video31.mp4"
      },
      {
        id: 32,
        title: "Amended – Accepted Client Return",
        image: "https://embed-ssl.wistia.com/deliveries/1bd4663241a9eecc08c6186763a64294722187e1.webp?image_crop_resized=640x324",
        video: "/videos/video32.mp4"
      },
      {
        id: 33,
        title: "Application For Extension",
        image: "https://embed-ssl.wistia.com/deliveries/7fe0f67b8acc49cc443bde755dc88b88e430c620.webp?image_crop_resized=640x323",
        video: "/videos/video33.mp4"
      },
  // Add the rest of the cards here...
];

// API endpoint to fetch cards
app.get('/api/cards', (req, res) => {
  res.json(cards);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
